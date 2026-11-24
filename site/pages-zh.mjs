// Simplified Chinese pages. Draft translations: have a native speaker review before launch.
// Customer reviews and article titles are intentionally left in the original language (lang="en").
import { layout, T, img, ico, trust, press, head, ctaBand, faq, leadForm, ldBusiness, SITE } from './lib.mjs';
import { show, needLink, REVIEWS_ZH_SAFE } from './pages-zh-shared.mjs';

const L = T.zh;
const arrow = ico('i-arrow', 'i arrow');
const BASE = { lang: 'zh' };
const pages = {};

const FAQ_ZH = [
  ['你们如何挑选帮佣？', '每位帮佣都由公司招聘专员亲自评估和挑选。我们核查她们的背景、工作和学历记录，并进行一对一面谈，了解她们在烹饪、清洁、婴儿护理和长者护理方面的真实水平，再推荐给最能发挥她们所长的家庭。'],
  ['提交表格后会怎样？', '护理顾问会在一个工作日内联系您，说明我们的运作方式，并进一步了解您的情况。如果我们不是最适合您的选择，我们也会如实告知。'],
  ['可以选择哪些国籍的帮佣？', '我们的帮佣主要来自菲律宾、印尼和缅甸。如果您偏好其他国籍，请告诉我们，我们会尽力寻找合适的人选。'],
  ['你们会协助办理文件手续吗？', '会。工作准证和保险等手续由我们负责，在重要阶段我们会向您更新进度，没有必要时不会打扰您。'],
];

