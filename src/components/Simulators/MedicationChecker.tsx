import React, { useState } from 'react';
import { Pill, Search, AlertCircle, CheckSquare, ShieldCheck, HelpCircle } from 'lucide-react';

interface SideEffectInfo {
  name: string;
  category: string;
  symptoms: string;
  culpritDrugs: string;
  caregiverAction: string;
}

const SIDE_EFFECTS_LIST: SideEffectInfo[] = [
  {
    name: 'Acatisia',
    category: 'Sintoma Extrapiramidal Agudo (SEP)',
    symptoms: 'Sensação de inquietação motora insuportável nas pernas, incapacidade de ficar sentado, perambulação constante, marcha ansiosa.',
    culpritDrugs: 'Haloperidol (Haldol), Risperidona, Chlorpromazina (Amplictil).',
    caregiverAction: 'NÃO confundir com "rebeldia" ou "piora da agitação". Acolher o morador, permitir a caminhada sem cobrança, notificar o enfermeiro/médico do CAPS imediatamente para ajuste de dosagem ou prescrição de biperideno/propranolol.'
  },
  {
    name: 'Parkinsonismo Medicamentoso',
    category: 'Sintoma Extrapiramidal Crônico (SEP)',
    symptoms: 'Rigidez muscular (braços rígidos em cano de chumbo), tremores sutis nas mãos em repouso, diminuição da mímica facial (fácie em máscara) e babação/sialorreia.',
    culpritDrugs: 'Antipsicóticos de 1ª Geração (Haloperidol, Flufenazina, Zuclopentixol).',
    caregiverAction: 'Proteger contra quedas (passos curtos e lentos), manter toalha macia para higiene oral suave, oferecer líquidos com canudo se houver engasgo e notificar equipe para reavaliação médica.'
  },
  {
    name: 'Distonia Aguda',
    category: 'Urgência Extrapiramidal',
    symptoms: 'Contração muscular involuntária dolorosa do pescoço (torcicolo grave), espasmo da língua ou desvio do olhar para cima (crise oculógira).',
    culpritDrugs: 'Haloperidol em altas doses, Injetáveis de depósito.',
    caregiverAction: 'Manter a calma, acalmar o morador para evitar sufocamento emocional, acionar o médico do CAPS ou SAMU 192 para administração urgente de biperideno injetável.'
  },
  {
    name: 'Sedação Excessiva e Hipotensão Ortostática',
    category: 'Efeito Neuroléptico/Ansiolítico',
    symptoms: 'Tontura forte ao se levantar da cama/cadeira, sonolência profunda no período diurno, lentificação da fala.',
    culpritDrugs: 'Olanzapina, Quetiapina, Clonazepam (Rivotril), Diazepam.',
    caregiverAction: 'Orientar o morador a sentar na beira da cama por 2 minutos antes de ficar em pé, auxiliar o caminhar para evitar quedas no banheiro e verificar pressão arterial.'
  }
];

const NINE_RIGHTS = [
  { id: 'm1', name: '1. Morador Certo', desc: 'Conferir o nome completo e foto no gaveteiro exclusivo da SRT Salomão.' },
  { id: 'm2', name: '2. Medicamento Certo', desc: 'Conferir o nome do fármaco na embalagem com a prescrição do CAPS.' },
  { id: 'm3', name: '3. Via Certa', desc: 'Verificar se é via oral (VO), gotas, sublingual ou injetável.' },
  { id: 'm4', name: '4. Dose Certa', desc: 'Checar a quantidade exata de miligramas (mg) ou número de gotas.' },
  { id: 'm5', name: '5. Hora Certa', desc: 'Respeitar a janela do horário prescrito (ex: 08h, 14h, 20h).' },
  { id: 'm6', name: '6. Tempo/Duração Certa', desc: 'Conferir se o tratamento é contínuo ou por dias determinados.' },
  { id: 'm7', name: '7. Ação Certa / Indicação', desc: 'Saber para que serve aquele psicotrópico no tratamento.' },
  { id: 'm8', name: '8. Registro Certo', desc: 'Anotar imediatamente no livro de checagem com horário e visto.' },
  { id: 'm9', name: '9. Formato/Apresentação Certa', desc: 'Checar se o comprimido é simples, de liberação prolongada ou solução.' }
];

