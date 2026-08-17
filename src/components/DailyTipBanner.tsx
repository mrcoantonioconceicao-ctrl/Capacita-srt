import React, { useState, useEffect } from 'react';
import { Lightbulb, Quote, RefreshCw, Copy, Check, Sparkles, HeartHandshake } from 'lucide-react';

export interface DailyTip {
  id: number;
  quote: string;
  author: string;
  tag: string;
  concept: string;
}

export const ANTIMANICOMIAL_TIPS: DailyTip[] = [
  {
    id: 1,
    quote: "Trancar não é cuidar. Cuidar em liberdade é construir vínculos cotidianos, respeitar a singularidade e garantir o direito inalienável do morador de habitar a cidade.",
    author: "Lei Antimanicomial nº 10.216/2001",
    tag: "Direitos Humanos",
    concept: "Cuidado em Liberdade"
  },
  {
    id: 2,
    quote: "O cuidador na SRT não faz PELO morador, ele faz COM o morador. A verdadeira reabilitação psicossocial nasce na retomada dos gestos simples do cotidiano e no resgate da autonomia.",
    author: "Diretrizes de Reabilitação Psicossocial (Saraceno)",
    tag: "Autonomia & Dignidade",
    concept: "Reabilitação Terapêutica"
  },
  {
    id: 3,
    quote: "Não se cura a dor da alma com isolamento e violência. É preciso afeto, arte, liberdade e convivência social para reconstituir o laço rompido pela internação.",
    author: "Dra. Nise da Silveira",
    tag: "Afetividade",
    concept: "Afeto & Liberdade"
  },
  {
    id: 4,
    quote: "A Residência Terapêutica é um LAR, não um hospital. Cada escolha do morador — da comida ao horário de acordar — é uma vitória da cidadania e da desinstitucionalização.",
    author: "Modelo Residencial Salomão (Portaria MS 106/2000)",
    tag: "Cotidiano Domiciliar",
    concept: "Habitar com Dignidade"
  },
  {
    id: 5,
    quote: "Desinstitucionalizar não é apenas fechar as portas dos manicômios, mas criar novas possibilidades de vida, afeto, trabalho e cidadania no território.",
    author: "Paulo Amarante (Luta Antimanicomial)",
    tag: "Reforma Psiquiátrica",
    concept: "Desinstitucionalização"
  },
  {
    id: 6,
    quote: "Cidadania em saúde mental se mede pelo nível de contratualidade do sujeito: sua capacidade real de ter casa, trabalho, voz e rede de afeto social.",
    author: "Benedetto Saraceno",
    tag: "Cidadania",
    concept: "Contratualidade Social"
  },
  {
    id: 7,
    quote: "Na hora da crise, o tom de voz acolhedor do cuidador é a ponte para a calma. A desescalada verbal acolhe a dor sem jamais recorrer ao isolamento ou contenção brutal.",
    author: "Protocolo de Manejo de Crises (Projeto BETA)",
    tag: "Manejo Humanizado",
    concept: "Desescalada Verbal"
  },
  {
    id: 8,
    quote: "A medicação psicotrópica ajuda a organizar os sintomas, mas é a convivência afetuosa, a escuta sem julgamentos e o respeito que promovem a verdadeira cura.",
    author: "Rede de Atenção Psicossocial (RAPS)",
    tag: "Gestão do Cuidado",
    concept: "Cuidado Integral"
  },
  {
    id: 9,
    quote: "Escuta qualificada não exige respostas prontas. Às vezes, o maior gesto de cuidado do acompanhante é estar presente com calma, segurança e empatia.",
    author: "Acompanhamento Terapêutico (AT)",
    tag: "Vínculo Humano",
    concept: "Escuta Qualificada"
  },
  {
    id: 10,
    quote: "A loucura não deve ser confinada nem silenciada. A verdadeira convivência democrática se constrói quando a cidade aprende a acolher a diversidade humana na praça e na rua.",
    author: "Movimento dos Trabalhadores em Saúde Mental (MTSM)",
    tag: "Inclusão Social",
    concept: "Luta Antimanicomial"
  }
];