pages['index.html'] = layout({
  ...BASE, file: 'index.html', active: 'index.html',
  title: 'Help Is Here | 新加坡长者与婴儿护理帮佣中介',
  desc: '4年以上新加坡经验、经公司面试筛选的帮佣，由先倾听您需求的护理顾问为您配对。免费护理咨询。',
  ld: ldBusiness(),
  body: `
<section class="hero" style="padding-block:48px 72px">
  <div class="wrap">
    <div>
      <span class="eyebrow">新加坡帮佣中介</span>
      <h1>聘请帮佣是个重要的决定。<em>我们陪您一起考虑。</em></h1>
      <p class="lead">我们专注长者护理与婴儿护理。每位帮佣都有4年以上的新加坡工作经验，并由我们先行面试，让您只见到真正适合您家庭的人选。</p>
      <div class="calls">
        <a class="btn offset" href="contact.html">寻找帮佣 ${arrow}</a>
        <a class="btn ghost" href="#guide">阅读新手雇主指南</a>
      </div>
      <p class="meta">免费护理咨询，不强行推销。或致电 <a href="tel:${SITE.tel}">${SITE.telShow}</a></p>
    </div>
    <div class="frame">
      <div class="photo">${img('v2-hero-elder.jpg', '身穿紫色制服的帮佣与年长女士在沙发上手牵手，开怀大笑', { w: 1200, h: 1600, lazy: false, r: '../', sizes: '(min-width:1000px) 560px, 100vw' })}</div>
      <aside class="float" aria-label="客户评价节选">
        <p lang="en">“From the first meeting, Care Consultants Pei and Thiri heard and understood our worries and patiently addressed many of our concerns.”</p>
        <small>Christine K.，照顾90岁母亲的家属 · Google 评价（保留原文）</small>
      </aside>
    </div>
  </div>
</section>
${trust(L)}
${press(L, '../')}

<section id="care">
  <div class="wrap">
    ${head('我们最擅长的', '长者护理与婴儿护理，<em>是我们的专长。</em>', '多数中介什么都做。我们选择专注于帮佣最关键的两种情况。')}
    ${show({ eyebrow: '长者护理', h3: '让您挚爱的家人在家安全、受尊重地生活。', p: '缺乏培训的照护可能让长者面临风险，对有特殊健康状况的长者尤其如此。我们的帮佣完成正规长者护理课程，只需极少指导就能做好工作。', list: ['上岗前完成正规长者护理培训', '不只看技能，也看性格是否合适', '可安排会讲华语的帮佣'], btn: '寻找长者护理帮佣', btnHref: needLink('elderly'), link: ['../elderly-care.html', '了解长者护理服务（英文页面）'], main: img('v2-elderly.jpg', '帮佣搀扶着拄拐杖的老奶奶，两人笑着交谈', { cls: 'main', r: '../', sizes: '(min-width:1000px) 640px, 100vw' }), mini: img('v2-elderly2.jpg', '帮佣在餐桌旁协助老先生整理每周药物', { cls: 'mini', r: '../', sizes: '220px' }) })}
    ${show({ rev: true, eyebrow: '婴儿护理', h3: '产前产后，照顾妈妈和宝宝。', p: '月子保姆通常只陪伴一个月。受过培训的帮佣可以长期留下，价格也更合理，部分帮佣还会烹调月子餐和催奶餐。', list: ['具备婴儿护理经验并接受额外培训', '可按需要准备月子餐和催奶餐', '超越第一个月，继续支持妈妈和宝宝'], btn: '寻找婴儿护理帮佣', btnHref: needLink('infant'), link: ['../infant-care.html', '了解婴儿护理服务（英文页面）'], main: img('v2-infant.jpg', '帮佣给宝宝喂奶，妈妈在一旁微笑', { cls: 'main', r: '../', sizes: '(min-width:1000px) 640px, 100vw' }) })}
  </div>
</section>

<section class="specific" id="specific">
  <div class="wrap">
    <div class="box reveal">
      <div><h2>有更具体的要求？</h2><p>告诉我们您最看重什么，我们会据此筛选候选人。</p></div>
      <ul class="pills">
        <li><a href="${needLink('mandarin')}">会讲华语的帮佣 ${ico('i-arrow')}</a></li>
        <li><a href="../transfer-maid.html" hreflang="en" lang="en">Transfer helpers ${ico('i-arrow')}</a></li>
        <li><a href="contact.html?nat=ph">菲律宾帮佣 ${ico('i-arrow')}</a></li>
        <li><a href="contact.html?nat=id">印尼帮佣 ${ico('i-arrow')}</a></li>
        <li><a href="contact.html?nat=mm">缅甸帮佣 ${ico('i-arrow')}</a></li>
        <li><a href="${needLink('general')}">一般家务 ${ico('i-arrow')}</a></li>
        <li><a href="${needLink('pets')}">宠物照顾 ${ico('i-arrow')}</a></li>
      </ul>
    </div>
  </div>
</section>

<section id="how" style="padding-top:0"><div class="wrap">${head(...L.stepsHead)}
<div class="steps">${L.steps.map(([t, p], i) => `<article class="step reveal"><span class="n">${i + 1}</span><h3>${t}</h3><p>${p}</p></article>`).join('')}</div>
<div class="duo">
  <figure class="reveal">${img('v2-interview.jpg', '一对夫妇坐在沙发上与帮佣视频面试', { r: '../', pos: '60% 50%', sizes: '(min-width:1000px) 580px, 100vw' })}<figcaption>在家就能面试</figcaption></figure>
  <figure class="reveal">${img('v2-arrival.jpg', '帮佣拎着行李箱抵达家门口，妈妈抱着幼儿迎接', { r: '../', sizes: '(min-width:1000px) 580px, 100vw' })}<figcaption>帮佣直接到您家门口</figcaption></figure>
</div></div></section>

<section class="reviews" id="reviews">
  <div class="wrap">
    ${head('客户评价', '家庭为什么选择 Help Is Here。', '以下为 Google 上的真实评价节选，保留原文。')}
    <div class="cards">${REVIEWS_ZH_SAFE.map(([q, w, r]) => `<figure class="rc reveal"><blockquote lang="en">“${q}”</blockquote><cite><b>${w}</b>${r ? r + ' · ' : ''}Google 评价</cite></figure>`).join('')}</div>
    <p class="more"><a href="../reviews.html" hreflang="en">阅读更多评价（英文）→</a></p>
  </div>
</section>

<section id="guide">
  <div class="wrap">
    ${head('新手雇主指南', '第一次聘请帮佣？<em>从这里开始。</em>', '通俗易懂的文章（英文），让您有备而来。')}
    <div class="guides">
      <a class="g reveal" href="https://hih.com.sg/how-to-prepare-for-the-arrival-of-a-new-household-helper/" hreflang="en"><span class="tag">入门</span><h3 lang="en">How to prepare for the arrival of a new household helper</h3><span class="go">阅读文章 ${arrow}</span></a>
      <a class="g warm reveal" href="https://hih.com.sg/how-maids-can-support-elderly-or-disabled-family-members/" hreflang="en"><span class="tag">长者护理</span><h3 lang="en">How helpers can support elderly or disabled family members</h3><span class="go">阅读文章 ${arrow}</span></a>
      <a class="g reveal" href="https://hih.com.sg/bed-sharing-with-your-baby/" hreflang="en"><span class="tag">婴儿护理</span><h3 lang="en">Bed-sharing with your baby</h3><span class="go">阅读文章 ${arrow}</span></a>
    </div>
  </div>
</section>

<section class="alt" id="faq">
  <div class="wrap">${head('常见问题', '家庭最先会问我们的问题。')}${faq(FAQ_ZH)}</div>
</section>

${ctaBand(L)}`,
});

