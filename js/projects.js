// ===== DATA PROYEK (GitHub: kiisann) =====
const projects = [
  { id:1, title:'Trendify',                    desc:'Aplikasi web berbasis PHP untuk menampilkan konten trending dengan tampilan modern.',                        tags:['PHP','Web','MySQL'],               category:'Web',    github:'https://github.com/kiisann/Trendify',                  live:'https://github.com/kiisann/Trendify',                  year:'2026', color:'from-violet-500 to-purple-400' },
  { id:2, title:'ToDoList',                     desc:'Aplikasi Android Praktikum Mata Kuliah Teknologi Aplikasi Mobile menggunakan Jetpack Compose.',                         tags:['Kotlin','Android','Jetpack Compose'], category:'Mobile', github:'https://github.com/kiisann/PrakTAM_2417051030',        live:'https://github.com/kiisann/PrakTAM_2417051030',        year:'2026', color:'from-green-500 to-teal-400'    },
  { id:3, title:'Digital Modulation Simulator', desc:'Simulator modulasi digital (ASK, FSK, PSK) dibangun dengan Python untuk keperluan akademik.',               tags:['Python','Signal','Simulation'], category:'Other',  github:'https://github.com/kiisann/Digital-Modulation-Simulator', live:'https://github.com/kiisann/Digital-Modulation-Simulator', year:'2026', color:'from-orange-500 to-amber-400'  },
  { id:4, title:'RentalPS',                    desc:'Sistem informasi rental PlayStation berbasis Java dengan manajemen transaksi dan antarmuka sederhana.',      tags:['Java','OOP','Database'],           category:'Other',  github:'https://github.com/kiisann/RentalPS',                  live:'https://github.com/kiisann/RentalPS',                  year:'2026', color:'from-sky-500 to-blue-400'      },
  { id:5, title:'Kalender',                    desc:'Aplikasi kalender sederhana berbasis C++ dengan tampilan terminal yang menampilkan tanggal dan bulan.',      tags:['C++','Terminal','Algorithm'],      category:'Other',  github:'https://github.com/kiisann/Kalender',                  live:'https://github.com/kiisann/Kalender',                  year:'2026', color:'from-cyan-500 to-teal-400'     },
  { id:6, title:'CLI Car Game',               desc:'Project UAS mata kuliah Dasar-Dasar Pemrograman menggunakan C++ dengan fitur manajemen data sederhana.',      tags:['C++','Algorithm','OOP'],           category:'Other',  github:'https://github.com/kiisann/ProjectUASDDP',             live:'https://github.com/kiisann/ProjectUASDDP',             year:'2026', color:'from-indigo-500 to-violet-400'  },
  { id:7, title:'Birthday',                        desc:'Project web styling modern menggunakan HTML, CSS, JavaScript dengan layout yang bersih dan responsif.',  tags:['HTML','CSS','JavaScript'],               category:'Web',    github:'https://github.com/kiisann/happy-birthday.git',                      live:'https://github.com/kiisann/happy-birthday.git',                      year:'2024', color:'from-yellow-500 to-orange-400' },
  { id:8, title:'Optimalisasi Investasi Saham', desc:'Project Optimalisasi Investasi Saham Harian Berdasarkan Tingkat ROI Harian dan Volatilitas',                tags:['C++', 'ROI', 'Volatilitas'], category:'Other', github:'https://github.com/kiisann/UAPERTUK.git', live:'https://github.com/kiisann/UAPERTUK.git', year:'2026', color:'from-green-500 to-teal-400'}
];

const categories = ['All', 'Web', 'Mobile', 'Other'];
let activeCategory = 'All';


// ===== RENDER FILTER TABS =====
function renderFilters() {
  const container = document.getElementById('filter-tabs');
  container.innerHTML = categories.map(cat => `
    <button
      id="filter-${cat}"
      onclick="filterProjects('${cat}')"
      class="filter-btn px-5 py-2 rounded-full text-sm font-medium border transition-all duration-300
        ${cat === activeCategory
          ? 'bg-accent-500 border-accent-500 text-white shadow-lg shadow-accent-500/25'
          : 'border-slate-700/50 text-slate-400 hover:border-accent-500/50 hover:text-slate-200 glass'
        }"
    >${cat}</button>
  `).join('');
}

// ===== FILTER PROJECTS =====
function filterProjects(cat) {
  activeCategory = cat;
  renderFilters();
  renderProjects();
}

// ===== RENDER PROJECT CARDS =====
function renderProjects() {
  const grid = document.getElementById('projects-grid');
  const noMsg = document.getElementById('no-projects');
  const filtered = activeCategory === 'All' ? projects : projects.filter(p => p.category === activeCategory);

  if (filtered.length === 0) {
    grid.innerHTML = '';
    noMsg.classList.remove('hidden');
    return;
  }
  noMsg.classList.add('hidden');

  grid.innerHTML = filtered.map(p => `
    <div class="reveal glass rounded-2xl overflow-hidden border border-slate-700/30 hover:border-accent-500/40 transition-all duration-300 group hover:-translate-y-1">
      <!-- Card header dengan gradient warna -->
      <div class="h-2 bg-gradient-to-r ${p.color}"></div>

      <div class="p-6 space-y-4">
        <!-- Header -->
        <div class="flex items-start justify-between gap-3">
          <div>
            <span class="text-xs font-mono text-slate-500">${p.year} · ${p.category}</span>
            <h3 class="text-base font-bold text-slate-100 mt-0.5 group-hover:text-accent-400 transition-colors">${p.title}</h3>
          </div>
          <div class="w-9 h-9 rounded-xl bg-gradient-to-br ${p.color} flex items-center justify-center flex-shrink-0 shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
            </svg>
          </div>
        </div>

        <!-- Description -->
        <p class="text-slate-400 text-sm leading-relaxed line-clamp-3">${p.desc}</p>

        <!-- Tags -->
        <div class="flex flex-wrap gap-2">
          ${p.tags.map(t => `<span class="text-xs font-mono px-2.5 py-1 rounded-lg bg-dark-800 text-slate-400 border border-slate-700/40">${t}</span>`).join('')}
        </div>

        <!-- Actions -->
        <div class="flex gap-3 pt-1">
          <a href="${p.github}" target="_blank"
            class="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border border-slate-700/50 text-xs font-medium text-slate-400 hover:border-accent-500/50 hover:text-accent-400 transition-all duration-300">
            <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            GitHub
          </a>
          <a href="${p.live}" target="_blank"
            class="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r ${p.color} text-xs font-semibold text-white shadow-lg hover:opacity-90 transition-opacity">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
            </svg>
            Live Demo
          </a>
        </div>
      </div>
    </div>
  `).join('');

  // Trigger reveal animation
  document.querySelectorAll('.reveal').forEach(el => {
    if (!el.classList.contains('visible')) revealObs.observe(el);
  });
}

// ===== SCROLL REVEAL =====
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

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
renderFilters();
renderProjects();
