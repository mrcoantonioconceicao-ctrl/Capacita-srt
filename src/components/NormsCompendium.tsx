import React, { useState } from 'react';
import { Scale, Search, BookOpen, ShieldCheck } from 'lucide-react';
import { normasData } from '../data/normasData';

export const NormsCompendium: React.FC = () => {
  const [filterType, setFilterType] = useState<string>('Todos');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredNorms = normasData.filter((norm) => {
    const matchesType = filterType === 'Todos' || norm.type === filterType;
    const matchesSearch =
      norm.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      norm.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      norm.applicationForCaregivers.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesSearch;
  });

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 md:p-8 text-slate-800 shadow-sm max-w-5xl mx-auto space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div className="flex items-center space-x-3">
          <div className="p-2.5 bg-teal-50 text-teal-600 rounded-lg">
            <Scale className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-800">Compêndio Normativo da Saúde Mental</h2>
            <p className="text-xs text-slate-500">Leis, Portarias Federais e Diretrizes RAPS aplicadas às SRTs (Blumenau/SC)</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {['Todos', 'Lei', 'Portaria', 'Resolução', 'Diretriz'].map((type) => (
            <button
              key={type}
              onClick={() => setFilterType(type)}
              className={`px-3 py-1.5 rounded text-xs font-medium transition-colors ${
                filterType === type
                  ? 'bg-teal-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <div className="relative">
        <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
        <input
          type="text"
          placeholder="Pesquisar leis, portarias, RAPS Blumenau ou termos técnicos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-slate-50 border border-slate-200 rounded pl-9 pr-4 py-2 text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-teal-500 font-sans"
        />
      </div>

      <div className="space-y-4">
        {filteredNorms.map((norm) => (
          <div key={norm.id} className="bg-slate-50 p-5 rounded-lg border border-slate-200 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center space-x-2">
                <BookOpen className="w-4 h-4 text-teal-600" />
                <h3 className="font-bold text-base text-slate-800">{norm.title}</h3>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-teal-100 text-teal-800">
                  {norm.type}
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-600">
                  {norm.sphere}
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-700 leading-relaxed">{norm.summary}</p>

            <div className="space-y-2 pt-2">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Artigos e Dispositivos Chave:</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {norm.keyArticles.map((art, idx) => (
                  <div key={idx} className="bg-white p-3 rounded border border-slate-200 text-xs">
                    <span className="font-bold text-teal-800 block mb-1">{art.articleNumber}</span>
                    <span className="text-slate-700 leading-relaxed">{art.description}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-3 bg-teal-50 border border-teal-200 rounded text-xs text-teal-900 flex items-start space-x-2">
              <ShieldCheck className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
              <div>
                <strong>Aplicação Prática no Cotidiano do Cuidador:</strong>{' '}
                {norm.applicationForCaregivers}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
