/* ── SECTION: Overview ───────────────────────────────────────────────────── */

mountSection('overview', `
  <h1 class="sec-title">Base Design System</h1>
  <p class="sec-desc">
    A generic, client-agnostic foundation consolidating patterns from LFX and QMAS.
    Components always consume <strong>semantic tokens</strong> — never primitives.
    Client themes override semantic tokens only.
  </p>
  <div class="stat-grid">
    <div class="stat"><div class="stat-n">33</div><div class="stat-l">Primitive tokens</div></div>
    <div class="stat"><div class="stat-n">27</div><div class="stat-l">Semantic tokens</div></div>
    <div class="stat"><div class="stat-n">10</div><div class="stat-l">Text styles</div></div>
    <div class="stat"><div class="stat-n">5</div><div class="stat-l">Shadow levels</div></div>
  </div>
  <div class="alert-bar">
    <strong>&#9888; 6 open decisions remain</strong> &mdash;
    D2 (border radius) &middot; D4 (muted text) &middot; D5 (warning source) &middot;
    D6 (Futura scope) &middot; D7 (avatar sizes) &middot; D8 (icon library).
    See <code>DESIGN.md &sect;5</code>.
  </div>
`);
