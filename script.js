/* ═══════════════════════════════════════════════════
   STEP 1 — Add .js-on to body.
   ONLY after this does CSS hide .fade elements.
   If JS fails at any point, content stays visible.
═══════════════════════════════════════════════════ */
document.body.classList.add('js-on');

/* ═══════════════════════════════════════════════════
   PARTICLES
═══════════════════════════════════════════════════ */
(function () {
  var c = document.getElementById('ptcl');
  if (!c) return;
  var n = window.innerWidth < 600 ? 6 : 15;
  for (var i = 0; i < n; i++) {
    var p = document.createElement('div');
    p.className = 'pt';
    p.style.left = (Math.random() * 100) + '%';
    p.style.setProperty('--d',  (8  + Math.random() * 10) + 's');
    p.style.setProperty('--dl', (Math.random() * 10) + 's');
    c.appendChild(p);
  }
}());

/* ═══════════════════════════════════════════════════
   NAV — scroll shadow
═══════════════════════════════════════════════════ */
var mainNav = document.getElementById('mainNav');
window.addEventListener('scroll', function () {
  mainNav.classList.toggle('scrolled', window.scrollY > 30);
}, { passive: true });

/* ═══════════════════════════════════════════════════
   NAV — active link on scroll
═══════════════════════════════════════════════════ */
var sections  = document.querySelectorAll('section[id]');
var navLinks  = document.querySelectorAll('.nav-list a');
var mobLinks  = document.querySelectorAll('.mob-link');

sections.forEach(function (sec) {
  new IntersectionObserver(function (entries) {
    if (entries[0].isIntersecting) {
      var id = sec.id;
      navLinks.forEach(function (l) {
        l.classList.toggle('active', l.getAttribute('href') === '#' + id);
      });
      mobLinks.forEach(function (l) {
        l.classList.toggle('active', l.dataset.section === id);
      });
    }
  }, { threshold: 0.4 }).observe(sec);
});

/* ═══════════════════════════════════════════════════
   SCROLL ANIMATIONS — fire ONCE per element
═══════════════════════════════════════════════════ */
var seen = new WeakSet();

var revealObserver = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting && !seen.has(entry.target)) {
      var el    = entry.target;
      var delay = parseInt(el.dataset.delay || 0, 10);
      seen.add(el);
      setTimeout(function () {
        el.classList.add('visible');
      }, delay);
      revealObserver.unobserve(el);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.fade').forEach(function (el) {
  revealObserver.observe(el);
});

/* Hero elements — fire immediately on page load (no scroll needed) */
window.addEventListener('load', function () {
  document.querySelectorAll('#hero .fade').forEach(function (el, i) {
    var delay = parseInt(el.dataset.delay || 0, 10);
    setTimeout(function () {
      if (!seen.has(el)) {
        seen.add(el);
        el.classList.add('visible');
        revealObserver.unobserve(el);
      }
    }, delay + 80);
  });
});

/* ═══════════════════════════════════════════════════
   SKILL TAGS — staggered entrance (once)
═══════════════════════════════════════════════════ */
var skillsDone = false;
var skillsSec  = document.getElementById('skills');

if (skillsSec) {
  new IntersectionObserver(function (entries) {
    if (entries[0].isIntersecting && !skillsDone) {
      skillsDone = true;
      document.querySelectorAll('.sk-tag').forEach(function (tag, i) {
        tag.style.opacity   = '0';
        tag.style.transform = 'translateY(10px)';
        setTimeout(function () {
          tag.style.transition = 'opacity .35s ease, transform .35s ease';
          tag.style.opacity    = '1';
          tag.style.transform  = 'none';
        }, i * 30 + 100);
      });
    }
  }, { threshold: 0.2 }).observe(skillsSec);
}

/* ═══════════════════════════════════════════════════
   MOBILE MENU
   - Opens as top dropdown below nav bar
   - Each nav link closes menu + scrolls to section
   - Clicking anywhere outside the menu closes it
═══════════════════════════════════════════════════ */
var mobMenu = document.getElementById('mobMenu');
var hbgBtn  = document.getElementById('hbgBtn');

function openMenu() {
  mobMenu.classList.add('open');
  hbgBtn.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  mobMenu.classList.remove('open');
  hbgBtn.classList.remove('open');
  document.body.style.overflow = '';
}

hbgBtn.addEventListener('click', function (e) {
  e.stopPropagation();
  if (mobMenu.classList.contains('open')) { closeMenu(); } else { openMenu(); }
});

/* Close when clicking outside the menu */
document.addEventListener('click', function (e) {
  if (mobMenu.classList.contains('open') &&
      !mobMenu.contains(e.target) &&
      !hbgBtn.contains(e.target)) {
    closeMenu();
  }
});

/* Each link: close menu then scroll to section */
document.querySelectorAll('.mob-link').forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    var targetId = link.dataset.section;
    var target   = document.getElementById(targetId);
    closeMenu();
    setTimeout(function () {
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 340);
  });
});

/* ═══════════════════════════════════════════════════
   CONTACT FORM
═══════════════════════════════════════════════════ */
var cForm = document.getElementById('cForm');

if (cForm) {
  cForm.addEventListener('submit', function (e) {
    e.preventDefault();

    var btn = document.getElementById('fBtn');
    var orig = btn.textContent;

    btn.textContent = 'Sending...';
    btn.disabled = true;

    fetch("https://formspree.io/f/xqegqgga", {
      method: "POST",
      body: new FormData(cForm),
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        btn.textContent = '✓ Message Sent!';
        btn.style.background = '#145a32';
        cForm.reset();
      } else {
        btn.textContent = 'Error!';
      }
    })
    .catch(() => {
      btn.textContent = 'Failed!';
    })
    .finally(() => {
      setTimeout(() => {
        btn.textContent = orig;
        btn.style.background = '';
        btn.disabled = false;
      }, 3000);
    });
  });
}