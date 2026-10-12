# Saltgate Courier — brand kit

*Local magazine of long features.* Generated from the SiteShelf listing **Editorial Drop Cap** (Typography); every value below is read from that page, not invented.

> **Features from the edge of town**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Playfair Display |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **monogram** glyph on a squircle tile. A capital letter echoes the drop cap that opens every feature. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#FBF6EA` | Page background |
| surface | `#E3D7BC` | Cards, panels, raised areas |
| text | `#1B1713` | Body and heading text |
| textMuted | `#675D4C` | Secondary text, captions |
| primary | `#8F2D1F` | Main actions, links, brand colour |
| secondary | `#E8C89A` | Highlights, charts, second accent |
| border | `#1B1713` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#E8C89A` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 16.52:1 | pass | pass |
| Muted text on background | 6.00:1 | pass | pass |
| Primary on background | 7.60:1 | pass | pass |
| Text on primary | 8.19:1 | pass | pass |
| Text on surface | 12.48:1 | pass | pass |

**Colours seen on the page** (share of use): `#FBF6EA` 96.4%, `#1B1713` 1.2%, `#000000` 0.8%, `#FFFFFF` 0.5%, `#3A2F3A` 0.3%, `#E8C89A` 0.2%, `#CFE6F4` 0.2%, `#8F2D1F` 0.2%, `#D8D4CC` 0.1%, `#675D4C` 0.1%

## Typography

- Headings: **Playfair Display** (weight 800)
- Body: **Spectral**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,700&family=Spectral:ital,wght@0,400;0,600;1,400&family=Work+Sans:wght@500;600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Playfair Display | 84 px | 800 | 85.68px | -0.84px |
| Heading / H2 | Playfair Display | 36 px | 700 | 41.4px | normal |
| Body | Spectral | 24 px | 400 | 33.6px | normal |
| Button | Work Sans | 13 px | 600 | normal | normal |
| Caption / eyebrow | Work Sans | 13 px | 500 | 18.2px | normal |

## Shape, space and motion

- Radius: sm 6 px, md 16 px, lg 16 px, pill (fully rounded)
- Shadows: sm: `rgba(60, 40, 10, 0.25) 0px 14px 30px 0px` · md: `rgba(60, 40, 10, 0.25) 0px 20px 50px 0px` · lg: `rgba(60, 40, 10, 0.25) 0px 14px 30px 0px`
- Spacing: base unit 2 px; common steps 6 px, 8 px, 13 px, 14 px, 16 px, 18 px, 19 px, 20 px, 22 px
- Layout: container 1200 px; breakpoints 760 px, 1100 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** literary, warm, deliberate.

Saltgate Courier sounds like a seaside paper with ambitions: craftsmanlike, full of local detail and gently wry. Sentences run long enough for a proper drop cap.

**Do**

- Open with a concrete scene or object
- Use sidenotes for asides, not for padding
- Prefer old words for light and weather

**Do not**

- Use clickbait headlines
- Use jargon from tech or marketing
- Rush the reader

## Taglines

1. Features from the edge of town
2. Read slowly, set beautifully
3. The last of the old trades
4. Stories set like a printed page
5. A small paper with long memories

**Boilerplate:** Saltgate Courier is a local feature magazine from a fictional seaside town, setting long-form stories in careful print typography with sidenotes and pull quotes.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Read the feature |
| secondaryCta | Type settings |
| success | Settings saved. |
| error | Could not apply those settings. Reset and retry. |
| empty | No features in this section yet. |

---
Source listing key `o:type-editorial-dropcap`. Rebuild with `python3 scripts/brand-kit/build.py o:type-editorial-dropcap`.
