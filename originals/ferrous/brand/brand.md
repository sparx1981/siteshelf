# Ferrous — brand kit

*Sheet, plate and tube metal fabrication.* Generated from the SiteShelf listing **Ferrous Hero Section** (Hero Section); every value below is read from that page, not invented.

> **Cut to a tenth of a millimetre**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from IBM Plex Mono |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **bars** glyph on a squircle tile. Stacked bars suggest bar stock and plate, and a heavy uppercase wordmark matches the grid. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#E8E6E1` | Page background |
| surface | `#FF4D00` | Cards, panels, raised areas |
| text | `#111111` | Body and heading text |
| textMuted | `#5C5C5A` | Secondary text, captions |
| primary | `#FF4D00` | Main actions, links, brand colour |
| secondary | `#FF9D73` | Highlights, charts, second accent |
| border | `#111111` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#712709` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 15.14:1 | pass | pass |
| Muted text on background | 5.37:1 | pass | pass |
| Primary on background | 2.67:1 | fail | fail |
| Text on primary | 5.91:1 | pass | pass |
| Text on surface | 5.68:1 | pass | pass |

**Colours seen on the page** (share of use): `#E8E6E1` 92.4%, `#FF4D00` 6.5%, `#111111` 1.1%, `#5C5C5A` 0.0%, `#FF9D73` 0.0%, `#712709` 0.0%

## Typography

- Headings: **IBM Plex Mono** (weight 400)
- Body: **IBM Plex Mono**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Anton&family=IBM+Plex+Mono:wght@400;500&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Body | IBM Plex Mono | 14 px | 400 | 19.6px | 0.14px |
| Button | IBM Plex Mono | 14 px | 500 | 19.6px | 0.56px |
| Caption / eyebrow | IBM Plex Mono | 12 px | 400 | 16.8px | 0.56px |

## Shape, space and motion

- Radius: sm 0 px, md 0 px, lg 0 px
- Shadows: none used (flat)
- Spacing: base unit 2 px; common steps 2 px, 18 px
- Layout: container 1200 px; breakpoints 800 px
- Motion: 120 ms, `linear`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** blunt, exact, industrial.

Ferrous speaks in measurements and verbs, like a foreman writing on a job ticket. It is short, direct and proud of tolerance, and it never softens a spec.

**Do**

- Use millimetres and materials, not adjectives
- Write in short, declarative lines
- Name the job type: cut, fold, weld, finish

**Do not**

- Do not use 'bespoke' or 'solutions'
- Do not round a tolerance to look good
- Do not apologise for lead times

## Taglines

1. Cut to a tenth of a millimetre
2. Sheet, plate, tube. Done right
3. Checked with a square, by hand
4. Steel in, parts out
5. Fabrication without the fluff

**Boilerplate:** Ferrous is a metal-fabrication shop that cuts sheet, plate and tube to a tenth of a millimetre and finishes every part by hand.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Start a job |
| secondaryCta | See what we cut |
| success | Job received. We will quote within one working day. |
| error | File rejected. Send a DXF or STEP under 50 MB. |
| empty | No jobs in the queue yet. |

---
Source listing key `o:ferrous`. Rebuild with `python3 scripts/brand-kit/build.py o:ferrous`.
