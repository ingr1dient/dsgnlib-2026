/* ── SECTION: Progress Bar ────────────────────────────────────────────────────
   Linear progress indicators for compliance coverage, checklist completion,
   and dashboard summary cards. Four semantic fill variants and three sizes.
   ─────────────────────────────────────────────────────────────────────────── */

mountSection('progress', `
  <h2 class="sec-title">Progress Bar</h2>
  <p class="sec-desc">
    Linear indicators for compliance coverage scores, checklist completion,
    and requirement fulfilment ratios. Use on dashboard cards and checklist
    pages. Always include a visible label and percentage &mdash; never rely
    on bar width alone to convey the value.
    Track: 8px (default) &middot; 4px (<code>.ds-progress-sm</code>) &middot; 12px (<code>.ds-progress-lg</code>) &middot; 4 fill variants: default &middot; <code>p-success</code> &middot; <code>p-warn</code> &middot; <code>p-danger</code>.
  </p>

  <div class="sub">
    <div class="sub-title">Semantic variants</div>
    <div class="demo demo-col">

      <!-- 1. Default blue 72% -->
      <div>
        <div class="ds-progress-label">
          <span>Certificate coverage</span>
          <span>72%</span>
        </div>
        <div class="ds-progress-track">
          <div class="ds-progress-fill" style="width:72%"></div>
        </div>
      </div>

      <!-- 2. Success green 100% -->
      <div>
        <div class="ds-progress-label">
          <span>All requirements met</span>
          <span>100%</span>
        </div>
        <div class="ds-progress-track">
          <div class="ds-progress-fill p-success" style="width:100%"></div>
        </div>
      </div>

      <!-- 3. Warning 45% -->
      <div>
        <div class="ds-progress-label">
          <span>Review in progress</span>
          <span>45%</span>
        </div>
        <div class="ds-progress-track">
          <div class="ds-progress-fill p-warn" style="width:45%"></div>
        </div>
      </div>

      <!-- 4. Danger 18% -->
      <div>
        <div class="ds-progress-label">
          <span>Critical: action required</span>
          <span>18%</span>
        </div>
        <div class="ds-progress-track">
          <div class="ds-progress-fill p-danger" style="width:18%"></div>
        </div>
      </div>

    </div>
  </div>

  <div class="sub">
    <div class="sub-title">Size variants</div>
    <div class="demo demo-col">

      <div>
        <div class="ds-progress-label"><span>Large (12px track)</span><span>60%</span></div>
        <div class="ds-progress-lg">
          <div class="ds-progress-track">
            <div class="ds-progress-fill" style="width:60%"></div>
          </div>
        </div>
      </div>

      <div>
        <div class="ds-progress-label"><span>Default (8px track)</span><span>60%</span></div>
        <div class="ds-progress-track">
          <div class="ds-progress-fill" style="width:60%"></div>
        </div>
      </div>

      <div>
        <div class="ds-progress-label"><span>Small (4px track)</span><span>60%</span></div>
        <div class="ds-progress-sm">
          <div class="ds-progress-track">
            <div class="ds-progress-fill" style="width:60%"></div>
          </div>
        </div>
      </div>

    </div>
  </div>

  <div class="sub">
    <div class="sub-title">Compliance use case note</div>
    <p style="font-size:13px;color:var(--text-secondary);line-height:1.65;max-width:640px">
      Use <strong>default (blue)</strong> for general coverage metrics on dashboard cards.
      Switch to <strong>p-success</strong> when a product reaches 100% compliance.
      Use <strong>p-warn</strong> for in-progress reviews (typically 30&ndash;79%).
      Use <strong>p-danger</strong> for critical gaps below 30% or when action is overdue.
      On checklist pages, pair each progress bar with a row count label
      (&ldquo;18 of 24 requirements complete&rdquo;) for screen-reader clarity.
    </p>
  </div>

  <div class="sub">
    <div class="sub-title">Code</div>
    <div class="demo-code"><span class="com">&lt;!-- Label row (always include) --&gt;</span>
&lt;<span class="kw">div</span> <span class="fn">class</span>=<span class="str">"ds-progress-label"</span>&gt;
  &lt;<span class="kw">span</span>&gt;Certificate coverage&lt;/<span class="kw">span</span>&gt;
  &lt;<span class="kw">span</span>&gt;72%&lt;/<span class="kw">span</span>&gt;
&lt;/<span class="kw">div</span>&gt;

<span class="com">&lt;!-- Track + fill --&gt;</span>
&lt;<span class="kw">div</span> <span class="fn">class</span>=<span class="str">"ds-progress-track"</span>&gt;
  &lt;<span class="kw">div</span> <span class="fn">class</span>=<span class="str">"ds-progress-fill"</span> <span class="fn">style</span>=<span class="str">"width:72%"</span>&gt;&lt;/<span class="kw">div</span>&gt;
&lt;/<span class="kw">div</span>&gt;

<span class="com">/* Fill variants */</span>
<span class="kw">.ds-progress-fill</span>           <span class="com">/* default — var(--action) blue */</span>
<span class="kw">.ds-progress-fill.p-success</span> <span class="com">/* green  #16A34A */</span>
<span class="kw">.ds-progress-fill.p-warn</span>    <span class="com">/* yellow var(--w400) */</span>
<span class="kw">.ds-progress-fill.p-danger</span>  <span class="com">/* red    var(--d400) */</span>

<span class="com">/* Size wrappers (wrap the track, not the fill) */</span>
<span class="kw">.ds-progress-lg</span> <span class="com">/* 12px track */</span>
                 <span class="com">/* default: 8px — no wrapper needed */</span>
<span class="kw">.ds-progress-sm</span> <span class="com">/* 4px  track */</span></div>
  </div>

  <div class="sub">
    <div class="sub-title">Rule &mdash; always include a visible label and percentage value</div>
    ${ruleGrid(
      `&lt;div class="ds-progress-label"&gt;\n  &lt;span&gt;Certificate coverage&lt;/span&gt;\n  &lt;span&gt;72%&lt;/span&gt;\n&lt;/div&gt;\n&lt;div class="ds-progress-track"&gt;\n  &lt;div class="ds-progress-fill"\n       style="width:72%"&gt;\n  &lt;/div&gt;\n&lt;/div&gt;`,
      `&lt;div class="ds-progress-track"&gt;\n  &lt;div class="ds-progress-fill"\n       style="width:72%"&gt;\n  &lt;/div&gt;\n&lt;/div&gt;\n&lt;!-- No label — value is invisible\n     to screen readers --&gt;&nbsp;`
    )}
  </div>
`);
