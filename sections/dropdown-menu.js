/* ── SECTION: Dropdown Menu ───────────────────────────────────────────────────
   Contextual action menus. Destructive actions must always appear last,
   separated from safe actions by a divider.
   ─────────────────────────────────────────────────────────────────────────── */

mountSection('dropdown-menu', `
  <h2 class="sec-title">Dropdown Menu</h2>
  <p class="sec-desc">
    Contextual menus surface actions relevant to a specific row, item, or selection.
    Destructive actions are always placed last and separated from safe actions by a
    <code>.ds-menu-divider</code> &mdash; never intermixed with non-destructive items.
    Item height: 40px &middot; Padding: 8/16px &middot; Min-width: 180px &middot; Radius: 8px &middot; Shadow: <code>shadow-md</code>.
  </p>

  <div class="sub">
    <div class="sub-title">Two menu examples side by side</div>
    <div class="demo" style="gap:32px;align-items:flex-start;flex-wrap:wrap">

      <div style="flex:1;min-width:180px">
        <p class="label-row" style="margin-bottom:8px">Row actions</p>
        <div class="ds-menu">
          <div class="ds-menu-item">
            <span>&#128065;</span> View details
          </div>
          <div class="ds-menu-item">
            <span>&#9998;&#65039;</span> Edit
          </div>
          <div class="ds-menu-divider"></div>
          <div class="ds-menu-item">
            <span>&#128228;</span> Export PDF
          </div>
          <div class="ds-menu-divider"></div>
          <div class="ds-menu-item destructive">
            <span>&#128465;</span> Delete record
          </div>
        </div>
      </div>

      <div style="flex:1;min-width:200px">
        <p class="label-row" style="margin-bottom:8px">Bulk actions</p>
        <div class="ds-menu">
          <div class="ds-menu-label">Selection (3 items)</div>
          <div class="ds-menu-item">
            <span>&#128228;</span> Export selected
          </div>
          <div class="ds-menu-item">
            <span>&#10003;</span> Mark as reviewed
          </div>
          <div class="ds-menu-divider"></div>
          <div class="ds-menu-item destructive">
            <span>&#128465;</span> Delete selected
          </div>
        </div>
      </div>

    </div>
    <div class="demo-code"><span class="com">/* Row actions menu */</span>
<span class="kw">&lt;div</span> <span class="fn">class</span>=<span class="str">"ds-menu"</span><span class="kw">&gt;</span>
  <span class="kw">&lt;div</span> <span class="fn">class</span>=<span class="str">"ds-menu-item"</span><span class="kw">&gt;</span>&#128065; View details<span class="kw">&lt;/div&gt;</span>
  <span class="kw">&lt;div</span> <span class="fn">class</span>=<span class="str">"ds-menu-item"</span><span class="kw">&gt;</span>&#9998;&#65039; Edit<span class="kw">&lt;/div&gt;</span>
  <span class="kw">&lt;div</span> <span class="fn">class</span>=<span class="str">"ds-menu-divider"</span><span class="kw">&gt;&lt;/div&gt;</span>
  <span class="kw">&lt;div</span> <span class="fn">class</span>=<span class="str">"ds-menu-item"</span><span class="kw">&gt;</span>&#128228; Export PDF<span class="kw">&lt;/div&gt;</span>
  <span class="kw">&lt;div</span> <span class="fn">class</span>=<span class="str">"ds-menu-divider"</span><span class="kw">&gt;&lt;/div&gt;</span>
  <span class="kw">&lt;div</span> <span class="fn">class</span>=<span class="str">"ds-menu-item destructive"</span><span class="kw">&gt;</span>
    &#128465; Delete record
  <span class="kw">&lt;/div&gt;</span>
<span class="kw">&lt;/div&gt;</span>

<span class="com">/* Bulk actions menu with section label */</span>
<span class="kw">&lt;div</span> <span class="fn">class</span>=<span class="str">"ds-menu"</span><span class="kw">&gt;</span>
  <span class="kw">&lt;div</span> <span class="fn">class</span>=<span class="str">"ds-menu-label"</span><span class="kw">&gt;</span>Selection (3 items)<span class="kw">&lt;/div&gt;</span>
  <span class="kw">&lt;div</span> <span class="fn">class</span>=<span class="str">"ds-menu-item"</span><span class="kw">&gt;</span>&#128228; Export selected<span class="kw">&lt;/div&gt;</span>
  <span class="kw">&lt;div</span> <span class="fn">class</span>=<span class="str">"ds-menu-item"</span><span class="kw">&gt;</span>&#10003; Mark as reviewed<span class="kw">&lt;/div&gt;</span>
  <span class="kw">&lt;div</span> <span class="fn">class</span>=<span class="str">"ds-menu-divider"</span><span class="kw">&gt;&lt;/div&gt;</span>
  <span class="kw">&lt;div</span> <span class="fn">class</span>=<span class="str">"ds-menu-item destructive"</span><span class="kw">&gt;</span>
    &#128465; Delete selected
  <span class="kw">&lt;/div&gt;</span>
<span class="kw">&lt;/div&gt;</span></div>
  </div>

  <div class="sub">
    <div class="sub-title">Rule</div>
    ${ruleGrid(
      '<!-- Safe actions first, destructive last + divider -->\n<div class="ds-menu">\n  <div class="ds-menu-item">👁 View</div>\n  <div class="ds-menu-item">✏️ Edit</div>\n  <div class="ds-menu-divider"></div>\n  <div class="ds-menu-item destructive">🗑 Delete</div>\n</div>',
      '<!-- Destructive action mixed in with safe actions -->\n<div class="ds-menu">\n  <div class="ds-menu-item">👁 View</div>\n  <div class="ds-menu-item destructive">🗑 Delete</div>\n  <div class="ds-menu-item">✏️ Edit</div>\n</div>'
    )}
  </div>
`);
