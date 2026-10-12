# Halcyon Atelier — brand kit

*Small-batch ceramics from a converted net loft.* Generated from the SiteShelf listing **Section Dot Navigation** (Navigation); every value below is read from that page, not invented.

> **Made slowly, by hand**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Cormorant Garamond |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **monogram** glyph on a squircle tile. A single letter H, like a stamped maker's mark on the base of a pot. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F4EEE4` | Page background |
| surface | `#1C1B1A` | Cards, panels, raised areas |
| text | `#231F1B` | Body and heading text |
| textMuted | `#6C6761` | Secondary text, captions |
| primary | `#C4623A` | Main actions, links, brand colour |
| secondary | `#9FC0E0` | Highlights, charts, second accent |
| border | `#231F1B` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#593021` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 14.18:1 | pass | pass |
| Muted text on background | 4.85:1 | pass | pass |
| Primary on background | 3.53:1 | fail | pass |
| Text on primary | 4.82:1 | pass | pass |
| Text on surface | 1.05:1 | fail | fail |

**Colours seen on the page** (share of use): `#F4EEE4` 64.5%, `#1C1B1A` 11.5%, `#D9B99B` 11.5%, `#14233A` 11.5%, `#9FC0E0` 0.2%, `#E9D9BF` 0.2%, `#2E4A6B` 0.2%, `#C4623A` 0.1%, `#A2432A` 0.1%, `#2A2826` 0.1%

## Typography

- Headings: **Cormorant Garamond** (weight 600)
- Body: **Work Sans**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Work+Sans:wght@400;500&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Heading / H2 | Cormorant Garamond | 115.2 px | 600 | 105.984px | -2.304px |
| Body | Work Sans | 18 px | 400 | 28.8px | normal |
| Button | Work Sans | 17 px | 500 | 27.2px | normal |
| Navigation | Work Sans | 17 px | 400 | 27.2px | normal |

## Shape, space and motion

- Radius: sm 0 px, md 0 px, lg 0 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 2 px; common steps 10 px, 12 px, 14 px, 18 px, 22 px, 26 px, 48 px, 96 px, 115 px
- Layout: container 1200 px; breakpoints 700 px
- Motion: 350 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** tactile, slow, sincere.

Halcyon Atelier writes like a potter describing the day's work: unhurried, concrete and quietly proud. It leans on thumbprints, glaze and firing rather than adjectives.

**Do**

- Name the clay, glaze or firing in every description
- Write in short, calm sentences
- Mention the person who made the piece

**Do not**

- Do not use 'artisanal' or 'curated'
- Do not hurry the reader to buy
- Do not explain the craft in jargon

## Taglines

1. Made slowly, by hand
2. Thrown, glazed and fired in the loft
3. Each piece carries a thumbprint
4. Tableware with time in it
5. Small batches, patient hands

**Boilerplate:** Halcyon Atelier is a ceramics studio in a converted net loft, throwing, glazing and firing small batches of tableware by hand.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | See the collection |
| secondaryCta | Visit the studio |
| success | Thank you. Your piece will be packed by hand. |
| error | That piece is sold out. Join the list for the next firing. |
| empty | No pieces in this collection yet. The next kiln is soon. |

---
Source listing key `o:nav-section-dots`. Rebuild with `python3 scripts/brand-kit/build.py o:nav-section-dots`.
