# Meterly — brand kit

*Usage-based pricing with a live bill estimator.* Generated from the SiteShelf listing **Usage Pricing Calculator** (Pricing); every value below is read from that page, not invented.

> **Know your bill before you ship**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Sora |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **coins** glyph on a squircle tile. Coins state the pricing idea outright and sit well on a green summary card. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F4F6F4` | Page background |
| surface | `#0E3B2E` | Cards, panels, raised areas |
| text | `#5F7268` | Body and heading text |
| textMuted | `#10231C` | Secondary text, captions |
| primary | `#B8F2D0` | Main actions, links, brand colour |
| secondary | `#12B76A` | Highlights, charts, second accent |
| border | `#DDE3DD` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#546C60` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 4.72:1 | pass | pass |
| Muted text on background | 15.11:1 | pass | pass |
| Primary on background | 1.16:1 | fail | fail |
| Text on primary | 15.58:1 | pass | pass |
| Text on surface | 2.43:1 | fail | fail |

**Colours seen on the page** (share of use): `#F4F6F4` 75.8%, `#0E3B2E` 22.4%, `#16513F` 0.5%, `#12B76A` 0.5%, `#E4E9E4` 0.2%, `#5F7268` 0.2%, `#B8F2D0` 0.1%, `#10231C` 0.1%, `#D1FADF` 0.1%, `#9FC7B3` 0.1%

## Typography

- Headings: **Sora** (weight 700)
- Body: **IBM Plex Sans**
- Google Fonts: `https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500&family=Sora:wght@500;600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Sora | 44 px | 700 | 48.4px | -1.32px |
| Heading / H2 | Sora | 18 px | 600 | normal | normal |
| Body | IBM Plex Sans | 16 px | 400 | 24px | normal |
| Button | Arial | 13.3 px | 400 | normal | normal |
| Caption / eyebrow | IBM Plex Sans | 14 px | 400 | normal | normal |

## Shape, space and motion

- Radius: sm 8 px, md 14 px, lg 20 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 2 px, 4 px, 6 px, 8 px, 9 px, 12 px, 16 px, 18 px, 20 px
- Layout: container 1120 px; breakpoints 880 px
- Motion: 300 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** straight, numerate, friendly.

Meterly speaks like an honest accountant who likes you: plain numbers first, clear about tiers and the cheapest plan. It never hides the maths.

**Do**

- Show the maths: rate, quantity and total
- Name the cheapest plan out loud
- Use tabular figures and currency symbols

**Do not**

- Do not hide fees in footnotes
- Avoid words like starting from
- Never push a more expensive plan

## Taglines

1. Know your bill before you ship
2. Pay for what you use
3. Slide to see the real maths
4. Honest tiers, no surprises
5. Estimate it. Then trust it

**Boilerplate:** Meterly is a usage-based billing platform that shows tiered rates, plan fees and the cheapest plan for any level of monthly usage, with a transparent live estimator.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Estimate your bill |
| secondaryCta | See the breakdown |
| success | Estimate updated. |
| error | That number is out of range. Try 0 to 1,000,000. |
| empty | No usage entered yet. |

---
Source listing key `o:pricing-calculator`. Rebuild with `python3 scripts/brand-kit/build.py o:pricing-calculator`.
