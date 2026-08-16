import React, { useState, useMemo } from 'react';
import { glossaryTerms, GlossaryTerm } from '../data/glossaryData';
import {
  BookOpen,
  Search,
  Filter,
  Check,
  Copy,
  Scale,
  Sparkles,
  ShieldAlert,
  Building2,
  Brain,
  Pill,
  HeartHandshake,
  HelpCircle,
  X
} from 'lucide-react';

export const GlossaryViewer: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = [
    'Todos',
    'RAPS',
    'Legislação',
    'Psicopatologia',
    'Farmacologia',
    'Manejo & Técnica'
  ];

  const filteredTerms = useMemo(() => {
    return glossaryTerms.filter((item) => {
      const matchesCategory =
        selectedCategory === 'Todos' || item.category === selectedCategory;
      const query = searchTerm.toLowerCase().trim();
      const matchesSearch =
        !query ||
        item.term.toLowerCase().includes(query) ||
        item.shortDefinition.toLowerCase().includes(query) ||
        item.detailedExplanation.toLowerCase().includes(query) ||
        item.practicalApplication.toLowerCase().includes(query) ||
        (item.normativeReference && item.normativeReference.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, selectedCategory]);

  const handleCopyTerm = (term: GlossaryTerm) => {
    const textToCopy = `${term.term}\n\nDefinição: ${term.shortDefinition}\n\nDetalhamento: ${term.detailedExplanation}\n\nAplicação na SRT: ${term.practicalApplication}${
      term.normativeReference ? `\n\nBase Normativa: ${term.normativeReference}` : ''
    }`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedId(term.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'RAPS':
        return <Building2 className="w-3.5 h-3.5 text-teal-600" />;
      case 'Legislação':
        return <Scale className="w-3.5 h-3.5 text-amber-600" />;
      case 'Psicopatologia':
        return <Brain className="w-3.5 h-3.5 text-purple-600" />;
      case 'Farmacologia':
        return <Pill className="w-3.5 h-3.5 text-rose-600" />;
      case 'Manejo & Técnica':
        return <HeartHandshake className="w-3.5 h-3.5 text-emerald-600" />;
      default:
        return <BookOpen className="w-3.5 h-3.5 text-slate-600" />;
    }
  };

  const getCategoryBadgeStyle = (category: string) => {
    switch (category) {
      case 'RAPS':
        return 'bg-teal-50 text-teal-800 border-teal-200';
      case 'Legislação':
        return 'bg-amber-50 text-amber-800 border-amber-200';
      case 'Psicopatologia':
        return 'bg-purple-50 text-purple-800 border-purple-200';
      case 'Farmacologia':
        return 'bg-rose-50 text-rose-800 border-rose-200';
      case 'Manejo & Técnica':
        return 'bg-emerald-50 text-emerald-800 border-emerald-200';
      default:
        return 'bg-slate-100 text-slate-800 border-slate-200';
    }
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto text-slate-800">
      {/* Header Banner */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 md:p-8 space-y-4 shadow-xs">
        <div className="flex items-center space-x-2 text-xs font-bold text-teal-700 uppercase tracking-wider">
          <BookOpen className="w-4 h-4" />
          <span>Consulta Rápida de Conceitos de Saúde Mental & RAPS</span>
        </div>

        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-800 tracking-tight leading-tight">
            Glossário de Termos Técnicos & Diretrizes Terapêuticas
          </h1>
          <p className="text-sm text-slate-600 mt-1 leading-relaxed">
            Dicionário consultivo e fundamentado para cuidadores, acompanhantes terapêuticos e equipes técnicas do Residencial Terapêutico Salomão.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3 pt-4 border-t border-slate-200">
          {/* Search Box */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar termo, psicopatologia, lei ou remédio (ex: RAPS, Delírio, Acatisia, SBAR)..."
              className="w-full pl-9 pr-8 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 font-medium transition-all"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Quick Counter */}
          <div className="text-xs font-bold text-slate-500 px-3 py-2 bg-slate-100 rounded-lg border border-slate-200 whitespace-nowrap shrink-0 flex items-center gap-1.5">
            <Filter className="w-3.5 h-3.5 text-teal-600" />
            <span>Exibindo {filteredTerms.length} de {glossaryTerms.length} termos</span>
          </div>
        </div>

        {/* Category Pill Filters */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg font-semibold whitespace-nowrap transition-all flex items-center space-x-1.5 border ${
                  isSelected
                    ? 'bg-teal-600 text-white border-teal-600 shadow-xs'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                {cat !== 'Todos' && getCategoryIcon(cat)}
                <span>{cat}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Terms List Grid */}
      {filteredTerms.length === 0 ? (
        <div className="bg-white border border-slate-200 rounded-xl p-12 text-center space-y-3 shadow-xs">
          <HelpCircle className="w-10 h-10 text-slate-300 mx-auto" />
          <h3 className="text-base font-bold text-slate-700">Nenhum termo encontrado</h3>
          <p className="text-xs text-slate-500 max-w-md mx-auto">
            Não encontramos termos com a palavra "{searchTerm}". Tente buscar por termos mais genéricos como "CAPS", "Crise", "Pacing" ou mude o filtro de categoria.
          </p>
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('Todos');
            }}
            className="mt-2 bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors"
          >
            Limpar Filtros e Busca
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {filteredTerms.map((item) => {
            const isCopied = copiedId === item.id;

            return (
              <div
                key={item.id}
                className="bg-white border border-slate-200 rounded-xl p-5 md:p-6 shadow-xs hover:border-slate-300 transition-all space-y-4"
              >
                {/* Header of Term Card */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
                  <div className="flex items-center space-x-2.5 min-w-0">
                    <span
                      className={`px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider border flex items-center space-x-1 shrink-0 ${getCategoryBadgeStyle(
                        item.category
                      )}`}
                    >
                      {getCategoryIcon(item.category)}
                      <span>{item.category}</span>
                    </span>
                    <h2 className="text-base md:text-lg font-bold text-slate-800 truncate">
                      {item.term}
                    </h2>
                  </div>

                  <button
                    onClick={() => handleCopyTerm(item)}
                    className="self-start sm:self-auto text-xs text-slate-500 hover:text-teal-700 font-semibold flex items-center space-x-1 px-2.5 py-1 rounded bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors shrink-0"
                    title="Copiar definição completa"
                  >
                    {isCopied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700 font-bold">Copiado</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-400" />
                        <span>Copiar Termo</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Short Definition Highlight */}
                <div className="p-3.5 bg-teal-50/70 border-l-4 border-teal-500 rounded-r-lg text-xs font-medium text-teal-950 leading-relaxed">
                  <strong>Definição Sucinta:</strong> {item.shortDefinition}
                </div>

                {/* Detailed Explanation */}
                <div className="space-y-1.5 text-xs text-slate-700 leading-relaxed">
                  <strong className="text-slate-800 block uppercase tracking-wider text-[10px] font-bold text-slate-400">
                    Aprofundamento Técnico & Conceitual:
                  </strong>
                  <p className="text-slate-700">{item.detailedExplanation}</p>
                </div>

                {/* Practical Application in SRT */}
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs space-y-1">
                  <strong className="text-teal-800 block text-[11px] font-bold uppercase tracking-wider flex items-center space-x-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-teal-600" />
                    <span>Aplicação Prática no Cotidiano da SRT Salomão:</span>
                  </strong>
                  <p className="text-slate-700 leading-relaxed">{item.practicalApplication}</p>
                </div>

                {/* Normative Reference Footer */}
                {item.normativeReference && (
                  <div className="pt-2 flex items-center space-x-1.5 text-[11px] text-slate-500 font-mono">
                    <Scale className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>
                      <strong>Referência Normativa/Oficial:</strong> {item.normativeReference}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
