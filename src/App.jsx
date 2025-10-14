import React from 'react';
import { Link } from 'react-router-dom';
import AppRoutes from './routes/index.jsx';
import { getCurrentUser, logout } from './services/auth.js';

export default function App() {
  const user = getCurrentUser();

  return (
    <>
      {/* Skip link para acessibilidade (pula direto para o conteúdo) */}
      <a href="#conteudo" className="skip-link">Pular para o conteúdo</a>

      <header className="header" role="banner">
        <h2>Login/Cadastro — Yorran</h2>
        <nav className="nav" aria-label="Navegação principal">
          {user ? (
            <>
              <span className="badge" aria-live="polite">
                Usuário: <strong>{user.email}</strong>
              </span>
              <button
                onClick={() => {
                  logout();
                  window.location.href = '/login';
                }}
                aria-label="Sair da sessão"
                title="Sair"
              >
                Sair
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="badge">Entrar</Link>
              <Link to="/register" className="badge">Criar conta</Link>
            </>
          )}
        </nav>
      </header>

      {/* ID usado pelo skip link */}
      <main id="conteudo" role="main">
        <AppRoutes />
      </main>
    </>
  );
}
