# STOCKROOM — brand kit

*Warehouse floor heatmap for pick activity.* Generated from the SiteShelf listing **Warehouse Pick Heatmap** (Dashboard); every value below is read from that page, not invented.

> **See where the picks are hot**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Big Shoulders Display |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **cube** glyph on a squircle tile. A plain cube suggests stock, boxes and bays, and holds up in all capitals. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#14161A` | Page background |
| surface | `#1C1F25` | Cards, panels, raised areas |
| text | `#ECEFF4` | Body and heading text |
| textMuted | `#9AA3B2` | Secondary text, captions |
| primary | `#F5D34F` | Main actions, links, brand colour |
| secondary | `#9BD17A` | Highlights, charts, second accent |
| border | `#2C313A` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#6D5F2A` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 15.71:1 | pass | pass |
| Muted text on background | 7.12:1 | pass | pass |
| Primary on background | 12.35:1 | pass | pass |
| Text on primary | 13.39:1 | pass | pass |
| Text on surface | 14.32:1 | pass | pass |

**Colours seen on the page** (share of use): `#14161A` 87.7%, `#FFD400` 2.5%, `#4FA3A5` 2.4%, `#9BD17A` 2.4%, `#F5D34F` 1.9%, `#3F6A8F` 1.3%, `#F59F3A` 0.9%, `#EE5A3A` 0.4%, `#2A3A55` 0.3%, `#ECEFF4` 0.2%

## Typography

- Headings: **Big Shoulders Display** (weight 800)
- Body: **Work Sans**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@700;800&family=DM+Mono:wght@400&family=Work+Sans:wght@400;500;600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Heading / H2 | Big Shoulders Display | 20 px | 800 | normal | 1.2px |
| Subheading / H3 | Big Shoulders Display | 34 px | 800 | normal | 1.36px |
| Button | Work Sans | 13 px | 600 | normal | normal |
| Caption / eyebrow | Work Sans | 11 px | 600 | 16.5px | 0.44px |

## Shape, space and motion

- Radius: sm 3 px, md 6 px, lg 14 px
- Shadows: none used (flat)
- Spacing: base unit 2 px; common steps 2 px, 3 px, 4 px, 6 px, 7 px, 8 px, 10 px, 12 px, 14 px
- Layout: container 1280 px; breakpoints 1000 px
- Motion: 350 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** blunt, operational, alert.

Talks like a floor supervisor on a radio: short, factual and in the present tense. It names aisles, shifts and seconds, and flags congestion before anyone has to ask.

**Do**

- Name the aisle, shift and metric in every message
- Use imperative verbs like move, swap and check
- Keep numbers first and units close

**Do not**

- Do not soften a problem with hedging
- Do not use consulting phrases like optimise throughput
- Do not use warm filler

## Taglines

1. See where the picks are hot
2. Every aisle, every hour, on one floor
3. Cut the walk, lift the picks
4. Slot smarter. Walk less.
5. The floor, read by heat

**Boilerplate:** STOCKROOM is a warehouse analytics view for the Brightwater distribution centre that maps pick activity by aisle and hour so supervisors can reduce travel time and congestion.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | View aisle |
| secondaryCta | Switch shift |
| success | Slotting change logged for review. |
| error | Floor data unavailable. Check the connection. |
| empty | No picks recorded for this shift. |

---
Source listing key `o:dashboard-warehouse-heatmap`. Rebuild with `python3 scripts/brand-kit/build.py o:dashboard-warehouse-heatmap`.
