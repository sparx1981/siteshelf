# Tablewise — brand kit

*Kind software built at one kitchen table.* Generated from the SiteShelf listing **Flip Team Cards** (Cards); every value below is read from that page, not invented.

> **The people behind it**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter Bold (stand-in for Gabarito) |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **monogram** glyph on a circle tile. A bold letter T doubles as a tabletop, matching a brand named after the table where it all began. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F3EFE8` | Page background |
| surface | `#1F1B16` | Cards, panels, raised areas |
| text | `#1F1B16` | Body and heading text |
| textMuted | `#69655F` | Secondary text, captions |
| primary | `#F2B134` | Main actions, links, brand colour |
| secondary | `#D45D79` | Highlights, charts, second accent |
| border | `#D5D1CB` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#6C511F` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 14.94:1 | pass | pass |
| Muted text on background | 5.05:1 | pass | pass |
| Primary on background | 1.65:1 | fail | fail |
| Text on primary | 10.40:1 | pass | pass |
| Text on surface | 1.00:1 | fail | fail |

**Colours seen on the page** (share of use): `#F3EFE8` 51.2%, `#1F1B16` 23.9%, `#E4572E` 4.0%, `#2E86AB` 4.0%, `#F2B134` 4.0%, `#5B8C5A` 4.0%, `#8A5FBF` 4.0%, `#D45D79` 4.0%, `#8A5A3C` 0.5%, `#6B4128` 0.5%

## Typography

- Headings: **Gabarito** (weight 800)
- Body: **Figtree**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Gabarito:wght@500;700;800&family=Figtree:wght@400;500;600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Gabarito | 72 px | 800 | 72px | -2.16px |
| Body | Figtree | 18 px | 400 | 27px | normal |
| Button | Figtree | 16 px | 400 | 24px | normal |

## Shape, space and motion

- Radius: sm 22 px, md 54 px, lg 54 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 2 px, 10 px, 12 px, 14 px, 24 px, 28 px, 32 px, 48 px, 80 px
- Layout: container 1180 px; breakpoints 560 px, 900 px
- Motion: 500 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** kind, homespun, upbeat.

Tablewise writes like a small team around a kitchen table: first names, warm jokes and honest admissions. It speaks about software as something that should feel considerate, not clever.

**Do**

- Introduce people by first name and one real detail
- Prefer 'we' and 'us' to 'the company'
- Use warm, concrete images such as kettles and notebooks

**Do not**

- Do not use corporate bios full of titles
- Avoid growth-hacker vocabulary
- Never over-promise about what software can do for you

## Taglines

1. The people behind it
2. Twelve of us, one kitchen table
3. Software that feels kind
4. Small team, big heart
5. Pull up a chair

**Boilerplate:** Tablewise is a twelve-person software company that builds friendly tools for small teams, working from one shared table and a belief that software should feel kind.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Meet the team |
| secondaryCta | Read our story |
| success | Message sent. One of us will be in touch. |
| error | That did not send. Please try once more. |
| empty | No one here matches that filter. |

---
Source listing key `o:flip-cards`. Rebuild with `python3 scripts/brand-kit/build.py o:flip-cards`.
