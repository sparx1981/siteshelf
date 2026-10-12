# NOVA Space Systems — brand kit

*Launch provider with five decades of flight heritage.* Generated from the SiteShelf listing **NOVA Space Systems** (Landing Page); every value below is read from that page, not invented.

> **Rockets, engineered for dependability**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Space Grotesk |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **rocket** glyph on a squircle tile. A rocket is the product, drawn in a stark single-line style. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#000000` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#A6A6A6` | Body and heading text |
| textMuted | `#FFFFFF` | Secondary text, captions |
| primary | `#A6A6A6` | Main actions, links, brand colour |
| secondary | `#CECECE` | Highlights, charts, second accent |
| border | `#595959` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#4C4C4E` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 8.63:1 | pass | pass |
| Muted text on background | 21.00:1 | pass | pass |
| Primary on background | 8.63:1 | pass | pass |
| Text on primary | 8.07:1 | pass | pass |
| Text on surface | 2.43:1 | fail | fail |

**Colours seen on the page** (share of use): `#000000` 99.1%, `#FFFFFF` 0.6%, `#A6A6A6` 0.3%, `#CECECE` 0.0%, `#595959` 0.0%

## Typography

- Headings: **Space Grotesk** (weight 700)
- Body: **Space Grotesk**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Space Grotesk | 192 px | 700 | 163.2px | -9.6px |
| Heading / H2 | Space Grotesk | 112 px | 300 | 100.8px | -5.6px |
| Subheading / H3 | Space Grotesk | 30 px | 400 | 34.5px | -0.3px |
| Body | Space Grotesk | 18 px | 400 | 29.7px | normal |
| Button | Space Grotesk | 14 px | 400 | normal | normal |
| Navigation | Space Grotesk | 14 px | 400 | normal | 0.35px |

## Shape, space and motion

- Radius: sm 0 px, md 0 px, lg 0 px
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 2 px, 4 px, 6 px, 8 px, 12 px, 16 px, 20 px, 24 px, 32 px
- Layout: container 1200 px; breakpoints 640 px, 768 px, 1024 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** rigorous, stark, assured.

Mission control with nothing to prove: spare, technical and precise. Capitals and monochrome convey the seriousness of spaceflight.

**Do**

- Use hard facts such as years, payloads and orbits
- State capabilities without superlatives
- Keep sentences short and declarative

**Do not**

- Sci-fi language like galactic
- Exaggerated safety claims
- Emoji or exclamation marks

## Taglines

1. Rockets, engineered for dependability
2. Five decades of proven spaceflight
3. Precision to orbit and beyond
4. Launch systems, no compromise
5. Built for the deep dark

**Boilerplate:** NOVA Space Systems builds launch systems for precise orbital insertions and deep space trajectories, backed by more than five decades of proven spaceflight.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | View our fleet |
| secondaryCta | Search programs |
| success | Request logged. Mission team notified |
| error | Transmission failed. Resend |
| empty | No programs match your search |

---
Source listing key `m:nova-space-systems`. Rebuild with `python3 scripts/brand-kit/build.py m:nova-space-systems`.
