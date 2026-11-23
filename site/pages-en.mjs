import { layout, T, img, ico, trust, press, head, steps, ctaBand, ticks, faq, faqLD, leadForm, ldBusiness, esc, SITE } from './lib.mjs';

const L = T.en;
const arrow = ico('i-arrow', 'i arrow');
const BASE = { lang: 'en' };

/* ---------- shared data (all copy taken from hih.com.sg unless flagged) ---------- */
export const ARTICLES = [
  ['How to prepare for the arrival of a new household helper', 'https://hih.com.sg/how-to-prepare-for-the-arrival-of-a-new-household-helper/', 'Getting started', ''],
  ['How helpers can support elderly or disabled family members', 'https://hih.com.sg/how-maids-can-support-elderly-or-disabled-family-members/', 'Elderly care', 'warm'],
  ['Bed-sharing with your baby', 'https://hih.com.sg/bed-sharing-with-your-baby/', 'Infant care', ''],
  ['Essential tips for managing household helpers effectively', 'https://hih.com.sg/essential-tips-for-managing-household-helpers-effectively/', 'Getting started', ''],
  ['How to handle the change when replacing household staff', 'https://hih.com.sg/how-to-handle-the-change-when-replacing-household-staff/', 'Getting started', ''],
  ['The role of foreign domestic helpers in modern households', 'https://hih.com.sg/the-role-of-foreign-domestic-helpers-in-modern-households/', 'Good to know', 'warm'],
  ['How domestic helpers can enhance your family’s lifestyle', 'https://hih.com.sg/how-domestic-helpers-can-enhance-your-familys-lifestyle/', 'Good to know', 'warm'],
  ['Enhancing home efficiency with experienced household helpers', 'https://hih.com.sg/enhancing-home-efficiency-with-experienced-household-helpers/', 'Good to know', 'warm'],
  ['How to renew an Indonesian passport in Singapore', 'https://hih.com.sg/how-to-renew-indonesian-passport-in-singapore/', 'For helpers', ''],
];

// Verbatim excerpts from Google reviews shown on hih.com.sg. tags: infant elderly first mandarin
export const REVIEWS = [
  ['Very professional and no hard selling of helpers on hand.', 'Jesslyn K.', 'Parent of a 14-month-old', 'infant first'],
  ['My wife and I recently welcomed a newborn and worked with a dozen different helper agencies—this one was by far the absolute best.', 'Austin H.', 'New parent', 'infant'],
  ['They make an effort to find and recommend a suitable helper who matches what we are looking for, which gives us great peace of mind.', 'Jo A.', '', ''],
  ['Help Is Here was the only one that impressed me with their high level of professionalism and customer service.', 'Chung', 'After contacting multiple agencies', ''],
  ['I am really grateful and happy that I finally got someone to help me to take care of my mum who has parkinson disease and mild dementia.', 'Jane L.', 'Eldercare', 'elderly'],
  ['Absolutely hassle free through the day of helper deployment. Chose our helper on 25th October through video conferencing. Received our helper on the 3rd of November. 9 DAYS!', 'Asilah S.', 'First-time employer', 'first'],
  ['From the first meeting, Care Consultants Pei and Thiri heard and understood our worries and patiently addressed many of our concerns.', 'Christine K.', 'Caring for a 90-year-old mother', 'elderly'],
  ['What really impressed me was HIH’s process — they pre-screen and interview the helpers first, and only send profiles that are truly suitable to the employer’s criteria.', 'joey L.', '', ''],
  ['Some good advice and support was also given along the journey of hiring a helper as this was our first time.', 'Alarice T.', 'Eldercare, first-time employer', 'elderly first'],
  ['The entire process from interviews, paperwork to deployment of helper was completed within two weeks.', 'Serene P.', 'Mandarin-speaking caregiver for her father', 'elderly mandarin'],
  ['Managed to get me a suitable helper within a very short period of time. Good experience.', 'M L.', '', ''],
  ['Excellent service from staff. Assist you promptly with any questions and even assist you what to prepare.', 'Mok Gie K.', 'First-time employer', 'first'],
];

const rc = (q, who, role = '', tags = '') => `<figure class="rc" data-tags="${tags}"><blockquote>“${esc(q)}”</blockquote><cite><b>${esc(who)}</b>${esc(role ? role + ' · ' : '')}Google review</cite></figure>`;

const guideCards = (n = 3) => `<div class="guides">${ARTICLES.slice(0, n).map(([t, u, tag, w]) => `<a class="g ${w} reveal" href="${u}"><span class="tag">${tag}</span><h3>${t}</h3><span class="go">Read the guide ${arrow}</span></a>`).join('')}</div>`;

export const crumbs = (...items) => `<nav class="crumbs" aria-label="Breadcrumb"><a href="index.html">Home</a>${items.map(([h, t]) => `<span aria-hidden="true">/</span>${h ? `<a href="${h}">${t}</a>` : `<span aria-current="page" style="margin:0">${t}</span>`}`).join('')}</nav>`;

export const phead = ({ eyebrow, h1, lead, photo, calls = '', c }) => `<section class="phead${photo ? '' : ' solo'}"><div class="wrap"><div>${c}<span class="eyebrow">${eyebrow}</span><h1>${h1}</h1><p class="lead">${lead}</p>${calls ? `<div class="calls">${calls}</div>` : ''}</div>${photo ? `<div class="photo">${photo}</div>` : ''}</div></section>`;

