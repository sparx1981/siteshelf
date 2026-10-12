# Halftone Review — brand kit

*Long reads on design teams and their habits.* Generated from the SiteShelf listing **Article Reader** (Blog); every value below is read from that page, not invented.

> **Slow reading for fast teams**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter Bold (stand-in for Albert Sans) |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **book** glyph on a circle tile. A book glyph signals long-form reading and works as a quiet stamp beside a serif wordmark. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#FBFAF6` | Page background |
| surface | `#8D6BFF` | Cards, panels, raised areas |
| text | `#1F1D19` | Body and heading text |
| textMuted | `#1D5C9E` | Secondary text, captions |
| primary | `#D9482B` | Main actions, links, brand colour |
| secondary | `#8D6BFF` | Highlights, charts, second accent |
| border | `#D9482B` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#62251B` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 16.11:1 | pass | pass |
| Muted text on background | 6.53:1 | pass | pass |
| Primary on background | 4.09:1 | fail | pass |
| Text on primary | 4.60:1 | pass | pass |
| Text on surface | 4.55:1 | pass | pass |

**Colours seen on the page** (share of use): `#FBFAF6` 96.1%, `#1F1D19` 1.4%, `#8D6BFF` 0.4%, `#3B6CFF` 0.4%, `#F4A259` 0.4%, `#BC4B51` 0.4%, `#5B8E7D` 0.4%, `#2F4858` 0.4%, `#7A8AA6` 0.1%, `#D9482B` 0.1%

## Typography

- Headings: **Albert Sans** (weight 700)
- Body: **Literata**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Albert+Sans:wght@500;600;700&family=Literata:ital,wght@0,400;0,500;0,700;1,400&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Albert Sans | 52 px | 700 | 57.2px | -1.04px |
| Heading / H2 | Albert Sans | 12 px | 700 | normal | 1.2px |
| Body | Literata | 22 px | 400 | 34.1px | normal |
| Button | Albert Sans | 15 px | 700 | normal | normal |
| Caption / eyebrow | Albert Sans | 15.6 px | 500 | 23.4px | normal |

## Shape, space and motion

- Radius: sm 10 px, md 14 px, lg 16 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 2 px; common steps 6 px, 7 px, 14 px, 16 px, 17 px, 18 px, 20 px, 24 px, 26 px
- Layout: container 1180 px; breakpoints 700 px, 1100 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** thoughtful, measured, curious.

Halftone Review writes essays, not posts: a reflective voice that reports what a team noticed before telling you what it means. It trusts the reader with nuance and keeps the pace of someone thinking aloud.

**Do**

- Open with a concrete scene or number, then draw the point
- Use footnotes for asides instead of cluttering the line
- Name what was lost as plainly as what was gained

**Do not**

- Avoid listicle headlines and 'ten lessons' framing
- Do not claim a result the evidence does not support
- Never bury the reader in jargon

## Taglines

1. Slow reading for fast teams
2. Design, examined at length
3. What the dashboard never told us
4. Essays on how teams really work
5. Read it properly

**Boilerplate:** Halftone Review is an independent long-form publication examining how design teams work, measure and decide, with reader-friendly typography and room for footnotes.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Keep reading |
| secondaryCta | Change text size |
| success | Reading position saved. |
| error | This footnote would not load. Try again. |
| empty | No more articles in this series. |

---
Source listing key `o:article-reader`. Rebuild with `python3 scripts/brand-kit/build.py o:article-reader`.
