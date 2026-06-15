/* ── SECTION: Button ─────────────────────────────────────────────────────────
   Primary, secondary, ghost variants across md/sm sizes and 3 states.
   Edit this file to update button documentation and examples.
   ─────────────────────────────────────────────────────────────────────────── */

mountSection('button', `
  <h2 class="sec-title">Button</h2>
  <p class="sec-desc">
    Three variants (primary, secondary, ghost) &times; two sizes (md 40px, sm 32px) &times; three states.
    Radius: 8px (Decision D2 resolved 2026-06-11).
    Action colour resolves from <code>--action</code> &mdash; client themes may replace the primary ramp.
  </p>

  <div class="sub">
    <div class="sub-title">Variants &amp; States</div>
    <div class="demo">
      <div style="display:grid;gap:16px;width:100%">
        <div class="flex gap-16 items-c">
          <span class="label-row">primary</span>
          <button class="btn btn-primary btn-md">Button</button>
          <button class="btn btn-primary btn-sm">Button</button>
          <button class="btn btn-primary btn-md btn-dis" disabled>Disabled</button>
        </div>
        <div class="flex gap-16 items-c">
          <span class="label-row">secondary</span>
          <button class="btn btn-secondary btn-md">Button</button>
          <button class="btn btn-secondary btn-sm">Button</button>
          <button class="btn btn-secondary btn-md btn-dis" disabled>Disabled</button>
        </div>
        <div class="flex gap-16 items-c">
          <span class="label-row">ghost</span>
          <button class="btn btn-ghost btn-md">Button &#8594;</button>
          <button class="btn btn-ghost btn-sm">Button &#8594;</button>
          <button class="btn btn-ghost btn-md" style="color:var(--text-disabled);cursor:not-allowed">Disabled</button>
        </div>
      </div>
    </div>
    <div class="demo-code"><span class="com">/* All 5 states are mandatory */</span>
<span class="kw">.btn-primary</span>              { <span class="fn">background</span>: <span class="str">var(--action)</span>; <span class="fn">color</span>: <span class="str">var(--text-inverse)</span>; }
<span class="kw">.btn-primary:hover</span>         { <span class="fn">background</span>: <span class="str">var(--action-hover)</span>; }
<span class="kw">.btn-primary:active</span>        { <span class="fn">background</span>: <span class="str">var(--action-active)</span>; }
<span class="kw">.btn-primary:disabled</span>      { <span class="fn">background</span>: <span class="str">var(--action-disabled)</span>; <span class="fn">cursor</span>: <span class="str">not-allowed</span>; }
<span class="kw">.btn-primary:focus-visible</span> { <span class="fn">outline</span>: <span class="str">2px solid var(--border-focus)</span>; <span class="fn">outline-offset</span>: <span class="str">2px</span>; }</div>
  </div>

  <div class="sub">
    <div class="sub-title">Rules</div>
    ${ruleGrid(
      'background: var(--action);\ncolor: var(--text-inverse);',
      'background: #2882FF;\ncolor: white;'
    )}
    <p class="muted" style="margin-top:12px">
      Hardcoded values break client theming.
      Updating <code>--p400</code> in a theme file should cascade to all buttons automatically.
    </p>
  </div>
`);
