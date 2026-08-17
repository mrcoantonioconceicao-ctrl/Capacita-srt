import React, { useState } from 'react';
import { UserProgress, Module } from '../types/course';
import { ANTIMANICOMIAL_TIPS } from './DailyTipBanner';
import {
  Award,
  CheckCircle2,
  FileText,
  HelpCircle,
  User,
  BarChart2,
  Lightbulb,
  RefreshCw,
  Quote,
  Copy,
  Check,
  Mail,
  Shield,
  Building2,
  UserPlus,
  Edit3,
  FileCheck2,
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface ProgressDashboardProps {
  modules: Module[];
  userProgress: UserProgress;
  onUpdateUserName: (name: string) => void;
  onSelectModule: (moduleId: number) => void;
  onOpenCertificate: () => void;
  onOpenAuthModal?: () => void;
  onOpenFinalExam?: () => void;
}

  const DAILY_TIPS = ANTIMANICOMIAL_TIPS;

export const ProgressDashboard: React.FC<ProgressDashboardProps> = ({
  modules,
  userProgress,
  onUpdateUserName,
  onSelectModule,
  onOpenCertificate,
  onOpenAuthModal,
  onOpenFinalExam
}) => {
  const [tipIndex, setTipIndex] = useState<number>(0);
  const [copied, setCopied] = useState<boolean>(false);

  const currentTip = DAILY_TIPS[tipIndex];

  const handleNextTip = () => {
    setTipIndex((prev) => (prev + 1) % DAILY_TIPS.length);
    setCopied(false);
  };

  const handleCopyTip = () => {
    navigator.clipboard.writeText(`"${currentTip.quote}" — ${currentTip.author}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const completedModulesCount = userProgress.completedModules.length;
  const progressPercent = Math.round((completedModulesCount / modules.length) * 100);
  const isFinalExamPassed = userProgress.finalExamPassed;
  const hasFinalExamScore = userProgress.finalExamScore !== undefined;

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 md:p-8 space-y-8 shadow-sm max-w-5xl mx-auto text-slate-800">
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-200">
        <div className="space-y-1">
          <div className="flex items-center space-x-2 text-xs font-bold text-teal-700 uppercase tracking-wider">
            <BarChart2 className="w-4 h-4" />
            <span>Painel do Aluno & Capacitação Continuada (40h)</span>
          </div>
          <h2 className="text-2xl font-bold text-slate-800">Residencial Terapêutico Salomão</h2>
          <p className="text-xs text-slate-500">
            Acompanhe seu progresso de aprendizagem nos 5 módulos e na Prova Final Integradora
          </p>
        </div>

        <div className="flex items-center space-x-4 bg-slate-50 p-4 rounded-lg border border-slate-200">
          <div className="text-center">
            <span className="text-2xl font-extrabold text-teal-600">{progressPercent}%</span>
            <span className="text-[10px] text-slate-500 block uppercase font-bold">Módulos</span>
          </div>
          <div className="w-32 bg-slate-200 h-2 rounded-full overflow-hidden">
            <div
              className="bg-teal-600 h-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <button
            onClick={onOpenCertificate}
            className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-4 py-2 rounded text-xs transition-colors flex items-center space-x-1.5 shadow-xs"
          >
            <Award className="w-4 h-4" />
            <span>Ver Certificado</span>
          </button>
        </div>
      </div>

      {/* Final Exam Highlight Banner */}
      <div className="bg-gradient-to-r from-teal-900 via-slate-900 to-slate-800 text-white p-6 rounded-2xl shadow-md space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center space-x-3.5">
            <div className="w-12 h-12 rounded-xl bg-teal-500 text-white flex items-center justify-center font-bold shrink-0 shadow-lg">
              <FileCheck2 className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-[10px] bg-teal-800/80 text-teal-300 px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                  20 Questões Integradoras
                </span>
                {hasFinalExamScore && isFinalExamPassed && (
                  <span className="text-[10px] bg-emerald-500 text-slate-950 px-2 py-0.5 rounded font-extrabold flex items-center space-x-1">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Aprovado</span>
                  </span>
                )}
              </div>
              <h3 className="text-base md:text-lg font-bold text-white mt-1">
                Prova Final de Conclusão do Curso
              </h3>
              <p className="text-xs text-slate-300">
                {hasFinalExamScore
                  ? `Sua nota registrada: ${userProgress.finalExamScore} / 20 acertos (${Math.round(
                      (userProgress.finalExamScore / 20) * 100
                    )}%).`
                  : 'Avaliação abrangente sobre leis, manejo de crises, cuidados e medicação (mínimo 14/20).'}
              </p>
            </div>
          </div>

          <button
            onClick={onOpenFinalExam}
            className="bg-teal-500 hover:bg-teal-400 text-slate-950 font-extrabold px-5 py-2.5 rounded-xl text-xs transition-all flex items-center space-x-2 shrink-0 self-start sm:self-auto shadow-md"
          >
            <span>{hasFinalExamScore ? 'Revisar / Refazer Prova' : 'Iniciar Prova Final'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Cadastro / Ficha do Aluno Card */}
      <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-lg bg-teal-600 text-white flex items-center justify-center font-bold shrink-0">
              <User className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-800">Ficha do Aluno Cadastrado</h3>
              <p className="text-[11px] text-slate-500">Dados do profissional autenticados no sistema</p>
            </div>
          </div>

          {onOpenAuthModal && (
            <button
              onClick={onOpenAuthModal}
              className="bg-white hover:bg-slate-100 border border-slate-300 text-slate-700 font-bold px-3 py-1.5 rounded-lg text-xs transition-colors flex items-center space-x-1.5 shrink-0 self-start sm:self-auto"
            >
              {userProgress.isRegistered ? (
                <>
                  <Edit3 className="w-3.5 h-3.5 text-teal-600" />
                  <span>Editar Cadastro</span>
                </>
              ) : (
                <>
                  <UserPlus className="w-3.5 h-3.5 text-teal-600" />
                  <span>Cadastrar Aluno</span>
                </>
              )}
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="bg-white p-3 rounded-lg border border-slate-200 space-y-1">
            <span className="text-[10px] uppercase tracking-wider font-bold text-slate-400 block">
              Nome Completo (Certificado)
            </span>
            <div className="font-bold text-slate-800 flex items-center space-x-1.5">
              <User className="w-3.5 h-3.5 text-teal-600 shrink-0" />
              <input
                type="text"
                value={userProgress.userName}
                onChange={(e) => onUpdateUserName(e.target.value)}
                className="bg-transparent font-bold text-slate-800 focus:outline-none focus:underline w-full"
              />
            </div>
          </div>

          <div className="bg-white p-3 rounded-lg border border-slate-200 space-y-1">
            <span className="text-[10px] uppercase tracking-wider font-bold text-slate-400 block">
              E-mail Registrado
            </span>
            <div className="font-semibold text-slate-700 flex items-center space-x-1.5 truncate">
              <Mail className="w-3.5 h-3.5 text-teal-600 shrink-0" />
              <span className="truncate">{userProgress.userEmail || 'Não cadastrado'}</span>
            </div>
          </div>

          <div className="bg-white p-3 rounded-lg border border-slate-200 space-y-1">
            <span className="text-[10px] uppercase tracking-wider font-bold text-slate-400 block">
              CPF / Registro & Unidade
            </span>
            <div className="font-semibold text-slate-700 flex items-center space-x-1.5 truncate">
              <Building2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
              <span className="truncate">
                {userProgress.cpfOrRegistration ? `${userProgress.cpfOrRegistration} • ` : ''}
                {userProgress.srtUnit || 'Residencial Salomão'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Widget Dica do Dia / Luta Antimanicomial */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-6 rounded-xl shadow-md relative overflow-hidden space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-slate-700/80">
          <div className="flex items-center space-x-2">
            <div className="p-1.5 bg-teal-500/20 text-teal-400 rounded-md">
              <Lightbulb className="w-4 h-4" />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-teal-400">
              Dica do Dia — Luta Antimanicomial & Cuidado Humano
            </span>
          </div>
          <span className="text-[10px] bg-slate-700 text-slate-300 font-bold px-2 py-0.5 rounded uppercase tracking-wider">
            {currentTip.tag}
          </span>
        </div>

        <div className="relative z-10 space-y-3">
          <div className="flex items-start gap-3">
            <Quote className="w-8 h-8 text-teal-500/40 shrink-0 mt-0.5" />
            <p className="text-sm md:text-base font-medium text-slate-100 leading-relaxed italic">
              "{currentTip.quote}"
            </p>
          </div>

          <div className="text-right text-xs font-semibold text-teal-300">
            — {currentTip.author}
          </div>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-slate-700/80 text-xs text-slate-300">
          <button
            onClick={handleCopyTip}
            className="text-slate-300 hover:text-white flex items-center space-x-1.5 transition-colors font-medium text-[11px]"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400 font-bold">Copiado para área de transferência!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-slate-400" />
                <span>Copiar Dica</span>
              </>
            )}
          </button>

          <button
            onClick={handleNextTip}
            className="bg-slate-800 hover:bg-slate-700 text-teal-300 hover:text-white px-3 py-1.5 rounded-md font-bold text-[11px] transition-colors flex items-center space-x-1.5 border border-slate-700"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Outra Dica ({tipIndex + 1}/{DAILY_TIPS.length})</span>
          </button>
        </div>
      </div>

      {/* Modules Progress List */}
      <div className="space-y-4">
        <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
          Status de Conclusão por Módulo Operacional (10 Questões Cada):
        </h3>

        <div className="grid grid-cols-1 gap-3">
          {modules.map((m) => {
            const isCompleted = userProgress.completedModules.includes(m.id);
            const quizScore = userProgress.quizScores[m.id];
            const essaySubmitted = userProgress.essaySubmitted[m.id];

            return (
              <div
                key={m.id}
                className="bg-slate-50 p-4 rounded-lg border border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded bg-white border border-slate-200 text-slate-700">
                      Módulo 0{m.id}
                    </span>
                    <h4 className="font-bold text-sm text-slate-800">{m.title}</h4>
                  </div>
                  <p className="text-xs text-slate-500 max-w-xl">{m.summary}</p>
                </div>

                <div className="flex items-center space-x-4 shrink-0">
                  <div className="text-right text-xs space-y-1">
                    <div className="flex items-center space-x-1 text-slate-600 justify-end">
                      <HelpCircle className="w-3.5 h-3.5 text-teal-600" />
                      <span>
                        Teste de Fixação: {quizScore !== undefined ? `${quizScore}/${m.quiz.length}` : 'Pendente (10Q)'}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1 text-slate-600 justify-end">
                      <FileText className="w-3.5 h-3.5 text-teal-600" />
                      <span>
                        Estudo de Caso: {essaySubmitted ? 'Respondido' : 'Pendente'}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => onSelectModule(m.id)}
                    className={`px-4 py-2 rounded text-xs font-semibold transition-colors flex items-center space-x-1.5 ${
                      isCompleted
                        ? 'bg-emerald-50 border border-emerald-200 text-emerald-800 hover:bg-emerald-100'
                        : 'bg-teal-600 hover:bg-teal-700 text-white shadow-xs'
                    }`}
                  >
                    {isCompleted ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span>Concluído</span>
                      </>
                    ) : (
                      <span>Acessar Módulo</span>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
