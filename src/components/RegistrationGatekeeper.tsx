import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import {
  HeartHandshake,
  Lock,
  Mail,
  User,
  KeyRound,
  Shield,
  Building2,
  CheckCircle2,
  LogIn,
  UserPlus,
  BookOpen,
  Sparkles,
  Award,
  Scale,
  Brain,
  Layers,
  ArrowRight,
  ShieldCheck,
  AlertCircle,
  Loader2
} from 'lucide-react';

interface RegistrationGatekeeperProps {
  onOpenPrivacyPolicy: () => void;
}

export const RegistrationGatekeeper: React.FC<RegistrationGatekeeperProps> = ({
  onOpenPrivacyPolicy
}) => {
  const { signInWithGoogle, signUpWithEmail, signInWithEmail } = useAuth();

  const [authMode, setAuthMode] = useState<'signup' | 'login' | 'google'>('signup');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');

  // Form State
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [cpfOrReg, setCpfOrReg] = useState<string>('');
  const [role, setRole] = useState<string>('Cuidador de Residência Terapêutica (SRT)');
  const [srtUnit, setSrtUnit] = useState<string>('Residencial Terapêutico Salomão (Blumenau/SC)');

  const handleGoogleLogin = async () => {
    setErrorMsg('');
    setIsSubmitting(true);
    try {
      await signInWithGoogle();
    } catch (err: any) {
      console.error('Google Auth Error:', err);
      setErrorMsg(err.message || 'Falha ao autenticar com o Google. Tente novamente ou use e-mail.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setIsSubmitting(true);

    try {
      if (authMode === 'signup') {
        if (!name.trim()) {
          setErrorMsg('Por favor, digite seu nome completo para registro do certificado.');
          setIsSubmitting(false);
          return;
        }
        if (password.length < 6) {
          setErrorMsg('A senha de acesso deve ter pelo menos 6 caracteres.');
          setIsSubmitting(false);
          return;
        }
        await signUpWithEmail(
          email.trim(),
          password,
          name.trim(),
          role,
          cpfOrReg.trim(),
          srtUnit.trim()
        );
      } else {
        await signInWithEmail(email.trim(), password);
      }
    } catch (err: any) {
      console.error('Auth Error:', err);
      if (
        err.code === 'auth/wrong-password' ||
        err.code === 'auth/user-not-found' ||
        err.code === 'auth/invalid-credential'
      ) {
        setErrorMsg('E-mail ou senha incorretos. Verifique seus dados.');
      } else if (err.code === 'auth/email-already-in-use') {
        setErrorMsg('Este e-mail já está cadastrado. Alterne para a aba "Fazer Login" acima.');
      } else if (err.code === 'auth/weak-password') {
        setErrorMsg('A senha precisa conter no mínimo 6 caracteres.');
      } else if (err.code === 'auth/invalid-email') {
        setErrorMsg('Por favor, informe um endereço de e-mail válido.');
      } else {
        setErrorMsg(err.message || 'Ocorreu um erro ao processar. Tente novamente.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col justify-between selection:bg-teal-500 selection:text-white">
      {/* Top Bar Banner */}
      <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur-xs py-4 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-teal-600 flex items-center justify-center text-slate-950 font-bold shadow-md">
              <HeartHandshake className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="font-extrabold text-base tracking-tight text-white block leading-none">
                Capacita SRT <span className="text-teal-400 font-medium text-xs">Salomão</span>
              </span>
              <span className="text-[11px] text-slate-400">
                Residencial Terapêutico Salomão • Blumenau/SC
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-2 text-xs text-slate-400">
            <ShieldCheck className="w-4 h-4 text-teal-400" />
            <span className="hidden sm:inline font-mono text-[11px]">Lei 10.216/2001 & Portaria 106</span>
          </div>
        </div>
      </header>

      {/* Main Gatekeeper Area */}
      <main className="flex-1 max-w-6xl w-full mx-auto p-4 sm:p-6 lg:p-8 flex flex-col lg:flex-row items-stretch justify-center gap-8 my-auto">
        {/* Left Column: Academic & Course Overview */}
        <div className="flex-1 flex flex-col justify-center space-y-6 bg-slate-950/50 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-teal-950 border border-teal-800 text-teal-300 text-xs font-semibold w-fit">
            <Lock className="w-3.5 h-3.5" />
            <span>Identificação Obrigatória do Aluno</span>
          </div>

          <div className="space-y-3">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
              Curso de Capacitação para Cuidadores em Saúde Mental
            </h1>
            <p className="text-sm text-slate-300 leading-relaxed">
              Para ingressar nas salas de aula, realizar os testes de fixação (10Q), submeter dissertações avaliadas por Inteligência Artificial e emitir seu <strong>Certificado Oficial de 40 Horas</strong>, faça seu cadastro individual.
            </p>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="p-3.5 bg-slate-900/90 rounded-xl border border-slate-800 space-y-1">
              <div className="flex items-center space-x-2 text-teal-400 font-bold text-xs">
                <BookOpen className="w-4 h-4" />
                <span>5 Módulos Teórico-Práticos</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-normal">
                Conteúdo normativo, estudos de caso e simulações de campo.
              </p>
            </div>

            <div className="p-3.5 bg-slate-900/90 rounded-xl border border-slate-800 space-y-1">
              <div className="flex items-center space-x-2 text-teal-400 font-bold text-xs">
                <Brain className="w-4 h-4" />
                <span>Correção de IA (Gemini)</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-normal">
                Parecer pedagógico minucioso e feedback em Luta Antimanicomial.
              </p>
            </div>

            <div className="p-3.5 bg-slate-900/90 rounded-xl border border-slate-800 space-y-1">
              <div className="flex items-center space-x-2 text-teal-400 font-bold text-xs">
                <Layers className="w-4 h-4" />
                <span>Histórico Isolado em Nuvem</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-normal">
                Suas notas e respostas salvas no Firestore para continuar quando quiser.
              </p>
            </div>

            <div className="p-3.5 bg-slate-900/90 rounded-xl border border-slate-800 space-y-1">
              <div className="flex items-center space-x-2 text-amber-400 font-bold text-xs">
                <Award className="w-4 h-4" />
                <span>Certificado Registrado 40h</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-normal">
                Emissão automática nominal com código autenticador e QR Code.
              </p>
            </div>
          </div>

          <div className="p-3.5 bg-slate-900/60 border-l-2 border-teal-500 rounded-r-xl text-xs text-slate-400 flex items-start space-x-2.5">
            <Scale className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
            <span>
              <strong>Residencial Terapêutico Salomão:</strong> Garantia do paradigma antimanicomial e do Cuidado em Liberdade no SUS.
            </span>
          </div>
        </div>

        {/* Right Column: Registration & Login Form Card */}
        <div className="flex-1 bg-white text-slate-800 rounded-2xl shadow-2xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-between">
          <div className="space-y-5">
            {/* Mode Switcher Tabs */}
            <div className="flex p-1 bg-slate-100 rounded-xl border border-slate-200 text-xs font-bold">
              <button
                type="button"
                onClick={() => {
                  setAuthMode('signup');
                  setErrorMsg('');
                }}
                className={`flex-1 py-2.5 rounded-lg transition-all flex items-center justify-center space-x-1.5 cursor-pointer ${
                  authMode === 'signup'
                    ? 'bg-teal-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <UserPlus className="w-4 h-4" />
                <span>1º Acesso (Cadastrar)</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setAuthMode('login');
                  setErrorMsg('');
                }}
                className={`flex-1 py-2.5 rounded-lg transition-all flex items-center justify-center space-x-1.5 cursor-pointer ${
                  authMode === 'login'
                    ? 'bg-teal-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <LogIn className="w-4 h-4" />
                <span>Já Tenho Conta</span>
              </button>
            </div>

            {/* Error Message */}
            {errorMsg && (
              <div className="p-3 bg-rose-50 border border-rose-200 text-rose-800 text-xs rounded-lg font-medium flex items-center space-x-2">
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* Fast Google Login Button */}
            <div className="space-y-2">
              <button
                type="button"
                onClick={handleGoogleLogin}
                disabled={isSubmitting}
                className="w-full py-3 px-4 bg-white hover:bg-slate-50 text-slate-800 font-bold border-2 border-slate-200 rounded-xl text-xs transition-all flex items-center justify-center space-x-3 shadow-xs hover:border-teal-500 cursor-pointer"
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
                <span>{isSubmitting ? 'Autenticando...' : 'Entrar c/ Conta Google (1 Clique)'}</span>
              </button>

              <div className="relative flex items-center justify-center my-3">
                <div className="border-t border-slate-200 w-full" />
                <span className="bg-white px-3 text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">
                  ou com formulário de cadastro
                </span>
                <div className="border-t border-slate-200 w-full" />
              </div>
            </div>

            {/* Email/Password Form */}
            <form onSubmit={handleSubmit} className="space-y-3.5">
              {/* Full Name for Registration */}
              {authMode === 'signup' && (
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Nome Completo (Para Certificado) <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ex: Maria das Dores Silva"
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs font-medium focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white text-slate-800"
                      required={authMode === 'signup'}
                    />
                  </div>
                </div>
              )}

              {/* Email */}
              <div className="space-y-1">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                  E-mail de Acesso <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="seuemail@exemplo.com"
                    className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs font-medium focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white text-slate-800"
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-1">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Senha de Acesso (Mínimo 6 dígitos) <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <KeyRound className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs font-medium focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white text-slate-800"
                    required
                  />
                </div>
              </div>

              {/* Extra registration details when signing up */}
              {authMode === 'signup' && (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    <div className="space-y-1">
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider">
                        CPF ou Matrícula
                      </label>
                      <div className="relative">
                        <Shield className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
                        <input
                          type="text"
                          value={cpfOrReg}
                          onChange={(e) => setCpfOrReg(e.target.value)}
                          placeholder="000.000.000-00"
                          className="w-full pl-8 pr-2.5 py-1.5 bg-slate-50 border border-slate-300 rounded-lg text-xs font-medium focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white text-slate-800"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider">
                        Cargo / Função
                      </label>
                      <select
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        className="w-full px-2.5 py-1.5 bg-slate-50 border border-slate-300 rounded-lg text-xs font-medium focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white text-slate-800"
                      >
                        <option value="Cuidador de Residência Terapêutica (SRT)">Cuidador SRT</option>
                        <option value="Acompanhante Terapêutico (AT)">Acompanhante Terapêutico (AT)</option>
                        <option value="Técnico(a) de Enfermagem">Técnico(a) de Enfermagem</option>
                        <option value="Enfermeiro(a) do CAPS / SRT">Enfermeiro(a) CAPS/SRT</option>
                        <option value="Assistente Social / Psicólogo(a)">Assistente Social/Psicólogo(a)</option>
                        <option value="Estudante / Outro">Estudante / Outro</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider">
                      Unidade de Atuação
                    </label>
                    <div className="relative">
                      <Building2 className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
                      <input
                        type="text"
                        value={srtUnit}
                        onChange={(e) => setSrtUnit(e.target.value)}
                        placeholder="Ex: Residencial Terapêutico Salomão (Blumenau/SC)"
                        className="w-full pl-8 pr-2.5 py-1.5 bg-slate-50 border border-slate-300 rounded-lg text-xs font-medium focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white text-slate-800"
                      />
                    </div>
                  </div>
                </>
              )}

              {/* Submit Action Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-3 py-3 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-xl text-xs transition-colors flex items-center justify-center space-x-2 shadow-sm cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-white" />
                    <span>Processando Acesso...</span>
                  </>
                ) : (
                  <>
                    {authMode === 'signup' ? (
                      <>
                        <UserPlus className="w-4 h-4" />
                        <span>Cadastrar e Liberar Conteúdo do Curso</span>
                      </>
                    ) : (
                      <>
                        <LogIn className="w-4 h-4" />
                        <span>Entrar no Sistema e Continuar Estudos</span>
                      </>
                    )}
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="pt-4 border-t border-slate-200 mt-4 text-center">
            <p className="text-[11px] text-slate-500">
              Ao acessar você concorda com os preceitos éticos da Lei 10.216/2001 e com a{' '}
              <button
                type="button"
                onClick={onOpenPrivacyPolicy}
                className="text-teal-700 font-semibold underline hover:text-teal-900 cursor-pointer"
              >
                Política de Privacidade (LGPD)
              </button>.
            </p>
          </div>
        </div>
      </main>

      {/* Footer Legal */}
      <footer className="border-t border-slate-800 bg-slate-950 py-4 px-4 text-center text-xs text-slate-500">
        <p>
          Capacita SRT • Plataforma Oficial de Formação em Serviços de Residência Terapêutica (Blumenau/SC)
        </p>
      </footer>
    </div>
  );
};
