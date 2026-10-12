# Pip — brand kit

*Bite-sized habit app with scratch-off deals.* Generated from the SiteShelf listing **Scratch-Off Coupon Pricing** (Pricing); every value below is read from that page, not invented.

> **Scratch it. Save it**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Bricolage Grotesque |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **spark** glyph on a squircle tile. A spark suggests a small idea catching, the way a habit starts. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#FFF4D9` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#261A05` | Body and heading text |
| textMuted | `#6A5527` | Secondary text, captions |
| primary | `#E6355B` | Main actions, links, brand colour |
| secondary | `#2742FF` | Highlights, charts, second accent |
| border | `#261A05` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#671D2F` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 15.58:1 | pass | pass |
| Muted text on background | 6.53:1 | pass | pass |
| Primary on background | 3.82:1 | fail | pass |
| Text on primary | 4.70:1 | pass | pass |
| Text on surface | 17.04:1 | pass | pass |

**Colours seen on the page** (share of use): `#FFF4D9` 64.9%, `#ECD9A6` 16.2%, `#FFFFFF` 12.7%, `#FFF0B8` 4.6%, `#FFD0D9` 0.7%, `#2742FF` 0.3%, `#261A05` 0.2%, `#6A5527` 0.2%, `#E6355B` 0.2%, `#0B0B0F` 0.0%

## Typography

- Headings: **Bricolage Grotesque** (weight 800)
- Body: **Nunito**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@800&family=Nunito:wght@400;700;800&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Bricolage Grotesque | 70 px | 800 | 70px | -2.1px |
| Heading / H2 | Bricolage Grotesque | 24 px | 800 | normal | normal |
| Body | Nunito | 18 px | 400 | 28.8px | normal |
| Button | Nunito | 16 px | 800 | normal | normal |

## Shape, space and motion

- Radius: sm 18 px, md 22 px, lg 22 px, pill (fully rounded)
- Shadows: sm: `rgb(38, 26, 5) 5px 5px 0px 0px` · md: `rgb(38, 26, 5) 3px 3px 0px 0px` · lg: `rgb(38, 26, 5) 5px 5px 0px 0px`
- Spacing: base unit 4 px; common steps 4 px, 5 px, 6 px, 8 px, 10 px, 12 px, 14 px, 16 px, 20 px
- Layout: container 1040 px; breakpoints 860 px
- Motion: 150 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** playful, bright, generous.

Pip talks like an excitable friend handing you a lottery ticket: bright, chatty and always a bit pleased. Prices and discounts stay plain, so the fun never hides the number.

**Do**

- Treat the discount as a small surprise
- State the price and the saving in numbers
- Keep copy punchy with short verbs

**Do not**

- Use pushy sales pressure
- Hide the original price
- Overuse exclamation marks

## Taglines

1. Scratch it. Save it
2. Tiny habits, small prices
3. A little luck, a lot of savings
4. Grow your habit, keep your change
5. Reveal the code, watch it drop

**Boilerplate:** Pip is a habit-building app made of bite-sized daily actions, offered in three plans from Seed to Grove, with occasional scratch-off coupons for new users.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Apply code |
| secondaryCta | Reveal with keyboard |
| success | Code applied. Prices updated. |
| error | That code is not valid. Try scratching again. |
| empty | No coupon yet. Scratch the card. |

---
Source listing key `o:pricing-coupon-scratch`. Rebuild with `python3 scripts/brand-kit/build.py o:pricing-coupon-scratch`.
