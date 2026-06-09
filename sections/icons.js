/* ── SECTION: Icons ──────────────────────────────────────────────────────────
   Custom icon set — Outline (default) and Filled (active/emphasis).
   84 icons × 2 styles. All 24×24px. Color via currentColor.
   Reference: Figma Icons page node 79:3
   ─────────────────────────────────────────────────────────────────────────── */

(function() {

  const ICON_CATEGORIES = [
    { label: 'Auth & Access',       icons: ['home','login','logout','user','lock','key','sign'] },
    { label: 'Navigation & Layout', icons: ['dashboard','menu','more-vert','more-hor','more-circle','popout','list','setting','adjust','swap'] },
    { label: 'Filtering & Sorting', icons: ['filter-on','filter-off','sorting-on','sorting-off'] },
    { label: 'Communication',       icons: ['alert','message','chat','mail'] },
    { label: 'Content & Items',     icons: ['order','package','flag','tips','pen','edit','edit-square','copy','delete','history','time','date','download','upload','scan'] },
    { label: 'Sentiment',           icons: ['heart','like','dislike'] },
    { label: 'Search & View',       icons: ['search','analyse','zoom in','zoom out','expand','collapse','share'] },
    { label: 'State & Actions',     icons: ['tick','tick-circle','close','close-circle','plus','plus-circle','minus','minus-circle','error','warning','help'] },
    { label: 'Arrows',              icons: ['arrow-up','arrow-down','arrow-left','arrow-right','arrow-outward','arrow-circle-up','arrow-circle-down','arrow-circle-left','arrow-circle-right','arrow-circle-outward'] },
    { label: 'Chevrons',            icons: ['chevron-up','chevron-down','chevron-left','chevron-right','chevron-top','chevron-bottom','chevron-first','chevron-last','chevron-circle-up','chevron-circle-down','chevron-circle-left','chevron-circle-right'] },
    { label: 'Movement',            icons: ['nudge-up','nudge-down','nudge-left','nudge-right','nudge-circle-down','refresh','undo','redo'] },
  ];

  const catHtml = ICON_CATEGORIES.map(cat => `
    <div style="margin-bottom:20px">
      <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.07em;color:var(--text-muted);margin-bottom:8px">${cat.label}</div>
      <div style="display:flex;flex-wrap:wrap;gap:6px">
        ${cat.icons.map(name => `<code style="font-family:'Roboto Mono',monospace;font-size:11px;padding:3px 8px;background:var(--bg-subtle);border:1px solid var(--border-divider);border-radius:4px;color:var(--text-secondary)">${name}</code>`).join('')}
      </div>
    </div>`).join('');

  const specsHtml = [
    ['Sizes',        '16px (compact UI) &middot; 24px (standard UI)'],
    ['Styles',       'Outline (default for UI) &middot; Filled (active state, status emphasis)'],
    ['Color',        '<code>currentColor</code> &mdash; always inherits from parent'],
    ['Gap to label', 'space-1 (4px)'],
    ['Alignment',    'Vertically centered with adjacent text'],
  ].map(([l, v], i, a) => `
    <div style="display:grid;grid-template-columns:180px 1fr;gap:8px;padding:8px 0;${i < a.length - 1 ? 'border-bottom:1px solid var(--border-divider);' : ''}font-size:13px">
      <span style="font-weight:600;color:var(--text-secondary)">${l}</span>
      <span style="color:var(--text-primary)">${v}</span>
    </div>`).join('');

  mountSection('icons', `
    <h2 class="sec-title">Icons</h2>
    <p class="sec-desc">
      Custom icon set in two styles: <strong>Outline</strong> (default for UI) and <strong>Filled</strong>
      (active states, status emphasis). 84 icons &times; 2 styles.
      Color is always <code>currentColor</code> &mdash; never hardcode icon colour.
    </p>

    <div class="card" style="margin-bottom:16px">
      <div class="sub-title" style="margin-bottom:12px">Specs</div>
      ${specsHtml}
    </div>

    <div class="card" style="margin-bottom:16px">
      <div class="sub-title" style="margin-bottom:12px">Rule</div>
      ${ruleGrid(
        'color: var(--text-secondary);\n/* set size on the <svg> element */',
        'color: #636363;\nwidth: 24px; height: 24px;'
      )}
    </div>

    <div class="card">
      <div class="sub-title" style="margin-bottom:16px">Icon Catalogue</div>
      ${catHtml}
      <div style="padding:10px 12px;background:var(--bg-subtle);border-radius:6px;font-size:12px;color:var(--text-secondary)">
        All 84 icons are available in both <strong>Outline</strong> and <strong>Filled</strong> variants.
        See the Figma Icons page (node&nbsp;79:3) for visual previews.
      </div>
    </div>
  `);
}());
