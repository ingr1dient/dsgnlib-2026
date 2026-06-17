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
  <span class="fn">background</span>: <span class="str">var(--status-danger-bg)</span>;   <span class="com">/* &rarr; danger/100 */</span>
  <span class="fn">color</span>: <span class="str">var(--status-danger-text)</span>;   <span class="com">/* &rarr; danger/500 */</span>
}</div>
  </div>

  <div class="sub">
    <div class="sub-title">Compliance Status Badge (§4.7)</div>
    <p class="muted" style="margin-bottom:16px">
      Six lifecycle statuses bound to the <code>status/*</code> tokens. The text label is
      always present &mdash; colour is never the only differentiator.
    </p>
    <div class="demo" style="gap:10px">
      <span class="status-badge st-compliant">Compliant</span>
      <span class="status-badge st-non-compliant">Non-compliant</span>
      <span class="status-badge st-pending">Pending</span>
      <span class="status-badge st-expired">Expired</span>
      <span class="status-badge st-review">Under review</span>
      <span class="status-badge st-na">N/A</span>
    </div>
    <div class="demo-code"><span class="kw">.st-compliant</span> {
  <span class="fn">background</span>: <span class="str">var(--status-compliant-bg)</span>;
  <span class="fn">color</span>: <span class="str">var(--status-compliant-text)</span>;
  <span class="fn">border-color</span>: <span class="str">var(--status-compliant-border)</span>;
}</div>
  </div>

  <div class="sub">
    <div class="sub-title">Rule</div>
    ${ruleGrid(
      'background: var(--status-danger-bg);\ncolor:      var(--status-danger-text);',
      'background: #FFE5E5;\ncolor:      #D70005;'
    )}
  </div>
`);
