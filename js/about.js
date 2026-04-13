// ============================================================
//  FIKI SULISTIAWAN - PORTFOLIO
//  about.js — JavaScript DOM Manipulation (About Page)
// ============================================================

// ===== NAVBAR SCROLL EFFECT =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.classList.add('bg-dark-900/90', 'backdrop-blur-xl', 'border-b', 'border-slate-800/50', 'shadow-xl');
  } else {
    navbar.classList.remove('bg-dark-900/90', 'backdrop-blur-xl', 'border-b', 'border-slate-800/50', 'shadow-xl');
  }
});

// ===== HAMBURGER MENU TOGGLE =====
const hamburgerBtn = document.getElementById('hamburger-btn');
const mobileMenu   = document.getElementById('mobile-menu');
const hamburgerLines = document.querySelectorAll('.hamburger-line');

hamburgerBtn.addEventListener('click', () => {
  const isOpen = !mobileMenu.classList.contains('hidden');
  if (isOpen) {
    mobileMenu.classList.add('hidden');
    hamburgerLines[0].style.transform = '';
    hamburgerLines[1].style.opacity  = '';
    hamburgerLines[2].style.transform = '';
  } else {
    mobileMenu.classList.remove('hidden');
    hamburgerLines[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
    hamburgerLines[1].style.opacity  = '0';
    hamburgerLines[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
  }
});

// ===== SCROLL REVEAL =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ===== PERSONAL INFO GRID =====
const infoData = [
  {
    label: 'Nama',
    value: 'Fiki Sulistiawan',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>',
  },
  {
    label: 'Universitas',
    value: 'Universitas Lampung',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>',
  },
  {
    label: 'Jurusan',
    value: 'Ilmu Komputer',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>',
  },
  {
    label: 'Lokasi',
    value: 'Lampung, Indonesia',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>',
  },
];

const infoGrid = document.getElementById('info-grid');
infoData.forEach(item => {
  const el = document.createElement('div');
  el.className = 'glass rounded-xl p-3.5 flex items-start gap-3 border border-slate-700/30';
  el.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-accent-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
      ${item.icon}
    </svg>
    <div>
      <p class="text-xs text-slate-500 font-mono">${item.label}</p>
      <p class="text-sm font-semibold text-slate-200 mt-0.5">${item.value}</p>
    </div>
  `;
  infoGrid.appendChild(el);
});

// ===== EDUCATION DATA =====
const educationData = [
  {
    degree:     'S1 Ilmu Komputer',
    school:     'Universitas Lampung',
    period:     '2023 – Sekarang',
    desc:       'Mempelajari dasar-dasar ilmu komputer, algoritma, pemrograman web, basis data, dan rekayasa perangkat lunak.',
    current:    true,
  },
  {
    degree:     'SMA / Sederajat',
    school:     'SMA Negeri — Lampung',
    period:     '2020 – 2023',
    desc:       'Lulus dari jurusan IPA dengan minat yang besar pada matematika dan teknologi informasi.',
    current:    false,
  },
];

const educationList = document.getElementById('education-list');
educationData.forEach((edu, i) => {
  const el = document.createElement('div');
  el.className = 'reveal glass rounded-2xl p-6 border border-slate-700/30 flex flex-col sm:flex-row gap-5 hover:border-accent-500/30 transition-all duration-300';
  el.style.transitionDelay = `${i * 0.15}s`;
  el.innerHTML = `
    <!-- Icon -->
    <div class="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-accent-500 to-cyan-400 flex items-center justify-center shadow-lg">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
      </svg>
    </div>
    <!-- Content -->
    <div class="flex-1">
      <div class="flex flex-wrap items-center justify-between gap-2 mb-1">
        <h3 class="text-lg font-bold text-slate-100">${edu.degree}</h3>
        <span class="text-xs font-mono px-2.5 py-1 rounded-full ${edu.current ? 'bg-accent-500/20 text-accent-400 border border-accent-500/30' : 'bg-slate-700/50 text-slate-400 border border-slate-700'}">
          ${edu.period}
        </span>
      </div>
      <p class="text-accent-400 text-sm font-medium mb-2">${edu.school}</p>
      <p class="text-slate-400 text-sm leading-relaxed">${edu.desc}</p>
    </div>
  `;
  educationList.appendChild(el);
  observer.observe(el);
});

// ===== INTERESTS DATA =====
const interestsData = [
  {
    title: 'Web Development',
    desc:  'Membangun antarmuka modern dan responsif.',
    icon:  '<path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>',
  },
  {
    title: 'UI/UX Design',
    desc:  'Merancang pengalaman pengguna yang intuitif.',
    icon:  '<path stroke-linecap="round" stroke-linejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"/>',
  },
  {
    title: 'Problem Solving',
    desc:  'Memecahkan masalah secara logis dan kreatif.',
    icon:  '<path stroke-linecap="round" stroke-linejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>',
  },
  {
    title: 'Open Source',
    desc:  'Berkontribusi pada komunitas developer.',
    icon:  '<path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9"/>',
  },
];

const interestsGrid = document.getElementById('interests-grid');
interestsData.forEach((item, i) => {
  const el = document.createElement('div');
  el.className = 'reveal glass rounded-2xl p-5 border border-slate-700/30 hover:border-accent-500/30 transition-all duration-300 hover:-translate-y-1 group';
  el.style.transitionDelay = `${i * 0.1}s`;
  el.innerHTML = `
    <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-500/20 to-cyan-500/20 flex items-center justify-center mb-3 group-hover:from-accent-500/40 group-hover:to-cyan-500/40 transition-all duration-300">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-accent-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
        ${item.icon}
      </svg>
    </div>
    <h3 class="text-sm font-bold text-slate-100 mb-1 group-hover:text-accent-400 transition-colors">${item.title}</h3>
    <p class="text-xs text-slate-500 leading-relaxed">${item.desc}</p>
  `;
  interestsGrid.appendChild(el);
  observer.observe(el);
});

// ===== FOOTER YEAR =====
document.getElementById('year').textContent = new Date().getFullYear();

// ===== TRIGGER PAGE HERO REVEAL =====
window.addEventListener('load', () => {
  document.querySelectorAll('section:first-of-type .reveal').forEach((el, i) => {
    setTimeout(() => el.classList.add('visible'), 200 + i * 120);
  });
});
