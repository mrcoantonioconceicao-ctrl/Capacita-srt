import React, { useState, useEffect } from 'react';
import { QuizQuestion } from '../types/course';
import { CheckCircle2, XCircle, Award, Sparkles, ArrowRight, ShieldCheck, RotateCcw } from 'lucide-react';

interface QuizComponentProps {
  questions: QuizQuestion[];
  moduleId: number;
  onQuizCompleted: (moduleId: number, score: number, answers: Record<string, number>) => void;
  savedScore?: number;
  savedAnswers?: Record<string, number>;
  onGoToEssay?: () => void;
}

export const QuizComponent: React.FC<QuizComponentProps> = ({
  questions,
  moduleId,
  onQuizCompleted,
  savedScore,
  savedAnswers,
  onGoToEssay
}) => {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>(savedAnswers || {});
  const [submitted, setSubmitted] = useState<boolean>(savedScore !== undefined);
  const [score, setScore] = useState<number>(savedScore || 0);

  useEffect(() => {
    setSubmitted(savedScore !== undefined);
    setScore(savedScore || 0);
    setSelectedAnswers(savedAnswers || {});
  }, [moduleId, savedScore, savedAnswers]);

  const handleSelectOption = (questionId: string, optionIndex: number) => {
    if (submitted) return;
    setSelectedAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
  };

  const handleSubmitQuiz = () => {
    let correctCount = 0;
    questions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctIndex) {
        correctCount += 1;
      }
    });

    setScore(correctCount);
    setSubmitted(true);
    onQuizCompleted(moduleId, correctCount, selectedAnswers);
  };

  const handleRetakeQuiz = () => {
    setSelectedAnswers({});
    setSubmitted(false);
    setScore(0);
  };

  const allQuestionsAnswered = questions.every((q) => selectedAnswers[q.id] !== undefined);
  const answeredCount = Object.keys(selectedAnswers).length;

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="flex flex-wrap items-center justify-between p-4 bg-slate-50 border border-slate-200 rounded-lg gap-2">
        <div className="flex items-center space-x-2">
          <Award className="w-5 h-5 text-teal-600" />
          <h3 className="font-bold text-sm text-slate-800 uppercase tracking-wider">
            Teste de Fixação de Múltipla Escolha ({questions.length} Questões)
          </h3>
        </div>
        {submitted && (
          <span className="text-xs font-bold px-3 py-1 rounded bg-teal-100 text-teal-800 border border-teal-200 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            <span>Nota Registrada: {score} / {questions.length} ({Math.round((score / questions.length) * 100)}%)</span>
          </span>
        )}
      </div>

      {submitted && (
        <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-emerald-950">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-sm shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-emerald-900">
                {score === questions.length ? '🎉 Parabéns! Você gabaritou o teste de fixação!' : 'Gabarito conferido e respostas salvas na memória!'}
              </div>
              <div className="text-[11px] text-emerald-800">
                Sua nota ({score}/{questions.length}) e todas as suas respostas foram gravadas no seu perfil e salvas na nuvem.
              </div>
            </div>
          </div>
          {onGoToEssay && (
            <button
              onClick={onGoToEssay}
              className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-lg transition-colors flex items-center space-x-1.5 shrink-0 shadow-xs cursor-pointer"
            >
              <span>Ir p/ Estudo Dissertativo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      )}

      {/* Questions list */}
      <div className="space-y-6">
        {questions.map((q, qIndex) => {
          const selectedIdx = selectedAnswers[q.id];
          const isSelected = selectedIdx !== undefined;
          const isCorrect = selectedIdx === q.correctIndex;

          return (
            <div
              key={q.id}
              className={`p-5 rounded-xl border space-y-4 transition-all ${
                submitted
                  ? isCorrect
                    ? 'bg-emerald-50/30 border-emerald-200'
                    : isSelected
                    ? 'bg-rose-50/30 border-rose-200'
                    : 'bg-slate-50 border-slate-200'
                  : 'bg-slate-50 border-slate-200'
              }`}
            >
              <div className="font-semibold text-sm text-slate-800 flex items-start space-x-2">
                <span className="text-teal-600 font-bold">{qIndex + 1}.</span>
                <span className="leading-relaxed">{q.question}</span>
              </div>

              <div className="space-y-2">
                {q.options.map((option, optIdx) => {
                  let buttonStyle =
                    'bg-white border-slate-200 text-slate-700 hover:border-slate-300';

                  if (selectedIdx === optIdx) {
                    buttonStyle = 'bg-teal-50 border-teal-500 text-teal-900 ring-1 ring-teal-500 font-medium';
                  }

                  if (submitted) {
                    if (optIdx === q.correctIndex) {
                      buttonStyle = 'bg-emerald-50 border-emerald-500 text-emerald-900 font-semibold ring-1 ring-emerald-500';
                    } else if (selectedIdx === optIdx && !isCorrect) {
                      buttonStyle = 'bg-rose-50 border-rose-400 text-rose-900 font-medium';
                    } else {
                      buttonStyle = 'bg-slate-50 border-slate-200 text-slate-500 opacity-70';
                    }
                  }

                  return (
                    <button
                      key={optIdx}
                      disabled={submitted}
                      onClick={() => handleSelectOption(q.id, optIdx)}
                      className={`w-full text-left p-3 rounded-lg border text-xs transition-all flex items-start space-x-3 ${buttonStyle} ${
                        submitted ? 'cursor-default' : 'cursor-pointer'
                      }`}
                    >
                      <input
                        type="radio"
                        name={q.id}
                        checked={selectedIdx === optIdx}
                        onChange={() => {}}
                        className="accent-teal-600 mt-0.5 shrink-0"
                      />
                      <div className="flex-1 leading-relaxed">{option}</div>
                      {submitted && optIdx === q.correctIndex && (
                        <span className="text-[10px] bg-emerald-600 text-white px-2 py-0.5 rounded font-bold self-center">
                          Correta
                        </span>
                      )}
                      {submitted && selectedIdx === optIdx && !isCorrect && (
                        <span className="text-[10px] bg-rose-600 text-white px-2 py-0.5 rounded font-bold self-center">
                          Sua Escolha (Incorreta)
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              {submitted && (
                <div
                  className={`p-3.5 rounded-lg text-xs space-y-1 ${
                    isCorrect
                      ? 'bg-emerald-50 border border-emerald-200 text-emerald-900'
                      : 'bg-rose-50 border border-rose-200 text-rose-900'
                  }`}
                >
                  <div className="font-bold flex items-center space-x-1.5">
                    {isCorrect ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>Resposta Correta! Você acertou esta questão.</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
                        <span>Alternativa correta: Letra {String.fromCharCode(65 + q.correctIndex)}.</span>
                      </>
                    )}
                  </div>
                  <p className="text-slate-700 text-[11px] leading-relaxed pt-1.5 border-t border-slate-200/80 mt-1">
                    <strong>Gabarito Comentado:</strong> {q.explanation}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-200">
        {!submitted ? (
          <button
            disabled={!allQuestionsAnswered}
            onClick={handleSubmitQuiz}
            className={`font-semibold px-6 py-2.5 rounded-lg text-xs uppercase tracking-wider transition-all flex items-center space-x-2 ${
              allQuestionsAnswered
                ? 'bg-teal-600 hover:bg-teal-700 text-white shadow-sm cursor-pointer'
                : 'bg-slate-200 text-slate-400 cursor-not-allowed'
            }`}
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>{allQuestionsAnswered ? 'Verificar Gabarito e Salvar na Memória' : `Responda todas as ${questions.length} questões (${answeredCount}/${questions.length})`}</span>
          </button>
        ) : (
          <div className="flex items-center space-x-3">
            <button
              onClick={handleRetakeQuiz}
              className="bg-slate-200 hover:bg-slate-300 text-slate-700 font-semibold px-5 py-2.5 rounded-lg text-xs transition-colors flex items-center space-x-1.5 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Refazer Teste de Fixação</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
