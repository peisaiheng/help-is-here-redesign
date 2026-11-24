// Shared layout, components and strings for the Help Is Here static site.
import { existsSync } from 'node:fs';

export const SITE = {
  name: 'Help Is Here',
  tel: '+6589222123',
  telShow: '(+65)\u00a08922\u00a02123',
  email: 'enquiry@hih.com.sg',
  url: 'https://hih.com.sg',
};

export const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/* ---------- strings ---------- */
export const T = {
  en: {
    htmlLang: 'en',
    nav: [['services.html', 'Our services'], ['our-maids.html', 'Our maids'], ['reviews.html', 'Reviews'], ['articles.html', 'Articles'], ['join-us.html', 'Join us']],
    cta: 'Find your helper', call: 'Call', menu: 'Menu', langLabel: '简体中文', skip: 'Skip to content',
    brand: 'Help Is Here home',
    trust: [
      ['i-shield', 'Screened by us first', 'Interviewed by our in-house recruiter'],
      ['i-users', '4+ years in Singapore', 'Experienced and independent'],
      ['i-video', 'Free video interviews', 'Meet your shortlist from home'],
      ['i-heart', 'Support after placement', '2 years included'],
    ],
    press: 'As featured on',
    stepsHead: ['How it works', 'From first message to helper at your door.', 'One Care Advisor stays with you from the first chat to deployment, and keeps checking in after.'],
    steps: [
      ['Tell us what you need', "Infant, elderly, language, nationality. We ask the follow-up questions, so you don't need the jargon."],
      ['Meet a curated shortlist', 'Every helper is already interviewed and screened by our in-house recruiter. You only see suitable ones.'],
      ['Interview by video', 'Your advisor joins you and asks the tough questions on your behalf, without prompting answers.'],
      ['We handle the rest', 'Paperwork, online documents and deployment straight to your home. Then we check in on the match.'],
    ],
    ctaBand: ['Ready when you are', 'Not sure where to start? <em>Start with a conversation.</em>', 'Tell us about your family. A Care Advisor will reply with honest advice and a shortlist, even if that means pointing you elsewhere.', 'Find your helper'],
    footer: {
      blurb: 'Specialised, customer-oriented maid agency in Singapore.',
      care: 'Care', maids: 'Our maids', visit: 'Visit us', hours: 'Opening hours', talk: 'Talk to us',
      hoursText: ['Weekdays 11.00am to 7.30pm', 'Weekends 11.00am to 6.00pm'],
      careLinks: [['infant-care.html', 'Infant care'], ['elderly-care.html', 'Elderly care'], ['mandarin-speaking-maid.html', 'Mandarin-speaking helpers'], ['transfer-maid.html', 'Transfer helpers']],
      maidLinks: [['filipino-maid.html', 'Filipino helpers'], ['indonesian-maid.html', 'Indonesian helpers'], ['myanmar-maid.html', 'Myanmar helpers'], ['join-us.html', 'Join us as a helper']],
      fine: 'Design prototype. Photography is AI-generated placeholder imagery and must be replaced with real HIH helpers and families before launch.',
      privacy: 'Privacy', terms: 'Terms',
    },
    form: {
      need: "I'm looking for", needOpts: [['infant', 'Infant care'], ['elderly', 'Elderly care'], ['mandarin', 'Mandarin-speaking'], ['general', 'General household'], ['pets', 'Pet care']],
      care: 'Care needs, if you know them', careNote: 'Optional. Share only what you are comfortable with.', careOpts: [['adl', 'Help with daily living'], ['dementia', 'Dementia-related behaviours'], ['mobility', 'Limited mobility'], ['tube', 'Stoma, catheter or feeding tube'], ['discharge', 'Coming home from hospital']],
      nat: 'Nationality preferred', natOpts: [['ph', 'Filipino'], ['id', 'Indonesian'], ['mm', 'Myanmar'], ['any', 'No preference']],
      name: 'Your name', tel: 'WhatsApp number', telPh: '+65 8123 4567', when: 'When do you need help to start?',
      whenOpts: ['As soon as possible', 'Within a month', 'In 1 to 3 months', 'Just exploring'],
      note: 'Anything we should know? (optional)', notePh: 'For example: baby due in March, or my mother uses a walking frame and speaks Teochew…',
      submit: 'Get my free care consult', fine: 'We only use your details to reply to you. No spam, no sharing.',
      needErr: 'Please choose at least one.', nameErr: 'Please enter your name.', telErr: 'Please enter a phone number we can reach you on.',
      okTitle: 'Thank you. Help is on its way.', okBody: "A Care Advisor will contact you within 1 business day. (Sample confirmation state: the form isn't connected to a backend yet.)", okBtn: 'Back to home', req: 'required',
    },
  },
  zh: {
    htmlLang: 'zh-Hans',
    nav: [['services.html', '我们的服务'], ['our-maids.html', '帮佣来源'], ['reviews.html', '客户评价'], ['articles.html', '文章'], ['join-us.html', '加入我们']],
    cta: '寻找帮佣', call: '致电', menu: '菜单', langLabel: 'English', skip: '跳到主要内容',
    brand: 'Help Is Here 首页',
    trust: [
      ['i-shield', '我们先行筛选', '由公司招聘专员逐一面试'],
      ['i-users', '4年以上新加坡经验', '经验丰富，能独立工作'],
      ['i-video', '免费视频面试', '在家就能认识候选帮佣'],
      ['i-heart', '到岗后持续支持', '包含两年支持'],
    ],
    press: '媒体报道',
    stepsHead: ['服务流程', '从第一次联系到帮佣上门。', '专属护理顾问全程陪伴您，从第一次沟通到帮佣上岗，之后也会持续跟进。'],
    steps: [
      ['告诉我们您的需求', '婴儿护理、长者护理、语言、国籍。我们会主动提问，您无需了解专业术语。'],
      ['认识精选候选人', '每位帮佣都已由公司招聘专员面谈并筛选，您只会看到合适的人选。'],
      ['视频面试', '顾问会陪同您，并代您提出关键问题，不会引导帮佣的回答。'],
      ['其余由我们处理', '文件手续与上门安排都由我们负责，之后也会继续关注配对情况。'],
    ],
    ctaBand: ['随时欢迎联系', '不知从何开始？<em>先聊一聊吧。</em>', '告诉我们您的家庭情况。护理顾问会给您坦诚的建议和候选名单，即使这意味着建议您考虑其他选择。', '寻找帮佣'],
    footer: {
      blurb: '新加坡专业、以客户为本的帮佣中介。',
      care: '护理服务', maids: '帮佣来源', visit: '到访我们', hours: '营业时间', talk: '联系我们',
      hoursText: ['周一至周五 上午11.00至晚上7.30', '周末 上午11.00至下午6.00'],
      careLinks: [['infant-care.html', '婴儿护理'], ['elderly-care.html', '长者护理'], ['mandarin-speaking-maid.html', '会讲华语的帮佣'], ['transfer-maid.html', '转换雇主帮佣']],
      maidLinks: [['filipino-maid.html', '菲律宾帮佣'], ['indonesian-maid.html', '印尼帮佣'], ['myanmar-maid.html', '缅甸帮佣'], ['join-us.html', '帮佣加入我们']],
      fine: '设计原型。图片为 AI 生成的占位图，上线前须替换为 Help Is Here 真实的帮佣与家庭照片。中文内容待母语人士校对。',
      privacy: '隐私政策', terms: '条款',
    },
    form: {
      need: '我需要', needOpts: [['infant', '婴儿护理'], ['elderly', '长者护理'], ['mandarin', '会讲华语'], ['general', '一般家务'], ['pets', '宠物照顾']],
      care: '照护需求（如已知）', careNote: '选填，仅分享您觉得方便的内容。', careOpts: [['adl', '日常起居协助'], ['dementia', '失智症相关行为'], ['mobility', '行动不便'], ['tube', '造口、导尿管或喂食管'], ['discharge', '出院返家']],
      nat: '偏好的国籍', natOpts: [['ph', '菲律宾'], ['id', '印尼'], ['mm', '缅甸'], ['any', '不限']],
      name: '您的姓名', tel: 'WhatsApp 号码', telPh: '+65 8123 4567', when: '您希望何时开始？',
      whenOpts: ['越快越好', '一个月内', '1至3个月内', '先了解一下'],
      note: '还有什么需要我们知道的？（选填）', notePh: '例如：宝宝三月出生，或者我母亲使用助行架，会讲潮州话…',
      submit: '获取免费护理咨询', fine: '我们仅会使用您的资料回复您，不会发送垃圾信息，也不会与第三方分享。',
      needErr: '请至少选择一项。', nameErr: '请输入您的姓名。', telErr: '请输入我们可以联系到您的电话号码。',
      okTitle: '谢谢，我们很快联系您。', okBody: '护理顾问会在一个工作日内联系您。（示范确认页面：表单尚未连接后台。）', okBtn: '返回首页', req: '必填',
    },
  },
};

