/* ── SECTION: Spacing & Grid ─────────────────────────────────────────────────
   Visual scale bars, named semantic aliases, layout grid, breakpoints.
   Data source: js/data.js (DS.SPACING, DS.SPACING_NAMED)
   ─────────────────────────────────────────────────────────────────────────── */

(function() {
  const { SPACING, SPACING_NAMED } = window.DS;

  const scaleHtml = SPACING.map(s => `
    <div class="sp-row">
      <span class="sp-name">${s.n}</span>
      <span class="sp-px">${s.px}px</span>
      <div class="sp-bar-track">
        <div class="sp-bar" style="width:${Math.min(s.px * 2, 420)}px"></div>
      </div>
    </div>`).join('');

  const namedHtml = SPACING_NAMED.map(s => `
    <div class="named-row">
      <span style="font-family:'Roboto Mono',monospace;color:#0F65DC">${s.n}</span>
      <span style="color:#8E8E8E">${s.v}</span>
      <span style="color:#636363">${s.u}</span>
    </div>`).join('');

  const gridRows = [
    ['Columns',           '12'],
    ['Max content width', '1280px'],
    ['Column gutter',     '16px (mobile) &rarr; 24px (md+)'],
    ['Outer margin',      '16px (mobile) &rarr; 32px (lg+)'],
    ['Common spans',      '12 full &middot; 8 two-thirds &middot; 6 half &middot; 4 third &middot; 3 quarter'],
  ].map(([l, v]) => `
    <div style="display:grid;grid-template-columns:180px 1fr;gap:8px;padding:7px 0;border-bottom:1px solid var(--border-divider);font-size:13px">
      <span style="font-weight:600;color:var(--text-secondary)">${l}</span>
      <span style="color:var(--text-primary)">${v}</span>
    </div>`).join('');

  const bpRows = [
    {n:'sm', px:640},{n:'md', px:768},{n:'lg', px:1024},{n:'xl', px:1280},{n:'2xl', px:1536},
  ].map(b => `
    <div class="sp-row">
      <span class="sp-name">${b.n}</span>
      <span class="sp-px">${b.px}px</span>
      <div class="sp-bar-track">
        <div class="sp-bar" style="width:${Math.round(b.px / 4)}px;opacity:0.25"></div>
      </div>
    </div>`).join('');

  mountSection('spacing', `
    <h2 class="sec-title">Spacing &amp; Grid</h2>
    <p class="sec-desc">
      4px base unit. All values are multiples of 4.
      Use named semantic aliases in component code &mdash; not raw <code>space-N</code> values.
    </p>
    <div class="card">
      <div class="sub-title" style="margin-bottom:16px">Spacing Scale</div>
      ${scaleHtml}
      <div class="divider"></div>
      <div class="sub-title" style="margin-bottom:12px">Named Semantic Spacing</div>
      <div style="display:grid;grid-template-columns:110px 130px 1fr;border-top:1px solid var(--border-divider)">
        <div style="padding:6px 0;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.07em;color:var(--text-muted)">Token</div>
        <div style="padding:6px 0;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.07em;color:var(--text-muted)">Value</div>
        <div style="padding:6px 0;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.07em;color:var(--text-muted)">Use</div>
      </div>
      ${namedHtml}
      <div class="divider"></div>
      <div class="sub-title" style="margin-bottom:12px">Layout Grid</div>
      ${gridRows}
      <div class="divider"></div>
      <div class="sub-title" style="margin-bottom:12px">Breakpoints</div>
      ${bpRows}
    </div>
  `);
}());
