[![CI](https://github.com/yorrangodoy/template-auth-react/actions/workflows/ci.yml/badge.svg)](https://github.com/yorrangodoy/template-auth-react/actions/workflows/ci.yml)
[![Vercel](https://img.shields.io/badge/Vercel-deployed-000?logo=vercel)](https://demo-login-yorran.vercel.app)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)


##Como Rodar
Requisitos: Node 20+
No terminal:
npm install
npm run dev

**Demo:** https://demo-login-yorran.vercel.app/login

> Autenticação simulada via `localStorage` (não seguro). Próximo passo: trocar `services/auth.js` por API real (cookies httpOnly/JWT).

Projeto de autenticação front-end (Login/Registro/Dashboard) construído com React 18 + Vite e React Router, validação robusta com React Hook Form + Zod, acessibilidade (labels, role="alert", foco lógico) e UI dark responsiva. Autenticação simulada via localStorage (apenas demonstração) + rotas protegidas. Ideal para avaliar domínio de formulários, roteamento client-side, organização de pastas e boas práticas de UX.

Stack atual: React 18, Vite, React Router v6, RHF + Zod.

Arquitetura clara: components/, pages/, routes/, services/, lib/, styles/.

Rotas protegidas com ProtectedRoute e redirecionamento para /login.

## Preview

<p>
  <a href="https://demo-login-yorran.vercel.app/login" target="_blank">
    <img src="./assets/login.png" width="49%" alt="Tela de Login">
  </a>
  <a href="https://demo-login-yorran.vercel.app/register" target="_blank">
    <img src="./assets/register.png" width="49%" alt="Tela de Registro">
  </a>
</p>

