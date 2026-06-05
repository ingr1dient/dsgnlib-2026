/* ── SECTION: Prompt 1 — Compliance Status Dashboard ────────────────────────
   Edit this file to update the dashboard prompt.
   ─────────────────────────────────────────────────────────────────────────── */

mountSection('prompts-p1', `
  <div class="prompt-meta">
    <span class="prompt-num">P01</span>
    <span class="prompt-tag tag-foundation">Foundation</span>
  </div>
  <h2 class="sec-title">Compliance Status Dashboard</h2>
  <p class="sec-desc">
    Main landing page after login. At-a-glance view of compliance posture &mdash;
    what&rsquo;s healthy, what needs attention, and what&rsquo;s overdue.
    Build this first for every client.
  </p>
  <div class="callout callout-tip">
    <strong>Build order:</strong> this is always Screen 1. Its KPI tiles set the tone for the whole product.
  </div>
  <div class="prompt-box">
    <div class="prompt-toolbar">
      <span class="pt-label">p01-dashboard.txt</span>
      <button class="copy-btn" onclick="copyPrompt(this,'pt-p1')">Copy</button>
    </div>
    <div class="prompt-text" id="pt-p1">Build the Compliance Status Dashboard for <span class="ph">[CLIENT NAME]</span>.

Users: <span class="ph">[role &mdash; e.g. "Compliance managers reviewing their product portfolio"]</span>
Primary entity: <span class="ph">[e.g. "Products with CE and RoHS certification requirements"]</span>

<span class="h">1. Summary KPI row (4 stat cards)</span>
- Total products tracked
- Compliant: count + %, use status-compliant colour
- Pending / under-review: count, status-pending colour
- Non-compliant or expired: count, worst-case status colour
Card spec: surface-base, shadow-sm, radius-xl. Number: 28px/800. Label: body-sm/text-muted.

<span class="h">2. Expiry alert strip (visible only when items expiring soon)</span>
- Alert/banner, status-expired variant
- "N certificates expire within 30 days &mdash; View all &rarr;"

<span class="h">3. Compliance breakdown by regulation</span>
- One segmented bar per regulation: <span class="ph">[list from intake, e.g. CE marking, RoHS, Prop 65]</span>
- Segments coloured with compliance status tokens
- Legend: compliant / pending / non-compliant / expired

<span class="h">4. Recent activity feed</span>
- Last 10 actions, newest first
- Each: avatar (av-sm) + action text (body-md) + relative timestamp (body-sm/text-muted)

<span class="h">5. Quick actions</span>
- Primary: <span class="ph">[most common action, e.g. "Add product" / "Submit test record"]</span>
- Secondary: "View all records"

Layout: 12-col grid, max-width 1280px, section-md padding.
bg-page for the page, surface-base for all cards.</div>
  </div>
`);
