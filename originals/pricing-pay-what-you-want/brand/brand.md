# Kettle & Pen — brand kit

*Distraction-free writing app by one indie developer.* Generated from the SiteShelf listing **Pay What You Want** (Pricing); every value below is read from that page, not invented.

> **Pay what feels fair**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Fraunces |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **coins** glyph on a squircle tile. Coins in a jar mirror the page's pay-what-you-want mechanic. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F8F1E3` | Page background |
| surface | `#FFFAF0` | Cards, panels, raised areas |
| text | `#6B5C48` | Body and heading text |
| textMuted | `#2A2118` | Secondary text, captions |
| primary | `#C2452D` | Main actions, links, brand colour |
| secondary | `#4D6B3A` | Highlights, charts, second accent |
| border | `#CDBB94` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#E5B1A7` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 5.75:1 | pass | pass |
| Muted text on background | 14.06:1 | pass | pass |
| Primary on background | 4.47:1 | fail | pass |
| Text on primary | 5.02:1 | pass | pass |
| Text on surface | 6.21:1 | pass | pass |

**Colours seen on the page** (share of use): `#F8F1E3` 94.6%, `#FFFFFF` 1.9%, `#C2452D` 1.0%, `#9DB8AE` 0.7%, `#EADFC5` 0.6%, `#6B5C48` 0.4%, `#2A2118` 0.3%, `#000000` 0.2%, `#E8A93A` 0.2%, `#4D6B3A` 0.1%

## Typography

- Headings: **Fraunces** (weight 600)
- Body: **Karla**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,600;0,700;1,600&family=Karla:wght@400;500;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Fraunces | 74 px | 600 | 75.48px | -1.48px |
| Body | Karla | 17 px | 400 | 27.2px | normal |
| Button | Karla | 15 px | 700 | normal | normal |

## Shape, space and motion

- Radius: sm 3 px, md 12 px, lg 26 px, pill (fully rounded)
- Shadows: sm: `rgba(80, 50, 10, 0.5) 0px 30px 60px -40px` · md: `rgba(80, 50, 10, 0.5) 0px 30px 60px -40px` · lg: `rgba(80, 50, 10, 0.5) 0px 30px 60px -40px`
- Spacing: base unit 4 px; common steps 4 px, 6 px, 8 px, 10 px, 12 px, 14 px, 16 px, 20 px, 30 px
- Layout: container 980 px; breakpoints 760 px
- Motion: 350 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** honest, warm, human.

Speaks like a solo developer writing a note to friends: plain, personal, a little self-deprecating. Money is discussed openly and without pressure.

**Do**

- Use I and you, one person to one person
- Say where the money goes, to the penny
- Make free use a first-class option

**Do not**

- No guilt-tripping for not paying
- No corporate plural we
- No tiered pricing jargon

## Taglines

1. Pay what feels fair
2. Free, unless you'd like to help
3. Write more, pay what you can
4. A jar for keeping me writing
5. One developer, one honest price

**Boilerplate:** Kettle & Pen is a distraction-free writing app made by one indie developer, free to use for as long as you like and supported by whatever readers choose to pay.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Pay £15 |
| secondaryCta | Use it free |
| success | Thank you, that really helps |
| error | Payment didn't go through, you haven't been charged |
| empty | The jar is empty so far, be the first |

---
Source listing key `o:pricing-pay-what-you-want`. Rebuild with `python3 scripts/brand-kit/build.py o:pricing-pay-what-you-want`.
