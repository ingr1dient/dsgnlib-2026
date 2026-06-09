/* ── SECTION: Divider ─────────────────────────────────────────────────────────
   Thin horizontal rules for visual grouping. Supplement spacing, never replace it.
   ─────────────────────────────────────────────────────────────────────────── */

mountSection('divider', `
  <h2 class="sec-title">Divider</h2>
  <p class="sec-desc">
    Horizontal rules that visually separate groups of content. Use dividers to
    reinforce logical grouping &mdash; they supplement spacing, they do not
    replace it. A divider without adequate margin above and below is a layout bug.
  </p>

  <div class="sub">
    <div class="sub-title">Plain divider</div>
    <div class="demo" style="flex-direction:column;gap:12px">
      <p style="font-size:14px;color:var(--text-secondary);margin:0">Section content above</p>
      <hr class="ds-divider" />
      <p style="font-size:14px;color:var(--text-secondary);margin:0">Section content below</p>
    </div>
    <div class="demo-code"><span class="kw">&lt;hr</span> <span class="fn">class</span>=<span class="str">"ds-divider"</span> <span class="kw">/&gt;</span></div>
  </div>

  <div class="sub">
    <div class="sub-title">Labeled divider — &ldquo;Or&rdquo;</div>
    <div class="demo" style="flex-direction:column;gap:0;padding:16px 0">
      <div class="ds-divider-labeled">Or</div>
    </div>
    <div class="demo-code"><span class="kw">&lt;div</span> <span class="fn">class</span>=<span class="str">"ds-divider-labeled"</span><span class="kw">&gt;</span>Or<span class="kw">&lt;/div&gt;</span></div>
  </div>

  <div class="sub">
    <div class="sub-title">Labeled divider — section heading</div>
    <div class="demo" style="flex-direction:column;gap:0;padding:16px 0">
      <div class="ds-divider-labeled">Required Documents</div>
    </div>
    <div class="demo-code"><span class="kw">&lt;div</span> <span class="fn">class</span>=<span class="str">"ds-divider-labeled"</span><span class="kw">&gt;</span>Required Documents<span class="kw">&lt;/div&gt;</span></div>
  </div>

  <div class="sub">
    <div class="sub-title">Form layout usage</div>
    <div class="demo" style="flex-direction:column;gap:16px;padding:4px 0">
      <div style="display:flex;flex-direction:column;gap:8px">
        <p style="font-size:12px;font-weight:600;color:var(--text-muted);margin:0;text-transform:uppercase;letter-spacing:0.05em">Product Information</p>
        <div style="display:flex;flex-direction:column;gap:6px">
          <div style="height:32px;background:var(--bg-subtle);border-radius:6px;border:1px solid var(--border-default)"></div>
          <div style="height:32px;background:var(--bg-subtle);border-radius:6px;border:1px solid var(--border-default)"></div>
        </div>
      </div>
      <hr class="ds-divider" />
      <div style="display:flex;flex-direction:column;gap:8px">
        <p style="font-size:12px;font-weight:600;color:var(--text-muted);margin:0;text-transform:uppercase;letter-spacing:0.05em">Test &amp; Certificate Data</p>
        <div style="display:flex;flex-direction:column;gap:6px">
          <div style="height:32px;background:var(--bg-subtle);border-radius:6px;border:1px solid var(--border-default)"></div>
          <div style="height:32px;background:var(--bg-subtle);border-radius:6px;border:1px solid var(--border-default)"></div>
        </div>
      </div>
    </div>
    <p style="font-size:12px;color:var(--text-muted);margin-top:8px">
      In multi-section forms, a divider paired with a section label cleanly
      separates unrelated field groups without adding excessive vertical spacing.
    </p>
  </div>

  <div class="sub">
    <div class="sub-title">Rule</div>
    ${ruleGrid(
      '<!-- Divider with breathing room -->\n<section style="margin-bottom:24px">\n  <!-- form group A -->\n</section>\n<hr class="ds-divider" />\n<section style="margin-top:24px">\n  <!-- form group B -->\n</section>',
      '<!-- Divider used instead of spacing -->\n<section>\n  <!-- form group A -->\n</section>\n<hr class="ds-divider" />\n<section>\n  <!-- form group B: no margin, cramped -->\n</section>'
    )}
  </div>
`);
