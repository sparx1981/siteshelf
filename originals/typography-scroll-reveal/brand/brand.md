# Longhand — brand kit

*Studio making things to last.* Generated from the SiteShelf listing **Scroll-Driven Text Reveal** (Typography); every value below is read from that page, not invented.

> **Make it last**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Instrument Serif |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **stack** glyph. Stacked lines echo a written statement piled up word by word. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#0C0C0F` | Page background |
| surface | `#6EE7B7` | Cards, panels, raised areas |
| text | `#FFFFFF` | Body and heading text |
| textMuted | `#8D8D99` | Secondary text, captions |
| primary | `#FFD166` | Main actions, links, brand colour |
| secondary | `#6EE7B7` | Highlights, charts, second accent |
| border | `#2E2E31` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#715E34` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 19.53:1 | pass | pass |
| Muted text on background | 5.96:1 | pass | pass |
| Primary on background | 13.55:1 | pass | pass |
| Text on primary | 13.62:1 | pass | pass |
| Text on surface | 1.52:1 | fail | fail |

**Colours seen on the page** (share of use): `#0C0C0F` 99.0%, `#FFFFFF` 0.4%, `#6EE7B7` 0.2%, `#FFD166` 0.2%, `#FF6B4A` 0.1%, `#8D8D99` 0.0%, `#2E2E31` 0.0%, `#715E34` 0.0%

## Typography

- Headings: **Instrument Serif** (weight 400)
- Body: **Instrument Serif**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Instrument+Serif:ital@0;1&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Instrument Serif | 110 px | 400 | 110px | normal |
| Heading / H2 | Instrument Serif | 96 px | 400 | 96px | normal |
| Body | Instrument Serif | 76 px | 400 | 85.12px | normal |
| Caption / eyebrow | Inter | 13.3 px | 400 | 20px | 2.66667px |

## Shape, space and motion

- Radius: sm 0 px, md 0 px, lg 0 px
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 14 px, 16 px, 24 px, 115 px
- Layout: container 1100 px; breakpoints single fluid layout
- Motion: 350 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** earnest, reflective, spare.

Longhand writes like a manifesto pinned to a workshop wall: short, certain and humble. It prefers verbs to values and ends on a single plain instruction.

**Do**

- Make each line a belief that can be acted on
- Keep words short and Anglo-Saxon
- End on a single clear imperative

**Do not**

- Do not use 'disrupt' or 'innovate'
- Do not cite founders or awards
- Do not bury the statement in qualifiers

## Taglines

1. Make it last
2. Write it down, then do it
3. What we believe, in plain words
4. Slow work, kept well
5. Made to be mended

**Boilerplate:** Longhand is a small studio that makes things built to last, and publishes its beliefs as a short manifesto anyone can read in a minute.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Read the manifesto |
| secondaryCta | Share this page |
| success | Thanks for reading all the way down. |
| error | We could not copy the link. Select the address bar instead. |
| empty | Nothing to read yet. Scroll to begin. |

---
Source listing key `o:typography-scroll-reveal`. Rebuild with `python3 scripts/brand-kit/build.py o:typography-scroll-reveal`.
