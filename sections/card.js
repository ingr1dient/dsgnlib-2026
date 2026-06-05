/* ── SECTION: Card ───────────────────────────────────────────────────────────
   Basic surface container with header, body, and optional footer.
   Edit this file to update card documentation.
   ─────────────────────────────────────────────────────────────────────────── */

mountSection('card', `
  <h2 class="sec-title">Card</h2>
  <p class="sec-desc">
    Basic surface container. Background: <code>surface-base</code>.
    Border: <code>border-divider</code>. Add <code>shadow-sm</code> for raised appearance.
    Radius: 12px. Do not nest raised cards inside modals.
  </p>

  <div class="sub">
    <div class="sub-title">Example</div>
    <div class="demo">
      <div class="ds-card">
        <div class="ds-card-head">
          <div class="ds-card-title">Card Title</div>
          <div class="ds-card-desc">Supporting description text</div>
        </div>
        <div class="ds-card-body">
          <p style="font-size:13px;color:var(--text-secondary);margin-bottom:16px;line-height:1.6">
            Body copy using <code>body-md</code> style. Background is <code>surface-base</code>.
            The header border uses <code>border-divider</code>.
          </p>
          <div class="flex gap-8">
            <button class="btn btn-primary btn-sm">Confirm</button>
            <button class="btn btn-ghost btn-sm">Cancel</button>
          </div>
        </div>
      </div>
    </div>
    <div class="demo-code"><span class="kw">.card</span> {
  <span class="fn">background</span>: <span class="str">var(--surface)</span>;
  <span class="fn">border</span>: <span class="str">1px solid var(--border-divider)</span>;
  <span class="fn">border-radius</span>: <span class="str">12px</span>;
  <span class="fn">box-shadow</span>: <span class="str">var(--shadow-sm)</span>; <span class="com">/* optional raised appearance */</span>
}</div>
  </div>
`);