/* ---------- icons ---------- */
const ICONS = {
  'i-check': '<path d="M20 6 9 17l-5-5"/>',
  'i-arrow': '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  'i-shield': '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
  'i-users': '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  'i-video': '<path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"/><rect x="2" y="6" width="14" height="12" rx="2"/>',
  'i-heart': '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
  'i-phone': '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>',
  'i-menu': '<path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/>',
  'i-x': '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  'i-map': '<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',
  'i-clock': '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
  'i-mail': '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
};
export const sprite = () => `<svg width="0" height="0" style="position:absolute" aria-hidden="true" focusable="false">${Object.entries(ICONS).map(([id, p]) => `<symbol id="${id}" viewBox="0 0 24 24">${p}</symbol>`).join('')}</svg>`;
export const ico = (id, cls = 'i') => `<svg class="${cls}" aria-hidden="true" focusable="false"><use href="#${id}"/></svg>`;

/* ---------- images ---------- */
export function img(name, alt, { w = 1600, h = 1066, lazy = true, sizes = '(min-width:1000px) 560px, 100vw', pos, cls, r = '' } = {}) {
  const base = `${r}assets/img/${name}`;
  const small = existsSync(new URL(`./assets/img/${name.replace('.jpg', '-800.jpg')}`, import.meta.url));
  const srcset = small ? ` srcset="${base.replace('.jpg', '-800.jpg')} 800w, ${base} ${w}w" sizes="${sizes}"` : '';
  return `<img${cls ? ` class="${cls}"` : ''} src="${base}"${srcset} alt="${esc(alt)}" width="${w}" height="${h}"${lazy ? ' loading="lazy" decoding="async"' : ' fetchpriority="high"'}${pos ? ` style="object-position:${pos}"` : ''}>`;
}

