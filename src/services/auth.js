import { getJSON, setJSON } from '../lib/storage.js';

const USERS_KEY = 'spa_users';
const SESSION_KEY = 'spa_session';

function readUsers() { return getJSON(USERS_KEY) ?? []; }
function writeUsers(users) { setJSON(USERS_KEY, users); }

export function register({ email, password }) {
  const users = readUsers();
  if (users.some(u => u.email.toLowerCase() === email.toLowerCase()))
    throw new Error('Este e-mail já está cadastrado.');
  users.push({ email, password });
  writeUsers(users);
  setJSON(SESSION_KEY, { email });
}

export function login({ email, password }) {
  const users = readUsers();
  const match = users.find(u => u.email.toLowerCase() === email.toLowerCase() && u.password === password);
  if (!match) throw new Error('Credenciais inválidas.');
  setJSON(SESSION_KEY, { email: match.email });
}

export function logout() { localStorage.removeItem(SESSION_KEY); }

export function getCurrentUser() {
  const session = getJSON(SESSION_KEY);
  if (!session?.email) return null;
  const users = readUsers();
  const user = users.find(u => u.email.toLowerCase() === session.email.toLowerCase());
  return user ? { email: user.email } : null;
}

export function isAuthenticated() { return !!getCurrentUser(); }
