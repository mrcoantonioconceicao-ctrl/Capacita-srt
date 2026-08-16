import React, { useRef } from 'react';
import { UserProgress } from '../types/course';
import { Award, Printer, X, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface CertificateModalProps {
  userProgress: UserProgress;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  userProgress,
  onClose
}) => {
  const certificateRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    window.print();
  };

  const completedCount = userProgress.completedModules.length;
  const isEligible = completedCount === 5;
  const finalExamScore = userProgress.finalExamScore;
  const isPassedExam = userProgress.finalExamPassed;

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white border border-slate-200 rounded-xl max-w-4xl w-full p-6 text-slate-800 shadow-2xl space-y-6 relative my-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center space-x-3 pb-4 border-b border-slate-200">
          <Award className="w-6 h-6 text-teal-600" />
          <h2 className="text-xl font-bold text-slate-800">Certificado Oficial de Capacitação Profissional</h2>
        </div>

        {!isEligible && (
          <div className="p-4 bg-amber-50 border border-amber-200 rounded text-amber-900 text-xs space-y-1">
            <strong>Atenção:</strong> Você concluiu {completedCount} de 5 módulos operacionais. O certificado abaixo é um modelo de pré-visualização. Finalize todos os módulos e a Prova Final (20 Questões) para registrar sua emissão definitiva.
          </div>
        )}

        {/* Certificate Frame for Print */}
        <div
          ref={certificateRef}
          className="bg-white p-8 md:p-12 rounded border-4 border-teal-600 text-slate-900 space-y-6 relative overflow-hidden shadow-sm print:p-8"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-teal-50 rounded-bl-full pointer-events-none" />

          <div className="text-center space-y-2">
            <div className="inline-flex items-center space-x-2 text-teal-700 font-bold uppercase tracking-widest text-xs">
              <ShieldCheck className="w-4 h-4" />
              <span>República Federativa do Brasil • SUS • RAPS Blumenau</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-800 uppercase font-serif">
              Certificado de Capacitação Profissional
            </h1>
            <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold">
              Serviço de Residência Terapêutica (SRT Salomão - Blumenau / SC)
            </p>
          </div>

          <div className="py-6 text-center space-y-4 border-y border-slate-200">
            <p className="text-sm md:text-base text-slate-700 leading-relaxed font-sans">
              Certificamos que <strong className="text-teal-800 text-lg md:text-xl underline decoration-teal-500">{userProgress.userName || 'Cuidador(a) de Saúde Mental'}</strong>
              {userProgress.cpfOrRegistration ? (
                <span className="text-slate-600 text-xs block font-semibold mt-0.5">
                  CPF/Registro: {userProgress.cpfOrRegistration} • Função: {userProgress.userRole}
                </span>
              ) : null}
              concluiu com êxito a capacitação técnica, ética e normativa continuada em:
            </p>

            <div className="py-2 text-xl font-bold text-slate-900 tracking-wide font-serif">
              "Cuidado Prático, Humanizado e Manejo Operacional em Residências Terapêuticas"
            </div>

            <p className="text-xs md:text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Com fundamentação na Lei Federal nº 10.216/2001, Portarias GM/MS nº 106/2000, 3.088/2011, RDC 50 ANVISA, Protocolo SBAR de Comunicação Interdisciplinar, Técnica de Desescalada Verbal em Crises (Método Richmond / Projeto BETA) e Gestão Segura de Fármacos.
            </p>

            {finalExamScore !== undefined && (
              <div className="inline-flex items-center space-x-1.5 bg-teal-50 border border-teal-200 text-teal-900 px-3 py-1 rounded-full text-xs font-bold">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
                <span>
                  Aprovado(a) na Prova Final Integradora com {finalExamScore} de 20 acertos ({Math.round((finalExamScore / 20) * 100)}%)
                </span>
              </div>
            )}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-xs">
            <div className="p-3 bg-slate-50 rounded border border-slate-200">
              <span className="text-slate-500 block text-[10px] font-bold uppercase">Carga Horária</span>
              <strong className="text-slate-800 text-sm">40 Horas</strong>
            </div>
            <div className="p-3 bg-slate-50 rounded border border-slate-200">
              <span className="text-slate-500 block text-[10px] font-bold uppercase">Módulos Concluídos</span>
              <strong className="text-slate-800 text-sm">{completedCount} / 5 Módulos</strong>
            </div>
            <div className="p-3 bg-slate-50 rounded border border-slate-200">
              <span className="text-slate-500 block text-[10px] font-bold uppercase">Data de Conclusão</span>
              <strong className="text-slate-800 text-sm">{userProgress.completionDate || '16/08/2026'}</strong>
            </div>
            <div className="p-3 bg-slate-50 rounded border border-slate-200">
              <span className="text-slate-500 block text-[10px] font-bold uppercase">Registro Validação</span>
              <strong className="text-teal-700 font-mono text-xs">SRT-SAL-2026-984</strong>
            </div>
          </div>

          <div className="pt-6 grid grid-cols-2 gap-8 text-center text-xs border-t border-slate-200">
            <div>
              <div className="w-40 border-b border-slate-400 mx-auto mb-1"></div>
              <p className="font-bold text-slate-800">Coordenação Geral de Saúde Mental</p>
              <p className="text-[10px] text-slate-500">Residencial Terapêutico Salomão — Blumenau / SC</p>
            </div>
            <div>
              <div className="w-40 border-b border-slate-400 mx-auto mb-1"></div>
              <p className="font-bold text-slate-800">Equipe Multidisciplinar RAPS</p>
              <p className="text-[10px] text-slate-500">Diretoria de Atenção Psicossocial</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2">
          <button
            onClick={onClose}
            className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold px-4 py-2 rounded text-xs transition-colors"
          >
            Fechar Janela
          </button>
          <button
            onClick={handlePrint}
            className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-5 py-2 rounded text-xs transition-colors flex items-center space-x-2 shadow-sm"
          >
            <Printer className="w-4 h-4" />
            <span>Imprimir Certificado</span>
          </button>
        </div>
      </div>
    </div>
  );
};