export const show = ({ rev, eyebrow, h3, p, list, btn, btnHref, link, main, mini }) => `<article class="show${rev ? ' rev' : ''} reveal">
${rev ? '' : `<div class="pics">${main}</div>`}
<div class="txt"><span class="eyebrow">${eyebrow}</span><h3>${h3}</h3><p>${p}</p>${ticks(list)}<div class="go"><a class="btn" href="${btnHref}">${btn}</a>${link ? `<a class="text" href="${link[0]}">${link[1]}</a>` : ''}</div></div>
${rev ? `<div class="pics">${main}${mini || ''}</div>` : ''}</article>`;

export const needLink = (n) => `contact.html?need=${n}`;

/* ---------- FAQ (answers built only from facts on the live site) ---------- */
const FAQ = [
  ['How do you select your helpers?', 'Every helper is personally assessed and selected by our in-house recruiter. We check their background, work and education history, and hold a one-to-one interview to understand their skills in cooking, cleaning, babycare and eldercare, so we can recommend them to the family who can best use what they are good at.'],
  ['What happens after I send the form?', 'A Care Advisor will contact you within 1 business day to explain how we work and learn more about your situation. If we are not the right fit, we will say so.'],
  ['Which nationalities can I choose from?', 'Our helpers come mainly from the Philippines, Indonesia and Myanmar. If you prefer another nationality, tell us and we will do our best to find a suitable helper.'],
  ['What training do your helpers have?', 'Helpers are equipped with the necessary skills and relevant experience before work commences. They also attend an enhancement training course to standardise their home-care skills, including infant care and eldercare.'],
  ['Do you help with paperwork?', 'Yes. We handle the paperwork, work permit and insurance steps so you do not have to, and we keep you updated at important stages without bothering you when we do not need to.'],
  ['Do you support families after the helper starts?', 'Yes. Our team works with you throughout the employment period, and checks in on how the match is going.'],
];

/* ====================================================== PAGES */
const pages = {};

/* ---------- Home ---------- */
pages['index.html'] = layout({
  ...BASE, file: 'index.html', active: 'index.html',
  title: 'Help Is Here | Trusted maid agency in Singapore for infant and elderly care',
  desc: "Pre-screened domestic helpers with 4+ years' Singapore experience, matched to your family by a Care Advisor who listens first. Free care consult.",
  ld: [ldBusiness(), faqLD(FAQ)],
  body: `
<section class="hero" style="padding-block:48px 72px">
  <div class="wrap">
    <div>
      <span class="eyebrow">Maid agency in Singapore</span>
      <h1>Hiring a helper is a big decision. <em>We'll walk through it with you.</em></h1>
      <p class="lead">Infant and elderly care specialists. Every helper has 4+ years' experience in Singapore and is interviewed by us first, so you only meet people who could genuinely fit your family.</p>
      <div class="calls">
        <a class="btn offset" href="contact.html">Find your helper ${arrow}</a>
        <a class="btn ghost" href="#guide">Read the first-timer's guide</a>
      </div>
      <p class="meta">Free care consult, no hard sell. Or call <a href="tel:${SITE.tel}">${SITE.telShow}</a></p>
    </div>
    <div class="frame">
      <div class="photo">${img('v2-hero.jpg', 'A helper in a purple uniform cradling a sleeping newborn while the baby’s mother looks on', { w: 1200, h: 1600, lazy: false, sizes: '(min-width:1000px) 560px, 100vw' })}</div>
      <aside class="float" aria-label="Customer review excerpt">
        <p>“Chose our helper on 25th October through video conferencing. Received our helper on the 3rd of November. 9 days!”</p>
        <small>Asilah S., first-time employer · Google review</small>
      </aside>
    </div>
  </div>
</section>
${trust(L)}
${press(L)}

<section id="care">
  <div class="wrap">
    ${head('What we do best', 'Infant care and elderly care are <em>our specialty.</em>', 'Most agencies place everyone. We chose to go deep on the two moments when the right helper matters most.')}
    ${show({ eyebrow: 'Infant care', h3: 'Care for mummy and baby, before and after birth.', p: 'A confinement nanny is around for a month. A trained helper stays on, at a reasonable rate, and some of ours also prepare confinement and milk-boosting meals.', list: ['Baby-care experience plus extra training', 'Confinement and milk-boosting meals, on request', 'Support for mother and baby beyond the first month'], btn: 'Find an infant-care helper', btnHref: needLink('infant'), link: ['infant-care.html', 'See how infant care works'], main: img('v2-infant.jpg', 'A helper bottle-feeding a baby while the mother smiles beside them', { cls: 'main', sizes: '(min-width:1000px) 640px, 100vw' }) })}
    ${show({ rev: true, eyebrow: 'Elderly care', h3: 'Safe, respectful days at home for the people you love.', p: 'Untrained care can put the elderly at risk, especially with special conditions. Our helpers complete a formal eldercare course and need minimal instruction to do their job well.', list: ['Formal eldercare training before placement', 'Matched on temperament, not only on skills', 'Mandarin-speaking helpers available'], btn: 'Find an eldercare helper', btnHref: needLink('elderly'), link: ['elderly-care.html', 'See how eldercare works'], main: img('v2-elderly.jpg', 'A helper walking arm in arm with a smiling elderly woman who uses a cane', { cls: 'main', sizes: '(min-width:1000px) 640px, 100vw' }), mini: img('v2-elderly2.jpg', 'A helper setting out medication for an elderly man at the dining table', { cls: 'mini', sizes: '220px' }) })}
  </div>
</section>

<section class="specific" id="specific">
  <div class="wrap">
    <div class="box reveal">
      <div><h2>Looking for something more specific?</h2><p>Tell us what matters most and we'll shortlist from there.</p></div>
      <ul class="pills">
        <li><a href="mandarin-speaking-maid.html">Mandarin-speaking helpers ${ico('i-arrow')}</a></li>
        <li><a href="transfer-maid.html">Transfer helpers ${ico('i-arrow')}</a></li>
        <li><a href="filipino-maid.html">Filipino helpers ${ico('i-arrow')}</a></li>
        <li><a href="indonesian-maid.html">Indonesian helpers ${ico('i-arrow')}</a></li>
        <li><a href="myanmar-maid.html">Myanmar helpers ${ico('i-arrow')}</a></li>
        <li><a href="${needLink('general')}">General household ${ico('i-arrow')}</a></li>
        <li><a href="${needLink('pets')}">Pet care ${ico('i-arrow')}</a></li>
      </ul>
    </div>
  </div>
</section>

<section id="how" style="padding-top:0"><div class="wrap">${head(...L.stepsHead)}
<div class="steps">${L.steps.map(([t, p], i) => `<article class="step reveal"><span class="n">${i + 1}</span><h3>${t}</h3><p>${p}</p></article>`).join('')}</div>
<div class="duo">
  <figure class="reveal">${img('v2-interview.jpg', 'A couple on their sofa interviewing a helper over a video call', { pos: '60% 50%', sizes: '(min-width:1000px) 580px, 100vw' })}<figcaption>Interview from your sofa</figcaption></figure>
  <figure class="reveal">${img('v2-arrival.jpg', 'A helper arriving at the front door with a suitcase, welcomed by a mother and toddler', { sizes: '(min-width:1000px) 580px, 100vw' })}<figcaption>Your helper arrives at your door</figcaption></figure>
</div></div></section>

<section class="reviews" id="reviews">
  <div class="wrap">
    ${head('Reviews', 'Why families choose Help Is Here.')}
    <div class="cards">${REVIEWS.slice(0, 1).concat(REVIEWS.slice(2, 4)).map(([q, w, r]) => `<figure class="rc reveal"><blockquote>“${esc(q)}”</blockquote><cite><b>${esc(w)}</b>${esc(r ? r + ' · ' : '')}Google review</cite></figure>`).join('')}</div>
    <p class="more"><a href="reviews.html">Read more reviews →</a></p>
  </div>
</section>

<section id="guide">
  <div class="wrap">
    ${head("First-timer's guide", 'New to hiring a helper? <em>Start here.</em>', 'Plain-language reading, so you can come to the conversation prepared.')}
    ${guideCards(3)}
    <p class="more"><a href="articles.html">All articles →</a></p>
  </div>
</section>

<section class="alt" id="faq">
  <div class="wrap">${head('Questions', 'Things families ask us first.')}${faq(FAQ.slice(0, 4))}</div>
</section>

${ctaBand(L)}`,
});

