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
    <strong>&#10003; All design decisions resolved (2026-06-11)</strong> &mdash;
    D1 action colour stays abstract (client-mapped) &middot; D2 radius 8px &middot;
    D3 page bg #FAFAFA &middot; D4 muted #8E8E8E &middot; D5 amber warning ramp &middot;
    D6 Futura dropped from base &middot; D7 avatars 24/32/40 &middot;
    D8 custom icon set &middot; D9 text-disabled #999999.
    Rationale in <code>DESIGN.md &sect;5</code>.
  </div>
`);
