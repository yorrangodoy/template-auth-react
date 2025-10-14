export function passwordScore(pw = '') {
  let s = 0;
  if (pw.length >= 8) s++;
  if (pw.length >= 12) s++;
  if (/[A-Z]/.test(pw)) s++;
  if (/[a-z]/.test(pw)) s++;
  if (/[0-9]/.test(pw)) s++;
  if (/[^A-Za-z0-9]/.test(pw)) s++; // símbolos ajudam
  if (s >= 6) return 4;
  if (s >= 5) return 3;
  if (s >= 4) return 2;
  if (s >= 3) return 1;
  return 0;
}

export const strengthLabel = ['Muito fraca', 'Fraca', 'Média', 'Forte', 'Excelente'];
export const strengthColor  = ['#ff6b6b', '#ff9966', '#ffd166', '#8bd36f', '#5aa9ff'];
export function strengthPercent(score) { return [12, 30, 55, 78, 100][score]; }