/* ---------- Services overview ---------- */
pages['services.html'] = layout({
  ...BASE, file: 'services.html', active: 'services.html',
  title: 'Our services | Help Is Here',
  desc: 'Upskilled helpers for infant care and eldercare, matched one to one by an in-house recruiter. See how we screen, train and support helpers.',
  ld: faqLD(FAQ),
  body: `${phead({
    c: crumbs([null, 'Our services']), eyebrow: 'Our services', h1: 'Experienced, trained caregivers, so everyone can live well at home.',
    lead: 'Every helper is matched to your requirements and equipped with the right skills before they start.',
    calls: `<a class="btn offset" href="contact.html">Find your helper ${arrow}</a>`,
    photo: img('v2-family.jpg', 'A helper, a grandmother, a mother and a toddler preparing breakfast together', { lazy: false, sizes: '(min-width:1000px) 560px, 100vw' }),
  })}
<section style="padding-top:24px"><div class="wrap">
  <h2 class="sr">Our care services</h2>
  ${show({ eyebrow: 'Infant care', h3: 'Care for mummy and baby, before and after birth.', p: 'Helpers trained to support you while you are pregnant and after you give birth, at a more affordable rate than a confinement nanny. All are equipped with the basics of baby care, such as feeding and bathing.', list: ['Pre-natal and post-partum support', 'Feeding, bathing and baby routines', 'Confinement and milk-boosting meals, on request'], btn: 'See how infant care works', btnHref: 'infant-care.html', main: img('v2-confinement.jpg', 'A helper ladling nourishing soup in a home kitchen', { cls: 'main', sizes: '(min-width:1000px) 640px, 100vw' }) })}
  ${show({ rev: true, eyebrow: 'Elderly care', h3: 'Trained care that gives seniors undivided attention.', p: 'Our helpers all undergo comprehensive eldercare training and are equipped with the basic skills to care for your loved ones, so you can go to work with peace of mind.', list: ['Comprehensive eldercare training', 'Reliable day-to-day home care', 'Matched on temperament as well as skills'], btn: 'See how eldercare works', btnHref: 'elderly-care.html', main: img('v2-elderly2.jpg', 'A helper helping an elderly man with his weekly medication', { cls: 'main', sizes: '(min-width:1000px) 640px, 100vw' }) })}
</div></section>

<section class="alt"><div class="wrap two top">
  <div class="reveal"><span class="eyebrow">How we select helpers</span><h2>A match made by a person, not a database.</h2><p>We run detailed checks on background, work and education history, and hold professional one-to-one interviews to understand each helper's skill level in cooking, cleaning, babycare and eldercare.</p>${ticks(['Personally assessed and selected by our in-house recruiter', 'One-to-one interviews on real skill level', 'An enhancement training course to standardise home-care skills', 'Ongoing support from our team for the entire employment period'])}</div>
  <div class="photo reveal">${img('v2-join.jpg', 'Three helpers in purple uniforms learning eldercare skills in a training room with a trainer', { sizes: '(min-width:1000px) 560px, 100vw' })}</div>
</div></section>

<section><div class="wrap">
  ${head('Paperwork', 'Say goodbye to paperwork hassles.', 'We understand the paperwork can be complicated, tedious and time-consuming. We handle it, from the work permit to insurance, and update you at the important stages.')}
  <div class="fcards">
    <article class="fc reveal"><span class="ico">${ico('i-shield')}</span><h3>Handled for you</h3><p>Work permit, insurance and online documents, so you do not have to chase forms.</p></article>
    <article class="fc reveal"><span class="ico">${ico('i-map')}</span><h3>Doorstep service</h3><p>No need to travel to the agency or send your helper for work-permit steps.</p></article>
    <article class="fc reveal"><span class="ico">${ico('i-heart')}</span><h3>Support that continues</h3><p>We stay in touch after your helper starts, and help if anything comes up.</p></article>
  </div>
</div></section>

<section class="alt"><div class="wrap">${head('Questions', 'Things families ask us first.')}${faq(FAQ)}</div></section>
${ctaBand(L)}`,
});

