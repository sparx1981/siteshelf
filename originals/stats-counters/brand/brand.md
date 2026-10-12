# Smallfoot — brand kit

*Small team doing big things, shown in numbers.* Generated from the SiteShelf listing **Stats Counters** (Landing Page); every value below is read from that page, not invented.

> **Small team. Very large footprint.**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter Bold (stand-in for Instrument Sans) |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **peak** glyph on a squircle tile. A single bold peak shows a small mark with a big footprint. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F6F3EC` | Page background |
| surface | `#D9D3C5` | Cards, panels, raised areas |
| text | `#6F6A5F` | Body and heading text |
| textMuted | `#15130F` | Secondary text, captions |
| primary | `#E4452A` | Main actions, links, brand colour |
| secondary | `#F0998A` | Highlights, charts, second accent |
| border | `#D9D3C5` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#66231A` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 4.86:1 | pass | pass |
| Muted text on background | 16.74:1 | pass | pass |
| Primary on background | 3.66:1 | fail | pass |
| Text on primary | 4.85:1 | pass | pass |
| Text on surface | 3.61:1 | fail | pass |

**Colours seen on the page** (share of use): `#F6F3EC` 98.8%, `#6F6A5F` 0.4%, `#15130F` 0.3%, `#E4452A` 0.3%, `#D9D3C5` 0.2%, `#F0998A` 0.0%, `#66231A` 0.0%

## Typography

- Headings: **Instrument Sans** (weight 700)
- Body: **Instrument Sans**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,800&family=Instrument+Sans:wght@400;500;600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Heading / H2 | Instrument Sans | 48 px | 700 | 50.4px | -0.96px |
| Body | Instrument Sans | 17 px | 400 | 25.5px | normal |
| Button | Instrument Sans | 15 px | 600 | normal | normal |
| Caption / eyebrow | Instrument Sans | 13 px | 600 | normal | 1.82px |

## Shape, space and motion

- Radius: sm 0 px, md 0 px, lg 0 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 4 px, 10 px, 16 px, 20 px, 22 px, 28 px, 40 px, 48 px, 80 px
- Layout: container 1200 px; breakpoints 700 px, 1000 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** bold, modest, lively.

Sounds like a proud founder at a stand-up: big numbers, short sentences and a grin about the size of the team. The figures lead and the adjectives follow reluctantly.

**Do**

- Put the number first and the unit straight after
- Keep captions to a short phrase
- Contrast small team with large impact once, then stop

**Do not**

- Do not inflate figures with maybes
- Do not use more than one claim per number
- Do not use filler like industry-leading

## Taglines

1. Small team. Very large footprint.
2. Numbers we're a little proud of
3. Count the impact, not the headcount
4. Big results from a small room
5. By the numbers, plainly

**Boilerplate:** Smallfoot is a small team with an outsized reach, publishing its headline figures openly so partners and supporters can see exactly what the work has added up to.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Replay |
| secondaryCta | See the full report |
| success | Counting complete. |
| error | Figures couldn't load. Replay to try again. |
| empty | No figures to show yet. |

---
Source listing key `o:stats-counters`. Rebuild with `python3 scripts/brand-kit/build.py o:stats-counters`.
