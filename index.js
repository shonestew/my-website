// ====== HAMBURGER MENU ======
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => navLinks.classList.remove('open'))
);

// ====== SCROLL REVEAL ======
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

reveals.forEach(r => observer.observe(r));

// ====== NAV ACTIVE HIGHLIGHT ======
const sections = document.querySelectorAll('section[id]');
const navAs = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 100) current = s.id;
  });
  navAs.forEach(a => {
    a.style.borderBottom = '';
    if (a.getAttribute('href') === '#' + current)
      a.style.borderBottom = '2px solid #c0392b';
  });
});

// ====== HERO PARALLAX ======
window.addEventListener('scroll', () => {
  const clipping = document.querySelector('.newspaper-clipping');
  if (clipping) {
    const y = window.scrollY * 0.15;
    clipping.style.transform = `rotate(-1.5deg) translateY(${y}px)`;
  }
});
