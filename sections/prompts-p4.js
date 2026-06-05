/* ── SECTION: Prompt 4 — Test Record Form ────────────────────────────────────
   Edit this file to update the multi-step form prompt.
   ─────────────────────────────────────────────────────────────────────────── */

mountSection('prompts-p4', `
  <div class="prompt-meta">
    <span class="prompt-num">P04</span>
    <span class="prompt-tag tag-form">Form</span>
  </div>
  <h2 class="sec-title">Test Record Submission Form</h2>
  <p class="sec-desc">
    Multi-step form for submitting a verified compliance record.
    Uses the 3-step shell from &sect;4.10 of DESIGN.md.
  </p>
  <div class="callout callout-info">
    <strong>References:</strong> &sect;4.10 multi-step shell &middot; &sect;4.10 expiry date pattern &middot; &sect;4.10 required field indicator.
  </div>
  <div class="prompt-box">
    <div class="prompt-toolbar">
      <span class="pt-label">p04-test-record-form.txt</span>
      <button class="copy-btn" onclick="copyPrompt(this,'pt-p4')">Copy</button>
    </div>
    <div class="prompt-text" id="pt-p4">Build the "Submit Test Record" multi-step form for <span class="ph">[CLIENT NAME]</span>.
Use the multi-step shell from &sect;4.10 of DESIGN.md.

Steps: Product &amp; Standard &rarr; Test Data &amp; Results &rarr; Documents &amp; Submit

<span class="h">Step 1 &mdash; Product &amp; Standard:</span>
- Product: searchable single-select, shows name + SKU in dropdown
- Standard / regulation: multi-select combobox, grouped by region
  Options: <span class="ph">[regulations from intake, pre-filtered to selected product]</span>
- Testing laboratory: single-select from approved lab list
- Test date: date picker (cannot be future date)
All fields required (&sect;4.10 required field indicator).

<span class="h">Step 2 &mdash; Test Data &amp; Results:</span>
- Test result: radio &mdash; Pass / Fail / Conditional
  Pass &rarr; success colours, Fail &rarr; danger colours, Conditional &rarr; warning colours
- Certificate / report number: Roboto Mono input, format hint placeholder
- Issue date + Expiry date: side-by-side date pickers
  Expiry: show warning/danger helper text per &sect;4.10 expiry date pattern
- Test scope: textarea, 4 rows, 1000 char max
- <span class="ph">[any domain-specific fields from intake]</span>

<span class="h">Step 3 &mdash; Documents &amp; Submit:</span>
- Upload zone: dashed border, bg-subtle, "Drag files here or Browse"
  Accepted: PDF, JPG, PNG &middot; max 20MB per file
- Certification checkbox (required): "I confirm the data and documents are accurate and complete"
- Review summary: collapsed read-only list of Steps 1+2 values
- Submit button: primary, right-aligned desktop / full-width mobile

Footer all steps: secondary "Back" (left) &middot; primary "Continue" / "Submit" (right)
Progress saved per step &mdash; back navigation preserves entered data.</div>
  </div>
`);
