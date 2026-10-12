# Fennel & Fig Market — brand kit

*Neighbourhood grocer with delivery.* Generated from the SiteShelf listing **Region And Language Footer** (Footer); every value below is read from that page, not invented.

> **Good food, delivered like a neighbour**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Newsreader |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **bag** glyph on a squircle tile. A shopping bag is a friendly, immediate sign of groceries. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#FDF9F1` | Page background |
| surface | `#1F2A1F` | Cards, panels, raised areas |
| text | `#26211B` | Body and heading text |
| textMuted | `#615748` | Secondary text, captions |
| primary | `#8C2F5F` | Main actions, links, brand colour |
| secondary | `#8FD16A` | Highlights, charts, second accent |
| border | `#CFC3A8` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#8FD16A` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 15.20:1 | pass | pass |
| Muted text on background | 6.74:1 | pass | pass |
| Primary on background | 7.44:1 | pass | pass |
| Text on primary | 7.82:1 | pass | pass |
| Text on surface | 1.07:1 | fail | fail |

**Colours seen on the page** (share of use): `#FDF9F1` 69.9%, `#1F2A1F` 28.3%, `#F2E3EC` 1.0%, `#8C2F5F` 0.5%, `#615748` 0.1%, `#E9C07A` 0.1%, `#B0587F` 0.1%, `#9BB25A` 0.1%, `#2F7D4F` 0.0%, `#2F5FB0` 0.0%

## Typography

- Headings: **Newsreader** (weight 700)
- Body: **Manrope**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&family=Newsreader:wght@600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Newsreader | 64 px | 700 | 65.28px | -0.96px |
| Heading / H2 | Newsreader | 20 px | 700 | normal | normal |
| Subheading / H3 | Newsreader | 17 px | 700 | normal | normal |
| Button | Manrope | 14 px | 600 | normal | normal |

## Shape, space and motion

- Radius: sm 10 px, md 14 px, lg 18 px, pill (fully rounded)
- Shadows: sm: `rgba(0, 0, 0, 0.6) 0px 24px 60px -20px` · md: `rgba(0, 0, 0, 0.6) 0px 24px 60px -20px` · lg: `rgba(0, 0, 0, 0.6) 0px 24px 60px -20px`
- Spacing: base unit 2 px; common steps 2 px, 6 px, 8 px, 10 px, 11 px, 12 px, 14 px, 16 px, 18 px
- Layout: container 1408 px; breakpoints 560 px, 860 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** welcoming, fresh, generous.

Fennel & Fig Market talks like a good grocer who knows your name: warm, appetising and unfussy. It greets people in their own language and currency and keeps prices plain.

**Do**

- Greet in the shopper's language when known
- Describe food by taste and season
- Show prices in the local currency

**Do not**

- Use supermarket slogans like 'unbeatable value'
- Overstate freshness
- Make region settings sound technical

## Taglines

1. Good food, delivered like a neighbour
2. Fresh from the market, to your door
3. Your shop, your language
4. A basket with a human touch
5. Welcome in, take your time

**Boilerplate:** Fennel & Fig Market is a neighbourhood grocer that delivers seasonal food across several countries, with prices, greetings and language that adapt to where each shopper lives.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Start shopping |
| secondaryCta | Change region |
| success | Region saved. Prices updated. |
| error | We do not deliver there yet. Try another region. |
| empty | Your basket is empty. Fill it with something good. |

---
Source listing key `o:footer-region-picker`. Rebuild with `python3 scripts/brand-kit/build.py o:footer-region-picker`.
