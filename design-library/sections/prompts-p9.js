/* ── SECTION: Prompt 9 — Search & Filter Panel ───────────────────────────────
   Edit this file to update the search/filter prompt.
   ─────────────────────────────────────────────────────────────────────────── */

mountSection('prompts-p9', `
  <div class="prompt-meta">
    <span class="prompt-num">P09</span>
    <span class="prompt-tag tag-data">Data</span>
  </div>
  <h2 class="sec-title">Search &amp; Filter Panel</h2>
  <p class="sec-desc">
    Multi-dimensional filtering for power users working across large datasets.
    Sits alongside the records table as a sidebar, top panel, or modal.
  </p>
  <div class="prompt-box">
    <div class="prompt-toolbar">
      <span class="pt-label">p09-search-filter.txt</span>
      <button class="copy-btn" onclick="copyPrompt(this,'pt-p9')">Copy</button>
    </div>
    <div class="prompt-text" id="pt-p9">Build the advanced search + filter panel for <span class="ph">[CLIENT NAME]</span>.
Position: <span class="ph">[LEFT SIDEBAR / TOP PANEL / MODAL &mdash; choose one]</span>

<span class="h">Search bar:</span>
Full-width input, placeholder "Search <span class="ph">[entity]</span> by name, ID, or certificate number..."
Real-time results (300ms debounce), clear &times; button when populated.

<span class="h">Filter groups</span> (each collapsible, open by default):
- Compliance status: checkboxes with live counts
  Options: compliant / pending / non-compliant / expired / under-review / n/a
- Regulation / standard: <span class="ph">[list from intake]</span>
- Market / region: <span class="ph">[list from intake]</span>
- Expiry: radio &mdash; Any / &lt; 30 days / &lt; 90 days / Expired / None set
- <span class="ph">[domain-specific filter from intake, e.g. Product category]</span>
- Date range: "Updated" from / to date pickers

<span class="h">Active filter chips (row above table):</span>
Each active filter &rarr; removable chip (action-subtle bg, action-default text, &times; remove)
"Clear all" ghost link at end of row.

Result count: "N results" (body-sm/text-muted), updates live.
No-results state: message + "Clear all filters" link CTA.</div>
  </div>
`);
