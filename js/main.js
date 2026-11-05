/**
 * Cassius Lennox Mercado — Virtual Assistant Portfolio
 * JavaScript: js/main.js
 */

(function () {
  'use strict';

  /* ── Particle System ─────────────────────────────────────── */
  function initParticles() {
    const container = document.getElementById('particles');
    if (!container) return;

    const colors = ['#4f8ef7', '#7c5ef5', '#38e8c5', '#ffffff'];
    const count  = 22;

    for (let i = 0; i < count; i++) {
      const p    = document.createElement('div');
      p.className = 'particle';
      const size = Math.random() * 4 + 2;

      p.style.cssText = [
        `width:${size}px`,
        `height:${size}px`,
        `left:${Math.random() * 100}%`,
        `background:${colors[Math.floor(Math.random() * colors.length)]}`,
        `animation-duration:${Math.random() * 18 + 12}s`,
        `animation-delay:${Math.random() * 15}s`,
      ].join(';');

      container.appendChild(p);
    }
  }

  /* ── Mobile Navigation ───────────────────────────────────── */
  function initMobileNav() {
    const hamburger  = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    if (!hamburger || !mobileMenu) return;

    hamburger.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
    });

    // Close on link click
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => mobileMenu.classList.remove('open'));
    });
  }

  /* ── Active Nav Link on Scroll ───────────────────────────── */
  function initActiveNav() {
    const sections  = document.querySelectorAll('section[id]');
    const navLinks  = document.querySelectorAll('.nav-links a');

    function update() {
      let current = '';
      sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 130) {
          current = s.getAttribute('id');
        }
      });

      navLinks.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === '#' + current);
      });
    }

    window.addEventListener('scroll', update, { passive: true });
    update();
  }

  /* ── Scroll Fade-In Animations ───────────────────────────── */
  function initScrollAnimations() {
    const elements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    elements.forEach(el => observer.observe(el));
  }

  /* ── Animated Stat Counters ──────────────────────────────── */
  function animateCount(el, end, suffix) {
    const duration = 1800;
    const step     = end / duration * 16;
    let   current  = 0;

    const timer = setInterval(() => {
      current = Math.min(current + step, end);
      el.textContent = Math.floor(current) + suffix;
      if (current >= end) {
        el.textContent = end + suffix;
        clearInterval(timer);
      }
    }, 16);
  }

  function initStatCounters() {
    const statEls = document.querySelectorAll('.stat-num');
    const config  = [
      { end: 2,   suffix: '+' },
      { end: 8,   suffix: '+' },
      { end: 8,   suffix: '+' },
      { end: 100, suffix: '%' },
    ];

    const statsBar = document.querySelector('.stats-bar');
    if (!statsBar) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          statEls.forEach((el, i) => {
            const cfg = config[i];
            if (cfg) animateCount(el, cfg.end, cfg.suffix);
          });
          observer.disconnect();
        }
      });
    }, { threshold: 0.3 });

    observer.observe(statsBar);
  }

  /* ── Smooth Scroll for Anchor Links ─────────────────────── */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  /* ── Navbar shadow on scroll ─────────────────────────────── */
  function initNavbarScroll() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    window.addEventListener('scroll', () => {
      navbar.style.boxShadow = window.scrollY > 20
        ? '0 4px 24px rgba(0,0,0,.4)'
        : 'none';
    }, { passive: true });
  }

  /* ── Boot ────────────────────────────────────────────────── */
  function init() {
    initParticles();
    initMobileNav();
    initActiveNav();
    initScrollAnimations();
    initStatCounters();
    initSmoothScroll();
    initNavbarScroll();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
