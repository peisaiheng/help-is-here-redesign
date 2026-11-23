import { writeFileSync, mkdirSync, existsSync } from 'node:fs';
import en from './pages-en.mjs';
const out = (p, h) => { mkdirSync(new URL(p.includes('/') ? p.slice(0, p.lastIndexOf('/') + 1) : './', import.meta.url), { recursive: true }); writeFileSync(new URL(p, import.meta.url), h); };
for (const [f, h] of Object.entries(en)) out(f, h);
let n = Object.keys(en).length;
if (existsSync(new URL('./pages-zh.mjs', import.meta.url))) {
  const zh = (await import('./pages-zh.mjs')).default;
  for (const [f, h] of Object.entries(zh)) out('zh/' + f, h);
  n += Object.keys(zh).length;
}
console.log(`built ${n} pages`);

// sitemap + robots
const urls = [...Object.keys(en).map((f) => f), ...(existsSync(new URL('./pages-zh.mjs', import.meta.url)) ? Object.keys((await import('./pages-zh.mjs')).default).map((f) => 'zh/' + f) : [])];
const site = 'https://hih.com.sg';
writeFileSync(new URL('./sitemap.xml', import.meta.url), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((u) => `  <url><loc>${site}/${u === 'index.html' ? '' : u}</loc></url>`).join('\n')}\n</urlset>\n`);
writeFileSync(new URL('./robots.txt', import.meta.url), `# Reference prototype: not for indexing. Replace with an Allow rule and sitemap at launch.\nUser-agent: *\nDisallow: /\n`);
