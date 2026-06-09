/* ── SECTION: Tabs ────────────────────────────────────────────────────────────
   Horizontal tab navigation using --action for the active indicator.
   Never hardcode a blue; always resolve through the action token.
   ─────────────────────────────────────────────────────────────────────────── */

mountSection('tabs', `
  <h2 class="sec-title">Tabs</h2>
  <p class="sec-desc">
    Horizontal tab bar for switching between related views within the same page context.
    The active indicator colour is always <code>var(--action)</code> &mdash; never a
    hardcoded blue &mdash; so it follows the client theme automatically.
    Padding: 10/20px per tab &middot; Active indicator: 2px solid <code>--action</code> bottom border &middot; Inactive: <code>text-muted</code> &middot; Active: <code>--action</code> text + border.
  </p>

  <div class="sub">
    <div class="sub-title">Default</div>
    <div class="demo" style="flex-direction:column;align-items:stretch;gap:0">
      <div class="ds-tabs">
        <div class="ds-tab active">Overview</div>
        <div class="ds-tab">Test Records</div>
        <div class="ds-tab">Documents</div>
        <div class="ds-tab">Audit Trail</div>
      </div>
      <div class="ds-tab-panel">
        Tab content appears here. Each tab maps to a route segment.
      </div>
    </div>
    <div class="demo-code"><span class="kw">&lt;div</span> <span class="fn">class</span>=<span class="str">"ds-tabs"</span><span class="kw">&gt;</span>
  <span class="kw">&lt;div</span> <span class="fn">class</span>=<span class="str">"ds-tab active"</span><span class="kw">&gt;</span>Overview<span class="kw">&lt;/div&gt;</span>
  <span class="kw">&lt;div</span> <span class="fn">class</span>=<span class="str">"ds-tab"</span><span class="kw">&gt;</span>Test Records<span class="kw">&lt;/div&gt;</span>
  <span class="kw">&lt;div</span> <span class="fn">class</span>=<span class="str">"ds-tab"</span><span class="kw">&gt;</span>Documents<span class="kw">&lt;/div&gt;</span>
  <span class="kw">&lt;div</span> <span class="fn">class</span>=<span class="str">"ds-tab"</span><span class="kw">&gt;</span>Audit Trail<span class="kw">&lt;/div&gt;</span>
<span class="kw">&lt;/div&gt;</span>
<span class="kw">&lt;div</span> <span class="fn">class</span>=<span class="str">"ds-tab-panel"</span><span class="kw">&gt;</span>
  Tab content appears here.
<span class="kw">&lt;/div&gt;</span></div>
  </div>

  <div class="sub">
    <div class="sub-title">Compliance use case — Record detail page</div>
    <p style="font-size:13px;color:var(--text-secondary);margin-bottom:12px">
      On a product record detail page, tabs let users switch between the certificate
      view, raw test data, and uploaded documents without navigating away. Each tab
      preserves its scroll position independently.
    </p>
    <div class="demo" style="flex-direction:column;align-items:stretch;gap:0">
      <div class="ds-tabs">
        <div class="ds-tab active">Certificate</div>
        <div class="ds-tab">Test Data</div>
        <div class="ds-tab">Documents</div>
      </div>
      <div class="ds-tab-panel">
        Certificate details and validity status are shown here.
      </div>
    </div>
  </div>

  <div class="sub">
    <div class="sub-title">Rule</div>
    ${ruleGrid(
      '.ds-tab.active {\n  border-bottom-color: var(--action);\n  color: var(--action);\n}',
      '.ds-tab.active {\n  border-bottom-color: #1950AE; /* hardcoded */\n  color: #1950AE;\n}'
    )}
  </div>
`);
