/* ── SECTION: Radio ───────────────────────────────────────────────────────────
   Single-select from a group of mutually exclusive options.
   Unchecked, checked, and disabled states.
   Compliance level group demo.
   Edit this file to update radio documentation.
   ─────────────────────────────────────────────────────────────────────────── */

mountSection('radio', `
  <h2 class="sec-title">Radio</h2>
  <p class="sec-desc">
    Mutually exclusive single-select within a group.
    Use when the user must choose exactly one option and all choices should be visible at once.
    For long lists (&gt;&thinsp;6 items) prefer a <a href="#select">Select</a> dropdown instead.
    Selected dot fill resolves from <code>--action</code>.
    Size: 18&times;18px circle &middot; Inner dot: 8px &middot; Border: 1.5px <code>border-default</code> &middot; Gap to label: 8px.
  </p>

  <div class="sub">
    <div class="sub-title">States</div>
    <div class="demo">
      <div class="flex gap-16 items-c" style="flex-wrap:wrap">

        <!-- Unchecked -->
        <div style="display:flex;flex-direction:column;align-items:center;gap:8px">
          <label class="ds-radio">
            <input type="radio" name="radio-demo">
            <span class="ds-radio-dot"><span class="ds-radio-inner"></span></span>
            Option
          </label>
          <span class="label-row">unchecked</span>
        </div>

        <!-- Checked -->
        <div style="display:flex;flex-direction:column;align-items:center;gap:8px">
          <label class="ds-radio">
            <input type="radio" name="radio-demo" checked>
            <span class="ds-radio-dot"><span class="ds-radio-inner"></span></span>
            Selected
          </label>
          <span class="label-row">checked</span>
        </div>

        <!-- Disabled unchecked -->
        <div style="display:flex;flex-direction:column;align-items:center;gap:8px">
          <label class="ds-radio" style="opacity:0.5;cursor:not-allowed">
            <input type="radio" name="radio-demo-dis" disabled>
            <span class="ds-radio-dot"><span class="ds-radio-inner"></span></span>
            Unavailable
          </label>
          <span class="label-row">disabled</span>
        </div>

        <!-- Disabled checked -->
        <div style="display:flex;flex-direction:column;align-items:center;gap:8px">
          <label class="ds-radio" style="opacity:0.5;cursor:not-allowed">
            <input type="radio" name="radio-demo-dis2" checked disabled>
            <span class="ds-radio-dot"><span class="ds-radio-inner"></span></span>
            Locked
          </label>
          <span class="label-row">disabled checked</span>
        </div>

      </div>
    </div>
    <div class="demo-code"><span class="com">/* Dot fill inherits action token */</span>
<span class="kw">.ds-radio input:checked ~ .ds-radio-dot</span> {
  <span class="fn">border-color</span>: <span class="str">var(--action)</span>;
}
<span class="kw">.ds-radio input:checked ~ .ds-radio-dot .ds-radio-inner</span> {
  <span class="fn">background</span>: <span class="str">var(--action)</span>;
  <span class="fn">transform</span>: <span class="str">scale(1)</span>;
}
<span class="kw">.ds-radio input:focus-visible ~ .ds-radio-dot</span> {
  <span class="fn">outline</span>: <span class="str">2px solid var(--border-focus)</span>;
  <span class="fn">outline-offset</span>: <span class="str">2px</span>;
}
<span class="kw">.ds-radio input:disabled ~ .ds-radio-dot</span> {
  <span class="fn">border-color</span>: <span class="str">var(--border-default)</span>;
  <span class="fn">background</span>: <span class="str">var(--bg-muted)</span>;
}</div>
  </div>

  <div class="sub">
    <div class="sub-title">Group — Compliance level</div>
    <div class="demo demo-col" style="gap:14px">
      <div style="font:500 13px/1 var(--font-ui);color:var(--text-secondary);margin-bottom:4px">
        Compliance level *
      </div>
      <label class="ds-radio">
        <input type="radio" name="compliance-level" checked>
        <span class="ds-radio-dot"><span class="ds-radio-inner"></span></span>
        <span>
          Full
          <span class="muted" style="display:block;font-size:12px;margin-top:2px">
            All applicable requirements met
          </span>
        </span>
      </label>
      <label class="ds-radio">
        <input type="radio" name="compliance-level">
        <span class="ds-radio-dot"><span class="ds-radio-inner"></span></span>
        <span>
          Partial
          <span class="muted" style="display:block;font-size:12px;margin-top:2px">
            Some requirements outstanding
          </span>
        </span>
      </label>
      <label class="ds-radio">
        <input type="radio" name="compliance-level">
        <span class="ds-radio-dot"><span class="ds-radio-inner"></span></span>
        <span>
          Exempt
          <span class="muted" style="display:block;font-size:12px;margin-top:2px">
            Regulation does not apply to this product
          </span>
        </span>
      </label>
    </div>
    <p class="muted" style="margin-top:10px">
      Vertical stacking at <code>gap: space-3 (12px)</code>.
      Sub-labels use <code>body-sm</code> (12px) in <code>text-muted</code>.
      Always include the group label and mark required fields with <code>*</code>.
    </p>
  </div>

  <div class="sub">
    <div class="sub-title">Rule</div>
    ${ruleGrid(
      '&lt;label class="ds-radio"&gt;\n  &lt;input type="radio" name="group"&gt;\n  &lt;span class="ds-radio-dot"&gt;…&lt;/span&gt;\n  Label text\n&lt;/label&gt;\n/* label wraps input — full click target */',
      '&lt;input type="radio" id="r1"&gt;\n&lt;label for="r1"&gt;Label&lt;/label&gt;\n\n/* separate elements reduce click target\n   and complicate focus styling */'
    )}
    <p class="muted" style="margin-top:12px">
      The <code>label</code> element must wrap the input to guarantee the full row is clickable.
      Never use a bare <code>input</code> without a paired label — this fails WCAG 1.3.1.
    </p>
  </div>
`);
