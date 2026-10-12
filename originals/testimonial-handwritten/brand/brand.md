# Little Orchard Nursery — brand kit

*Plant nursery and garden shop.* Generated from the SiteShelf listing **Handwritten Note Wall** (Testimonials); every value below is read from that page, not invented.

> **Notes from the garden gate**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **sprout** glyph on a squircle tile. A sprout suits a plant nursery and keeps the handwritten wall feeling alive. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#EFE6D4` | Page background |
| surface | `#D9CDB4` | Cards, panels, raised areas |
| text | `#2B2418` | Body and heading text |
| textMuted | `#5A4E3A` | Secondary text, captions |
| primary | `#D9482B` | Main actions, links, brand colour |
| secondary | `#FFF6A8` | Highlights, charts, second accent |
| border | `#B6A785` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#FFF6A8` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 12.38:1 | pass | pass |
| Muted text on background | 6.55:1 | pass | pass |
| Primary on background | 3.45:1 | fail | pass |
| Text on primary | 4.60:1 | pass | pass |
| Text on surface | 9.75:1 | pass | pass |

**Colours seen on the page** (share of use): `#EFE6D4` 58.7%, `#D9CDB4` 14.7%, `#FFF6A8` 6.1%, `#FFD6E0` 5.8%, `#CFEEDD` 5.0%, `#CFE3FF` 3.1%, `#FFE0B8` 3.0%, `#FFFFFF` 2.6%, `#2B2418` 0.7%, `#D9482B` 0.3%

## Typography

- Headings: **Inter** (weight 800)
- Body: **Caveat**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Inter:wght@400;500;600;800&family=Kalam:wght@400&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Inter | 64 px | 800 | 64px | -1.92px |
| Body | Caveat | 28 px | 600 | 32.2px | normal |
| Button | Inter | 16 px | 600 | normal | normal |
| Caption / eyebrow | Inter | 13 px | 600 | normal | 1.82px |

## Shape, space and motion

- Radius: sm 6 px, md 6 px, lg 6 px, pill (fully rounded)
- Shadows: sm: `rgba(80, 60, 20, 0.25) 2px 6px 18px 0px` · md: `rgba(217, 72, 43, 0.7) 0px 8px 20px -8px` · lg: `rgba(120, 90, 40, 0.18) 0px 0px 160px 0px inset`
- Spacing: base unit 2 px; common steps 6 px, 10 px, 13 px, 14 px, 16 px, 20 px, 22 px, 24 px, 26 px
- Layout: container 1120 px; breakpoints 620 px, 980 px
- Motion: 220 ms, `cubic-bezier(0.3`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** homely, cheerful, generous.

Little Orchard Nursery sounds like a garden gate chat: warm, specific about plants and a bit chatty. It lets customers speak first and thanks them like neighbours.

**Do**

- Let the customer's words come first, unedited
- Use plant names and seasons freely
- Sign off notes with a first name and a town

**Do not**

- Do not polish a customer's words into marketing
- Avoid corporate thank-you language
- Never invent a testimonial

## Taglines

1. Notes from the garden gate
2. Pinned up by our customers
3. Grown here, loved there
4. Words from happy gardens
5. Come and see what grew

**Boilerplate:** Little Orchard Nursery is a plant nursery and garden shop whose customers pin handwritten notes about what they have grown, shared on a wall of paper cards.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Add your note |
| secondaryCta | Pin yours here |
| success | Pinned. Thank you for the kind words. |
| error | Could not pin your note. Please try again. |
| empty | No notes yet. Be the first to pin one. |

---
Source listing key `o:testimonial-handwritten`. Rebuild with `python3 scripts/brand-kit/build.py o:testimonial-handwritten`.
