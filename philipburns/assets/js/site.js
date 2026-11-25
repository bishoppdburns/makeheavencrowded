(function () {
  document.documentElement.classList.remove('no-js');

  // Header state
  var header = document.querySelector('.site-header');
  function onScroll() { if (header) header.classList.toggle('scrolled', window.scrollY > 30); }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Mobile menu
  var toggle = document.querySelector('.menu-toggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      var open = document.body.classList.toggle('menu-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    document.querySelectorAll('.nav-links a').forEach(function (a) {
      a.addEventListener('click', function () {
        document.body.classList.remove('menu-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Reveal on scroll
  var els = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    els.forEach(function (el) { io.observe(el); });
  } else {
    els.forEach(function (el) { el.classList.add('in'); });
  }

  // Rising embers in hero sections
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.querySelectorAll('.embers').forEach(function (box) {
    if (reduce) return;
    var n = parseInt(box.getAttribute('data-count') || '26', 10);
    for (var i = 0; i < n; i++) {
      var s = document.createElement('i');
      s.style.left = (40 + Math.random() * 60) + '%';
      s.style.animationDuration = (7 + Math.random() * 9) + 's';
      s.style.animationDelay = (-Math.random() * 14) + 's';
      s.style.setProperty('--dx', (Math.random() * 120 - 60) + 'px');
      var size = 1.5 + Math.random() * 2.5;
      s.style.width = s.style.height = size + 'px';
      box.appendChild(s);
    }
  });

  // Footer year
  document.querySelectorAll('[data-year]').forEach(function (el) { el.textContent = new Date().getFullYear(); });

  // Pre-fill booking form topic from ?topic= links
  var params = new URLSearchParams(window.location.search);
  var topic = params.get('topic');
  var sel = document.querySelector('select[name="message_topic"]');
  if (topic && sel) {
    Array.prototype.forEach.call(sel.options, function (o) { if (o.value === topic) sel.value = topic; });
  }
})();
