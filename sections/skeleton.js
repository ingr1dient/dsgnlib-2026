/* ── SECTION: Skeleton / Loading ──────────────────────────────────────────────
   Shimmer placeholders for initial content load. Use spinner for user-triggered
   actions; use skeleton only for the initial render of a data region.
   ─────────────────────────────────────────────────────────────────────────── */

mountSection('skeleton', `
  <h2 class="sec-title">Skeleton / Loading</h2>
  <p class="sec-desc">
    Skeleton screens replace content during the initial data fetch, preserving
    layout shape and reducing perceived wait time. Use a spinner (button loading
    state) for actions the user triggers &mdash; not skeleton.
  </p>

  <div class="sub">
    <div class="sub-title">Patterns side by side</div>
    <div class="demo" style="gap:32px;align-items:flex-start;flex-wrap:wrap">

      <div style="flex:1;min-width:220px">
        <p class="label-row" style="margin-bottom:12px">Table rows</p>
        <div style="display:flex;flex-direction:column;gap:12px">

          <div class="ds-skel-row">
            <div class="ds-skel ds-skel-avatar"></div>
            <div style="flex:1">
              <div class="ds-skel ds-skel-text"></div>
              <div class="ds-skel ds-skel-text"></div>
            </div>
          </div>

          <div class="ds-skel-row">
            <div class="ds-skel ds-skel-avatar"></div>
            <div style="flex:1">
              <div class="ds-skel ds-skel-text"></div>
              <div class="ds-skel ds-skel-text"></div>
            </div>
          </div>

          <div class="ds-skel-row">
            <div class="ds-skel ds-skel-avatar"></div>
            <div style="flex:1">
              <div class="ds-skel ds-skel-text"></div>
              <div class="ds-skel ds-skel-text"></div>
            </div>
          </div>

        </div>
      </div>

      <div style="flex:1;min-width:180px">
        <p class="label-row" style="margin-bottom:12px">Card</p>
        <div style="background:var(--surface);border:1px solid var(--border-default);border-radius:10px;padding:16px">
          <div class="ds-skel ds-skel-title"></div>
          <div class="ds-skel ds-skel-text"></div>
          <div class="ds-skel ds-skel-text"></div>
          <div class="ds-skel ds-skel-text" style="width:60%"></div>
        </div>
      </div>

    </div>
    <div class="demo-code"><span class="com">/* Table row skeleton */</span>
<span class="kw">&lt;div</span> <span class="fn">class</span>=<span class="str">"ds-skel-row"</span><span class="kw">&gt;</span>
  <span class="kw">&lt;div</span> <span class="fn">class</span>=<span class="str">"ds-skel ds-skel-avatar"</span><span class="kw">&gt;&lt;/div&gt;</span>
  <span class="kw">&lt;div</span> <span class="fn">style</span>=<span class="str">"flex:1"</span><span class="kw">&gt;</span>
    <span class="kw">&lt;div</span> <span class="fn">class</span>=<span class="str">"ds-skel ds-skel-text"</span><span class="kw">&gt;&lt;/div&gt;</span>
    <span class="kw">&lt;div</span> <span class="fn">class</span>=<span class="str">"ds-skel ds-skel-text"</span><span class="kw">&gt;&lt;/div&gt;</span>
  <span class="kw">&lt;/div&gt;</span>
<span class="kw">&lt;/div&gt;</span>

<span class="com">/* Card skeleton (last text line uses 60% width) */</span>
<span class="kw">&lt;div&gt;</span>
  <span class="kw">&lt;div</span> <span class="fn">class</span>=<span class="str">"ds-skel ds-skel-title"</span><span class="kw">&gt;&lt;/div&gt;</span>
  <span class="kw">&lt;div</span> <span class="fn">class</span>=<span class="str">"ds-skel ds-skel-text"</span><span class="kw">&gt;&lt;/div&gt;</span>
  <span class="kw">&lt;div</span> <span class="fn">class</span>=<span class="str">"ds-skel ds-skel-text"</span><span class="kw">&gt;&lt;/div&gt;</span>
  <span class="kw">&lt;div</span> <span class="fn">class</span>=<span class="str">"ds-skel ds-skel-text"</span>
       <span class="fn">style</span>=<span class="str">"width:60%"</span><span class="kw">&gt;&lt;/div&gt;</span>
<span class="kw">&lt;/div&gt;</span></div>
  </div>

  <div class="sub">
    <div class="sub-title">Rule — skeleton vs. spinner</div>
    ${ruleGrid(
      '<!-- Initial page load: use skeleton -->\n<!-- Replaces the full content area -->\n<div class="ds-skel-row">...</div>\n<div class="ds-skel-row">...</div>\n<div class="ds-skel-row">...</div>',
      '<!-- User clicks "Save": use button spinner, not skeleton -->\n<!-- Skeleton here would erase content the user just typed -->\n<button class="btn btn-primary" disabled>\n  <span class="spinner" /> Saving...\n</button>'
    )}
  </div>
`);
