// MOBILE MENU
const burger = document.getElementById('hamburger');
const menu = document.getElementById('primary-menu');

if (burger && menu) {
  burger.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

// THEME TOGGLE
const htmlEl = document.documentElement;
const themeBtn = document.getElementById('themeToggle');
const moon = document.getElementById('moonIcon');
const sun  = document.getElementById('sunIcon');

function applyTheme(theme){
  htmlEl.setAttribute('data-theme', theme);
  if (moon && sun){
    if (theme === 'dark'){ moon.style.display='none'; sun.style.display='inline'; }
    else { sun.style.display='none'; moon.style.display='inline'; }
  }
}

// initial: localStorage -> system -> light
const saved = localStorage.getItem('theme');
if (saved){ applyTheme(saved); }
else {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(prefersDark ? 'dark' : 'light');
}

if (themeBtn){
  themeBtn.addEventListener('click', () => {
    const next = htmlEl.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem('theme', next);
    themeBtn.setAttribute('aria-pressed', next === 'dark');
  });
}
