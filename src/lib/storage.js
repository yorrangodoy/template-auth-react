export function getJSON(key) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}
export function setJSON(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
