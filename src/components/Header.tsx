import React from 'react';
import { Award, Menu, BookOpen, FileText, ShieldAlert, Pill, Scale, LayoutDashboard, HeartHandshake, User, LogIn, FileCheck2, UserCheck } from 'lucide-react';
import { UserProgress } from '../types/course';
import { useAuth } from '../context/AuthContext';

interface HeaderProps {
  currentTab: 'modules' | 'handover' | 'deescalation' | 'meds' | 'norms' | 'dashboard' | 'final-exam' | 'glossary';
  userProgress: UserProgress;
  onTabChange: (tab: 'modules' | 'handover' | 'deescalation' | 'meds' | 'norms' | 'dashboard' | 'final-exam' | 'glossary') => void;
  onOpenCertificate: () => void;
  onOpenAuthModal: () => void;
  onToggleMobileSidebar: () => void;
  completedPercent: number;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  userProgress,
  onTabChange,
  onOpenCertificate,
  onOpenAuthModal,
  onToggleMobileSidebar,
  completedPercent
}) => {
  const { currentUser } = useAuth();

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between gap-3">
        {/* Mobile Menu Button + Brand Zone */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onToggleMobileSidebar}
            className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            title="Abrir Menu"
          >
            <Menu className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-teal-600 rounded flex items-center justify-center shrink-0 text-white shadow-xs">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <button
              onClick={() => onTabChange('modules')}
              className="text-slate-900 font-bold text-sm md:text-base tracking-tight whitespace-nowrap hover:text-teal-700 transition-colors"
            >
              Capacita SRT Salomão
            </button>
          </div>
        </div>

        {/* Desktop Quick Nav Links (PC/Notebook) */}
        <nav className="hidden xl:flex items-center space-x-1 overflow-x-auto">
          <button
            onClick={() => onTabChange('modules')}
            className={`px-3 py-1.5 rounded-md text-xs font-semibold whitespace-nowrap shrink-0 transition-colors flex items-center space-x-1.5 ${
              currentTab === 'modules'
                ? 'bg-teal-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Módulos (10Q)</span>
          </button>

          <button
            onClick={() => onTabChange('final-exam')}
            className={`px-3 py-1.5 rounded-md text-xs font-semibold whitespace-nowrap shrink-0 transition-colors flex items-center space-x-1.5 ${
              currentTab === 'final-exam'
                ? 'bg-teal-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`}
          >
            <FileCheck2 className="w-3.5 h-3.5" />
            <span>Prova Final (20Q)</span>
          </button>

          <button
            onClick={() => onTabChange('handover')}
            className={`px-3 py-1.5 rounded-md text-xs font-semibold whitespace-nowrap shrink-0 transition-colors flex items-center space-x-1.5 ${
              currentTab === 'handover'
                ? 'bg-teal-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Passagem SBAR</span>
          </button>

          <button
            onClick={() => onTabChange('deescalation')}
            className={`px-3 py-1.5 rounded-md text-xs font-semibold whitespace-nowrap shrink-0 transition-colors flex items-center space-x-1.5 ${
              currentTab === 'deescalation'
                ? 'bg-teal-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`}
          >
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>Desescalada</span>
          </button>

          <button
            onClick={() => onTabChange('meds')}
            className={`px-3 py-1.5 rounded-md text-xs font-semibold whitespace-nowrap shrink-0 transition-colors flex items-center space-x-1.5 ${
              currentTab === 'meds'
                ? 'bg-teal-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`}
          >
            <Pill className="w-3.5 h-3.5" />
            <span>Medicamentos</span>
          </button>

          <button
            onClick={() => onTabChange('glossary')}
            className={`px-3 py-1.5 rounded-md text-xs font-semibold whitespace-nowrap shrink-0 transition-colors flex items-center space-x-1.5 ${
              currentTab === 'glossary'
                ? 'bg-teal-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Glossário</span>
          </button>

          <button
            onClick={() => onTabChange('norms')}
            className={`px-3 py-1.5 rounded-md text-xs font-semibold whitespace-nowrap shrink-0 transition-colors flex items-center space-x-1.5 ${
              currentTab === 'norms'
                ? 'bg-teal-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`}
          >
            <Scale className="w-3.5 h-3.5" />
            <span>Leis e Normas</span>
          </button>

          <button
            onClick={() => onTabChange('dashboard')}
            className={`px-3 py-1.5 rounded-md text-xs font-semibold whitespace-nowrap shrink-0 transition-colors flex items-center space-x-1.5 ${
              currentTab === 'dashboard'
                ? 'bg-teal-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`}
          >
            <LayoutDashboard className="w-3.5 h-3.5" />
            <span>Painel</span>
          </button>
        </nav>

        {/* Primary Action Zone: User Login & Certificate */}
        <div className="flex items-center space-x-2 shrink-0">
          <button
            onClick={onOpenAuthModal}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors flex items-center space-x-1.5 border ${
              currentUser
                ? 'bg-teal-50 border-teal-300 text-teal-900 hover:bg-teal-100'
                : userProgress.isRegistered
                ? 'bg-slate-100 hover:bg-slate-200 border-slate-300 text-slate-800'
                : 'bg-amber-50 hover:bg-amber-100 border-amber-300 text-amber-900'
            }`}
            title={currentUser ? `Aluno: ${currentUser.displayName || currentUser.email}` : "Entrar / Trocar Aluno"}
          >
            {currentUser ? (
              <>
                <UserCheck className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                <span className="max-w-[100px] sm:max-w-[140px] truncate">{currentUser.displayName || userProgress.userName || 'Aluno'}</span>
              </>
            ) : userProgress.isRegistered ? (
              <>
                <User className="w-3.5 h-3.5 text-slate-600 shrink-0" />
                <span className="max-w-[100px] sm:max-w-[140px] truncate">{userProgress.userName}</span>
              </>
            ) : (
              <>
                <LogIn className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <span>Entrar / Cadastrar</span>
              </>
            )}
          </button>

          <button
            onClick={onOpenCertificate}
            className="bg-teal-600 hover:bg-teal-700 text-white font-bold px-3.5 py-2 rounded-lg text-xs whitespace-nowrap shrink-0 transition-colors flex items-center space-x-1.5 shadow-xs"
          >
            <Award className="w-4 h-4" />
            <span className="hidden sm:inline">Certificado</span>
            <span className="text-[10px] bg-teal-800 px-1.5 py-0.5 rounded text-teal-100 font-extrabold">
              {completedPercent}%
            </span>
          </button>
        </div>
      </div>

      {/* Mobile / Tablet Horizontal Scroll Bar (< xl) */}
      <div className="xl:hidden flex items-center space-x-1 px-4 py-2 bg-slate-50 overflow-x-auto border-t border-slate-200 text-xs scrollbar-none">
        <button
          onClick={() => onTabChange('modules')}
          className={`px-3 py-1 rounded-md text-xs font-semibold whitespace-nowrap shrink-0 transition-colors ${
            currentTab === 'modules' ? 'bg-teal-600 text-white' : 'text-slate-700 hover:bg-slate-200'
          }`}
        >
          Módulos
        </button>
        <button
          onClick={() => onTabChange('final-exam')}
          className={`px-3 py-1 rounded-md text-xs font-semibold whitespace-nowrap shrink-0 transition-colors ${
            currentTab === 'final-exam' ? 'bg-teal-600 text-white' : 'text-slate-700 hover:bg-slate-200'
          }`}
        >
          Prova Final (20Q)
        </button>
        <button
          onClick={() => onTabChange('glossary')}
          className={`px-3 py-1 rounded-md text-xs font-semibold whitespace-nowrap shrink-0 transition-colors ${
            currentTab === 'glossary' ? 'bg-teal-600 text-white' : 'text-slate-700 hover:bg-slate-200'
          }`}
        >
          Glossário
        </button>
        <button
          onClick={() => onTabChange('handover')}
          className={`px-3 py-1 rounded-md text-xs font-semibold whitespace-nowrap shrink-0 transition-colors ${
            currentTab === 'handover' ? 'bg-teal-600 text-white' : 'text-slate-700 hover:bg-slate-200'
          }`}
        >
          Passagem SBAR
        </button>
        <button
          onClick={() => onTabChange('deescalation')}
          className={`px-3 py-1 rounded-md text-xs font-semibold whitespace-nowrap shrink-0 transition-colors ${
            currentTab === 'deescalation' ? 'bg-teal-600 text-white' : 'text-slate-700 hover:bg-slate-200'
          }`}
        >
          Desescalada
        </button>
        <button
          onClick={() => onTabChange('meds')}
          className={`px-3 py-1 rounded-md text-xs font-semibold whitespace-nowrap shrink-0 transition-colors ${
            currentTab === 'meds' ? 'bg-teal-600 text-white' : 'text-slate-700 hover:bg-slate-200'
          }`}
        >
          Medicamentos
        </button>
        <button
          onClick={() => onTabChange('norms')}
          className={`px-3 py-1 rounded-md text-xs font-semibold whitespace-nowrap shrink-0 transition-colors ${
            currentTab === 'norms' ? 'bg-teal-600 text-white' : 'text-slate-700 hover:bg-slate-200'
          }`}
        >
          Leis e Normas
        </button>
        <button
          onClick={() => onTabChange('dashboard')}
          className={`px-3 py-1 rounded-md text-xs font-semibold whitespace-nowrap shrink-0 transition-colors ${
            currentTab === 'dashboard' ? 'bg-teal-600 text-white' : 'text-slate-700 hover:bg-slate-200'
          }`}
        >
          Painel
        </button>
      </div>
    </header>
  );
};
