/* ── SECTION: Prompt Playbook — How to use ───────────────────────────────────
   Intro, workflow instructions, and the reusable session context block.
   Edit this file when the context block format changes.
   ─────────────────────────────────────────────────────────────────────────── */

mountSection('prompts-intro', `
  <h2 class="sec-title">Prompt Playbook</h2>
  <p class="sec-desc">
    Pre-written AI prompts for recurring compliance platform screen types.
    Fill in the <span style="background:rgba(254,215,2,0.18);color:#7B5800;border-radius:3px;padding:1px 5px;font-family:'Roboto Mono',monospace;font-size:12px">[PLACEHOLDERS]</span>
    from your Project Intake before pasting into an AI session.
  </p>

  <div class="sub">
    <div class="sub-title">Workflow — do this at the start of every session</div>
    <ol style="padding-left:20px;display:flex;flex-direction:column;gap:8px;font-size:14px;color:var(--text-secondary);line-height:1.65">
      <li>Open your client&rsquo;s Notion intake page</li>
      <li>Copy the <strong style="color:var(--text-primary)">AI Context Block</strong> from the bottom of that page</li>
      <li>Paste it into the AI session (Claude Code, claude.ai, etc.)</li>
      <li>Paste <strong style="color:var(--text-primary)">DESIGN.md</strong> content (or tell the AI it&rsquo;s already loaded)</li>
      <li>Pick a prompt below, fill in the yellow placeholders, paste it</li>
    </ol>
  </div>

  <div class="sub">
    <div class="sub-title">Session context block — paste this before every prompt</div>
    <div class="callout callout-info">
      <strong>This block is in your Notion intake page.</strong>
      Copy it from the &ldquo;AI Context Block&rdquo; section at the bottom of the client&rsquo;s page.
      The template below shows what it looks like when filled in.
    </div>
    <div class="prompt-box">
      <div class="prompt-toolbar">
        <span class="pt-label">session-context — fill from Notion intake</span>
        <button class="copy-btn" onclick="copyPrompt(this,'ctx-block')">Copy template</button>
      </div>
      <div class="prompt-text" id="ctx-block">You are building screens for a compliance platform.

<span class="h">Reference files loaded:</span>
- DESIGN.md — visual system, token names, component rules
- Project Intake — client context below

<span class="h">Client context:</span>
Platform: <span class="ph">[one-sentence description]</span>
Client: <span class="ph">[name]</span> &middot; ID: <span class="ph">[short-code]</span>
Users: <span class="ph">[role]</span> &mdash; <span class="ph">[what they do in one line]</span>
Key entity: <span class="ph">[primary thing the platform manages]</span>
Compliance domains: <span class="ph">[e.g. CE marking, RoHS, Prop 65]</span>
Regulations: <span class="ph">[specific standards]</span>
Markets: <span class="ph">[e.g. EU, US, Australia]</span>

Primary colour: <span class="ph">#HEX</span> &rarr; maps to --action in DESIGN.md
Stack: <span class="ph">[e.g. React + Tailwind / plain HTML + CSS variables]</span>
Mobile: <span class="ph">[full responsive / tablet+ / desktop only]</span>

Screen priorities:
1. <span class="ph">[most important screen]</span>
2. <span class="ph">[second]</span>
3. <span class="ph">[third]</span>

<span class="h">Rules (always apply):</span>
- Use only semantic tokens from DESIGN.md (var(--action), var(--text-primary), etc.)
- Never hardcode hex values
- Every interactive element needs all 5 states: default, hover, active, disabled, focus-visible
- Status badges must always include the text label &mdash; colour alone is insufficient
- Tables use compact row height (32px) by default
- All dates: ISO 8601 (YYYY-MM-DD) in Roboto Mono</div>
    </div>
  </div>
`);
