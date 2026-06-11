/* ── SECTION: Input ──────────────────────────────────────────────────────────
   Search/text input with 4 states: default, focus, error, disabled.
   Edit this file to update input documentation.
   ─────────────────────────────────────────────────────────────────────────── */

mountSection('input', `
  <h2 class="sec-title">Input / Search</h2>
  <p class="sec-desc">
    Height 40px (md). Radius 8px (Decision D2 resolved 2026-06-11).
    Placeholder: <code>text-muted</code>.
    Always pair with a visible <code>label</code> text-style label above.
  </p>

  <div class="sub">
    <div class="sub-title">States</div>
    <div class="demo demo-col" style="gap:20px">
      <div class="flex gap-16 items-c">
        <input class="input" placeholder="Search Records" type="text">
        <span class="muted">default &mdash; <code>border-default</code></span>
      </div>
      <div class="flex gap-16 items-c">
        <input class="input" placeholder="Search Records" type="text"
          style="border-color:var(--border-focus);box-shadow:0 0 0 3px rgba(40,130,255,0.14)">
        <span class="muted">focus &mdash; <code>border-focus</code> + ring</span>
      </div>
      <div class="flex gap-16 items-c">
        <input class="input i-err" value="invalid@example" type="text">
        <span class="muted">error &mdash; <code>border-error</code></span>
      </div>
      <div class="flex gap-16 items-c">
        <input class="input" placeholder="Disabled" disabled>
        <span class="muted">disabled &mdash; <code>bg-muted</code></span>
      </div>
    </div>
    <div class="demo-code"><span class="kw">.input</span> {
  <span class="fn">height</span>: <span class="str">40px</span>; <span class="fn">padding</span>: <span class="str">0 16px</span>;
  <span class="fn">background</span>: <span class="str">var(--surface)</span>;
  <span class="fn">border</span>: <span class="str">1.5px solid var(--border-default)</span>;
  <span class="fn">border-radius</span>: <span class="str">8px</span>;
}
<span class="kw">.input:focus</span>  { <span class="fn">border-color</span>: <span class="str">var(--border-focus)</span>; <span class="fn">box-shadow</span>: <span class="str">0 0 0 3px rgba(40,130,255,0.14)</span>; }
<span class="kw">.input.error</span>  { <span class="fn">border-color</span>: <span class="str">var(--border-error)</span>; }
<span class="kw">.input:disabled</span> { <span class="fn">background</span>: <span class="str">var(--bg-muted)</span>; <span class="fn">cursor</span>: <span class="str">not-allowed</span>; }</div>
  </div>
`);
