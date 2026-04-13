// ============================================================
//  FIKI SULISTIAWAN - PORTFOLIO
//  main.js — Full-Page Scroll (CSS Snap + Navbar Sync)
//  Style: Seperti wirayudha-dev.web.app
// ============================================================

// ===== CONFIG =====
const SECTION_IDS    = ['home', 'about', 'projects', 'skills', 'contact'];
// Tentukan section mana yang punya background terang (untuk inversi navbar)
// Kita pakai dark theme semua, tapi bisa dibedakan per section jika diinginkan
const LIGHT_SECTIONS = [];  // kosong = semua dark, tambah index jika ada light section

let currentIndex = 0;

// ===== ELEMENTS =====
const fpContainer    = document.getElementById('fp-container');
const navbar         = document.getElementById('navbar');
const hamburgerBtn   = document.getElementById('hamburger-btn');
const mobileMenu     = document.getElementById('mobile-menu');
const hamburgerLines = document.querySelectorAll('.hamburger-line');
const navLinks       = document.querySelectorAll('.nav-link');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

// ===== SCROLL TO SECTION =====
function scrollToSection(index) {
  if (index < 0 || index >= SECTION_IDS.length) return;
  const section = document.getElementById(SECTION_IDS[index]);
  if (!section || !fpContainer) return;
  currentIndex = index;
  // Scroll dalam fp-container ke posisi section
  fpContainer.scrollTo({
    top: section.offsetTop,
    behavior: 'smooth'
  });
}
window.scrollToSection = scrollToSection;

// ===== UPDATE NAVBAR APPEARANCE =====
function updateNavbar(index) {
  const isLight = LIGHT_SECTIONS.includes(index);
  navbar.classList.toggle('nav-light', isLight);
  navbar.classList.toggle('nav-dark',  !isLight);

  if (!isLight) {
    // Dark mode navbar: tambah blur saat bukan section pertama
    if (index === 0) {
      navbar.classList.remove('bg-dark-900/90', 'backdrop-blur-xl', 'border-b', 'border-slate-800/50', 'shadow-xl');
    } else {
      navbar.classList.add('bg-dark-900/90', 'backdrop-blur-xl', 'border-b', 'border-slate-800/50', 'shadow-xl');
    }
  }
}

// ===== UPDATE ACTIVE NAV LINKS =====
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

  updateNavbar(index);
}

// ===== INTERSECTION OBSERVER — deteksi section aktif saat scroll =====
// Ini yang handle sinkronisasi navbar saat user scroll dengan CSS snap
const sectionObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
      const idx = SECTION_IDS.indexOf(entry.target.id);
      if (idx !== -1) {
        currentIndex = idx;
        updateActiveNav(idx);
      }
    }
  });
}, {
  root: fpContainer,
  threshold: 0.5
});

SECTION_IDS.forEach(id => {
  const el = document.getElementById(id);
  if (el) sectionObs.observe(el);
});

// ===== NAV LINK CLICKS =====
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const idx = parseInt(link.dataset.section);
    if (!isNaN(idx)) scrollToSection(idx);
  });
});

mobileNavLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const idx = parseInt(link.dataset.section);
    if (!isNaN(idx)) {
      closeMobileMenu();
      scrollToSection(idx);
    }
  });
});

// ===== HAMBURGER MENU =====
function closeMobileMenu() {
  mobileMenu.classList.add('hidden');
  hamburgerLines[0].style.transform = '';
  hamburgerLines[1].style.opacity   = '';
  hamburgerLines[2].style.transform = '';
}

hamburgerBtn.addEventListener('click', () => {
  const isOpen = !mobileMenu.classList.contains('hidden');
  if (isOpen) {
    closeMobileMenu();
  } else {
    mobileMenu.classList.remove('hidden');
    hamburgerLines[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
    hamburgerLines[1].style.opacity   = '0';
    hamburgerLines[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
  }
});

// ===== KEYBOARD NAVIGATION =====
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowDown' || e.key === 'PageDown') {
    e.preventDefault();
    scrollToSection(Math.min(currentIndex + 1, SECTION_IDS.length - 1));
  }
  if (e.key === 'ArrowUp' || e.key === 'PageUp') {
    e.preventDefault();
    scrollToSection(Math.max(currentIndex - 1, 0));
  }
});

