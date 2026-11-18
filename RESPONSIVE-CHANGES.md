# Responsive update

Mobile (320–420px), tablet and desktop layouts were reworked. Design, copy, colours,
animations and routing are unchanged.

## Main fix
Horizontal overflow on phones: large blurred background blobs and rotated/offset
elements were wider than the screen, so the page layout became wider than the viewport.
- `index.css`: `overflow-x: clip` on html/body (keeps sticky working), 16px form fields on
  phones (stops iOS zoom-on-focus), tighter gutters under 380px.
- `App.jsx`: root wrapper clips horizontal overflow.
- `Blobs`, Hero ring, Work glow, Contact blobs: smaller on phones / capped to screen width.
- All single-column grids now use `grid-cols-1` so cards can shrink (no min-content blow-out).

## Per-section
- Navbar: smaller logo, working solid mobile-menu background, scrollable menu, safe-area padding.
- Hero: scaled headline, full-width stacked buttons, compact agent-console card.
- Services / About / Process / FAQ / Testimonials / CTA bands: tighter card padding, stacked CTAs.
- Work slider: mobile-sized preview height, stacked full-width buttons, design-portfolio mock fits narrow cards.
- Forms (Contact, Early access): single-column fields, full-width submit.
- Future Scopes page and product cards: wrapping badges, taller preview area, narrow-safe mini UIs.
- Footer: 1 → 2 → 4 column layout, safe-area bottom padding.
- Floating buttons respect notches / home indicator.

## Preview at different sizes
Open `responsive-preview.html` while `npm run preview` (port 4173) is running.
