/* ── shared.js ── */

/* Inietta hamburger + nav-mobile su ogni pagina che non li ha già */
(function injectMobileNav() {
  /* Raccoglie i link dalla nav desktop */
  var navWrap = document.querySelector('.nav-wrap');
  if (!navWrap) return;

  /* ── Hamburger button ── */
  if (!document.getElementById('nav-hamburger')) {
    var btn = document.createElement('button');
    btn.className = 'nav-hamburger';
    btn.id = 'nav-hamburger';
    btn.setAttribute('aria-label', 'Apri menu');
    btn.setAttribute('aria-expanded', 'false');
    btn.innerHTML = '<span></span><span></span><span></span>';
    navWrap.appendChild(btn);
  }

  /* ── Overlay scuro dietro il menu ── */
  if (!document.getElementById('nav-overlay')) {
    var overlay = document.createElement('div');
    overlay.id = 'nav-overlay';
    overlay.style.cssText = [
      'display:none',
      'position:fixed',
      'inset:0',
      'background:rgba(0,0,0,0.55)',
      'z-index:198',
      'backdrop-filter:blur(4px)',
      '-webkit-backdrop-filter:blur(4px)',
      'transition:opacity .25s'
    ].join(';');
    document.body.appendChild(overlay);
  }

  /* ── Menu mobile ── */
  if (!document.getElementById('nav-mobile')) {
    /* Recupera i link dalla lista desktop */
    var links = document.querySelectorAll('.nav-links a[data-page]');
    var page  = document.body.dataset.page || '';
    var linksHTML = Array.from(links).map(function(a) {
      var active = (a.dataset.page === page) ? ' class="active"' : '';
      return '<a href="' + a.getAttribute('href') + '" data-page="' + a.dataset.page + '"' + active + '>' + a.textContent + '</a>';
    }).join('');

    var mobile = document.createElement('nav');
    mobile.className = 'nav-mobile';
    mobile.id = 'nav-mobile';
    mobile.innerHTML = linksHTML +
      '<div class="nav-mobile-footer">' +
        '<span>OriAntica &middot; Oria (BR)</span>' +
        '<button class="theme-btn" id="theme-btn-mobile">☾</button>' +
      '</div>';
    document.body.insertBefore(mobile, document.body.firstChild);
  }
})();

/* ──────────────────────────────────────
   THEME
────────────────────────────────────── */
function initTheme() {
  var btn = document.getElementById('theme-btn');
  if (!btn) return;
  var ALLOWED = ['light', 'dark'];
  var saved = 'light';
  try {
    var t = localStorage.getItem('oria-theme');
    if (ALLOWED.includes(t)) saved = t;
  } catch(_) {}
  applyTheme(saved);
  btn.addEventListener('click', function() {
    var current = document.documentElement.dataset.theme || 'light';
    applyTheme(current === 'dark' ? 'light' : 'dark');
  });
  var btnMobile = document.getElementById('theme-btn-mobile');
  if (btnMobile) {
    btnMobile.addEventListener('click', function() {
      var current = document.documentElement.dataset.theme || 'light';
      applyTheme(current === 'dark' ? 'light' : 'dark');
      syncThemeButtons();
    });
  }
}

function syncThemeButtons() {
  var theme = document.documentElement.dataset.theme || 'light';
  var icon  = theme === 'dark' ? '☉' : '☾';
  var b1 = document.getElementById('theme-btn');
  var b2 = document.getElementById('theme-btn-mobile');
  if (b1) b1.textContent = icon;
  if (b2) b2.textContent = icon;
}

function applyTheme(theme) {
  var ALLOWED = ['light', 'dark'];
  if (!ALLOWED.includes(theme)) theme = 'light';
  document.documentElement.dataset.theme = theme;
  try { localStorage.setItem('oria-theme', theme); } catch(_) {}
  syncThemeButtons();
}

