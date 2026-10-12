# Linen & Loom — brand kit

*Natural-fibre clothing made in small runs.* Generated from the SiteShelf listing **Linen & Loom Lookbook Hero** (Hero Section); every value below is read from that page, not invented.

> **Autumn, undyed and unhurried**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Newsreader |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **bars** glyph on a circle tile. Woven vertical bars suggest threads on a loom and echo the colour-block look cards. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F4EFE6` | Page background |
| surface | `#C8553D` | Cards, panels, raised areas |
| text | `#2A2622` | Body and heading text |
| textMuted | `#716C67` | Secondary text, captions |
| primary | `#E3B04B` | Main actions, links, brand colour |
| secondary | `#F0D49C` | Highlights, charts, second accent |
| border | `#2A2622` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#665028` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 13.11:1 | pass | pass |
| Muted text on background | 4.54:1 | pass | pass |
| Primary on background | 1.73:1 | fail | fail |
| Text on primary | 9.90:1 | pass | pass |
| Text on surface | 3.45:1 | fail | pass |

**Colours seen on the page** (share of use): `#F4EFE6` 61.7%, `#C8553D` 12.7%, `#6B7A5E` 6.3%, `#E3B04B` 6.3%, `#3E4A63` 6.3%, `#D9B9A6` 6.3%, `#2A2622` 0.2%, `#8A8176` 0.1%, `#F0D49C` 0.0%, `#0B0B0F` 0.0%

## Typography

- Headings: **Newsreader** (weight 300)
- Body: **Public Sans**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,300;0,6..72,400;1,6..72,300&family=Public+Sans:wght@400;500;600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Newsreader | 100.8 px | 300 | 100.8px | -2.52px |
| Body | Public Sans | 16 px | 400 | 24px | normal |
| Caption / eyebrow | Public Sans | 14 px | 500 | normal | normal |

## Shape, space and motion

- Radius: sm 0 px, md 0 px, lg 0 px
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 6 px, 8 px, 12 px, 14 px, 16 px, 18 px, 24 px, 30 px, 48 px
- Layout: container 900 px; breakpoints 800 px
- Motion: 350 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** unhurried, tactile, refined.

Linen & Loom writes like a quiet fashion editor: short lines, seasonal and sensory, with an eye on fabric rather than trend. It lets colour names and fibres carry the mood.

**Do**

- Name fibres and dye colours exactly
- Describe each look in one calm sentence
- Use season words sparingly and honestly

**Do not**

- Do not use hype words like iconic or must-have
- Avoid fast-fashion urgency
- Never claim sustainability without a fact

## Taglines

1. Autumn, undyed and unhurried
2. Cut to last past the season
3. Linen, wool and cotton, simply
4. Six looks, no rush
5. Dressed in what the field gave

**Boilerplate:** Linen & Loom is a clothing label making undyed and naturally dyed pieces in linen, wool and cotton, cut to last well beyond a single season.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | View the looks |
| secondaryCta | Join the list |
| success | Added to your wishlist. |
| error | Could not save that look. Try again. |
| empty | No looks in this colour yet. |

---
Source listing key `o:linen-loom`. Rebuild with `python3 scripts/brand-kit/build.py o:linen-loom`.
