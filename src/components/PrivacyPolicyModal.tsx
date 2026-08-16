import React from 'react';
import { X, ShieldCheck, Lock, FileText, UserCheck, Database, HardDrive, CheckCircle2 } from 'lucide-react';

interface PrivacyPolicyModalProps {
  onClose: () => void;
}

export const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white border border-slate-200 rounded-xl max-w-3xl w-full p-6 md:p-8 text-slate-800 shadow-2xl space-y-6 relative my-8">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
          title="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center space-x-3 pb-4 border-b border-slate-200">
          <div className="w-10 h-10 rounded-lg bg-teal-100 text-teal-700 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-800">Termos de Uso & Política de Privacidade</h2>
            <p className="text-xs text-slate-500 font-medium">
              Conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018)
            </p>
          </div>
        </div>

        {/* Scrollable Legal Body */}
        <div className="space-y-6 text-xs text-slate-700 max-h-[60vh] overflow-y-auto pr-2 scrollbar-thin">
          {/* Section 1 */}
          <div className="space-y-2">
            <h3 className="text-sm font-bold text-slate-800 flex items-center space-x-1.5">
              <Lock className="w-4 h-4 text-teal-600" />
              <span>1. Compromisso com a Privacidade e Proteção de Dados</span>
            </h3>
            <p className="leading-relaxed">
              O programa <strong>Capacita SRT Salomão</strong> (plataforma de formação profissional do Residencial Terapêutico Salomão) assume o compromisso de proteger a privacidade, a confidencialidade e a segurança das informações cadastradas por cuidadores, acompanhantes e profissionais de saúde mental.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-2">
            <h3 className="text-sm font-bold text-slate-800 flex items-center space-x-1.5">
              <Database className="w-4 h-4 text-teal-600" />
              <span>2. Coleta e Finalidade dos Dados Coletados</span>
            </h3>
            <p className="leading-relaxed">
              Para possibilitar o acompanhamento do aprendizado e a emissão válida de certificados de conclusão, coletamos apenas os dados estritamente necessários:
            </p>
            <ul className="list-disc list-inside space-y-1 bg-slate-50 p-3 rounded-lg border border-slate-200 font-medium text-slate-700">
              <li><strong>Nome Completo:</strong> impresso diretamente no Certificado Oficial de Capacitação.</li>
              <li><strong>E-mail de Contato:</strong> registro individual do perfil do aluno.</li>
              <li><strong>CPF ou Registro Profissional:</strong> validação e autenticidade do documento emitido.</li>
              <li><strong>Cargo/Função & Unidade SRT:</strong> contexto institucional do profissional.</li>
              <li><strong>Histórico de Progresso (Notas de Quizzes, Prova Final e Respostas):</strong> cômputo da carga horária certificada (40 horas).</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="space-y-2">
            <h3 className="text-sm font-bold text-slate-800 flex items-center space-x-1.5">
              <HardDrive className="w-4 h-4 text-teal-600" />
              <span>3. Armazenamento Local e Não Comercialização</span>
            </h3>
            <p className="leading-relaxed">
              Seus dados de progresso e cadastro são mantidos de forma segura no <strong>armazenamento local do seu próprio navegador (LocalStorage)</strong> e utilizados exclusivamente para o seu histórico educacional.
            </p>
            <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg text-amber-900 font-medium">
              <strong>Garantia de Segurança Legal:</strong> Os seus dados jamais serão vendidos, alugados, comercializados ou compartilhados com terceiros, parceiros comerciais ou empresas de publicidade.
            </div>
          </div>

          {/* Section 4 */}
          <div className="space-y-2">
            <h3 className="text-sm font-bold text-slate-800 flex items-center space-x-1.5">
              <UserCheck className="w-4 h-4 text-teal-600" />
              <span>4. Seus Direitos como Titular de Dados (Art. 18 LGPD)</span>
            </h3>
            <p className="leading-relaxed">
              O aluno possui total autonomia sobre seus dados. A qualquer momento, através do Painel do Aluno ou das configurações do seu navegador, você pode:
            </p>
            <ul className="list-disc list-inside space-y-1 text-slate-700">
              <li>Consultar, alterar ou atualizar seus dados cadastrais (Nome, CPF e Cargo).</li>
              <li>Limpar seu histórico de progresso e reiniciar as avaliações.</li>
              <li>Solicitar a exclusão total de seus dados armazenados localmente.</li>
            </ul>
          </div>

          {/* Section 5 */}
          <div className="space-y-2">
            <h3 className="text-sm font-bold text-slate-800 flex items-center space-x-1.5">
              <FileText className="w-4 h-4 text-teal-600" />
              <span>5. Uso dos Conteúdos Pedagógicos e Propriedade Intelectual</span>
            </h3>
            <p className="leading-relaxed">
              O material didático do Capacita SRT Salomão tem finalidade estritamente educacional e comunitária, destinado ao fortalecimento da Atenção Psicossocial no âmbito do Sistema Único de Saúde (SUS) e da Reforma Psiquiátrica Brasileira.
            </p>
          </div>
        </div>

        {/* Modal Footer Action */}
        <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
          <span className="text-[11px] text-slate-400 font-mono">
            Última atualização: Agosto de 2026 • LGPD / SUS
          </span>
          <button
            onClick={onClose}
            className="bg-teal-600 hover:bg-teal-700 text-white font-bold px-5 py-2 rounded-lg text-xs transition-colors flex items-center space-x-1.5 shadow-xs"
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>Entendido e De Acordo</span>
          </button>
        </div>
      </div>
    </div>
  );
};