export const MedicationChecker: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [checkedRights, setCheckedRights] = useState<Record<string, boolean>>({});

  const toggleRight = (id: string) => {
    setCheckedRights((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const allRightsChecked = NINE_RIGHTS.every((r) => checkedRights[r.id]);

  const filteredSideEffects = SIDE_EFFECTS_LIST.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.symptoms.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.culpritDrugs.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 md:p-8 text-slate-800 shadow-sm max-w-4xl mx-auto space-y-8">
      <div className="flex items-center space-x-3 pb-4 border-b border-slate-200">
        <div className="p-2.5 bg-teal-50 text-teal-600 rounded-lg">
          <Pill className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-slate-800">Gestão e Segurança Medicamentosa</h2>
          <p className="text-xs text-slate-500">Guia de Bolso dos 9 Certos e Mapeamento de Efeitos Colaterais Extrapiramidais</p>
        </div>
      </div>

      {/* Checklist 9 Certos */}
      <div className="bg-slate-50 p-5 rounded-lg border border-slate-200 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <CheckSquare className="w-5 h-5 text-teal-600" />
            <h3 className="font-bold text-sm text-slate-800 uppercase tracking-wider">Simulador do Protocolo dos 9 Certos</h3>
          </div>
          <span className="text-xs text-slate-500 font-semibold">
            {Object.values(checkedRights).filter(Boolean).length} de 9 confirmados
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {NINE_RIGHTS.map((right) => (
            <button
              key={right.id}
              onClick={() => toggleRight(right.id)}
              className={`text-left p-3 rounded border transition-all text-xs ${
                checkedRights[right.id]
                  ? 'bg-teal-50 border-teal-500 text-teal-900 font-medium'
                  : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
              }`}
            >
              <div className="font-bold text-slate-800 mb-1">{right.name}</div>
              <div className="text-[11px] leading-tight text-slate-500">{right.desc}</div>
            </button>
          ))}
        </div>

        {allRightsChecked && (
          <div className="p-3 bg-teal-100 border border-teal-300 rounded text-teal-900 text-xs flex items-center space-x-2 font-medium">
            <ShieldCheck className="w-5 h-5 shrink-0 text-teal-700" />
            <span>
              <strong>Segurança Máxima Confirmada!</strong> Você realizou a checagem dos 9 Certos. A dose do morador está autorizada para administração na SRT Salomão.
            </span>
          </div>
        )}
      </div>

      {/* Mapeamento Efeitos Colaterais */}
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div className="flex items-center space-x-2">
            <AlertCircle className="w-5 h-5 text-amber-600" />
            <h3 className="font-bold text-sm text-slate-800 uppercase tracking-wider">Consulta Rápida de Efeitos Extrapiramidais</h3>
          </div>

          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="Buscar por efeito, remédio ou sintoma..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-slate-50 border border-slate-200 rounded pl-9 pr-3 py-1.5 text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-teal-500 w-full md:w-64"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredSideEffects.map((item, idx) => (
            <div key={idx} className="bg-slate-50 p-4 rounded-lg border border-slate-200 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-sm text-slate-900">{item.name}</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-600 font-bold">{item.category}</span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                <strong>Sintomas:</strong> {item.symptoms}
              </p>
              <p className="text-xs text-slate-500">
                <strong>Causadores:</strong> {item.culpritDrugs}
              </p>
              <div className="p-2.5 bg-white border border-slate-200 rounded text-[11px] text-slate-800">
                <strong className="text-teal-800">Conduta do Cuidador:</strong> {item.caregiverAction}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-4 bg-teal-50 border border-teal-200 rounded-lg flex items-start space-x-3 text-xs text-teal-900">
        <HelpCircle className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          <strong>Lembrete Ético Importante:</strong> Se o morador manifestar recusa ao fármaco, jamais mascare a medicação em alimentos. Dialogue, escute o motivo do incômodo e relate ao enfermeiro de referência do CAPS II/III de Blumenau.
        </p>
      </div>
    </div>
  );
};
