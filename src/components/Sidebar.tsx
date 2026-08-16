import React from 'react';
import { modulesData } from '../data/modulesData';
import { UserProgress } from '../types/course';
import {
  HeartHandshake,
  BookOpen,
  FileText,
  ShieldAlert,
  Pill,
  Scale,
  LayoutDashboard,
  Award,
  CheckCircle2,
  X,
  User,
  UserPlus,
  FileCheck2,
  Sparkles
} from 'lucide-react';

interface SidebarProps {
  currentTab: 'modules' | 'handover' | 'deescalation' | 'meds' | 'norms' | 'dashboard' | 'final-exam';
  selectedModuleId: number;
  completedModules: number[];
  completedPercent: number;
  userProgress: UserProgress;
  onTabChange: (tab: 'modules' | 'handover' | 'deescalation' | 'meds' | 'norms' | 'dashboard' | 'final-exam') => void;
  onSelectModule: (moduleId: number) => void;
  onOpenCertificate: () => void;
  onOpenAuthModal: () => void;
  isMobileOpen?: boolean;
  onCloseMobile?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  currentTab,
  selectedModuleId,
  completedModules,
  completedPercent,
  userProgress,
  onTabChange,
  onSelectModule,
  onOpenCertificate,
  onOpenAuthModal,
  isMobileOpen = false,
  onCloseMobile
}) => {
  const isFinalExamPassed = userProgress.finalExamPassed;
  const hasFinalExamScore = userProgress.finalExamScore !== undefined;

  return (
    <aside
      className={`bg-slate-900 text-white flex flex-col shrink-0 transition-all duration-300 z-50 ${
        isMobileOpen
          ? 'fixed inset-y-0 left-0 w-72 shadow-2xl block'
          : 'hidden lg:flex lg:w-72 lg:sticky lg:top-0 lg:h-screen lg:border-r lg:border-slate-800'
      }`}
    >
      {/* Sidebar Header / Brand */}
      <div className="p-5 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-teal-500 rounded-lg flex items-center justify-center shrink-0 shadow-md">
            <HeartHandshake className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-sm font-bold leading-tight text-white tracking-tight">Capacita SRT</h1>
            <p className="text-[10px] text-teal-400 uppercase tracking-widest font-semibold mt-0.5">
              Residencial Salomão
            </p>
          </div>
        </div>
        {onCloseMobile && (
          <button
            onClick={onCloseMobile}
            className="lg:hidden p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Navigation Sections */}
      <div className="flex-1 overflow-y-auto p-4 space-y-5 text-xs">
        {/* Student Profile Card */}
        <div className="bg-slate-800/90 p-3 rounded-xl border border-slate-700/80 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[10px] uppercase tracking-wider font-bold text-slate-400">Perfil do Aluno</span>
            <button
              onClick={() => {
                onOpenAuthModal();
                if (onCloseMobile) onCloseMobile();
              }}
              className="text-[10px] text-teal-400 hover:text-teal-300 font-bold underline"
            >
              {userProgress.isRegistered ? 'Editar' : 'Cadastrar'}
            </button>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-teal-600/30 border border-teal-500/50 flex items-center justify-center text-teal-400 shrink-0">
              <User className="w-4 h-4" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="font-bold text-slate-200 truncate">{userProgress.userName}</div>
              <div className="text-[10px] text-slate-400 truncate">{userProgress.userRole}</div>
            </div>
          </div>

          {!userProgress.isRegistered && (
            <button
              onClick={() => {
                onOpenAuthModal();
                if (onCloseMobile) onCloseMobile();
              }}
              className="w-full py-1.5 bg-amber-500/20 text-amber-300 hover:bg-amber-500/30 border border-amber-500/40 rounded-lg text-[11px] font-bold transition-colors flex items-center justify-center gap-1.5"
            >
              <UserPlus className="w-3.5 h-3.5" />
              <span>Cadastrar Aluno</span>
            </button>
          )}
        </div>

        {/* Section 1: Modules */}
        <div className="space-y-2">
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-2 flex items-center justify-between">
            <span>Módulos de Ensino (10Q)</span>
            <span className="text-teal-400">{completedModules.length}/5</span>
          </div>

          <div className="space-y-1">
            {modulesData.map((m) => {
              const isSelected = currentTab === 'modules' && selectedModuleId === m.id;
              const isCompleted = completedModules.includes(m.id);

              return (
                <button
                  key={m.id}
                  onClick={() => {
                    onTabChange('modules');
                    onSelectModule(m.id);
                    if (onCloseMobile) onCloseMobile();
                  }}
                  className={`w-full text-left px-3 py-2.5 rounded-lg font-medium transition-all flex items-center gap-2.5 ${
                    isSelected
                      ? 'bg-teal-600 text-white shadow-md font-semibold'
                      : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
                  }`}
                >
                  <span
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold shrink-0 ${
                      isCompleted
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                        : isSelected
                        ? 'bg-teal-400 text-teal-950'
                        : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    {isCompleted ? <CheckCircle2 className="w-3.5 h-3.5" /> : `0${m.id}`}
                  </span>
                  <span className="truncate">{m.shortTitle}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Section: Final Exam Callout */}
        <div className="space-y-2">
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-2 flex items-center justify-between">
            <span>Avaliação de Conclusão</span>
            <span className="text-amber-400 font-bold">20Q</span>
          </div>

          <button
            onClick={() => {
              onTabChange('final-exam');
              if (onCloseMobile) onCloseMobile();
            }}
            className={`w-full text-left p-3 rounded-xl border transition-all flex items-center justify-between gap-2.5 ${
              currentTab === 'final-exam'
                ? 'bg-gradient-to-r from-teal-700 to-slate-800 text-white border-teal-500 shadow-lg'
                : hasFinalExamScore && isFinalExamPassed
                ? 'bg-emerald-950/40 text-emerald-300 border-emerald-700/60 hover:bg-emerald-900/50'
                : 'bg-slate-800/90 text-slate-200 border-slate-700 hover:bg-slate-800 hover:border-slate-600'
            }`}
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <div
                className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                  hasFinalExamScore && isFinalExamPassed
                    ? 'bg-emerald-500 text-slate-950'
                    : 'bg-teal-500/20 text-teal-400 border border-teal-500/40'
                }`}
              >
                <FileCheck2 className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <div className="font-bold text-xs truncate">Prova Final (20Q)</div>
                <div className="text-[10px] text-slate-400">
                  {hasFinalExamScore
                    ? `${userProgress.finalExamScore}/20 acertos (${isFinalExamPassed ? 'Aprovado' : 'Pendente'})`
                    : 'Avaliação Integradora'}
                </div>
              </div>
            </div>

            {hasFinalExamScore && isFinalExamPassed ? (
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            ) : (
              <span className="text-[10px] bg-teal-500/20 text-teal-300 px-1.5 py-0.5 rounded font-bold shrink-0">
                Fazer
              </span>
            )}
          </button>
        </div>

        {/* Section 2: Interactive Simulators & Tools */}
        <div className="space-y-2">
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-2">
            Simuladores Práticos
          </div>

          <div className="space-y-1">
            <button
              onClick={() => {
                onTabChange('handover');
                if (onCloseMobile) onCloseMobile();
              }}
              className={`w-full text-left px-3 py-2.5 rounded-lg font-medium transition-all flex items-center gap-2.5 ${
                currentTab === 'handover'
                  ? 'bg-teal-600 text-white shadow-md'
                  : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
              }`}
            >
              <FileText className="w-4 h-4 shrink-0 text-teal-400" />
              <span className="truncate">Passagem SBAR</span>
            </button>

            <button
              onClick={() => {
                onTabChange('deescalation');
                if (onCloseMobile) onCloseMobile();
              }}
              className={`w-full text-left px-3 py-2.5 rounded-lg font-medium transition-all flex items-center gap-2.5 ${
                currentTab === 'deescalation'
                  ? 'bg-teal-600 text-white shadow-md'
                  : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
              }`}
            >
              <ShieldAlert className="w-4 h-4 shrink-0 text-teal-400" />
              <span className="truncate">Desescalada em Crise</span>
            </button>

            <button
              onClick={() => {
                onTabChange('meds');
                if (onCloseMobile) onCloseMobile();
              }}
              className={`w-full text-left px-3 py-2.5 rounded-lg font-medium transition-all flex items-center gap-2.5 ${
                currentTab === 'meds'
                  ? 'bg-teal-600 text-white shadow-md'
                  : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
              }`}
            >
              <Pill className="w-4 h-4 shrink-0 text-teal-400" />
              <span className="truncate">Gestão de Remédios (9 Certos)</span>
            </button>
          </div>
        </div>

        {/* Section 3: Reference & Student Area */}
        <div className="space-y-2">
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-2">
            Base & Painel
          </div>

          <div className="space-y-1">
            <button
              onClick={() => {
                onTabChange('norms');
                if (onCloseMobile) onCloseMobile();
              }}
              className={`w-full text-left px-3 py-2.5 rounded-lg font-medium transition-all flex items-center gap-2.5 ${
                currentTab === 'norms'
                  ? 'bg-teal-600 text-white shadow-md'
                  : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
              }`}
            >
              <Scale className="w-4 h-4 shrink-0 text-teal-400" />
              <span className="truncate">Compêndio Normativo</span>
            </button>

            <button
              onClick={() => {
                onTabChange('dashboard');
                if (onCloseMobile) onCloseMobile();
              }}
              className={`w-full text-left px-3 py-2.5 rounded-lg font-medium transition-all flex items-center gap-2.5 ${
                currentTab === 'dashboard'
                  ? 'bg-teal-600 text-white shadow-md'
                  : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
              }`}
            >
              <LayoutDashboard className="w-4 h-4 shrink-0 text-teal-400" />
              <span className="truncate">Painel do Aluno</span>
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar Footer Widget: Overall Progress */}
      <div className="p-4 bg-slate-950/80 border-t border-slate-800 space-y-3">
        <div className="flex items-center justify-between text-xs">
          <span className="text-slate-400 font-medium">Progresso Geral:</span>
          <span className="text-teal-400 font-bold">{completedPercent}%</span>
        </div>

        <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden border border-slate-700">
          <div
            className="bg-teal-500 h-full transition-all duration-300"
            style={{ width: `${completedPercent}%` }}
          />
        </div>

        <button
          onClick={() => {
            onOpenCertificate();
            if (onCloseMobile) onCloseMobile();
          }}
          className="w-full py-2 bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-sm"
        >
          <Award className="w-4 h-4" />
          <span>Certificado Oficial</span>
        </button>
      </div>
    </aside>
  );
};
