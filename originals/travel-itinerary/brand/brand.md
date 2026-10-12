# Costa Brava Kite — brand kit

*Day-by-day Costa Brava trip planner.* Generated from the SiteShelf listing **Travel Itinerary** (App UI); every value below is read from that page, not invented.

> **Four days on the Costa Brava**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Lora |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **plane** glyph on a circle tile. A paper plane evokes travel and the lightness of a kite in the air. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F2F7F6` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#14312D` | Body and heading text |
| textMuted | `#0F766E` | Secondary text, captions |
| primary | `#0F766E` | Main actions, links, brand colour |
| secondary | `#B3261E` | Highlights, charts, second accent |
| border | `#DBE7E4` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#9AC5C2` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 12.88:1 | pass | pass |
| Muted text on background | 5.06:1 | pass | pass |
| Primary on background | 5.06:1 | pass | pass |
| Text on primary | 5.47:1 | pass | pass |
| Text on surface | 13.94:1 | pass | pass |

**Colours seen on the page** (share of use): `#F2F7F6` 96.6%, `#0F766E` 1.2%, `#CFE8F3` 0.6%, `#BFDCC8` 0.5%, `#F4E8CF` 0.4%, `#14312D` 0.4%, `#5D7A75` 0.2%, `#000000` 0.0%, `#B3261E` 0.0%, `#F59E0B` 0.0%

## Typography

- Headings: **Lora** (weight 600)
- Body: **Outfit**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,500;0,600;1,500&family=Outfit:wght@400;500;600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Lora | 38 px | 600 | 41.8px | normal |
| Heading / H2 | Lora | 24 px | 600 | normal | normal |
| Subheading / H3 | Outfit | 18 px | 600 | normal | normal |
| Body | Outfit | 15 px | 400 | 22.5px | normal |
| Button | Outfit | 15 px | 400 | 22.5px | normal |
| Caption / eyebrow | Outfit | 12.5 px | 400 | 18.75px | normal |

## Shape, space and motion

- Radius: sm 8 px, md 16 px, lg 18 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 2 px; common steps 2 px, 4 px, 6 px, 8 px, 10 px, 12 px, 14 px, 16 px, 18 px
- Layout: container 1180 px; breakpoints 560 px, 900 px
- Motion: 150 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** sunny, organised, adventurous.

Sounds like a friend who has already walked the coast and sorted the tickets: relaxed, practical and excited. Times, costs and a nudge to leave a free afternoon keep the plan realistic.

**Do**

- Give the time, place and cost of each stop
- Add a small tip tied to the weather
- Keep the day's budget visible

**Do not**

- Do not overpack a day
- Do not use bucket-list cliches
- Do not hide costs

## Taglines

1. Four days on the Costa Brava
2. Plan the trip, leave room for wind
3. Cliffs, coves and kites
4. Every day mapped, budget in view
5. Hours well spent by the sea

**Boilerplate:** Costa Brava Kite is a fictional trip planner that lays out a four-day Costa Brava getaway day by day, with timed activities, costs, a map sketch and a running budget.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Add activity |
| secondaryCta | Remove |
| success | Activity added to Day 2. |
| error | Couldn't move that stop. Try again. |
| empty | Nothing planned for this day yet. |

---
Source listing key `o:travel-itinerary`. Rebuild with `python3 scripts/brand-kit/build.py o:travel-itinerary`.
