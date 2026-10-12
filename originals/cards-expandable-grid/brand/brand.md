# Ember & Ladle — brand kit

*Weeknight recipes with a smoky edge.* Generated from the SiteShelf listing **Expandable Card Grid** (Cards); every value below is read from that page, not invented.

> **Tonight's table, sorted**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Bricolage Grotesque |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **flame** glyph on a squircle tile. A flame stands for the char and smoke that run through the recipes. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#FBF5EA` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#2B2118` | Body and heading text |
| textMuted | `#746B62` | Secondary text, captions |
| primary | `#F2C46D` | Main actions, links, brand colour |
| secondary | `#2B2118` | Highlights, charts, second accent |
| border | `#DED7CD` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#2B2118` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 14.51:1 | pass | pass |
| Muted text on background | 4.81:1 | pass | pass |
| Primary on background | 1.50:1 | fail | fail |
| Text on primary | 12.06:1 | pass | pass |
| Text on surface | 15.75:1 | pass | pass |

**Colours seen on the page** (share of use): `#FBF5EA` 60.0%, `#FFFFFF` 32.3%, `#8B2E2E` 1.0%, `#F0B87A` 1.0%, `#6D4A2B` 1.0%, `#2F6B4F` 1.0%, `#B7D36A` 1.0%, `#B4531F` 1.0%, `#4B2A6B` 1.0%, `#C58BE0` 1.0%

## Typography

- Headings: **Bricolage Grotesque** (weight 700)
- Body: **Bricolage Grotesque**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@700&family=Nunito+Sans:wght@400;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Bricolage Grotesque | 34 px | 700 | normal | normal |
| Heading / H2 | Bricolage Grotesque | 20 px | 700 | normal | normal |
| Button | Nunito Sans | 16 px | 400 | 24px | normal |

## Shape, space and motion

- Radius: sm 18 px, md 50 px, lg 50 px, pill (fully rounded)
- Shadows: sm: `rgba(43, 33, 24, 0.08) 0px 4px 14px 0px` · md: `rgba(43, 33, 24, 0.08) 0px 4px 14px 0px` · lg: `rgba(43, 33, 24, 0.08) 0px 4px 14px 0px`
- Spacing: base unit 4 px; common steps 2 px, 6 px, 10 px, 14 px, 16 px, 20 px, 24 px, 40 px
- Layout: container 1040 px; breakpoints 560 px, 900 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** hearty, confident, handy.

A seasoned home cook talking you through dinner: direct, warm and unfussy, with smoke and char in the vocabulary. It tells you the time and the difficulty up front and trusts you with the rest.

**Do**

- Lead with the time and the difficulty
- Use cook's verbs such as char, fold, rest and glaze
- Give one tip per recipe, not five

**Do not**

- Foodie hyperbole like to die for
- Calorie guilt or diet talk
- Vague quantities with no timing

## Taglines

1. Tonight's table, sorted
2. Char it, glaze it, eat it
3. Dinner with a little smoke
4. Real food in 35 minutes
5. Cook something worth the washing-up

**Boilerplate:** Ember & Ladle is a recipe collection for confident home cooks, pairing smoky, charred flavours with honest timings and clear steps.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Start cooking |
| secondaryCta | Back to the table |
| success | Saved to tonight's menu |
| error | This recipe will not open. Try again |
| empty | No recipes match. Clear the filter |

---
Source listing key `o:cards-expandable-grid`. Rebuild with `python3 scripts/brand-kit/build.py o:cards-expandable-grid`.
