# Fernwood Docs — brand kit

*Documentation platform for calm, findable guides.* Generated from the SiteShelf listing **Breadcrumb Navigation** (Navigation); every value below is read from that page, not invented.

> **Always know where you are**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter Bold (stand-in for Source Serif 4) |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **chevrons** glyph. Stacked chevrons read as a breadcrumb trail and as steps climbing back out. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F7F6F2` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#6A716B` | Body and heading text |
| textMuted | `#1F2420` | Secondary text, captions |
| primary | `#2F6B4F` | Main actions, links, brand colour |
| secondary | `#D9B66A` | Highlights, charts, second accent |
| border | `#E4E1D8` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#D9B66A` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 4.64:1 | pass | pass |
| Muted text on background | 14.58:1 | pass | pass |
| Primary on background | 5.82:1 | pass | pass |
| Text on primary | 6.29:1 | pass | pass |
| Text on surface | 5.02:1 | pass | pass |

**Colours seen on the page** (share of use): `#F7F6F2` 99.5%, `#6A716B` 0.4%, `#1F2420` 0.1%, `#D9B66A` 0.1%, `#C8CFC6` 0.0%, `#2F6B4F` 0.0%, `#E4E1D8` 0.0%

## Typography

- Headings: **Source Serif 4** (weight 600)
- Body: **Inter**
- Mono: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Source+Serif+4:wght@600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Source Serif 4 | 40 px | 600 | 44px | normal |
| Heading / H2 | Inter | 13 px | 600 | normal | 1.3px |
| Body | Inter | 15 px | 400 | 23.25px | normal |
| Button | Arial | 13.3 px | 400 | normal | normal |
| Navigation | Inter | 15 px | 500 | normal | normal |
| Mono | Inter | 12 px | 500 | normal | normal |

## Shape, space and motion

- Radius: sm 3 px, md 8 px, lg 9 px
- Shadows: none used (flat)
- Spacing: base unit 2 px; common steps 2 px, 4 px, 5 px, 6 px, 8 px, 9 px, 10 px, 12 px, 18 px
- Layout: container 920 px; breakpoints 640 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** calm, orderly, helpful.

Sounds like a patient senior colleague pointing at a map: direct, kind and never flustered. It always says where you are and how to get back.

**Do**

- Tell the reader where they are in one clause
- Use plain verbs like open, go back and climb
- Keep labels short and parallel

**Do not**

- No jargon when a folder name will do
- Avoid cute metaphors that hide the path
- Never leave a dead end without a way back

## Taglines

1. Always know where you are
2. Find your way back, gently
3. Guides with a clear path
4. Documentation that shows its trail
5. Every page, one step from home

**Boilerplate:** Fernwood Docs is a documentation platform for teams that want clear guides, predictable navigation and a visible trail from any page back to the start.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Open guide |
| secondaryCta | Go up one level |
| success | Path updated. You are in Guides. |
| error | We could not open that folder. Try the trail above. |
| empty | This folder is empty. Go up a level to keep looking. |

---
Source listing key `o:breadcrumb-nav`. Rebuild with `python3 scripts/brand-kit/build.py o:breadcrumb-nav`.
