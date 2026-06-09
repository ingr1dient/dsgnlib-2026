/* ── SECTION: Checkbox ────────────────────────────────────────────────────────
   Unchecked, checked, indeterminate, and disabled states.
   Vertical group example for regulation selection.
   Edit this file to update checkbox documentation.
   ─────────────────────────────────────────────────────────────────────────── */

mountSection('checkbox', `
  <h2 class="sec-title">Checkbox</h2>
  <p class="sec-desc">
    Used for multi-select choices within forms.
    The checked fill resolves from <code>--action</code> &mdash;
    never hardcode a blue.
    Indeterminate state signals a partially-selected group (e.g. some children checked).
    Size: 18&times;18px &middot; Radius: 4px &middot; Border: 1.5px <code>border-default</code> &middot; Gap to label: 8px.
  </p>

  <div class="sub">
    <div class="sub-title">States</div>
    <div class="demo">
      <div class="flex gap-16 items-c" style="flex-wrap:wrap">

        <!-- Unchecked -->
        <div style="display:flex;flex-direction:column;align-items:center;gap:8px">
          <label class="ds-checkbox">
            <input type="checkbox">
            <span class="ds-checkbox-box"><span class="ds-checkbox-check">&#10003;</span></span>
            Unchecked
          </label>
          <span class="label-row">default</span>
        </div>

        <!-- Checked -->
        <div style="display:flex;flex-direction:column;align-items:center;gap:8px">
          <label class="ds-checkbox">
            <input type="checkbox" checked>
            <span class="ds-checkbox-box"><span class="ds-checkbox-check">&#10003;</span></span>
            Checked
          </label>
          <span class="label-row">checked</span>
        </div>

        <!-- Indeterminate -->
        <div style="display:flex;flex-direction:column;align-items:center;gap:8px">
          <label class="ds-checkbox indeterminate">
            <input type="checkbox">
            <span class="ds-checkbox-box"><span class="ds-checkbox-check">&ndash;</span></span>
            Mixed
          </label>
          <span class="label-row">indeterminate</span>
        </div>

        <!-- Disabled -->
        <div style="display:flex;flex-direction:column;align-items:center;gap:8px">
          <label class="ds-checkbox" style="opacity:0.5;cursor:not-allowed">
            <input type="checkbox" disabled>
            <span class="ds-checkbox-box"><span class="ds-checkbox-check">&#10003;</span></span>
            Disabled
          </label>
          <span class="label-row">disabled</span>
        </div>

        <!-- Disabled + checked -->
        <div style="display:flex;flex-direction:column;align-items:center;gap:8px">
          <label class="ds-checkbox" style="opacity:0.5;cursor:not-allowed">
            <input type="checkbox" checked disabled>
            <span class="ds-checkbox-box"><span class="ds-checkbox-check">&#10003;</span></span>
            Locked on
          </label>
          <span class="label-row">disabled checked</span>
        </div>

      </div>
    </div>
    <div class="demo-code"><span class="com">/* Box fill uses --action so it themes automatically */</span>
<span class="kw">.ds-checkbox input:checked ~ .ds-checkbox-box</span> {
  <span class="fn">background</span>: <span class="str">var(--action)</span>;
  <span class="fn">border-color</span>: <span class="str">var(--action)</span>;
}
<span class="kw">.ds-checkbox.indeterminate .ds-checkbox-box</span> {
  <span class="fn">background</span>: <span class="str">var(--action)</span>;
  <span class="fn">border-color</span>: <span class="str">var(--action)</span>;
}
<span class="kw">.ds-checkbox input:focus-visible ~ .ds-checkbox-box</span> {
  <span class="fn">outline</span>: <span class="str">2px solid var(--border-focus)</span>;
  <span class="fn">outline-offset</span>: <span class="str">2px</span>;
}
<span class="kw">.ds-checkbox input:disabled ~ .ds-checkbox-box</span> {
  <span class="fn">border-color</span>: <span class="str">var(--border-default)</span>;
  <span class="fn">background</span>: <span class="str">var(--bg-muted)</span>;
}</div>
  </div>

  <div class="sub">
    <div class="sub-title">Group — regulation selection</div>
    <div class="demo demo-col" style="gap:14px">
      <label class="ds-checkbox">
        <input type="checkbox" checked>
        <span class="ds-checkbox-box"><span class="ds-checkbox-check">&#10003;</span></span>
        EU Regulation
      </label>
      <label class="ds-checkbox">
        <input type="checkbox">
        <span class="ds-checkbox-box"><span class="ds-checkbox-check">&#10003;</span></span>
        US Regulation
      </label>
      <label class="ds-checkbox">
        <input type="checkbox">
        <span class="ds-checkbox-box"><span class="ds-checkbox-check">&#10003;</span></span>
        Asia-Pacific Regulation
      </label>
    </div>
    <p class="muted" style="margin-top:10px">
      Vertical stacking at <code>gap: space-3 (12px)</code> for list contexts.
      Pair with a group label using the <code>label</code> text style above the list.
    </p>
  </div>

  <div class="sub">
    <div class="sub-title">Rule</div>
    ${ruleGrid(
      'background: var(--action);\nborder-color: var(--action);\n/* resolves per client theme */',
      'background: #2882FF;\nborder-color: #2882FF;\n/* hardcoded — breaks theming */'
    )}
    <p class="muted" style="margin-top:12px">
      The checked state fill must reference <code>--action</code>.
      This ensures LFX gets red and QMAS gets navy without any component changes.
    </p>
  </div>
`);