pages['contact.html'] = layout({
  ...BASE, file: 'contact.html', active: 'contact.html',
  title: '免费护理咨询与联系我们 | Help Is Here',
  desc: '告诉我们您的家庭情况，护理顾问会在一个工作日内联系您，提供坦诚的建议和经筛选的帮佣名单。',
  ld: ldBusiness(),
  body: `<section class="consult" style="padding-top:40px"><div class="wrap">
    <div>
      <nav class="crumbs" aria-label="面包屑"><a href="index.html">首页</a><span aria-hidden="true">/</span><span aria-current="page" style="margin:0">联系我们</span></nav>
      <span class="eyebrow">免费护理咨询</span>
      <h1>告诉我们您的家庭情况。<em>其余交给我们。</em></h1>
      <p class="lead">护理顾问会逐一阅读每份留言。您将获得坦诚的建议和候选名单，不会被催促做决定。</p>
      <div class="photo">${img('v2-family.jpg', '帮佣、奶奶、妈妈和幼儿一起在厨房准备早餐', { lazy: false, r: '../', sizes: '(min-width:1000px) 560px, 100vw' })}</div>
      <h2 style="font-size:24px;margin-bottom:16px">接下来会怎样</h2>
      <div class="expect">
        <div><span class="n">1</span><p><b>我们阅读您的留言</b><span>由真人阅读，而不是机器人。</span></p></div>
        <div><span class="n">2</span><p><b>一个工作日内联系您</b><span>说明运作方式，并询问几个跟进问题。</span></p></div>
        <div><span class="n">3</span><p><b>按您的节奏做决定</b><span>如果我们不是最合适的选择，我们会如实告知。</span></p></div>
      </div>
    </div>
    <div>${leadForm(L, { id: 'f', heading: '获取您的免费护理咨询', sub: '大约两分钟。标有 * 的为必填项。' })}</div>
  </div></section>

<section><div class="wrap">
  ${head('联系方式', '更喜欢直接聊聊或亲自来访？')}
  <div class="contactgrid">
    <div class="ci reveal"><span class="ico">${ico('i-map')}</span><div><b>到访我们</b><p>90 Yishun Central<br>Khoo Teck Puat Hospital<br>Tower C, #01-08A<br>Singapore 768828</p><a href="https://www.google.com/maps/search/?api=1&query=90+Yishun+Central+Khoo+Teck+Puat+Hospital+Singapore+768828" rel="noopener" style="font-weight:600;color:var(--purple-700)">在 Google 地图中打开</a></div></div>
    <div class="ci reveal"><span class="ico">${ico('i-clock')}</span><div><b>营业时间</b><p>周一至周五 上午11.00至晚上7.30<br>周末 上午11.00至下午6.00</p></div></div>
    <div class="ci reveal"><span class="ico">${ico('i-phone')}</span><div><b>致电或电邮</b><p><a href="tel:${SITE.tel}">${SITE.telShow}</a><br><a href="mailto:${SITE.email}">${SITE.email}</a></p></div></div>
  </div>
</div></section>`,
});

export default pages;
