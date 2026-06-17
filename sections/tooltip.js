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
    12 placements (4 sides &times; 3 alignments) via <code>.tip-{side}-{align}</code> &middot; default <code>top-center</code> &middot; content: title / body / caption &middot; Trigger: hover + focus.
  </p>

  <div class="sub">
    <div class="sub-title">Use cases (tooltips forced visible for demo)</div>
    <div class="demo">
      <div class="flex items-c" style="padding:56px 8px 8px;gap:200px;justify-content:center;flex-wrap:wrap">

        <!-- (a) Action button tooltip -->
        <span class="ds-tooltip-wrap">
          <button class="btn btn-secondary btn-sm">View</button>
          <span class="ds-tip" style="opacity:1;pointer-events:none">Open record detail</span>
        </span>

        <!-- (b) Truncated text tooltip -->
        <span class="ds-tooltip-wrap">
          <button class="btn btn-ghost btn-sm" style="max-width:80px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">...</button>
          <span class="ds-tip" style="opacity:1;pointer-events:none">Product A &mdash; ISO 9001 Certificate 2024</span>
        </span>

        <!-- (c) Disabled icon tooltip -->
        <span class="ds-tooltip-wrap">
          <button class="btn btn-ghost btn-sm" disabled style="cursor:not-allowed;opacity:0.45">&#8659; Export</button>
          <span class="ds-tip" style="opacity:1;pointer-events:none">Export requires Viewer access</span>
        </span>

      </div>
    </div>
  </div>

  <div class="sub">
    <div class="sub-title">Title, body &amp; caption</div>
    <div class="demo" style="padding:72px 8px 16px;justify-content:center">
      <span class="ds-tooltip-wrap">
        <button class="btn btn-secondary btn-sm">Certificate</button>
        <span class="ds-tip" style="opacity:1;pointer-events:none;width:220px">
          <span class="ds-tip-title">ISO 9001:2015</span>
          <span class="ds-tip-body">Quality management certificate, valid until 2027-09-30.</span>
          <span class="ds-tip-caption">Last verified 2026-06-12</span>
        </span>
      </span>
    </div>
    <div class="demo-code"><span class="kw">&lt;span</span> <span class="fn">class</span>=<span class="str">"ds-tip"</span><span class="kw">&gt;</span>
  <span class="kw">&lt;span</span> <span class="fn">class</span>=<span class="str">"ds-tip-title"</span><span class="kw">&gt;</span>ISO 9001:2015<span class="kw">&lt;/span&gt;</span>      <span class="com">/* Roboto 600 12 / LH100 */</span>
  <span class="kw">&lt;span</span> <span class="fn">class</span>=<span class="str">"ds-tip-body"</span><span class="kw">&gt;</span>Valid until 2027-09-30<span class="kw">&lt;/span&gt;</span>  <span class="com">/* Roboto 400 12 / LH120 */</span>
  <span class="kw">&lt;span</span> <span class="fn">class</span>=<span class="str">"ds-tip-caption"</span><span class="kw">&gt;</span>Last verified&hellip;<span class="kw">&lt;/span&gt;</span>     <span class="com">/* Roboto 400 10 / LH100 */</span>
<span class="kw">&lt;/span&gt;</span></div>
  </div>

  <div class="sub">
    <div class="sub-title">Placements (12) — {side}-{align}</div>
    <div class="demo" style="display:grid;grid-template-columns:repeat(3,1fr);gap:104px 56px;padding:80px 56px">
      ${['top-left','top-center','top-right','bottom-left','bottom-center','bottom-right','left-top','left-center','left-bottom','right-top','right-center','right-bottom'].map(p => `
      <div style="display:flex;justify-content:center">
        <span class="ds-tooltip-wrap">
          <button class="btn btn-secondary btn-sm">${p}</button>
          <span class="ds-tip tip-${p}" style="opacity:1;pointer-events:none">${p}</span>
        </span>
      </div>`).join('')}
    </div>
    <div class="demo-code"><span class="com">/* .tip-{side}-{align} — default (no class) = top-center */</span>
<span class="kw">.tip-top-left</span>     <span class="kw">.tip-top-center</span>     <span class="kw">.tip-top-right</span>
<span class="kw">.tip-bottom-left</span>  <span class="kw">.tip-bottom-center</span>  <span class="kw">.tip-bottom-right</span>
<span class="kw">.tip-left-top</span>     <span class="kw">.tip-left-center</span>     <span class="kw">.tip-left-bottom</span>
<span class="kw">.tip-right-top</span>    <span class="kw">.tip-right-center</span>    <span class="kw">.tip-right-bottom</span></div>
  </div>

  <div class="sub">
    <div class="sub-title">Position note</div>
    <p style="font-size:13px;color:var(--text-secondary);line-height:1.65;max-width:640px">
      Placement is <code>.tip-{side}-{align}</code>: <strong>side</strong> = top / bottom / left / right,
      <strong>align</strong> shifts the arrow along that edge (top/bottom &rarr; left&middot;center&middot;right;
      left/right &rarr; top&middot;center&middot;bottom). Default (no class) is <strong>top-center</strong>.
      Flip to the opposite side when the trigger is near a viewport edge.
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

<span class="com">/* Placement: .tip-{side}-{align}, 12 options */</span>
<span class="kw">.ds-tip</span>                  <span class="com">/* default = top-center */</span>
<span class="kw">.ds-tip.tip-bottom-right</span> <span class="com">/* below trigger, arrow near right */</span>
<span class="kw">.ds-tip.tip-left-top</span>     <span class="com">/* left of trigger, arrow near top */</span></div>
  </div>

  <div class="sub">
    <div class="sub-title">Rule &mdash; never use the native title attribute</div>
    ${ruleGrid(
      `&lt;span class="ds-tooltip-wrap"&gt;\n  &lt;button class="btn btn-ghost btn-sm"\n          disabled&gt;\n    Export\n  &lt;/button&gt;\n  &lt;span class="ds-tip"&gt;\n    Export requires Viewer access\n  &lt;/span&gt;\n&lt;/span&gt;`,
      `&lt;button\n  class="btn btn-ghost btn-sm"\n  disabled\n  title="Export requires Viewer access"\n&gt;\n  Export\n&lt;/button&gt;\n&lt;!-- title is not keyboard accessible --&gt;&nbsp;`
    )}
  </div>
`);
