# Tidewell Goods — brand kit

*Everyday goods shop with a simple checkout.* Generated from the SiteShelf listing **Payment Card Form** (Form); every value below is read from that page, not invented.

> **Pay with confidence**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Manrope |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **drop** glyph on a squircle tile. A water drop echoes the tide and well in the name. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#0B1226` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#FFFFFF` | Body and heading text |
| textMuted | `#C7D0E6` | Secondary text, captions |
| primary | `#19C39A` | Main actions, links, brand colour |
| secondary | `#1D3A7A` | Highlights, charts, second accent |
| border | `#D0D5DD` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#1D3A7A` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 18.60:1 | pass | pass |
| Muted text on background | 12.04:1 | pass | pass |
| Primary on background | 8.25:1 | pass | pass |
| Text on primary | 8.71:1 | pass | pass |
| Text on surface | 1.00:1 | fail | fail |

**Colours seen on the page** (share of use): `#0B1226` 63.0%, `#1D3A7A` 15.8%, `#FFFFFF` 15.7%, `#2C4FD6` 1.5%, `#7B3FE4` 1.5%, `#C03FD0` 1.5%, `#19C39A` 1.0%, `#D0D5DD` 0.0%, `#667085` 0.0%, `#F5D77A` 0.0%

## Typography

- Headings: **Manrope** (weight 800)
- Body: **Manrope**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;800&family=Space+Mono:wght@400;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Manrope | 22 px | 800 | 33px | normal |
| Button | Manrope | 16 px | 800 | normal | normal |
| Caption / eyebrow | Manrope | 9 px | 400 | 13.5px | 1px |

## Shape, space and motion

- Radius: sm 6 px, md 12 px, lg 18 px
- Shadows: sm: `rgba(0, 0, 0, 0.533) 0px 24px 50px 0px` · md: `rgba(0, 0, 0, 0.533) 0px 24px 50px 0px` · lg: `rgba(0, 0, 0, 0.533) 0px 24px 50px 0px`
- Spacing: base unit 2 px; common steps 3 px, 6 px, 10 px, 12 px, 14 px, 16 px, 18 px, 22 px, 24 px
- Layout: container 980 px; breakpoints 860 px
- Motion: 200 ms, `cubic-bezier(0.3`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** trustworthy, calm, clear.

Sounds like a shopkeeper who wants the payment to feel easy: short, clear steps and reassurance when it counts. It never rushes or surprises with extra charges.

**Do**

- State the total up front
- Explain errors by field
- Use a reassuring tone for security

**Do not**

- No pressure like order now
- Avoid payment jargon
- Never hide the test-card notice

## Taglines

1. Pay with confidence
2. A simple checkout, nothing hidden
3. Goods, delivered. Payment, secure
4. Your card, in safe hands
5. Quick payment, clear total

**Boilerplate:** Tidewell Goods is a small online shop selling everyday goods, with a straightforward checkout that shows your card live and confirms every detail.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Pay $98.00 |
| secondaryCta | Back to basket |
| success | Payment received. Thank you! |
| error | Card declined. Check the details and try again. |
| empty | Your basket is empty. Add something first. |

---
Source listing key `o:payment-card-form`. Rebuild with `python3 scripts/brand-kit/build.py o:payment-card-form`.
