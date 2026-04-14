const contactInfoData = [
  {
    label: 'Email',
    value: 'fikisulistiawan@gmail.com',
    link: 'mailto:fikisulistiawan@gmail.com',
    icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>`,
    color: 'from-accent-500 to-cyan-400',
  },
  {
    label: 'Lokasi',
    value: 'Lampung, Indonesia',
    link: '#',
    icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>`,
    color: 'from-pink-500 to-rose-400',
  },
  {
    label: 'Universitas',
    value: 'Universitas Lampung',
    link: '#',
    icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>`,
    color: 'from-purple-500 to-violet-400',
  },
];

// ===== SOCIAL =====
const socialLinksData = [
  {
    name: 'GitHub',
    url: 'https://github.com/kiisann',
    color: 'hover:border-slate-400',
    icon: `<path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>`,
    fill: true,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/fiki-sulistiawan-153208338/',
    color: 'hover:border-blue-400',
    icon: `<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>`,
    fill: true,
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/kiisltwnn_',
    color: 'hover:border-pink-400',
    icon: `<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>`,
    fill: true,
  },
];

// ===== RENDER CONTACT INFO =====
function renderContactInfo() {
  const container = document.getElementById('contact-info');
  container.innerHTML = contactInfoData.map((info, i) => `
    <a href="${info.link}" class="reveal glass flex items-center gap-4 p-4 rounded-2xl border border-slate-700/30 hover:border-accent-500/40 transition-all duration-300 group" style="transition-delay:${0.1 + i * 0.1}s;">
      <div class="w-10 h-10 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center flex-shrink-0 shadow-lg">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">${info.icon}</svg>
      </div>
      <div>
        <p class="text-xs text-slate-500 font-mono">${info.label}</p>
        <p class="text-sm font-semibold text-slate-200 group-hover:text-accent-400 transition-colors">${info.value}</p>
      </div>
    </a>
  `).join('');
}

// ===== RENDER SOCIAL LINKS =====
function renderSocialLinks() {
  const container = document.getElementById('social-links');
  container.innerHTML = socialLinksData.map(s => `
    <a href="${s.url}" target="_blank"
      class="reveal w-10 h-10 rounded-xl glass border border-slate-700/40 ${s.color} flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300 hover:-translate-y-1">
      <svg class="w-4 h-4" ${s.fill ? 'fill="currentColor"' : 'fill="none" stroke="currentColor" stroke-width="1.8"'} viewBox="0 0 24 24">${s.icon}</svg>
    </a>
  `).join('');
}

// ===== FORM VALIDATION =====
function validateForm() {
  let valid = true;

  const name = document.getElementById('input-name').value.trim();
  const email = document.getElementById('input-email').value.trim();
  const subject = document.getElementById('input-subject').value.trim();
  const message = document.getElementById('input-message').value.trim();

  const showErr = (id, show) => document.getElementById(id).classList.toggle('hidden', !show);
  const highlightInput = (id, error) => {
    const el = document.getElementById(id);
    el.classList.toggle('border-red-500/60', error);
    el.classList.toggle('border-slate-700/50', !error);
  };

  if (!name) { showErr('err-name', true); highlightInput('input-name', true); valid = false; }
  else { showErr('err-name', false); highlightInput('input-name', false); }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) { showErr('err-email', true); highlightInput('input-email', true); valid = false; }
  else { showErr('err-email', false); highlightInput('input-email', false); }

  if (!subject) { showErr('err-subject', true); highlightInput('input-subject', true); valid = false; }
  else { showErr('err-subject', false); highlightInput('input-subject', false); }

  if (!message) { showErr('err-message', true); highlightInput('input-message', true); valid = false; }
  else { showErr('err-message', false); highlightInput('input-message', false); }

  return valid;
}

// ===== FORM SUBMIT (Formspree) =====
document.getElementById('contact-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  if (!validateForm()) return;

  const btn     = document.getElementById('submit-btn');
  const btnText = document.getElementById('btn-text');
  const successMsg = document.getElementById('success-msg');
  const errorMsg   = document.getElementById('error-msg');

  // Loading state
  btn.disabled = true;
  btnText.textContent = 'Mengirim...';

  const form = document.getElementById('contact-form');
  const data = {
    name:    document.getElementById('input-name').value.trim(),
    email:   document.getElementById('input-email').value.trim(),
    subject: document.getElementById('input-subject').value.trim(),
    message: document.getElementById('input-message').value.trim(),
  };

  try {
    const res = await fetch('https://formspree.io/f/xbdqjnkb', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      // Sukses
      successMsg.classList.remove('hidden');
      successMsg.classList.add('flex');
      form.reset();

      // Auto-dismiss setelah 5 detik
      setTimeout(() => {
        successMsg.style.transition = 'opacity 0.5s ease';
        successMsg.style.opacity = '0';
        setTimeout(() => {
          successMsg.classList.add('hidden');
          successMsg.classList.remove('flex');
          successMsg.style.opacity = '';
          successMsg.style.transition = '';
        }, 500);
      }, 5000);
    } else {
      throw new Error('Server error');
    }
  } catch (err) {
    // Gagal
    errorMsg.classList.remove('hidden');
    errorMsg.classList.add('flex');
    setTimeout(() => {
      errorMsg.style.transition = 'opacity 0.5s ease';
      errorMsg.style.opacity = '0';
      setTimeout(() => {
        errorMsg.classList.add('hidden');
        errorMsg.classList.remove('flex');
        errorMsg.style.opacity = '';
        errorMsg.style.transition = '';
      }, 500);
    }, 5000);
  } finally {
    btn.disabled = false;
    btnText.textContent = 'Kirim Pesan';
  }
});

// ===== SCROLL REVEAL =====
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });

// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.classList.add('bg-dark-900/90', 'backdrop-blur-xl', 'border-b', 'border-slate-800/50', 'shadow-xl');
  } else {
    navbar.classList.remove('bg-dark-900/90', 'backdrop-blur-xl', 'border-b', 'border-slate-800/50', 'shadow-xl');
  }
});

// ===== HAMBURGER MENU =====
const hamburgerBtn = document.getElementById('hamburger-btn');
const mobileMenu = document.getElementById('mobile-menu');
const hamburgerLines = document.querySelectorAll('.hamburger-line');
hamburgerBtn.addEventListener('click', () => {
  const isOpen = !mobileMenu.classList.contains('hidden');
  if (isOpen) {
    mobileMenu.classList.add('hidden');
    hamburgerLines[0].style.transform = '';
    hamburgerLines[1].style.opacity = '';
    hamburgerLines[2].style.transform = '';
  } else {
    mobileMenu.classList.remove('hidden');
    hamburgerLines[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
    hamburgerLines[1].style.opacity = '0';
    hamburgerLines[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
  }
});

// ===== FOOTER YEAR =====
document.getElementById('year').textContent = new Date().getFullYear();

// ===== INIT =====
renderContactInfo();
renderSocialLinks();
window.addEventListener('load', () => {
  document.querySelectorAll('.reveal').forEach((el, i) => {
    revealObs.observe(el);
    setTimeout(() => el.classList.add('visible'), 200 + i * 80);
  });
});
