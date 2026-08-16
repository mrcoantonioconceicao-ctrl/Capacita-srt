import React, { useState, useEffect } from 'react';
import { finalExamQuestions } from '../data/finalExamData';
import { UserProgress } from '../types/course';
import {
  Award,
  CheckCircle2,
  XCircle,
  AlertCircle,
  RotateCcw,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ShieldCheck,
  HelpCircle,
  FileCheck
} from 'lucide-react';

interface FinalExamViewerProps {
  userProgress: UserProgress;
  onExamCompleted: (score: number, passed: boolean, answers: Record<string, number>) => void;
  onOpenCertificate: () => void;
  onGoToModules: () => void;
}

export const FinalExamViewer: React.FC<FinalExamViewerProps> = ({
  userProgress,
  onExamCompleted,
  onOpenCertificate,
  onGoToModules
}) => {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>(
    userProgress.finalExamAnswers || {}
  );
  const [submitted, setSubmitted] = useState<boolean>(userProgress.finalExamScore !== undefined);
  const [score, setScore] = useState<number>(userProgress.finalExamScore || 0);
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState<number>(0);
  const [filterModule, setFilterModule] = useState<number | 'all'>('all');

  useEffect(() => {
    if (userProgress.finalExamScore !== undefined) {
      setSubmitted(true);
      setScore(userProgress.finalExamScore);
      if (userProgress.finalExamAnswers) {
        setSelectedAnswers(userProgress.finalExamAnswers);
      }
    }
  }, [userProgress.finalExamScore, userProgress.finalExamAnswers]);

  const totalQuestions = finalExamQuestions.length; // 20
  const passingScore = 14; // 70% of 20 = 14
  const answeredCount = Object.keys(selectedAnswers).length;

  const currentQuestion = finalExamQuestions[currentQuestionIdx];

  const handleSelectOption = (questionId: string, optionIndex: number) => {
    if (submitted) return;
    setSelectedAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
  };

  const handleSubmitExam = () => {
    if (answeredCount < totalQuestions) {
      const confirmSubmit = window.confirm(
        `Você respondeu ${answeredCount} de ${totalQuestions} questões. Deseja realmente finalizar o exame agora?`
      );
      if (!confirmSubmit) return;
    }

    let calculatedScore = 0;
    finalExamQuestions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctIndex) {
        calculatedScore += 1;
      }
    });

    const isPassed = calculatedScore >= passingScore;
    setScore(calculatedScore);
    setSubmitted(true);
    onExamCompleted(calculatedScore, isPassed, selectedAnswers);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRetakeExam = () => {
    const confirmReset = window.confirm(
      'Deseja reiniciar a Prova Final de Conclusão? Todas as respostas anteriores serão limpas para uma nova tentativa.'
    );
    if (!confirmReset) return;

    setSelectedAnswers({});
    setSubmitted(false);
    setScore(0);
    setCurrentQuestionIdx(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isPassed = score >= passingScore;
  const scorePercent = Math.round((score / totalQuestions) * 100);

  return (
    <div className="space-y-6 max-w-5xl mx-auto text-slate-800">
      {/* Exam Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-teal-950 text-white rounded-2xl p-6 md:p-8 shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-700/80 pb-4">
            <div className="flex items-center space-x-2.5">
              <div className="w-10 h-10 rounded-xl bg-teal-500 text-white flex items-center justify-center shadow-lg font-bold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-widest text-teal-400 font-bold block">
                  Avaliação Oficial de Conclusão de Curso
                </span>
                <h1 className="text-xl md:text-2xl font-extrabold text-white">
                  Prova Final Integradora (20 Questões)
                </h1>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-xs bg-slate-800 text-slate-300 px-3 py-1.5 rounded-lg border border-slate-700 font-medium">
                Carga Horária: <strong>40 Horas</strong>
              </span>
              <span className="text-xs bg-teal-900/80 text-teal-300 px-3 py-1.5 rounded-lg border border-teal-700/60 font-bold">
                Média Mínima: 70% (14/20)
              </span>
            </div>
          </div>

          <p className="text-xs md:text-sm text-slate-300 max-w-3xl leading-relaxed">
            Esta avaliação contempla os 5 eixos temáticos do programa <strong>Capacita SRT Salomão</strong>: Marco Legal e Reforma Psiquiátrica (Lei 10.216/2001), Cotidiano e Cuidados Físicos com Dignidade, Manejo de Crises e Desescalada Verbal (Richmond), Gestão Farmacológica Segura (9 Certos) e Metodologia SBAR de Comunicação Interdisciplinar.
          </p>

          {/* Progress / Status Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700/70 text-xs">
              <span className="text-slate-400 block text-[10px] uppercase font-bold">Progresso das Respostas</span>
              <div className="flex items-center justify-between mt-1">
                <span className="font-bold text-white text-sm">
                  {answeredCount} de {totalQuestions} respondidas
                </span>
                <span className="text-teal-400 font-bold">
                  {Math.round((answeredCount / totalQuestions) * 100)}%
                </span>
              </div>
              <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden mt-1.5">
                <div
                  className="bg-teal-400 h-full transition-all duration-300"
                  style={{ width: `${(answeredCount / totalQuestions) * 100}%` }}
                />
              </div>
            </div>

            <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700/70 text-xs">
              <span className="text-slate-400 block text-[10px] uppercase font-bold">Status da Avaliação</span>
              <div className="mt-1 font-bold text-sm">
                {submitted ? (
                  isPassed ? (
                    <span className="text-emerald-400 flex items-center space-x-1">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Aprovado com Sucesso</span>
                    </span>
                  ) : (
                    <span className="text-rose-400 flex items-center space-x-1">
                      <XCircle className="w-4 h-4" />
                      <span>Nota Insuficiente (Abaixo de 70%)</span>
                    </span>
                  )
                ) : (
                  <span className="text-amber-300 flex items-center space-x-1">
                    <HelpCircle className="w-4 h-4" />
                    <span>Em Andamento</span>
                  </span>
                )}
              </div>
              <p className="text-[10px] text-slate-400 mt-1">
                {submitted ? `Resultado registrado no sistema` : `Responda todas as 20 questões`}
              </p>
            </div>

            <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700/70 text-xs flex flex-col justify-between">
              <span className="text-slate-400 block text-[10px] uppercase font-bold">Ação Recomendada</span>
              {submitted ? (
                isPassed ? (
                  <button
                    onClick={onOpenCertificate}
                    className="w-full py-1.5 bg-teal-600 hover:bg-teal-500 text-white font-bold rounded-lg text-xs transition-colors flex items-center justify-center space-x-1.5 shadow-sm"
                  >
                    <Award className="w-3.5 h-3.5" />
                    <span>Emitir Certificado Oficial</span>
                  </button>
                ) : (
                  <button
                    onClick={handleRetakeExam}
                    className="w-full py-1.5 bg-rose-600 hover:bg-rose-500 text-white font-bold rounded-lg text-xs transition-colors flex items-center justify-center space-x-1.5 shadow-sm"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Refazer Avaliação</span>
                  </button>
                )
              ) : (
                <button
                  onClick={handleSubmitExam}
                  className="w-full py-1.5 bg-teal-600 hover:bg-teal-500 text-white font-bold rounded-lg text-xs transition-colors flex items-center justify-center space-x-1.5 shadow-sm"
                >
                  <FileCheck className="w-3.5 h-3.5" />
                  <span>Finalizar e Corrigir Prova</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Result Card (When Submitted) */}
      {submitted && (
        <div
          className={`p-6 rounded-2xl border ${
            isPassed
              ? 'bg-emerald-50/90 border-emerald-300 text-emerald-950'
              : 'bg-rose-50/90 border-rose-300 text-rose-950'
          } shadow-md space-y-4`}
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center space-x-3.5">
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center text-white shrink-0 shadow-md ${
                  isPassed ? 'bg-emerald-600' : 'bg-rose-600'
                }`}
              >
                {isPassed ? <Award className="w-7 h-7" /> : <AlertCircle className="w-7 h-7" />}
              </div>
              <div>
                <h3 className="text-lg font-extrabold">
                  {isPassed
                    ? '🎉 Parabéns! Você foi Aprovado(a) na Prova Final!'
                    : 'Atenção: Você não atingiu a pontuação mínima de 70%'}
                </h3>
                <p className="text-xs text-slate-700">
                  {isPassed
                    ? `Você acertou ${score} de 20 questões (${scorePercent}% de aproveitamento). Seu certificado de 40h está liberado para emissão e impressão!`
                    : `Você acertou ${score} de 20 questões (${scorePercent}%). É necessário atingir ao menos 14 acertos (70%) para validar o certificado.`}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-2 shrink-0 self-start sm:self-auto">
              {isPassed ? (
                <button
                  onClick={onOpenCertificate}
                  className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-4 py-2.5 rounded-xl text-xs transition-colors flex items-center space-x-2 shadow-sm"
                >
                  <Award className="w-4 h-4" />
                  <span>Abrir Certificado Oficial</span>
                </button>
              ) : (
                <button
                  onClick={handleRetakeExam}
                  className="bg-rose-700 hover:bg-rose-800 text-white font-bold px-4 py-2.5 rounded-xl text-xs transition-colors flex items-center space-x-2 shadow-sm"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Tentar Novamente</span>
                </button>
              )}
            </div>
          </div>

          <div className="bg-white/80 p-4 rounded-xl border border-slate-200/80 text-xs text-slate-700 flex flex-wrap items-center justify-between gap-3">
            <span className="font-semibold">
              🔍 Revise abaixo o gabarito comentado de todas as 20 questões para consolidar seus conhecimentos.
            </span>
            <div className="flex items-center space-x-2">
              <span className="inline-flex items-center space-x-1 text-emerald-700 font-bold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{score} Corretas</span>
              </span>
              <span>•</span>
              <span className="inline-flex items-center space-x-1 text-rose-700 font-bold">
                <XCircle className="w-3.5 h-3.5" />
                <span>{totalQuestions - score} Incorretas</span>
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Question Quick Jump Grid & Filter */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center space-x-2 font-bold text-slate-700">
            <Sparkles className="w-4 h-4 text-teal-600" />
            <span>Navegação Rápida pelas 20 Questões:</span>
          </div>

          <div className="flex items-center space-x-2 text-[11px]">
            <span className="text-slate-500 font-medium">Legenda:</span>
            <span className="inline-flex items-center space-x-1 text-teal-700">
              <span className="w-2.5 h-2.5 rounded-full bg-teal-500"></span>
              <span>Respondida</span>
            </span>
            <span className="inline-flex items-center space-x-1 text-slate-500">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-200 border border-slate-300"></span>
              <span>Pendente</span>
            </span>
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {finalExamQuestions.map((q, idx) => {
            const isAnswered = selectedAnswers[q.id] !== undefined;
            const isCurrent = currentQuestionIdx === idx;
            const isCorrect = submitted && selectedAnswers[q.id] === q.correctIndex;
            const isWrong = submitted && isAnswered && selectedAnswers[q.id] !== q.correctIndex;

            let btnClass = 'bg-slate-100 text-slate-700 hover:bg-slate-200 border-slate-200';
            if (isCurrent) {
              btnClass = 'ring-2 ring-teal-600 bg-teal-50 text-teal-900 font-extrabold border-teal-400';
            } else if (submitted) {
              if (isCorrect) {
                btnClass = 'bg-emerald-100 text-emerald-800 border-emerald-300 font-bold';
              } else if (isWrong) {
                btnClass = 'bg-rose-100 text-rose-800 border-rose-300 font-bold';
              } else {
                btnClass = 'bg-slate-100 text-slate-400 border-slate-200';
              }
            } else if (isAnswered) {
              btnClass = 'bg-teal-600 text-white font-bold border-teal-700';
            }

            return (
              <button
                key={q.id}
                onClick={() => setCurrentQuestionIdx(idx)}
                className={`w-8 h-8 rounded-lg text-xs border font-medium transition-all flex items-center justify-center ${btnClass}`}
                title={`Ir para Questão ${idx + 1}`}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Active Question Card */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm space-y-6">
        {/* Question Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-200">
          <div className="flex items-center space-x-2">
            <span className="px-3 py-1 bg-teal-50 border border-teal-200 text-teal-800 rounded-lg text-xs font-bold">
              Questão {currentQuestionIdx + 1} de {totalQuestions}
            </span>
            <span className="text-xs font-semibold text-slate-500">
              {currentQuestion.moduleLabel}
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => setCurrentQuestionIdx((prev) => Math.max(0, prev - 1))}
              disabled={currentQuestionIdx === 0}
              className="p-1.5 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors text-xs font-medium flex items-center space-x-1"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Anterior</span>
            </button>
            <button
              onClick={() => setCurrentQuestionIdx((prev) => Math.min(totalQuestions - 1, prev + 1))}
              disabled={currentQuestionIdx === totalQuestions - 1}
              className="p-1.5 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors text-xs font-medium flex items-center space-x-1"
            >
              <span className="hidden sm:inline">Próxima</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scenario Box (If present) */}
        {currentQuestion.scenario && (
          <div className="p-4 bg-slate-50 border border-slate-200/90 rounded-xl text-xs md:text-sm text-slate-700 italic leading-relaxed">
            <strong className="text-slate-900 not-italic font-bold block mb-1">
              📋 Contexto Prático / Estudo de Caso:
            </strong>
            "{currentQuestion.scenario}"
          </div>
        )}

        {/* Question Text */}
        <h3 className="text-base md:text-lg font-bold text-slate-900 leading-snug">
          {currentQuestion.question}
        </h3>

        {/* Options List */}
        <div className="space-y-3 pt-2">
          {currentQuestion.options.map((option, optIdx) => {
            const isSelected = selectedAnswers[currentQuestion.id] === optIdx;
            const isCorrectOption = optIdx === currentQuestion.correctIndex;

            let optionStyle = 'border-slate-200 bg-slate-50/50 hover:bg-slate-100 hover:border-slate-300 text-slate-800';

            if (isSelected && !submitted) {
              optionStyle = 'border-teal-600 bg-teal-50/80 text-teal-950 ring-2 ring-teal-500/20 font-medium';
            }

            if (submitted) {
              if (isCorrectOption) {
                optionStyle = 'border-emerald-500 bg-emerald-50 text-emerald-950 ring-2 ring-emerald-500/30 font-medium';
              } else if (isSelected && !isCorrectOption) {
                optionStyle = 'border-rose-400 bg-rose-50 text-rose-950';
              } else {
                optionStyle = 'border-slate-200 bg-slate-50 text-slate-400 opacity-60';
              }
            }

            return (
              <button
                key={optIdx}
                type="button"
                onClick={() => handleSelectOption(currentQuestion.id, optIdx)}
                disabled={submitted}
                className={`w-full text-left p-4 rounded-xl border transition-all flex items-start space-x-3 text-xs md:text-sm ${optionStyle} ${
                  submitted ? 'cursor-default' : 'cursor-pointer'
                }`}
              >
                <div
                  className={`w-6 h-6 rounded-full border flex items-center justify-center shrink-0 text-xs font-bold mt-0.5 ${
                    submitted && isCorrectOption
                      ? 'border-emerald-600 bg-emerald-600 text-white'
                      : submitted && isSelected && !isCorrectOption
                      ? 'border-rose-600 bg-rose-600 text-white'
                      : isSelected
                      ? 'border-teal-600 bg-teal-600 text-white'
                      : 'border-slate-300 bg-white text-slate-600'
                  }`}
                >
                  {String.fromCharCode(65 + optIdx)}
                </div>
                <div className="flex-1 leading-relaxed">{option}</div>
                {submitted && isCorrectOption && (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 self-center" />
                )}
                {submitted && isSelected && !isCorrectOption && (
                  <XCircle className="w-5 h-5 text-rose-600 shrink-0 self-center" />
                )}
              </button>
            );
          })}
        </div>

        {/* Commented Feedback (When Submitted) */}
        {submitted && (
          <div className="p-4 bg-teal-50/80 border border-teal-200 rounded-xl space-y-2 text-xs">
            <div className="flex items-center space-x-2 font-bold text-teal-900">
              <BookOpen className="w-4 h-4 text-teal-700" />
              <span>Gabarito Comentado e Fundamentação Técnica:</span>
            </div>
            <p className="text-slate-800 leading-relaxed pl-6">
              {currentQuestion.explanation}
            </p>
          </div>
        )}

        {/* Bottom Pagination & Submit Trigger */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-slate-200">
          <div className="text-xs text-slate-500">
            {answeredCount} de {totalQuestions} questões respondidas
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => setCurrentQuestionIdx((prev) => Math.max(0, prev - 1))}
              disabled={currentQuestionIdx === 0}
              className="px-4 py-2 border border-slate-300 rounded-lg text-xs font-semibold hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors text-slate-700"
            >
              Anterior
            </button>

            {currentQuestionIdx < totalQuestions - 1 ? (
              <button
                onClick={() => setCurrentQuestionIdx((prev) => prev + 1)}
                className="px-5 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg text-xs font-bold transition-colors shadow-xs"
              >
                Próxima Questão
              </button>
            ) : !submitted ? (
              <button
                onClick={handleSubmitExam}
                className="px-6 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold transition-colors shadow-sm flex items-center space-x-1.5"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Finalizar Prova (20/20)</span>
              </button>
            ) : null}
          </div>
        </div>
      </div>

      {/* Review All 20 Questions Section (When Submitted) */}
      {submitted && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 space-y-6 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-200 pb-4">
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Revisão Completa das 20 Questões
              </h3>
              <p className="text-xs text-slate-500">
                Consulte todas as suas respostas, as alternativas corretas e as justificativas técnicas.
              </p>
            </div>
            <span className="text-xs font-bold text-teal-700 bg-teal-50 px-3 py-1 rounded-lg border border-teal-200">
              Total: {score} / 20 Acertos
            </span>
          </div>

          <div className="space-y-6">
            {finalExamQuestions.map((q, idx) => {
              const userAnswer = selectedAnswers[q.id];
              const isCorrect = userAnswer === q.correctIndex;

              return (
                <div
                  key={q.id}
                  className={`p-5 rounded-xl border text-xs space-y-3 ${
                    isCorrect
                      ? 'bg-emerald-50/40 border-emerald-200'
                      : 'bg-rose-50/40 border-rose-200'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center space-x-2">
                      <span
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-white font-bold text-[11px] ${
                          isCorrect ? 'bg-emerald-600' : 'bg-rose-600'
                        }`}
                      >
                        {idx + 1}
                      </span>
                      <span className="font-bold text-slate-900">
                        {q.moduleLabel}
                      </span>
                    </div>

                    <span
                      className={`font-bold px-2 py-0.5 rounded text-[11px] ${
                        isCorrect
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-rose-100 text-rose-800'
                      }`}
                    >
                      {isCorrect ? 'Acertou' : 'Errou'}
                    </span>
                  </div>

                  <p className="font-bold text-slate-800 text-sm">{q.question}</p>

                  <div className="space-y-1.5 pl-2 border-l-2 border-slate-300">
                    <div className="text-slate-700">
                      <strong>Sua Resposta:</strong>{' '}
                      {userAnswer !== undefined ? (
                        <span>
                          {String.fromCharCode(65 + userAnswer)}) {q.options[userAnswer]}
                        </span>
                      ) : (
                        <span className="text-rose-600 italic">Não respondida</span>
                      )}
                    </div>
                    {!isCorrect && (
                      <div className="text-emerald-800 font-semibold">
                        <strong>Resposta Correta:</strong> {String.fromCharCode(65 + q.correctIndex)}){' '}
                        {q.options[q.correctIndex]}
                      </div>
                    )}
                  </div>

                  <div className="p-3 bg-white rounded-lg border border-slate-200 text-slate-700">
                    <strong className="text-teal-800 block mb-0.5">Explicação Técnica:</strong>
                    {q.explanation}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
