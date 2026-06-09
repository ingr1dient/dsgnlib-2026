/* ── SECTION: Tag / Chip ──────────────────────────────────────────────────────
   Tags are non-dismissible read-only labels. Chips are dismissible filter tokens.
   Never mix the two patterns on the same surface.
   ─────────────────────────────────────────────────────────────────────────── */

mountSection('tag', `
  <h2 class="sec-title">Tag / Chip</h2>
  <p class="sec-desc">
    Two related patterns: <strong>chips</strong> represent active filter states and
    are always dismissible; <strong>tags</strong> are read-only labels attached to
    records. Do not mix dismissible and non-dismissible items on the same row.
  </p>

  <div class="sub">
    <div class="sub-title">Colour variants</div>
    <div class="demo" style="gap:8px;flex-wrap:wrap">
      <span class="ds-tag ds-tag-default">Default</span>
      <span class="ds-tag ds-tag-primary">Primary</span>
      <span class="ds-tag ds-tag-success">Success</span>
      <span class="ds-tag ds-tag-warning">Warning</span>
      <span class="ds-tag ds-tag-danger">Danger</span>
    </div>
    <div class="demo-code"><span class="kw">&lt;span</span> <span class="fn">class</span>=<span class="str">"ds-tag ds-tag-default"</span><span class="kw">&gt;</span>Default<span class="kw">&lt;/span&gt;</span>
<span class="kw">&lt;span</span> <span class="fn">class</span>=<span class="str">"ds-tag ds-tag-primary"</span><span class="kw">&gt;</span>Primary<span class="kw">&lt;/span&gt;</span>
<span class="kw">&lt;span</span> <span class="fn">class</span>=<span class="str">"ds-tag ds-tag-success"</span><span class="kw">&gt;</span>Success<span class="kw">&lt;/span&gt;</span>
<span class="kw">&lt;span</span> <span class="fn">class</span>=<span class="str">"ds-tag ds-tag-warning"</span><span class="kw">&gt;</span>Warning<span class="kw">&lt;/span&gt;</span>
<span class="kw">&lt;span</span> <span class="fn">class</span>=<span class="str">"ds-tag ds-tag-danger"</span><span class="kw">&gt;</span>Danger<span class="kw">&lt;/span&gt;</span></div>
  </div>

  <div class="sub">
    <div class="sub-title">Dismissible chips — compliance filter bar</div>
    <div class="demo" style="gap:8px;flex-wrap:wrap">
      <span class="ds-tag ds-tag-primary">
        CE Marking <span class="ds-tag-close" role="button" aria-label="Remove CE Marking filter">&times;</span>
      </span>
      <span class="ds-tag ds-tag-primary">
        ISO 9001 <span class="ds-tag-close" role="button" aria-label="Remove ISO 9001 filter">&times;</span>
      </span>
      <span class="ds-tag ds-tag-danger">
        Expired <span class="ds-tag-close" role="button" aria-label="Remove Expired filter">&times;</span>
      </span>
    </div>
    <div class="demo-code"><span class="com">/* chip — dismissible, used in filter bars */</span>
<span class="kw">&lt;span</span> <span class="fn">class</span>=<span class="str">"ds-tag ds-tag-primary"</span><span class="kw">&gt;</span>
  CE Marking
  <span class="kw">&lt;span</span> <span class="fn">class</span>=<span class="str">"ds-tag-close"</span>
        <span class="fn">role</span>=<span class="str">"button"</span>
        <span class="fn">aria-label</span>=<span class="str">"Remove filter"</span><span class="kw">&gt;</span>&times;<span class="kw">&lt;/span&gt;</span>
<span class="kw">&lt;/span&gt;</span></div>
  </div>

  <div class="sub">
    <div class="sub-title">Non-dismissible tags — regulation &amp; market labels</div>
    <div class="demo" style="gap:8px;flex-wrap:wrap">
      <span class="ds-tag ds-tag-default">EU</span>
      <span class="ds-tag ds-tag-default">US</span>
      <span class="ds-tag ds-tag-default">Asia-Pacific</span>
      <span class="ds-tag ds-tag-success">RoHS</span>
      <span class="ds-tag ds-tag-success">REACH</span>
      <span class="ds-tag ds-tag-warning">Pending Review</span>
    </div>
    <p style="font-size:12px;color:var(--text-muted);margin-top:8px">
      Read-only labels attached to product records or certificate entries.
      No close button &mdash; these are data attributes, not filter states.
    </p>
  </div>

  <div class="sub">
    <div class="sub-title">Rule</div>
    ${ruleGrid(
      '<!-- Filter bar: chips with × -->\n<span class="ds-tag ds-tag-primary">\n  ISO 9001\n  <span class="ds-tag-close">&times;</span>\n</span>\n\n<!-- Record label: tag without × -->\n<span class="ds-tag ds-tag-default">EU</span>',
      '<!-- Mixed: some with ×, some without on same row -->\n<span class="ds-tag ds-tag-primary">\n  ISO 9001 <span class="ds-tag-close">&times;</span>\n</span>\n<span class="ds-tag ds-tag-default">\n  EU <!-- no × but sits in same filter row -->\n</span>'
    )}
  </div>
`);
