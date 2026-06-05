/* ── SECTION: Prompt 5 — Document Upload ─────────────────────────────────────
   Edit this file to update the document upload prompt.
   ─────────────────────────────────────────────────────────────────────────── */

mountSection('prompts-p5', `
  <div class="prompt-meta">
    <span class="prompt-num">P05</span>
    <span class="prompt-tag tag-form">Form</span>
  </div>
  <h2 class="sec-title">Document Upload Flow</h2>
  <p class="sec-desc">
    Upload and tag compliance certificates, test reports, and safety data sheets.
    Works as a full page or a right-side drawer.
  </p>
  <div class="prompt-box">
    <div class="prompt-toolbar">
      <span class="pt-label">p05-document-upload.txt</span>
      <button class="copy-btn" onclick="copyPrompt(this,'pt-p5')">Copy</button>
    </div>
    <div class="prompt-text" id="pt-p5">Build the document upload screen for <span class="ph">[CLIENT NAME]</span>.
Mode: <span class="ph">[FULL PAGE / RIGHT DRAWER &mdash; choose one]</span>

<span class="h">Upload area:</span>
- Dropzone: dashed 2px border-default, bg-subtle, radius-lg
  Icon: 48px upload + "Drag files here or Browse" (body-lg / text-muted)
  Accepted: PDF, JPG, PNG, DOCX &mdash; list types below in body-sm/text-muted
  Drag-over state: border-focus, action-subtle background

<span class="h">Per-file metadata (required before upload confirms):</span>
- Document type: required select &mdash; <span class="ph">[types from intake, e.g. Test Report, Certificate, SDS, Declaration of Conformity]</span>
- Linked product / entity: searchable select (links doc to existing record)
- Applicable regulation: multi-select &mdash; <span class="ph">[regulations from intake]</span>
- Expiry date: optional date picker (triggers &sect;4.10 expiry colours when filled)
- Notes: optional textarea

<span class="h">Uploaded files list:</span>
- Each row: file icon (by type) + filename + type badge + linked entity + expiry (colour-coded) + Download + Delete
- Upload progress: thin bar, action-default fill, per file
- Error row: status-non-compliant-bg + error message + Retry button

Constraints: 10 files max per batch, 20MB per file.
Footer: "Upload N files" primary + "Cancel" ghost.</div>
  </div>
`);
