# Pantry Pilot — brand kit

*Meal planning app that does the shopping list.* Generated from the SiteShelf listing **Split Hero with Showcase Tabs** (Hero Section); every value below is read from that page, not invented.

> **Dinner, decided. Groceries, done**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Bricolage Grotesque |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **bag** glyph. A shopping bag stands for the single list the app creates. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F6F3EE` | Page background |
| surface | `#FFD9C2` | Cards, panels, raised areas |
| text | `#1A1A1F` | Body and heading text |
| textMuted | `#62626D` | Secondary text, captions |
| primary | `#F2542D` | Main actions, links, brand colour |
| secondary | `#0000EE` | Highlights, charts, second accent |
| border | `#CFCFD6` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#0000EE` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 15.66:1 | pass | pass |
| Muted text on background | 5.44:1 | pass | pass |
| Primary on background | 3.12:1 | fail | pass |
| Text on primary | 5.69:1 | pass | pass |
| Text on surface | 13.17:1 | pass | pass |

**Colours seen on the page** (share of use): `#F6F3EE` 66.9%, `#FFD9C2` 11.2%, `#FFFFFF` 10.2%, `#14213D` 9.5%, `#1A1A1F` 0.9%, `#F2542D` 0.9%, `#62626D` 0.2%, `#3F8F6B` 0.1%, `#C28A1C` 0.1%, `#CFCFD6` 0.1%

## Typography

- Headings: **Bricolage Grotesque** (weight 800)
- Body: **Outfit**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@600;800&family=Outfit:wght@400;500;600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Bricolage Grotesque | 78 px | 800 | 76.44px | -2.73px |
| Subheading / H3 | Bricolage Grotesque | 22 px | 800 | normal | normal |
| Body | Outfit | 18 px | 400 | 27.9px | normal |
| Button | Outfit | 17 px | 600 | normal | normal |
| Navigation | Outfit | 16 px | 400 | 24.8px | normal |
| Caption / eyebrow | Outfit | 11.7 px | 400 | 18.0833px | normal |

## Shape, space and motion

- Radius: sm 6 px, md 14 px, lg 16 px, pill (fully rounded)
- Shadows: sm: `rgb(230, 224, 214) 0px 1px 0px 0px` · md: `rgb(185, 58, 25) 0px 8px 0px 0px` · lg: `rgba(20, 33, 61, 0.18) 0px 14px 34px 0px`
- Spacing: base unit 2 px; common steps 3 px, 4 px, 6 px, 8 px, 10 px, 11 px, 12 px, 14 px, 20 px
- Layout: container 1180 px; breakpoints 520 px, 900 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** upbeat, practical, organised.

Talks like a friend with a spreadsheet and a good sense of humour: quick, practical and a little smug about being sorted. British spelling, prices in pounds, no food-blog gush.

**Do**

- Pair every promise with a concrete example like one list
- Use British words such as shopping list and courgettes
- Keep sentences brisk with a light joke

**Do not**

- No guilt about food waste
- Avoid superlatives like perfect meal
- Never use diet or calorie language

## Taglines

1. Dinner, decided. Groceries, done
2. Plan the week in a minute
3. One list for every meal
4. Less waste, more dinner
5. Shop once, cook all week

**Boilerplate:** Pantry Pilot is a meal-planning app that plans your week of dinners, builds a single shopping list and trims food waste along the way.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Start planning free |
| secondaryCta | See how it works |
| success | Week planned. Your list is ready. |
| error | We couldn't build that plan. Try again. |
| empty | No meals planned yet. Tell us about your week. |

---
Source listing key `o:hero-split-showcase`. Rebuild with `python3 scripts/brand-kit/build.py o:hero-split-showcase`.
