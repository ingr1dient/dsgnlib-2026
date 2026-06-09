/* ── SECTION: Toast / Notification ───────────────────────────────────────────
   Transient feedback messages in 4 variants: success, warn, error, info.
   Toasts are non-blocking and stack vertically. Always include an icon and
   a close button — never rely on colour alone as the only differentiator.
   ─────────────────────────────────────────────────────────────────────────── */

mountSection('toast-notification', `
  <h2 class="sec-title">Toast / Notification</h2>
  <p class="sec-desc">
    Transient feedback messages that appear at the edge of the viewport.
    Four semantic variants map directly to compliance lifecycle states.
    Always pair an icon with the colour variant &mdash; colour alone fails WCAG.
    4 variants: <code>toast-success | toast-warn | toast-error | toast-info</code> &middot; Stack via <code>.ds-toast-stack</code> &middot; Icon + close button mandatory &middot; Auto-dismiss 5s in production.
  </p>

  <div class="sub">
    <div class="sub-title">Variants</div>
    <div class="demo demo-col">
      <div class="ds-toast-stack">

        <div class="ds-toast toast-success">
          <span class="ds-toast-icon">&#10003;</span>
          <div>
            <div class="ds-toast-title">Certificate uploaded successfully</div>
            <div class="ds-toast-body">ISO 9001 Certificate 2024 is now attached to Product A.</div>
          </div>
          <span class="ds-toast-close" aria-label="Dismiss">&times;</span>
        </div>

        <div class="ds-toast toast-warn">
          <span class="ds-toast-icon">&#9888;</span>
          <div>
            <div class="ds-toast-title">Renewal due in 14 days</div>
            <div class="ds-toast-body">CE Marking certificate for Product B expires on 2026-06-23.</div>
          </div>
          <span class="ds-toast-close" aria-label="Dismiss">&times;</span>
        </div>

        <div class="ds-toast toast-error">
          <span class="ds-toast-icon">&#10005;</span>
          <div>
            <div class="ds-toast-title">Upload failed &mdash; invalid format</div>
            <div class="ds-toast-body">Only PDF and PNG files are accepted. Please try again.</div>
          </div>
          <span class="ds-toast-close" aria-label="Dismiss">&times;</span>
        </div>

        <div class="ds-toast toast-info">
          <span class="ds-toast-icon">&#8505;</span>
          <div>
            <div class="ds-toast-title">3 new compliance requirements added</div>
            <div class="ds-toast-body">EU Regulation 2026/114 has been added to your watchlist.</div>
          </div>
          <span class="ds-toast-close" aria-label="Dismiss">&times;</span>
        </div>

      </div>
    </div>
  </div>

  <div class="sub">
    <div class="sub-title">Code</div>
    <div class="demo-code"><span class="com">/* Wrap all toasts in a stack container */</span>
&lt;<span class="kw">div</span> <span class="fn">class</span>=<span class="str">"ds-toast-stack"</span>&gt;

  &lt;<span class="kw">div</span> <span class="fn">class</span>=<span class="str">"ds-toast toast-success"</span>&gt;
    &lt;<span class="kw">span</span> <span class="fn">class</span>=<span class="str">"ds-toast-icon"</span>&gt;&#10003;&lt;/<span class="kw">span</span>&gt;
    &lt;<span class="kw">div</span>&gt;
      &lt;<span class="kw">div</span> <span class="fn">class</span>=<span class="str">"ds-toast-title"</span>&gt;Certificate uploaded successfully&lt;/<span class="kw">div</span>&gt;
      &lt;<span class="kw">div</span> <span class="fn">class</span>=<span class="str">"ds-toast-body"</span>&gt;ISO 9001 Certificate is now attached.&lt;/<span class="kw">div</span>&gt;
    &lt;/<span class="kw">div</span>&gt;
    &lt;<span class="kw">span</span> <span class="fn">class</span>=<span class="str">"ds-toast-close"</span>&gt;&amp;times;&lt;/<span class="kw">span</span>&gt;
  &lt;/<span class="kw">div</span>&gt;

  <span class="com">/* Swap variant class: toast-success | toast-warn | toast-error | toast-info */</span>

&lt;/<span class="kw">div</span>&gt;</div>
  </div>

  <div class="sub">
    <div class="sub-title">Rule &mdash; icon is mandatory; close button is mandatory</div>
    ${ruleGrid(
      `&lt;div class="ds-toast toast-error"&gt;\n  &lt;span class="ds-toast-icon"&gt;&amp;#10005;&lt;/span&gt;\n  &lt;div&gt;\n    &lt;div class="ds-toast-title"&gt;Upload failed&lt;/div&gt;\n    &lt;div class="ds-toast-body"&gt;Invalid format.&lt;/div&gt;\n  &lt;/div&gt;\n  &lt;span class="ds-toast-close"&gt;&amp;times;&lt;/span&gt;\n&lt;/div&gt;`,
      `&lt;div class="ds-toast toast-error"&gt;\n  Upload failed\n&lt;/div&gt;\n&lt;!-- No icon, no close button --&gt;\n&lt;!-- Colour alone fails WCAG --&gt;&nbsp;`
    )}
  </div>
`);
