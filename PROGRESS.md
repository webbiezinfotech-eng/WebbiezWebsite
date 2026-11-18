# Build Progress — Webbiez Infotech website

## DONE
- [x] Brand palette extracted from the live site's stylesheet (#1E8975, #07191B, #2DD4BF, #FCB045, #833AB4, #FD1D1D, #25D366)
- [x] Vite + React 18 + Tailwind CSS 3 + Framer Motion + Lenis scaffold
- [x] Tailwind theme with brand tokens, fonts (Sora / Inter / Inknut Antiqua), keyframes
- [x] Global CSS utilities (glass, gradients, grid lines, noise, custom scrollbar)
- [x] Animation primitives: Reveal, TiltCard, MagneticButton, Blobs, SectionHeading
- [x] Chrome: Loader, Cursor, ScrollProgress, Navbar (layout-animated pill + full-screen mobile menu)
- [x] Sections: Hero (parallax + marquee), About (counters), Services (expandable cards),
      Process (scroll-linked timeline), Work (flagship project + capabilities),
      CTA band, Testimonials (autoplay carousel), FAQ (accordion), Contact (form -> mailto)
- [x] Footer + floating WhatsApp/call/email actions
- [x] SEO meta, favicon.svg, robots.txt, README with run instructions

## v3 — AI automation pivot
- [x] Future Scopes product cards now show live animated product-UI previews
- [x] Early-access form (multi-product picker, validation, mailto) on Future Scopes
- [x] Home: "AI Automation & Agents" service added first, Launching-soon teaser section
- [x] CTA / Work / Services copy rewritten for AI-automation positioning
- [x] Fixed: "See the products" on Future Scopes no longer bounces to Home
- [x] `npm run build` verified

## TODO (if credits run out — type "continue")
- [ ] Production screenshot set for the preview
- [ ] Deploy notes (Vercel / Netlify / cPanel static upload of `dist/`)


## v7 — Founders section (this session)
- [x] Added `founders` data to `src/data/site.js` (Aarti Nathani, Nitya Khilwani — 5+ years in IT, short summaries)
- [x] Added "The people behind Webbiez" block at the bottom of `src/components/About.jsx` (2 cards, monogram avatars, Reveal + TiltCard)
- [x] Standalone visual preview of the section made (founders-preview artifact)

## TODO for next session (type "continue")
- [ ] Run `npm install && npm run build` so `dist/` includes the founders section
      (the build sandbox had no network, so `dist/` in this zip is still the v6 build)
- [ ] Check the founders cards on mobile (360px) and desktop in the real build
- [ ] Optional: replace monogram avatars with real photos (put in `src/assets/`, swap the span in About.jsx)
- [ ] Optional: confirm Nitya's role wording (currently "Co-Founder", delivery and automation focus) and edit the summaries in `site.js`
- [ ] Re-zip as webbiez-infotech-FINAL-v7.zip
