# Marlowe General — brand kit

*Hospital ward bed management board.* Generated from the SiteShelf listing **Ward Bed Board** (Dashboard); every value below is read from that page, not invented.

> **Every bed, at a glance**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Sora |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **pulse** glyph. A pulse line is the universal sign of a hospital without being gloomy. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F1F6F7` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#12292E` | Body and heading text |
| textMuted | `#4F6A70` | Secondary text, captions |
| primary | `#0E7C86` | Main actions, links, brand colour |
| secondary | `#E08A00` | Highlights, charts, second accent |
| border | `#D7E4E6` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#9AC8CC` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 13.94:1 | pass | pass |
| Muted text on background | 5.31:1 | pass | pass |
| Primary on background | 4.54:1 | pass | pass |
| Text on primary | 4.95:1 | pass | pass |
| Text on surface | 15.19:1 | pass | pass |

**Colours seen on the page** (share of use): `#F1F6F7` 78.6%, `#0E7C86` 15.4%, `#2F9E5A` 2.0%, `#E08A00` 1.5%, `#6B5BD6` 1.4%, `#6B7A80` 0.7%, `#12292E` 0.3%, `#4F6A70` 0.1%, `#2B1A00` 0.1%, `#0A5A62` 0.0%

## Typography

- Headings: **Sora** (weight 700)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Sora:wght@600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Sora | 22 px | 700 | normal | -0.22px |
| Heading / H2 | Sora | 15 px | 700 | normal | normal |
| Body | Inter | 14 px | 400 | 20.3px | normal |
| Button | Inter | 13 px | 600 | normal | normal |
| Caption / eyebrow | Inter | 14 px | 500 | normal | -0.22px |

## Shape, space and motion

- Radius: sm 4 px, md 12 px, lg 16 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 2 px; common steps 2 px, 5 px, 6 px, 8 px, 9 px, 10 px, 14 px, 15 px, 16 px
- Layout: container 1320 px; breakpoints 560 px, 1000 px
- Motion: 150 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** clear, calm, exact.

Speaks like a good charge nurse at handover: short, unambiguous and free of drama. Status words are fixed and never softened.

**Do**

- Use the same status words everywhere: occupied, cleaning, ready
- Lead with the bed or bay number
- Keep actions as imperative verbs

**Do not**

- No euphemisms for clinical status
- No exclamation marks or emoji
- No abbreviations that are not on the ward

## Taglines

1. Every bed, at a glance
2. Clear status, calm ward
3. Know the ward, hand over well
4. From discharge to ready
5. One board for the whole bay

**Boilerplate:** Marlowe General runs Ward 6B with a live bed board that shows each bay, each bed's status and the steps from discharge through cleaning to ready.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Print handover |
| secondaryCta | Mark as cleaning |
| success | Bed 6B-14 is now ready |
| error | Could not update that bed, check the connection |
| empty | Select a bed to see details and actions |

---
Source listing key `o:dashboard-bed-board`. Rebuild with `python3 scripts/brand-kit/build.py o:dashboard-bed-board`.
