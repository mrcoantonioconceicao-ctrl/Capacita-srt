import React, { useState, useEffect } from 'react';
import { Module, UserProgress, EssayEvaluation } from '../types/course';
import { QuizComponent } from './QuizComponent';
import { EssayComponent } from './EssayComponent';
import {
  BookOpen,
  FileSpreadsheet,
  HelpCircle,
  FileEdit,
  ArrowRight,
  ArrowLeft,
  Scale,
  CheckCircle2,
  Lightbulb,
  ShieldCheck,
  Sparkles
} from 'lucide-react';

interface ModuleViewerProps {
  module: Module;
  userProgress: UserProgress;
  onQuizCompleted: (moduleId: number, score: number) => void;
  onEssaySubmitted: (moduleId: number, answerText: string, evaluation?: EssayEvaluation) => void;
  onNextModule: () => void;
  onPrevModule: () => void;
  isFirstModule: boolean;
  isLastModule: boolean;
}

export const ModuleViewer: React.FC<ModuleViewerProps> = ({
  module,
  userProgress,
  onQuizCompleted,
  onEssaySubmitted,
  onNextModule,
  onPrevModule,
  isFirstModule,
  isLastModule
}) => {
  const [activeTab, setActiveTab] = useState<'theory' | 'case' | 'quiz' | 'essay'>('theory');

  useEffect(() => {
    setActiveTab('theory');
  }, [module.id]);

  const quizScore = userProgress.quizScores[module.id];
  const essayAnswer = userProgress.essayAnswers[module.id];
  const essaySubmitted = userProgress.essaySubmitted[module.id];
  const essayEval = userProgress.essayEvaluations?.[module.id];

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* Header Banner */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 md:p-8 space-y-4 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
          <span className="px-3 py-1 rounded-md bg-teal-50 text-teal-700 font-bold border border-teal-200">
            Módulo Operacional 0{module.id}
          </span>
          <div className="flex items-center space-x-2 text-slate-500">
            <span>Carga Horária: <strong>{module.workloadHours}h</strong></span>
            <span>•</span>
            <span className="text-teal-700 font-medium">SRT Salomão (Blumenau/SC)</span>
          </div>
        </div>

        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-800 tracking-tight leading-tight">
            {module.title}
          </h1>
          <p className="text-sm md:text-base text-slate-600 mt-2 leading-relaxed">
            {module.subtitle}
          </p>
        </div>

        <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-700 space-y-2">
          <div className="font-bold text-slate-800 flex items-center space-x-1.5 uppercase tracking-wider">
            <Scale className="w-4 h-4 text-teal-600" />
            <span>Fundamentação e Base Regulatória Oficial do Módulo:</span>
          </div>
          <ul className="list-disc list-inside space-y-1 text-slate-600 font-mono text-[11px]">
            {module.normativeBase.map((norm, idx) => (
              <li key={idx}>{norm}</li>
            ))}
          </ul>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-200">
          <button
            onClick={() => setActiveTab('theory')}
            className={`px-4 py-2.5 rounded-lg text-xs font-semibold transition-all flex items-center space-x-2 ${
              activeTab === 'theory'
                ? 'bg-teal-600 text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>1. Conteúdo Normativo</span>
          </button>

          <button
            onClick={() => setActiveTab('case')}
            className={`px-4 py-2.5 rounded-lg text-xs font-semibold transition-all flex items-center space-x-2 ${
              activeTab === 'case'
                ? 'bg-teal-600 text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <FileSpreadsheet className="w-4 h-4" />
            <span>2. Estudo de Caso</span>
          </button>

          <button
            onClick={() => setActiveTab('quiz')}
            className={`px-4 py-2.5 rounded-lg text-xs font-semibold transition-all flex items-center space-x-2 ${
              activeTab === 'quiz'
                ? 'bg-teal-600 text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <HelpCircle className="w-4 h-4" />
            <span>3. Teste de Fixação (10Q)</span>
            {quizScore !== undefined && (
              <span className="ml-1 px-1.5 py-0.5 rounded bg-teal-100 text-teal-800 font-bold text-[10px]">
                ✔ {quizScore}/{module.quiz.length}
              </span>
            )}
          </button>

          <button
            onClick={() => setActiveTab('essay')}
            className={`px-4 py-2.5 rounded-lg text-xs font-semibold transition-all flex items-center space-x-2 ${
              activeTab === 'essay'
                ? 'bg-teal-600 text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <FileEdit className="w-4 h-4" />
            <span>4. Prova Dissertativa com IA</span>
            {essayEval ? (
              <span className={`ml-1 px-1.5 py-0.5 rounded font-bold text-[10px] flex items-center gap-1 ${
                essayEval.score >= 70 ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
              }`}>
                <Sparkles className="w-3 h-3" />
                <span>{essayEval.score}/100</span>
              </span>
            ) : essaySubmitted ? (
              <span className="ml-1 px-1.5 py-0.5 rounded bg-teal-100 text-teal-800 font-bold text-[10px]">
                Enviado
              </span>
            ) : null}
          </button>
        </div>
      </div>

      {/* Tab 1: Conteúdo Teórico-Prático */}
      {activeTab === 'theory' && (
        <div className="bg-white border border-slate-200 rounded-xl p-6 md:p-8 space-y-8 shadow-xs">
          {module.contentSections.map((section, idx) => (
            <div key={idx} className="space-y-4 pb-6 border-b border-slate-200 last:border-b-0 last:pb-0">
              <h2 className="text-xl font-bold text-slate-800 flex items-center space-x-2">
                <span className="text-teal-600 font-extrabold text-lg">§</span>
                <span>{section.title}</span>
              </h2>

              <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
                {section.paragraphs.map((p, pIdx) => (
                  <p key={pIdx}>{p}</p>
                ))}
              </div>

              {section.keyTakeaway && (
                <div className="bg-teal-50 border-l-4 border-teal-500 p-4 rounded-r-lg text-xs text-teal-900 space-y-1">
                  <div className="font-bold uppercase tracking-wider text-teal-800 flex items-center space-x-1.5">
                    <Lightbulb className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>Princípio Antimanicomial Inegociável:</span>
                  </div>
                  <p className="italic text-slate-700 text-sm">{section.keyTakeaway}</p>
                </div>
              )}

              {section.practicalTips && (
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-2 text-xs text-slate-700">
                  <div className="font-bold text-teal-800 uppercase tracking-wider flex items-center space-x-1.5">
                    <CheckCircle2 className="w-4 h-4 text-teal-600" />
                    <span>Dicas Práticas do Cotidiano do Cuidador (SRT Salomão):</span>
                  </div>
                  <ul className="space-y-1.5">
                    {section.practicalTips.map((tip, tIdx) => (
                      <li key={tIdx} className="flex items-start gap-2">
                        <div className="mt-1 w-2 h-2 rounded-full bg-teal-500 shrink-0" />
                        <span className="text-slate-700 leading-normal">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {section.normativeHighlight && (
                <div className="p-4 bg-slate-100 border border-slate-200 rounded-lg text-xs text-slate-800 flex items-start space-x-3">
                  <ShieldCheck className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-teal-800 block mb-0.5">Destaque Normativo Obrigatório (SUS / RAPS):</strong>
                    {section.normativeHighlight}
                  </div>
                </div>
              )}
            </div>
          ))}

          <div className="flex justify-end pt-4">
            <button
              onClick={() => setActiveTab('case')}
              className="bg-teal-600 hover:bg-teal-700 text-white font-medium px-5 py-2.5 rounded-lg text-xs transition-colors flex items-center space-x-2 shadow-xs cursor-pointer"
            >
              <span>Avançar para Estudo de Caso</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Tab 2: Estudo de Caso Real */}
      {activeTab === 'case' && (
        <div className="space-y-6">
          <div className="bg-slate-900 text-white p-6 md:p-8 rounded-xl shadow-lg space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-700">
              <h2 className="text-sm font-bold uppercase tracking-widest text-teal-400 flex items-center gap-2">
                <FileSpreadsheet className="w-4 h-4" />
                <span>Estudo de Caso Prático #{module.id}</span>
              </h2>
              <span className="px-2.5 py-1 bg-slate-800 rounded text-[10px] text-slate-300 font-bold uppercase tracking-wider">Análise de Campo</span>
            </div>

            <h3 className="text-xl font-bold text-white">{module.caseStudy.title}</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="bg-slate-800/80 p-4 rounded-lg border border-slate-700 space-y-1.5">
                <div className="text-xs font-bold text-teal-300 uppercase tracking-wider">
                  Contexto e Histórico do Morador:
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {module.caseStudy.residentContext}
                </p>
              </div>

              <div className="bg-slate-800/80 p-4 rounded-lg border border-slate-700 space-y-1.5">
                <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  Cenário do Cotidiano / Desafio:
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {module.caseStudy.scenarioDescription}
                </p>
              </div>
            </div>

            <div className="p-4 bg-teal-950/80 border border-teal-800 rounded-lg space-y-1">
              <div className="text-xs font-bold text-teal-300 uppercase tracking-wider">Dilema Técnico Chave:</div>
              <p className="text-xs text-teal-100 leading-relaxed">{module.caseStudy.keyDilemma}</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-4">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Perguntas Guiadas para Reflexão e Conduta:
            </div>
            <ol className="list-decimal list-inside space-y-2 text-xs text-slate-700 font-medium">
              {module.caseStudy.guidedQuestions.map((q, idx) => (
                <li key={idx} className="leading-relaxed">{q}</li>
              ))}
            </ol>

            <div className="p-5 bg-teal-50 border border-teal-200 rounded-lg space-y-2 text-xs text-teal-900 mt-4">
              <div className="font-bold text-teal-800 uppercase tracking-wider flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600" />
                <span>Conduta Recomendada e Manejo Terapêutico Ético:</span>
              </div>
              <p className="leading-relaxed text-slate-800">{module.caseStudy.recommendedConduct}</p>
              <div className="text-[11px] text-teal-700 font-mono mt-2 pt-2 border-t border-teal-200">
                <strong>Base Normativa:</strong> {module.caseStudy.normativeReference}
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => setActiveTab('quiz')}
                className="bg-teal-600 hover:bg-teal-700 text-white font-medium px-5 py-2.5 rounded-lg text-xs transition-colors flex items-center space-x-2 shadow-xs cursor-pointer"
              >
                <span>Ir para o Teste de Fixação (10Q)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Teste de Fixação (10 Questões) */}
      {activeTab === 'quiz' && (
        <div className="bg-white border border-slate-200 rounded-xl p-6 md:p-8 shadow-xs space-y-6">
          <QuizComponent
            questions={module.quiz}
            moduleId={module.id}
            onQuizCompleted={onQuizCompleted}
            savedScore={quizScore}
            onGoToEssay={() => setActiveTab('essay')}
          />
        </div>
      )}

      {/* Tab 4: Prova Dissertativa com IA */}
      {activeTab === 'essay' && (
        <div className="bg-white border border-slate-200 rounded-xl p-6 md:p-8 shadow-xs">
          <EssayComponent
            essayTask={module.essayTask}
            moduleId={module.id}
            moduleTitle={module.title}
            onEssaySubmitted={onEssaySubmitted}
            savedAnswer={essayAnswer}
            savedEvaluation={essayEval}
            isAlreadySubmitted={essaySubmitted}
          />
        </div>
      )}

      {/* Bottom Navigation */}
      <div className="flex items-center justify-between p-4 bg-white border border-slate-200 rounded-xl shadow-xs">
        <button
          onClick={onPrevModule}
          disabled={isFirstModule}
          className={`px-4 py-2 rounded-lg text-xs font-semibold flex items-center space-x-2 transition-colors ${
            isFirstModule
              ? 'opacity-40 cursor-not-allowed bg-slate-100 text-slate-400'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200 cursor-pointer'
          }`}
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Módulo Anterior</span>
        </button>

        <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider">
          Módulo {module.id} de 5
        </span>

        <button
          onClick={onNextModule}
          disabled={isLastModule}
          className={`px-4 py-2 rounded-lg text-xs font-semibold flex items-center space-x-2 transition-colors ${
            isLastModule
              ? 'opacity-40 cursor-not-allowed bg-slate-100 text-slate-400'
              : 'bg-teal-600 text-white hover:bg-teal-700 shadow-xs cursor-pointer'
          }`}
        >
          <span>Próximo Módulo</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
