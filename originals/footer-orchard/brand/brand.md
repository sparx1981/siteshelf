# Orchard Farm — brand kit

*Family fruit farm with shop, cafe and cider.* Generated from the SiteShelf listing **Orchard Footer with Newsletter** (Footer); every value below is read from that page, not invented.

> **Good things, once a month**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Gloock |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **sprout** glyph. A young shoot is the simplest picture of a working orchard. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#1F2A1D` | Page background |
| surface | `#F4F1EA` | Cards, panels, raised areas |
| text | `#EEF0E4` | Body and heading text |
| textMuted | `#A6AB9E` | Secondary text, captions |
| primary | `#F2B84B` | Main actions, links, brand colour |
| secondary | `#856529` | Highlights, charts, second accent |
| border | `#EEF0E4` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#856529` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 12.95:1 | pass | pass |
| Muted text on background | 6.35:1 | pass | pass |
| Primary on background | 8.34:1 | pass | pass |
| Text on primary | 10.98:1 | pass | pass |
| Text on surface | 1.02:1 | fail | fail |

**Colours seen on the page** (share of use): `#1F2A1D` 57.5%, `#F4F1EA` 42.1%, `#F2B84B` 0.3%, `#2C3B29` 0.1%, `#8D897C` 0.0%, `#A6AB9E` 0.0%, `#856529` 0.0%, `#0B0B0F` 0.0%

## Typography

- Headings: **Gloock** (weight 400)
- Body: **DM Sans**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Gloock&family=DM+Sans:wght@400;500;600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Heading / H2 | Gloock | 56 px | 400 | 58.8px | normal |
| Subheading / H3 | DM Sans | 12 px | 600 | normal | 1.44px |
| Body | DM Sans | 16 px | 400 | 24px | normal |
| Button | DM Sans | 15 px | 600 | normal | normal |
| Navigation | DM Sans | 16 px | 400 | 24px | normal |

## Shape, space and motion

- Radius: sm 0 px, md 0 px, lg 0 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 5 px, 8 px, 10 px, 16 px, 22 px, 24 px, 40 px, 64 px, 80 px
- Layout: container 1280 px; breakpoints 900 px
- Motion: 600 ms, `cubic-bezier(0.2`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** homely, seasonal, wry.

Sounds like a farm shop owner leaning on the gate: warm, a bit cheeky and always in season. It talks about fruit, weather and recipes, and promises only what the trees can deliver.

**Do**

- Tie updates to the season and what is ripe
- Use homely words like boxes, cider and pick your own
- Keep a dry joke in reserve for the footer

**Do not**

- Do not use farm-to-table cliches
- Do not spam promises like daily offers
- Do not use corporate sign-offs

## Taglines

1. Good things, once a month
2. Grown here, boxed with care
3. Apples, cider and the odd fact
4. From our trees to your table
5. Seasonal, local and a little bit wild

**Boilerplate:** Orchard Farm is a family-run fruit farm that sells seasonal boxes, gifts and cider, runs a farm shop and cafe, and sends a monthly letter of recipes and apple facts.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Subscribe |
| secondaryCta | Visit the farm shop |
| success | You're on the list. See you next month. |
| error | That email doesn't look right. Please check it. |
| empty | No orders yet. Pick a box to begin. |

---
Source listing key `o:footer-orchard`. Rebuild with `python3 scripts/brand-kit/build.py o:footer-orchard`.
