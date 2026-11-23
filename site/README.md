# Help Is Here: redesigned site (static prototype)

Direction A2 "Warm Clarity", built on the Help Is Here design system (Fraunces + Figtree, purple `#4e168d`, orange `#fe6703`).

## Run
```bash
node build.mjs                      # regenerates every *.html, zh/*.html, sitemap.xml, robots.txt
python3 -m http.server 4174         # preview at http://localhost:4174
```

## Structure
- `lib.mjs`: layout, header/footer, shared blocks, strings (EN + 简体中文), icons, lead form
- `pages-en.mjs`: all English pages and their copy
- `pages-zh.mjs`: Chinese home and contact (draft translations, need native review)
- `assets/style.css`, `assets/app.js`: one stylesheet, one small progressive-enhancement script
- `assets/img/`: logo, press logos and AI-generated placeholder photos (`v2-*.jpg`, with `-800.jpg` variants)

## Before launch
- Replace every `v2-*` photo with real HIH helpers and families (they are AI-generated placeholders).
- Wire the three forms (`data-lead`, `data-join`, `data-enq` in `assets/app.js`) to the real lead endpoint, WhatsApp Business or CRM, and add bot protection (honeypot field is already in place).
- Confirm "2 years of support included" (from the design system, not the live site).
- Native-speaker review of the Chinese pages; translate the remaining pages.
- Convert photos to WebP/AVIF and self-host the fonts in the production build.
- Privacy and Terms links in the footer are placeholders.
