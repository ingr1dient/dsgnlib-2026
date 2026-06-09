/* ── SECTION: Modal / Dialog ──────────────────────────────────────────────────
   Focused overlay dialogs for confirmation, destructive actions, and detail
   views. Always include a title, close button, and a clear footer action pair.
   In the demo the modal is rendered inline — no fixed overlay.
   ─────────────────────────────────────────────────────────────────────────── */

mountSection('modal', `
  <h2 class="sec-title">Modal / Dialog</h2>
  <p class="sec-desc">
    Focused dialogs that interrupt workflow to confirm an action or surface
    critical information. Always provide an explicit cancel path. Destructive
    actions use a danger-coloured confirm button to signal irreversibility.
    Width: 520px (max 100%) &middot; Radius: 16px &middot; Structure: head / body / footer &middot; Cancel always present &middot; Destructive confirm: <code>var(--d500)</code>.
  </p>

  <div class="sub">
    <div class="sub-title">Confirm submission</div>
    <div class="demo">
      <div class="ds-modal">
        <div class="ds-modal-head">
          <span class="ds-modal-title">Confirm Submission</span>
          <button class="ds-modal-close" aria-label="Close">&times;</button>
        </div>
        <div class="ds-modal-body">
          Submit this record for compliance review? This cannot be undone.
          Once submitted, the record will be locked and sent to the assigned
          compliance reviewer for assessment.
        </div>
        <div class="ds-modal-foot">
          <button class="btn btn-ghost btn-md">Cancel</button>
          <button class="btn btn-primary btn-md">Submit</button>
        </div>
      </div>
    </div>
  </div>

  <div class="sub">
    <div class="sub-title">Destructive variant &mdash; Delete certificate</div>
    <div class="demo">
      <div class="ds-modal">
        <div class="ds-modal-head">
          <span class="ds-modal-title">Delete Certificate</span>
          <button class="ds-modal-close" aria-label="Close">&times;</button>
        </div>
        <div class="ds-modal-body">
          Permanently delete <strong>ISO 9001 Certificate 2024</strong> for Product A?
          This action cannot be undone. Any linked compliance records will lose
          their certificate reference.
        </div>
        <div class="ds-modal-foot">
          <button class="btn btn-ghost btn-md">Cancel</button>
          <button class="btn btn-primary btn-md" style="background:var(--d500)">Delete Certificate</button>
        </div>
      </div>
    </div>
  </div>

  <div class="sub">
    <div class="sub-title">Code</div>
    <div class="demo-code">&lt;<span class="kw">div</span> <span class="fn">class</span>=<span class="str">"ds-modal"</span>&gt;

  &lt;<span class="kw">div</span> <span class="fn">class</span>=<span class="str">"ds-modal-head"</span>&gt;
    &lt;<span class="kw">span</span> <span class="fn">class</span>=<span class="str">"ds-modal-title"</span>&gt;Confirm Submission&lt;/<span class="kw">span</span>&gt;
    &lt;<span class="kw">button</span> <span class="fn">class</span>=<span class="str">"ds-modal-close"</span> <span class="fn">aria-label</span>=<span class="str">"Close"</span>&gt;&amp;times;&lt;/<span class="kw">button</span>&gt;
  &lt;/<span class="kw">div</span>&gt;

  &lt;<span class="kw">div</span> <span class="fn">class</span>=<span class="str">"ds-modal-body"</span>&gt;
    Submit this record for compliance review? This cannot be undone.
  &lt;/<span class="kw">div</span>&gt;

  &lt;<span class="kw">div</span> <span class="fn">class</span>=<span class="str">"ds-modal-foot"</span>&gt;
    &lt;<span class="kw">button</span> <span class="fn">class</span>=<span class="str">"btn btn-ghost btn-md"</span>&gt;Cancel&lt;/<span class="kw">button</span>&gt;
    &lt;<span class="kw">button</span> <span class="fn">class</span>=<span class="str">"btn btn-primary btn-md"</span>&gt;Submit&lt;/<span class="kw">button</span>&gt;
    <span class="com">&lt;!-- Destructive: add style="background:var(--d500)" to confirm btn --&gt;</span>
  &lt;/<span class="kw">div</span>&gt;

&lt;/<span class="kw">div</span>&gt;</div>
  </div>

  <div class="sub">
    <div class="sub-title">Rule &mdash; always pair a cancel path with a confirm action</div>
    ${ruleGrid(
      `&lt;div class="ds-modal-foot"&gt;\n  &lt;button class="btn btn-ghost btn-md"&gt;\n    Cancel\n  &lt;/button&gt;\n  &lt;button class="btn btn-primary btn-md"&gt;\n    Submit\n  &lt;/button&gt;\n&lt;/div&gt;`,
      `&lt;div class="ds-modal-foot"&gt;\n  &lt;button class="btn btn-primary btn-md"&gt;\n    Submit\n  &lt;/button&gt;\n&lt;/div&gt;\n&lt;!-- No cancel path traps the user --&gt;&nbsp;`
    )}
  </div>
`);
