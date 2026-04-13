// ===== DATA SKILLS =====
const skillCategories = [
  {
    title: 'Frontend Development',
    icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>`,
    color: 'from-accent-500 to-cyan-400',
    skills: [
      { name: 'HTML5', level: 90 },
      { name: 'CSS3', level: 85 },
      { name: 'JavaScript', level: 78 },
      { name: 'Tailwind CSS', level: 82 },
      { name: 'Bootstrap', level: 75 },
    ],
  },
  {
    title: 'Design & UI/UX',
    icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"/>`,
    color: 'from-purple-500 to-pink-400',
    skills: [
      { name: 'Figma', level: 80 },
      { name: 'UI Design', level: 75 },
      { name: 'Wireframing', level: 78 },
      { name: 'Prototyping', level: 72 },
    ],
  },
  {
    title: 'Tools & Others',
    icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>`,
    color: 'from-green-500 to-teal-400',
    skills: [
      { name: 'Git & GitHub', level: 80 },
      { name: 'VS Code', level: 90 },
      { name: 'Responsive Design', level: 85 },
      { name: 'DOM Manipulation', level: 78 },
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

      <!-- Skill Bars -->
      <div class="grid sm:grid-cols-2 gap-5">
        ${cat.skills.map((skill, si) => `
          <div class="glass rounded-2xl p-5 border border-slate-700/30 hover:border-slate-600/50 transition-all duration-300 group">
            <div class="flex items-center justify-between mb-3">
              <span class="text-sm font-semibold text-slate-200 group-hover:text-accent-400 transition-colors">${skill.name}</span>
              <span class="text-xs font-mono text-accent-400">${skill.level}%</span>
            </div>
            <!-- Progress bar track -->
            <div class="h-1.5 rounded-full bg-dark-800 overflow-hidden">
              <div class="skill-bar h-full rounded-full bg-gradient-to-r ${cat.color} transition-all duration-1000 ease-out"
                data-level="${skill.level}"
                style="width: 0%;"></div>
            </div>
          </div>
        `).join('')}
      </div>
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
