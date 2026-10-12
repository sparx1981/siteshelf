# Skerrow Review — brand kit

*Long reads on coast, craft and local mysteries.* Generated from the SiteShelf listing **Article with Reading Controls** (Blog); every value below is read from that page, not invented.

> **Read it your way**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter Bold (stand-in for Source Serif 4) |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **book** glyph on a squircle tile. An open book is the honest symbol for a publication built around reading comfort. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#FBF8F1` | Page background |
| surface | `#25211B` | Cards, panels, raised areas |
| text | `#25211B` | Body and heading text |
| textMuted | `#7A7165` | Secondary text, captions |
| primary | `#C2410C` | Main actions, links, brand colour |
| secondary | `#DD9679` | Highlights, charts, second accent |
| border | `#E7DFCF` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#E5AF99` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 15.09:1 | pass | pass |
| Muted text on background | 4.52:1 | pass | pass |
| Primary on background | 4.88:1 | pass | pass |
| Text on primary | 5.18:1 | pass | pass |
| Text on surface | 1.00:1 | fail | fail |

**Colours seen on the page** (share of use): `#FBF8F1` 98.4%, `#25211B` 1.4%, `#7A7165` 0.1%, `#C2410C` 0.0%, `#DD9679` 0.0%, `#E7DFCF` 0.0%, `#E5AF99` 0.0%

## Typography

- Headings: **Source Serif 4** (weight 700)
- Body: **Source Serif 4**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Source+Serif+4:ital,wght@0,400;0,700;1,400&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Source Serif 4 | 44 px | 700 | 48.4px | normal |
| Heading / H2 | Source Serif 4 | 26.6 px | 700 | 31.92px | normal |
| Body | Source Serif 4 | 21.9 px | 400 | 37.145px | normal |
| Button | Inter | 14 px | 600 | normal | normal |

## Shape, space and motion

- Radius: sm 8 px, md 8 px, lg 8 px
- Shadows: none used (flat)
- Spacing: base unit 2 px; common steps 4 px, 6 px, 8 px, 10 px, 13 px, 18 px, 20 px, 23 px, 44 px
- Layout: container 1200 px; breakpoints 600 px
- Motion: 300 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** thoughtful, literate, quietly wry.

The Skerrow Review sounds like a good magazine essayist: patient sentences, a dry aside now and then, and respect for the reader's time. Interface text stays low and neutral so the article can speak.

**Do**

- Write headlines as concrete scenes, not claims
- Keep interface labels to one plain word
- Let the first sentence carry a small hook

**Do not**

- Use clickbait phrasing or numbered listicle titles
- Explain the reading controls at length
- Apologise for article length

## Taglines

1. Read it your way
2. Long reads for slow evenings
3. Stories from the edge of the map
4. Set the type, keep the thread
5. A good lamp and a better story

**Boilerplate:** The Skerrow Review publishes long-form features on coastal life, local lore and unexplained habits, with a reading view the reader can tune to their own eyes.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Keep reading |
| secondaryCta | Adjust text |
| success | Settings saved for this session. |
| error | We lost your place. Scroll to carry on. |
| empty | No articles saved yet. |

---
Source listing key `o:blog-reading-controls`. Rebuild with `python3 scripts/brand-kit/build.py o:blog-reading-controls`.