// ===== REVEAL OBSERVER =====
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { root: fpContainer, threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

const dirObs = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { root: fpContainer, threshold: 0.15 });
document.querySelectorAll('.reveal-left, .reveal-right').forEach(el => dirObs.observe(el));

// ===== TYPING ANIMATION =====
const roles    = ['Computer Science Student', 'UI/UX Enthusiast', 'Frontend Developer'];
let   roleIdx  = 0, charIdx = 0, isDeleting = false;
const typingEl = document.getElementById('typing-text');

if (typingEl) {
  (function typeWriter() {
    const cur = roles[roleIdx];
    typingEl.textContent = isDeleting ? cur.slice(0, charIdx - 1) : cur.slice(0, charIdx + 1);
    isDeleting ? charIdx-- : charIdx++;
    let speed = isDeleting ? 60 : 100;
    if (!isDeleting && charIdx === cur.length)       { speed = 2000; isDeleting = true; }
    else if (isDeleting && charIdx === 0)             { isDeleting = false; roleIdx = (roleIdx + 1) % roles.length; speed = 400; }
    setTimeout(typeWriter, speed);
  })();
}

// ===== PROJECTS =====
const projects = [
  {
    title: 'Trendify',
    desc: 'Aplikasi web berbasis PHP untuk menampilkan konten trending dengan tampilan modern.',
    tags: ['PHP', 'Web', 'MySQL'],
    category: 'Web',
    github: 'https://github.com/kiisann/Trendify',
    color: 'from-violet-500 to-purple-400',
    year: '2026'
  },
  {
    title: 'FikiSulistiawan Portfolio',
    desc: 'Website portofolio & presensi pribadi menggunakan HTML, CSS, dan JavaScript.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    category: 'Web',
    github: 'https://github.com/kiisann/FikiSulistiawan_2417051030',
    color: 'from-accent-500 to-cyan-400',
    year: '2026'
  },
  {
    title: 'PrakTAM',
    desc: 'Aplikasi Android Praktikum Teknologi Aplikasi Mobile menggunakan Jetpack Compose.',
    tags: ['Kotlin', 'Android', 'Jetpack Compose'],
    category: 'Mobile',
    github: 'https://github.com/kiisann/PrakTAM_2417051030',
    color: 'from-green-500 to-teal-400',
    year: '2026'
  },
  {
    title: 'Digital Modulation Simulator',
    desc: 'Simulator modulasi digital (ASK, FSK, PSK) dibangun dengan Python.',
    tags: ['Python', 'Signal Processing', 'Simulation'],
    category: 'Other',
    github: 'https://github.com/kiisann/Digital-Modulation-Simulator',
    color: 'from-orange-500 to-amber-400',
    year: '2026'
  },
  {
    title: 'Kuis Pemweb',
    desc: 'Aplikasi kuis interaktif untuk mata kuliah Pemrograman Web berbasis HTML.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    category: 'Web',
    github: 'https://github.com/kiisann/Kuis_Pemweb_2417051030',
    color: 'from-pink-500 to-rose-400',
    year: '2026'
  },
  {
    title: 'RentalPS',
    desc: 'Sistem informasi rental PlayStation berbasis Java dengan manajemen transaksi.',
    tags: ['Java', 'OOP', 'Database'],
    category: 'Other',
    github: 'https://github.com/kiisann/RentalPS',
    color: 'from-sky-500 to-blue-400',
    year: '2026'
  },
  {
    title: 'Kalender',
    desc: 'Aplikasi kalender sederhana berbasis C++ dengan tampilan terminal.',
    tags: ['C++', 'Terminal', 'Algorithm'],
    category: 'Other',
    github: 'https://github.com/kiisann/Kalender',
    color: 'from-cyan-500 to-teal-400',
    year: '2026'
  },
  {
    title: 'ProjectUASDDP',
    desc: 'Project UAS mata kuliah Dasar-Dasar Pemrograman menggunakan C++.',
    tags: ['C++', 'Algorithm', 'OOP'],
    category: 'Other',
    github: 'https://github.com/kiisann/ProjectUASDDP',
    color: 'from-indigo-500 to-violet-400',
    year: '2026'
  },
  {
    title: 'july',
    desc: 'Project web dengan styling SCSS dan layout modern.',
    tags: ['SCSS', 'HTML', 'CSS'],
    category: 'Web',
    github: 'https://github.com/kiisann/july',
    color: 'from-yellow-500 to-orange-400',
    year: '2024'
  },
];
let activeFilter = 'All';


