/* ── SECTION: Prompt 7 — Requirements Checklist ──────────────────────────────
   Edit this file to update the checklist prompt.
   ─────────────────────────────────────────────────────────────────────────── */

mountSection('prompts-p7', `
  <div class="prompt-meta">
    <span class="prompt-num">P07</span>
    <span class="prompt-tag tag-foundation">Foundation</span>
  </div>
  <h2 class="sec-title">Compliance Requirements Checklist</h2>
  <p class="sec-desc">
    Regulation-specific checklist showing what a product needs to be compliant,
    what&rsquo;s complete, and what action is needed. Makes the path to compliance explicit.
  </p>
  <div class="prompt-box">
    <div class="prompt-toolbar">
      <span class="pt-label">p07-requirements-checklist.txt</span>
      <button class="copy-btn" onclick="copyPrompt(this,'pt-p7')">Copy</button>
    </div>
    <div class="prompt-text" id="pt-p7">Build the Compliance Requirements Checklist for <span class="ph">[CLIENT NAME]</span>.

Context: a user selects a product + target regulation and sees exactly what they need to do.

<span class="h">Page header:</span>
- Product name + SKU (heading-2) &middot; Regulation name (heading-3 / text-secondary)
- Overall status badge + progress fraction "4 of 7 requirements met"
- Horizontal progress bar: action-default fill (proportional), bg-muted track

<span class="h">Checklist sections</span> &mdash; group requirements by category:
<span class="ph">[categories for this regulation, e.g.: Testing &amp; Certification &middot; Technical Documentation &middot; Labelling &amp; Marking &middot; Market Authorisation]</span>

<span class="h">Per requirement item:</span>
- Checkbox (completed = status-compliant bg + border + checkmark)
- Requirement title (body-md / text-primary)
- Description (body-sm / text-secondary, collapsed by default, expand on click)
- Status badge (&sect;4.7)
- Evidence: if met &rarr; "View certificate &rarr;" (text-link); if not &rarr; "Upload document" ghost
- Due date (if applicable): Roboto Mono, colour-coded per &sect;4.10 expiry pattern

<span class="h">Footer:</span>
- "N of N requirements complete"
- "Submit for compliance review" primary (disabled until all required items checked)
- "Save progress" ghost button</div>
  </div>
`);
