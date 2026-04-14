const SECTION_IDS = ['home', 'about', 'projects', 'skills', 'contact'];
let currentIndex = 0;

const navbar         = document.getElementById('navbar');
const hamburgerBtn   = document.getElementById('hamburger-btn');
const mobileMenu     = document.getElementById('mobile-menu');
const hamburgerLines = document.querySelectorAll('.hamburger-line');
const navLinks       = document.querySelectorAll('.nav-link');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

// Navbar scroll effect
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.classList.add('bg-dark-900/90', 'backdrop-blur-xl', 'border-b', 'border-slate-800/50', 'shadow-xl');
  } else {
    navbar.classList.remove('bg-dark-900/90', 'backdrop-blur-xl', 'border-b', 'border-slate-800/50', 'shadow-xl');
  }
});

function updateActiveNav(index) {
  navLinks.forEach((link, i) => {
    link.classList.toggle('active', i === index);
    if (i === index) {
      link.classList.remove('text-slate-400');
      link.classList.add('text-slate-100');
    } else {
      link.classList.remove('text-slate-100');
      link.classList.add('text-slate-400');
    }
  });

  mobileNavLinks.forEach((link, i) => {
    const dot = link.querySelector('span');
    if (i === index) {
      link.classList.add('text-accent-400');
      link.classList.remove('text-slate-400');
      if (dot) { dot.classList.add('bg-accent-400'); dot.classList.remove('bg-slate-600'); }
    } else {
      link.classList.remove('text-accent-400');
      link.classList.add('text-slate-400');
      if (dot) { dot.classList.remove('bg-accent-400'); dot.classList.add('bg-slate-600'); }
    }
  });
}

// Hamburger menu toggle
function closeMobileMenu() {
  mobileMenu.classList.add('hidden');
  hamburgerLines[0].style.transform = '';
  hamburgerLines[1].style.opacity = '';
  hamburgerLines[2].style.transform = '';
}

hamburgerBtn.addEventListener('click', () => {
  const isOpen = !mobileMenu.classList.contains('hidden');
  if (isOpen) {
    closeMobileMenu();
  } else {
    mobileMenu.classList.remove('hidden');
    hamburgerLines[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
    hamburgerLines[1].style.opacity = '0';
    hamburgerLines[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
  }
});

document.addEventListener('click', (e) => {
  if (!navbar.contains(e.target)) closeMobileMenu();
});

// Scroll reveal
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

// Typing animation
const roles = ['Computer Science Student', 'UI/UX Enthusiast', 'Frontend Developer'];
let roleIdx = 0, charIdx = 0, isDeleting = false;
const typingEl = document.getElementById('typing-text');

if (typingEl) {
  (function typeWriter() {
    const cur = roles[roleIdx];
    typingEl.textContent = isDeleting ? cur.slice(0, charIdx - 1) : cur.slice(0, charIdx + 1);
    isDeleting ? charIdx-- : charIdx++;
    let speed = isDeleting ? 60 : 100;
    if (!isDeleting && charIdx === cur.length) { speed = 2000; isDeleting = true; }
    else if (isDeleting && charIdx === 0) { isDeleting = false; roleIdx = (roleIdx + 1) % roles.length; speed = 400; }
    setTimeout(typeWriter, speed);
  })();
}

const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

updateActiveNav(0);

window.addEventListener('load', () => {
  document.querySelectorAll('#home .reveal').forEach((el, i) => {
    setTimeout(() => el.classList.add('visible'), 150 + i * 80);
  });
});
