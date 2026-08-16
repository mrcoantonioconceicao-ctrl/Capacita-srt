import React, { useState, useEffect } from 'react';
import { EssayTask } from '../types/course';
import { FileEdit, CheckCircle2, Eye, Sparkles, BookOpen } from 'lucide-react';

interface EssayComponentProps {
  essayTask: EssayTask;
  moduleId: number;
  onEssaySubmitted: (moduleId: number, answerText: string) => void;
  savedAnswer?: string;
  isAlreadySubmitted?: boolean;
}

export const EssayComponent: React.FC<EssayComponentProps> = ({
  essayTask,
  moduleId,
  onEssaySubmitted,
  savedAnswer = '',
  isAlreadySubmitted = false
}) => {
  const [answer, setAnswer] = useState<string>(savedAnswer);
  const [submitted, setSubmitted] = useState<boolean>(isAlreadySubmitted);
  const [showModelAnswer, setShowModelAnswer] = useState<boolean>(false);
  const [checkedCriteria, setCheckedCriteria] = useState<Record<number, boolean>>({});

  useEffect(() => {
    setAnswer(savedAnswer || '');
    setSubmitted(!!isAlreadySubmitted);
    setShowModelAnswer(false);
    setCheckedCriteria({});
  }, [moduleId, savedAnswer, isAlreadySubmitted]);

  const handleSubmit = () => {
    if (!answer.trim()) return;
    setSubmitted(true);
    onEssaySubmitted(moduleId, answer);
  };

  const toggleCriterion = (idx: number) => {
    setCheckedCriteria((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const lineCount = answer.split('\n').filter(Boolean).length || (answer ? 1 : 0);

  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-6">
      <div className="flex items-center space-x-3 pb-4 border-b border-slate-200">
        <div className="p-2.5 bg-teal-50 text-teal-600 rounded-lg">
          <FileEdit className="w-6 h-6" />
        </div>
        <div>
          <h3 className="font-bold text-base text-slate-800 uppercase tracking-wider">Prova de Conclusão de Módulo</h3>
          <p className="text-xs text-slate-500">Avaliação dissertativa e aplicação prática dos conceitos normativos</p>
        </div>
      </div>

      <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 space-y-2">
        <div className="text-xs font-bold text-teal-800 uppercase tracking-wider">Enunciado da Prova:</div>
        <p className="text-sm text-slate-700 leading-relaxed font-medium">
          {essayTask.prompt}
        </p>
      </div>

      <div className="space-y-3">
        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">
          Escreva sua resposta abaixo:
        </label>
        <textarea
          rows={8}
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          disabled={submitted}
          placeholder="Digite aqui sua resposta dissertativa abordando o papel do cuidador e as normativas vigentes..."
          className="w-full bg-slate-50 border border-slate-200 rounded p-4 text-xs text-slate-800 placeholder-slate-400 focus:ring-1 focus:ring-teal-500 outline-none resize-y leading-relaxed font-sans"
        />
        <div className="flex items-center justify-between text-[11px] text-slate-500">
          <span>Tamanho: ~{answer.length} caracteres ({lineCount} parágrafos)</span>
          <span>Sugerido: 15 a 25 linhas</span>
        </div>
      </div>

      {!submitted ? (
        <button
          onClick={handleSubmit}
          disabled={!answer.trim() || answer.trim().length < 50}
          className={`font-bold px-6 py-3 rounded text-xs uppercase tracking-wider transition-all flex items-center space-x-2 ${
            answer.trim().length >= 50
              ? 'bg-teal-600 hover:bg-teal-700 text-white shadow-md'
              : 'bg-slate-200 text-slate-400 cursor-not-allowed'
          }`}
        >
          <CheckCircle2 className="w-4 h-4" />
          <span>Enviar Avaliação</span>
        </button>
      ) : (
        <div className="p-5 bg-slate-50 border border-teal-200 rounded-lg space-y-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-teal-800 font-bold text-sm">
              <Sparkles className="w-5 h-5 text-teal-600" />
              <span>Avaliação Enviada! Faça a Autoavaliação de Rubrica</span>
            </div>
            <button
              onClick={() => setShowModelAnswer(!showModelAnswer)}
              className="text-xs bg-white border border-slate-200 hover:bg-slate-100 text-teal-700 font-medium px-3 py-1.5 rounded transition-colors flex items-center space-x-1.5"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>{showModelAnswer ? 'Ocultar Resposta Espelho' : 'Ver Resposta de Referência'}</span>
            </button>
          </div>

          <div className="space-y-3 pt-2 border-t border-slate-200">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Rubrica de Autoavaliação e Critérios de Correção:
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {essayTask.rubric.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => toggleCriterion(idx)}
                  className={`text-left p-3 rounded border text-xs transition-all ${
                    checkedCriteria[idx]
                      ? 'bg-teal-50 border-teal-500 text-teal-900'
                      : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                  }`}
                >
                  <div className="font-bold text-slate-800 mb-1 flex items-center justify-between">
                    <span>{item.criterion}</span>
                    <span className="text-[10px] text-teal-700 bg-teal-100 px-1.5 py-0.5 rounded font-mono">
                      {item.weight}
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-500 leading-normal">{item.guideline}</div>
                </button>
              ))}
            </div>
          </div>

          {showModelAnswer && (
            <div className="p-4 bg-white border border-slate-200 rounded space-y-2 text-xs text-slate-700">
              <div className="font-bold text-teal-800 flex items-center space-x-1.5">
                <BookOpen className="w-4 h-4 text-teal-600" />
                <span>Resposta Padrão de Referência:</span>
              </div>
              <p className="whitespace-pre-line leading-relaxed text-slate-700 bg-slate-50 p-3 rounded border border-slate-200 font-sans">
                {essayTask.modelAnswer}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
