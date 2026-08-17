import React, { useState } from 'react';
import { UserProgress } from '../types/course';
import { useAuth } from '../context/AuthContext';
import { User, Mail, Shield, Building2, CheckCircle2, Lock, HeartHandshake, X, LogIn, UserPlus, LogOut, KeyRound, Sparkles, Layers } from 'lucide-react';

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
  const { currentUser, signInWithGoogle, signUpWithEmail, signInWithEmail, logout, saveProgressToCloud } = useAuth();

  const [authTab, setAuthTab] = useState<'google' | 'email' | 'profile'>('google');
  const [isSignUp, setIsSignUp] = useState<boolean>(false);

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [name, setName] = useState<string>(userProgress.userName || '');
  const [cpfOrReg, setCpfOrReg] = useState<string>(userProgress.cpfOrRegistration || '');
  const [role, setRole] = useState<string>(userProgress.userRole || 'Cuidador de Residência Terapêutica (SRT)');
  const [srtUnit, setSrtUnit] = useState<string>(userProgress.srtUnit || 'Residencial Terapêutico Salomão (Blumenau/SC)');

  const [errorMsg, setErrorMsg] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleGoogleAuth = async () => {
    setErrorMsg('');
    setIsSubmitting(true);
    try {
      await signInWithGoogle();
      onClose();
    } catch (err: any) {
      setErrorMsg(err.message || 'Falha ao autenticar com o Google.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setIsSubmitting(true);

    try {
      if (isSignUp) {
        if (!name.trim()) {
          setErrorMsg('Por favor, informe seu nome completo.');
          setIsSubmitting(false);
          return;
        }
        await signUpWithEmail(email.trim(), password, name.trim());
      } else {
        await signInWithEmail(email.trim(), password);
      }
      onClose();
    } catch (err: any) {
      if (err.code === 'auth/wrong-password' || err.code === 'auth/user-not-found' || err.code === 'auth/invalid-credential') {
        setErrorMsg('E-mail ou senha incorretos.');
      } else if (err.code === 'auth/email-already-in-use') {
        setErrorMsg('Este e-mail já está cadastrado. Faça login ou use outro e-mail.');
      } else if (err.code === 'auth/weak-password') {
        setErrorMsg('A senha deve ter pelo menos 6 caracteres.');
      } else {
        setErrorMsg(err.message || 'Erro ao realizar autenticação.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSaveProfileData = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setErrorMsg('Por favor, informe seu nome completo.');
      return;
    }

    const updatedProfile = {
      userName: name.trim(),
      userRole: role,
      userEmail: currentUser?.email || email.trim() || userProgress.userEmail || '',
      cpfOrRegistration: cpfOrReg.trim(),
      srtUnit: srtUnit.trim()
    };

    onSaveProfile(updatedProfile);

    // Sync cloud progress if authenticated
    if (currentUser) {
      await saveProgressToCloud({
        ...userProgress,
        ...updatedProfile,
        isRegistered: true
      });
    }

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-slate-900/75 backdrop-blur-xs z-50 flex items-center justify-center p-4 overflow-y-auto">
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
            <div className="w-10 h-10 bg-teal-500 rounded-xl flex items-center justify-center text-slate-950 font-bold shadow-md">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg font-bold leading-tight">
                {currentUser ? 'Perfil & Estudo Isolado' : 'Login de Alunos / Troca de Usuário'}
              </h2>
              <p className="text-xs text-teal-300 font-medium">
                Capacita SRT • Cadastre-se para Estudo Individual
              </p>
            </div>
          </div>
        </div>

        {/* Current Active Account Indicator */}
        {currentUser ? (
          <div className="p-4 bg-teal-50 border-b border-teal-100 flex items-center justify-between gap-3">
            <div className="flex items-center space-x-3 overflow-hidden">
              <div className="w-9 h-9 rounded-full bg-teal-600 text-white font-extrabold flex items-center justify-center text-sm shrink-0">
                {currentUser.displayName ? currentUser.displayName.charAt(0).toUpperCase() : 'A'}
              </div>
              <div className="overflow-hidden text-xs">
                <span className="font-bold text-teal-900 block truncate">
                  {currentUser.displayName || 'Aluno Autenticado'}
                </span>
                <span className="text-[11px] text-teal-700 truncate block">
                  {currentUser.email}
                </span>
              </div>
            </div>

            <button
              onClick={async () => {
                await logout();
              }}
              className="bg-rose-100 hover:bg-rose-200 text-rose-800 font-bold px-3 py-1.5 rounded-lg text-xs transition-colors flex items-center space-x-1 shrink-0"
              title="Sair desta conta para permitir outro aluno estudar"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Sair</span>
            </button>
          </div>
        ) : (
          <div className="bg-slate-50 border-b border-slate-200 p-3 text-[11px] text-slate-600 flex items-center space-x-2">
            <Layers className="w-4 h-4 text-teal-600 shrink-0" />
            <span>
              <strong>Estudo Multi-Usuário:</strong> Cada pessoa tem seu próprio cadastro e histórico isolado na nuvem.
            </span>
          </div>
        )}

        {/* Navigation Tabs */}
        {!currentUser && (
          <div className="flex border-b border-slate-200 bg-slate-50 text-xs font-semibold">
            <button
              type="button"
              onClick={() => {
                setAuthTab('google');
                setErrorMsg('');
              }}
              className={`flex-1 py-3 text-center transition-colors flex items-center justify-center space-x-1.5 ${
                authTab === 'google'
                  ? 'bg-white text-teal-700 border-b-2 border-teal-600 font-bold'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <LogIn className="w-4 h-4" />
              <span>Entrar c/ Google</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setAuthTab('email');
                setErrorMsg('');
              }}
              className={`flex-1 py-3 text-center transition-colors flex items-center justify-center space-x-1.5 ${
                authTab === 'email'
                  ? 'bg-white text-teal-700 border-b-2 border-teal-600 font-bold'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <Mail className="w-4 h-4" />
              <span>Entrar c/ E-mail</span>
            </button>
          </div>
        )}

        {/* Tab 1: Google Auth */}
        {!currentUser && authTab === 'google' && (
          <div className="p-6 space-y-5 text-center">
            {errorMsg && (
              <div className="p-3 bg-rose-50 border border-rose-200 text-rose-800 text-xs rounded-lg font-medium flex items-center space-x-2 text-left">
                <Lock className="w-4 h-4 text-rose-600 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            <div className="space-y-2 text-left">
              <h3 className="text-sm font-bold text-slate-800">Entrar com a sua Conta Google</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Recomendado para acesso rápido e seguro. Seu progresso nos 5 módulos e na Prova Final ficará salvo exclusivamente no seu perfil.
              </p>
            </div>

            <button
              onClick={handleGoogleAuth}
              disabled={isSubmitting}
              className="w-full py-3 px-4 bg-white hover:bg-slate-50 text-slate-700 font-bold border-2 border-slate-200 rounded-xl text-xs transition-all flex items-center justify-center space-x-3 shadow-xs hover:border-teal-500"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              <span>{isSubmitting ? 'Conectando...' : 'Entrar com Conta Google'}</span>
            </button>

            <div className="pt-2 text-[11px] text-slate-400">
              Vários alunos podem usar este mesmo computador alternando suas contas.
            </div>
          </div>
        )}

        {/* Tab 2: Email & Password Form */}
        {!currentUser && authTab === 'email' && (
          <form onSubmit={handleEmailAuth} className="p-6 space-y-4">
            {errorMsg && (
              <div className="p-3 bg-rose-50 border border-rose-200 text-rose-800 text-xs rounded-lg font-medium flex items-center space-x-2">
                <Lock className="w-4 h-4 text-rose-600 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            <div className="flex items-center justify-between text-xs pb-1">
              <span className="font-bold text-slate-800">
                {isSignUp ? 'Criar Nova Conta de Aluno' : 'Acessar com E-mail'}
              </span>
              <button
                type="button"
                onClick={() => {
                  setIsSignUp(!isSignUp);
                  setErrorMsg('');
                }}
                className="text-teal-700 font-bold hover:underline"
              >
                {isSignUp ? 'Já tem conta? Login' : 'Criar Conta'}
              </button>
            </div>

            {isSignUp && (
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
                    className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium focus:outline-none focus:ring-2 focus:ring-teal-500 text-slate-800"
                    required={isSignUp}
                  />
                </div>
              </div>
            )}

            <div className="space-y-1">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                E-mail <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seuemail@exemplo.com"
                  className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium focus:outline-none focus:ring-2 focus:ring-teal-500 text-slate-800"
                  required
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                Senha <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <KeyRound className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium focus:outline-none focus:ring-2 focus:ring-teal-500 text-slate-800"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-2 py-2.5 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-lg text-xs transition-colors flex items-center justify-center space-x-2 shadow-sm"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>{isSignUp ? 'Cadastrar e Acessar' : 'Entrar no Sistema'}</span>
            </button>
          </form>
        )}

        {/* Profile Details Form (when logged in or configuring certificate info) */}
        {currentUser && (
          <form onSubmit={handleSaveProfileData} className="p-6 space-y-4">
            <div className="text-xs font-bold text-slate-800 border-b border-slate-200 pb-2 flex items-center justify-between">
              <span>Dados para Emissão de Certificado Oficial</span>
              <span className="text-[10px] bg-teal-100 text-teal-800 px-2 py-0.5 rounded font-mono font-bold">40 Horas</span>
            </div>

            {errorMsg && (
              <div className="p-3 bg-rose-50 border border-rose-200 text-rose-800 text-xs rounded-lg font-medium flex items-center space-x-2">
                <Lock className="w-4 h-4 text-rose-600 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* Full Name */}
            <div className="space-y-1">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                Nome Completo (Certificado) <span className="text-rose-500">*</span>
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
              <span>Salvar Dados do Perfil</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
