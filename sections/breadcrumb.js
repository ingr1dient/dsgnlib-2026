/* ── SECTION: Breadcrumb ──────────────────────────────────────────────────────
   Wayfinding trail showing the user's location within the app hierarchy.
   Always anchor from a root/home link — no standalone crumbs without context.
   ─────────────────────────────────────────────────────────────────────────── */

mountSection('breadcrumb', `
  <h2 class="sec-title">Breadcrumb</h2>
  <p class="sec-desc">
    Breadcrumbs show the user's location within the page hierarchy and allow
    navigation back to parent levels. The root link must always be present &mdash;
    never display a crumb trail with no navigable ancestor.
    Font: 13px &middot; Ancestors: <code>text-secondary</code> (hover: <code>--action</code>) &middot; Current: <code>text-primary</code> / wt&nbsp;500 / not linked &middot; Separator margin: 6px &middot; Collapse to &hellip; at 4+ levels.
  </p>

  <div class="sub">
    <div class="sub-title">Short path (3 levels)</div>
    <div class="demo">
      <nav class="ds-breadcrumb" aria-label="breadcrumb">
        <span class="ds-bc-item"><a href="#">Dashboard</a></span>
        <span class="ds-bc-sep">/</span>
        <span class="ds-bc-item"><a href="#">Records</a></span>
        <span class="ds-bc-sep">/</span>
        <span class="ds-bc-item current" aria-current="page">Product A</span>
      </nav>
    </div>
    <div class="demo-code"><span class="kw">&lt;nav</span> <span class="fn">class</span>=<span class="str">"ds-breadcrumb"</span> <span class="fn">aria-label</span>=<span class="str">"breadcrumb"</span><span class="kw">&gt;</span>
  <span class="kw">&lt;span</span> <span class="fn">class</span>=<span class="str">"ds-bc-item"</span><span class="kw">&gt;&lt;a</span> <span class="fn">href</span>=<span class="str">"#"</span><span class="kw">&gt;</span>Dashboard<span class="kw">&lt;/a&gt;&lt;/span&gt;</span>
  <span class="kw">&lt;span</span> <span class="fn">class</span>=<span class="str">"ds-bc-sep"</span><span class="kw">&gt;</span>/<span class="kw">&lt;/span&gt;</span>
  <span class="kw">&lt;span</span> <span class="fn">class</span>=<span class="str">"ds-bc-item"</span><span class="kw">&gt;&lt;a</span> <span class="fn">href</span>=<span class="str">"#"</span><span class="kw">&gt;</span>Records<span class="kw">&lt;/a&gt;&lt;/span&gt;</span>
  <span class="kw">&lt;span</span> <span class="fn">class</span>=<span class="str">"ds-bc-sep"</span><span class="kw">&gt;</span>/<span class="kw">&lt;/span&gt;</span>
  <span class="kw">&lt;span</span> <span class="fn">class</span>=<span class="str">"ds-bc-item current"</span> <span class="fn">aria-current</span>=<span class="str">"page"</span><span class="kw">&gt;</span>Product A<span class="kw">&lt;/span&gt;</span>
<span class="kw">&lt;/nav&gt;</span></div>
  </div>

  <div class="sub">
    <div class="sub-title">Long path (4 levels)</div>
    <div class="demo">
      <nav class="ds-breadcrumb" aria-label="breadcrumb">
        <span class="ds-bc-item"><a href="#">Dashboard</a></span>
        <span class="ds-bc-sep">›</span>
        <span class="ds-bc-item"><a href="#">Test Records</a></span>
        <span class="ds-bc-sep">›</span>
        <span class="ds-bc-item"><a href="#">ISO 9001</a></span>
        <span class="ds-bc-sep">›</span>
        <span class="ds-bc-item current" aria-current="page">Certificate Upload</span>
      </nav>
    </div>
  </div>

  <div class="sub">
    <div class="sub-title">Collapsed — middle items truncated to &hellip;</div>
    <div class="demo">
      <nav class="ds-breadcrumb" aria-label="breadcrumb">
        <span class="ds-bc-item"><a href="#">Dashboard</a></span>
        <span class="ds-bc-sep">›</span>
        <span class="ds-bc-item">
          <a href="#" title="Show full path" style="letter-spacing:0.05em">&hellip;</a>
        </span>
        <span class="ds-bc-sep">›</span>
        <span class="ds-bc-item current" aria-current="page">Certificate Upload</span>
      </nav>
    </div>
    <p style="font-size:12px;color:var(--text-muted);margin-top:8px">
      Collapse when the path exceeds 4 levels. The &hellip; node should expand on click
      to reveal the hidden ancestors inline.
    </p>
  </div>

  <div class="sub">
    <div class="sub-title">Rule</div>
    ${ruleGrid(
      '<!-- Always anchor from root -->\n<nav class="ds-breadcrumb">\n  <span class="ds-bc-item">\n    <a href="/dashboard">Dashboard</a>\n  </span>\n  <span class="ds-bc-sep">/</span>\n  <span class="ds-bc-item current">Records</span>\n</nav>',
      '<!-- Standalone crumb with no root -->\n<nav class="ds-breadcrumb">\n  <span class="ds-bc-item current">Records</span>\n</nav>'
    )}
  </div>
`);