/* ──────────────────────────────────────
   MOBILE NAV
────────────────────────────────────── */
function initMobileNav() {
  var btn     = document.getElementById('nav-hamburger');
  var menu    = document.getElementById('nav-mobile');
  var overlay = document.getElementById('nav-overlay');
  if (!btn || !menu) return;

  var isOpen = false;

  function openMenu() {
    isOpen = true;
    btn.classList.add('open');
    menu.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
    btn.setAttribute('aria-label', 'Chiudi menu');
    /* Overlay */
    if (overlay) {
      overlay.style.display = 'block';
      /* forza reflow per la transizione */
      overlay.offsetHeight;
      overlay.style.opacity = '1';
    }
    /* Blocca scroll body MA NON il menu */
    document.body.style.overflow = 'hidden';
    /* Ferma parallax hero se presente */
    var heroBg = document.getElementById('hero-bg');
    if (heroBg) heroBg.style.transform = 'none';
  }

  function closeMenu() {
    isOpen = false;
    btn.classList.remove('open');
    menu.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-label', 'Apri menu');
    if (overlay) {
      overlay.style.opacity = '0';
      setTimeout(function() { overlay.style.display = 'none'; }, 250);
    }
    document.body.style.overflow = '';
  }

  btn.addEventListener('click', function() { isOpen ? closeMenu() : openMenu(); });

  if (overlay) {
    overlay.addEventListener('click', closeMenu);
  }

  document.addEventListener('click', function(e) {
    if (isOpen && !menu.contains(e.target) && !btn.contains(e.target) && e.target !== overlay) {
      closeMenu();
    }
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && isOpen) { closeMenu(); btn.focus(); }
  });

  menu.querySelectorAll('a').forEach(function(a) {
    a.addEventListener('click', closeMenu);
  });

  var mq = window.matchMedia('(min-width: 769px)');
  mq.addEventListener('change', function(e) {
    if (e.matches && isOpen) closeMenu();
  });
}

/* ──────────────────────────────────────
   REVEAL ON SCROLL
────────────────────────────────────── */
function initReveal() {
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.06 });
  document.querySelectorAll('.reveal').forEach(function(el, i) {
    el.style.transitionDelay = (i * 0.06) + 's';
    observer.observe(el);
  });
}

/* ──────────────────────────────────────
   CAROUSEL
────────────────────────────────────── */
function initCarousel(wrapper) {
  if (!wrapper) return;
  var track    = wrapper.querySelector('.carousel-track');
  var slides   = wrapper.querySelectorAll('.carousel-slide');
  var prev     = wrapper.querySelector('.carousel-prev');
  var next     = wrapper.querySelector('.carousel-next');
  var dotsWrap = wrapper.querySelector('.carousel-dots');
  if (!track || slides.length === 0) return;
  var current = 0;
  var total   = slides.length;
  if (dotsWrap) {
    slides.forEach(function(_, i) {
      var d = document.createElement('button');
      d.className = 'carousel-dot' + (i === 0 ? ' active' : '');
      d.setAttribute('aria-label', 'Slide ' + (i + 1));
      d.addEventListener('click', function() { goTo(i); });
      dotsWrap.appendChild(d);
    });
  }
  function goTo(n) {
    current = (n + total) % total;
    track.style.transform = 'translateX(-' + (current * 100) + '%)';
    wrapper.querySelectorAll('.carousel-dot').forEach(function(d, i) {
      d.classList.toggle('active', i === current);
    });
  }
  if (prev) prev.addEventListener('click', function() { goTo(current - 1); });
  if (next) next.addEventListener('click', function() { goTo(current + 1); });
  var startX = 0;
  track.addEventListener('touchstart', function(e) { startX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend',   function(e) {
    var dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 50) goTo(dx < 0 ? current + 1 : current - 1);
  });
  var timer = setInterval(function() { goTo(current + 1); }, 5000);
  wrapper.addEventListener('mouseenter', function() { clearInterval(timer); });
  wrapper.addEventListener('mouseleave', function() { timer = setInterval(function() { goTo(current + 1); }, 5000); });
  goTo(0);
}

/* ──────────────────────────────────────
   DISCLAIMER
────────────────────────────────────── */
function initDisclaimer() {
  var modal = document.getElementById('disclaimer-modal');
  if (!modal) return;
  var DISCLAIMER_KEY = 'oria-disclaimer-seen';
  var seen = localStorage.getItem(DISCLAIMER_KEY);
  if (!seen) {
    modal.classList.add('show');
    var closeBtn     = document.getElementById('disclaimer-close');
    var closeBtnMain = document.getElementById('disclaimer-close-btn');
    function closeModal() {
      modal.classList.remove('show');
      localStorage.setItem(DISCLAIMER_KEY, 'true');
    }
    if (closeBtn)     closeBtn.addEventListener('click', closeModal);
    if (closeBtnMain) closeBtnMain.addEventListener('click', closeModal);
    modal.addEventListener('click', function(e) { if (e.target === modal) closeModal(); });
  }
}

/* ──────────────────────────────────────
   BOOT
────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', function() {
  initTheme();
  initMobileNav();
  initDisclaimer();
  setTimeout(initReveal, 80);
  document.querySelectorAll('.carousel').forEach(initCarousel);

  var fix = document.getElementById('theme-fix');
  if (fix) fix.remove();

  /* Marca il link attivo nella nav */
  var page = document.body.dataset.page;
  document.querySelectorAll('.nav-links a, .nav-mobile a, .footer-links a').forEach(function(a) {
    if (a.dataset.page === page) a.classList.add('active');
  });
});
