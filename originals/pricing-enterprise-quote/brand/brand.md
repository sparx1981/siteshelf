# Northgate — brand kit

*Operations platform for logistics firms.* Generated from the SiteShelf listing **Enterprise Quote Builder** (Pricing); every value below is read from that page, not invented.

> **Build your Northgate quote**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Manrope |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **compass** glyph on a squircle tile. A compass points the way, fitting a name like Northgate and a logistics audience. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#EEF1F6` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#52617A` | Body and heading text |
| textMuted | `#0F1B2D` | Secondary text, captions |
| primary | `#2F6BFF` | Main actions, links, brand colour |
| secondary | `#C3D2F2` | Highlights, charts, second accent |
| border | `#DBE2EE` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#C3D2F2` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 5.54:1 | pass | pass |
| Muted text on background | 15.27:1 | pass | pass |
| Primary on background | 3.97:1 | fail | pass |
| Text on primary | 4.50:1 | fail | pass |
| Text on surface | 6.27:1 | pass | pass |

**Colours seen on the page** (share of use): `#EEF1F6` 64.5%, `#FFFFFF` 26.4%, `#0F2A52` 7.8%, `#2F6BFF` 0.8%, `#52617A` 0.2%, `#0F1B2D` 0.1%, `#C3D2F2` 0.0%, `#9FB4DE` 0.0%, `#17B890` 0.0%, `#5FF0C6` 0.0%

## Typography

- Headings: **Manrope** (weight 800)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=DM+Mono:wght@400&family=Inter:wght@400;500;600&family=Manrope:wght@600;700;800&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Manrope | 58 px | 800 | 62.64px | -1.16px |
| Heading / H2 | Manrope | 17 px | 800 | normal | normal |
| Body | Inter | 16 px | 400 | 24.8px | normal |
| Button | Inter | 16 px | 400 | 24.8px | normal |
| Caption / eyebrow | Inter | 13 px | 400 | 20.15px | normal |

## Shape, space and motion

- Radius: sm 7 px, md 14 px, lg 18 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 2 px; common steps 2 px, 4 px, 6 px, 7 px, 8 px, 10 px, 12 px, 14 px, 16 px
- Layout: container 1200 px; breakpoints 960 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** assured, exact, businesslike.

Northgate speaks like a seasoned solutions lead: calm, numerate and respectful of a buyer's time. Prices appear before promises, and every discount is shown with its percentage.

**Do**

- Show line items and totals together
- State the term discount as a percentage
- Name who will confirm the quote and when

**Do not**

- Do not hide pricing behind 'contact us'
- Avoid enterprise filler like 'robust' and 'end-to-end'
- Never use countdown pressure

## Taglines

1. Build your Northgate quote
2. Pricing you can read in one go
3. Price it. Then talk to us
4. Logistics software, plainly quoted
5. Seats, terms, total

**Boilerplate:** Northgate Systems provides an operations platform for logistics firms, with modular pricing, term discounts and a named account manager for every customer.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Request this quote |
| secondaryCta | Copy summary |
| success | Quote requested. Your account manager will reply within one working day. |
| error | We could not send your request. Please try again. |
| empty | Choose at least one module to see your quote. |

---
Source listing key `o:pricing-enterprise-quote`. Rebuild with `python3 scripts/brand-kit/build.py o:pricing-enterprise-quote`.
