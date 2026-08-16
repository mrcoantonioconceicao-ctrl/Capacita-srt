import React, { useState } from 'react';
import { ShieldAlert, RotateCcw, CheckCircle2, XCircle } from 'lucide-react';

interface ScenarioStep {
  id: number;
  title: string;
  situationText: string;
  options: {
    text: string;
    isCorrect: boolean;
    nextStepId: number | null;
    feedback: string;
  }[];
}

const DEESCALATION_STEPS: Record<number, ScenarioStep> = {
  1: {
    id: 1,
    title: 'Fase 1: O Primeiro Contato Visual e Corporal',
    situationText: 'Às 21h30min, o morador Seu Antônio está na sala da SRT agitando um objeto de madeira (cabo de rodo), com respiração arfante, afirmando que "tem invasores escondidos no teto para matá-lo". Ele está muito tenso. O que você faz primeiro?',
    options: [
      {
        text: 'Aproxima-se correndo por trás, tenta arrancar o cabo de madeira e grita: "Solta isso agora, Antônio!"',
        isCorrect: false,
        nextStepId: null,
        feedback: 'FALHA GRAVE: Aproximar-se correndo por trás e gritar intensifica a alucinação de perseguição. Antônio interpreta você como um dos "agressores", o que provoca tentativa de agressão física com o cabo.'
      },
      {
        text: 'Posiciona-se a 3 metros de distância, de lado, com as mãos abertas e visíveis, dizendo com voz calma: "Antônio, sou o [Nome], seu cuidador. Estou aqui com você e está tudo seguro."',
        isCorrect: true,
        nextStepId: 2,
        feedback: 'SUCESSO: Postura não confrontativa, distância física de segurança e tom de voz pausado. Antônio diminui o ritmo da respiração e olha para você.'
      },
      {
        text: 'Vai para a cozinha, fecha a porta e deixa Antônio sozinho na sala com os outros moradores.',
        isCorrect: false,
        nextStepId: null,
        feedback: 'FALHA GRAVE: Abandonar o morador em surto e deixar outros moradores expostos sem assistência viola o dever de cuidado e aumenta o risco de acidentes graves.'
      }
    ]
  },
  2: {
    id: 2,
    title: 'Fase 2: Comunicação Não-Violenta e Validação Emocional',
    situationText: 'Antônio continua segurando o cabo de rodo, mas diminuiu a agressividade. Ele diz chorando: "Você não ouve os passos no teto? Eles vieram me pegar!". Como você responde?',
    options: [
      {
        text: 'Deboche: "Deixa de besteira Antônio, não tem ninguém no teto, você tá ficando louco de novo!"',
        isCorrect: false,
        nextStepId: null,
        feedback: 'FALHA: Debochar ou invalidar a experiência do morador destrói a relação de confiança e causa fúria defensiva.'
      },
      {
        text: 'Validação da emoção sem concordar com a alucinação: "Antônio, eu não estou ouvindo os passos, mas entendo que você está sentindo muito medo. Na nossa casa ninguém vai te fazer mal."',
        isCorrect: true,
        nextStepId: 3,
        feedback: 'EXCELENTE: Você validou o SENTIMENTO (o medo é real para ele) sem alimentar o CONTEÚDO delirante. Antônio abaixa a ponta do cabo de madeira.'
      },
      {
        text: 'Fingir delírio total: "É verdade Antônio, eu também vi 5 homens no teto com armas! Vamos nos esconder embaixo do sofá!"',
        isCorrect: false,
        nextStepId: null,
        feedback: 'FALHA: Alimentar e confirmar o delírio aprofunda o pânico e o descontrole do morador.'
      }
    ]
  },
  3: {
    id: 3,
    title: 'Fase 3: Pactuação e Desarme Voluntário',
    situationText: 'Antônio abaixou a madeira e está com as mãos trêmulas. Os outros moradores já foram conduzidos suavemente para o jardim pelo seu colega de plantão. Qual a oferta de pactuação adequada?',
    options: [
      {
        text: 'Dizer: "Pode me entregar essa madeira aqui Antônio? Vamos sentar juntos na varanda e tomar um copo d\'água morna enquanto conversamos?"',
        isCorrect: true,
        nextStepId: 4,
        feedback: 'SUCESSO TOTAL: Pactuação respeitosa, oferta de acolhimento físico e desarme espontâneo sem necessidade de qualquer contenção física!'
      },
      {
        text: 'Aproveitar a distração para dar uma rasteira nele e imobilizá-lo no chão com cordas.',
        isCorrect: false,
        nextStepId: null,
        feedback: 'FALHA ÉTICA E LEGAL: Uso desproporcional e ilegal de força e contenção mecânica abusiva.'
      }
    ]
  },
  4: {
    id: 4,
    title: 'Fase 4: Estabilização e Pós-Crise',
    situationText: 'Antônio entregou o cabo, aceitou a água morna e está sentado na varanda acompanhado por você, recuperando a calma. O que deve ser feito a seguir?',
    options: [
      {
        text: 'Checar a prescrição do PTS no armário para medicação de resgate calmante se necessário, registrar a crise no livro de bordo e notificar a enfermagem do CAPS.',
        isCorrect: true,
        nextStepId: null,
        feedback: 'PROCESSO CONCLUÍDO COM EXCELÊNCIA: Crise manejada com 100% de humanização, segurança e respaldo normativo do Sistema Único de Saúde!'
      }
    ]
  }
};