/* ---------- Infant care ---------- */
pages['infant-care.html'] = layout({
  ...BASE, file: 'infant-care.html', active: 'services.html',
  title: 'Infant care helper in Singapore | Help Is Here',
  desc: 'Upskilled helpers for pre- and post-partum care. A reasonable-rate alternative to a confinement nanny, with baby-care training and confinement meal skills.',
  body: `${phead({
    c: crumbs(['services.html', 'Our services'], [null, 'Infant care']), eyebrow: 'Infant care', h1: 'Care for mummy and baby, <em>before and after birth.</em>',
    lead: '“It takes a village to raise a child.” Most mummies hire a confinement nanny at a high cost for a month. A trained helper can support you and your baby for much longer, at a reasonable rate.',
    calls: `<a class="btn offset" href="${needLink('infant')}">Find an infant-care helper ${arrow}</a><a class="btn ghost" href="#compare">Helper or confinement nanny?</a>`,
    photo: img('v2-hero.jpg', 'A helper cradling a sleeping newborn while the mother looks on', { w: 1200, h: 1600, lazy: false, sizes: '(min-width:1000px) 560px, 100vw', pos: '50% 30%' }),
  })}
<section style="padding-top:24px"><div class="wrap">
  ${head('What your helper can do', 'Practical help, when you need it most.')}
  <div class="fcards">
    <article class="fc reveal"><h3>Care for your baby</h3><p>Feeding and bathing, and baby routines, from helpers with baby-care experience and extra training classes.</p></article>
    <article class="fc reveal"><h3>Care for you</h3><p>Pre-natal and post-partum support while you recuperate. Some of our helpers prepare confinement and milk-boosting meals.</p></article>
    <article class="fc reveal"><h3>A home that keeps running</h3><p>Household chores continue, so you can rest and bond with your baby.</p></article>
  </div>
</div></section>

<section class="alt" id="compare"><div class="wrap two">
  <div class="photo reveal">${img('v2-confinement.jpg', 'A helper ladling nourishing soup in a home kitchen', { sizes: '(min-width:1000px) 560px, 100vw' })}</div>
  <div class="reveal"><span class="eyebrow">Helper or confinement nanny?</span><h2>Support that lasts beyond the first month.</h2>
    <div class="cmp" style="margin-top:20px"><div><h3>Confinement nanny</h3><ul><li>Around for about a month</li><li>Priced at a premium</li></ul></div><div class="us"><h3>Help Is Here helper</h3><ul><li>Stays on for the long term</li><li>More affordable rate</li><li>Also supports the wider household</li></ul></div></div></div>
</div></section>

<section><div class="wrap">${head('Questions', 'Infant care, answered.')}${faq([
    ['Can your helpers prepare confinement meals?', 'Some of our helpers are skilled in preparing confinement and milk-boosting meals. Tell us you need this and we will match accordingly.'],
    ['Is a helper really an alternative to a confinement nanny?', 'Our upskilled helpers are trained for pre-natal and post-partum care at a more affordable rate. Your Care Advisor can talk you through what a helper can and cannot do, so you can decide what is right.'],
  ])}</div></section>
${ctaBand(L, needLink('infant'))}`,
});

