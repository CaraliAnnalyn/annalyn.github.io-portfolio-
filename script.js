// Mobile menu: open and close the navigation on narrow screens.
const btn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');
function setMenu(open) {
  nav.classList.toggle('open', open);
  btn.setAttribute('aria-expanded', String(open));
}
btn.addEventListener('click', () => setMenu(!nav.classList.contains('open')));
nav.addEventListener('click', e => { if (e.target.tagName === 'A') setMenu(false); });
document.getElementById("year").textContent = new Date().getFullYear();
document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });
// Keep the footer year current.
document.getElementById('year').textContent = new Date().getFullYear();