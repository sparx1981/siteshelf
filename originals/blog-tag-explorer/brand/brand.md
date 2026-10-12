# Corvid & Co — brand kit

*Field Notes blog on craft, writing and tools.* Generated from the SiteShelf listing **Blog Tag Explorer** (Blog); every value below is read from that page, not invented.

> **Slow notes from a small studio**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter Bold (stand-in for Literata) |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **monogram** glyph on a circle tile. The wordmark leans on a single serif C, the way a studio initial sits on a sketchbook cover. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#FAF7F2` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#4D4437` | Body and heading text |
| textMuted | `#1F1A14` | Secondary text, captions |
| primary | `#E2552B` | Main actions, links, brand colour |
| secondary | `#EFA28A` | Highlights, charts, second accent |
| border | `#EADFCE` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#652A1B` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 8.94:1 | pass | pass |
| Muted text on background | 16.16:1 | pass | pass |
| Primary on background | 3.53:1 | fail | pass |
| Text on primary | 5.21:1 | pass | pass |
| Text on surface | 9.56:1 | pass | pass |

**Colours seen on the page** (share of use): `#FAF7F2` 95.0%, `#F3E9DA` 3.3%, `#4D4437` 0.8%, `#1F1A14` 0.5%, `#7A6E5E` 0.2%, `#5E5342` 0.1%, `#C5B9A5` 0.0%, `#E2552B` 0.0%, `#EFA28A` 0.0%, `#0B0B0F` 0.0%

## Typography

- Headings: **Literata** (weight 700)
- Body: **Figtree**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Literata:wght@400;600;700&family=Figtree:wght@400;500;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Literata | 30 px | 700 | 33px | normal |
| Heading / H2 | Literata | 18 px | 600 | 22.5px | normal |
| Body | Figtree | 15 px | 400 | 22.5px | normal |
| Button | Figtree | 14 px | 700 | normal | normal |
| Caption / eyebrow | Figtree | 13 px | 500 | normal | 0.78px |

## Shape, space and motion

- Radius: sm 12 px, md 16 px, lg 16 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 4 px, 6 px, 8 px, 10 px, 12 px, 14 px, 16 px, 18 px, 20 px
- Layout: container 1100 px; breakpoints 600 px, 900 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** wry, tactile, unhurried.

Sounds like a studio that sketches on paper before touching a screen: observant, a little dry, fond of slow methods. Essays are personal and specific, never listicles.

**Do**

- Name the object or place in the first line
- Prefer the concrete detail to the abstract claim
- Let a short sentence land after a long one

**Do not**

- No growth-hacking vocabulary
- No exclamation marks
- No claiming a rule where there is only a habit

## Taglines

1. Slow notes from a small studio
2. Draw first, then build
3. Thinking done by hand
4. A blog for people who sketch
5. Writing that takes its time

**Boilerplate:** Corvid & Co is a small design studio whose Field Notes blog collects essays on drawing, writing, tools and process, all written slowly and kept on warm paper.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Read the note |
| secondaryCta | Add to reading list |
| success | Saved to your reading list |
| error | Could not save that, please try again |
| empty | Your reading list is empty, bookmark something |

---
Source listing key `o:blog-tag-explorer`. Rebuild with `python3 scripts/brand-kit/build.py o:blog-tag-explorer`.
