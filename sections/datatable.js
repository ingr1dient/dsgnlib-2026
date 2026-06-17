/* ── SECTION: Data Table (§4.8) ───────────────────────────────────────────────
   High-density table for test records, certificate lists, and audit logs.
   Edit this file to change the data-table documentation.
   ─────────────────────────────────────────────────────────────────────────── */

mountSection('datatable', `
  <h2 class="sec-title">Data Table</h2>
  <p class="sec-desc">
    Primary display pattern for test records, certificate lists, product
    registrations, and audit logs &mdash; the most-used screens in compliance
    platforms. Optimise for readability at high density.
    Row heights: 32 / 40 / 48px &middot; Header: 36px <code>bg-subtle</code> &middot; Horizontal scroll on overflow &mdash; never truncate columns silently.
  </p>

  <div class="sub">
    <div class="sub-title">Compliance records &mdash; compact, hoverable</div>
    <div class="demo demo-col">
      <div class="ds-table-wrap" style="width:100%">
        <table class="ds-table ds-table-compact ds-table-hoverable">
          <thead>
            <tr>
              <th class="ds-table-check">
                <label class="ds-checkbox"><input type="checkbox"><span class="ds-checkbox-box"><span class="ds-checkbox-check">&#10003;</span></span></label>
              </th>
              <th class="ds-th-sort active">Product <span class="ds-th-chev">&#9650;</span></th>
              <th class="ds-th-sort">Certificate No. <span class="ds-th-chev">&#9660;</span></th>
              <th class="ds-col-status">Status</th>
              <th class="ds-th-sort ds-col-date">Expiry <span class="ds-th-chev">&#9660;</span></th>
              <th class="ds-col-actions"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="ds-table-check">
                <label class="ds-checkbox"><input type="checkbox"><span class="ds-checkbox-box"><span class="ds-checkbox-check">&#10003;</span></span></label>
              </td>
              <td class="ds-col-text">Industrial Sensor Module X-200</td>
              <td class="ds-col-num">CE-2024-00831</td>
              <td class="ds-col-status"><span class="status-badge st-compliant">Compliant</span></td>
              <td class="ds-col-date">2027-03-14</td>
              <td class="ds-col-actions">
                <span class="ds-row-actions"><span title="View">&#128065;</span><span title="Edit">&#9998;</span><span title="More">&#8943;</span></span>
              </td>
            </tr>
            <tr class="selected">
              <td class="ds-table-check">
                <label class="ds-checkbox indeterminate"><input type="checkbox" checked><span class="ds-checkbox-box"><span class="ds-checkbox-check">&#10003;</span></span></label>
              </td>
              <td class="ds-col-text">Power Supply Unit PSU-48V</td>
              <td class="ds-col-num">RoHS-2025-01147</td>
              <td class="ds-col-status"><span class="status-badge st-review">Under review</span></td>
              <td class="ds-col-date">2026-11-30</td>
              <td class="ds-col-actions">
                <span class="ds-row-actions"><span title="View">&#128065;</span><span title="Edit">&#9998;</span><span title="More">&#8943;</span></span>
              </td>
            </tr>
            <tr>
              <td class="ds-table-check">
                <label class="ds-checkbox"><input type="checkbox"><span class="ds-checkbox-box"><span class="ds-checkbox-check">&#10003;</span></span></label>
              </td>
              <td class="ds-col-text">Lithium Battery Pack LB-9000</td>
              <td class="ds-col-num">REACH-2025-00420</td>
              <td class="ds-col-status"><span class="status-badge st-pending">Pending</span></td>
              <td class="ds-col-date">2026-08-21</td>
              <td class="ds-col-actions">
                <span class="ds-row-actions"><span title="View">&#128065;</span><span title="Edit">&#9998;</span><span title="More">&#8943;</span></span>
              </td>
            </tr>
            <tr>
              <td class="ds-table-check">
                <label class="ds-checkbox"><input type="checkbox"><span class="ds-checkbox-box"><span class="ds-checkbox-check">&#10003;</span></span></label>
              </td>
              <td class="ds-col-text">Wireless Gateway WG-5G-Pro</td>
              <td class="ds-col-num">CE-2023-00118</td>
              <td class="ds-col-status"><span class="status-badge st-expired">Expired</span></td>
              <td class="ds-col-date">2025-12-01</td>
              <td class="ds-col-actions">
                <span class="ds-row-actions"><span title="View">&#128065;</span><span title="Edit">&#9998;</span><span title="More">&#8943;</span></span>
              </td>
            </tr>
            <tr>
              <td class="ds-table-check">
                <label class="ds-checkbox"><input type="checkbox"><span class="ds-checkbox-box"><span class="ds-checkbox-check">&#10003;</span></span></label>
              </td>
              <td class="ds-col-text">Coolant Pump Assembly CP-300</td>
              <td class="ds-col-num">RoHS-2024-00765</td>
              <td class="ds-col-status"><span class="status-badge st-non-compliant">Non-compliant</span></td>
              <td class="ds-col-date">2026-02-09</td>
              <td class="ds-col-actions">
                <span class="ds-row-actions"><span title="View">&#128065;</span><span title="Edit">&#9998;</span><span title="More">&#8943;</span></span>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="ds-table-foot">
          <span>Showing 1&ndash;5 of 248 results</span>
          <span class="muted">&larr; Prev &middot; 1 2 3 &hellip; 50 &middot; Next &rarr;</span>
        </div>
      </div>
    </div>
    <div class="demo-code">&lt;<span class="kw">div</span> <span class="fn">class</span>=<span class="str">"ds-table-wrap"</span>&gt;
  &lt;<span class="kw">table</span> <span class="fn">class</span>=<span class="str">"ds-table ds-table-compact ds-table-hoverable"</span>&gt;
    &lt;<span class="kw">thead</span>&gt;&lt;<span class="kw">tr</span>&gt;
      &lt;<span class="kw">th</span> <span class="fn">class</span>=<span class="str">"ds-table-check"</span>&gt;&hellip;&lt;/<span class="kw">th</span>&gt;
      &lt;<span class="kw">th</span> <span class="fn">class</span>=<span class="str">"ds-th-sort active"</span>&gt;Product &lt;<span class="kw">span</span> <span class="fn">class</span>=<span class="str">"ds-th-chev"</span>&gt;&amp;#9650;&lt;/<span class="kw">span</span>&gt;&lt;/<span class="kw">th</span>&gt;
      &lt;<span class="kw">th</span> <span class="fn">class</span>=<span class="str">"ds-col-status"</span>&gt;Status&lt;/<span class="kw">th</span>&gt;
      &lt;<span class="kw">th</span> <span class="fn">class</span>=<span class="str">"ds-col-date"</span>&gt;Expiry&lt;/<span class="kw">th</span>&gt;
    &lt;/<span class="kw">tr</span>&gt;&lt;/<span class="kw">thead</span>&gt;
    &lt;<span class="kw">tbody</span>&gt;
      &lt;<span class="kw">tr</span> <span class="fn">class</span>=<span class="str">"selected"</span>&gt;
        &lt;<span class="kw">td</span> <span class="fn">class</span>=<span class="str">"ds-col-num"</span>&gt;CE-2024-00831&lt;/<span class="kw">td</span>&gt;
        &lt;<span class="kw">td</span> <span class="fn">class</span>=<span class="str">"ds-col-status"</span>&gt;&lt;<span class="kw">span</span> <span class="fn">class</span>=<span class="str">"status-badge st-compliant"</span>&gt;Compliant&lt;/<span class="kw">span</span>&gt;&lt;/<span class="kw">td</span>&gt;
        &lt;<span class="kw">td</span> <span class="fn">class</span>=<span class="str">"ds-col-date"</span>&gt;2027-03-14&lt;/<span class="kw">td</span>&gt;
      &lt;/<span class="kw">tr</span>&gt;
    &lt;/<span class="kw">tbody</span>&gt;
  &lt;/<span class="kw">table</span>&gt;
  &lt;<span class="kw">div</span> <span class="fn">class</span>=<span class="str">"ds-table-foot"</span>&gt;Showing 1&ndash;5 of 248 results&lt;/<span class="kw">div</span>&gt;
&lt;/<span class="kw">div</span>&gt;</div>
  </div>

  <div class="sub">
    <div class="sub-title">Empty state</div>
    <div class="demo demo-col">
      <div class="ds-table-wrap" style="width:100%">
        <table class="ds-table ds-table-compact">
          <thead>
            <tr>
              <th class="ds-table-check"></th>
              <th>Product</th>
              <th>Certificate No.</th>
              <th class="ds-col-status">Status</th>
              <th class="ds-col-date">Expiry</th>
              <th class="ds-col-actions"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="ds-table-empty" colspan="6">No records match the current filters. Clear filters or add a new record.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <div class="sub">
    <div class="sub-title">Row heights</div>
    <p class="muted" style="margin-bottom:0;line-height:1.7">
      <code>.ds-table-compact</code> (32px) is the default for compliance tables &mdash; it
      maximises records on screen. <code>.ds-table-standard</code> (40px) suits general-purpose
      lists. <code>.ds-table-comfortable</code> (48px) is for touch-first or mobile contexts.
      Add <code>.ds-table-striped</code> per instance for alternating row tint, and
      <code>.ds-table-hoverable</code> when rows are clickable.
    </p>
  </div>

  <div class="sub">
    <div class="sub-title">Column types</div>
    <p class="muted" style="margin-bottom:0;line-height:1.7">
      <code>.ds-col-text</code> truncates with an ellipsis at overflow (tooltip shows the full value).
      <code>.ds-col-status</code> centres a compliance badge (&sect;4.7).
      <code>.ds-col-date</code> renders ISO <code>YYYY-MM-DD</code> in Roboto Mono, right-aligned.
      <code>.ds-col-num</code> is right-aligned tabular figures (used here for certificate numbers).
      <code>.ds-col-actions</code> holds 20px icon buttons revealed on row hover via
      <code>.ds-row-actions</code>. A leading <code>.ds-table-check</code> column (fixed 40px) selects rows.
    </p>
  </div>
`);
