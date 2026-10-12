# The Lamplight Review — brand kit

*Independent magazine of culture, science and food.* Generated from the SiteShelf listing **Article Cards Grid** (Cards); every value below is read from that page, not invented.

> **Stories worth sitting down for**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Playfair Display |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **flame** glyph. A lamp flame is the quiet light of evening reading and the name made visible. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#FAF8F4` | Page background |
| surface | `#C4243B` | Cards, panels, raised areas |
| text | `#5C554B` | Body and heading text |
| textMuted | `#1A1714` | Secondary text, captions |
| primary | `#6B2D0E` | Main actions, links, brand colour |
| secondary | `#3A0D19` | Highlights, charts, second accent |
| border | `#ECE7DD` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#C1A79A` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 6.93:1 | pass | pass |
| Muted text on background | 16.83:1 | pass | pass |
| Primary on background | 9.87:1 | pass | pass |
| Text on primary | 10.46:1 | pass | pass |
| Text on surface | 1.28:1 | fail | fail |

**Colours seen on the page** (share of use): `#FAF8F4` 95.6%, `#3A0D19` 1.2%, `#0E2A46` 0.8%, `#26134F` 0.6%, `#0F3B2A` 0.4%, `#6B2D0E` 0.4%, `#1A1714` 0.4%, `#5C554B` 0.3%, `#756D62` 0.2%, `#C4243B` 0.1%

## Typography

- Headings: **Playfair Display** (weight 800)
- Body: **Public Sans**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;800&family=Public+Sans:wght@400;500;600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Subheading / H3 | Playfair Display | 38 px | 800 | 41.8px | normal |
| Body | Public Sans | 16.5 px | 400 | 25.575px | normal |
| Button | Public Sans | 14 px | 700 | normal | normal |

## Shape, space and motion

- Radius: sm 20 px, md 20 px, lg 20 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 2 px; common steps 4 px, 6 px, 8 px, 10 px, 12 px, 14 px, 18 px, 20 px, 22 px
- Layout: container 1160 px; breakpoints 560 px, 760 px, 1000 px
- Motion: 250 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** literary, curious, assured.

Reads like a well-edited magazine standfirst: confident, a little wry, always specific. Headlines promise one clear idea and the dek delivers a surprise.

**Do**

- Write headlines as a concrete claim or image
- Give reading time and author honestly
- Prefer a vivid noun to an adjective

**Do not**

- No clickbait or numbered listicle titles
- Avoid breathless superlatives
- Do not explain the joke

## Taglines

1. Stories worth sitting down for
2. Read by lamplight, think by morning
3. Culture, science and supper, in depth
4. Long reads for slow evenings
5. Good writing, lit from within

**Boilerplate:** The Lamplight Review is an independent magazine publishing long-form stories on culture, science, food and travel for readers who like to take their time.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Read the story |
| secondaryCta | Load more stories |
| success | Saved to your reading list. |
| error | We could not load more stories. Please try again. |
| empty | Nothing saved yet. Tap the bookmark on any story. |

---
Source listing key `o:article-cards-grid`. Rebuild with `python3 scripts/brand-kit/build.py o:article-cards-grid`.
