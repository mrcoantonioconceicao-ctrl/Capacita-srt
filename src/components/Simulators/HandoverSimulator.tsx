import React, { useState } from 'react';
import { Send, CheckCircle2, AlertTriangle, RefreshCw, FileText } from 'lucide-react';

interface ResidentOption {
  id: string;
  name: string;
  age: number;
  condition: string;
  shiftEvents: string;
}

const RESIDENTS: ResidentOption[] = [
  {
    id: 'res-1',
    name: 'Seu Geraldo de Oliveira',
    age: 62,
    condition: 'Esquizofrenia Paranoide, Hipertensão',
    shiftEvents: 'Recusou o café da manhã inicial por receio de punição. Após acolhimento e escuta da cuidadora, aceitou o pão com manteiga às 09h. Queixou-se de dor articular leve no joelho direito.'
  },
  {
    id: 'res-2',
    name: 'Dona Maria Francisca',
    age: 68,
    condition: 'Esquizofrenia Residual, Osteoartrose',
    shiftEvents: 'Banho matinal prorrogado para as 10h30min devido a gatilho emocional com água fria. Banho morno realizado com sucesso. Queimação gástrica relatada às 12h30min.'
  },
  {
    id: 'res-3',
    name: 'Seu Antônio Carlos',
    age: 54,
    condition: 'Transtorno Espectro Esquizofrenia',
    shiftEvents: 'Agitação psicomotora com alucinações auditivas por volta das 15h. Desescalada verbal realizada com sucesso em 15 minutos sem contenção física. Tomou medicação de resgate orientada no PTS.'
  }
];

