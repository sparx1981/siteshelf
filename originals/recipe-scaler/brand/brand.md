# Ashdown Kitchen — brand kit

*Home cook's recipe collection by Marguerite Ashdown.* Generated from the SiteShelf listing **Recipe Scaler** (Widgets); every value below is read from that page, not invented.

> **Cook for two, or for twelve**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from DM Serif Display |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **flame** glyph on a circle tile. A flame stands for the hob and oven where each recipe happens. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#FBF6EE` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#2A211B` | Body and heading text |
| textMuted | `#7A6A5A` | Secondary text, captions |
| primary | `#D6452B` | Main actions, links, brand colour |
| secondary | `#EADFCA` | Highlights, charts, second accent |
| border | `#EADFCA` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#EADFCA` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 14.66:1 | pass | pass |
| Muted text on background | 4.84:1 | pass | pass |
| Primary on background | 4.11:1 | fail | pass |
| Text on primary | 4.44:1 | fail | pass |
| Text on surface | 15.77:1 | pass | pass |

**Colours seen on the page** (share of use): `#FBF6EE` 97.0%, `#D6452B` 1.2%, `#2A211B` 1.0%, `#EADFCA` 0.4%, `#F6D98A` 0.2%, `#4F7A3A` 0.1%, `#7A6A5A` 0.1%, `#FF8A6C` 0.0%, `#D9C9A8` 0.0%, `#5F8E48` 0.0%

## Typography

- Headings: **DM Serif Display** (weight 400)
- Body: **Figtree**
- Google Fonts: `https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Figtree:wght@400;500;600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | DM Serif Display | 64 px | 400 | 65.28px | -0.64px |
| Heading / H2 | DM Serif Display | 28 px | 400 | normal | normal |
| Body | Figtree | 17 px | 400 | 27.2px | normal |
| Button | Arial | 22 px | 400 | normal | normal |
| Caption / eyebrow | Figtree | 14.2 px | 400 | 22.6667px | normal |

## Shape, space and motion

- Radius: sm 12 px, md 16 px, lg 20 px, pill (fully rounded)
- Shadows: sm: `rgba(0, 0, 0, 0.15) 0px 1px 3px 0px` · md: `rgba(60, 35, 10, 0.5) 0px 20px 40px -32px` · lg: `rgba(0, 0, 0, 0.15) 0px 1px 3px 0px`
- Spacing: base unit 4 px; common steps 4 px, 6 px, 8 px, 10 px, 11 px, 12 px, 14 px, 16 px, 24 px
- Layout: container 1100 px; breakpoints 420 px, 860 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** warm, generous, exact.

Sounds like a favourite aunt who writes recipes down clearly: welcoming, specific and practical. Quantities are precise and the tone is encouraging rather than fussy.

**Do**

- Give quantities and times exactly
- Use sensory cues like until glossy
- Address the cook directly

**Do not**

- No chef-show drama
- Avoid superlative food adjectives
- Never skip a unit

## Taglines

1. Cook for two, or for twelve
2. Scale the recipe, keep the flavour
3. Slow-roasted and well worth it
4. Tick it off, cook it through
5. Dinner, scaled to your table

**Boilerplate:** Ashdown Kitchen is a home cook's recipe collection by Marguerite Ashdown, with scalable ingredient lists, metric and imperial units and a built-in cooking timer.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Start 40 min timer |
| secondaryCta | Copy shopping list |
| success | Shopping list copied. |
| error | Couldn't copy the list. Try selecting it. |
| empty | Nothing gathered yet. Tick off ingredients as you go. |

---
Source listing key `o:recipe-scaler`. Rebuild with `python3 scripts/brand-kit/build.py o:recipe-scaler`.
