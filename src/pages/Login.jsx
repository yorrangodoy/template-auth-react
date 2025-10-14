import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import InputField from '../components/InputField.jsx';
import PasswordField from '../components/PasswordField.jsx';
import { loginSchema } from '../lib/validators.js';
import { login, getCurrentUser } from '../services/auth.js';

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/dashboard';

  const {
    register,
    handleSubmit,
    setError,
    setFocus,
    formState: { errors, isSubmitting }
  } = useForm({
    resolver: zodResolver(loginSchema),
    mode: 'onTouched'
  });

  useEffect(() => {
    if (getCurrentUser()) navigate('/dashboard', { replace: true });
  }, [navigate]);

  const onSubmit = async (data) => {
    try {
      login({ email: data.email, password: data.password });
      navigate(from, { replace: true });
    } catch {
      setError('email', { message: 'Credenciais inválidas.' });
      setError('password', { message: 'Verifique o e-mail e a senha.' });
      setFocus('email');
    }
  };

  const onError = (formErrors) => {
    const first = Object.keys(formErrors)[0];
    if (first) setFocus(first);
  };

  return (
    <section className="container" aria-labelledby="login-title">
      <h1 id="login-title">Entrar</h1>
      <p>Acesse sua conta para visualizar o dashboard.</p>

      <form className="form" onSubmit={handleSubmit(onSubmit, onError)} noValidate>
        <InputField
          id="email"
          label="E-mail"
          type="email"
          autoFocus
          placeholder="voce@exemplo.com"
          register={register('email')}
          error={errors.email}
        />

        <PasswordField
          id="password"
          label="Senha"
          placeholder="Sua senha"
          register={register('password')}
          error={errors.password}
        />

        <button type="submit" disabled={isSubmitting} aria-busy={isSubmitting}>
          {isSubmitting ? 'Entrando...' : 'Entrar'}
        </button>

        <p>
          Não tem conta? <Link to="/register">Crie uma agora</Link>.
        </p>
      </form>
    </section>
  );
}
// Retorna score 0..4, label e cor — simples e sem dependências.