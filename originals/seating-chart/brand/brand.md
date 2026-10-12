# Placecard — brand kit

*Table planner for dinners and celebrations.* Generated from the SiteShelf listing **Event Seating Chart** (Widgets); every value below is read from that page, not invented.

> **Everyone has a seat**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Fraunces |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **target** glyph on a squircle tile. A ring with a dot echoes a round table and its seat ring on the page. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F7F4EE` | Page background |
| surface | `#FFFDF8` | Cards, panels, raised areas |
| text | `#25302A` | Body and heading text |
| textMuted | `#000000` | Secondary text, captions |
| primary | `#E4DDCF` | Main actions, links, brand colour |
| secondary | `#7D7A72` | Highlights, charts, second accent |
| border | `#D7CFBE` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#7D7A72` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 12.46:1 | pass | pass |
| Muted text on background | 19.13:1 | pass | pass |
| Primary on background | 1.23:1 | fail | fail |
| Text on primary | 14.54:1 | pass | pass |
| Text on surface | 13.46:1 | pass | pass |

**Colours seen on the page** (share of use): `#F7F4EE` 88.2%, `#F0E0FF` 3.5%, `#E3F3D5` 2.3%, `#FFD9C9` 1.8%, `#D7E8FF` 1.8%, `#E4DDCF` 1.4%, `#25302A` 0.8%, `#6C756E` 0.2%, `#5D8A6B` 0.1%, `#000000` 0.1%

## Typography

- Headings: **Fraunces** (weight 600)
- Body: **Nunito**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Fraunces:wght@600&family=Nunito:wght@400;600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Fraunces | 28 px | 600 | normal | normal |
| Heading / H2 | Fraunces | 18 px | 600 | normal | normal |
| Body | Nunito | 13 px | 400 | 19.5px | normal |
| Button | Nunito | 14 px | 700 | normal | normal |
| Caption / eyebrow | Nunito | 14 px | 400 | normal | normal |

## Shape, space and motion

- Radius: sm 10 px, md 18 px, lg 50 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 2 px, 4 px, 5 px, 6 px, 8 px, 10 px, 12 px, 16 px, 18 px
- Layout: container 1280 px; breakpoints 440 px, 820 px, 900 px
- Motion: 150 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** tactful, orderly, warm.

Sounds like a wedding planner who loves a spreadsheet: calm, diplomatic and exact about seat counts. Conflicts are flagged gently and every guest is a name, not a row.

**Do**

- Use guests' names and table numbers
- Warn about conflicts and capacity politely
- Show how many are still unseated

**Do not**

- Do not use event-industry buzzwords
- Do not call guests attendees
- Do not alarm over a full table

## Taglines

1. Everyone has a seat
2. Plan the evening, table by table
3. Friends beside friends, family close
4. Drag, drop, dinner sorted
5. Seating without the stress

**Boilerplate:** Placecard is a table-based seating planner that lets hosts drag guests onto round tables, spot capacity and conflict warnings early and keep a live count of who is unseated.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Auto-seat |
| secondaryCta | Reset |
| success | Guest seated at table 3. |
| error | That table is full. Choose another. |
| empty | Everyone is seated. Nothing left to place. |

---
Source listing key `o:seating-chart`. Rebuild with `python3 scripts/brand-kit/build.py o:seating-chart`.
