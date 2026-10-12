# Pocketbank — brand kit

*Everyday banking with neatly stacked cards.* Generated from the SiteShelf listing **Wallet Card Stack** (Cards); every value below is read from that page, not invented.

> **Your cards, neatly stacked**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Manrope |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **coins** glyph. Stacked coins hint at both the money and the layered card stack at the heart of the app. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#E9EDF3` | Page background |
| surface | `#F6F8FB` | Cards, panels, raised areas |
| text | `#151A24` | Body and heading text |
| textMuted | `#4B5668` | Secondary text, captions |
| primary | `#2457FF` | Main actions, links, brand colour |
| secondary | `#FF7A45` | Highlights, charts, second accent |
| border | `#C6CFDD` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#A3B8FF` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 14.83:1 | pass | pass |
| Muted text on background | 6.32:1 | pass | pass |
| Primary on background | 4.60:1 | pass | pass |
| Text on primary | 5.41:1 | pass | pass |
| Text on surface | 16.38:1 | pass | pass |

**Colours seen on the page** (share of use): `#E9EDF3` 74.9%, `#F8FAFD` 18.7%, `#2457FF` 0.8%, `#6A96FF` 0.8%, `#0E8F6C` 0.8%, `#43D1A0` 0.8%, `#FF7A45` 0.8%, `#FFC15E` 0.8%, `#1B1F2A` 0.8%, `#434B60` 0.8%

## Typography

- Headings: **Manrope** (weight 800)
- Body: **Manrope**
- Google Fonts: `https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Manrope:wght@600;700;800&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Manrope | 60 px | 800 | 61.2px | -1.8px |
| Heading / H2 | Manrope | 16 px | 800 | normal | normal |
| Body | Manrope | 18 px | 500 | 27px | normal |
| Button | Manrope | 22 px | 600 | normal | normal |
| Caption / eyebrow | Manrope | 13 px | 800 | normal | 2.08px |

## Shape, space and motion

- Radius: sm 7 px, md 22 px, lg 28 px, pill (fully rounded)
- Shadows: sm: `rgba(0, 0, 0, 0.2) 0px 0px 0px 1px inset` · md: `rgba(0, 0, 0, 0.55) 0px 12px 24px -12px` · lg: `rgba(21, 26, 36, 0.5) 0px 40px 80px -40px`
- Spacing: base unit 4 px; common steps 8 px, 9 px, 10 px, 12 px, 14 px, 16 px, 18 px, 20 px, 24 px
- Layout: container 1040 px; breakpoints 440 px, 900 px
- Motion: 420 ms, `cubic-bezier(0.3`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** friendly, tidy, plain-spoken.

Pocketbank sounds like a helpful friend who is good with money and never makes you feel small about it. Copy is short, uses everyday words, and keeps the numbers masked until you ask to see them.

**Do**

- Use everyday words: freeze, spend, top up
- Keep figures masked by default and say so
- Confirm security actions in one reassuring line

**Do not**

- Do not use banking jargon like 'facilitate' or 'remittance'
- Avoid scare tactics around security
- Never show a full card number without a clear tap

## Taglines

1. Your cards, neatly stacked
2. Freeze it in one tap
3. All your cards, one tidy pile
4. Money you can find at a glance
5. Spend, save, sorted

**Boilerplate:** Pocketbank is a mobile banking app that keeps debit, savings, travel and business cards in one tidy stack, with instant freeze and clear spending history.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Show number |
| secondaryCta | Copy number |
| success | Card number copied. |
| error | Could not freeze this card. Please try again. |
| empty | No recent spending on this card. |

---
Source listing key `o:card-wallet-stack`. Rebuild with `python3 scripts/brand-kit/build.py o:card-wallet-stack`.
