# Ledgerline — brand kit

*Finance operations software.* Generated from the SiteShelf listing **Case Study Split Testimonial** (Testimonials); every value below is read from that page, not invented.

> **Results our customers can point at**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Newsreader |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **bars** glyph on a squircle tile. Rising bars reflect measurable results and finance reports. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#FBFAF6` | Page background |
| surface | `#F1EFE7` | Cards, panels, raised areas |
| text | `#14171A` | Body and heading text |
| textMuted | `#50575E` | Secondary text, captions |
| primary | `#2457FF` | Main actions, links, brand colour |
| secondary | `#0F7A5C` | Highlights, charts, second accent |
| border | `#E2DFD2` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#A3B8FF` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 17.23:1 | pass | pass |
| Muted text on background | 7.02:1 | pass | pass |
| Primary on background | 5.18:1 | pass | pass |
| Text on primary | 5.41:1 | pass | pass |
| Text on surface | 15.63:1 | pass | pass |

**Colours seen on the page** (share of use): `#FBFAF6` 98.8%, `#14171A` 0.4%, `#2457FF` 0.3%, `#50575E` 0.3%, `#E0702B` 0.0%, `#0F9D7A` 0.0%, `#B0344F` 0.0%, `#0F7A5C` 0.0%, `#E2DFD2` 0.0%, `#A3B8FF` 0.0%

## Typography

- Headings: **Newsreader** (weight 600)
- Body: **Figtree**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Figtree:wght@500;600;700&family=Newsreader:ital,wght@0,500;0,600;1,500&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Newsreader | 58 px | 600 | 60.9px | -0.87px |
| Body | Figtree | 18 px | 500 | 27.9px | normal |
| Button | Figtree | 16 px | 500 | 24.8px | normal |
| Caption / eyebrow | Figtree | 13 px | 700 | normal | 1.82px |

## Shape, space and motion

- Radius: sm 12 px, md 16 px, lg 24 px, pill (fully rounded)
- Shadows: sm: `rgba(20, 23, 26, 0.4) 0px 10px 24px -14px` · md: `rgba(20, 23, 26, 0.4) 0px 30px 60px -40px` · lg: `rgba(20, 23, 26, 0.4) 0px 10px 24px -14px`
- Spacing: base unit 4 px; common steps 4 px, 6 px, 8 px, 12 px, 14 px, 16 px, 18 px, 24 px, 28 px
- Layout: container 1180 px; breakpoints 520 px, 860 px
- Motion: 250 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** credible, measured, specific.

Ledgerline speaks like a well-prepared controller giving a reference: factual, grateful and numerate. It lets customers speak first and attaches a number to every claim.

**Do**

- Pair every quote with a measured result
- Name the customer and the sector
- Use units and time frames exactly

**Do not**

- Do not use vague 'results' without figures
- Do not exaggerate percentages
- Do not edit a quote beyond clarity

## Taglines

1. Results our customers can point at
2. Closed faster, with receipts
3. Month-end in days, not weeks
4. Finance teams on the record
5. Numbers behind the thank-you

**Boilerplate:** Ledgerline makes finance operations software that helps companies close their books faster, with outcomes confirmed by its customers in their own words.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Read the case study |
| secondaryCta | Next story |
| success | Case study opened. |
| error | We could not load that story. Pick another customer. |
| empty | No stories in this sector yet. |

---
Source listing key `o:testimonial-case-split`. Rebuild with `python3 scripts/brand-kit/build.py o:testimonial-case-split`.
