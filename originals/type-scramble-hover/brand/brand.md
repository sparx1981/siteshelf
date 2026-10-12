# Glyphwork — brand kit

*Digital studio working in type.* Generated from the SiteShelf listing **Scramble Text Hover** (Typography); every value below is read from that page, not invented.

> **Say it in glyphs**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Unbounded |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **monogram** glyph on a squircle tile. A bold G stands in for the studio and its glyph focus. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#07090C` | Page background |
| surface | `#4DFFA0` | Cards, panels, raised areas |
| text | `#8FB3A3` | Body and heading text |
| textMuted | `#D9FFE8` | Secondary text, captions |
| primary | `#4DFFA0` | Main actions, links, brand colour |
| secondary | `#0F5E54` | Highlights, charts, second accent |
| border | `#1F3A33` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#0F5E54` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 8.68:1 | pass | pass |
| Muted text on background | 18.43:1 | pass | pass |
| Primary on background | 15.31:1 | pass | pass |
| Text on primary | 15.09:1 | pass | pass |
| Text on surface | 1.76:1 | fail | fail |

**Colours seen on the page** (share of use): `#07090C` 96.8%, `#4DFFA0` 1.2%, `#0F5E54` 0.7%, `#3B1D6E` 0.7%, `#8FB3A3` 0.3%, `#D9FFE8` 0.3%, `#1F3A33` 0.0%

## Typography

- Headings: **Unbounded** (weight 600)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=JetBrains+Mono:wght@500;700&family=Unbounded:wght@600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Unbounded | 76 px | 600 | 76px | normal |
| Heading / H2 | JetBrains Mono | 12 px | 700 | normal | 1.92px |
| Button | JetBrains Mono | 14 px | 700 | normal | normal |
| Navigation | Inter | 15 px | 400 | 22.5px | normal |
| Caption / eyebrow | JetBrains Mono | 12 px | 700 | normal | 2.4px |

## Shape, space and motion

- Radius: sm 10 px, md 14 px, lg 50 px
- Shadows: none used (flat)
- Spacing: base unit 2 px; common steps 6 px, 8 px, 10 px, 12 px, 14 px, 16 px, 18 px, 22 px, 26 px
- Layout: container 1160 px; breakpoints 860 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** technical, playful, dark-room cool.

Sounds like a terminal that has learned manners: crisp, lowercase-leaning and slightly mischievous. Words scramble, then resolve, and the copy has the same tempo.

**Do**

- Write labels that read well mid-scramble
- Keep copy to a few words
- Use technical words like glyph and charset

**Do not**

- No marketing paragraphs
- Avoid long words that scramble badly
- Never explain the effect in the effect

## Taglines

1. Say it in glyphs
2. Type that finds its words
3. Scramble, then resolve
4. A terminal with manners
5. Letters in motion

**Boilerplate:** Glyphwork is a digital studio that designs typography-led interfaces, experiments with letterforms and builds web experiences where words resolve before your eyes.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Scramble all |
| secondaryCta | Reset |
| success | Resolved. Everything is in order. |
| error | Glyph not found. Try another charset. |
| empty | No glyphs selected. Pick a charset. |

---
Source listing key `o:type-scramble-hover`. Rebuild with `python3 scripts/brand-kit/build.py o:type-scramble-hover`.
