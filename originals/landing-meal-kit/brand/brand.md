# Pantry Post — brand kit

*Weekly meal kits with pre-measured ingredients.* Generated from the SiteShelf listing **Pantry Post Meal Kits** (Landing Page); every value below is read from that page, not invented.

> **Dinner, sorted. Washing-up, minimal**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Young Serif |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **bag** glyph on a squircle tile. A shopping bag stands for a box that arrives at the door with dinner inside. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#FBF3E6` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#2B2118` | Body and heading text |
| textMuted | `#6B5A47` | Secondary text, captions |
| primary | `#D9452B` | Main actions, links, brand colour |
| secondary | `#2B2118` | Highlights, charts, second accent |
| border | `#EADCC3` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#2B2118` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 14.30:1 | pass | pass |
| Muted text on background | 6.00:1 | pass | pass |
| Primary on background | 3.94:1 | fail | pass |
| Text on primary | 4.52:1 | pass | pass |
| Text on surface | 15.75:1 | pass | pass |

**Colours seen on the page** (share of use): `#FBF3E6` 66.5%, `#FFFFFF` 20.2%, `#34402A` 9.9%, `#D9452B` 1.2%, `#E98A2B` 0.5%, `#C58A4E` 0.5%, `#B67A40` 0.4%, `#F4C95D` 0.3%, `#8FA57A` 0.3%, `#2B2118` 0.2%

## Typography

- Headings: **Young Serif** (weight 400)
- Body: **DM Sans**
- Google Fonts: `https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Young+Serif&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Young Serif | 84 px | 400 | 85.68px | -0.84px |
| Heading / H2 | Young Serif | 50 px | 400 | 52.5px | normal |
| Body | DM Sans | 18 px | 400 | 28.8px | normal |
| Button | DM Sans | 14 px | 700 | normal | normal |
| Navigation | DM Sans | 15 px | 500 | 24px | normal |

## Shape, space and motion

- Radius: sm 6 px, md 11 px, lg 16 px, pill (fully rounded)
- Shadows: sm: `rgba(0, 0, 0, 0.12) 0px 10px 0px 0px inset` · md: `rgba(0, 0, 0, 0.12) 0px 10px 0px 0px inset` · lg: `rgba(0, 0, 0, 0.12) 0px 10px 0px 0px inset`
- Spacing: base unit 2 px; common steps 3 px, 4 px, 7 px, 8 px, 10 px, 12 px, 14 px, 20 px, 22 px
- Layout: container 1240 px; breakpoints 860 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** friendly, practical, appetising.

A friend who has already done the shopping: relaxed, cheerful and a bit wry about washing-up. Short sentences, clear prices and a dependable promise of dinner.

**Do**

- State times, prices and discounts plainly
- Use ingredient and kitchen words, not wellness jargon
- Mention flexibility, such as skip a week or cancel any time

**Do not**

- Guilt about cooking from scratch
- Fine print hidden below the fold
- Foodie superlatives

## Taglines

1. Dinner, sorted. Washing-up, minimal
2. Fresh, measured, ready in thirty
3. Fewer decisions, better dinners
4. A box that cooks with you
5. Skip a week, never skip dinner

**Boilerplate:** Pantry Post delivers weekly recipe boxes of fresh, pre-measured ingredients with meals ready in 30 minutes or less, with no commitment to keep ordering.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Build my box |
| secondaryCta | Get 40% off |
| success | Box updated. See you Thursday |
| error | We couldn't update your box. Try again |
| empty | Your box is empty. Pick a meal |

---
Source listing key `o:landing-meal-kit`. Rebuild with `python3 scripts/brand-kit/build.py o:landing-meal-kit`.