/* ---------- Elderly care ---------- */
pages['elderly-care.html'] = layout({
  ...BASE, file: 'elderly-care.html', active: 'services.html',
  title: 'Eldercare helper in Singapore | Help Is Here',
  desc: 'Formally trained eldercare helpers matched on temperament and skills, so your parents are safe and respected at home while you are at work.',
  body: `${phead({
    c: crumbs(['services.html', 'Our services'], [null, 'Elderly care']), eyebrow: 'Elderly care', h1: 'Safe, respectful days at home <em>for the people you love.</em>',
    lead: 'Hiring an untrained or inexperienced helper can put an elderly parent at risk, especially with special conditions. Our helpers undergo formal training and need minimal instruction.',
    calls: `<a class="btn offset" href="${needLink('elderly')}">Find an eldercare helper ${arrow}</a><a class="btn ghost" href="reviews.html">Read what families say</a>`,
    photo: img('v2-elderly.jpg', 'A helper walking arm in arm with a smiling elderly woman who uses a cane', { lazy: false, sizes: '(min-width:1000px) 560px, 100vw' }),
  })}
<section style="padding-top:24px"><div class="wrap">
  ${head('What good eldercare looks like', 'Skills, and the right temperament.')}
  <div class="fcards">
    <article class="fc reveal"><h3>Formally trained</h3><p>Every helper completes a professional training course in eldercare before placement.</p></article>
    <article class="fc reveal"><h3>Works with minimal instruction</h3><p>Our curated helpers know how things work in Singapore and can complete tasks with little guidance.</p></article>
    <article class="fc reveal"><h3>Matched on personality</h3><p>Your parent's temperament, language and routine matter as much as skills. Your advisor looks for a fit.</p></article>
  </div>
</div></section>

<section class="alt warm"><div class="wrap two">
  <div class="reveal"><span class="eyebrow">Day to day</span><h2>Calm routines, done well.</h2><p>Reliable home care means your loved one gets the undivided attention they deserve while you are at work.</p>${ticks(['Mobility and daily-living assistance', 'Medication reminders and routines', 'Meals the way your family likes them', 'Mandarin-speaking helpers available on request'])}<a class="btn" href="${needLink('elderly')}">Find an eldercare helper</a></div>
  <div class="photo reveal">${img('v2-elderly2.jpg', 'A helper helping an elderly man with his weekly medication at the dining table', { sizes: '(min-width:1000px) 560px, 100vw' })}</div>
</div></section>

<section><div class="wrap">
  ${head('Reviews', 'From families caring for parents.')}
  <div class="cards">${REVIEWS.filter((r) => r[3].includes('elderly')).slice(0, 3).map(([q, w, r]) => `<figure class="rc reveal"><blockquote>“${esc(q)}”</blockquote><cite><b>${esc(w)}</b>${esc(r ? r + ' · ' : '')}Google review</cite></figure>`).join('')}</div>
</div></section>

<section class="alt"><div class="wrap">${head('Questions', 'Eldercare, answered.')}${faq([
    ['What training do eldercare helpers have?', 'Our helpers attend a professional training course in eldercare so they can look after your loved ones, and need minimal instruction once they are home.'],
    ['Can you place a Mandarin-speaking helper?', 'Yes. Tell us your parent’s language and we will look for helpers who can talk with them comfortably.'],
  ])}</div></section>
${ctaBand(L, needLink('elderly'))}`,
});

/* ---------- Mandarin / Transfer (lighter service pages) ---------- */
const lite = ({ file, title, desc, eyebrow, h1, lead, photo, alt, need, points, why, faqs }) => layout({
  ...BASE, file, active: 'services.html', title, desc,
  body: `${phead({
    c: crumbs(['services.html', 'Our services'], [null, eyebrow]), eyebrow, h1, lead,
    calls: `<a class="btn offset" href="${needLink(need)}">${L.cta} ${arrow}</a>`,
    photo: img(photo, alt, { lazy: false, sizes: '(min-width:1000px) 560px, 100vw' }),
  })}
<section style="padding-top:24px"><div class="wrap two top">
  <div class="reveal"><span class="eyebrow">${why[0]}</span><h2>${why[1]}</h2><p>${why[2]}</p></div>
  <div class="reveal">${ticks(points)}</div>
</div></section>
<section class="alt"><div class="wrap">${head('Questions', 'Good to know.')}${faq(faqs)}</div></section>
${ctaBand(L, needLink(need))}`,
});

pages['mandarin-speaking-maid.html'] = lite({
  file: 'mandarin-speaking-maid.html', eyebrow: 'Mandarin-speaking helpers', need: 'mandarin',
  title: 'Mandarin-speaking helper in Singapore | Help Is Here', desc: 'Helpers who can talk comfortably with parents who prefer Mandarin, interviewed one to one so language is checked before you meet.',
  h1: 'Mandarin-speaking helpers, <em>so nothing gets lost.</em>',
  lead: 'For parents who are more comfortable in Mandarin, communication is part of care. We look for helpers who can talk with them, not just about them.',
  photo: 'v2-mandarin.jpg', alt: 'A helper chatting and laughing with an elderly man over tea',
  why: ['Why it matters', 'Care starts with understanding.', 'Many of the families we help are looking after a parent who speaks mainly Mandarin. Tell us, and we will make language a priority in the shortlist.'],
  points: ['Language discussed up front, before you meet any helper', 'Every helper interviewed one to one by our recruiter', 'Familiar with how Singapore households work', 'Matched on temperament as well as language'],
  faqs: [['How do you check Mandarin ability?', 'Every helper is interviewed one to one by our in-house recruiter, and your advisor can include language in the questions at your video interview.'], ['Can I ask for another dialect or language?', 'Tell us what your family speaks and we will do our best to find a suitable helper.']],
});

