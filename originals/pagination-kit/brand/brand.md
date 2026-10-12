# Fernlight Library — brand kit

*Catalogue of 96 titles with four pager styles.* Generated from the SiteShelf listing **Pagination Kit** (Navigation); every value below is read from that page, not invented.

> **Browse at your own pace**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Fraunces |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **book** glyph on a squircle tile. An open book is the plainest symbol for a library catalogue. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F6F3EC` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#6F6A5C` | Body and heading text |
| textMuted | `#1D1B16` | Secondary text, captions |
| primary | `#1F6F54` | Main actions, links, brand colour |
| secondary | `#B5651D` | Highlights, charts, second accent |
| border | `#E4DFD2` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#A1C3B7` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 4.87:1 | pass | pass |
| Muted text on background | 15.53:1 | pass | pass |
| Primary on background | 5.48:1 | pass | pass |
| Text on primary | 6.07:1 | pass | pass |
| Text on surface | 5.40:1 | pass | pass |

**Colours seen on the page** (share of use): `#F6F3EC` 68.1%, `#FFFFFF` 30.1%, `#EBE6D9` 0.7%, `#1F6F54` 0.2%, `#B5651D` 0.2%, `#3B5B92` 0.2%, `#8A3A5C` 0.2%, `#6F6A5C` 0.1%, `#1D1B16` 0.1%, `#6B7D2C` 0.1%

## Typography

- Headings: **Fraunces** (weight 700)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Fraunces:wght@600;700&family=Inter:wght@400;500;600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Fraunces | 32 px | 700 | 35.2px | normal |
| Subheading / H3 | Inter | 15 px | 600 | 22.5px | normal |
| Body | Inter | 15 px | 400 | 22.5px | normal |
| Button | Inter | 14 px | 600 | normal | normal |

## Shape, space and motion

- Radius: sm 4 px, md 10 px, lg 12 px
- Shadows: sm: `rgba(0, 0, 0, 0.133) 4px 0px 0px 0px inset` · md: `rgba(0, 0, 0, 0.133) 0px 1px 3px 0px` · lg: `rgba(0, 0, 0, 0.133) 4px 0px 0px 0px inset`
- Spacing: base unit 4 px; common steps 4 px, 6 px, 8 px, 10 px, 12 px, 14 px, 16 px, 18 px, 20 px
- Layout: container 1200 px; breakpoints 560 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** quiet, orderly, bookish.

Sounds like a thoughtful librarian at the desk: patient, exact and quietly helpful. It names the page, the total and the way to get there, and never makes browsing feel like a chore.

**Do**

- Say where the reader is, such as page 3 of 16
- Describe controls by what they do
- Keep counts tabular and consistent

**Do not**

- Do not use infinite-scroll hype
- Do not use generic labels like click here
- Do not hide the total

## Taglines

1. Browse at your own pace
2. Ninety-six titles, four ways to turn pages
3. Find your place, lose no time
4. Every shelf, one page at a time
5. Quiet browsing, well-ordered

**Boilerplate:** Fernlight Library is a catalogue of 96 invented titles that demonstrates four pagination patterns, numbered, previous and next, load more and dots, with a page-size selector.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Next page |
| secondaryCta | Load more |
| success | Showing 12 more titles. |
| error | That page doesn't exist. Try 1 to 16. |
| empty | No titles match this view. |

---
Source listing key `o:pagination-kit`. Rebuild with `python3 scripts/brand-kit/build.py o:pagination-kit`.
