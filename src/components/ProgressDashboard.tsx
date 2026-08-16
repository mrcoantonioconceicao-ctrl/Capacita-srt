import React, { useState } from 'react';
import { UserProgress, Module } from '../types/course';
import { Award, CheckCircle2, FileText, HelpCircle, User, BarChart2, Lightbulb, RefreshCw, Quote, HeartHandshake, Copy, Check } from 'lucide-react';

interface ProgressDashboardProps {
  modules: Module[];
  userProgress: UserProgress;
  onUpdateUserName: (name: string) => void;
  onSelectModule: (moduleId: number) => void;
  onOpenCertificate: () => void;
}

const DAILY_TIPS = [
  {
    quote: "O cuidador na SRT não faz PELO morador, ele faz COM o morador. A verdadeira reabilitação nasce no resgate dos gestos simples do cotidiano.",
    author: "Diretrizes de Reabilitação Psicossocial",
    tag: "Autonomia & Dignidade"
  },
  {
    quote: "Trancar não é cuidar. Cuidar em liberdade é construir vínculos, respeitar a singularidade e garantir o direito inalienável de habitar a cidade.",
    author: "Lei Antimanicomial nº 10.216/2001",
    tag: "Luta Antimanicomial"
  },
  {
    quote: "A Residência Terapêutica é um LAR, não um hospital. Cada escolha do morador — do tempero do almoço à cor da toalha — é uma vitória da cidadania.",
    author: "Modelo Residencial Salomão",
    tag: "Cotidiano Domiciliar"
  },
  {
    quote: "Escuta qualificada não exige respostas prontas. Às vezes, o maior gesto de cuidado é estar presente com calma, segurança e sem julgamento.",
    author: "Cuidado Antimanicomial",
    tag: "Vínculo Humano"
  },
  {
    quote: "Na hora da crise, o tom de voz do cuidador é a ponte para a calma. A desescalada verbal acolhe a dor sem jamais usar a violência do isolamento.",
    author: "Protocolo de Manejo de Crises",
    tag: "Manejo Humanizado"
  },
  {
    quote: "Remédio sem escuta é apenas controle mecânico. A medicação humanizada apoia a saúde, mas a convivência afetuosa é o verdadeiro remédio.",
    author: "Rede de Atenção Psicossocial (RAPS)",
    tag: "Gestão do Cuidado"
  }
];

export const ProgressDashboard: React.FC<ProgressDashboardProps> = ({
  modules,
  userProgress,
  onUpdateUserName,
  onSelectModule,
  onOpenCertificate
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

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 md:p-8 space-y-8 shadow-sm max-w-5xl mx-auto text-slate-800">
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-200">
        <div className="space-y-1">
          <div className="flex items-center space-x-2 text-xs font-bold text-teal-700 uppercase tracking-wider">
            <BarChart2 className="w-4 h-4" />
            <span>Painel do Aluno & Capacitação Continuada</span>
          </div>
          <h2 className="text-2xl font-bold text-slate-800">Residencial Terapêutico Salomão</h2>
          <p className="text-xs text-slate-500">Acompanhe seu progresso de aprendizagem e emissão de certificado</p>
        </div>

        <div className="flex items-center space-x-4 bg-slate-50 p-4 rounded-lg border border-slate-200">
          <div className="text-center">
            <span className="text-2xl font-extrabold text-teal-600">{progressPercent}%</span>
            <span className="text-[10px] text-slate-500 block uppercase font-bold">Concluído</span>
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

      {/* Candidate Name Input */}
      <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center space-x-3">
          <User className="w-5 h-5 text-slate-500 shrink-0" />
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
              Nome do Cuidador / Aluno para o Certificado:
            </label>
            <span className="text-[11px] text-slate-500">Este nome constará no documento oficial de 40 horas</span>
          </div>
        </div>
        <input
          type="text"
          value={userProgress.userName}
          onChange={(e) => onUpdateUserName(e.target.value)}
          placeholder="Digite seu nome completo..."
          className="bg-white border border-slate-200 rounded px-4 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-teal-500 w-full md:w-80 font-medium"
        />
      </div>

      {/* Modules Progress List */}
      <div className="space-y-4">
        <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
          Status de Conclusão por Módulo Operacional:
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
                        Quiz: {quizScore !== undefined ? `${quizScore}/${m.quiz.length}` : 'Pendente'}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1 text-slate-600 justify-end">
                      <FileText className="w-3.5 h-3.5 text-teal-600" />
                      <span>
                        Prova: {essaySubmitted ? 'Enviada' : 'Pendente'}
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