export const DeescalationSimulator: React.FC = () => {
  const [currentStepId, setCurrentStepId] = useState<number>(1);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  const [isCompleted, setIsCompleted] = useState(false);
  const [hasFailed, setHasFailed] = useState(false);
  const [failFeedback, setFailFeedback] = useState('');

  const currentStep = DEESCALATION_STEPS[currentStepId];

  const handleSelectOption = (index: number) => {
    const opt = currentStep.options[index];
    setSelectedOptionIndex(index);

    if (opt.isCorrect) {
      if (opt.nextStepId) {
        setTimeout(() => {
          setCurrentStepId(opt.nextStepId!);
          setSelectedOptionIndex(null);
        }, 1200);
      } else {
        setIsCompleted(true);
      }
    } else {
      setHasFailed(true);
      setFailFeedback(opt.feedback);
    }
  };

  const handleRestart = () => {
    setCurrentStepId(1);
    setSelectedOptionIndex(null);
    setIsCompleted(false);
    setHasFailed(false);
    setFailFeedback('');
  };

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 md:p-8 text-slate-800 shadow-sm max-w-4xl mx-auto space-y-6">
      <div className="flex items-center space-x-3 pb-4 border-b border-slate-200">
        <div className="p-2.5 bg-teal-50 text-teal-600 rounded-lg">
          <ShieldAlert className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-slate-800">Simulador de Desescalada Verbal em Crise</h2>
          <p className="text-xs text-slate-500">Árvore de decisão em tempo real baseada nos 10 Princípios de Richmond (ABP / MS)</p>
        </div>
      </div>

      {!isCompleted && !hasFailed && (
        <div>
          <div className="flex items-center justify-between text-xs text-slate-500 font-bold uppercase tracking-wider mb-2">
            <span>{currentStep.title}</span>
            <span>Etapa 0{currentStepId} de 04</span>
          </div>

          <div className="w-full bg-slate-100 h-2 rounded-full mb-6 overflow-hidden border border-slate-200">
            <div
              className="bg-teal-600 h-full transition-all duration-300"
              style={{ width: `${(currentStepId / 4) * 100}%` }}
            />
          </div>

          <div className="p-5 bg-slate-900 text-white rounded-xl shadow-md mb-6 border border-slate-800">
            <p className="text-sm md:text-base text-slate-100 leading-relaxed font-medium">
              {currentStep.situationText}
            </p>
          </div>

          <div className="space-y-3">
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
              Escolha a Conduta do Cuidador:
            </label>
            {currentStep.options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleSelectOption(idx)}
                className={`w-full text-left p-4 rounded-lg border transition-all text-xs md:text-sm flex items-start space-x-3 ${
                  selectedOptionIndex === idx
                    ? opt.isCorrect
                      ? 'bg-emerald-50 border-emerald-500 text-emerald-900 font-medium'
                      : 'bg-rose-50 border-rose-500 text-rose-900'
                    : 'bg-slate-50 border-slate-200 text-slate-800 hover:bg-slate-100 hover:border-slate-300'
                }`}
              >
                <div className="p-1 rounded bg-slate-200 shrink-0 text-xs font-bold text-slate-700 mt-0.5">
                  {String.fromCharCode(65 + idx)}
                </div>
                <div className="flex-1 font-medium leading-relaxed">{opt.text}</div>
              </button>
            ))}
          </div>
        </div>
      )}

      {hasFailed && (
        <div className="p-6 bg-rose-50 border border-rose-200 rounded-xl text-slate-900 space-y-4">
          <div className="flex items-center space-x-3 text-rose-700">
            <XCircle className="w-8 h-8 shrink-0" />
            <div>
              <h3 className="text-base font-bold">Conduta Inadequada para Manejo de Crise</h3>
              <p className="text-xs text-rose-600">Sua escolha quebrou as diretrizes de desescalada verbal</p>
            </div>
          </div>
          <p className="text-xs md:text-sm text-rose-900 leading-relaxed bg-white p-4 rounded border border-rose-200">
            {failFeedback}
          </p>
          <button
            onClick={handleRestart}
            className="bg-rose-600 hover:bg-rose-700 text-white font-bold px-5 py-2.5 rounded text-xs uppercase tracking-wider transition-colors inline-flex items-center space-x-2"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Tentar Novamente a Desescalada</span>
          </button>
        </div>
      )}

      {isCompleted && (
        <div className="p-6 bg-teal-50 border border-teal-200 rounded-xl text-slate-900 space-y-4">
          <div className="flex items-center space-x-3 text-teal-800">
            <CheckCircle2 className="w-8 h-8 shrink-0 text-teal-600" />
            <div>
              <h3 className="text-base font-bold">Manejo de Crise Concluído com Sucesso!</h3>
              <p className="text-xs text-teal-700">Você evitou a violência e honrou a Lei 10.216/2001</p>
            </div>
          </div>
          <p className="text-xs md:text-sm text-slate-800 leading-relaxed bg-white p-4 rounded border border-teal-200">
            Parabéns! Sua conduta demonstrou empatia, segurança biomecânica, validação emocional e técnica impecável de desescalada verbal. Este é o padrão exigido na equipe do Residencial Terapêutico Salomão.
          </p>
          <button
            onClick={handleRestart}
            className="bg-teal-600 hover:bg-teal-700 text-white font-bold px-5 py-2.5 rounded text-xs uppercase tracking-wider transition-colors inline-flex items-center space-x-2 shadow-sm"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Reiniciar Simulação de Crise</span>
          </button>
        </div>
      )}
    </div>
  );
};
