import React, { useState, useEffect } from 'react';
import { modulesData } from './data/modulesData';
import { UserProgress } from './types/course';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { ModuleViewer } from './components/ModuleViewer';
import { FinalExamViewer } from './components/FinalExamViewer';
import { GlossaryViewer } from './components/GlossaryViewer';
import { HandoverSimulator } from './components/Simulators/HandoverSimulator';
import { DeescalationSimulator } from './components/Simulators/DeescalationSimulator';
import { MedicationChecker } from './components/Simulators/MedicationChecker';
import { NormsCompendium } from './components/NormsCompendium';
import { ProgressDashboard } from './components/ProgressDashboard';
import { CertificateModal } from './components/CertificateModal';
import { AuthModal } from './components/AuthModal';
import { PrivacyPolicyModal } from './components/PrivacyPolicyModal';
import { CookieConsentBanner } from './components/CookieConsentBanner';
import { DailyTipBanner } from './components/DailyTipBanner';
import { AuthProvider, useAuth } from './context/AuthContext';
import { BookOpen, CheckCircle2, FileText, ShieldAlert, Pill, Scale, LayoutDashboard, FileCheck2, ShieldCheck, Lock } from 'lucide-react';

function AppContent() {
  const { userProgress, setUserProgress, saveProgressToCloud } = useAuth();

  const [hasAcceptedConsent, setHasAcceptedConsent] = useState<boolean>(() => {
    return localStorage.getItem('capacita_srt_lgpd_consent') === 'true';
  });

  const [activeTab, setActiveTab] = useState<'modules' | 'handover' | 'deescalation' | 'meds' | 'norms' | 'dashboard' | 'final-exam' | 'glossary'>('modules');
  const [selectedModuleId, setSelectedModuleId] = useState<number>(1);
  const [showCertificateModal, setShowCertificateModal] = useState<boolean>(false);
  const [showAuthModal, setShowAuthModal] = useState<boolean>(false);
  const [showPrivacyPolicyModal, setShowPrivacyPolicyModal] = useState<boolean>(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState<boolean>(false);

  const handleAcceptConsent = () => {
    localStorage.setItem('capacita_srt_lgpd_consent', 'true');
    setHasAcceptedConsent(true);
  };

  const currentModule = modulesData.find((m) => m.id === selectedModuleId) || modulesData[0];

  const handleQuizCompleted = (moduleId: number, score: number) => {
    setUserProgress((prev) => {
      const updatedScores = { ...prev.quizScores, [moduleId]: score };
      const isEssayDone = prev.essaySubmitted[moduleId];
      const newCompleted = isEssayDone && !prev.completedModules.includes(moduleId)
        ? [...prev.completedModules, moduleId]
        : prev.completedModules;

      const nextProg: UserProgress = {
        ...prev,
        quizScores: updatedScores,
        completedModules: newCompleted,
        completionDate: newCompleted.length === 5 ? new Date().toLocaleDateString('pt-BR') : prev.completionDate
      };
      saveProgressToCloud(nextProg);
      return nextProg;
    });
  };

  const handleEssaySubmitted = (moduleId: number, answerText: string) => {
    setUserProgress((prev) => {
      const updatedAnswers = { ...prev.essayAnswers, [moduleId]: answerText };
      const updatedSubmitted = { ...prev.essaySubmitted, [moduleId]: true };
      const isQuizDone = prev.quizScores[moduleId] !== undefined;
      const newCompleted = isQuizDone && !prev.completedModules.includes(moduleId)
        ? [...prev.completedModules, moduleId]
        : prev.completedModules;

      const nextProg: UserProgress = {
        ...prev,
        essayAnswers: updatedAnswers,
        essaySubmitted: updatedSubmitted,
        completedModules: newCompleted,
        completionDate: newCompleted.length === 5 ? new Date().toLocaleDateString('pt-BR') : prev.completionDate
      };
      saveProgressToCloud(nextProg);
      return nextProg;
    });
  };

  const handleFinalExamCompleted = (score: number, passed: boolean, answers: Record<string, number>) => {
    setUserProgress((prev) => {
      const nextProg: UserProgress = {
        ...prev,
        finalExamScore: score,
        finalExamPassed: passed,
        finalExamAnswers: answers,
        completionDate: prev.completionDate || new Date().toLocaleDateString('pt-BR')
      };
      saveProgressToCloud(nextProg);
      return nextProg;
    });
  };

  const handleUpdateUserName = (name: string) => {
    setUserProgress((prev) => {
      const nextProg = { ...prev, userName: name };
      saveProgressToCloud(nextProg);
      return nextProg;
    });
  };

  const handleSaveProfile = (profileData: {
    userName: string;
    userRole: string;
    userEmail: string;
    cpfOrRegistration: string;
    srtUnit: string;
  }) => {
    setUserProgress((prev) => {
      const nextProg = {
        ...prev,
        ...profileData,
        isRegistered: true
      };
      saveProgressToCloud(nextProg);
      return nextProg;
    });
  };

  const handleNextModule = () => {
    if (selectedModuleId < 5) {
      setSelectedModuleId((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevModule = () => {
    if (selectedModuleId > 1) {
      setSelectedModuleId((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const completedModulesCount = userProgress.completedModules.length;
  const completedPercent = Math.round((completedModulesCount / modulesData.length) * 100);

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans text-slate-800 antialiased selection:bg-teal-500 selection:text-white">
      <div className="flex-1 flex flex-col lg:flex-row">
        {/* Sidebar Navigation */}
        <Sidebar
          currentTab={activeTab}
          selectedModuleId={selectedModuleId}
          completedModules={userProgress.completedModules}
          completedPercent={completedPercent}
          userProgress={userProgress}
          onTabChange={(tab) => {
            setActiveTab(tab);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onSelectModule={(id) => setSelectedModuleId(id)}
          onOpenCertificate={() => setShowCertificateModal(true)}
          onOpenAuthModal={() => setShowAuthModal(true)}
          isMobileOpen={isMobileSidebarOpen}
          onCloseMobile={() => setIsMobileSidebarOpen(false)}
        />

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Header */}
          <Header
            currentTab={activeTab}
            userProgress={userProgress}
            onTabChange={(tab) => {
              setActiveTab(tab);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenCertificate={() => setShowCertificateModal(true)}
            onOpenAuthModal={() => setShowAuthModal(true)}
            onToggleMobileSidebar={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
            completedPercent={completedPercent}
          />

          {/* Content Container */}
          <main className="flex-1 max-w-6xl w-full mx-auto p-4 md:p-6 lg:p-8 space-y-6 pb-24 lg:pb-8">
            {activeTab === 'modules' && (
              <div className="space-y-6">
                {/* Daily Tip Banner - Luta Antimanicomial Reflection */}
                <DailyTipBanner />

                {/* Quick Module Selector Strip */}
                <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-xs flex items-center justify-between overflow-x-auto gap-2 scrollbar-none">
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider shrink-0 px-2 flex items-center space-x-1.5">
                    <BookOpen className="w-4 h-4 text-teal-600" />
                    <span className="hidden sm:inline">Módulos de Formação:</span>
                    <span className="sm:hidden">Módulos:</span>
                  </div>
                  <div className="flex items-center space-x-2 overflow-x-auto">
                    {modulesData.map((m) => {
                      const isSelected = m.id === selectedModuleId;
                      const isCompleted = userProgress.completedModules.includes(m.id);

                      return (
                        <button
                          key={m.id}
                          onClick={() => setSelectedModuleId(m.id)}
                          className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap shrink-0 transition-all flex items-center space-x-1.5 ${
                            isSelected
                              ? 'bg-teal-600 text-white shadow-xs'
                              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                          }`}
                        >
                          {isCompleted && <CheckCircle2 className="w-3.5 h-3.5 text-teal-300" />}
                          <span>{m.id}. {m.shortTitle}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Active Module Content */}
                <ModuleViewer
                  module={currentModule}
                  userProgress={userProgress}
                  onQuizCompleted={handleQuizCompleted}
                  onEssaySubmitted={handleEssaySubmitted}
                  onNextModule={handleNextModule}
                  onPrevModule={handlePrevModule}
                  isFirstModule={selectedModuleId === 1}
                  isLastModule={selectedModuleId === 5}
                />
              </div>
            )}

            {activeTab === 'final-exam' && (
              <FinalExamViewer
                userProgress={userProgress}
                onExamCompleted={handleFinalExamCompleted}
                onOpenCertificate={() => setShowCertificateModal(true)}
                onGoToModules={() => setActiveTab('modules')}
              />
            )}

            {activeTab === 'glossary' && <GlossaryViewer />}

            {activeTab === 'handover' && <HandoverSimulator />}

            {activeTab === 'deescalation' && <DeescalationSimulator />}

            {activeTab === 'meds' && <MedicationChecker />}

            {activeTab === 'norms' && <NormsCompendium />}

            {activeTab === 'dashboard' && (
              <ProgressDashboard
                modules={modulesData}
                userProgress={userProgress}
                onUpdateUserName={handleUpdateUserName}
                onSelectModule={(id) => {
                  setSelectedModuleId(id);
                  setActiveTab('modules');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onOpenCertificate={() => setShowCertificateModal(true)}
                onOpenAuthModal={() => setShowAuthModal(true)}
                onOpenFinalExam={() => {
                  setActiveTab('final-exam');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />
            )}
          </main>
        </div>
      </div>

      {/* Footer Legal & Compliance */}
      <footer className="bg-slate-900 text-slate-400 py-6 border-t border-slate-800 text-xs">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center md:text-left">
            <p className="font-bold text-slate-200">
              Capacita SRT Salomão • Plataforma de Capacitação em Saúde Mental
            </p>
            <p className="text-slate-500 text-[11px]">
              Residencial Terapêutico Salomão • Blumenau/SC • Em conformidade com a Lei nº 10.216/2001 e Portaria GM/MS nº 106/2000.
            </p>
          </div>

          <div className="flex items-center space-x-4 text-[11px]">
            <button
              onClick={() => setShowPrivacyPolicyModal(true)}
              className="text-slate-400 hover:text-teal-400 underline transition-colors"
            >
              Termos de Uso e Privacidade (LGPD)
            </button>
            <span>•</span>
            <span className="text-slate-500">Certificado Oficial 40h</span>
          </div>
        </div>
      </footer>

      {/* Modals & Banners */}
      {showCertificateModal && (
        <CertificateModal
          userProgress={userProgress}
          onClose={() => setShowCertificateModal(false)}
          onOpenAuthModal={() => {
            setShowCertificateModal(false);
            setShowAuthModal(true);
          }}
        />
      )}

      {showAuthModal && (
        <AuthModal
          userProgress={userProgress}
          onSaveProfile={handleSaveProfile}
          onClose={() => setShowAuthModal(false)}
        />
      )}

      {showPrivacyPolicyModal && (
        <PrivacyPolicyModal onClose={() => setShowPrivacyPolicyModal(false)} />
      )}

      {!hasAcceptedConsent && (
        <CookieConsentBanner
          onAccept={handleAcceptConsent}
          onOpenPrivacyModal={() => setShowPrivacyPolicyModal(true)}
        />
      )}
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}
