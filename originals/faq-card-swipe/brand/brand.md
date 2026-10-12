# The Mosaic Museum — brand kit

*Museum with swipeable visitor answers.* Generated from the SiteShelf listing **FAQ Card Swipe** (FAQ); every value below is read from that page, not invented.

> **Planning a visit? Swipe through**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from DM Serif Display |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **grid** glyph. A grid of tiles is a literal mosaic and mirrors the stack of coloured cards. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#EFE9FB` | Page background |
| surface | `#FFD166` | Cards, panels, raised areas |
| text | `#231942` | Body and heading text |
| textMuted | `#5D5278` | Secondary text, captions |
| primary | `#231942` | Main actions, links, brand colour |
| secondary | `#FFD166` | Highlights, charts, second accent |
| border | `#231942` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#FFD166` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 13.74:1 | pass | pass |
| Muted text on background | 6.02:1 | pass | pass |
| Primary on background | 13.74:1 | pass | pass |
| Text on primary | 16.29:1 | pass | pass |
| Text on surface | 11.30:1 | pass | pass |

**Colours seen on the page** (share of use): `#EFE9FB` 78.0%, `#FFD166` 7.6%, `#C9254F` 6.8%, `#06D6A0` 6.1%, `#FFFFFF` 0.7%, `#231942` 0.6%, `#5D5278` 0.1%, `#CFC5EA` 0.0%, `#EF476F` 0.0%, `#8ECAE6` 0.0%

## Typography

- Headings: **DM Serif Display** (weight 400)
- Body: **DM Sans**
- Google Fonts: `https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=DM+Serif+Display&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | DM Serif Display | 64 px | 400 | 65.28px | normal |
| Heading / H2 | DM Serif Display | 29 px | 400 | 31.9px | normal |
| Subheading / H3 | DM Serif Display | 24 px | 400 | normal | normal |
| Body | DM Sans | 16 px | 400 | 24.8px | normal |
| Button | Arial | 22 px | 400 | normal | normal |
| Navigation | DM Sans | 15 px | 700 | 23.25px | normal |

## Shape, space and motion

- Radius: sm 6 px, md 28 px, lg 28 px, pill (fully rounded)
- Shadows: sm: `rgb(35, 25, 66) 6px 6px 0px 0px` · md: `rgb(35, 25, 66) 3px 3px 0px 0px` · lg: `rgb(35, 25, 66) 6px 6px 0px 0px`
- Spacing: base unit 4 px; common steps 2 px, 6 px, 8 px, 10 px, 12 px, 14 px, 16 px, 18 px, 20 px
- Layout: container 1200 px; breakpoints 420 px
- Motion: 150 ms, `cubic-bezier(0.3`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** welcoming, curious, bright.

The Mosaic Museum answers visitors like a cheerful front-of-house guide who has heard every question twice and still enjoys it. It is concrete about hours, access and cost, and playful only when it helps.

**Do**

- Answer the question in the first line
- Give hours, prices and access details exactly
- Use second person and a friendly tone

**Do not**

- Do not use museum jargon like 'collections-led'
- Do not make access details hard to find
- Do not use quizzes or gimmicks for facts

## Taglines

1. Planning a visit? Swipe through
2. Eight answers before you arrive
3. Come as you are, stay as long
4. Every piece of the picture
5. Tiles of art, arranged for you

**Boilerplate:** The Mosaic Museum is a public museum of colour and craft, open daily and free to enter, with step-free access throughout.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Plan your visit |
| secondaryCta | Save for later |
| success | Saved. We will keep this card for you. |
| error | That card would not move. Use the arrow buttons instead. |
| empty | You have no saved cards yet. |

---
Source listing key `o:faq-card-swipe`. Rebuild with `python3 scripts/brand-kit/build.py o:faq-card-swipe`.