pages['transfer-maid.html'] = lite({
  file: 'transfer-maid.html', eyebrow: 'Transfer helpers', need: 'general',
  title: 'Transfer maid in Singapore | Help Is Here', desc: 'Helpers already in Singapore, screened and interviewed by our recruiter, with paperwork and doorstep service handled for you.',
  h1: 'Already in Singapore? <em>Meet them first.</em>',
  lead: 'Transfer helpers are already here and already know how things work. We screen and interview them first, then handle the paperwork.',
  photo: 'v2-transfer.jpg', alt: 'A mother showing a helper around the kitchen while her toddler watches',
  why: ['Why transfer', 'Experience you can see.', 'A helper who has worked in Singapore knows the routines, the market, the lifts and the lingo, so there is less to teach.'],
  points: ['Pre-screened and interviewed by our recruiter', 'Doorstep service, with no travelling for work-permit steps', 'Paperwork and insurance handled end to end', 'A Care Advisor beside you from first chat to deployment'],
  faqs: [['What is a transfer helper?', 'A helper who is already working in Singapore and is moving to a new employer.'], ['Do I need to visit your office?', 'No. We offer doorstep service, so there is no need to travel to the agency or send your helper for work-permit steps.']],
});

/* ---------- Nationality pages ---------- */
const NAT = {
  'filipino-maid.html': ['Filipino', 'ph', 'Since the 1980s, Filipino helpers have been a reliable option in Singapore. They are popular for their reliability, strong work ethic and good command of English, and excel in roles from caregiving to household chores. They also receive certified training before coming here.', 'v2-hero.jpg', 'A Filipino helper in a purple uniform holding a newborn'],
  'indonesian-maid.html': ['Indonesian', 'id', 'For the last two decades, many Singaporeans have preferred hiring Indonesian helpers. They are known for being quick to adapt, emotionally intelligent and having many cultural similarities, which helps them get up to speed and settle in with most families.', 'v2-infant.jpg', 'An Indonesian helper bottle-feeding a baby'],
  'myanmar-maid.html': ['Myanmar', 'mm', 'Reliability, a strong work ethic and a desire to keep learning are some of the positive traits of Myanmar helpers. Many employers notice a significant improvement in their competency after a few months of guidance. Myanmar helpers are among the most versatile in Singapore.', 'v2-elderly.jpg', 'A Myanmar helper walking with an elderly woman'],
};
for (const [file, [n, code, copy, photo, alt]] of Object.entries(NAT)) {
  pages[file] = layout({
    ...BASE, file, active: 'our-maids.html',
    title: `${n} helpers in Singapore | Help Is Here`, desc: `${n} domestic helpers, screened and interviewed by our in-house recruiter and matched to your family.`,
    body: `${phead({
      c: crumbs(['our-maids.html', 'Our maids'], [null, `${n} helpers`]), eyebrow: `${n} helpers`, h1: `${n} helpers, <em>matched to your family.</em>`, lead: copy,
      calls: `<a class="btn offset" href="contact.html?nat=${code}">Ask for ${n} helpers ${arrow}</a>`,
      photo: img(photo, alt, { lazy: false, w: photo === 'v2-hero.jpg' ? 1200 : 1600, h: photo === 'v2-hero.jpg' ? 1600 : 1066, sizes: '(min-width:1000px) 560px, 100vw', pos: '50% 30%' }),
    })}
<section style="padding-top:24px"><div class="wrap">
  ${head('Whatever your requirements', 'Every helper is interviewed one to one.', 'We actively review and filter candidates and provide comprehensive training, so we only bring onboard the best from each country.')}
  <div class="fcards">
    <article class="fc reveal"><h3>Eldercare</h3><p>Formally trained to care for seniors at home.</p></article>
    <article class="fc reveal"><h3>Newborn care</h3><p>Baby-care experience and extra training.</p></article>
    <article class="fc reveal"><h3>Household and pets</h3><p>General chores and care for pets, as you need.</p></article>
  </div>
</div></section>
${ctaBand(L, `contact.html?nat=${code}`)}`,
  });
}

/* ---------- Our maids ---------- */
pages['our-maids.html'] = layout({
  ...BASE, file: 'our-maids.html', active: 'our-maids.html',
  title: 'Our maids | Help Is Here', desc: 'We place helpers from the Philippines, Indonesia and Myanmar. Every candidate is reviewed and filtered, and trained to excel in their roles.',
  body: `${phead({
    c: crumbs([null, 'Our maids']), eyebrow: 'Our maids', h1: 'We make hiring a helper <em>easy.</em>',
    lead: 'We simplify the process of hiring capable and reliable helpers from Indonesia, the Philippines and Myanmar. Your privacy is our priority: we never share your information without your consent.',
    calls: `<a class="btn offset" href="contact.html">${L.cta} ${arrow}</a>`,
    photo: img('v2-join.jpg', 'Three helpers in purple uniforms in a training session', { lazy: false, sizes: '(min-width:1000px) 560px, 100vw' }),
  })}
<section style="padding-top:24px"><div class="wrap">
  ${head('Choose your preferred nationality', 'Three countries, one standard.', 'We actively review and filter candidates, and provide comprehensive training so they excel in their roles.')}
  <div class="natcards">
    ${Object.entries(NAT).map(([f, [n, code, copy]]) => `<article class="nat reveal"><h3>${n}</h3><p>${copy}</p><a class="text" href="${f}">About ${n} helpers →</a></article>`).join('')}
  </div>
</div></section>
<section class="alt"><div class="wrap">
  ${head('Whatever your requirements', 'The help your home needs.')}
  <ul class="pills" style="margin-bottom:8px"><li><a href="${needLink('elderly')}">Eldercare ${ico('i-arrow')}</a></li><li><a href="${needLink('infant')}">Newborn care ${ico('i-arrow')}</a></li><li><a href="${needLink('general')}">General household chores ${ico('i-arrow')}</a></li><li><a href="${needLink('pets')}">Care for pets ${ico('i-arrow')}</a></li></ul>
</div></section>
${steps(L)}
${ctaBand(L)}`,
});

