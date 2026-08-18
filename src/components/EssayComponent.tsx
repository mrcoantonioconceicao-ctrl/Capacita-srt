import React, { useState, useEffect } from 'react';
import { EssayTask, EssayEvaluation } from '../types/course';
import {
  FileEdit,
  CheckCircle2,
  Eye,
  Sparkles,
  BookOpen,
  Award,
  AlertCircle,
  RotateCcw,
  Scale,
  ShieldCheck,
  Lightbulb,
  Check,
  Loader2,
  HeartHandshake,
  AlertTriangle,
  Flame,
  BookmarkCheck,
  Quote
} from 'lucide-react';

interface EssayComponentProps {
  essayTask: EssayTask;
  moduleId: number;
  moduleTitle: string;
  onEssaySubmitted: (moduleId: number, answerText: string, evaluation?: EssayEvaluation) => void;
  savedAnswer?: string;
  savedEvaluation?: EssayEvaluation;
  isAlreadySubmitted?: boolean;
}

export const EssayComponent: React.FC<EssayComponentProps> = ({
  essayTask,
  moduleId,
  moduleTitle,
  onEssaySubmitted,
  savedAnswer = '',
  savedEvaluation,
  isAlreadySubmitted = false
}) => {
  const [answer, setAnswer] = useState<string>(savedAnswer);
  const [submitted, setSubmitted] = useState<boolean>(isAlreadySubmitted);
  const [evaluation, setEvaluation] = useState<EssayEvaluation | undefined>(savedEvaluation);
  const [isEvaluating, setIsEvaluating] = useState<boolean>(false);
  const [evaluationError, setEvaluationError] = useState<string | null>(null);
  const [showModelAnswer, setShowModelAnswer] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [activeFeedbackTab, setActiveFeedbackTab] = useState<'antiasylum' | 'criteria' | 'strengths' | 'normative'>('antiasylum');

  useEffect(() => {
    setAnswer(savedAnswer || '');
    setSubmitted(!!isAlreadySubmitted);
    setEvaluation(savedEvaluation);
    setIsEvaluating(false);
    setEvaluationError(null);
    setShowModelAnswer(false);
    setIsEditing(false);
  }, [moduleId, savedAnswer, savedEvaluation, isAlreadySubmitted]);

  const handleSubmitAndEvaluate = async () => {
    if (!answer.trim() || answer.trim().length < 50) return;

    setIsEvaluating(true);
    setEvaluationError(null);

    try {
      const response = await fetch('/api/evaluate-essay', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          moduleTitle,
          prompt: essayTask.prompt,
          rubric: essayTask.rubric,
          modelAnswer: essayTask.modelAnswer,
          studentAnswer: answer
        })
      });

      if (!response.ok) {
        throw new Error('Falha ao comunicar com o avaliador pedagógico de IA.');
      }

      const evalData: EssayEvaluation = await response.json();
      setEvaluation(evalData);
      setSubmitted(true);
      setIsEditing(false);
      setActiveFeedbackTab('antiasylum');
      onEssaySubmitted(moduleId, answer, evalData);
    } catch (err: any) {
      console.error('Erro na avaliação com IA:', err);
      setEvaluationError('Ocorreu um erro ao processar a avaliação. Tente novamente.');
    } finally {
      setIsEvaluating(false);
    }
  };

  const handleEditAnswer = () => {
    setIsEditing(true);
  };

  const charCount = answer.trim().length;
  const wordCount = answer.trim() ? answer.trim().split(/\s+/).length : 0;

  return (
    <div className="bg-white p-6 md:p-8 rounded-xl border border-slate-200 shadow-xs space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200">
        <div className="flex items-center space-x-3">
          <div className="p-2.5 bg-teal-50 text-teal-600 rounded-lg shrink-0">
            <FileEdit className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-base text-slate-800 uppercase tracking-wider">
              Prova Dissertativa de Conclusão de Módulo
            </h3>
            <p className="text-xs text-slate-500">
              Avaliação de raciocínio clínico-ético e feedback detalhado em Luta Antimanicomial com Gemini
            </p>
          </div>
        </div>

        {submitted && evaluation && !isEditing && (
          <div className="flex items-center gap-2 shrink-0">
            <div
              className={`px-3 py-1.5 rounded-lg border text-xs font-bold flex items-center space-x-2 ${
                evaluation.score >= 70
                  ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                  : 'bg-amber-50 text-amber-800 border-amber-300'
              }`}
            >
              <Award className="w-4 h-4" />
              <span>Nota da IA: {evaluation.score} / 100</span>
            </div>
            <button
              onClick={handleEditAnswer}
              className="text-xs px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-lg transition-colors flex items-center space-x-1.5 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reescrever</span>
            </button>
          </div>
        )}
      </div>

      {/* Prompt Card */}
      <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
        <div className="text-xs font-bold text-teal-800 uppercase tracking-wider flex items-center space-x-1.5">
          <Scale className="w-4 h-4 text-teal-600" />
          <span>Enunciado da Situação-Problema (Módulo 0{moduleId}):</span>
        </div>
        <p className="text-sm text-slate-800 leading-relaxed font-medium">
          {essayTask.prompt}
        </p>
      </div>

      {/* Rubric Preview */}
      <div className="space-y-2">
        <div className="text-xs font-bold text-slate-600 uppercase tracking-wider">
          Critérios de Correção e Rubrica Oficial:
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {essayTask.rubric.map((item, idx) => (
            <div key={idx} className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs space-y-1">
              <div className="font-bold text-slate-800 flex items-center justify-between">
                <span>{item.criterion}</span>
                <span className="text-[10px] text-teal-700 bg-teal-100 px-1.5 py-0.5 rounded font-mono font-bold">
                  {item.weight}
                </span>
              </div>
              <p className="text-[11px] text-slate-600 leading-normal">{item.guideline}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Essay Input or Readonly Display */}
      {!submitted || isEditing ? (
        <div className="space-y-3">
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
            Sua Resposta Dissertativa:
          </label>
          <textarea
            rows={10}
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            disabled={isEvaluating}
            placeholder="Escreva sua conduta detalhada como cuidador do Residencial Terapêutico Salomão. Articule os princípios da Luta Antimanicomial (Lei nº 10.216/2001), escuta qualificada, desinstitucionalização, respeito à autonomia e diálogo multiprofissional com o CAPS..."
            className="w-full bg-slate-50 border border-slate-300 rounded-lg p-4 text-xs text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none resize-y leading-relaxed font-sans"
          />

          <div className="flex flex-wrap items-center justify-between text-[11px] text-slate-500 gap-2">
            <div className="flex items-center space-x-3">
              <span>{charCount} caracteres</span>
              <span>•</span>
              <span>{wordCount} palavras</span>
            </div>
            <span>Recomendado: mínimo de 50 caracteres (ideal 10 a 20 linhas estruturadas)</span>
          </div>

          {evaluationError && (
            <div className="p-3 bg-rose-50 border border-rose-200 text-rose-800 rounded-lg text-xs flex items-center space-x-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
              <span>{evaluationError}</span>
            </div>
          )}

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={handleSubmitAndEvaluate}
              disabled={isEvaluating || charCount < 50}
              className={`font-bold px-6 py-3 rounded-lg text-xs uppercase tracking-wider transition-all flex items-center space-x-2 ${
                charCount >= 50 && !isEvaluating
                  ? 'bg-teal-600 hover:bg-teal-700 text-white shadow-xs cursor-pointer'
                  : 'bg-slate-200 text-slate-400 cursor-not-allowed'
              }`}
            >
              {isEvaluating ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-white" />
                  <span>Analisando resposta com Gemini...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>Enviar e Obter Avaliação Detalhada da IA</span>
                </>
              )}
            </button>

            {isEditing && (
              <button
                onClick={() => setIsEditing(false)}
                className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-semibold cursor-pointer"
              >
                Cancelar Edição
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
              Resposta Submetida pelo Aluno:
            </label>
            <button
              onClick={handleEditAnswer}
              className="text-xs text-teal-700 hover:text-teal-900 font-semibold flex items-center space-x-1 underline cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Editar / Reavaliar com IA</span>
            </button>
          </div>
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 leading-relaxed whitespace-pre-line font-sans">
            {answer}
          </div>
        </div>
      )}

      {/* AI Evaluation Card Result */}
      {submitted && evaluation && !isEditing && (
        <div className="p-5 md:p-7 bg-slate-50 border border-teal-300/80 rounded-xl space-y-6 shadow-xs">
          {/* Score & Status Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-200">
            <div className="flex items-center space-x-4">
              <div
                className={`w-14 h-14 rounded-2xl flex flex-col items-center justify-center text-white shadow-xs font-bold shrink-0 ${
                  evaluation.score >= 70 ? 'bg-emerald-600' : 'bg-amber-600'
                }`}
              >
                <span className="text-lg leading-none">{evaluation.score}</span>
                <span className="text-[10px] uppercase font-semibold opacity-90">de 100</span>
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-teal-600" />
                  <span>Parecer Pedagógico de IA (Gemini)</span>
                </div>
                <div className="text-xs font-semibold text-slate-600 mt-0.5">
                  {evaluation.score >= 70 ? (
                    <span className="text-emerald-700 font-bold">✔ Aprovado no Módulo (Nota $\ge$ 70)</span>
                  ) : (
                    <span className="text-amber-700 font-bold">⚠ Necessita Complementação Técnica</span>
                  )}
                  {evaluation.evaluatedAt && ` • Avaliado em ${evaluation.evaluatedAt}`}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              <button
                onClick={() => setShowModelAnswer(!showModelAnswer)}
                className="text-xs bg-white border border-slate-300 hover:bg-slate-100 text-teal-700 font-semibold px-3.5 py-2 rounded-lg transition-colors flex items-center space-x-1.5 shrink-0 cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>{showModelAnswer ? 'Ocultar Resposta Espelho' : 'Ver Resposta Espelho'}</span>
              </button>
            </div>
          </div>

          {/* Feedback Navigation Tabs */}
          <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-3">
            <button
              onClick={() => setActiveFeedbackTab('antiasylum')}
              className={`px-3.5 py-2 rounded-lg text-xs font-bold flex items-center space-x-1.5 transition-colors cursor-pointer ${
                activeFeedbackTab === 'antiasylum'
                  ? 'bg-teal-700 text-white shadow-xs'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
              }`}
            >
              <HeartHandshake className="w-4 h-4" />
              <span>1. Luta Antimanicomial & Cuidado em Liberdade</span>
            </button>

            <button
              onClick={() => setActiveFeedbackTab('criteria')}
              className={`px-3.5 py-2 rounded-lg text-xs font-bold flex items-center space-x-1.5 transition-colors cursor-pointer ${
                activeFeedbackTab === 'criteria'
                  ? 'bg-teal-700 text-white shadow-xs'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
              }`}
            >
              <BookmarkCheck className="w-4 h-4" />
              <span>2. Pontuação por Critério ({evaluation.criterionBreakdown?.length || 3})</span>
            </button>

            <button
              onClick={() => setActiveFeedbackTab('strengths')}
              className={`px-3.5 py-2 rounded-lg text-xs font-bold flex items-center space-x-1.5 transition-colors cursor-pointer ${
                activeFeedbackTab === 'strengths'
                  ? 'bg-teal-700 text-white shadow-xs'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
              }`}
            >
              <Lightbulb className="w-4 h-4" />
              <span>3. Pontos Fortes & Melhorias</span>
            </button>

            <button
              onClick={() => setActiveFeedbackTab('normative')}
              className={`px-3.5 py-2 rounded-lg text-xs font-bold flex items-center space-x-1.5 transition-colors cursor-pointer ${
                activeFeedbackTab === 'normative'
                  ? 'bg-teal-700 text-white shadow-xs'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              <span>4. Base Regulatória (SUS/RAPS)</span>
            </button>
          </div>

          {/* TAB 1: LUTA ANTIMANICOMIAL (HIGHLIGHTED) */}
          {activeFeedbackTab === 'antiasylum' && (
            <div className="space-y-5">
              {/* Overview Box */}
              <div className="p-4 bg-teal-900 text-white rounded-xl space-y-2 shadow-sm">
                <div className="flex items-center space-x-2 text-teal-300 text-xs font-bold uppercase tracking-wider">
                  <Flame className="w-4 h-4 text-amber-400" />
                  <span>Diagnóstico Formativo: Paradigma Antimanicomial</span>
                </div>
                <p className="text-xs text-teal-50 leading-relaxed font-sans">
                  {evaluation.antiAsylumFeedback?.overview || evaluation.feedback}
                </p>
              </div>

              {/* Grid with Emancipatory vs Asylum Risks */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Deinstitutionalization Points */}
                <div className="p-4 bg-emerald-50/80 border border-emerald-200 rounded-xl space-y-2 text-xs">
                  <div className="font-bold text-emerald-950 uppercase tracking-wider flex items-center space-x-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Conquistas Antimanicomiais Demonstradas:</span>
                  </div>
                  <ul className="space-y-1.5 text-slate-700">
                    {(evaluation.antiAsylumFeedback?.deinstitutionalizationPoints || evaluation.strengths).map(
                      (point, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{point}</span>
                        </li>
                      )
                    )}
                  </ul>
                </div>

                {/* Asylum traps / Risks to watch */}
                <div className="p-4 bg-amber-50/80 border border-amber-300 rounded-xl space-y-2 text-xs">
                  <div className="font-bold text-amber-950 uppercase tracking-wider flex items-center space-x-1.5">
                    <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>Armadilhas Asilares & Tutelares a Evitar:</span>
                  </div>
                  <ul className="space-y-1.5 text-slate-700">
                    {(
                      evaluation.antiAsylumFeedback?.riskOfAsylumPracticesIdentified ||
                      evaluation.improvements
                    ).map((risk, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-1.5" />
                        <span className="leading-relaxed">{risk}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Emancipatory Practices Recommendations */}
              {evaluation.antiAsylumFeedback?.emancipatoryPracticesRecommended && (
                <div className="p-4 bg-white border border-slate-200 rounded-xl space-y-2.5 text-xs">
                  <div className="font-bold text-teal-900 uppercase tracking-wider flex items-center space-x-1.5">
                    <HeartHandshake className="w-4 h-4 text-teal-600" />
                    <span>Práticas Emancipatórias Recomendadas no SRT Salomão:</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {evaluation.antiAsylumFeedback.emancipatoryPracticesRecommended.map((rec, idx) => (
                      <div
                        key={idx}
                        className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 text-[11px] leading-relaxed"
                      >
                        <strong className="text-teal-800 block mb-1">Diretriz 0{idx + 1}:</strong>
                        {rec}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Takeaway Quote */}
              {evaluation.antiAsylumFeedback?.keyTakeawayLesson && (
                <div className="p-4 bg-amber-50/60 border-l-4 border-amber-500 rounded-r-xl space-y-1 text-xs">
                  <div className="flex items-center space-x-1.5 text-amber-900 font-bold uppercase tracking-wider text-[11px]">
                    <Quote className="w-3.5 h-3.5 text-amber-600" />
                    <span>Princípio-Guia do Cuidador Antimanicomial:</span>
                  </div>
                  <p className="text-slate-800 italic font-medium leading-relaxed">
                    "{evaluation.antiAsylumFeedback.keyTakeawayLesson}"
                  </p>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: CRITERIA BREAKDOWN */}
          {activeFeedbackTab === 'criteria' && (
            <div className="space-y-4">
              <div className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                Desempenho por Critério da Rubrica:
              </div>
              <div className="space-y-3">
                {(evaluation.criterionBreakdown || []).map((crit, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-white border border-slate-200 rounded-xl space-y-2 text-xs shadow-xs"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-800">{crit.criterion}</span>
                      <span className="px-2.5 py-1 rounded bg-teal-50 text-teal-800 font-mono font-bold text-xs border border-teal-200">
                        {crit.scoreAwarded} / {crit.maxScore} pts
                      </span>
                    </div>
                    <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                      <div
                        className="bg-teal-600 h-full rounded-full transition-all duration-500"
                        style={{ width: `${Math.min(100, Math.round((crit.scoreAwarded / crit.maxScore) * 100))}%` }}
                      />
                    </div>
                    <p className="text-[11px] text-slate-600 leading-relaxed pt-1">{crit.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: STRENGTHS AND IMPROVEMENTS */}
          {activeFeedbackTab === 'strengths' && (
            <div className="space-y-4">
              <div className="space-y-1.5">
                <div className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                  Parecer Geral do Preceptor:
                </div>
                <p className="text-xs text-slate-700 leading-relaxed bg-white p-4 rounded-xl border border-slate-200">
                  {evaluation.feedback}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-emerald-50/70 border border-emerald-200 rounded-xl space-y-2 text-xs">
                  <div className="font-bold text-emerald-900 uppercase tracking-wider flex items-center space-x-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Pontos Fortes da Resposta:</span>
                  </div>
                  <ul className="space-y-1.5 text-slate-700">
                    {evaluation.strengths.map((str, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{str}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-xl space-y-2 text-xs">
                  <div className="font-bold text-amber-900 uppercase tracking-wider flex items-center space-x-1.5">
                    <Lightbulb className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>Oportunidades de Aprimoramento:</span>
                  </div>
                  <ul className="space-y-1.5 text-slate-700">
                    {evaluation.improvements.map((imp, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-1.5" />
                        <span>{imp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: NORMATIVE ANALYSIS */}
          {activeFeedbackTab === 'normative' && (
            <div className="p-5 bg-white border border-slate-200 rounded-xl space-y-3 text-xs text-slate-800">
              <div className="font-bold text-teal-900 uppercase tracking-wider flex items-center space-x-1.5 pb-2 border-b border-slate-200">
                <ShieldCheck className="w-4 h-4 text-teal-600" />
                <span>Análise de Conformidade Regulatória (SUS / Lei 10.216 / Portaria 106):</span>
              </div>
              <p className="leading-relaxed text-slate-700 font-sans">
                {evaluation.normativeAnalysis}
              </p>
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-[11px] text-slate-600 space-y-1 font-mono">
                <div>• Lei Federal nº 10.216/2001 (Reforma Psiquiátrica e Direitos dos Usuários)</div>
                <div>• Portaria GM/MS nº 106/2000 (Criação dos Serviços de Residência Terapêutica)</div>
                <div>• Portaria GM/MS nº 3.088/2011 (Rede de Atenção Psicossocial - RAPS)</div>
              </div>
            </div>
          )}

          {/* Model Answer (Optional expansion) */}
          {showModelAnswer && (
            <div className="p-5 bg-white border border-slate-300 rounded-xl space-y-2 text-xs text-slate-800">
              <div className="font-bold text-teal-800 flex items-center space-x-1.5 uppercase tracking-wider">
                <BookOpen className="w-4 h-4 text-teal-600" />
                <span>Resposta de Referência / Espelho Técnico:</span>
              </div>
              <p className="whitespace-pre-line leading-relaxed text-slate-700 bg-slate-50 p-4 rounded-lg border border-slate-200 font-sans">
                {essayTask.modelAnswer}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
