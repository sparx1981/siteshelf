# Chapterhouse — brand kit

*Short illustrated stories told in sideways chapters.* Generated from the SiteShelf listing **Horizontal Scroll Story** (Landing Page); every value below is read from that page, not invented.

> **A short story in five chapters**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Fraunces |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **compass** glyph on a circle tile. A compass suits a story about taking the long way round and keeps the mark simple. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F3EFE7` | Page background |
| surface | `#1B1B1F` | Cards, panels, raised areas |
| text | `#1B1B1F` | Body and heading text |
| textMuted | `#3D3A34` | Secondary text, captions |
| primary | `#E4572E` | Main actions, links, brand colour |
| secondary | `#6B82E8` | Highlights, charts, second accent |
| border | `#1B1B1F` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#662B1C` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 14.97:1 | pass | pass |
| Muted text on background | 9.88:1 | pass | pass |
| Primary on background | 3.21:1 | fail | pass |
| Text on primary | 5.33:1 | pass | pass |
| Text on surface | 1.00:1 | fail | fail |

**Colours seen on the page** (share of use): `#F3EFE7` 56.8%, `#1B1B1F` 10.9%, `#FFD9C2` 10.2%, `#CFE8DC` 10.2%, `#C9D6FF` 10.2%, `#E4572E` 0.9%, `#6B82E8` 0.3%, `#FFB36B` 0.2%, `#FFFFFF` 0.2%, `#3D3A34` 0.0%

## Typography

- Headings: **Fraunces** (weight 700)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,700;1,9..144,400&family=Inter:wght@400;500;600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Fraunces | 129.6 px | 700 | 123.12px | -3.888px |
| Heading / H2 | Fraunces | 129.6 px | 700 | 123.12px | -3.888px |
| Body | Inter | 19 px | 400 | 30.4px | normal |
| Button | Arial | 13.3 px | 400 | normal | normal |

## Shape, space and motion

- Radius: sm 50 px, md 50 px, lg 50 px, pill (fully rounded)
- Shadows: sm: `rgb(243, 239, 231) -27px -27px 0px 0px inset, rgb(243, 239, 231) 0px 0px 0px 2px` · md: `rgb(243, 239, 231) -27px -27px 0px 0px inset, rgb(243, 239, 231) 0px 0px 0px 2px` · lg: `rgb(243, 239, 231) -27px -27px 0px 0px inset, rgb(243, 239, 231) 0px 0px 0px 2px`
- Spacing: base unit 4 px; common steps 8 px, 12 px, 16 px, 18 px, 20 px, 24 px, 28 px, 115 px
- Layout: container 1200 px; breakpoints 800 px
- Motion: 700 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** wistful, lyrical, gentle.

Chapterhouse tells stories in quiet, concrete sentences with a lingering end. It sounds like a bedtime reader who trusts a pause more than an exclamation.

**Do**

- Write each chapter in one image and one feeling
- Keep sentences short and let white space speak
- Number chapters and name the next one

**Do not**

- Do not explain the moral
- Avoid slang and trend words
- Never rush the ending

## Taglines

1. A short story in five chapters
2. Scroll slowly, arrive somewhere
3. The long way round
4. Tales you read sideways
5. Five rooms, one journey

**Boilerplate:** Chapterhouse publishes short illustrated stories as pinned horizontal-scroll experiences, each told in five chapters that unfold as the reader scrolls.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Begin chapter one |
| secondaryCta | Back to the start |
| success | The end. Thank you for reading. |
| error | This chapter would not load. Please scroll again. |
| empty | No stories on the shelf yet. |

---
Source listing key `o:hscroll-story`. Rebuild with `python3 scripts/brand-kit/build.py o:hscroll-story`.