/* ---------- Reviews ---------- */
pages['reviews.html'] = layout({
  ...BASE, file: 'reviews.html', active: 'reviews.html',
  title: 'Reviews | Help Is Here', desc: 'What families say about working with Help Is Here, taken from our Google reviews.',
  body: `${phead({ c: crumbs([null, 'Reviews']), eyebrow: 'Reviews', h1: 'What families say <em>about working with us.</em>', lead: 'Excerpts from our Google reviews. Read the full reviews, and our replies, on Google.' })}
<section style="padding-top:8px"><div class="wrap">
  <search><div class="filters" role="group" aria-label="Filter reviews">
    <button type="button" data-filter="all" aria-pressed="true">All</button>
    <button type="button" data-filter="infant" aria-pressed="false">Infant care</button>
    <button type="button" data-filter="elderly" aria-pressed="false">Elderly care</button>
    <button type="button" data-filter="first" aria-pressed="false">First-time employers</button>
    <button type="button" data-filter="mandarin" aria-pressed="false">Mandarin-speaking</button>
  </div></search>
  <p class="sr" role="status" aria-live="polite">Showing <span data-count>${REVIEWS.length}</span> reviews</p>
  <div class="mason">${REVIEWS.map(([q, w, r, t]) => rc(q, w, r, t)).join('')}</div>
  <p class="more"><a href="https://www.google.com/search?q=Help+Is+Here+maid+agency+Singapore+reviews" rel="noopener">Read all reviews on Google →</a></p>
</div></section>
${ctaBand(L)}`,
});

/* ---------- Articles ---------- */
pages['articles.html'] = layout({
  ...BASE, file: 'articles.html', active: 'articles.html',
  title: 'Articles | Help Is Here', desc: 'Informative resources on hiring a helper, managing your household and caring for babies and elderly family members in Singapore.',
  body: `${phead({ c: crumbs([null, 'Articles']), eyebrow: "First-timer's guide", h1: 'Read first, <em>decide when you are ready.</em>', lead: 'Informative resources about recruiting helpers, managing a household, and learning from other employers in Singapore.' })}
<section style="padding-top:8px"><div class="wrap">
  <div class="alist">${ARTICLES.map(([t, u, tag, w]) => `<a href="${u}"><span class="tag ${w}">${tag}</span><h2>${t}</h2><span class="go">Read ${arrow}</span></a>`).join('')}</div>
</div></section>
${ctaBand(L)}`,
});

/* ---------- Join us (for helpers) ---------- */
pages['join-us.html'] = layout({
  ...BASE, file: 'join-us.html', active: 'join-us.html',
  title: 'Join us as a helper | Help Is Here', desc: 'Experienced domestic helpers: join Help Is Here for a monthly salary of at least $700, cooking and skills training, and interview coaching.',
  body: `${phead({
    c: crumbs([null, 'Join us']), eyebrow: 'For helpers', h1: 'Experienced helper? <em>Join Help Is Here.</em>',
    lead: 'We are looking for highly qualified, experienced helpers to match with families who need specialised care for their loved ones. Every helper is carefully curated and screened.',
    calls: `<a class="btn offset" href="#register">Register your interest ${arrow}</a>`,
    photo: img('v2-join.jpg', 'Three helpers in purple uniforms learning eldercare skills with a trainer', { lazy: false, sizes: '(min-width:1000px) 560px, 100vw' }),
  })}
<section style="padding-top:24px"><div class="wrap">
  ${head('Why join us', 'What you get.')}
  <div class="fcards" style="grid-template-columns:repeat(auto-fit,minmax(220px,1fr))">
    <article class="fc reveal"><h3>A fair salary</h3><p>Monthly salary of at least $700.</p></article>
    <article class="fc reveal"><h3>Better cooking</h3><p>Enhance your cooking talent.</p></article>
    <article class="fc reveal"><h3>Stronger skills</h3><p>An enhanced skillset for future employability.</p></article>
    <article class="fc reveal"><h3>Interview skills</h3><p>Get equipped with the skills to interview well.</p></article>
  </div>
</div></section>
<section class="alt" id="register"><div class="wrap two top">
  <div class="reveal"><span class="eyebrow">Register your interest</span><h2>Tell us about yourself.</h2><p>Our team will contact you. Fields marked * are required. We keep your details private.</p></div>
  <div>
    <form class="card" style="position:static;box-shadow:var(--shadow-card);border-color:var(--line)" data-join action="#" method="post" novalidate aria-labelledby="jt">
      <h2 id="jt" class="sr">Registration form</h2>
      <div class="field"><label for="jn">Name <span class="req" aria-hidden="true">*</span></label><input id="jn" name="name" type="text" autocomplete="name" spellcheck="false" required aria-describedby="jn-e"><p class="err" id="jn-e" role="alert" hidden>Please enter your name.</p></div>
      <div class="row2">
        <div class="field"><label for="jt2">Contact number <span class="req" aria-hidden="true">*</span></label><input id="jt2" name="tel" type="tel" inputmode="tel" autocomplete="tel" spellcheck="false" required aria-describedby="jt2-e"><p class="err" id="jt2-e" role="alert" hidden>Please enter a contact number.</p></div>
        <div class="field"><label for="ja">Age <span class="req" aria-hidden="true">*</span></label><input id="ja" name="age" type="text" inputmode="numeric" autocomplete="off" required aria-describedby="ja-e"><p class="err" id="ja-e" role="alert" hidden>Please enter your age (18 to 65).</p></div>
      </div>
      <fieldset class="field"><legend>Nationality <span class="req" aria-hidden="true">*</span></legend><div class="chips">${['Filipino', 'Indonesian', 'Burmese', 'Sri Lankan', 'Bangladeshi', 'Indian', 'Malaysian', 'Thai'].map((n, i) => `<label><input type="radio" name="nat" value="${n}"${i === 0 ? ' required' : ''}><span>${n}</span></label>`).join('')}</div></fieldset>
      <div class="field"><label for="jf">FIN / Work Permit No. (optional)</label><input id="jf" name="fin" type="text" autocomplete="off"><p class="hint">Only if you already work in Singapore.</p></div>
      <button class="btn block" type="submit">Register my interest</button>
    </form>
    <div class="card thanks" role="status" tabindex="-1" style="position:static"><h2>Thank you for registering.</h2><p class="sub">Our team will contact you. (Sample confirmation state.)</p></div>
  </div>
</div></section>`,
});