function renderProjFilters() {
  const c = document.getElementById('proj-filter-tabs');
  if (!c) return;
  c.innerHTML = '';
  ['All','Web','Mobile','Other'].forEach(cat => {
    const btn = document.createElement('button');
    btn.textContent = cat;
    btn.className = `px-5 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${
      cat === activeFilter ? 'bg-accent-500 border-accent-500 text-white shadow-lg' : 'border-slate-700/50 text-slate-400 hover:border-accent-500/50 glass'
    }`;
    btn.onclick = () => { activeFilter = cat; renderProjFilters(); renderProjGrid(); };
    c.appendChild(btn);
  });
}

function renderProjGrid() {
  const grid = document.getElementById('proj-grid');
  if (!grid) return;
  const filtered = activeFilter === 'All' ? projects : projects.filter(p => p.category === activeFilter);
  grid.innerHTML = filtered.map(p => `
    <div class="reveal glass rounded-2xl overflow-hidden border border-slate-700/30 hover:border-accent-500/40 transition-all duration-300 group hover:-translate-y-1">
      <div class="h-1 bg-gradient-to-r ${p.color}"></div>
      <div class="p-4 space-y-2">
        <div class="flex items-start justify-between gap-2">
          <div>
            <span class="text-xs font-mono text-slate-500">${p.year} · ${p.category}</span>
            <h3 class="text-sm font-bold text-slate-100 mt-0.5 group-hover:text-accent-400 transition-colors">${p.title}</h3>
          </div>
          <div class="w-7 h-7 rounded-lg bg-gradient-to-br ${p.color} flex items-center justify-center flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>
          </div>
        </div>
        <p class="text-slate-400 text-xs leading-relaxed line-clamp-2">${p.desc}</p>
        <div class="flex flex-wrap gap-1">${p.tags.map(t => `<span class="text-xs font-mono px-1.5 py-0.5 rounded bg-dark-800 text-slate-400 border border-slate-700/40">${t}</span>`).join('')}</div>
        <a href="${p.github}" target="_blank" class="flex items-center justify-center gap-1.5 py-1.5 rounded-xl border border-slate-700/50 text-xs font-medium text-slate-400 hover:border-accent-500/50 hover:text-accent-400 transition-all">
          <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/></svg>
          GitHub
        </a>
      </div>
    </div>
  `).join('');
  grid.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));
}

// ===== SKILLS =====
const skillCategories = [
  { title:'Frontend Development', color:'from-accent-500 to-cyan-400', skills:[{name:'HTML5',level:90},{name:'CSS3',level:85},{name:'JavaScript',level:78},{name:'Tailwind CSS',level:82}] },
  { title:'Design & UI/UX',       color:'from-purple-500 to-pink-400', skills:[{name:'Figma',level:80},{name:'UI Design',level:75},{name:'Wireframing',level:78}] },
  { title:'Tools & Others',       color:'from-green-500 to-teal-400',  skills:[{name:'Git & GitHub',level:80},{name:'VS Code',level:90},{name:'Responsive Design',level:85}] },
];

function renderSkills() {
  const container = document.getElementById('skills-container');
  if (!container) return;
  container.innerHTML = skillCategories.map((cat, ci) => `
    <div class="reveal" style="transition-delay:${ci * 0.08}s;">
      <div class="flex items-center gap-3 mb-3">
        <div class="w-7 h-7 rounded-lg bg-gradient-to-br ${cat.color} flex-shrink-0"></div>
        <h3 class="text-sm font-bold text-slate-100">${cat.title}</h3>
        <div class="flex-1 h-px bg-gradient-to-r from-slate-700 to-transparent"></div>
      </div>
      <div class="grid sm:grid-cols-2 gap-2.5">
        ${cat.skills.map(sk => `
          <div class="glass rounded-xl p-3 border border-slate-700/30">
            <div class="flex justify-between mb-1.5">
              <span class="text-sm font-semibold text-slate-200">${sk.name}</span>
              <span class="text-xs font-mono text-accent-400">${sk.level}%</span>
            </div>
            <div class="h-1.5 rounded-full bg-dark-800 overflow-hidden">
              <div class="skill-bar h-full rounded-full bg-gradient-to-r ${cat.color} transition-all duration-1000" data-level="${sk.level}" style="width:0%"></div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');

  const barObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { setTimeout(() => { e.target.style.width = e.target.dataset.level + '%'; }, 200); barObs.unobserve(e.target); }
    });
  }, { root: fpContainer, threshold: 0.4 });
  container.querySelectorAll('.skill-bar').forEach(b => barObs.observe(b));
  container.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));
}

