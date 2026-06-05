/* ── SECTION: Navigation ─────────────────────────────────────────────────────
   Sidebar pattern: expanded (240px) and collapsed (64px) states.
   Edit this file to update navigation documentation.
   ─────────────────────────────────────────────────────────────────────────── */

const NAV_ITEMS = [
  { label: 'Dashboard', active: true  },
  { label: 'Records',   active: false },
  { label: 'Logs',      active: false },
];

const expandedItems = NAV_ITEMS.map(item => `
  <div style="display:flex;align-items:center;gap:8px;padding:8px 10px;border-radius:6px;
              ${item.active ? 'background:rgba(40,130,255,0.08);color:var(--p400)' : 'color:var(--text-secondary)'}">
    <span style="width:8px;height:8px;border-radius:50%;background:${item.active ? 'var(--p400)' : 'var(--bg-emphasis)'}"></span>
    <span style="font-size:14px;font-weight:${item.active ? '500' : '400'}">${item.label}</span>
  </div>`).join('');

const collapsedItems = NAV_ITEMS.map((item, i) => `
  <div style="width:40px;height:40px;border-radius:6px;display:flex;align-items:center;justify-content:center;
              ${item.active ? 'background:rgba(40,130,255,0.08)' : ''}">
    <span style="width:10px;height:10px;border-radius:50%;background:${item.active ? 'var(--p400)' : 'var(--bg-emphasis)'}"></span>
  </div>`).join('');

mountSection('navigation', `
  <h2 class="sec-title">Navigation</h2>
  <p class="sec-desc">
    Sidebar pattern. Expanded: 240px / Collapsed: 64px.
    Background: <code>bg-subtle</code>.
    Active item: <code>action-subtle</code> background + <code>action</code> text.
  </p>

  <div class="sub">
    <div class="sub-title">Expanded &amp; Collapsed</div>
    <div class="demo" style="gap:32px;align-items:flex-start">

      <div style="display:flex;flex-direction:column;gap:8px">
        <span style="font-size:11px;color:var(--text-muted);margin-bottom:4px">Expanded &middot; 240px</span>
        <div style="width:240px;background:var(--bg-subtle);border:1px solid var(--border-divider);border-radius:8px;padding:10px;display:flex;flex-direction:column;gap:2px">
          <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--text-muted);padding:4px 10px 10px">Main</div>
          ${expandedItems}
        </div>
      </div>

      <div style="display:flex;flex-direction:column;gap:8px">
        <span style="font-size:11px;color:var(--text-muted);margin-bottom:4px">Collapsed &middot; 64px</span>
        <div style="width:64px;background:var(--bg-subtle);border:1px solid var(--border-divider);border-radius:8px;padding:10px;display:flex;flex-direction:column;gap:4px;align-items:center">
          ${collapsedItems}
        </div>
      </div>

    </div>
    <div class="demo-code"><span class="com">/* active nav item */</span>
<span class="kw">.nav-item.active</span> {
  <span class="fn">background</span>: <span class="str">var(--action-subtle)</span>;  <span class="com">/* &rarr; primary/100 */</span>
  <span class="fn">color</span>:       <span class="str">var(--action)</span>;         <span class="com">/* &rarr; primary/400 */</span>
}
<span class="kw">.nav-item</span> {
  <span class="fn">color</span>: <span class="str">var(--text-secondary)</span>;
}</div>
  </div>
`);