/* ---------- layout ---------- */
export const ZH_PAGES = new Set(['index.html', 'contact.html']);
export function layout({ lang = 'en', file, title, desc, body, ld, active, alt, noindex }) {
  const L = T[lang];
  const r = lang === 'zh' ? '../' : '';
  const here = lang === 'zh' ? `zh/${file}` : file;
  const altHref = lang === 'zh' ? (ZH_PAGES.has(file) ? `../${file}` : '../index.html') : (ZH_PAGES.has(file) ? `zh/${file}` : 'zh/index.html');
  const lk = (h) => (lang === 'zh' && !ZH_PAGES.has(h.split(/[?#]/)[0]) ? '../' + h : h);
  const nav = L.nav.map(([h, t]) => `<a href="${lk(h)}"${active === h ? ' aria-current="page"' : ''}${lang === 'zh' && lk(h) !== h ? ' hreflang="en" lang="en"' : ''}>${t}</a>`).join('');
  const f = L.footer;
  const li = (a) => a.map(([h, t]) => `<li><a href="${lk(h)}">${t}</a></li>`).join('');
  const html = `<!doctype html>
<html lang="${L.htmlLang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<meta name="theme-color" content="#ffffff"><meta name="color-scheme" content="light">
<meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(desc)}"><meta property="og:type" content="website"><meta property="og:image" content="${SITE.url}/assets/img/v2-hero-elder.jpg">
<link rel="canonical" href="${SITE.url}/${here}">
${ZH_PAGES.has(file) ? `<link rel="alternate" hreflang="en" href="${SITE.url}/${file}"><link rel="alternate" hreflang="zh-Hans" href="${SITE.url}/zh/${file}">` : ''}
<meta name="robots" content="noindex, nofollow">
<!-- Reference prototype build: remove the line above when this goes live. -->${noindex ? '' : ''}
<link rel="icon" href="${r}assets/img/logo.webp" type="image/webp">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700&family=Fraunces:ital,opsz,wght@0,9..144,600;1,9..144,600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="${r}assets/style.css">
<script>document.documentElement.classList.add('js')</script>
${ld ? `<script type="application/ld+json">${JSON.stringify(ld)}</script>` : ''}
</head>
<body${lang === 'zh' ? ' class="zh"' : ''}>
${sprite()}
<a class="skip" href="#main">${L.skip}</a>
<header class="bar" id="bar">
  <div class="wrap">
    <a class="logo" href="${lang === 'zh' ? 'index.html' : 'index.html'}" aria-label="${L.brand}"><img src="${r}assets/img/logo.webp" alt="Help Is Here" width="156" height="38"></a>
    <nav aria-label="Primary">${nav}</nav>
    <div class="right">
      <a class="lang" href="${altHref}" hreflang="${lang === 'zh' ? 'en' : 'zh-Hans'}" lang="${lang === 'zh' ? 'en' : 'zh-Hans'}">${L.langLabel}</a>
      <a class="tel" href="tel:${SITE.tel}">${ico('i-phone')}<span>${SITE.telShow}</span></a>
      <a class="btn sm" href="contact.html">${L.cta}</a>
      <button class="menu-btn" type="button" aria-expanded="false" aria-controls="menu" aria-label="${L.menu}">${ico('i-menu')}</button>
    </div>
  </div>
  <nav class="menu" id="menu" aria-label="Menu">
    ${nav}
    <div class="row"><a href="tel:${SITE.tel}">${ico('i-phone')}&nbsp;${SITE.telShow}</a><a href="${altHref}" hreflang="${lang === 'zh' ? 'en' : 'zh-Hans'}">${L.langLabel}</a></div>
    <a class="btn" href="contact.html">${L.cta}</a>
  </nav>
</header>

<main id="main">
${body}
</main>

<footer class="dark">
  <div class="wrap">
    <div><a class="lg" href="index.html"><img src="${r}assets/img/logo.webp" alt="Help Is Here" width="140" height="34"></a><p>${f.blurb}</p></div>
    <div><b>${f.care}</b><ul class="flist">${li(f.careLinks)}</ul><b style="margin-top:16px">${f.maids}</b><ul class="flist">${li(f.maidLinks)}</ul></div>
    <div><b>${f.visit}</b><address>90 Yishun Central<br>Khoo Teck Puat Hospital<br>Tower C, #01-08A<br>Singapore 768828</address><b style="margin-top:16px">${f.hours}</b>${f.hoursText.join('<br>')}</div>
    <div><b>${f.talk}</b><a href="tel:${SITE.tel}">${SITE.telShow}</a><br><a href="mailto:${SITE.email}">${SITE.email}</a></div>
    <p class="fine">${f.fine} <a href="#">${f.privacy}</a> · <a href="#">${f.terms}</a></p>
  </div>
</footer>
<script src="${r}assets/app.js" defer></script>
</body>
</html>
`;
  return polish(html);
}

// Typographic polish on visible text only (never inside tags, scripts or styles):
// curly apostrophes, and translate="no" on the brand name so auto-translate leaves it alone.
function polish(html) {
  const i = html.indexOf('<body');
  const head = html.slice(0, i);
  const body = html.slice(i).replace(/(<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>)|>([^<>]+)</g, (m, blk, txt) => {
    if (blk) return blk;
    const t = txt.replace(/(\w)'/g, '$1’').replace(/Help Is Here/g, '<span translate="no">Help Is Here</span>');
    return '>' + t + '<';
  });
  return head + body;
}

/* ---------- blocks ---------- */
export const trust = (L) => `<section class="trust" aria-label="${L === T.zh ? '为什么家庭信赖我们' : 'Why families trust us'}" style="padding-block:0 8px"><div class="wrap">${L.trust.map(([i, b, s]) => `<div class="t"><span class="ico">${ico(i)}</span><p><b>${b}</b><span>${s}</span></p></div>`).join('')}</div></section>`;

export const press = (L, r = '') => `<div class="press"><div class="wrap"><p>${L.press}</p>
<img src="${r}assets/img/press-expatliving.webp" alt="Expat Living" height="30" width="90" loading="lazy">
<img src="${r}assets/img/press-sassymama.webp" alt="Sassy Mama" height="30" width="90" loading="lazy">
<img src="${r}assets/img/press-newageparents.webp" alt="New Age Parents" height="30" width="93" loading="lazy">
<img src="${r}assets/img/press-sethlui.webp" alt="Seth Lui" height="30" width="90" loading="lazy"></div></div>`;

export const head = (eyebrow, h2, p, extra = '') => `<div class="head reveal"${extra}>${eyebrow ? `<span class="eyebrow">${eyebrow}</span>` : ''}<h2>${h2}</h2>${p ? `<p>${p}</p>` : ''}</div>`;

export const steps = (L) => `<section id="how"><div class="wrap">${head(...L.stepsHead)}
<div class="steps">${L.steps.map(([t, p], i) => `<article class="step reveal"><span class="n">${i + 1}</span><h3>${t}</h3><p>${p}</p></article>`).join('')}</div></div></section>`;

export const ctaBand = (L, href = 'contact.html') => {
  const [e, h, p, b] = L.ctaBand;
  return `<section class="cta dark"><div class="wrap"><div class="box reveal"><span class="eyebrow">${e}</span><h2>${h}</h2><p>${p}</p><div class="calls"><a class="btn warm" href="${href}">${b} ${ico('i-arrow', 'i arrow')}</a><a class="btn ghost" href="tel:${SITE.tel}">${L.call} ${SITE.telShow}</a></div></div></div></section>`;
};

export const ticks = (arr) => `<ul class="ticks">${arr.map((t) => `<li>${ico('i-check')}<span>${t}</span></li>`).join('')}</ul>`;

export const faq = (items) => `<div class="faq">${items.map(([q, a]) => `<details><summary>${q}</summary><p>${a}</p></details>`).join('')}</div>`;
export const faqLD = (items) => ({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: items.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a.replace(/<[^>]+>/g, '') } })) });

export function leadForm(L, { id = 'f', action = '#', heading, sub, sticky = true } = {}) {
  const F = L.form;
  return `<form class="card" id="${id}" data-lead action="${action}" method="post" novalidate aria-labelledby="${id}-t"${sticky ? '' : ' style="position:static"'}>
  <h2 id="${id}-t">${heading}</h2>
  <p class="sub">${sub}</p>
  <fieldset class="field" data-need aria-describedby="${id}-neederr">
    <legend>${F.need} <span class="req" aria-hidden="true">*</span></legend>
    <div class="chips">${F.needOpts.map(([v, t]) => `<label><input type="checkbox" name="need" value="${v}"><span>${t}</span></label>`).join('')}</div>
    <p class="err" id="${id}-neederr" role="alert" hidden>${F.needErr}</p>
  </fieldset>
  <fieldset class="field" data-care>
    <legend>${F.care}</legend>
    <div class="chips">${F.careOpts.map(([v, t]) => `<label><input type="checkbox" name="care" value="${v}"><span>${t}</span></label>`).join('')}</div>
    <p class="hint">${F.careNote}</p>
  </fieldset>
  <fieldset class="field">
    <legend>${F.nat}</legend>
    <div class="chips">${F.natOpts.map(([v, t]) => `<label><input type="checkbox" name="nat" value="${v}"${v === 'any' ? ' checked' : ''}><span>${t}</span></label>`).join('')}</div>
  </fieldset>
  <div class="row2">
    <div class="field"><label for="${id}-n">${F.name} <span class="req" aria-hidden="true">*</span></label><input id="${id}-n" name="name" type="text" autocomplete="name" spellcheck="false" required aria-describedby="${id}-ne"><p class="err" id="${id}-ne" role="alert" hidden>${F.nameErr}</p></div>
    <div class="field"><label for="${id}-t2">${F.tel} <span class="req" aria-hidden="true">*</span></label><input id="${id}-t2" name="tel" type="tel" inputmode="tel" autocomplete="tel" spellcheck="false" placeholder="${F.telPh}" required aria-describedby="${id}-te"><p class="err" id="${id}-te" role="alert" hidden>${F.telErr}</p></div>
  </div>
  <div class="field"><label for="${id}-w">${F.when}</label><select id="${id}-w" name="when">${F.whenOpts.map((o) => `<option>${o}</option>`).join('')}</select></div>
  <div class="field"><label for="${id}-m">${F.note}</label><textarea id="${id}-m" name="note" placeholder="${esc(F.notePh)}"></textarea></div>
  <input type="text" name="company" tabindex="-1" autocomplete="off" aria-hidden="true" style="position:absolute;left:-9999px">
  <button class="btn block" type="submit">${F.submit}</button>
  <p class="fine">${F.fine}</p>
</form>
<div class="card thanks" data-ok role="status" tabindex="-1"${sticky ? '' : ' style="position:static"'}><h2>${F.okTitle}</h2><p class="sub">${F.okBody}</p><a class="btn ghost" href="index.html">${F.okBtn}</a></div>`;
}

export const ldBusiness = () => ({
  '@context': 'https://schema.org', '@type': 'EmploymentAgency', name: 'Help Is Here', url: SITE.url, telephone: '+65 8922 2123', email: SITE.email,
  address: { '@type': 'PostalAddress', streetAddress: '90 Yishun Central, Khoo Teck Puat Hospital, Tower C, #01-08A', addressLocality: 'Singapore', postalCode: '768828', addressCountry: 'SG' },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '11:00', closes: '19:30' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday', 'Sunday'], opens: '11:00', closes: '18:00' },
  ],
});
