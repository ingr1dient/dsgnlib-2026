/* ── SECTION: Prompt 3 — Record Detail Page ─────────────────────────────────
   Edit this file to update the detail page prompt.
   ─────────────────────────────────────────────────────────────────────────── */

mountSection('prompts-p3', `
  <div class="prompt-meta">
    <span class="prompt-num">P03</span>
    <span class="prompt-tag tag-data">Data</span>
  </div>
  <h2 class="sec-title">Record Detail Page</h2>
  <p class="sec-desc">
    Drill-down for a single product or compliance record &mdash;
    certificates, test records, documents, and status history in one place.
  </p>
  <div class="prompt-box">
    <div class="prompt-toolbar">
      <span class="pt-label">p03-detail.txt</span>
      <button class="copy-btn" onclick="copyPrompt(this,'pt-p3')">Copy</button>
    </div>
    <div class="prompt-text" id="pt-p3">Build the <span class="ph">[ENTITY]</span> detail page for <span class="ph">[CLIENT NAME]</span>.

Layout: two-column (content 8 col, sidebar 4 col) on desktop.

<span class="h">Left column &mdash; main content:</span>

1. Page header
   - Entity name (heading-1) + ID/SKU (body-md / text-muted / Roboto Mono)
   - Overall compliance status badge (aggregate worst-case status)
   - Last updated (body-sm / text-muted)
   - Edit + Archive buttons top right

2. Compliance by regulation (one card each)
   Regulations: <span class="ph">[list from intake]</span>
   Each card: regulation name (heading-3) + status badge + certificate expiry date
   If expiry &lt; 30 days: status-expired-text helper "Expires in N days &mdash; Renew now &rarr;"

3. Test records table (compact, sortable by date)
   Columns: Date &middot; Standard &middot; Lab &middot; Result &middot; Report link
   "Add test record" ghost button in table header

4. Documents list
   Each row: file icon + name + type badge + upload date + Download button
   "Upload document" ghost button below list

<span class="h">Right column &mdash; sidebar:</span>

5. Key details card
   Fields: <span class="ph">[e.g. Product category, Markets, HS code, Created by, Created date]</span>

6. Activity log card
   Chronological status changes and actions (body-sm + relative timestamp)

All cards: surface-base, shadow-sm, radius-xl, gap-xl padding.</div>
  </div>
`);
