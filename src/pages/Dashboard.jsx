import React from 'react';
import { getCurrentUser, logout } from '../services/auth.js';

export default function Dashboard() {
  const user = getCurrentUser();

  return (
    <section className="panel" aria-labelledby="dash-title">
      <h1 id="dash-title">Dashboard</h1>
      <p>Bem-vindo(a), <strong>{user?.email}</strong>.</p>

      <div style={{ marginTop: 16 }}>
        <p>
          Esta é uma área protegida. A sessão está sendo simulada com <code>localStorage</code>.
        </p>
      </div>

      <div style={{ marginTop: 24, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <button onClick={() => alert('Apenas um exemplo de ação no dashboard.')}>
          Ação demonstrativa
        </button>
        <button
          onClick={() => {
            logout();
            window.location.href = '/login';
          }}
          aria-label="Sair da sessão"
        >
          Sair
        </button>
      </div>
    </section>
  );
}
