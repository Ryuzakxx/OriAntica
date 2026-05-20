/* ═══════════════════════════════════════════
   ORIA MEDIEVALE
   ═══════════════════════════════════════════ */

/* ── TEMA ── */
function initTheme() {
  const btn = document.getElementById('theme-btn');
  if (!btn) return;
  // Usa safeReadTheme() da security.js per allowlist stretta
  const saved = (typeof safeReadTheme === 'function') ? safeReadTheme() : 'light';
  applyTheme(saved);
  btn.addEventListener('click', () => {
    const current = document.documentElement.dataset.theme || 'light';
    applyTheme(current === 'dark' ? 'light' : 'dark');
  });
}
function applyTheme(theme) {
  // Allowlist: solo 'light' o 'dark' vengono accettati
  const ALLOWED = ['light', 'dark'];
  if (!ALLOWED.includes(theme)) theme = 'light';
  document.documentElement.dataset.theme = theme;
  try { localStorage.setItem('oria-theme', theme); } catch (_) {}
  const btn = document.getElementById('theme-btn');
  if (btn) btn.textContent = theme === 'dark' ? '\u2600' : '\u263E';
}

/* ── SCROLL REVEAL ── */
function initReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.06 });
  document.querySelectorAll('.reveal').forEach((el, i) => {
    el.style.transitionDelay = `${i * 0.06}s`;
    observer.observe(el);
  });
}

/* ── CAROUSEL ── */
function initCarousel(wrapper) {
  if (!wrapper) return;
  const track = wrapper.querySelector('.carousel-track');
  const slides = wrapper.querySelectorAll('.carousel-slide');
  const prev = wrapper.querySelector('.carousel-prev');
  const next = wrapper.querySelector('.carousel-next');
  const dotsWrap = wrapper.querySelector('.carousel-dots');

  if (!track || slides.length === 0) return;

  let current = 0;
  const total = slides.length;

  // Crea dots
  if (dotsWrap) {
    slides.forEach((_, i) => {
      const d = document.createElement('button');
      d.className = 'carousel-dot' + (i === 0 ? ' active' : '');
      d.setAttribute('aria-label', `Slide ${i + 1}`);
      d.addEventListener('click', () => goTo(i));
      dotsWrap.appendChild(d);
    });
  }

  function goTo(n) {
    current = (n + total) % total;
    track.style.transform = `translateX(-${current * 100}%)`;
    wrapper.querySelectorAll('.carousel-dot').forEach((d, i) =>
      d.classList.toggle('active', i === current)
    );
  }

  if (prev) prev.addEventListener('click', () => goTo(current - 1));
  if (next) next.addEventListener('click', () => goTo(current + 1));

  // Touch swipe
  let startX = 0;
  track.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 50) goTo(dx < 0 ? current + 1 : current - 1);
  });

  // Auto-play
  let timer = setInterval(() => goTo(current + 1), 5000);
  wrapper.addEventListener('mouseenter', () => clearInterval(timer));
  wrapper.addEventListener('mouseleave', () => {
    timer = setInterval(() => goTo(current + 1), 5000);
  });

  goTo(0);
}

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  setTimeout(initReveal, 80);
  document.querySelectorAll('.carousel').forEach(initCarousel);

  // Rimuove lo stile temporaneo anti-flash
  const fix = document.getElementById('theme-fix');
  if (fix) fix.remove();

  // Nav active link
  const page = document.body.dataset.page;
  document.querySelectorAll('.nav-links a, .footer-links a').forEach(a => {
    if (a.dataset.page === page) a.classList.add('active');
  });
});
