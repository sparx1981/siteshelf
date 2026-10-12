# Fernhill Market — brand kit

*Neighbourhood grocer with a considered basket.* Generated from the SiteShelf listing **Cart Quantity Stepper** (Form Controls); every value below is read from that page, not invented.

> **Your basket, your pace**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Fraunces |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **sprout** glyph on a squircle tile. A sprout reflects fresh produce and the local, growing feel of the market. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F9F5EC` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#6B6253` | Body and heading text |
| textMuted | `#25201A` | Secondary text, captions |
| primary | `#2F7D4F` | Main actions, links, brand colour |
| secondary | `#C0352B` | Highlights, charts, second accent |
| border | `#D9CFB3` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#A8C8B5` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 5.52:1 | pass | pass |
| Muted text on background | 14.84:1 | pass | pass |
| Primary on background | 4.63:1 | pass | pass |
| Text on primary | 5.04:1 | pass | pass |
| Text on surface | 6.00:1 | pass | pass |

**Colours seen on the page** (share of use): `#F9F5EC` 75.1%, `#FFFFFF` 22.3%, `#25201A` 1.0%, `#2F7D4F` 0.9%, `#6B6253` 0.2%, `#EFE6D0` 0.1%, `#C0352B` 0.1%, `#E9C07A` 0.1%, `#FFD6CF` 0.1%, `#E4ECF7` 0.1%

## Typography

- Headings: **Fraunces** (weight 700)
- Body: **DM Sans**
- Google Fonts: `https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Fraunces:wght@600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Fraunces | 56 px | 700 | 58.24px | -0.84px |
| Heading / H2 | Fraunces | 22 px | 700 | normal | normal |
| Body | DM Sans | 18 px | 400 | 27px | normal |
| Button | DM Sans | 16 px | 400 | 24px | normal |
| Caption / eyebrow | DM Sans | 13 px | 700 | normal | 2.08px |

## Shape, space and motion

- Radius: sm 8 px, md 16 px, lg 24 px, pill (fully rounded)
- Shadows: sm: `rgba(60, 40, 10, 0.5) 0px 24px 50px -34px` · md: `rgba(60, 40, 10, 0.5) 0px 24px 50px -34px` · lg: `rgba(60, 40, 10, 0.5) 0px 24px 50px -34px`
- Spacing: base unit 2 px; common steps 2 px, 3 px, 4 px, 6 px, 8 px, 12 px, 14 px, 16 px, 18 px
- Layout: container 1040 px; breakpoints 520 px, 860 px
- Motion: 150 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** warm, tidy, honest.

Speaks like a grocer who knows your order: friendly, brief and honest about stock. Limits are explained, never just refused.

**Do**

- Explain a limit in a sentence, not an error code
- Show money and counts in plain numbers
- Thank customers once, at the end

**Do not**

- No pushy upsell wording
- No blaming the customer for stock limits
- No loud sale language

## Taglines

1. Your basket, your pace
2. Good food, gently priced
3. From our shelves to your door
4. Fresh by the handful
5. A market that knows your name

**Boilerplate:** Fernhill Market is a neighbourhood grocer that delivers seasonal produce and pantry staples, with a basket that shows exactly what is in stock and what you owe.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Checkout |
| secondaryCta | Undo |
| success | Basket updated |
| error | Only 3 left, we have set it to the most we have |
| empty | Your basket is empty, fill it with something good |

---
Source listing key `o:control-cart-stepper`. Rebuild with `python3 scripts/brand-kit/build.py o:control-cart-stepper`.
