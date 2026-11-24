/* Help Is Here: small progressive-enhancement script. Everything works without it except form submit feedback. */
(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  /* sticky header border */
  const bar = $('#bar');
  if (bar && 'IntersectionObserver' in window) {
    const sentinel = document.createElement('div');
    sentinel.setAttribute('aria-hidden', 'true');
    sentinel.style.cssText = 'position:absolute;top:0;left:0;width:1px;height:8px;pointer-events:none';
    document.body.prepend(sentinel);
    new IntersectionObserver(([e]) => bar.classList.toggle('scrolled', !e.isIntersecting)).observe(sentinel);
  }

  /* mobile menu */
  const btn = $('.menu-btn'), menu = $('#menu');
  if (btn && menu) {
    const set = (open) => {
      menu.classList.toggle('open', open);
      btn.setAttribute('aria-expanded', open);
      const use = btn.querySelector('use');
      if (use) use.setAttribute('href', open ? '#i-x' : '#i-menu');
    };
    btn.addEventListener('click', () => set(!menu.classList.contains('open')));
    addEventListener('keydown', (e) => { if (e.key === 'Escape' && menu.classList.contains('open')) { set(false); btn.focus(); } });
    $$('a', menu).forEach((a) => a.addEventListener('click', () => set(false)));
    document.addEventListener('click', (e) => { if (menu.classList.contains('open') && !menu.contains(e.target) && !btn.contains(e.target)) set(false); });
    matchMedia('(min-width:1001px)').addEventListener('change', (m) => m.matches && set(false));
  }

  /* reveal on scroll (content is visible without JS) */
  const els = $$('.reveal');
  if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion:reduce)').matches) {
    els.forEach((e) => e.classList.add('in'));
  } else {
    const io = new IntersectionObserver((es) => es.forEach((e) => {
      if (!e.isIntersecting) return;
      const t = e.target; t.classList.add('in'); io.unobserve(t);
      setTimeout(() => { t.classList.remove('reveal', 'in'); t.style.transitionDelay = ''; }, 900);
    }), { rootMargin: '0px 0px -8% 0px' });
    els.forEach((e, i) => { e.style.transitionDelay = (i % 4) * 70 + 'ms'; io.observe(e); });
  }

  /* lead forms: prefill from ?need= / ?nat=, validate, show confirmation */
  const qs = new URLSearchParams(location.search);
  $$('form[data-lead]').forEach((f) => {
    ['need', 'nat'].forEach((k) => {
      const v = qs.get(k);
      if (!v) return;
      if (k === 'nat') $$('input[name=nat]', f).forEach((c) => (c.checked = false));
      const c = $(`input[name=${k}][value="${CSS.escape(v)}"]`, f);
      if (c) c.checked = true;
    });
    // Care-needs chips only appear once "Elderly care" is chosen.
    const care = $('[data-care]', f), elderly = $('input[name=need][value=elderly]', f);
    if (care && elderly) {
      const sync = () => { care.hidden = !elderly.checked; };
      elderly.addEventListener('change', sync);
      sync();
    }
    const ok = f.nextElementSibling && f.nextElementSibling.matches('[data-ok]') ? f.nextElementSibling : null;
    const show = (el, on) => { if (el) el.hidden = !on; };
    const rules = { name: (v) => v.trim().length > 1, tel: (v) => v.replace(/[^\d]/g, '').length >= 8 };
    // Validate a field only after the person has finished with it (on blur), not while typing.
    ['name', 'tel'].forEach((k) => {
      const el = $(`input[name=${k}]`, f);
      el.addEventListener('blur', () => {
        if (!el.value) return;
        const good = rules[k](el.value);
        el.setAttribute('aria-invalid', !good);
        show(el.parentElement.querySelector('.err'), !good);
      });
      el.addEventListener('input', () => {
        if (el.getAttribute('aria-invalid') === 'true' && rules[k](el.value)) {
          el.setAttribute('aria-invalid', 'false');
          show(el.parentElement.querySelector('.err'), false);
        }
      });
    });
    f.addEventListener('submit', (e) => {
      e.preventDefault();
      const need = $('[data-need]', f);
      const anyNeed = $('input[name=need]:checked', f);
      const name = $('input[name=name]', f), tel = $('input[name=tel]', f);
      const nameOk = name.value.trim().length > 1;
      const telOk = tel.value.replace(/[^\d]/g, '').length >= 8;
      show($('.err', need), !anyNeed);
      name.setAttribute('aria-invalid', !nameOk); show(name.parentElement.querySelector('.err'), !nameOk);
      tel.setAttribute('aria-invalid', !telOk); show(tel.parentElement.querySelector('.err'), !telOk);
      const firstBad = !anyNeed ? $('input[name=need]', f) : !nameOk ? name : !telOk ? tel : null;
      if (firstBad) { firstBad.focus(); return; }
      if ($('input[name=company]', f).value) return; // honeypot
      // TODO: send FormData(f) to the lead endpoint / WhatsApp Business API / CRM.
      f.hidden = true;
      if (ok) { ok.style.display = 'block'; ok.focus(); }
    });
  });

  /* helper sign-up form */
  const jf = $('form[data-join]');
  if (jf) {
    const ok = jf.nextElementSibling;
    jf.addEventListener('submit', (e) => {
      e.preventDefault();
      const n = $('input[name=name]', jf), t = $('input[name=tel]', jf), a = $('input[name=age]', jf);
      const bad = [[n, n.value.trim().length > 1], [t, t.value.replace(/[^\d]/g, '').length >= 8], [a, +a.value >= 18 && +a.value <= 65]].filter(([, v]) => !v);
      [n, t, a].forEach((x) => { const isBad = bad.some(([b]) => b === x); x.setAttribute('aria-invalid', isBad); const er = x.parentElement.querySelector('.err'); if (er) er.hidden = !isBad; });
      if (bad.length) { bad[0][0].focus(); return; }
      jf.hidden = true; ok.style.display = 'block'; ok.focus();
    });
  }

  /* enquiry form */
  const ef = $('form[data-enq]');
  if (ef) {
    const ok = ef.nextElementSibling;
    ef.addEventListener('submit', (e) => {
      e.preventDefault();
      const n = $('input[name=name]', ef), m = $('textarea[name=message]', ef);
      const nOk = n.value.trim().length > 1, mOk = m.value.trim().length > 4;
      [[n, nOk], [m, mOk]].forEach(([x, v]) => { x.setAttribute('aria-invalid', !v); const er = x.parentElement.querySelector('.err'); if (er) er.hidden = v; });
      if (!nOk) return n.focus(); if (!mOk) return m.focus();
      ef.hidden = true; ok.style.display = 'block'; ok.focus();
    });
  }

  /* review filters */
  const fb = $$('[data-filter]');
  if (fb.length) {
    const cards = $$('[data-tags]');
    const apply = (key, push) => {
      const b = fb.find((x) => x.dataset.filter === key) || fb[0];
      const k = b.dataset.filter;
      fb.forEach((x) => x.setAttribute('aria-pressed', x === b));
      cards.forEach((c) => (c.hidden = k !== 'all' && !c.dataset.tags.split(' ').includes(k)));
      const n = $('[data-count]'); if (n) n.textContent = cards.filter((c) => !c.hidden).length;
      if (push) {
        const u = new URL(location.href);
        if (k === 'all') u.searchParams.delete('topic'); else u.searchParams.set('topic', k);
        history.replaceState(null, '', u);
      }
    };
    fb.forEach((b) => b.addEventListener('click', () => apply(b.dataset.filter, true)));
    const topic = qs.get('topic');
    if (topic) apply(topic, false);
  }
})();
