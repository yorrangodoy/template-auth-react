import { z } from 'zod';

const emailSchema = z.string({ required_error: 'Informe um e-mail.' })
  .min(1, 'Informe um e-mail.')
  .email('E-mail inválido.');

const passwordSchema = z.string({ required_error: 'Informe uma senha.' })
  .min(8, 'A senha deve ter no mínimo 8 caracteres.')
  .regex(/[A-Z]/, 'A senha precisa ter ao menos 1 letra maiúscula.')
  .regex(/[a-z]/, 'A senha precisa ter ao menos 1 letra minúscula.')
  .regex(/[0-9]/, 'A senha precisa ter ao menos 1 número.');

export const loginSchema = z.object({
  email: emailSchema,
  password: z.string().min(1, 'Informe sua senha.')
});

export const registerSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
  confirmPassword: z.string().min(1, 'Confirme sua senha.')
}).refine((data) => data.password === data.confirmPassword, {
  path: ['confirmPassword'],
  message: 'As senhas não conferem.'
});
