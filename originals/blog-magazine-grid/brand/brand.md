# The Quarterly Post — brand kit

*Ideas, culture and food writing in print style.* Generated from the SiteShelf listing **Magazine Grid Blog** (Blog); every value below is read from that page, not invented.

> **Good writing, delivered quarterly**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Playfair Display |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **wave** glyph on a squircle tile. A wave nods to the strait and the ferry crossing in the lead story, set against an editorial masthead. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#FFFDF9` | Page background |
| surface | `#0F2A4A` | Cards, panels, raised areas |
| text | `#141414` | Body and heading text |
| textMuted | `#6B6B6B` | Secondary text, captions |
| primary | `#E63E1C` | Main actions, links, brand colour |
| secondary | `#8EA0FF` | Highlights, charts, second accent |
| border | `#141414` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#672014` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 18.13:1 | pass | pass |
| Muted text on background | 5.25:1 | pass | pass |
| Primary on background | 4.08:1 | fail | pass |
| Text on primary | 4.74:1 | pass | pass |
| Text on surface | 1.27:1 | fail | fail |

**Colours seen on the page** (share of use): `#FFFDF9` 90.4%, `#E63E1C` 1.7%, `#0F2A4A` 1.6%, `#F6C177` 1.6%, `#2D3A8C` 0.9%, `#8EA0FF` 0.9%, `#1C5E55` 0.9%, `#8EE0CF` 0.9%, `#9A4B12` 0.6%, `#444444` 0.6%

## Typography

- Headings: **Playfair Display** (weight 800)
- Body: **Libre Franklin**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@400;600;700&family=Playfair+Display:wght@700;800&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Playfair Display | 46 px | 800 | 49.68px | normal |
| Heading / H2 | Playfair Display | 22 px | 800 | normal | normal |
| Subheading / H3 | Playfair Display | 21 px | 700 | 25.2px | normal |
| Body | Libre Franklin | 18 px | 400 | 27.9px | normal |
| Button | Libre Franklin | 13 px | 700 | 20.15px | normal |
| Navigation | Libre Franklin | 14 px | 600 | 21.7px | normal |
| Caption / eyebrow | Libre Franklin | 12.5 px | 400 | 19.375px | normal |

## Shape, space and motion

- Radius: sm 6 px, md 6 px, lg 6 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 4 px, 6 px, 8 px, 10 px, 12 px, 14 px, 16 px, 18 px, 24 px
- Layout: container 1160 px; breakpoints 560 px, 900 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** literary, wry, confident.

The Quarterly Post sounds like a good feature desk: vivid, specific headlines and deck lines with a dry aside. It prefers a fisherman and a patient cat to a trend.

**Do**

- Write headlines as small scenes with a place and a person
- Keep deck lines to one sentence with one surprising detail
- Label sections plainly: Ideas, Culture, Food

**Do not**

- No clickbait numbers or 'you will not believe'
- Do not shout in capitals
- Avoid vague superlatives like amazing or epic

## Taglines

1. Good writing, delivered quarterly
2. The long way to the news
3. Stories worth missing the last ferry for
4. Ideas, culture and a decent crossing
5. Read slowly, argue gently

**Boilerplate:** The Quarterly Post is an editorial magazine of essays, reportage and food writing, published as a front page with a featured story and a Most Read column.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Read the story |
| secondaryCta | Load more stories |
| success | You are all caught up. |
| error | We could not load more stories. Please try again. |
| empty | No stories in this section yet. |

---
Source listing key `o:blog-magazine-grid`. Rebuild with `python3 scripts/brand-kit/build.py o:blog-magazine-grid`.
