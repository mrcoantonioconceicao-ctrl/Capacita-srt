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
import { UserProgress } from '../types/course';

export const INITIAL_PROGRESS: UserProgress = {
  completedModules: [],
  quizScores: {},
  essayAnswers: {},
  essaySubmitted: {},
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
  signUpWithEmail: (email: string, pass: string, name: string) => Promise<void>;
  signInWithEmail: (email: string, pass: string) => Promise<void>;
  logout: () => Promise<void>;
  saveProgressToCloud: (progress: UserProgress) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [userProgress, setUserProgress] = useState<UserProgress>(INITIAL_PROGRESS);

  // Load user progress from Firestore or LocalStorage on Auth change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
      if (user) {
        // User logged in: load their specific isolated progress from Firestore
        const progressPath = `users/${user.uid}/progress/data`;
        const profilePath = `users/${user.uid}`;
        try {
          const progressSnap = await getDoc(doc(db, progressPath));
          const profileSnap = await getDoc(doc(db, profilePath));

          if (progressSnap.exists()) {
            const data = progressSnap.data() as UserProgress;
            setUserProgress({
              ...INITIAL_PROGRESS,
              ...data,
              userName: user.displayName || data.userName || user.email?.split('@')[0] || INITIAL_PROGRESS.userName,
              userEmail: user.email || data.userEmail || ''
            });
          } else {
            // First time login for this user: initialize progress with default/user info
            const newProgress: UserProgress = {
              ...INITIAL_PROGRESS,
              userName: user.displayName || user.email?.split('@')[0] || 'Aluno Capacita SRT',
              userEmail: user.email || '',
              startDate: new Date().toLocaleDateString('pt-BR')
            };
            setUserProgress(newProgress);
            await saveProgressToCloudForUser(user.uid, newProgress);
          }

          if (!profileSnap.exists()) {
            await setDoc(doc(db, profilePath), {
              userId: user.uid,
              userName: user.displayName || user.email || 'Aluno',
              userEmail: user.email || '',
              userRole: 'Cuidador de Residência Terapêutica (SRT)',
              srtUnit: 'Residencial Terapêutico Salomão (Blumenau/SC)',
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
            setUserProgress(JSON.parse(savedLocal));
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
        essayAnswers: progress.essayAnswers || {},
        essaySubmitted: progress.essaySubmitted || {},
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
      handleFirestoreError(error, OperationType.WRITE, path);
    }
  };

  const saveProgressToCloud = async (updatedProgress: UserProgress) => {
    if (currentUser) {
      await saveProgressToCloudForUser(currentUser.uid, updatedProgress);
    } else {
      localStorage.setItem('capacita_srt_progress', JSON.stringify(updatedProgress));
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

  const signUpWithEmail = async (email: string, pass: string, name: string) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, pass);
      if (res.user) {
        await updateProfile(res.user, { displayName: name });
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
      setUserProgress(INITIAL_PROGRESS);
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
