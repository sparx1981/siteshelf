# Marlowe Display — brand kit

*Variable serif typeface with weights 300 to 900.* Generated from the SiteShelf listing **Type Specimen Sheet** (Typography); every value below is read from that page, not invented.

> **Letters with something to say**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Fraunces |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **monogram** glyph. A large serif initial is how type foundries often present a family. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F7F5F0` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#141414` | Body and heading text |
| textMuted | `#636361` | Secondary text, captions |
| primary | `#141414` | Main actions, links, brand colour |
| secondary | `#7E7E7E` | Highlights, charts, second accent |
| border | `#D9D5CB` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#7E7E7E` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 16.91:1 | pass | pass |
| Muted text on background | 5.53:1 | pass | pass |
| Primary on background | 16.91:1 | pass | pass |
| Text on primary | 18.42:1 | pass | pass |
| Text on surface | 18.42:1 | pass | pass |

**Colours seen on the page** (share of use): `#F7F5F0` 98.9%, `#141414` 1.0%, `#75716A` 0.1%, `#636361` 0.0%, `#7E7E7E` 0.0%, `#D9D5CB` 0.0%

## Typography

- Headings: **Fraunces** (weight 700)
- Body: **Fraunces**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..900;1,9..144,300..900&family=IBM+Plex+Mono:wght@400;500&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Fraunces | 84 px | 700 | 79.8px | -2.52px |
| Body | Fraunces | 20 px | 400 | 30px | normal |
| Button | IBM Plex Mono | 12 px | 500 | normal | 0.96px |

## Shape, space and motion

- Radius: sm 6 px, md 6 px, lg 6 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 2 px, 6 px, 8 px, 12 px, 14 px, 16 px, 18 px, 20 px, 24 px
- Layout: container 1100 px; breakpoints 700 px
- Motion: 250 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** refined, exacting, expressive.

Sounds like a type designer's specimen notes: precise about weights, glyphs and spacing, and quietly proud of the details. Terms stay technical but warm.

**Do**

- Use typographic terms like leading, glyph and weight
- State metrics like U+0052 and em width
- Show type in use before describing it

**Do not**

- Do not say beautiful typeface
- Do not hide licensing details
- Do not use decorative copy over clarity

## Taglines

1. Letters with something to say
2. Nine weights, one voice
3. Soft edges, sharp ideas, one serif
4. Set it large, then set it small
5. Every glyph earns its place

**Boilerplate:** Marlowe Display is a variable serif typeface family with weights from 300 to 900 and matching italics, shown here in a full specimen with glyph grid and paragraph tester.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Copy glyph |
| secondaryCta | Italic |
| success | Glyph copied. |
| error | That glyph is not in this font. |
| empty | Type something to preview. |

---
Source listing key `o:type-specimen-sheet`. Rebuild with `python3 scripts/brand-kit/build.py o:type-specimen-sheet`.
