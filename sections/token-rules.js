/* ── SECTION: Token Rules ────────────────────────────────────────────────────
   The three non-negotiable rules for token usage.
   Edit this file to add/update usage rules.
   ─────────────────────────────────────────────────────────────────────────── */

mountSection('token-rules', `
  <h2 class="sec-title">Token Usage Rules</h2>
  <p class="sec-desc">
    These rules are the contract between design and code.
    Breaking them means a client&rsquo;s brand colour can bleed into another client&rsquo;s components.
  </p>

  <div class="sub">
    <div class="sub-title">Rule 1 &mdash; Always bind to semantic tokens</div>
    ${ruleGrid(
      'color:        var(--text-primary);\nbackground:   var(--bg-page);\nborder-color: var(--border-default);',
      'color:        #1A1A1A;\nbackground:   #FAFAFA;\nborder-color: #CCCCCC;'
    )}
  </div>

  <div class="sub">
    <div class="sub-title">Rule 2 &mdash; Never reference primitive tokens in components</div>
    ${ruleGrid(
      '/* semantic layer */\ncolor:      var(--text-primary);\nbackground: var(--s-danger-bg);',
      '/* bypasses semantic layer */\ncolor:      var(--t500);\nbackground: var(--d100);'
    )}
  </div>

  <div class="sub">
    <div class="sub-title">Rule 3 &mdash; All interactive elements require all 5 states</div>
    <p class="muted" style="margin-bottom:16px">
      Every clickable/focusable element must define:
      <code>default</code>, <code>hover</code>, <code>active</code>, <code>disabled</code>, <code>focus-visible</code>.
      Missing states break keyboard navigation and screen-reader accessibility.
    </p>
    <div class="code-block"><span class="kw">.btn</span>                { <span class="fn">background</span>: <span class="str">var(--action)</span>; }
<span class="kw">.btn:hover</span>          { <span class="fn">background</span>: <span class="str">var(--action-hover)</span>; }
<span class="kw">.btn:active</span>         { <span class="fn">background</span>: <span class="str">var(--action-active)</span>; }
<span class="kw">.btn:disabled</span>       { <span class="fn">background</span>: <span class="str">var(--action-disabled)</span>; <span class="fn">cursor</span>: <span class="str">not-allowed</span>; }
<span class="kw">.btn:focus-visible</span>  { <span class="fn">outline</span>: <span class="str">2px solid var(--border-focus)</span>; <span class="fn">outline-offset</span>: <span class="str">2px</span>; }</div>
  </div>
`);
