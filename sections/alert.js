/* ── SECTION: Alert / Banner ─────────────────────────────────────────────────
   Full-width status messages in 4 variants: info, success, warning, danger.
   Edit this file to update alert examples or add new variants.
   ─────────────────────────────────────────────────────────────────────────── */

mountSection('alert', `
  <h2 class="sec-title">Alert / Banner</h2>
  <p class="sec-desc">
    Full-width status messages. An icon is mandatory &mdash;
    colour alone must not be the only differentiator for accessibility.
    Four semantic variants.
  </p>

  <div class="sub">
    <div class="sub-title">Variants</div>
    <div class="demo demo-col">
      <div class="ds-alert a-info">
        <span class="ds-alert-icon">&#8505;</span>
        <div>
          <div class="ds-alert-title">Heads up</div>
          <div class="ds-alert-body">Informational message using status-info tokens.</div>
        </div>
      </div>
      <div class="ds-alert a-success">
        <span class="ds-alert-icon">&#10003;</span>
        <div>
          <div class="ds-alert-title">Changes saved</div>
          <div class="ds-alert-body">Your settings have been updated successfully.</div>
        </div>
      </div>
      <div class="ds-alert a-warn">
        <span class="ds-alert-icon">&#9888;</span>
        <div>
          <div class="ds-alert-title">Decision pending</div>
          <div class="ds-alert-body">Some open design decisions may affect component appearance.</div>
        </div>
      </div>
      <div class="ds-alert a-danger">
        <span class="ds-alert-icon">&#9888;</span>
        <div>
          <div class="ds-alert-title">Validation error</div>
          <div class="ds-alert-body">The submitted value does not match the expected format.</div>
        </div>
      </div>
    </div>
  </div>

  <div class="sub">
    <div class="sub-title">Rule &mdash; icon is not optional</div>
    ${ruleGrid(
      '&lt;div class="alert a-danger"&gt;\n  &lt;span class="alert-icon"&gt;&#9888;&lt;/span&gt;\n  &lt;div&gt;Error message&lt;/div&gt;\n&lt;/div&gt;',
      '&lt;div class="alert a-danger"&gt;\n  Error message\n&lt;/div&gt;\n/* colour alone fails WCAG */&nbsp;'
    )}
  </div>
`);
