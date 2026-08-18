import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  User,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, googleProvider, db, handleFirestoreError, OperationType } from '../lib/firebase';
import { UserProgress, EssayEvaluation } from '../types/course';

export const INITIAL_PROGRESS: UserProgress = {
  completedModules: [],
  quizScores: {},
  quizAnswers: {},
  essayAnswers: {},
  essaySubmitted: {},
  essayEvaluations: {},
  userName: 'Cuidador(a) de Saúde Mental',
  userRole: 'Cuidador de Residência Terapêutica (SRT)',
  userEmail: '',
  cpfOrRegistration: '',
  srtUnit: 'Residencial Terapêutico Salomão (Blumenau/SC)',
  isRegistered: false,
  startDate: new Date().toLocaleDateString('pt-BR')
};

interface AuthContextType {
  currentUser: User | null;
  loading: boolean;
  userProgress: UserProgress;
  setUserProgress: React.Dispatch<React.SetStateAction<UserProgress>>;
  signInWithGoogle: () => Promise<void>;
  signUpWithEmail: (
    email: string,
    pass: string,
    name: string,
    role?: string,
    cpf?: string,
    srtUnit?: string
  ) => Promise<void>;
  signInWithEmail: (email: string, pass: string) => Promise<void>;
  logout: () => Promise<void>;
  saveProgressToCloud: (progress: UserProgress) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [userProgress, setUserProgress] = useState<UserProgress>(() => {
    try {
      const saved = localStorage.getItem('capacita_srt_progress');
      if (saved) return { ...INITIAL_PROGRESS, ...JSON.parse(saved) };
    } catch (e) {
      console.warn('Error reading initial local storage:', e);
    }
    return INITIAL_PROGRESS;
  });

