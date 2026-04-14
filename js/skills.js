// ===== DATA SKILLS =====
const skillCategories = [
  {
    title: 'Teknologi',
    icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>`,
    color: 'from-accent-500 to-cyan-400',
    type: 'bar',
    skills: [
      { name: 'HTML',        level: 80 },
      { name: 'CSS',         level: 70 },
      { name: 'JavaScript',  level: 65 },
      { name: 'PHP',         level: 60 },
      { name: 'Python',      level: 90 },
      { name: 'Java',        level: 75 },
      { name: 'Kotlin',      level: 70 },
      { name: 'C++',         level: 80 },
    ],
  },
  {
    title: 'Tools',
    icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>`,
    color: 'from-green-500 to-teal-400',
    type: 'bar',
    skills: [
      { name: 'Git & GitHub',       level: 80 },
      { name: 'VS Code',            level: 90 },
      { name: 'Figma',              level: 80 },
      { name: 'Android Studio',     level: 70 },
      { name: 'MySQL',              level: 85 },
      { name: 'Canva',              level: 90 },
      { name: 'Photoshop',          level: 75 },
    ],
  },
  {
    title: 'Soft Skills',
    icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>`,
    color: 'from-purple-500 to-pink-400',
    type: 'badge',
    skills: [
      { name: 'Problem Solving',   icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>` },
      { name: 'Kerja Tim',         icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>` },
      { name: 'Komunikasi',        icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>` },
      { name: 'Manajemen Waktu',   icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>` },
      { name: 'Adaptasi',          icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>` },
      { name: 'Critical Thinking', icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>` },
      { name: 'Kreativitas',       icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M4.871 4A17.926 17.926 0 003 12c0 2.874.673 5.59 1.871 8m14.13 0a17.926 17.926 0 001.87-8c0-2.874-.673-5.59-1.87-8M9 9h1.246a1 1 0 01.961.725l1.586 5.55a1 1 0 00.961.725H15m1-7h-.08a2 2 0 00-1.519.698L9.6 15.302A2 2 0 018.08 16H8"/>` },
      { name: 'Tanggung Jawab',    icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>` },
    ],
  },
];

// ===== RENDER SKILL CATEGORIES =====
function renderSkills() {
  const container = document.getElementById('skills-container');
  container.innerHTML = skillCategories.map((cat, ci) => `
    <div class="reveal" style="transition-delay: ${ci * 0.1}s;">
      <!-- Category Header -->
      <div class="flex items-center gap-4 mb-8">
        <div class="w-11 h-11 rounded-2xl bg-gradient-to-br ${cat.color} flex items-center justify-center shadow-lg flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">${cat.icon}</svg>
        </div>
        <div>
          <h2 class="text-xl font-bold text-slate-100">${cat.title}</h2>
        </div>
        <div class="flex-1 h-px bg-gradient-to-r from-slate-700 to-transparent ml-4"></div>
      </div>

      <!-- Skill Content -->
      ${cat.type === 'badge'
        ? /* Badge / chip layout untuk Soft Skills */
        `<div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            ${cat.skills.map(skill => `
              <div class="glass rounded-2xl p-5 border border-slate-700/30 hover:border-purple-500/40
                transition-all duration-300 group hover:-translate-y-1 flex flex-col items-center gap-3 text-center">
                <div class="w-10 h-10 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
                    ${skill.icon}
                  </svg>
                </div>
                <span class="text-sm font-semibold text-slate-200 group-hover:text-purple-300 transition-colors leading-snug">${skill.name}</span>
              </div>
            `).join('')}
          </div>`
        : /* Progress bar layout untuk Teknologi & Tools */
          `<div class="grid sm:grid-cols-2 gap-5">
            ${cat.skills.map(skill => `
              <div class="glass rounded-2xl p-5 border border-slate-700/30 hover:border-slate-600/50 transition-all duration-300 group">
                <div class="flex items-center justify-between mb-3">
                  <span class="text-sm font-semibold text-slate-200 group-hover:text-accent-400 transition-colors">${skill.name}</span>
                  <span class="text-xs font-mono text-accent-400">${skill.level}%</span>
                </div>
                <div class="h-1.5 rounded-full bg-dark-800 overflow-hidden">
                  <div class="skill-bar h-full rounded-full bg-gradient-to-r ${cat.color} transition-all duration-1000 ease-out"
                    data-level="${skill.level}"
                    style="width: 0%;"></div>
                </div>
              </div>
            `).join('')}
          </div>`
      }
    </div>
  `).join('');

  // Observe reveal & skill bars
  document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));
  observeSkillBars();
}

// ===== ANIMATE SKILL BARS ON SCROLL =====
function observeSkillBars() {
  const barObs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const level = bar.dataset.level;
        setTimeout(() => { bar.style.width = level + '%'; }, 200);
        barObs.unobserve(bar);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.skill-bar').forEach(bar => barObs.observe(bar));
}

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
renderSkills();
window.addEventListener('load', () => {
  document.querySelectorAll('.reveal').forEach((el, i) => {
    setTimeout(() => el.classList.add('visible'), 200 + i * 80);
  });
});
