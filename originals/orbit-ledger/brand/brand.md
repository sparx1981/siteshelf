# Orbit Ledger — brand kit

*Pots for tax, payroll and profit.* Generated from the SiteShelf listing **Orbit Ledger Fintech Hero** (Hero Section); every value below is read from that page, not invented.

> **Every pound, in its place**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Sora |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **coins** glyph on a squircle tile. Coins in pots express money sorted into places, with the orbit in the name. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#060D1F` | Page background |
| surface | `#40E0D0` | Cards, panels, raised areas |
| text | `#E8EEFC` | Body and heading text |
| textMuted | `#8A97B8` | Secondary text, captions |
| primary | `#40E0D0` | Main actions, links, brand colour |
| secondary | `#8B7BFF` | Highlights, charts, second accent |
| border | `#40E0D0` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#216460` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 16.65:1 | pass | pass |
| Muted text on background | 6.63:1 | pass | pass |
| Primary on background | 11.79:1 | pass | pass |
| Text on primary | 11.97:1 | pass | pass |
| Text on surface | 1.41:1 | fail | fail |

**Colours seen on the page** (share of use): `#060D1F` 96.6%, `#40E0D0` 1.2%, `#8B7BFF` 0.8%, `#FF8A7A` 0.8%, `#E8EEFC` 0.5%, `#8A97B8` 0.2%, `#000000` 0.0%, `#216460` 0.0%

## Typography

- Headings: **Sora** (weight 600)
- Body: **Sora**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Sora:wght@500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Sora | 74.9 px | 600 | 78.624px | -2.2464px |
| Body | Sora | 18 px | 400 | 27px | normal |
| Button | Sora | 15 px | 600 | normal | normal |
| Navigation | Sora | 14 px | 400 | 21px | normal |

## Shape, space and motion

- Radius: sm 8 px, md 8 px, lg 8 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 8 px, 10 px, 12 px, 14 px, 16 px, 18 px, 20 px, 26 px, 32 px
- Layout: container 1200 px; breakpoints 960 px
- Motion: 250 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** precise, reassuring, modern.

Orbit Ledger speaks like an unflappable finance director who gets to the point in pounds and pence. It is calm about money, exact with figures and light with metaphors.

**Do**

- Always show the exact amount to the penny
- Use British money language: tax, payroll, VAT
- Say what happens automatically and when

**Do not**

- Do not promise to make anyone rich
- Do not use crypto or trading slang
- Do not round a tax figure

## Taglines

1. Every pound, in its place
2. Pots that fill themselves
3. Tax, payroll and profit, sorted
4. Your invoice lands, your money divides
5. Know what is yours to spend

**Boilerplate:** Orbit Ledger is a business finance app whose pots for tax, payroll and profit fill automatically the moment an invoice is paid.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Start free |
| secondaryCta | See how pots work |
| success | Invoice paid. £2,400.00 moved into your pots. |
| error | We could not split that payment. No money has moved. |
| empty | No pots yet. Create one for tax. |

---
Source listing key `o:orbit-ledger`. Rebuild with `python3 scripts/brand-kit/build.py o:orbit-ledger`.
