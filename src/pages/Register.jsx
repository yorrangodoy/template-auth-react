import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import InputField from '../components/InputField.jsx';
import PasswordField from '../components/PasswordField.jsx';
import { registerSchema } from '../lib/validators.js';
import { register as registerUser } from '../services/auth.js';
import { passwordScore, strengthColor, strengthLabel, strengthPercent } from '../lib/passwordStrength.js';

export default function Register() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setError,
    setFocus,
    watch,
    formState: { errors, isSubmitting }
  } = useForm({
    resolver: zodResolver(registerSchema),
    mode: 'onTouched'
  });

  const pwd = watch('password') || '';
  const score = passwordScore(pwd);
  const percent = strengthPercent(score);
  const color = strengthColor[score];
  const label = pwd ? `Força da senha: ${strengthLabel[score]}` : 'Digite uma senha';

  const onSubmit = async (data) => {
    try {
      registerUser({ email: data.email, password: data.password });
      navigate('/dashboard', { replace: true });
    } catch (e) {
      setError('email', { message: e.message || 'E-mail já cadastrado.' });
      setFocus('email');
    }
  };

  const onError = (formErrors) => {
    const first = Object.keys(formErrors)[0];
    if (first) setFocus(first);
  };

  return (
    <section className="container" aria-labelledby="register-title">
      <h1 id="register-title">Criar conta</h1>
      <p>Faça seu cadastro para acessar o dashboard.</p>

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
          placeholder="Mín. 8 caracteres com maiúscula, minúscula e número"
          register={register('password')}
          error={errors.password}
        />

        <div className="meter" aria-live="polite">
          <div className="meter-bar" style={{ '--w': `${percent}%`, '--c': color }} />
          <span className="meter-label">{label}</span>
        </div>

        <PasswordField
          id="confirmPassword"
          label="Confirmar senha"
          placeholder="Repita a senha"
          register={register('confirmPassword')}
          error={errors.confirmPassword}
        />

        <button type="submit" disabled={isSubmitting} aria-busy={isSubmitting}>
          {isSubmitting ? 'Criando...' : 'Criar conta'}
        </button>

        <p>
          Já tem conta? <Link to="/login">Entrar</Link>.
        </p>
      </form>
    </section>
  );
}
