/* ── SECTION: Avatar ─────────────────────────────────────────────────────────
   Circle with initials fallback across sm/md/lg sizes.
   Edit this file to update avatar documentation or adjust sizes.
   Sizes confirmed 2026-06-11 (Decision D7): 24 / 32 / 40px.
   ─────────────────────────────────────────────────────────────────────────── */

mountSection('avatar', `
  <h2 class="sec-title">Avatar</h2>
  <p class="sec-desc">
    Circle shape. Fallback: initials on <code>bg-muted</code> with <code>text-secondary</code>.
    Sizes: sm 24 / md 32 / lg 40px (Decision D7 resolved 2026-06-11).
  </p>

  <div class="sub">
    <div class="sub-title">Sizes</div>
    <div class="demo" style="gap:32px;align-items:flex-end">
      <div class="flex col items-c gap-8">
        <span class="avatar av-sm">AB</span>
        <span style="font-size:11px;color:var(--text-muted)">sm &middot; 24px</span>
      </div>
      <div class="flex col items-c gap-8">
        <span class="avatar av-md">AB</span>
        <span style="font-size:11px;color:var(--text-muted)">md &middot; 32px</span>
      </div>
      <div class="flex col items-c gap-8">
        <span class="avatar av-lg">AB</span>
        <span style="font-size:11px;color:var(--text-muted)">lg &middot; 40px</span>
      </div>
    </div>
    <div class="demo-code"><span class="kw">.avatar</span> {
  <span class="fn">border-radius</span>: <span class="str">50%</span>;
  <span class="fn">background</span>: <span class="str">var(--bg-muted)</span>;    <span class="com">/* fallback fill */</span>
  <span class="fn">color</span>: <span class="str">var(--text-secondary)</span>;  <span class="com">/* initials text */</span>
}</div>
  </div>
`);
