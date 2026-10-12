# Fernhill Library — brand kit

*Community library with four branches.* Generated from the SiteShelf listing **Mega Search Suggest** (Navigation); every value below is read from that page, not invented.

> **Find your next good read**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Fraunces |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **book** glyph on a circle tile. An open book is the honest, instantly readable library sign. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F6F1E7` | Page background |
| surface | `#FFFDF8` | Cards, panels, raised areas |
| text | `#1B2A24` | Body and heading text |
| textMuted | `#4B5B53` | Secondary text, captions |
| primary | `#123A2E` | Main actions, links, brand colour |
| secondary | `#8A6A24` | Highlights, charts, second accent |
| border | `#DCCFB8` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#8A6A24` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 13.29:1 | pass | pass |
| Muted text on background | 6.39:1 | pass | pass |
| Primary on background | 11.17:1 | pass | pass |
| Text on primary | 12.57:1 | pass | pass |
| Text on surface | 14.72:1 | pass | pass |

**Colours seen on the page** (share of use): `#F6F1E7` 64.5%, `#FFFDF8` 17.8%, `#DCCFB8` 12.9%, `#123A2E` 4.4%, `#4B5B53` 0.1%, `#F3DFA6` 0.1%, `#3B4A43` 0.1%, `#5B6B63` 0.1%, `#8A6A24` 0.0%, `#E9C779` 0.0%

## Typography

- Headings: **Fraunces** (weight 700)
- Body: **Figtree**
- Mono: **Figtree**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600&family=Fraunces:wght@600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Fraunces | 76 px | 700 | 77.52px | -1.52px |
| Heading / H2 | Fraunces | 21 px | 600 | normal | normal |
| Body | Figtree | 19 px | 400 | 29.45px | normal |
| Button | Figtree | 15 px | 400 | 23.25px | normal |
| Navigation | Fraunces | 22 px | 700 | normal | normal |
| Mono | Figtree | 11 px | 600 | normal | normal |

## Shape, space and motion

- Radius: sm 3 px, md 6 px, lg 10 px, pill (fully rounded)
- Shadows: sm: `rgb(185, 133, 44) 3px 0px 0px 0px inset` · md: `rgba(18, 58, 46, 0.55) 0px 30px 60px -24px` · lg: `rgb(185, 133, 44) 3px 0px 0px 0px inset`
- Spacing: base unit 2 px; common steps 2 px, 5 px, 6 px, 7 px, 8 px, 10 px, 12 px, 14 px, 20 px
- Layout: container 1160 px; breakpoints 720 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** welcoming, literate, helpful.

Speaks like a librarian who is happy to be asked: warm, exact and never shushing. It presents books, events and help side by side.

**Do**

- Name the branch or shelf in answers
- Offer help as a next step
- Use 'borrow' for anything on loan

**Do not**

- No shushing or rule-heavy tone
- No jargon like OPAC
- No assuming prior knowledge

## Taglines

1. Find your next good read
2. Borrow books, tools and quiet
3. Ask a human, any time
4. Four branches, one catalogue
5. Stories, shelves and good company

**Boilerplate:** Fernhill Library lends books, tools and quiet corners across four branches, with one search for novels, events and help in the same place.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Search the catalogue |
| secondaryCta | Ask a human |
| success | Reserved, we will tell you when it is ready |
| error | Search is unavailable, please try again |
| empty | No recent searches, start typing above |

---
Source listing key `o:nav-search-suggest`. Rebuild with `python3 scripts/brand-kit/build.py o:nav-search-suggest`.
