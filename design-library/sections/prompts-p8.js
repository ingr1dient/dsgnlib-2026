/* ── SECTION: Prompt 8 — Expiry Tracker ──────────────────────────────────────
   Edit this file to update the expiry tracker prompt.
   ─────────────────────────────────────────────────────────────────────────── */

mountSection('prompts-p8', `
  <div class="prompt-meta">
    <span class="prompt-num">P08</span>
    <span class="prompt-tag tag-data">Data</span>
  </div>
  <h2 class="sec-title">Expiry Tracker</h2>
  <p class="sec-desc">
    Certificates and documents ordered by urgency. Prevents compliance lapses &mdash;
    shows what needs renewing in the next 30, 60, and 90 days.
  </p>
  <div class="prompt-box">
    <div class="prompt-toolbar">
      <span class="pt-label">p08-expiry-tracker.txt</span>
      <button class="copy-btn" onclick="copyPrompt(this,'pt-p8')">Copy</button>
    </div>
    <div class="prompt-text" id="pt-p8">Build the Expiry Tracker for <span class="ph">[CLIENT NAME]</span>.

<span class="h">Summary strip (3 tiles at top):</span>
"Expires &lt; 30 days": count, status-expired colour
"Expires 31&ndash;90 days": count, status-pending colour
"Expired": count, status-non-compliant colour

<span class="h">Filter tabs above table:</span>
All &middot; Expires &lt; 30 days &middot; Expires 31&ndash;90 days &middot; Expired &middot; No expiry set

<span class="h">Table columns:</span>
Document name (text link &rarr; viewer) &middot; Type badge &middot; Linked <span class="ph">[entity]</span> &middot; Regulation &middot; Expiry date &middot; Days remaining &middot; Actions

<span class="h">Expiry date colour coding:</span>
Expired         &rarr; status-non-compliant-text, label "EXPIRED" (Roboto Mono)
&lt; 30 days    &rarr; status-expired-text
31&ndash;90 days &rarr; status-pending-text
90+ days        &rarr; text-secondary

Actions per row: "Renew" primary-ghost &middot; "View" ghost

Bulk action: select multiple &rarr; "Export list" for renewal outreach.
Empty state per tab: icon + message + relevant CTA.</div>
  </div>
`);
