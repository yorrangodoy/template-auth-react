[![Deploy](https://img.shields.io/badge/Vercel-deployed-000?logo=vercel)](https://SEU-PROJ.vercel.app)
[![CI](https://github.com/yorrangodoy/vite-react-auth-spa/actions/workflows/ci.yml/badge.svg)](https://github.com/yorrangodoy/vite-react-auth-spa/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

**Demo:** https://demo-login-yorran.vercel.app/login

> Autenticação simulada via `localStorage` (não seguro). Próximo passo: trocar `services/auth.js` por API real (cookies httpOnly/JWT).

Projeto de autenticação front-end (Login/Registro/Dashboard) construído com React 18 + Vite e React Router, validação robusta com React Hook Form + Zod, acessibilidade (labels, role="alert", foco lógico) e UI dark responsiva. Autenticação simulada via localStorage (apenas demonstração) + rotas protegidas. Ideal para avaliar domínio de formulários, roteamento client-side, organização de pastas e boas práticas de UX.

Stack atual: React 18, Vite, React Router v6, RHF + Zod.

Arquitetura clara: components/, pages/, routes/, services/, lib/, styles/.

Rotas protegidas com ProtectedRoute e redirecionamento para /login.


![Tela de Login](./assets/login.png
![Tela de Registro](./assets/register.png


