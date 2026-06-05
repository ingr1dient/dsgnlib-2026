/* ── SECTION: Prompt 10 — Audit Trail ────────────────────────────────────────
   Edit this file to update the audit trail prompt.
   ─────────────────────────────────────────────────────────────────────────── */

mountSection('prompts-p10', `
  <div class="prompt-meta">
    <span class="prompt-num">P10</span>
    <span class="prompt-tag tag-doc">Document</span>
  </div>
  <h2 class="sec-title">Audit Trail</h2>
  <p class="sec-desc">
    Chronological log of all actions on a record or across the platform.
    Provides the traceability regulators and auditors require.
  </p>
  <div class="callout callout-info">
    <strong>Audit context:</strong> use explicit pagination (not infinite scroll) &mdash;
    auditors need to page through records deliberately.
  </div>
  <div class="prompt-box">
    <div class="prompt-toolbar">
      <span class="pt-label">p10-audit-trail.txt</span>
      <button class="copy-btn" onclick="copyPrompt(this,'pt-p10')">Copy</button>
    </div>
    <div class="prompt-text" id="pt-p10">Build the Audit Trail for <span class="ph">[CLIENT NAME]</span>.
Scope: <span class="ph">[PRODUCT-LEVEL alongside a record / PLATFORM-WIDE admin view &mdash; choose one]</span>

<span class="h">Filters above log:</span>
- Search: "Filter by user or action..."
- Date range picker: from / to
- Action type: multi-select checkboxes
  <span class="ph">[types, e.g.: Status change &middot; Document upload &middot; Certificate renewal &middot; Record edit &middot; Access &middot; Export]</span>

<span class="h">Log entries (per row):</span>
- Avatar (av-sm) + User name (body-md / text-primary)
- Action: natural-language description; entity name in text-link style when clickable
- Entity reference: linked name
- Timestamp: Roboto Mono, right-aligned
  Default: relative "3 hours ago" &middot; Hover: full ISO datetime tooltip
- Change detail (expandable row): before (bg-muted) &rarr; after (status-compliant-bg) values

<span class="h">Grouping:</span> by calendar day label ("Today" / "Yesterday" / "12 Jun 2026")
Separator: divider + date centred (body-sm / text-muted)

Load more: "Load earlier entries" secondary button at bottom.
No infinite scroll &mdash; explicit pagination preferred for audit contexts.

Export: "Export audit log (CSV)" secondary button in page header.</div>
  </div>
`);
