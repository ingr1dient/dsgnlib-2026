/* ── SECTION: Typography ─────────────────────────────────────────────────────
   Live specimens for every text style with specs.
   Data source: js/data.js (DS.TYPES)
   ─────────────────────────────────────────────────────────────────────────── */

(function() {
  const rows = window.DS.TYPES.map(t => `
    <div class="type-row">
      <div>
        <div class="type-tok">${t.tok}</div>
        <div class="type-spec">${t.spec}</div>
      </div>
      <div style="${t.st};color:#1A1A1A">${t.samp}</div>
    </div>`).join('');

  mountSection('typography', `
    <h2 class="sec-title">Typography</h2>
    <p class="sec-desc">
      All UI text: <code>Roboto</code> (font-ui).
      Code and technical values: <code>Roboto Mono</code>.
      Futura is editorial-doc only &mdash; see Decision D6.
    </p>
    <div class="card-flush">
      <div style="padding:0 24px">${rows}</div>
    </div>
  `);
}());
