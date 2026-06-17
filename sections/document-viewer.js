/* ── SECTION: Document Viewer (§4.9) ──────────────────────────────────────────
   Inline viewer for certificates, test reports, safety data sheets, uploads.
   Edit this file to change the document-viewer documentation.
   ─────────────────────────────────────────────────────────────────────────── */

mountSection('document-viewer', `
  <h2 class="sec-title">Document Viewer</h2>
  <p class="sec-desc">
    Inline viewer for compliance certificates, test reports, safety data sheets,
    and uploaded files. Used on product detail pages and document management screens.
    Container: <code>bg-subtle</code>, 1px <code>border-default</code>, radius 8px, min-height 400px &middot; Toolbar: 48px &middot; Document centred on a <code>neutral-300</code> stage, max width 800px.
  </p>

  <div class="sub">
    <div class="sub-title">PDF certificate</div>
    <div class="demo demo-col">
      <div class="ds-docviewer" style="width:100%">
        <div class="ds-docviewer-toolbar">
          <div class="ds-docviewer-file">
            <span class="ds-docviewer-filename">CE-2024-00831_Declaration_of_Conformity.pdf</span>
            <span class="ds-docviewer-filetype">PDF</span>
          </div>
          <div class="ds-docviewer-tools">
            <span class="muted">1 / 12</span>
            <span class="ds-docviewer-tool" title="Zoom out">&minus;</span>
            <span class="ds-docviewer-tool" title="Zoom in">&plus;</span>
            <span class="ds-docviewer-tool" title="Download">&#8595;</span>
            <span class="ds-docviewer-tool" title="Fullscreen">&#10530;</span>
          </div>
        </div>
        <div class="ds-docviewer-stage">
          <div class="ds-docviewer-page" style="padding:48px 56px">
            <div style="font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:var(--text-muted);margin-bottom:24px">EU Declaration of Conformity</div>
            <div style="font-size:18px;font-weight:600;color:var(--text-primary);margin-bottom:8px">Industrial Sensor Module X-200</div>
            <div style="font-family:'Roboto Mono',monospace;font-size:13px;color:var(--text-secondary);margin-bottom:28px">Certificate No. CE-2024-00831</div>
            <div style="font-size:13px;line-height:1.9;color:var(--text-secondary)">
              This product conforms with the essential requirements of the applicable
              EU directives, including the EMC Directive 2014/30/EU and the RoHS
              Directive 2011/65/EU. Conformity has been assessed against the
              harmonised standards EN 61326-1:2013 and EN IEC 63000:2018.
            </div>
            <div style="margin-top:28px;height:1px;background:var(--border-divider)"></div>
            <div style="font-size:12px;color:var(--text-muted);margin-top:20px">Issued 2024-03-14 &middot; Valid until 2027-03-14 &middot; Notified Body 0123</div>
          </div>
        </div>
      </div>
    </div>
    <div class="demo-code">&lt;<span class="kw">div</span> <span class="fn">class</span>=<span class="str">"ds-docviewer"</span>&gt;
  &lt;<span class="kw">div</span> <span class="fn">class</span>=<span class="str">"ds-docviewer-toolbar"</span>&gt;
    &lt;<span class="kw">div</span> <span class="fn">class</span>=<span class="str">"ds-docviewer-file"</span>&gt;
      &lt;<span class="kw">span</span> <span class="fn">class</span>=<span class="str">"ds-docviewer-filename"</span>&gt;CE-2024-00831_DoC.pdf&lt;/<span class="kw">span</span>&gt;
      &lt;<span class="kw">span</span> <span class="fn">class</span>=<span class="str">"ds-docviewer-filetype"</span>&gt;PDF&lt;/<span class="kw">span</span>&gt;
    &lt;/<span class="kw">div</span>&gt;
    &lt;<span class="kw">div</span> <span class="fn">class</span>=<span class="str">"ds-docviewer-tools"</span>&gt;
      &lt;<span class="kw">span</span>&gt;1 / 12&lt;/<span class="kw">span</span>&gt;
      &lt;<span class="kw">span</span> <span class="fn">class</span>=<span class="str">"ds-docviewer-tool"</span>&gt;&amp;#8595;&lt;/<span class="kw">span</span>&gt;
    &lt;/<span class="kw">div</span>&gt;
  &lt;/<span class="kw">div</span>&gt;
  &lt;<span class="kw">div</span> <span class="fn">class</span>=<span class="str">"ds-docviewer-stage"</span>&gt;
    &lt;<span class="kw">div</span> <span class="fn">class</span>=<span class="str">"ds-docviewer-page"</span>&gt;&hellip;&lt;/<span class="kw">div</span>&gt;
  &lt;/<span class="kw">div</span>&gt;
&lt;/<span class="kw">div</span>&gt;</div>
  </div>

  <div class="sub">
    <div class="sub-title">No-preview fallback</div>
    <div class="demo demo-col">
      <div class="ds-docviewer" style="width:100%">
        <div class="ds-docviewer-toolbar">
          <div class="ds-docviewer-file">
            <span class="ds-docviewer-filename">test_report_LB-9000.dwg</span>
            <span class="ds-docviewer-filetype">DWG</span>
          </div>
          <div class="ds-docviewer-tools">
            <span class="ds-docviewer-tool" title="Download">&#8595;</span>
          </div>
        </div>
        <div class="ds-docviewer-stage">
          <div class="ds-docviewer-center">
            <span style="font-size:48px;line-height:1">&#128196;</span>
            <div style="font-size:13px">No inline preview available for <strong>application/acad</strong></div>
            <button class="btn btn-primary btn-md">Download</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="sub">
    <div class="sub-title">File-type handling</div>
    <p class="muted" style="margin-bottom:0;line-height:1.7">
      <strong>PDF</strong> renders in an embedded iframe / PDF.js with the page count shown in
      the toolbar. <strong>Image</strong> files use <code>img</code> with <code>object-fit: contain</code>
      on the <code>neutral-300</code> stage. Anything else falls back to the
      <code>.ds-docviewer-center</code> no-preview state &mdash; a 48px file icon, the MIME type
      label, and a primary <strong>Download</strong> button.
    </p>
  </div>

  <div class="sub">
    <div class="sub-title">Loading &amp; error states</div>
    <p class="muted" style="margin-bottom:0;line-height:1.7">
      While fetching, show a shimmer overlay on the stage and
      &ldquo;Loading document&hellip;&rdquo; in the toolbar (<code>text-muted</code>). On failure, render an
      <code>.ds-alert.a-danger</code> banner inside the preview area with <strong>Retry</strong> and a
      <strong>Download</strong> fallback &mdash; never leave the stage blank.
    </p>
  </div>
`);
