import React, { useState } from 'react';
import { UserProgress } from '../types/course';
import { User, Mail, Shield, Building2, CheckCircle2, Lock, HeartHandshake, X, LogIn, UserPlus } from 'lucide-react';

interface AuthModalProps {
  userProgress: UserProgress;
  onSaveProfile: (profileData: {
    userName: string;
    userRole: string;
    userEmail: string;
    cpfOrRegistration: string;
    srtUnit: string;
  }) => void;
  onClose: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  userProgress,
  onSaveProfile,
  onClose
}) => {
  const [isRegisterMode, setIsRegisterMode] = useState<boolean>(!userProgress.isRegistered);
  const [name, setName] = useState<string>(userProgress.userName || '');
  const [email, setEmail] = useState<string>(userProgress.userEmail || '');
  const [cpfOrReg, setCpfOrReg] = useState<string>(userProgress.cpfOrRegistration || '');
  const [role, setRole] = useState<string>(userProgress.userRole || 'Cuidador de Residência Terapêutica (SRT)');
  const [srtUnit, setSrtUnit] = useState<string>(userProgress.srtUnit || 'Residencial Terapêutico Salomão (Blumenau/SC)');
  const [errorMsg, setErrorMsg] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setErrorMsg('Por favor, informe seu nome completo.');
      return;
    }
    if (isRegisterMode && !email.trim()) {
      setErrorMsg('Por favor, informe um e-mail válido para o registro.');
      return;
    }

    onSaveProfile({
      userName: name.trim(),
      userRole: role,
      userEmail: email.trim(),
      cpfOrRegistration: cpfOrReg.trim(),
      srtUnit: srtUnit.trim()
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-slate-900/70 backdrop-blur-xs z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 max-w-md w-full overflow-hidden text-slate-800 relative my-8">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-teal-500 rounded-xl flex items-center justify-center text-white shadow-md">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg font-bold leading-tight">
                {isRegisterMode ? 'Cadastro do Aluno / Cuidador' : 'Acessar Conta de Aluno'}
              </h2>
              <p className="text-xs text-teal-300 font-medium">
                Capacita SRT • Residencial Salomão
              </p>
            </div>
          </div>
        </div>

        {/* Mode Switcher Tabs */}
        <div className="flex border-b border-slate-200 bg-slate-50 text-xs font-semibold">
          <button
            type="button"
            onClick={() => {
              setIsRegisterMode(true);
              setErrorMsg('');
            }}
            className={`flex-1 py-3 text-center transition-colors flex items-center justify-center space-x-2 ${
              isRegisterMode
                ? 'bg-white text-teal-700 border-b-2 border-teal-600 font-bold'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <UserPlus className="w-4 h-4" />
            <span>Novo Cadastro</span>
          </button>
          <button
            type="button"
            onClick={() => {
              setIsRegisterMode(false);
              setErrorMsg('');
            }}
            className={`flex-1 py-3 text-center transition-colors flex items-center justify-center space-x-2 ${
              !isRegisterMode
                ? 'bg-white text-teal-700 border-b-2 border-teal-600 font-bold'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <LogIn className="w-4 h-4" />
            <span>Já sou Aluno</span>
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {errorMsg && (
            <div className="p-3 bg-rose-50 border border-rose-200 text-rose-800 text-xs rounded-lg font-medium flex items-center space-x-2">
              <Lock className="w-4 h-4 text-rose-600 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Full Name */}
          <div className="space-y-1">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
              Nome Completo <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ex: Maria das Dores Silva"
                className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white text-slate-800"
                required
              />
            </div>
            <p className="text-[10px] text-slate-400">Este nome será impresso no Certificado de 40 horas.</p>
          </div>

          {/* Email */}
          <div className="space-y-1">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
              E-mail Profissional ou Pessoal {isRegisterMode && <span className="text-rose-500">*</span>}
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Ex: cuidador@salomao.org.br"
                className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white text-slate-800"
                required={isRegisterMode}
              />
            </div>
          </div>

          {/* CPF / Registration ID */}
          <div className="space-y-1">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
              CPF ou Matrícula / Registro Funcional
            </label>
            <div className="relative">
              <Shield className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="text"
                value={cpfOrReg}
                onChange={(e) => setCpfOrReg(e.target.value)}
                placeholder="Ex: 000.111.222-33 ou MAT-8842"
                className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white text-slate-800"
              />
            </div>
            <p className="text-[10px] text-slate-400">Garante a autenticidade oficial do documento do aluno.</p>
          </div>

          {/* Role / Job Title */}
          <div className="space-y-1">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
              Cargo / Função na Saúde Mental
            </label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white text-slate-800"
            >
              <option value="Cuidador de Residência Terapêutica (SRT)">Cuidador de Residência Terapêutica (SRT)</option>
              <option value="Acompanhante Terapêutico (AT)">Acompanhante Terapêutico (AT)</option>
              <option value="Técnico(a) de Enfermagem">Técnico(a) de Enfermagem</option>
              <option value="Enfermeiro(a) do CAPS / SRT">Enfermeiro(a) do CAPS / SRT</option>
              <option value="Assistente Social / Psicólogo(a)">Assistente Social / Psicólogo(a)</option>
              <option value="Coordenador(a) de Unidade SRT">Coordenador(a) de Unidade SRT</option>
              <option value="Estudante / Outro">Estudante / Outro Profissional da RAPS</option>
            </select>
          </div>

          {/* SRT Unit */}
          <div className="space-y-1">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
              Unidade SRT / Local de Atuação
            </label>
            <div className="relative">
              <Building2 className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="text"
                value={srtUnit}
                onChange={(e) => setSrtUnit(e.target.value)}
                placeholder="Ex: Residencial Terapêutico Salomão (Blumenau/SC)"
                className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white text-slate-800"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-2 py-2.5 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-lg text-xs transition-colors flex items-center justify-center space-x-2 shadow-sm"
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>{isRegisterMode ? 'Concluir Cadastro & Acessar Curso' : 'Entrar no Sistema'}</span>
          </button>

          <p className="text-[10px] text-center text-slate-400 pt-1">
            Seus dados são armazenados localmente e utilizados exclusivamente para emissão e autenticação do Certificado.
          </p>
        </form>
      </div>
    </div>
  );
};
