/* ── SHARED UTILITIES ────────────────────────────────────────────────────────
   copy()        — clipboard + toast
   mountSection()— append a <section> to #content
   ruleGrid()    — do/don't HTML builder
   ─────────────────────────────────────────────────────────────────────────── */

window.copy = function(val) {
  navigator.clipboard?.writeText(val).catch(() => {});
  const toast = document.getElementById('toast');
  toast.textContent = 'Copied ' + val;
  toast.classList.add('show');
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => toast.classList.remove('show'), 1800);
};

window.mountSection = function(id, html) {
  const sec = document.createElement('section');
  sec.className = 'section';
  sec.id = id;
  sec.innerHTML = html;
  document.getElementById('content').appendChild(sec);
};

// Copy prompt text (strips HTML tags via innerText, highlights button)
window.copyPrompt = function(btn, id) {
  const el = document.getElementById(id);
  if (!el) return;
  navigator.clipboard?.writeText(el.innerText).catch(() => {});
  btn.textContent = 'Copied!';
  btn.classList.add('copied');
  const toast = document.getElementById('toast');
  toast.textContent = 'Prompt copied';
  toast.classList.add('show');
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => {
    btn.textContent = 'Copy';
    btn.classList.remove('copied');
    toast.classList.remove('show');
  }, 2000);
};

window.ruleGrid = function(doCode, dontCode) {
  return `<div class="rule-grid">
    <div class="rule-box rule-do"><div class="rule-label">&#10003; Do</div><div class="rule-code">${doCode}</div></div>
    <div class="rule-box rule-dont"><div class="rule-label">&#10007; Don't</div><div class="rule-code">${dontCode}</div></div>
  </div>`;
};
