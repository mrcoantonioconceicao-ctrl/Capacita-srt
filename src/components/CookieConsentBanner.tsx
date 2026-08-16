import React from 'react';
import { ShieldCheck, Cookie, FileText, CheckCircle2 } from 'lucide-react';

interface CookieConsentBannerProps {
  onAccept: () => void;
  onOpenPrivacyPolicy: () => void;
}

export const CookieConsentBanner: React.FC<CookieConsentBannerProps> = ({
  onAccept,
  onOpenPrivacyPolicy
}) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 bg-slate-900/95 text-white border-t-2 border-teal-500 backdrop-blur-md shadow-2xl animate-in fade-in slide-in-from-bottom duration-300">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        {/* Banner Content */}
        <div className="flex items-start space-x-3.5 max-w-3xl">
          <div className="w-10 h-10 rounded-xl bg-teal-500/20 border border-teal-500/40 text-teal-400 flex items-center justify-center shrink-0 mt-0.5">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div className="space-y-1 text-xs leading-relaxed">
            <h3 className="font-bold text-sm text-slate-100 flex items-center gap-2">
              <span>Aviso de Privacidade, Proteção de Dados e Cookies</span>
              <span className="text-[10px] bg-teal-500/20 text-teal-300 px-2 py-0.5 rounded font-mono">
                LGPD
              </span>
            </h3>
            <p className="text-slate-300">
              Utilizamos armazenamento local e cookies essenciais para salvar seu progresso nos módulos, registrar suas notas de avaliação e emitir seu Certificado Oficial de 40 Horas. Seus dados não são compartilhados com terceiros nem comercializados.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-2.5 shrink-0 self-end md:self-center w-full md:w-auto">
          <button
            onClick={onOpenPrivacyPolicy}
            className="text-xs text-slate-300 hover:text-teal-300 font-semibold px-3 py-2 rounded-lg border border-slate-700 hover:bg-slate-800 transition-colors flex items-center space-x-1.5"
          >
            <FileText className="w-3.5 h-3.5 text-teal-400" />
            <span>Ler Termos & LGPD</span>
          </button>

          <button
            onClick={onAccept}
            className="bg-teal-500 hover:bg-teal-600 text-slate-950 font-extrabold px-4 py-2 rounded-lg text-xs transition-colors flex items-center justify-center space-x-1.5 shadow-md flex-1 md:flex-none"
          >
            <CheckCircle2 className="w-4 h-4 text-slate-950" />
            <span>Aceitar e Continuar</span>
          </button>
        </div>
      </div>
    </div>
  );
};
