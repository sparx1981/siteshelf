# Hatch Rooms — brand kit

*Coworking space in a converted Manchester print works.* Generated from the SiteShelf listing **Hatch Rooms Coworking** (Landing Page); every value below is read from that page, not invented.

> **Rooms that make work feel good**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Syne |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **cube** glyph on a squircle tile. A cube is a room, and hatch is a doorway into it. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#FAF6F0` | Page background |
| surface | `#3B1F3F` | Cards, panels, raised areas |
| text | `#231A14` | Body and heading text |
| textMuted | `#6E5F52` | Secondary text, captions |
| primary | `#F26A1B` | Main actions, links, brand colour |
| secondary | `#2F9E5B` | Highlights, charts, second accent |
| border | `#EADFD2` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#6C3314` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 15.87:1 | pass | pass |
| Muted text on background | 5.70:1 | pass | pass |
| Primary on background | 2.85:1 | fail | fail |
| Text on primary | 6.41:1 | pass | pass |
| Text on surface | 1.18:1 | fail | fail |

**Colours seen on the page** (share of use): `#FAF6F0` 79.6%, `#3B1F3F` 14.9%, `#F26A1B` 2.8%, `#E9D7BD` 1.8%, `#231A14` 0.4%, `#2F9E5B` 0.4%, `#6E5F52` 0.2%, `#FFB27A` 0.0%, `#8A7A69` 0.0%, `#EADFD2` 0.0%

## Typography

- Headings: **Syne** (weight 800)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Syne:wght@700;800&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Syne | 63.4 px | 800 | 66.528px | -1.9008px |
| Heading / H2 | Syne | 48 px | 800 | 50.4px | -0.96px |
| Subheading / H3 | Syne | 28 px | 800 | normal | normal |
| Body | Inter | 18 px | 400 | 28.8px | normal |
| Button | Inter | 14 px | 600 | normal | normal |
| Navigation | Inter | 15 px | 500 | 24px | normal |
| Caption / eyebrow | Inter | 14 px | 500 | normal | normal |

## Shape, space and motion

- Radius: sm 3 px, md 20 px, lg 24 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 2 px; common steps 5 px, 6 px, 8 px, 10 px, 12 px, 14 px, 20 px, 22 px, 26 px
- Layout: container 1240 px; breakpoints 860 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** welcoming, upbeat, well-run.

Sounds like a friendly host who knows the building: relaxed, helpful and practical. It talks about rooms and routines, using Manchester warmth rather than startup swagger.

**Do**

- Name the room and the hour
- Mention the print works and the city
- Use short, kind sentences

**Do not**

- No hustle culture talk
- Avoid corporate buzzwords like synergy
- Never overpromise availability

## Taglines

1. Rooms that make work feel good
2. A desk, a door, a decent coffee
3. Work well in the old print works
4. Space that bends to you
5. Pull up a chair in Manchester

**Boilerplate:** Hatch Rooms is a coworking space in a converted Manchester print works, offering hot desks, private offices, meeting rooms and a podcast booth on one key fob.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Book a tour |
| secondaryCta | See spaces |
| success | Tour booked. We'll put the kettle on. |
| error | That time slot is gone. Pick another. |
| empty | No rooms free at this hour. Try another day. |

---
Source listing key `o:landing-coworking-space`. Rebuild with `python3 scripts/brand-kit/build.py o:landing-coworking-space`.
