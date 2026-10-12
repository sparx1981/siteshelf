# Slow Scroll — brand kit

*Quiet gallery of small drifting artworks.* Generated from the SiteShelf listing **Parallax Column Gallery** (Gallery); every value below is read from that page, not invented.

> **Take your time**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Instrument Serif |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **bars** glyph. Three vertical bars of different heights echo the staggered columns of the gallery. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F4F1EA` | Page background |
| surface | `#D8D2C4` | Cards, panels, raised areas |
| text | `#6B665C` | Body and heading text |
| textMuted | `#181613` | Secondary text, captions |
| primary | `#FFD166` | Main actions, links, brand colour |
| secondary | `#C8B6FF` | Highlights, charts, second accent |
| border | `#E1DED6` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#715E34` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 5.06:1 | pass | pass |
| Muted text on background | 16.01:1 | pass | pass |
| Primary on background | 1.28:1 | fail | fail |
| Text on primary | 13.62:1 | pass | pass |
| Text on surface | 3.79:1 | fail | pass |

**Colours seen on the page** (share of use): `#F4F1EA` 89.7%, `#FFD166` 2.0%, `#5BC0BE` 1.2%, `#F4A261` 1.2%, `#1B1B3A` 1.2%, `#E9C46A` 1.1%, `#118AB2` 1.0%, `#FFD6A5` 0.9%, `#C8B6FF` 0.9%, `#F2CC8F` 0.8%

## Typography

- Headings: **Instrument Serif** (weight 400)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Instrument+Serif:ital@0;1&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Instrument Serif | 129.6 px | 400 | 114.048px | -3.888px |
| Body | Inter | 15 px | 400 | 24px | normal |
| Button | Inter | 15 px | 400 | 24px | normal |

## Shape, space and motion

- Radius: sm 6 px, md 6 px, lg 6 px
- Shadows: none used (flat)
- Spacing: base unit 2 px; common steps 14 px, 16 px, 18 px, 30 px, 56 px, 60 px, 90 px
- Layout: container 1200 px; breakpoints 520 px, 900 px
- Motion: 300 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** quiet, editorial, curious.

Speaks like a gallery label written by someone who wants you to stay longer: soft, short and informative. It offers names and years, then steps out of the way.

**Do**

- Give artist, title and year, nothing more
- Invite looking with gentle imperatives
- Use a few italics-worthy words, then stop

**Do not**

- No art-speak or inflated adjectives
- Avoid urgency or calls to buy
- Do not explain what the viewer can see

## Taglines

1. Take your time
2. Twenty-four works, drifting by
3. Look slowly, scroll slower
4. Small art, long attention
5. Let the columns drift

**Boilerplate:** Slow Scroll Studio is an online gallery presenting twenty-four small artworks in drifting columns, designed to be browsed slowly and examined up close.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Take a closer look |
| secondaryCta | Back to the gallery |
| success | Added to your favourites. |
| error | This work failed to load. Try again. |
| empty | No works to show. Clear the filter. |

---
Source listing key `o:gallery-parallax-columns`. Rebuild with `python3 scripts/brand-kit/build.py o:gallery-parallax-columns`.
