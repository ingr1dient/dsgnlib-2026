/* ── SECTION: Prompt 2 — Records Table ──────────────────────────────────────
   Edit this file to update the records table prompt.
   ─────────────────────────────────────────────────────────────────────────── */

mountSection('prompts-p2', `
  <div class="prompt-meta">
    <span class="prompt-num">P02</span>
    <span class="prompt-tag tag-data">Data</span>
  </div>
  <h2 class="sec-title">Product / Records Table</h2>
  <p class="sec-desc">
    The primary list view &mdash; the most-used screen in compliance platforms.
    Scan, sort, filter, and act on large sets of records.
  </p>
  <div class="prompt-box">
    <div class="prompt-toolbar">
      <span class="pt-label">p02-records-table.txt</span>
      <button class="copy-btn" onclick="copyPrompt(this,'pt-p2')">Copy</button>
    </div>
    <div class="prompt-text" id="pt-p2">Build the <span class="ph">[ENTITY, e.g. Product]</span> list screen for <span class="ph">[CLIENT NAME]</span>.

<span class="h">Table columns:</span>
<span class="ph">[list columns, e.g.: Product name &middot; SKU &middot; Market &middot; CE status &middot; RoHS status &middot; Certificate expiry &middot; Actions]</span>

<span class="h">Table spec (use &sect;4.8 of DESIGN.md):</span>
- Compact row height (32px)
- Sticky header: bg-subtle, label text style, text-secondary
- Status columns: compliance status badge (&sect;4.7 DESIGN.md)
- Date columns: Roboto Mono, right-aligned, YYYY-MM-DD
- Actions column: icon buttons, reveal on row hover only
- Row hover: bg-subtle. Row click: navigate to detail page.
- Empty state: icon + body-md message + primary CTA

<span class="h">Filter / search bar (above table):</span>
- Search input (280px) &mdash; "Search <span class="ph">[entity]</span>..."
- Filter chips: Status &middot; <span class="ph">[Market/Region]</span> &middot; <span class="ph">[other key filter from intake]</span>
  Active chip: action-subtle bg + action-default text
- Result count: "N <span class="ph">[entities]</span> found" (body-sm/text-muted, updates live)

<span class="h">Bulk actions (when rows selected):</span>
- Selection count + <span class="ph">[most common bulk action, e.g. "Export selected"]</span>
- "Clear selection" ghost button

Pagination footer: "Showing X&ndash;Y of Z" + prev/next controls.
Page header: title + "Add <span class="ph">[entity]</span>" primary button (top right).</div>
  </div>
`);
