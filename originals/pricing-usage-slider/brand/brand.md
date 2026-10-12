# Pingwell — brand kit

*Pay-per-request API for outbound messages.* Generated from the SiteShelf listing **Usage Pricing Slider** (Pricing); every value below is read from that page, not invented.

> **Pay for what you send**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Plus Jakarta Sans |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **bolt** glyph. A bolt suggests the speed of a ping and a single quick request. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F7F9FC` | Page background |
| surface | `#E6F6EF` | Cards, panels, raised areas |
| text | `#0F172A` | Body and heading text |
| textMuted | `#5B6780` | Secondary text, captions |
| primary | `#0F9D6B` | Main actions, links, brand colour |
| secondary | `#7BC9AE` | Highlights, charts, second accent |
| border | `#E3E8F0` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#0D4836` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 16.93:1 | pass | pass |
| Muted text on background | 5.39:1 | pass | pass |
| Primary on background | 3.29:1 | fail | pass |
| Text on primary | 5.66:1 | pass | pass |
| Text on surface | 15.98:1 | pass | pass |

**Colours seen on the page** (share of use): `#F7F9FC` 99.3%, `#0F172A` 0.3%, `#0F9D6B` 0.2%, `#5B6780` 0.2%, `#0B6B49` 0.0%, `#7BC9AE` 0.0%, `#E3E8F0` 0.0%, `#0B0B0F` 0.0%, `#0D4836` 0.0%

## Typography

- Headings: **Plus Jakarta Sans** (weight 800)
- Body: **Plus Jakarta Sans**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;700;800&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Plus Jakarta Sans | 26 px | 800 | 39px | normal |
| Subheading / H3 | Plus Jakarta Sans | 17 px | 700 | 25.5px | normal |
| Body | Plus Jakarta Sans | 15 px | 400 | 22.5px | normal |
| Button | Plus Jakarta Sans | 13.3 px | 400 | normal | normal |
| Caption / eyebrow | Plus Jakarta Sans | 16 px | 500 | 24px | normal |

## Shape, space and motion

- Radius: sm 14 px, md 16 px, lg 24 px, pill (fully rounded)
- Shadows: sm: `rgb(15, 157, 107) 3px 0px 0px 0px inset` · md: `rgba(0, 0, 0, 0.133) 0px 1px 4px 0px` · lg: `rgba(15, 157, 107, 0.133) 0px 8px 24px 0px`
- Spacing: base unit 4 px; common steps 2 px, 4 px, 10 px, 12 px, 14 px, 16 px, 18 px, 20 px, 26 px
- Layout: container 1200 px; breakpoints 700 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** honest, exact, friendly.

Sounds like a developer-friendly billing page: it shows the math and keeps the promises small. Every price is per 1,000 requests, every tier is visible and the savings are real figures.

**Do**

- Show the unit price and the total together
- Name tiers and show the cost of each
- State the annual saving in percent

**Do not**

- Do not use vague phrases like custom pricing
- Do not hide overage costs
- Do not use enterprise jargon

## Taglines

1. Pay for what you send
2. No seats. No surprises.
3. Priced per thousand, nothing more
4. See the bill before you build
5. Usage pricing that adds up honestly

**Boilerplate:** Pingwell is an API for sending messages priced per 1,000 requests, with no seats and no minimums, so teams can see exactly what each tier costs before they grow.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Annual, save 20% |
| secondaryCta | Monthly |
| success | Plan selected. Your estimate is updated. |
| error | Couldn't calculate. Enter a number between 10K and 10M. |
| empty | Move the slider to see your price. |

---
Source listing key `o:pricing-usage-slider`. Rebuild with `python3 scripts/brand-kit/build.py o:pricing-usage-slider`.
