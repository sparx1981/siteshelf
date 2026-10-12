# Oakhill Home — brand kit

*Independent homeware shop with secure checkout.* Generated from the SiteShelf listing **Payment Failed Recovery** (Error Page); every value below is read from that page, not invented.

> **Nothing charged. Let's try again.**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Fraunces |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **home** glyph on a circle tile. A simple house shape suits a homeware shop and signals a safe, familiar place. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#FAF8F5` | Page background |
| surface | `#0F766E` | Cards, panels, raised areas |
| text | `#1E1B16` | Body and heading text |
| textMuted | `#625A4D` | Secondary text, captions |
| primary | `#0F766E` | Main actions, links, brand colour |
| secondary | `#C9402E` | Highlights, charts, second accent |
| border | `#D8CFBF` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#9AC5C2` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 16.19:1 | pass | pass |
| Muted text on background | 6.41:1 | pass | pass |
| Primary on background | 5.16:1 | pass | pass |
| Text on primary | 5.47:1 | pass | pass |
| Text on surface | 3.14:1 | fail | pass |

**Colours seen on the page** (share of use): `#FAF8F5` 97.2%, `#0F766E` 1.5%, `#1E1B16` 0.5%, `#FBE4E0` 0.2%, `#E9D9C0` 0.2%, `#D6E6E0` 0.2%, `#625A4D` 0.1%, `#2F7A6B` 0.1%, `#A47B4A` 0.1%, `#C9654F` 0.0%

## Typography

- Headings: **Fraunces** (weight 600)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=DM+Mono:wght@400&family=Fraunces:wght@600&family=Inter:wght@400;500;600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Fraunces | 40 px | 600 | 44px | normal |
| Heading / H2 | Fraunces | 20 px | 600 | normal | normal |
| Body | Inter | 16 px | 400 | 24.8px | normal |
| Button | Inter | 15 px | 600 | normal | normal |

## Shape, space and motion

- Radius: sm 6 px, md 14 px, lg 20 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 3 px, 4 px, 8 px, 10 px, 12 px, 14 px, 15 px, 16 px, 18 px
- Layout: container 1100 px; breakpoints 480 px, 900 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** reassuring, plain-spoken, warm.

Sounds like a shopkeeper who comes round the counter when the card machine fails: calm, clear and kind. It says first that nothing was charged, then helps, never blames.

**Do**

- Say what has and hasn't happened in the first sentence
- Offer one clear next step at a time
- Keep the basket and the time left visible

**Do not**

- Do not blame the customer or the bank
- Do not use alarm words like failed transaction
- Do not hide the support option

## Taglines

1. Nothing charged. Let's try again.
2. Your basket is safe with us
3. A hiccup, not a dead end
4. Real people, ready to help
5. Homewares you can take your time over

**Boilerplate:** Oakhill Home is an independent British homeware shop selling considered furniture and kitchen pieces, with secure checkout and a team of real people on hand when something goes wrong.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Pay £184.50 |
| secondaryCta | Chat with us |
| success | Payment received. Your order is on its way. |
| error | Your payment didn't go through. You haven't been charged. |
| empty | Your basket is empty. Browse the shop to begin. |

---
Source listing key `o:error-payment-failed`. Rebuild with `python3 scripts/brand-kit/build.py o:error-payment-failed`.
