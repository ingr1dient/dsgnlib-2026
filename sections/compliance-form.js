/* ── SECTION: Compliance Form Patterns (§4.10) ────────────────────────────────
   Shared data-entry patterns: required fields, certificate-number input,
   expiry-date states, and the multi-step submission shell.
   Edit this file to change the compliance-form documentation.
   ─────────────────────────────────────────────────────────────────────────── */

mountSection('compliance-form', `
  <h2 class="sec-title">Compliance Forms</h2>
  <p class="sec-desc">
    Shared patterns for data entry across compliance workflows &mdash; product
    registration, test-data submission, certificate upload.
    Required <code>*</code> in <code>danger-400</code> &middot; Form-level note: &ldquo;Fields marked * are required&rdquo; &middot; Never rely on the asterisk alone &mdash; pair with inline error validation.
  </p>

  <div class="sub">
    <div class="sub-title">Required field &amp; inline error</div>
    <div class="demo demo-col" style="gap:24px">
      <div class="ds-field" style="width:280px">
        <label class="ds-field-label">Product name<span class="ds-field-req">*</span></label>
        <input class="input" style="width:100%" value="Industrial Sensor Module X-200" type="text">
        <span class="ds-field-help">Legal product name as it appears on the certificate.</span>
      </div>
      <div class="ds-field" style="width:280px">
        <label class="ds-field-label">Product name<span class="ds-field-req">*</span></label>
        <input class="input i-err" style="width:100%" placeholder="Enter product name" type="text">
        <span class="ds-field-error">This field is required.</span>
      </div>
    </div>
    <div class="demo-code">&lt;<span class="kw">div</span> <span class="fn">class</span>=<span class="str">"ds-field"</span>&gt;
  &lt;<span class="kw">label</span> <span class="fn">class</span>=<span class="str">"ds-field-label"</span>&gt;Product name&lt;<span class="kw">span</span> <span class="fn">class</span>=<span class="str">"ds-field-req"</span>&gt;*&lt;/<span class="kw">span</span>&gt;&lt;/<span class="kw">label</span>&gt;
  &lt;<span class="kw">input</span> <span class="fn">class</span>=<span class="str">"input i-err"</span>&gt;
  &lt;<span class="kw">span</span> <span class="fn">class</span>=<span class="str">"ds-field-error"</span>&gt;This field is required.&lt;/<span class="kw">span</span>&gt;
&lt;/<span class="kw">div</span>&gt;</div>
  </div>

  <div class="sub">
    <div class="sub-title">Certificate / document number</div>
    <p class="muted" style="margin-bottom:16px">
      Roboto Mono input with a format hint in the placeholder and a trailing
      copy icon (<code>.ds-cert-copy</code>) that activates on a populated value.
    </p>
    <div class="demo demo-col">
      <div class="ds-field" style="width:300px">
        <label class="ds-field-label">Certificate number<span class="ds-field-req">*</span></label>
        <div class="ds-cert-field">
          <input class="input" value="CE-2024-00831" placeholder="XX-XXXXXXXXXX" type="text">
          <span class="ds-cert-copy" title="Copy" onclick="copy('CE-2024-00831')">&#9783;</span>
        </div>
      </div>
    </div>
    <div class="demo-code">&lt;<span class="kw">div</span> <span class="fn">class</span>=<span class="str">"ds-cert-field"</span>&gt;
  &lt;<span class="kw">input</span> <span class="fn">class</span>=<span class="str">"input"</span> <span class="fn">value</span>=<span class="str">"CE-2024-00831"</span> <span class="fn">placeholder</span>=<span class="str">"XX-XXXXXXXXXX"</span>&gt;
  &lt;<span class="kw">span</span> <span class="fn">class</span>=<span class="str">"ds-cert-copy"</span>&gt;&amp;#9783;&lt;/<span class="kw">span</span>&gt;
&lt;/<span class="kw">div</span>&gt;</div>
  </div>

  <div class="sub">
    <div class="sub-title">Expiry date &mdash; four helper states</div>
    <p class="muted" style="margin-bottom:16px">
      The input border colour tracks the helper-text colour. Thresholds:
      warning 90&ndash;31 days, critical 30&ndash;1 days, expired in the past.
    </p>
    <div class="demo" style="gap:24px;align-items:flex-start">
      <div class="ds-field" style="width:220px">
        <label class="ds-field-label">Expiry date</label>
        <input class="input" style="width:100%" value="2027-03-14" type="text">
        <span class="ds-field-help">Certificate valid until 2027-03-14</span>
      </div>
      <div class="ds-field" style="width:220px">
        <label class="ds-field-label">Expiry date</label>
        <input class="input is-warning" style="width:100%" value="2026-08-20" type="text">
        <span class="ds-field-help is-warning">Expires in 64 days</span>
      </div>
      <div class="ds-field" style="width:220px">
        <label class="ds-field-label">Expiry date</label>
        <input class="input is-critical" style="width:100%" value="2026-07-05" type="text">
        <span class="ds-field-help is-critical">Expires in 18 days</span>
      </div>
      <div class="ds-field" style="width:220px">
        <label class="ds-field-label">Expiry date</label>
        <input class="input is-expired" style="width:100%" value="2025-12-01" type="text">
        <span class="ds-field-help is-expired">Expired 2025-12-01</span>
      </div>
    </div>
    <div class="demo-code"><span class="com">/* border + helper colour move together */</span>
&lt;<span class="kw">input</span> <span class="fn">class</span>=<span class="str">"input is-critical"</span>&gt;
&lt;<span class="kw">span</span> <span class="fn">class</span>=<span class="str">"ds-field-help is-critical"</span>&gt;Expires in 18 days&lt;/<span class="kw">span</span>&gt;</div>
  </div>

  <div class="sub">
    <div class="sub-title">Multi-step submission shell</div>
    <p class="muted" style="margin-bottom:16px">
      Numbered pills above the content: completed (checkmark), active, upcoming.
      The connector line is complete (<code>status-compliant-border</code>) up to the active step.
    </p>
    <div class="demo">
      <div class="ds-steps">
        <div class="ds-step completed">
          <span class="ds-step-pill">&#10003;</span>
          <span class="ds-step-label">Product Information</span>
        </div>
        <span class="ds-step-connector complete"></span>
        <div class="ds-step active">
          <span class="ds-step-pill">2</span>
          <span class="ds-step-label">Test &amp; Certificate Data</span>
        </div>
        <span class="ds-step-connector"></span>
        <div class="ds-step upcoming">
          <span class="ds-step-pill">3</span>
          <span class="ds-step-label">Documents &amp; Submit</span>
        </div>
      </div>
    </div>
    <div class="demo-code">&lt;<span class="kw">div</span> <span class="fn">class</span>=<span class="str">"ds-steps"</span>&gt;
  &lt;<span class="kw">div</span> <span class="fn">class</span>=<span class="str">"ds-step completed"</span>&gt;
    &lt;<span class="kw">span</span> <span class="fn">class</span>=<span class="str">"ds-step-pill"</span>&gt;&amp;#10003;&lt;/<span class="kw">span</span>&gt;
    &lt;<span class="kw">span</span> <span class="fn">class</span>=<span class="str">"ds-step-label"</span>&gt;Product Information&lt;/<span class="kw">span</span>&gt;
  &lt;/<span class="kw">div</span>&gt;
  &lt;<span class="kw">span</span> <span class="fn">class</span>=<span class="str">"ds-step-connector complete"</span>&gt;&lt;/<span class="kw">span</span>&gt;
  &lt;<span class="kw">div</span> <span class="fn">class</span>=<span class="str">"ds-step active"</span>&gt;&hellip;&lt;/<span class="kw">div</span>&gt;
  &lt;<span class="kw">span</span> <span class="fn">class</span>=<span class="str">"ds-step-connector"</span>&gt;&lt;/<span class="kw">span</span>&gt;
  &lt;<span class="kw">div</span> <span class="fn">class</span>=<span class="str">"ds-step upcoming"</span>&gt;&hellip;&lt;/<span class="kw">div</span>&gt;
&lt;/<span class="kw">div</span>&gt;</div>
  </div>

  <div class="sub">
    <div class="sub-title">Rule &mdash; never signal &ldquo;required&rdquo; with colour alone</div>
    ${ruleGrid(
      `&lt;label class="ds-field-label"&gt;\n  Certificate number\n  &lt;span class="ds-field-req"&gt;*&lt;/span&gt;\n&lt;/label&gt;\n&lt;!-- + inline validation on submit --&gt;`,
      `&lt;label class="ds-field-label"\n  style="color:red"&gt;\n  Certificate number\n&lt;/label&gt;\n&lt;!-- colour alone, no asterisk or error --&gt;`
    )}
  </div>
`);