/* ---------- Contact ---------- */
pages['contact.html'] = layout({
  ...BASE, file: 'contact.html', active: 'contact.html',
  title: 'Free care consult and contact | Help Is Here',
  desc: 'Tell us about your family and a Care Advisor will contact you within 1 business day with honest advice and a shortlist of pre-screened helpers.',
  ld: [ldBusiness(), faqLD(FAQ.slice(1, 3))],
  body: `<section class="consult" style="padding-top:40px"><div class="wrap">
    <div>
      ${crumbs([null, 'Contact'])}
      <span class="eyebrow">Free care consult</span>
      <h1>Tell us about your family. <em>We'll take it from there.</em></h1>
      <p class="lead">A Care Advisor reads every note. You'll get honest advice and a shortlist, with no pressure to decide.</p>
      <div class="photo">${img('v2-family.jpg', 'A helper, a grandmother, a mother and a toddler preparing breakfast together', { lazy: false, sizes: '(min-width:1000px) 560px, 100vw' })}</div>
      <h2 style="font-size:24px;margin-bottom:16px">What happens next</h2>
      <div class="expect">
        <div><span class="n">1</span><p><b>We read your note</b><span>A real person reads what you've written.</span></p></div>
        <div><span class="n">2</span><p><b>We contact you within 1 business day</b><span>To explain how we work and ask a few follow-up questions.</span></p></div>
        <div><span class="n">3</span><p><b>You decide, at your own pace</b><span>If we're not the right fit, we'll say so.</span></p></div>
      </div>
    </div>
    <div>${leadForm(L, { id: 'f', heading: 'Get your free care consult', sub: 'About 2 minutes. Fields marked * are required.' })}</div>
  </div></section>

<section><div class="wrap">
  ${head('Find us', 'Prefer to talk or drop by?')}
  <div class="contactgrid">
    <div class="ci reveal"><span class="ico">${ico('i-map')}</span><div><b>Visit us</b><p>90 Yishun Central<br>Khoo Teck Puat Hospital<br>Tower C, #01-08A<br>Singapore 768828</p><a href="https://www.google.com/maps/search/?api=1&query=90+Yishun+Central+Khoo+Teck+Puat+Hospital+Singapore+768828" rel="noopener" style="font-weight:600;color:var(--purple-700)">Open in Google Maps</a></div></div>
    <div class="ci reveal"><span class="ico">${ico('i-clock')}</span><div><b>Opening hours</b><p>Weekdays 11.00am to 7.30pm<br>Weekends 11.00am to 6.00pm</p></div></div>
    <div class="ci reveal"><span class="ico">${ico('i-phone')}</span><div><b>Call or email</b><p><a href="tel:${SITE.tel}">${SITE.telShow}</a><br><a href="mailto:${SITE.email}">${SITE.email}</a></p></div></div>
  </div>
</div></section>

<section class="alt"><div class="wrap two top">
  <div class="reveal"><span class="eyebrow">General enquiries</span><h2>Have a different question?</h2><p>Our support team is always here for you. For a quick answer, see the questions below. For anything else, send us a message and we will get back to you within 1 to 3 business days.</p>${faq(FAQ.slice(1, 4))}</div>
  <div class="enq">
    <form class="card" data-enq action="#" method="post" novalidate aria-labelledby="et">
      <h2 id="et">Send us a message</h2><p class="sub">Fields marked * are required.</p>
      <div class="field"><label for="en">Your name <span class="req" aria-hidden="true">*</span></label><input id="en" name="name" type="text" autocomplete="name" spellcheck="false" required aria-describedby="en-e"><p class="err" id="en-e" role="alert" hidden>Please enter your name.</p></div>
      <div class="field"><label for="es">Subject</label><select id="es" name="subject"><option>Engaging a helper, nanny or caregiver</option><option>Domestic helper recruitment</option><option>Sales and marketing</option><option>General enquiry</option></select></div>
      <div class="field"><label for="em">Message <span class="req" aria-hidden="true">*</span></label><textarea id="em" name="message" required aria-describedby="em-e"></textarea><p class="err" id="em-e" role="alert" hidden>Please write a short message.</p></div>
      <button class="btn block" type="submit">Send message</button>
    </form>
    <div class="card thanks" role="status" tabindex="-1" style="position:static"><h2>Thank you.</h2><p class="sub">We will get back to you within 1 to 3 business days. (Sample confirmation state.)</p></div>
  </div>
</div></section>`,
});

export default pages;
