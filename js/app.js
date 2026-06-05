/* ── APP INIT ────────────────────────────────────────────────────────────────
   Sidebar active-link tracking. Runs after all sections are in the DOM.
   ─────────────────────────────────────────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {
  const links    = document.querySelectorAll('.sb-link');
  const sections = document.querySelectorAll('.section');

  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        links.forEach(l => l.classList.remove('active'));
        const a = document.querySelector(`.sb-link[href="#${e.target.id}"]`);
        if (a) a.classList.add('active');
      }
    });
  }, { rootMargin: '-15% 0px -75% 0px' });

  sections.forEach(s => io.observe(s));
});
