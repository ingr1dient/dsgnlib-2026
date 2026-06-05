/* ── SECTION: Client Theming ─────────────────────────────────────────────────
   Minimum overrides needed to create a client theme, and what NOT to touch.
   Edit this file to update theming guidance.
   ─────────────────────────────────────────────────────────────────────────── */

mountSection('client-theming', `
  <h2 class="sec-title">Client Theming</h2>
  <p class="sec-desc">
    Each client overrides only semantic tokens.
    Primitives are the source of truth &mdash; never edit them in a client theme file.
    Never change component code per client &mdash; override tokens, not markup.
  </p>

  <div class="sub">
    <div class="sub-title">Minimum required overrides</div>
    <div class="code-block"><span class="com">/* DESIGN.&lt;client-id&gt;.css */</span>
:root {
  <span class="com">/* 1. Replace the primary ramp &mdash; all action/focus/link tokens cascade */</span>
  <span class="fn">--p100</span>: <span class="str">#client-lightest</span>;
  <span class="fn">--p200</span>: <span class="str">#client-light</span>;
  <span class="fn">--p300</span>: <span class="str">#client-mid</span>;
  <span class="fn">--p400</span>: <span class="str">#client-base</span>;   <span class="com">/* &rarr; --action */</span>
  <span class="fn">--p500</span>: <span class="str">#client-dark</span>;

  <span class="com">/* 2. Optional: adjust background tint (Decision D3) */</span>
  <span class="fn">--b100</span>: <span class="str">#client-bg</span>;      <span class="com">/* &rarr; --bg-page */</span>
}</div>
    <p class="muted" style="margin-top:12px">
      Updating <code>--p100</code>&ndash;<code>--p500</code> cascades to:
      <code>--action</code>, <code>--action-hover</code>, <code>--action-active</code>,
      <code>--action-subtle</code>, <code>--border-focus</code>, <code>--text-link</code>.
    </p>
  </div>

  <div class="sub">
    <div class="sub-title">What NOT to override</div>
    <div style="background:var(--d100);border:1px solid var(--d200);border-radius:8px;padding:16px 20px">
      <ul style="list-style:none;display:flex;flex-direction:column;gap:8px">
        <li style="font-size:13px;color:var(--d500)">&#10007; Danger/Warning ramps &mdash; functional colours, not brand colours</li>
        <li style="font-size:13px;color:var(--d500)">&#10007; Neutral/Grey ramps &mdash; changing these breaks text contrast ratios</li>
        <li style="font-size:13px;color:var(--d500)">&#10007; Typography scale &mdash; heading/body sizes are fixed in the base system</li>
        <li style="font-size:13px;color:var(--d500)">&#10007; Component structure &mdash; override tokens only, never re-implement a component</li>
      </ul>
    </div>
  </div>
`);
