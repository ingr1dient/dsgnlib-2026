/* ── SECTION: Select ──────────────────────────────────────────────────────────
   Dropdown select with closed, open, and multi-select states.
   Groups options by region; pairs with .input for inline search.
   Edit this file to update select documentation and examples.
   ─────────────────────────────────────────────────────────────────────────── */

mountSection('select', `
  <h2 class="sec-title">Select</h2>
  <p class="sec-desc">
    Custom dropdown for single and multi-select fields.
    Used throughout compliance forms for regulation and standard pickers.
    Options should be grouped by region when more than five items are present.
    Always surfaces a visible label above the trigger.
  </p>

  <div class="sub">
    <div class="sub-title">States</div>
    <div class="demo">
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:24px;align-items:start;width:100%">

        <!-- (a) Closed / placeholder -->
        <div>
          <div class="label-row" style="display:block;margin-bottom:8px">closed</div>
          <div class="ds-select">
            <div class="ds-select-trigger">
              <span class="ds-select-placeholder">Select regulation&hellip;</span>
              <span class="ds-select-arrow">&#9662;</span>
            </div>
          </div>
        </div>

        <!-- (b) Open with grouped options -->
        <div>
          <div class="label-row" style="display:block;margin-bottom:8px">open</div>
          <div class="ds-select" style="position:relative">
            <div class="ds-select-trigger open">
              <span style="color:var(--text-primary)">CE Marking</span>
              <span class="ds-select-arrow" style="transform:rotate(180deg)">&#9662;</span>
            </div>
            <div class="ds-dropdown" style="position:absolute;top:calc(100% + 4px);left:0;right:0;z-index:10">
              <div class="ds-dropdown-group">EU</div>
              <div class="ds-dropdown-item selected">CE Marking</div>
              <div class="ds-dropdown-item">EU MDR</div>
              <div class="ds-dropdown-group">US</div>
              <div class="ds-dropdown-item">FDA 510(k)</div>
            </div>
          </div>
        </div>

        <!-- (c) Multi-select with chips -->
        <div>
          <div class="label-row" style="display:block;margin-bottom:8px">multi-select</div>
          <div class="ds-select">
            <div class="ds-select-trigger" style="height:auto;min-height:40px;flex-wrap:wrap;gap:4px;padding:6px 12px">
              <span class="badge b-primary" style="display:inline-flex;align-items:center;gap:4px">
                CE Marking <span style="cursor:pointer;opacity:0.7;font-size:12px">&#10005;</span>
              </span>
              <span class="badge b-primary" style="display:inline-flex;align-items:center;gap:4px">
                FDA 510(k) <span style="cursor:pointer;opacity:0.7;font-size:12px">&#10005;</span>
              </span>
              <span class="ds-select-arrow" style="margin-left:auto">&#9662;</span>
            </div>
          </div>
        </div>

      </div>
    </div>
    <div class="demo-code"><span class="com">/* Trigger border uses the same token chain as .input */</span>
<span class="kw">.ds-select-trigger</span> {
  <span class="fn">border</span>: <span class="str">1.5px solid var(--border-default)</span>;
  <span class="fn">background</span>: <span class="str">var(--surface)</span>;
}
<span class="kw">.ds-select-trigger.open</span>,
<span class="kw">.ds-select-trigger:focus-visible</span> {
  <span class="fn">border-color</span>: <span class="str">var(--border-focus)</span>;
  <span class="fn">box-shadow</span>: <span class="str">0 0 0 3px rgba(40,130,255,0.14)</span>;
}
<span class="kw">.ds-dropdown-item.selected</span> {
  <span class="fn">background</span>: <span class="str">var(--action-subtle)</span>;
  <span class="fn">color</span>: <span class="str">var(--action)</span>;
  <span class="fn">font-weight</span>: <span class="str">500</span>;
}
<span class="kw">.ds-dropdown-item.disabled</span> {
  <span class="fn">color</span>: <span class="str">var(--text-disabled)</span>;
  <span class="fn">cursor</span>: <span class="str">not-allowed</span>;
}</div>
  </div>

  <div class="sub">
    <div class="sub-title">Search inside dropdown</div>
    <div class="demo">
      <div style="width:240px">
        <div class="ds-select" style="position:relative">
          <div class="ds-select-trigger open">
            <span class="ds-select-placeholder">Select regulation&hellip;</span>
            <span class="ds-select-arrow" style="transform:rotate(180deg)">&#9662;</span>
          </div>
          <div class="ds-dropdown" style="position:absolute;top:calc(100% + 4px);left:0;right:0;z-index:10">
            <div style="padding:6px 8px">
              <input class="input" placeholder="Search&hellip;" type="text"
                style="width:100%;height:32px;font-size:13px;padding:0 10px">
            </div>
            <div class="ds-dropdown-group">EU</div>
            <div class="ds-dropdown-item selected">CE Marking</div>
            <div class="ds-dropdown-item">EU MDR</div>
            <div class="ds-dropdown-group">US</div>
            <div class="ds-dropdown-item disabled">FDA 510(k) &mdash; not applicable</div>
          </div>
        </div>
      </div>
      <span class="muted" style="margin-left:16px;align-self:flex-start;margin-top:10px">
        Pair <code>.input</code> inside <code>.ds-dropdown</code> for inline text search.
      </span>
    </div>
  </div>

  <div class="sub">
    <div class="sub-title">Rule</div>
    ${ruleGrid(
      'border-color: var(--border-focus);\nbox-shadow: 0 0 0 3px var(--action-subtle);\n/* token-driven focus ring */',
      'border-color: #2882FF;\nbox-shadow: 0 0 0 3px rgba(40,130,255,0.14);\n/* hardcoded — breaks theming */'
    )}
    <p class="muted" style="margin-top:12px">
      Never hardcode hex values for border or focus states.
      Use semantic tokens so the select inherits client brand colours automatically.
    </p>
  </div>
`);
