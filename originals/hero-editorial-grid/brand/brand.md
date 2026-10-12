# The Margin — brand kit

*Slow-travel and food magazine, issue 14.* Generated from the SiteShelf listing **Editorial Grid Hero** (Hero Section); every value below is read from that page, not invented.

> **The long way round**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Playfair Display |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **monogram** glyph on a squircle tile. A bold serif M mirrors the masthead of a printed magazine. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F3EDE2` | Page background |
| surface | `#E5DCCB` | Cards, panels, raised areas |
| text | `#151515` | Body and heading text |
| textMuted | `#4A463E` | Secondary text, captions |
| primary | `#D93A2B` | Main actions, links, brand colour |
| secondary | `#E8B64A` | Highlights, charts, second accent |
| border | `#151515` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#E8B64A` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 15.67:1 | pass | pass |
| Muted text on background | 8.06:1 | pass | pass |
| Primary on background | 3.93:1 | fail | pass |
| Text on primary | 4.57:1 | pass | pass |
| Text on surface | 13.42:1 | pass | pass |

**Colours seen on the page** (share of use): `#F3EDE2` 76.3%, `#E5DCCB` 13.5%, `#1F4F46` 3.6%, `#E8B64A` 3.5%, `#151515` 2.1%, `#D93A2B` 1.0%, `#4A463E` 0.1%, `#FFFFFF` 0.0%

## Typography

- Headings: **Playfair Display** (weight 900)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=DM+Mono:wght@400&family=Inter:wght@400;500;600&family=Playfair+Display:ital,wght@0,900;1,900&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Playfair Display | 82 px | 900 | 82px | -1.64px |
| Heading / H2 | Playfair Display | 26 px | 900 | 28.6px | normal |
| Body | Inter | 18 px | 400 | 28.8px | normal |
| Button | Inter | 12 px | 600 | normal | 0.96px |

## Shape, space and motion

- Radius: sm 50 px, md 50 px, lg 50 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 2 px; common steps 6 px, 8 px, 10 px, 12 px, 14 px, 16 px, 18 px, 22 px, 26 px
- Layout: container 1360 px; breakpoints 900 px
- Motion: 300 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** literary, wry, observant.

Reads like a good longform feature: patient, specific, a little wry. Cover lines promise a place and a mood, never a listicle.

**Do**

- Open with a place or object, not a theme
- Use numbers as nouns: four ferries, one bicycle
- Write headlines in sentence case with a verb

**Do not**

- No travel-brochure adjectives
- No exclamation marks
- No clickbait numbers

## Taglines

1. The long way round
2. Stories from the edge of the map
3. A magazine that takes its time
4. Slow journeys, sharp prose
5. Read on the last ferry

**Boilerplate:** The Margin is an independent print and digital magazine of slow travel, food and letters, now at its fourteenth issue.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Subscribe |
| secondaryCta | Read the issue |
| success | Welcome to the Margin, issue 14 is on its way |
| error | That address did not go through, please try again |
| empty | No stories saved yet |

---
Source listing key `o:hero-editorial-grid`. Rebuild with `python3 scripts/brand-kit/build.py o:hero-editorial-grid`.
