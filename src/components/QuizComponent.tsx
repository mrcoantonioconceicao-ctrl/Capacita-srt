import React, { useState, useEffect } from 'react';
import { QuizQuestion } from '../types/course';
import { CheckCircle2, XCircle, Award } from 'lucide-react';

interface QuizComponentProps {
  questions: QuizQuestion[];
  moduleId: number;
  onQuizCompleted: (moduleId: number, score: number) => void;
  savedScore?: number;
}

export const QuizComponent: React.FC<QuizComponentProps> = ({
  questions,
  moduleId,
  onQuizCompleted,
  savedScore
}) => {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState<boolean>(savedScore !== undefined);
  const [score, setScore] = useState<number>(savedScore || 0);

  useEffect(() => {
    setSubmitted(savedScore !== undefined);
    setScore(savedScore || 0);
    setSelectedAnswers({});
  }, [moduleId, savedScore]);

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
    onQuizCompleted(moduleId, correctCount);
  };

  const handleRetakeQuiz = () => {
    setSelectedAnswers({});
    setSubmitted(false);
    setScore(0);
  };

  const allQuestionsAnswered = questions.every((q) => selectedAnswers[q.id] !== undefined);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between p-4 bg-slate-50 border border-slate-200 rounded-lg">
        <div className="flex items-center space-x-2">
          <Award className="w-5 h-5 text-teal-600" />
          <h3 className="font-bold text-sm text-slate-800 uppercase tracking-wider">Teste de Fixação de Múltipla Escolha</h3>
        </div>
        {submitted && (
          <span className="text-xs font-bold px-3 py-1 rounded bg-teal-100 text-teal-800 border border-teal-200">
            Pontuação: {score} / {questions.length} ({Math.round((score / questions.length) * 100)}%)
          </span>
        )}
      </div>

      <div className="space-y-6">
        {questions.map((q, qIndex) => {
          const selectedIdx = selectedAnswers[q.id];
          const isCorrect = selectedIdx === q.correctIndex;

          return (
            <div
              key={q.id}
              className="bg-slate-50 p-5 rounded-lg border border-slate-200 space-y-4"
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
                      buttonStyle = 'bg-emerald-50 border-emerald-500 text-emerald-900 font-medium';
                    } else if (selectedIdx === optIdx && !isCorrect) {
                      buttonStyle = 'bg-rose-50 border-rose-400 text-rose-900';
                    }
                  }

                  return (
                    <button
                      key={optIdx}
                      disabled={submitted}
                      onClick={() => handleSelectOption(q.id, optIdx)}
                      className={`w-full text-left p-3 rounded border text-xs transition-all flex items-start space-x-3 ${buttonStyle}`}
                    >
                      <input
                        type="radio"
                        name={q.id}
                        checked={selectedIdx === optIdx}
                        onChange={() => {}}
                        className="accent-teal-600 mt-0.5 shrink-0"
                      />
                      <div className="flex-1 leading-relaxed">{option}</div>
                    </button>
                  );
                })}
              </div>

              {submitted && (
                <div
                  className={`p-3 rounded-md text-xs space-y-1 ${
                    isCorrect
                      ? 'bg-emerald-50 border border-emerald-200 text-emerald-900'
                      : 'bg-rose-50 border border-rose-200 text-rose-900'
                  }`}
                >
                  <div className="font-bold flex items-center space-x-1">
                    {isCorrect ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span>Resposta Correta!</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-4 h-4 text-rose-600" />
                        <span>Incorreto. A opção correta é a letra {String.fromCharCode(65 + q.correctIndex)}.</span>
                      </>
                    )}
                  </div>
                  <p className="text-slate-700 text-[11px] leading-relaxed pt-1 border-t border-slate-200 mt-1">
                    <strong>Gabarito Comentado:</strong> {q.explanation}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="flex items-center space-x-4 pt-4 border-t border-slate-200">
        {!submitted ? (
          <button
            disabled={!allQuestionsAnswered}
            onClick={handleSubmitQuiz}
            className={`font-semibold px-6 py-2.5 rounded text-xs uppercase tracking-wider transition-all flex items-center space-x-2 ${
              allQuestionsAnswered
                ? 'bg-teal-600 hover:bg-teal-700 text-white shadow'
                : 'bg-slate-200 text-slate-400 cursor-not-allowed'
            }`}
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>Verificar Gabarito</span>
          </button>
        ) : (
          <button
            onClick={handleRetakeQuiz}
            className="bg-slate-200 hover:bg-slate-300 text-slate-700 font-semibold px-5 py-2.5 rounded text-xs transition-colors"
          >
            Refazer Teste de Fixação
          </button>
        )}
      </div>
    </div>
  );
};
