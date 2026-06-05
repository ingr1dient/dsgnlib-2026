/* ── SECTION: Prompt 6 — Document Viewer ─────────────────────────────────────
   Edit this file to update the document viewer prompt.
   ─────────────────────────────────────────────────────────────────────────── */

mountSection('prompts-p6', `
  <div class="prompt-meta">
    <span class="prompt-num">P06</span>
    <span class="prompt-tag tag-doc">Document</span>
  </div>
  <h2 class="sec-title">Document Viewer</h2>
  <p class="sec-desc">
    Inline viewer for certificates and test reports.
    Uses &sect;4.9 of DESIGN.md for the container, toolbar, and file-type handling.
  </p>
  <div class="prompt-box">
    <div class="prompt-toolbar">
      <span class="pt-label">p06-document-viewer.txt</span>
      <button class="copy-btn" onclick="copyPrompt(this,'pt-p6')">Copy</button>
    </div>
    <div class="prompt-text" id="pt-p6">Build the document viewer for <span class="ph">[CLIENT NAME]</span>. Use &sect;4.9 of DESIGN.md.
Mode: <span class="ph">[FULL PAGE / MODAL &mdash; choose one]</span>

<span class="h">Toolbar (48px, surface-base, border-bottom):</span>
Left: breadcrumb &rarr; filename (body-md) &middot; file-type badge (neutral)
Right: Page N of N &middot; Zoom &minus; &middot; Zoom + &middot; Download (secondary btn) &middot; Fullscreen icon

<span class="h">Preview pane:</span>
Outer bg: neutral-300. Document centred, white surface, shadow-md.
Max document width: 800px, scrollable vertically within container.

<span class="h">Right sidebar (300px, surface-base, border-left):</span>
- Metadata card: expiry date (colour-coded &sect;4.10) &middot; linked products with status badges &middot; uploaded by/date &middot; applicable regulations
- Actions: Edit metadata &middot; Replace file &middot; Delete (danger ghost + confirm dialog)
- Activity log: views, downloads, modifications (body-sm + relative timestamp)

<span class="h">States:</span>
- Loading: shimmer on pane + "Loading..." in toolbar (text-muted)
- Error: alert-danger banner inside pane + Retry + Download fallback
- Expired document: status-expired banner strip under toolbar &mdash;
  "This document expired on [date]. Upload a replacement."</div>
  </div>
`);
