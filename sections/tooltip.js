/* ── SECTION: Tooltip ─────────────────────────────────────────────────────────
   Contextual labels that appear on hover/focus. Always use .ds-tip — never
   the native title attribute, which cannot be styled or made accessible.
   ─────────────────────────────────────────────────────────────────────────── */

mountSection('tooltip', `
  <h2 class="sec-title">Tooltip</h2>
  <p class="sec-desc">
    Contextual labels surfaced on hover or keyboard focus. Use tooltips for
    icon-only buttons, truncated text, and disabled controls that need
    explanation. Never use the native <code>title</code> attribute &mdash; it
    cannot be styled, has no keyboard support, and fails WCAG 1.4.13.
    Default position: top &middot; 4 positions via <code>.tip-bottom / .tip-left / .tip-right</code> &middot; Trigger: hover + focus &middot; Offset: 6px from trigger.
  </p>

  <div class="sub">
    <div class="sub-title">Variants (tooltips forced visible for demo)</div>
    <div class="demo">
      <div class="flex gap-16 items-c" style="padding-top:48px">

        <!-- (a) Action button tooltip -->
        <span class="ds-tooltip-wrap">
          <button class="btn btn-secondary btn-sm">View</button>
          <span class="ds-tip" style="opacity:1;pointer-events:none">Open record detail</span>
        </span>

        <!-- (b) Truncated text tooltip -->
        <span class="ds-tooltip-wrap">
          <button class="btn btn-ghost btn-sm" style="max-width:80px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">...</button>
          <span class="ds-tip" style="opacity:1;pointer-events:none;white-space:nowrap">Product A &mdash; ISO 9001 Certificate 2024</span>
        </span>

        <!-- (c) Disabled icon tooltip -->
        <span class="ds-tooltip-wrap">
          <button class="btn btn-ghost btn-sm" disabled style="cursor:not-allowed;opacity:0.45">&#8659; Export</button>
          <span class="ds-tip" style="opacity:1;pointer-events:none;white-space:nowrap">Export requires Viewer access</span>
        </span>

      </div>
    </div>
  </div>

  <div class="sub">
    <div class="sub-title">Position note</div>
    <p class="label-row" style="font-size:13px;color:var(--text-secondary)">
      Default position is <strong>top</strong> (tooltip above the trigger via <code>bottom: calc(100% + 6px)</code>).
      For bottom: swap to <code>top: calc(100% + 6px)</code>; for left/right: use
      <code>right: calc(100% + 6px)</code> / <code>left: calc(100% + 6px)</code> and adjust the
      <code>::after</code> arrow direction accordingly.
    </p>
  </div>

  <div class="sub">
    <div class="sub-title">Code</div>
    <div class="demo-code"><span class="com">&lt;!-- Wrap trigger + tooltip together --&gt;</span>
&lt;<span class="kw">span</span> <span class="fn">class</span>=<span class="str">"ds-tooltip-wrap"</span>&gt;
  &lt;<span class="kw">button</span> <span class="fn">class</span>=<span class="str">"btn btn-secondary btn-sm"</span>&gt;View&lt;/<span class="kw">button</span>&gt;
  &lt;<span class="kw">span</span> <span class="fn">class</span>=<span class="str">"ds-tip"</span>&gt;Open record detail&lt;/<span class="kw">span</span>&gt;
&lt;/<span class="kw">span</span>&gt;

<span class="com">&lt;!-- Tooltip is shown on hover via CSS opacity transition --&gt;
&lt;!-- For disabled triggers, keep pointer-events on the wrapper, not the button --&gt;</span>

<span class="com">/* Positions */</span>
<span class="kw">.ds-tip</span>              <span class="com">/* top (default) — bottom: calc(100% + 6px) */</span>
<span class="kw">.ds-tip.tip-bottom</span>   <span class="com">/* top: calc(100% + 6px); arrow points up */</span>
<span class="kw">.ds-tip.tip-left</span>     <span class="com">/* right: calc(100% + 6px); arrow points right */</span>
<span class="kw">.ds-tip.tip-right</span>    <span class="com">/* left: calc(100% + 6px); arrow points left */</span></div>
  </div>

  <div class="sub">
    <div class="sub-title">Rule &mdash; never use the native title attribute</div>
    ${ruleGrid(
      `&lt;span class="ds-tooltip-wrap"&gt;\n  &lt;button class="btn btn-ghost btn-sm"\n          disabled&gt;\n    Export\n  &lt;/button&gt;\n  &lt;span class="ds-tip"&gt;\n    Export requires Viewer access\n  &lt;/span&gt;\n&lt;/span&gt;`,
      `&lt;button\n  class="btn btn-ghost btn-sm"\n  disabled\n  title="Export requires Viewer access"\n&gt;\n  Export\n&lt;/button&gt;\n&lt;!-- title is not keyboard accessible --&gt;&nbsp;`
    )}
  </div>
`);
