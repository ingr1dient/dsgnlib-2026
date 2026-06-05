/* ── SECTION: Avatar ─────────────────────────────────────────────────────────
   Circle with initials fallback across sm/md/lg/xl sizes.
   Edit this file to update avatar documentation or adjust sizes.
   Note: sizes are provisional — see Decision D7.
   ─────────────────────────────────────────────────────────────────────────── */

mountSection('avatar', `
  <h2 class="sec-title">Avatar</h2>
  <p class="sec-desc">
    Circle shape. Fallback: initials on <code>bg-muted</code> with <code>text-secondary</code>.
    Sizes are provisional &mdash; confirm with Decision D7.
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
      <div class="flex col items-c gap-8">
        <span class="avatar av-xl">AB</span>
        <span style="font-size:11px;color:var(--text-muted)">xl &middot; 48px</span>
      </div>
    </div>
    <div class="demo-code"><span class="kw">.avatar</span> {
  <span class="fn">border-radius</span>: <span class="str">50%</span>;
  <span class="fn">background</span>: <span class="str">var(--bg-muted)</span>;    <span class="com">/* fallback fill */</span>
  <span class="fn">color</span>: <span class="str">var(--text-secondary)</span>;  <span class="com">/* initials text */</span>
}</div>
  </div>
`);
