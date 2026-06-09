/* ── SECTION: Empty State ─────────────────────────────────────────────────────
   Contextual empty-state patterns. Always guide the user with a CTA when
   there is an actionable path. Never leave a blank space with no explanation.
   ─────────────────────────────────────────────────────────────────────────── */

mountSection('empty-state', `
  <h2 class="sec-title">Empty State</h2>
  <p class="sec-desc">
    Empty states appear when a list, table, or view has no content to display.
    Always explain <em>why</em> the state exists and provide a clear next step
    when one is available. A blank white space with no guidance is a broken experience.
  </p>

  <div class="sub">
    <div class="sub-title">No records — actionable</div>
    <div class="demo">
      <div class="ds-empty">
        <div class="ds-empty-icon">&#128203;</div>
        <div class="ds-empty-title">No test records found</div>
        <div class="ds-empty-body">Upload your first test report to get started.</div>
        <button class="btn btn-primary btn-sm">Upload Record</button>
      </div>
    </div>
    <div class="demo-code"><span class="kw">&lt;div</span> <span class="fn">class</span>=<span class="str">"ds-empty"</span><span class="kw">&gt;</span>
  <span class="kw">&lt;div</span> <span class="fn">class</span>=<span class="str">"ds-empty-icon"</span><span class="kw">&gt;</span>&#128203;<span class="kw">&lt;/div&gt;</span>
  <span class="kw">&lt;div</span> <span class="fn">class</span>=<span class="str">"ds-empty-title"</span><span class="kw">&gt;</span>No test records found<span class="kw">&lt;/div&gt;</span>
  <span class="kw">&lt;div</span> <span class="fn">class</span>=<span class="str">"ds-empty-body"</span><span class="kw">&gt;</span>
    Upload your first test report to get started.
  <span class="kw">&lt;/div&gt;</span>
  <span class="kw">&lt;button</span> <span class="fn">class</span>=<span class="str">"btn btn-primary btn-sm"</span><span class="kw">&gt;</span>Upload Record<span class="kw">&lt;/button&gt;</span>
<span class="kw">&lt;/div&gt;</span></div>
  </div>

  <div class="sub">
    <div class="sub-title">No search results — recoverable</div>
    <div class="demo">
      <div class="ds-empty">
        <div class="ds-empty-icon">&#128269;</div>
        <div class="ds-empty-title">No results for &ldquo;ISO 9001 2025&rdquo;</div>
        <div class="ds-empty-body">Try different keywords or clear your active filters.</div>
        <button class="btn btn-sm" style="border:1px solid var(--border-default);background:transparent;color:var(--text-secondary);border-radius:8px;padding:6px 14px;cursor:pointer;font-size:13px">Clear filters</button>
      </div>
    </div>
    <p style="font-size:12px;color:var(--text-muted);margin-top:8px">
      For search/filter empty states, the CTA should clear state rather than
      navigate away. Use a ghost or secondary button &mdash; not primary &mdash;
      because this is a recovery action, not a primary workflow step.
    </p>
  </div>

  <div class="sub">
    <div class="sub-title">Access denied — no actionable path</div>
    <div class="demo">
      <div class="ds-empty">
        <div class="ds-empty-icon">&#128274;</div>
        <div class="ds-empty-title">You don&rsquo;t have access to this module</div>
        <div class="ds-empty-body">Contact your administrator to request access.</div>
      </div>
    </div>
    <p style="font-size:12px;color:var(--text-muted);margin-top:8px">
      When there is no self-service action the user can take, omit the CTA
      button entirely. The body copy should still direct them to the correct
      next step (e.g. contacting an admin).
    </p>
  </div>

  <div class="sub">
    <div class="sub-title">Rule</div>
    ${ruleGrid(
      '<!-- Actionable empty: always include CTA -->\n<div class="ds-empty">\n  <div class="ds-empty-icon">📋</div>\n  <div class="ds-empty-title">No records</div>\n  <div class="ds-empty-body">Upload to get started.</div>\n  <button class="btn btn-primary btn-sm">\n    Upload Record\n  </button>\n</div>',
      '<!-- Blank state: no icon, no text, no CTA -->\n<div class="ds-empty">\n  <!-- nothing -->\n</div>'
    )}
  </div>
`);
