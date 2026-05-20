/* ═══════════════════════════════════════════
   ORIA MEDIEVALE — shared.js
   ═══════════════════════════════════════════ */

/* ── TEMA ── */
function initTheme() {
  var btn = document.getElementById('theme-btn');
  if (!btn) return;
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

  /* Stesso toggle nel mobile menu */
  var btnMobile = document.getElementById('theme-btn-mobile');
  if (btnMobile) {
    btnMobile.addEventListener('click', function () {
      var current = document.documentElement.dataset.theme || 'light';
      applyTheme(current === 'dark' ? 'light' : 'dark');
      syncThemeButtons();
    });
  }
}

function syncThemeButtons() {
  var theme = document.documentElement.dataset.theme || 'light';
  var icon = theme === 'dark' ? '\u2600' : '\u263E';
  var b1 = document.getElementById('theme-btn');
  var b2 = document.getElementById('theme-btn-mobile');
  if (b1) b1.textContent = icon;
  if (b2) b2.textContent = icon;
}

function applyTheme(theme) {
  var ALLOWED = ['light', 'dark'];
  if (!ALLOWED.includes(theme)) theme = 'light';
  document.documentElement.dataset.theme = theme;
  try { localStorage.setItem('oria-theme', theme); } catch (_) {}
  syncThemeButtons();
}

/* ── HAMBURGER MENU ── */
function initMobileNav() {
  var btn  = document.getElementById('nav-hamburger');
  var menu = document.getElementById('nav-mobile');
  if (!btn || !menu) return;

  var isOpen = false;

  function openMenu() {
    isOpen = true;
    btn.classList.add('open');
    menu.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
    btn.setAttribute('aria-label', 'Chiudi menu');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    isOpen = false;
    btn.classList.remove('open');
    menu.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-label', 'Apri menu');
    document.body.style.overflow = '';
  }

  btn.addEventListener('click', function () {
    isOpen ? closeMenu() : openMenu();
  });

  /* Chiudi cliccando fuori */
  document.addEventListener('click', function (e) {
    if (isOpen && !menu.contains(e.target) && !btn.contains(e.target)) {
      closeMenu();
    }
  });

  /* Chiudi con Escape */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && isOpen) { closeMenu(); btn.focus(); }
  });

  /* Chiudi al click su un link del menu */
  menu.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', closeMenu);
  });

  /* Chiudi se la viewport diventa desktop (resize) */
  var mq = window.matchMedia('(min-width: 769px)');
  mq.addEventListener('change', function (e) {
    if (e.matches && isOpen) closeMenu();
  });
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
  var track  = wrapper.querySelector('.carousel-track');
  var slides = wrapper.querySelectorAll('.carousel-slide');
  var prev   = wrapper.querySelector('.carousel-prev');
  var next   = wrapper.querySelector('.carousel-next');
  var dotsWrap = wrapper.querySelector('.carousel-dots');

  if (!track || slides.length === 0) return;

  var current = 0;
  var total   = slides.length;

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

  /* Swipe touch */
  var startX = 0;
  track.addEventListener('touchstart', function (e) { startX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend',   function (e) {
    var dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 50) goTo(dx < 0 ? current + 1 : current - 1);
  });

  /* Auto-advance */
  var timer = setInterval(function () { goTo(current + 1); }, 5000);
  wrapper.addEventListener('mouseenter', function () { clearInterval(timer); });
  wrapper.addEventListener('mouseleave', function () {
    timer = setInterval(function () { goTo(current + 1); }, 5000);
  });

  goTo(0);
}

/* ── INIT ── */
document.addEventListener('DOMContentLoaded', function () {
  initTheme();
  initMobileNav();
  setTimeout(initReveal, 80);
  document.querySelectorAll('.carousel').forEach(initCarousel);

  /* Rimuove lo stile temporaneo anti-flash */
  var fix = document.getElementById('theme-fix');
  if (fix) fix.remove();

  /* Nav active link (desktop + mobile) */
  var page = document.body.dataset.page;
  document.querySelectorAll('.nav-links a, .nav-mobile a, .footer-links a').forEach(function (a) {
    if (a.dataset.page === page) a.classList.add('active');
  });
});
