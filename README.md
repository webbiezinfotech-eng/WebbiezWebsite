<<<<<<< HEAD
# Webbiez Infotech — New Website

**Tagline:** Innovating the Innovation

A complete rebuild of https://webbiezinfotech.in using **React 18 + Vite + Tailwind CSS 3**, with **Framer Motion** and **Lenis** for animation and smooth scrolling.

## Run it locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build -> dist/
npm run preview  # preview the production build
```

## Brand colours (taken from the existing website's stylesheet)

| Token | Hex | Use |
| --- | --- | --- |
| `brand-500` | `#1E8975` | Primary brand teal (from old site) |
| `brand-900` / `ink-900` | `#07191B` | Deep ink background (from old site) |
| `brand-400` | `#2DD4BF` | Accent teal for highlights |
| `amber-brand` | `#FCB045` | Warm accent (from old site gradient) |
| `violet-brand` | `#833AB4` | Social/identity accent (from old site) |
| `rose-500`/`rose-brand` | `#FD1D1D` | Gradient stop (from old site) |
| `#25D366` | `#25D366` | WhatsApp action colour (from old site) |

No new external colour was introduced — the theme is new, the palette is theirs.

## Animation system

- **Lenis** smooth scrolling with anchor-aware easing
- **Framer Motion** scroll reveals (`Reveal`), staggered hero word blur-in, layout-animated nav pill
- **Parallax hero** via `useScroll` + `useTransform` (translate, scale, fade)
- **Scroll-linked progress line** through the 5-step Process timeline
- **3D tilt cards** (`TiltCard`) with spring-tracked `rotateX/rotateY`
- **Magnetic buttons** (`MagneticButton`) with cursor-tracking springs and sheen sweep
- **Custom cursor** (desktop pointer-fine only) with blend-mode dot + ring
- **Animated counters**, marquee tech strip, aurora background blobs, page loader
- Full `prefers-reduced-motion` fallbacks throughout

## Structure

```
src/
  App.jsx                 # page composition
  index.css               # Tailwind layers + design utilities
  data/site.js            # all copy, contact details, services, FAQs
  hooks/useLenis.js       # smooth scroll + anchor handling
  hooks/useCountUp.js     # animated statistics
  components/
    Loader.jsx Cursor.jsx ScrollProgress.jsx
    Navbar.jsx Hero.jsx About.jsx Services.jsx Process.jsx
    Work.jsx CtaBand.jsx Testimonials.jsx Faq.jsx Contact.jsx
    Footer.jsx FloatingActions.jsx
    ui/  Reveal, SectionHeading, MagneticButton, TiltCard, Blobs
```

## Content sources

All company facts (services, FAQs, testimonial by Niraj Bhojwani, phone numbers, email,
location, project details) come from the live webbiezinfotech.in website. Copy has been
rewritten and expanded for tone — no facts were invented.


## Contact forms & phone numbers (important)

- Both forms (Contact, Early access) send a real email through Web3Forms to webbiezinfotech@gmail.com.
  The key is in `.env` as `VITE_WEB3FORMS_KEY` (see `.env.example`). It is baked in at `npm run build`,
  so the same key works on localhost and on webbiezinfotech.in. Restart `npm run dev` after editing `.env`.
- Phone numbers are shown ONLY in the footer (next to the email): edit `contact.footerPhones` in `src/data/site.js`.
  Everywhere else the "contact" buttons/icons open the Contact form.
  WhatsApp number lives in `src/data/site.js` -> `contact.whatsapp` (change it there only).


## Work section (projects)

- Projects are shown as a slider (dots at the bottom; swipe, arrow keys and auto-advance also work).
- Projects live in `src/data/site.js` -> `portfolio.projects` (5 entries). Each slide's animated preview is drawn in
  code in `src/components/ProjectMocks.jsx` (labelled "Illustrative preview", not real screenshots).
- Slides: 01 Wholesale Partner Platform, 02 E-Commerce & Social Media Management, 03 Pooja portfolio, 04 Aaruu portfolio,
  05 Blockchain app, 06 AI Product Suite. A project with a `url` gets a "Visit live site" button (opens in a new tab).
  Mockups are chosen by `id` (wholesale | ecommerce | devfolio | designfolio | blockchain | ai). The Aaruu and Blockchain
  descriptions are general — refine them with real details whenever you like.
=======
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
>>>>>>> origin/main
