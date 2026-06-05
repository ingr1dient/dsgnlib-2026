/* ── SECTION: Badge ──────────────────────────────────────────────────────────
   Compact status chips in 5 colour variants, with and without dot indicator.
   Edit this file to add/remove badge variants.
   ─────────────────────────────────────────────────────────────────────────── */

mountSection('badge', `
  <h2 class="sec-title">Badge</h2>
  <p class="sec-desc">
    Compact status chips. Always use semantic status tokens for colour &mdash;
    never hardcode badge backgrounds.
    Dot variant prepends a <code>currentColor</code> circle.
  </p>

  <div class="sub">
    <div class="sub-title">Variants</div>
    <div class="demo" style="gap:10px">
      <span class="badge b-neutral">Neutral</span>
      <span class="badge b-primary">Primary</span>
      <span class="badge b-danger">Danger</span>
      <span class="badge b-warning">Warning</span>
      <span class="badge b-success">Success</span>
      <span class="badge b-neutral b-dot">Active</span>
      <span class="badge b-danger  b-dot">Error</span>
      <span class="badge b-success b-dot">Live</span>
      <span class="badge b-primary b-dot">New</span>
    </div>
    <div class="demo-code"><span class="com">/* always map to status token groups */</span>
<span class="kw">.b-danger</span> {
  <span class="fn">background</span>: <span class="str">var(--s-danger-bg)</span>;   <span class="com">/* &rarr; danger/100 */</span>
  <span class="fn">color</span>: <span class="str">var(--s-danger-tx)</span>;   <span class="com">/* &rarr; danger/500 */</span>
}</div>
  </div>

  <div class="sub">
    <div class="sub-title">Rule</div>
    ${ruleGrid(
      'background: var(--s-danger-bg);\ncolor:      var(--s-danger-tx);',
      'background: #FFE5E5;\ncolor:      #C60207;'
    )}
  </div>
`);
