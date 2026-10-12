# Larder & Ladle — brand kit

*Seasonal recipes for slow home cooking.* Generated from the SiteShelf listing **Recipe Card** (Cards); every value below is read from that page, not invented.

> **Slow food for long evenings**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Playfair Display |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **flame** glyph. A small flame is the low oven and the slow simmer. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#FBF6EE` | Page background |
| surface | `#2B2118` | Cards, panels, raised areas |
| text | `#2B2118` | Body and heading text |
| textMuted | `#5A4A3A` | Secondary text, captions |
| primary | `#C8402A` | Main actions, links, brand colour |
| secondary | `#2B2118` | Highlights, charts, second accent |
| border | `#EADFCB` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#2B2118` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 14.64:1 | pass | pass |
| Muted text on background | 7.89:1 | pass | pass |
| Primary on background | 4.62:1 | pass | pass |
| Text on primary | 4.97:1 | pass | pass |
| Text on surface | 1.00:1 | fail | fail |

**Colours seen on the page** (share of use): `#FBF6EE` 98.1%, `#2B2118` 1.3%, `#C8402A` 0.2%, `#5A4A3A` 0.1%, `#D9573E` 0.1%, `#E8694F` 0.1%, `#EADFCB` 0.0%, `#C9B79B` 0.0%, `#3F6B45` 0.0%, `#7D6E5C` 0.0%

## Typography

- Headings: **Playfair Display** (weight 700)
- Body: **Playfair Display**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Karla:wght@400;500;700&family=Playfair+Display:ital,wght@0,600;0,700;1,500&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Playfair Display | 52 px | 700 | 56.16px | -0.52px |
| Heading / H2 | Playfair Display | 26 px | 600 | normal | normal |
| Subheading / H3 | Karla | 13 px | 700 | normal | 1.56px |
| Body | Playfair Display | 18 px | 400 | 28.8px | normal |
| Button | Arial | 20 px | 400 | normal | normal |
| Caption / eyebrow | Karla | 13 px | 700 | 20.8px | 1.82px |

## Shape, space and motion

- Radius: sm 6 px, md 6 px, lg 6 px, pill (fully rounded)
- Shadows: sm: `rgba(60, 40, 10, 0.35) 0px 18px 40px -22px` · md: `rgba(60, 40, 10, 0.35) 0px 18px 40px -22px` · lg: `rgba(60, 40, 10, 0.35) 0px 18px 40px -22px`
- Spacing: base unit 2 px; common steps 3 px, 6 px, 8 px, 10 px, 11 px, 12 px, 14 px, 20 px, 22 px
- Layout: container 960 px; breakpoints 800 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** generous, earthy, reassuring.

Larder & Ladle writes like a kind aunt reading a recipe aloud at the stove. It is warm, specific about heat and time, and fond of cupboard staples and long evenings.

**Do**

- Give quantities in both metric and US cups
- Describe doneness by sight and smell
- Say how long and how hot, exactly

**Do not**

- Do not use 'foodie' or 'hack'
- Do not call a dish 'easy' without saying why
- Do not rush the cook

## Taglines

1. Slow food for long evenings
2. Tin-cupboard cooking, made lovely
3. Low heat, deep flavour
4. Recipes you can cook in slippers
5. Soup with time in it

**Boilerplate:** Larder & Ladle publishes seasonal recipes for slow home cooking, with scalable quantities, metric and US measures, and a step-by-step cook mode.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Start cooking |
| secondaryCta | Print |
| success | Timer set for 40 minutes. We will tell you when to check. |
| error | That timer would not start. Use your own clock for now. |
| empty | No ingredients ticked yet. Tap one as you add it. |

---
Source listing key `o:recipe-card`. Rebuild with `python3 scripts/brand-kit/build.py o:recipe-card`.