export const DailyTipBanner: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [copied, setCopied] = useState<boolean>(false);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  // Pick a random tip on initial component mount
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * ANTIMANICOMIAL_TIPS.length);
    setCurrentIndex(randomIndex);
  }, []);

  const currentTip = ANTIMANICOMIAL_TIPS[currentIndex];

  const handleNextTip = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => {
        let nextIndex;
        do {
          nextIndex = Math.floor(Math.random() * ANTIMANICOMIAL_TIPS.length);
        } while (nextIndex === prevIndex && ANTIMANICOMIAL_TIPS.length > 1);
        return nextIndex;
      });
      setIsAnimating(false);
    }, 150);
    setCopied(false);
  };

  const handleCopyTip = () => {
    navigator.clipboard.writeText(`"${currentTip.quote}" — ${currentTip.author}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-slate-900 text-white rounded-xl p-5 md:p-6 shadow-md border border-slate-800 relative overflow-hidden space-y-4">
      {/* Subtle background glow element */}
      <div className="absolute top-0 right-0 -mt-8 -mr-8 w-40 h-40 bg-teal-500/10 rounded-full blur-2xl pointer-events-none" />

      {/* Header bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-800 relative z-10">
        <div className="flex items-center space-x-2">
          <div className="p-1.5 bg-teal-500/20 text-teal-400 rounded-md border border-teal-500/30">
            <Lightbulb className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-xs font-bold text-teal-400 uppercase tracking-wider flex items-center gap-1.5">
              <span>Dica do Dia</span>
              <span className="text-[10px] text-slate-400 font-normal">|</span>
              <span className="text-slate-300 font-semibold">Luta Antimanicomial & Cuidado Humano</span>
            </h3>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <span className="px-2 py-0.5 rounded bg-teal-950 text-teal-300 border border-teal-800 text-[10px] font-mono font-bold">
            {currentTip.concept}
          </span>
          <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700 text-[10px] font-bold uppercase tracking-wider">
            {currentTip.tag}
          </span>
        </div>
      </div>

      {/* Quote Body with subtle transition animation */}
      <div className={`transition-opacity duration-150 relative z-10 ${isAnimating ? 'opacity-30' : 'opacity-100'}`}>
        <div className="flex items-start gap-3">
          <Quote className="w-7 h-7 text-teal-500/40 shrink-0 mt-0.5" />
          <div className="space-y-1.5">
            <p className="text-sm md:text-base font-medium text-slate-100 leading-relaxed italic">
              "{currentTip.quote}"
            </p>
            <p className="text-xs font-semibold text-teal-400 text-right">
              — {currentTip.author}
            </p>
          </div>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="flex items-center justify-between pt-3 border-t border-slate-800 text-xs text-slate-400 relative z-10">
        <button
          onClick={handleCopyTip}
          className="text-slate-300 hover:text-white flex items-center space-x-1.5 transition-colors font-medium text-[11px]"
          title="Copiar texto da dica"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400 font-bold">Copiado para a área de transferência!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 text-slate-400" />
              <span>Copiar Reflexão</span>
            </>
          )}
        </button>

        <button
          onClick={handleNextTip}
          className="bg-slate-800 hover:bg-slate-700 text-teal-300 hover:text-white px-3 py-1.5 rounded-lg font-bold text-[11px] transition-colors flex items-center space-x-1.5 border border-slate-700 shadow-xs"
          title="Sortear outra reflexão"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${isAnimating ? 'animate-spin' : ''}`} />
          <span>Sorteia Outra Dica ({currentIndex + 1}/{ANTIMANICOMIAL_TIPS.length})</span>
        </button>
      </div>
    </div>
  );
};
