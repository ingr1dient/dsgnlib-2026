/* ── SECTION: Colors ─────────────────────────────────────────────────────────
   Renders primitive ramp swatches and the semantic token reference table.
   Data source: js/data.js (DS.RAMPS, DS.SEM)
   ─────────────────────────────────────────────────────────────────────────── */

(function() {
  const { RAMPS, SEM } = window.DS;

  const rampsHtml = RAMPS.map(r => `
    <div class="ramp">
      <div class="ramp-label">${r.label}</div>
      <div class="swatch-row">
        ${r.tokens.map(t => `
          <div class="swatch" onclick="copy('${t.hex}')">
            <div class="chip${t.hex === '#FFFFFF' ? ' chip-white' : ''}" style="background:${t.hex}"></div>
            <div class="sw-name">${t.name}</div>
            <div class="sw-hex">${t.hex}</div>
          </div>`).join('')}
      </div>
    </div>`).join('');

  const semRows = SEM.map(row => {
    if (row.g) {
      return `<tr class="g-head"><td colspan="4">${row.g}</td></tr>`;
    }
    const whiteStyle = row.h === '#FFFFFF' ? 'border:1.5px solid #DDD' : '';
    return `<tr>
      <td>
        <span class="t-chip" style="background:${row.h};${whiteStyle}"></span>
        <span class="t-name" onclick="copy('${row.h}')">${row.n}</span>
      </td>
      <td><span class="t-alias">${row.a}</span></td>
      <td><span class="t-hex"  onclick="copy('${row.h}')">${row.h}</span></td>
      <td class="t-use">${row.u}</td>
    </tr>`;
  }).join('');

  mountSection('colors', `
    <h2 class="sec-title">Colors</h2>
    <p class="sec-desc">
      Click any swatch or token name to copy its hex value.
      Primitives are the raw palette — components only consume semantic tokens.
    </p>

    <div class="sub">
      <div class="sub-title">Primitive Ramps</div>
      ${rampsHtml}
    </div>

    <div class="sub">
      <div class="sub-title">Semantic Tokens</div>
      <div class="card-flush">
        <table class="ttable">
          <thead>
            <tr><th>Token</th><th>Alias</th><th>Value</th><th>Usage</th></tr>
          </thead>
          <tbody>${semRows}</tbody>
        </table>
      </div>
    </div>
  `);
}());
