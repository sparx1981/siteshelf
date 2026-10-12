# Billwright — brand kit

*Quick invoice maker for freelancers.* Generated from the SiteShelf listing **Invoice Builder** (App UI); every value below is read from that page, not invented.

> **Invoices that look the part**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from DM Sans |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **coins** glyph on a squircle tile. Stacked coins say money and billing in one quick glance. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#EEF0F4` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#1A1F2B` | Body and heading text |
| textMuted | `#2F5BEA` | Secondary text, captions |
| primary | `#2F5BEA` | Main actions, links, brand colour |
| secondary | `#8DA5F3` | Highlights, charts, second accent |
| border | `#D5D9E3` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#8DA5F3` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 14.44:1 | pass | pass |
| Muted text on background | 4.84:1 | pass | pass |
| Primary on background | 4.84:1 | pass | pass |
| Text on primary | 5.52:1 | pass | pass |
| Text on surface | 16.47:1 | pass | pass |

**Colours seen on the page** (share of use): `#EEF0F4` 43.9%, `#FFFFFF` 38.8%, `#DDE1EA` 16.8%, `#2F5BEA` 0.2%, `#1A1F2B` 0.1%, `#667085` 0.1%, `#98A2B3` 0.0%, `#8DA5F3` 0.0%

## Typography

- Headings: **DM Sans** (weight 700)
- Body: **DM Sans**
- Google Fonts: `https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=DM+Mono:wght@400;500&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | DM Sans | 34 px | 700 | 34px | -0.68px |
| Heading / H2 | DM Sans | 13 px | 700 | normal | 1.04px |
| Button | Arial | 20 px | 400 | normal | normal |
| Caption / eyebrow | DM Sans | 11.7 px | 400 | 16.9167px | normal |

## Shape, space and motion

- Radius: sm 8 px, md 10 px, lg 16 px
- Shadows: sm: `rgba(30, 40, 70, 0.18) 0px 20px 50px 0px` · md: `rgba(30, 40, 70, 0.18) 0px 20px 50px 0px` · lg: `rgba(30, 40, 70, 0.18) 0px 20px 50px 0px`
- Spacing: base unit 2 px; common steps 2 px, 4 px, 5 px, 6 px, 8 px, 9 px, 10 px, 12 px, 24 px
- Layout: container 1360 px; breakpoints 560 px, 1000 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** tidy, brisk, trustworthy.

Sounds like a sensible bookkeeper: brisk, exact and never condescending about money. Labels are standard invoice words, and totals are always shown with currency and tax so nothing is a surprise.

**Do**

- Use standard invoice terms like subtotal, tax and due date
- Always show currency and tax rate with totals
- Confirm changes immediately in the preview

**Do not**

- Do not use accounting jargon without a label
- Do not hide discounts or fees
- Do not add cute copy to money

## Taglines

1. Invoices that look the part
2. Type it once, print it right
3. Get paid with less paperwork
4. Line items, totals, done
5. Billing without the busywork

**Boilerplate:** Billwright is a split-screen invoice builder that lets freelancers and small businesses edit line items, tax and discounts and see a print-ready invoice update as they type.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Print / Save PDF |
| secondaryCta | Add item |
| success | Invoice ready. Save it as a PDF. |
| error | Check the highlighted amounts. They need to be numbers. |
| empty | No line items yet. Add your first item. |

---
Source listing key `o:invoice-builder`. Rebuild with `python3 scripts/brand-kit/build.py o:invoice-builder`.
