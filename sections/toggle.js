/* ── SECTION: Toggle ──────────────────────────────────────────────────────────
   Boolean on/off switch. Standard and small size variants.
   For user preferences and feature flags — not compliance status.
   Edit this file to update toggle documentation.
   ─────────────────────────────────────────────────────────────────────────── */

mountSection('toggle', `
  <h2 class="sec-title">Toggle</h2>
  <p class="sec-desc">
    Binary on/off control for settings and feature flags.
    Immediately applies the change on interaction &mdash; no submit step required.
    The track fill resolves from <code>--action</code>.
    <strong>Do not</strong> use toggles to indicate compliance status;
    use the <a href="#badge">Badge</a> component for that purpose.
    Track: 40&times;24px (md) &middot; 32&times;20px (sm) &middot; Off: <code>border-default</code> &middot; On: <code>--action</code> &middot; Thumb: 18px (md) / 14px (sm).
  </p>

  <div class="sub">
    <div class="sub-title">States &amp; sizes</div>
    <div class="demo">
      <div style="display:grid;gap:16px;width:100%">

        <div class="flex gap-16 items-c">
          <span class="label-row">off</span>
          <label class="ds-toggle">
            <input type="checkbox">
            <span class="ds-toggle-track"><span class="ds-toggle-thumb"></span></span>
          </label>
          <span class="muted">default &mdash; track: <code>bg-emphasis</code></span>
        </div>

        <div class="flex gap-16 items-c">
          <span class="label-row">on</span>
          <label class="ds-toggle">
            <input type="checkbox" checked>
            <span class="ds-toggle-track"><span class="ds-toggle-thumb"></span></span>
          </label>
          <span class="muted">checked &mdash; track: <code>--action</code></span>
        </div>

        <div class="flex gap-16 items-c">
          <span class="label-row">sm off</span>
          <label class="ds-toggle ds-toggle-sm">
            <input type="checkbox">
            <span class="ds-toggle-track"><span class="ds-toggle-thumb"></span></span>
          </label>
          <span class="muted">small variant &mdash; compact toolbars / dense lists</span>
        </div>

        <div class="flex gap-16 items-c">
          <span class="label-row">sm on</span>
          <label class="ds-toggle ds-toggle-sm">
            <input type="checkbox" checked>
            <span class="ds-toggle-track"><span class="ds-toggle-thumb"></span></span>
          </label>
        </div>

        <div class="flex gap-16 items-c">
          <span class="label-row">disabled</span>
          <label class="ds-toggle" style="opacity:0.5;cursor:not-allowed">
            <input type="checkbox" disabled>
            <span class="ds-toggle-track"><span class="ds-toggle-thumb"></span></span>
          </label>
          <span class="muted">opacity 50% + <code>cursor: not-allowed</code></span>
        </div>

      </div>
    </div>
    <div class="demo-code"><span class="com">/* Track colour flips on checked */</span>
<span class="kw">.ds-toggle-track</span> {
  <span class="fn">background</span>: <span class="str">var(--bg-emphasis)</span>;    <span class="com">/* off */</span>
  <span class="fn">transition</span>: <span class="str">background 150ms ease</span>;
}
<span class="kw">.ds-toggle input:checked ~ .ds-toggle-track</span> {
  <span class="fn">background</span>: <span class="str">var(--action)</span>;          <span class="com">/* on — themes automatically */</span>
}
<span class="kw">.ds-toggle input:focus-visible ~ .ds-toggle-track</span> {
  <span class="fn">outline</span>: <span class="str">2px solid var(--border-focus)</span>;
  <span class="fn">outline-offset</span>: <span class="str">2px</span>;
}
<span class="kw">.ds-toggle-sm .ds-toggle-track</span> { <span class="fn">width</span>: <span class="str">28px</span>; <span class="fn">height</span>: <span class="str">16px</span>; }
<span class="kw">.ds-toggle-sm .ds-toggle-thumb</span> { <span class="fn">width</span>: <span class="str">12px</span>; <span class="fn">height</span>: <span class="str">12px</span>; }</div>
  </div>

  <div class="sub">
    <div class="sub-title">With labels — notification preferences</div>
    <div class="demo demo-col" style="gap:16px">

      <div class="flex gap-16 items-c" style="justify-content:space-between;max-width:360px">
        <span style="font:400 14px/1.4 var(--font-ui);color:var(--text-primary)">
          Email notifications
        </span>
        <label class="ds-toggle">
          <input type="checkbox" checked>
          <span class="ds-toggle-track"><span class="ds-toggle-thumb"></span></span>
        </label>
      </div>

      <div class="flex gap-16 items-c" style="justify-content:space-between;max-width:360px">
        <span style="font:400 14px/1.4 var(--font-ui);color:var(--text-primary)">
          Auto-renewal alerts
        </span>
        <label class="ds-toggle">
          <input type="checkbox">
          <span class="ds-toggle-track"><span class="ds-toggle-thumb"></span></span>
        </label>
      </div>

      <div class="flex gap-16 items-c" style="justify-content:space-between;max-width:360px;opacity:0.5">
        <span style="font:400 14px/1.4 var(--font-ui);color:var(--text-primary)">
          Dark mode
          <span class="badge b-neutral" style="margin-left:6px;vertical-align:middle">coming soon</span>
        </span>
        <label class="ds-toggle" style="cursor:not-allowed">
          <input type="checkbox" disabled>
          <span class="ds-toggle-track"><span class="ds-toggle-thumb"></span></span>
        </label>
      </div>

    </div>
    <p class="muted" style="margin-top:10px">
      Place the label to the left and the toggle to the right in preference lists.
      Use <code>justify-content: space-between</code> so labels align regardless of length.
    </p>
  </div>

  <div class="sub">
    <div class="sub-title">Use case</div>
    ${ruleGrid(
      '&lt;!-- User preferences, feature flags --&gt;\n&lt;label class="ds-toggle"&gt;\n  &lt;input type="checkbox" checked&gt;\n  &lt;span class="ds-toggle-track"&gt;\n    &lt;span class="ds-toggle-thumb"&gt;&lt;/span&gt;\n  &lt;/span&gt;\n&lt;/label&gt;\nEmail notifications',
      '&lt;!-- Compliance status — use Badge instead --&gt;\n&lt;label class="ds-toggle"&gt;\n  &lt;input type="checkbox" checked&gt;\n  &lt;span class="ds-toggle-track"&gt;…&lt;/span&gt;\n&lt;/label&gt;\nCompliant\n\n/* toggle implies reversibility —\n   compliance is not a preference */'
    )}
    <p class="muted" style="margin-top:12px">
      Toggles communicate reversible, user-controlled settings.
      Compliance status is a calculated system state &mdash;
      represent it with a <a href="#badge">Badge</a> or <a href="#alert">Alert</a>,
      never a toggle.
    </p>
  </div>
`);
