/* ── SECTION: Shadows ────────────────────────────────────────────────────────
   Five elevation levels visualised as raised white boxes.
   Data source: js/data.js (DS.SHADOWS)
   ─────────────────────────────────────────────────────────────────────────── */

(function() {
  const items = window.DS.SHADOWS.map(s => `
    <div class="shadow-item">
      <div class="shadow-box" style="box-shadow:${s.css}"></div>
      <div class="shadow-name">${s.n}</div>
      <div class="shadow-use">${s.u}</div>
    </div>`).join('');

  mountSection('shadows', `
    <h2 class="sec-title">Shadows</h2>
    <p class="sec-desc">
      Five elevation levels. Match shadow depth to conceptual elevation.
      Never nest a raised surface inside a modal &mdash; use at most one shadow level per stacking context.
    </p>
    <div class="shadow-grid">${items}</div>
  `);
}());
