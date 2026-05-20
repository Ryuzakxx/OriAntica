/* ═══════════════════════════════════════════
   ORIA MEDIEVALE — Security Utilities
   ═══════════════════════════════════════════ */

/**
 * Sanitizza un valore stringa per prevenire XSS quando inserito nel DOM.
 * Converte i caratteri speciali HTML in entità sicure.
 * @param {string} str
 * @returns {string}
 */
function escapeHTML(str) {
  if (str == null) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
}

/**
 * Valida e sanitizza un URL prima di usarlo come href/src.
 * Ammette solo http, https e percorsi relativi.
 * @param {string} url
 * @returns {string} URL sicuro o '#' se non valido
 */
function safeURL(url) {
  if (!url) return '#';
  try {
    const parsed = new URL(url, location.origin);
    if (!['http:', 'https:'].includes(parsed.protocol) && !url.startsWith('./') && !url.startsWith('../')) {
      return '#';
    }
  } catch (_) {
    // URL relativo — ok
  }
  return url;
}

/**
 * Legge un tema da localStorage applicando allowlist stretta.
 * Evita che valori arbitrari vengano scritti su data-theme.
 * @returns {'light'|'dark'}
 */
function safeReadTheme() {
  const ALLOWED = ['light', 'dark'];
  try {
    const t = localStorage.getItem('oria-theme');
    return ALLOWED.includes(t) ? t : 'light';
  } catch (_) {
    return 'light';
  }
}
