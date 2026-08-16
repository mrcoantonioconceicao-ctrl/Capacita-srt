import React from 'react';
import { modulesData } from '../data/modulesData';
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
  X
} from 'lucide-react';

interface SidebarProps {
  currentTab: 'modules' | 'handover' | 'deescalation' | 'meds' | 'norms' | 'dashboard';
  selectedModuleId: number;
  completedModules: number[];
  completedPercent: number;
  onTabChange: (tab: 'modules' | 'handover' | 'deescalation' | 'meds' | 'norms' | 'dashboard') => void;
  onSelectModule: (moduleId: number) => void;
  onOpenCertificate: () => void;
  isMobileOpen?: boolean;
  onCloseMobile?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  currentTab,
  selectedModuleId,
  completedModules,
  completedPercent,
  onTabChange,
  onSelectModule,
  onOpenCertificate,
  isMobileOpen = false,
  onCloseMobile
}) => {
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
      <div className="flex-1 overflow-y-auto p-4 space-y-6 text-xs">
        {/* Section 1: Modules */}
        <div className="space-y-2">
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-2 flex items-center justify-between">
            <span>Módulos do Curso</span>
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

        {/* Section 2: Interactive Simulators & Tools */}
        <div className="space-y-2">
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-2">
            Simuladores & Prática
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
              <span className="truncate">Passagem de Plantão SBAR</span>
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
              <span className="truncate">Desescalada Verbal em Crise</span>
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
            Base & Progresso
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