  // Load user progress from Firestore or LocalStorage on Auth change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
      if (user) {
        // User logged in: load their specific isolated progress from Firestore
        const progressPath = `users/${user.uid}/progress/data`;
        const profilePath = `users/${user.uid}`;
        try {
          // Read local storage in case the user answered questions as guest or while offline
          const savedLocalRaw = localStorage.getItem('capacita_srt_progress');
          let localProg: UserProgress | null = null;
          if (savedLocalRaw) {
            try {
              localProg = JSON.parse(savedLocalRaw);
            } catch (e) {}
          }

          const progressSnap = await getDoc(doc(db, progressPath));
          const profileSnap = await getDoc(doc(db, profilePath));

          if (progressSnap.exists()) {
            const data = progressSnap.data() as UserProgress;
            // Merge cloud data with local progress so answers are never lost
            const mergedQuizScores = { ...(data.quizScores || {}), ...(localProg?.quizScores || {}) };
            const mergedQuizAnswers = { ...(data.quizAnswers || {}), ...(localProg?.quizAnswers || {}) };
            const mergedEssayAnswers = { ...(data.essayAnswers || {}), ...(localProg?.essayAnswers || {}) };
            const mergedEssaySubmitted = { ...(data.essaySubmitted || {}), ...(localProg?.essaySubmitted || {}) };
            const mergedEssayEvaluations = { ...(data.essayEvaluations || {}), ...(localProg?.essayEvaluations || {}) };
            const mergedCompleted = Array.from(
              new Set([...(data.completedModules || []), ...(localProg?.completedModules || [])])
            );

            const merged: UserProgress = {
              ...INITIAL_PROGRESS,
              ...data,
              quizScores: mergedQuizScores,
              quizAnswers: mergedQuizAnswers,
              essayAnswers: mergedEssayAnswers,
              essaySubmitted: mergedEssaySubmitted,
              essayEvaluations: mergedEssayEvaluations,
              completedModules: mergedCompleted,
              finalExamScore: data.finalExamScore ?? localProg?.finalExamScore ?? undefined,
              finalExamPassed: data.finalExamPassed ?? localProg?.finalExamPassed ?? undefined,
              finalExamAnswers: data.finalExamAnswers || localProg?.finalExamAnswers || {},
              userName: user.displayName || data.userName || localProg?.userName || INITIAL_PROGRESS.userName,
              userEmail: user.email || data.userEmail || localProg?.userEmail || '',
              userRole: data.userRole || localProg?.userRole || INITIAL_PROGRESS.userRole,
              cpfOrRegistration: data.cpfOrRegistration || localProg?.cpfOrRegistration || '',
              srtUnit: data.srtUnit || localProg?.srtUnit || INITIAL_PROGRESS.srtUnit,
              isRegistered: true
            };

            setUserProgress(merged);
            localStorage.setItem('capacita_srt_progress', JSON.stringify(merged));
            await saveProgressToCloudForUser(user.uid, merged);
          } else {
            // First time login for this user: initialize progress preserving any local answers
            const newProgress: UserProgress = {
              ...INITIAL_PROGRESS,
              ...(localProg || {}),
              userName: user.displayName || localProg?.userName || user.email?.split('@')[0] || 'Aluno Capacita SRT',
              userEmail: user.email || localProg?.userEmail || '',
              isRegistered: true,
              startDate: localProg?.startDate || new Date().toLocaleDateString('pt-BR')
            };
            setUserProgress(newProgress);
            localStorage.setItem('capacita_srt_progress', JSON.stringify(newProgress));
            await saveProgressToCloudForUser(user.uid, newProgress);
          }

          if (!profileSnap.exists()) {
            await setDoc(doc(db, profilePath), {
              userId: user.uid,
              userName: user.displayName || user.email || 'Aluno',
              userEmail: user.email || '',
              userRole: localProg?.userRole || 'Cuidador de Residência Terapêutica (SRT)',
              srtUnit: localProg?.srtUnit || 'Residencial Terapêutico Salomão (Blumenau/SC)',
              createdAt: new Date().toISOString(),
              updatedAt: new Date().toISOString()
            });
          }
        } catch (error) {
          console.error('Error loading user progress from Firestore:', error);
        }
      } else {
        // Unauthenticated visitor: fallback to guest local storage
        const savedLocal = localStorage.getItem('capacita_srt_progress');
        if (savedLocal) {
          try {
            setUserProgress({ ...INITIAL_PROGRESS, ...JSON.parse(savedLocal) });
          } catch (e) {
            setUserProgress(INITIAL_PROGRESS);
          }
        } else {
          setUserProgress(INITIAL_PROGRESS);
        }
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const saveProgressToCloudForUser = async (uid: string, progress: UserProgress) => {
    const path = `users/${uid}/progress/data`;
    try {
      await setDoc(doc(db, path), {
        userId: uid,
        completedModules: progress.completedModules || [],
        quizScores: progress.quizScores || {},
        quizAnswers: progress.quizAnswers || {},
        essayAnswers: progress.essayAnswers || {},
        essaySubmitted: progress.essaySubmitted || {},
        essayEvaluations: progress.essayEvaluations || {},
        finalExamScore: progress.finalExamScore ?? null,
        finalExamPassed: progress.finalExamPassed ?? null,
        finalExamAnswers: progress.finalExamAnswers || {},
        userName: progress.userName || '',
        userRole: progress.userRole || '',
        userEmail: progress.userEmail || '',
        cpfOrRegistration: progress.cpfOrRegistration || '',
        srtUnit: progress.srtUnit || '',
        isRegistered: progress.isRegistered || false,
        startDate: progress.startDate || new Date().toLocaleDateString('pt-BR'),
        completionDate: progress.completionDate || '',
        updatedAt: new Date().toISOString()
      });
    } catch (error) {
      console.warn('Could not save to Firestore, local state preserved:', error);
    }
  };

  const saveProgressToCloud = async (updatedProgress: UserProgress) => {
    // Always persist to localStorage first so progress is NEVER lost
    try {
      localStorage.setItem('capacita_srt_progress', JSON.stringify(updatedProgress));
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }

    if (currentUser) {
      await saveProgressToCloudForUser(currentUser.uid, updatedProgress);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error('Google Sign-In Error:', error);
      throw error;
    }
  };

  const signUpWithEmail = async (
    email: string,
    pass: string,
    name: string,
    role?: string,
    cpf?: string,
    srtUnit?: string
  ) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, pass);
      if (res.user) {
        await updateProfile(res.user, { displayName: name });
        const userRole = role || 'Cuidador de Residência Terapêutica (SRT)';
        const userCpf = cpf || '';
        const userSrtUnit = srtUnit || 'Residencial Terapêutico Salomão (Blumenau/SC)';

        const profilePath = `users/${res.user.uid}`;
        await setDoc(doc(db, profilePath), {
          userId: res.user.uid,
          userName: name,
          userEmail: email,
          userRole,
          cpfOrRegistration: userCpf,
          srtUnit: userSrtUnit,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        });

        const initialUserProg: UserProgress = {
          ...INITIAL_PROGRESS,
          userName: name,
          userEmail: email,
          userRole,
          cpfOrRegistration: userCpf,
          srtUnit: userSrtUnit,
          isRegistered: true,
          startDate: new Date().toLocaleDateString('pt-BR')
        };
        setUserProgress(initialUserProg);
        await saveProgressToCloudForUser(res.user.uid, initialUserProg);
      }
    } catch (error) {
      console.error('Email Sign-Up Error:', error);
      throw error;
    }
  };

  const signInWithEmail = async (email: string, pass: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, pass);
    } catch (error) {
      console.error('Email Sign-In Error:', error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      // Keep initial progress or clear local guest cache on explicit logout
      setUserProgress(INITIAL_PROGRESS);
      localStorage.removeItem('capacita_srt_progress');
    } catch (error) {
      console.error('Logout Error:', error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        loading,
        userProgress,
        setUserProgress,
        signInWithGoogle,
        signUpWithEmail,
        signInWithEmail,
        logout,
        saveProgressToCloud
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
