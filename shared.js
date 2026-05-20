/* ═══════════════════════════════════════════
   ORIA MEDIEVALE
   ═══════════════════════════════════════════ */

/* ── TEMA ── */
function initTheme() {
  var btn = document.getElementById('theme-btn');
  if (!btn) return;
  // Legge direttamente da localStorage con allowlist — non dipende da security.js
  var ALLOWED = ['light', 'dark'];
  var saved = 'light';
  try {
    var t = localStorage.getItem('oria-theme');
    if (ALLOWED.includes(t)) saved = t;
  } catch (_) {}
  applyTheme(saved);
  btn.addEventListener('click', function () {
    var current = document.documentElement.dataset.theme || 'light';
    applyTheme(current === 'dark' ? 'light' : 'dark');
  });
}

function applyTheme(theme) {
  var ALLOWED = ['light', 'dark'];
  if (!ALLOWED.includes(theme)) theme = 'light';
  document.documentElement.dataset.theme = theme;
  try { localStorage.setItem('oria-theme', theme); } catch (_) {}
  var btn = document.getElementById('theme-btn');
  if (btn) btn.textContent = theme === 'dark' ? '\u2600' : '\u263E';
}

/* ── SCROLL REVEAL ── */
function initReveal() {
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.06 });
  document.querySelectorAll('.reveal').forEach(function (el, i) {
    el.style.transitionDelay = (i * 0.06) + 's';
    observer.observe(el);
  });
}

/* ── CAROUSEL ── */
function initCarousel(wrapper) {
  if (!wrapper) return;
  var track = wrapper.querySelector('.carousel-track');
  var slides = wrapper.querySelectorAll('.carousel-slide');
  var prev = wrapper.querySelector('.carousel-prev');
  var next = wrapper.querySelector('.carousel-next');
  var dotsWrap = wrapper.querySelector('.carousel-dots');

  if (!track || slides.length === 0) return;

  var current = 0;
  var total = slides.length;

  if (dotsWrap) {
    slides.forEach(function (_, i) {
      var d = document.createElement('button');
      d.className = 'carousel-dot' + (i === 0 ? ' active' : '');
      d.setAttribute('aria-label', 'Slide ' + (i + 1));
      d.addEventListener('click', function () { goTo(i); });
      dotsWrap.appendChild(d);
    });
  }

  function goTo(n) {
    current = (n + total) % total;
    track.style.transform = 'translateX(-' + (current * 100) + '%)';
    wrapper.querySelectorAll('.carousel-dot').forEach(function (d, i) {
      d.classList.toggle('active', i === current);
    });
  }

  if (prev) prev.addEventListener('click', function () { goTo(current - 1); });
  if (next) next.addEventListener('click', function () { goTo(current + 1); });

  var startX = 0;
  track.addEventListener('touchstart', function (e) { startX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend', function (e) {
    var dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 50) goTo(dx < 0 ? current + 1 : current - 1);
  });

  var timer = setInterval(function () { goTo(current + 1); }, 5000);
  wrapper.addEventListener('mouseenter', function () { clearInterval(timer); });
  wrapper.addEventListener('mouseleave', function () {
    timer = setInterval(function () { goTo(current + 1); }, 5000);
  });

  goTo(0);
}

document.addEventListener('DOMContentLoaded', function () {
  initTheme();
  setTimeout(initReveal, 80);
  document.querySelectorAll('.carousel').forEach(initCarousel);

  // Rimuove lo stile temporaneo anti-flash
  var fix = document.getElementById('theme-fix');
  if (fix) fix.remove();

  // Nav active link
  var page = document.body.dataset.page;
  document.querySelectorAll('.nav-links a, .footer-links a').forEach(function (a) {
    if (a.dataset.page === page) a.classList.add('active');
  });
});