// ===== CONTACT =====
const contactInfos = [
  { label:'Email',       value:'fikisulistiawan@email.com', link:'mailto:fikisulistiawan@email.com', color:'from-accent-500 to-cyan-400'   },
  { label:'Lokasi',      value:'Lampung, Indonesia',        link:'#',                                color:'from-pink-500 to-rose-400'     },
  { label:'Universitas', value:'Universitas Lampung',       link:'#',                                color:'from-purple-500 to-violet-400' },
];

function renderContactSection() {
  const c = document.getElementById('contact-info-home');
  if (c) {
    c.innerHTML = contactInfos.map((info, i) => `
      <a href="${info.link}" class="reveal glass flex items-center gap-3 p-3 rounded-xl border border-slate-700/30 hover:border-accent-500/40 transition-all group" style="transition-delay:${i*0.08}s;">
        <div class="w-8 h-8 rounded-lg bg-gradient-to-br ${info.color} flex-shrink-0"></div>
        <div>
          <p class="text-xs text-slate-500 font-mono">${info.label}</p>
          <p class="text-sm font-semibold text-slate-200 group-hover:text-accent-400 transition-colors">${info.value}</p>
        </div>
      </a>
    `).join('');
    c.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));
  }
  const sl = document.getElementById('social-links-home');
  if (sl) sl.innerHTML = `
    <a href="https://github.com/" target="_blank" class="w-9 h-9 rounded-xl glass border border-slate-700/40 hover:border-slate-400 hover:text-white flex items-center justify-center text-slate-400 transition-all hover:-translate-y-1">
      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/></svg>
    </a>
    <a href="https://linkedin.com/" target="_blank" class="w-9 h-9 rounded-xl glass border border-slate-700/40 hover:border-blue-400 hover:text-white flex items-center justify-center text-slate-400 transition-all hover:-translate-y-1">
      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
    </a>
  `;
}

function setupContactForm() {
  const form = document.getElementById('contact-form-home');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    let ok = true;
    const validate = (inputId, errId, fn) => {
      const val = document.getElementById(inputId).value.trim();
      const valid = fn(val);
      document.getElementById(errId).classList.toggle('hidden', valid);
      document.getElementById(inputId).classList.toggle('border-red-500/60', !valid);
      document.getElementById(inputId).classList.toggle('border-slate-700/50', valid);
      if (!valid) ok = false;
    };
    validate('h-name',    'h-err-name',    v => v.length > 0);
    validate('h-email',   'h-err-email',   v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v));
    validate('h-subject', 'h-err-subject', v => v.length > 0);
    validate('h-message', 'h-err-message', v => v.length > 0);
    if (!ok) return;
    document.getElementById('h-btn-text').textContent = 'Mengirim...';
    document.getElementById('h-submit').disabled = true;
    setTimeout(() => {
      form.querySelectorAll('input, textarea, button, label, p[id^="h-err"]').forEach(el => el.classList.add('hidden'));
      document.getElementById('h-success').classList.remove('hidden');
    }, 1500);
  });
}

// ===== FOOTER YEAR =====
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ===== INIT =====
renderProjFilters();
renderProjGrid();
renderSkills();
renderContactSection();
setupContactForm();
updateActiveNav(0);

// Trigger reveal home section on load
window.addEventListener('load', () => {
  document.querySelectorAll('#home .reveal').forEach((el, i) => {
    setTimeout(() => el.classList.add('visible'), 150 + i * 80);
  });
});
