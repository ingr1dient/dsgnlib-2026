/* ── SECTION: Pagination ──────────────────────────────────────────────────────
   Page controls for long lists and tables. Always pair with a result count
   string so users know how much data exists.
   ─────────────────────────────────────────────────────────────────────────── */

mountSection('pagination', `
  <h2 class="sec-title">Pagination</h2>
  <p class="sec-desc">
    Navigation controls for multi-page data sets. Always render the
    &ldquo;Showing X&ndash;Y of Z results&rdquo; count alongside the controls &mdash;
    users should never have to guess how much data exists.
    Button: 32&times;32px &middot; Radius: 8px &middot; Gap: 4px &middot; Active: <code>--action</code> bg + <code>text-inverse</code> &middot; Font: 13px/500.
  </p>

  <div class="sub">
    <div class="sub-title">Full pagination</div>
    <div class="demo" style="flex-direction:column;gap:12px">
      <div class="ds-pag">
        <button class="ds-pag-btn disabled" disabled aria-disabled="true" aria-label="Previous page">&#8592; Prev</button>
        <button class="ds-pag-btn active" aria-current="page" aria-label="Page 1">1</button>
        <button class="ds-pag-btn" aria-label="Page 2">2</button>
        <button class="ds-pag-btn" aria-label="Page 3">3</button>
        <span class="ds-pag-ellipsis" aria-hidden="true">&hellip;</span>
        <button class="ds-pag-btn" aria-label="Page 12">12</button>
        <button class="ds-pag-btn" aria-label="Next page">Next &#8594;</button>
      </div>
      <p style="font-size:13px;color:var(--text-muted);margin:0">
        Showing 1&ndash;20 of 234 results
      </p>
    </div>
    <div class="demo-code"><span class="kw">&lt;div</span> <span class="fn">class</span>=<span class="str">"ds-pag"</span><span class="kw">&gt;</span>
  <span class="kw">&lt;button</span> <span class="fn">class</span>=<span class="str">"ds-pag-btn disabled"</span> <span class="fn">disabled</span><span class="kw">&gt;</span>&#8592; Prev<span class="kw">&lt;/button&gt;</span>
  <span class="kw">&lt;button</span> <span class="fn">class</span>=<span class="str">"ds-pag-btn active"</span> <span class="fn">aria-current</span>=<span class="str">"page"</span><span class="kw">&gt;</span>1<span class="kw">&lt;/button&gt;</span>
  <span class="kw">&lt;button</span> <span class="fn">class</span>=<span class="str">"ds-pag-btn"</span><span class="kw">&gt;</span>2<span class="kw">&lt;/button&gt;</span>
  <span class="kw">&lt;button</span> <span class="fn">class</span>=<span class="str">"ds-pag-btn"</span><span class="kw">&gt;</span>3<span class="kw">&lt;/button&gt;</span>
  <span class="kw">&lt;span</span>  <span class="fn">class</span>=<span class="str">"ds-pag-ellipsis"</span><span class="kw">&gt;</span>&hellip;<span class="kw">&lt;/span&gt;</span>
  <span class="kw">&lt;button</span> <span class="fn">class</span>=<span class="str">"ds-pag-btn"</span><span class="kw">&gt;</span>12<span class="kw">&lt;/button&gt;</span>
  <span class="kw">&lt;button</span> <span class="fn">class</span>=<span class="str">"ds-pag-btn"</span><span class="kw">&gt;</span>Next &#8594;<span class="kw">&lt;/button&gt;</span>
<span class="kw">&lt;/div&gt;</span>
<span class="kw">&lt;p</span> <span class="fn">class</span>=<span class="str">"label-row"</span><span class="kw">&gt;</span>Showing 1&ndash;20 of 234 results<span class="kw">&lt;/p&gt;</span></div>
  </div>

  <div class="sub">
    <div class="sub-title">Compact variant — Prev / Next with page indicator</div>
    <div class="demo" style="align-items:center;gap:12px">
      <div class="ds-pag">
        <button class="ds-pag-btn disabled" disabled aria-disabled="true">&#8592; Prev</button>
        <button class="ds-pag-btn" aria-label="Next page">Next &#8594;</button>
      </div>
      <span style="font-size:13px;color:var(--text-muted)">Page 1 of 12</span>
    </div>
    <p style="font-size:12px;color:var(--text-muted);margin-top:8px">
      Use the compact variant in sidebars, drawers, or narrow column contexts where
      page number buttons would overflow. Always keep the &ldquo;Page X of Y&rdquo;
      indicator so users retain positional context.
    </p>
  </div>

  <div class="sub">
    <div class="sub-title">Rule</div>
    ${ruleGrid(
      '<!-- Always show result count -->\n<div class="ds-pag">...</div>\n<p>Showing 1–20 of 234 results</p>',
      '<!-- Pagination with no count -->\n<div class="ds-pag">...</div>\n<!-- user has no idea how many records exist -->'
    )}
  </div>
`);