export const HandoverSimulator: React.FC = () => {
  const [selectedResident, setSelectedResident] = useState<ResidentOption>(RESIDENTS[0]);
  const [sSituation, setSSituation] = useState('');
  const [bBackground, setBBackground] = useState('');
  const [aAssessment, setAAssessment] = useState('');
  const [rRecommendation, setRRecommendation] = useState('');
  const [evaluated, setEvaluated] = useState(false);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState<string[]>([]);

  const handleEvaluate = () => {
    const fb: string[] = [];
    let currentScore = 0;

    if (sSituation.trim().length >= 15) {
      currentScore += 25;
      fb.push('✔ Situação (S): Identificou claramente o evento atual e o morador.');
    } else {
      fb.push('✖ Situação (S): Muito sucinta. Detalhe melhor o morador e o fato recente.');
    }

    if (bBackground.trim().length >= 15) {
      currentScore += 25;
      fb.push('✔ Histórico (B): Descreveu adequadamente o contexto prévio e as patologias.');
    } else {
      fb.push('✖ Histórico (B): O contexto prévio ou diagnóstico precisa ser mencionado.');
    }

    if (aAssessment.trim().length >= 15) {
      currentScore += 25;
      fb.push('✔ Avaliação (A): Registrou com precisão os sinais observados no seu plantão.');
    } else {
      fb.push('✖ Avaliação (A): Faltam detalhes objetivos sobre o comportamento e sinais vitais.');
    }

    if (rRecommendation.trim().length >= 15) {
      currentScore += 25;
      fb.push('✔ Recomendação (R): Indicou orientações claras e acionáveis para o próximo turno.');
    } else {
      fb.push('✖ Recomendação (R): Especifique o que a equipe do próximo turno deve monitorar.');
    }

    setScore(currentScore);
    setFeedback(fb);
    setEvaluated(true);
  };

  const handleReset = () => {
    setSSituation('');
    setBBackground('');
    setAAssessment('');
    setRRecommendation('');
    setEvaluated(false);
  };

  const fillTemplate = () => {
    setSSituation(`Passagem de plantão para ${selectedResident.name} (${selectedResident.age} anos). Evento relevante: ${selectedResident.shiftEvents}`);
    setBBackground(`Diagnóstico de ${selectedResident.condition}. Residente da SRT Salomão sob acompanhamento continuado do CAPS II/III Blumenau.`);
    setAAssessment(`Durante o turno, apresentou estado mental lúcido porém demandando atenção em virtude dos eventos relatados. Sinais vitais aferidos e medicação das 14h administrada.`);
    setRRecommendation(`Monitorar aceitação das refeições, incentivar ingesta hídrica de no mínimo 500ml no turno noturno e verificar queixa de desconforto físico antes das 22h.`);
    setEvaluated(false);
  };

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 md:p-8 text-slate-800 shadow-sm max-w-4xl mx-auto space-y-6">
      <div className="flex items-center space-x-3 pb-4 border-b border-slate-200">
        <div className="p-2.5 bg-teal-50 text-teal-600 rounded-lg">
          <FileText className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-slate-800">Simulador de Passagem de Plantão SBAR</h2>
          <p className="text-xs text-slate-500">Treine a comunicação efetiva e sem ruídos para a transição de turno na SRT Salomão</p>
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
          1. Selecione o Morador em Atendimento no Turno:
        </label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {RESIDENTS.map((res) => (
            <button
              key={res.id}
              onClick={() => {
                setSelectedResident(res);
                handleReset();
              }}
              className={`text-left p-3.5 rounded-lg border transition-all ${
                selectedResident.id === res.id
                  ? 'bg-teal-50 border-teal-500 text-teal-900 ring-1 ring-teal-500'
                  : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
              }`}
            >
              <div className="font-semibold text-sm">{res.name}</div>
              <div className="text-xs text-slate-500 mt-1">{res.age} anos • {res.condition}</div>
            </button>
          ))}
        </div>
      </div>

      <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
        <div className="text-xs font-bold text-teal-800 uppercase tracking-wider mb-1">
          Ocorrências Registradas no Seu Turno:
        </div>
        <p className="text-sm text-slate-700 leading-relaxed">{selectedResident.shiftEvents}</p>
        <button
          onClick={fillTemplate}
          className="mt-3 text-xs bg-white border border-slate-200 hover:bg-slate-100 text-teal-700 font-medium px-3 py-1.5 rounded transition-colors inline-flex items-center space-x-1.5 shadow-xs"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Preencher Exemplo SBAR Ideal</span>
        </button>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">
            S — Situação (Situation): O que está acontecendo agora?
          </label>
          <input
            type="text"
            value={sSituation}
            onChange={(e) => setSSituation(e.target.value)}
            placeholder="Ex: Seu Geraldo apresentou recusa do café da manhã às 08h alegando medo de punição..."
            className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-teal-500 font-sans"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">
            B — Breve Histórico (Background): Qual o contexto clínico e histórico?
          </label>
          <input
            type="text"
            value={bBackground}
            onChange={(e) => setBBackground(e.target.value)}
            placeholder="Ex: Diagnóstico de Esquizofrenia com histórico de 30 anos de asilamento psiquiátrico prévio..."
            className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-teal-500 font-sans"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">
            A — Avaliação (Assessment): Qual a sua análise do estado atual?
          </label>
          <input
            type="text"
            value={aAssessment}
            onChange={(e) => setAAssessment(e.target.value)}
            placeholder="Ex: Aceitou alimentação às 09h após escuta qualificada. Apresenta queixa de dor no joelho..."
            className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-teal-500 font-sans"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">
            R — Recomendação (Recommendation): O que a equipe da noite/próximo turno deve fazer?
          </label>
          <input
            type="text"
            value={rRecommendation}
            onChange={(e) => setRRecommendation(e.target.value)}
            placeholder="Ex: Oferecer jantar em ambiente calmo, reforçar vínculo afetuoso e observar dor articular..."
            className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-teal-500 font-sans"
          />
        </div>
      </div>

      <div className="flex items-center space-x-3 pt-2">
        <button
          onClick={handleEvaluate}
          className="bg-teal-600 hover:bg-teal-700 text-white font-bold px-5 py-2.5 rounded-lg text-xs uppercase tracking-wider transition-colors flex items-center space-x-2 shadow-sm"
        >
          <Send className="w-4 h-4" />
          <span>Validar Passagem de Plantão</span>
        </button>
        <button
          onClick={handleReset}
          className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium px-4 py-2.5 rounded-lg text-xs transition-colors"
        >
          Limpar Campos
        </button>
      </div>

      {evaluated && (
        <div className="p-5 bg-slate-50 border border-slate-200 rounded-xl space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200">
            <div className="flex items-center space-x-2">
              {score === 100 ? (
                <CheckCircle2 className="w-6 h-6 text-emerald-600" />
              ) : (
                <AlertTriangle className="w-6 h-6 text-amber-600" />
              )}
              <h3 className="font-bold text-base text-slate-800">
                Nota de Qualidade SBAR: <span className={score === 100 ? 'text-emerald-700' : 'text-amber-700'}>{score}%</span>
              </h3>
            </div>
            <span className="text-xs font-bold px-2.5 py-1 rounded bg-white border border-slate-200 text-slate-700">
              {score === 100 ? 'Comunicação Perfeita' : 'Necessita de Ajuste'}
            </span>
          </div>

          <div className="space-y-2">
            {feedback.map((item, idx) => (
              <div
                key={idx}
                className={`text-xs p-2.5 rounded ${
                  item.startsWith('✔')
                    ? 'bg-emerald-50 text-emerald-900 border border-emerald-200'
                    : 'bg-amber-50 text-amber-900 border border-amber-200'
                }`}
              >
                {item}
              </div>
            ))}
          </div>

          <div className="p-3 bg-teal-50 border border-teal-200 rounded-lg text-xs text-teal-900">
            <strong>Dica Técnica de Ouro:</strong> Lembre-se de registrar este mesmo conteúdo de forma idêntica no Livro de Diário de Bordo da SRT Salomão com sua assinatura e horário antes de ir embora.
          </div>
        </div>
      )}
    </div>
  );
};
