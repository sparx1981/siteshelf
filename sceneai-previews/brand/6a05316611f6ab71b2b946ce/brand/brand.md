# Trav — brand kit

*Travel planning app.* Generated from the SiteShelf listing **Trav** (Begin Your Next Big Adventure); every value below is read from that page, not invented.

> **Begin your next big adventure**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **plane** glyph. A plane is the simplest sign of travel. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#000000` | Page background |
| surface | `#3D7A8A` | Cards, panels, raised areas |
| text | `#FFFFFF` | Body and heading text |
| textMuted | `#A6A6A6` | Secondary text, captions |
| primary | `#1D4A5A` | Main actions, links, brand colour |
| secondary | `#839BA4` | Highlights, charts, second accent |
| border | `#242424` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#839BA4` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 21.00:1 | pass | pass |
| Muted text on background | 8.63:1 | pass | pass |
| Primary on background | 2.18:1 | fail | fail |
| Text on primary | 9.64:1 | pass | pass |
| Text on surface | 4.83:1 | pass | pass |

**Colours seen on the page** (share of use): `#000000` 66.5%, `#3D7A8A` 11.1%, `#1D4A5A` 11.1%, `#0A1A22` 11.1%, `#FFFFFF` 0.2%, `#A6A6A6` 0.0%, `#839BA4` 0.0%, `#242424` 0.0%

## Typography

- Headings: **Inter** (weight 600)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Inter | 60 px | 600 | 66px | -1.2px |
| Body | Inter | 17 px | 500 | 27.2px | normal |
| Button | Arial | 32 px | 400 | normal | normal |
| Navigation | Inter | 14 px | 500 | normal | normal |

## Shape, space and motion

- Radius: sm 0 px, md 0 px, lg 0 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 6 px, 10 px, 20 px, 22 px, 32 px, 40 px, 64 px
- Layout: container 1200 px; breakpoints 768 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** adventurous, friendly, unfussy.

Trav sounds like a well-travelled friend with a map in the back pocket. It is warm, direct and excited about hidden places without exaggeration.

**Do**

- Name a place or a mood
- Use verbs of movement: find, plan, go
- Keep every line short

**Do not**

- Do not call anywhere 'paradise'
- Do not use 'bucket list'
- Do not overpromise a trip

## Taglines

1. Begin your next big adventure
2. Find hidden gems, plan the trip
3. Wander further with a plan
4. All your travel in one app
5. Pack light, plan well

**Boilerplate:** Trav is a travel app that helps people discover hidden gems, plan trips and explore the world from a single place.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Get the app |
| secondaryCta | Our story |
| success | Trip saved. Pack your bags. |
| error | We could not save your trip. Try again. |
| empty | No trips yet. Start planning your first. |

---
Source listing key `s:6a05316611f6ab71b2b946ce`. Rebuild with `python3 scripts/brand-kit/build.py s:6a05316611f6ab71b2b946ce`.
