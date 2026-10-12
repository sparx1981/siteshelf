# Prismly — brand kit

*Living design systems for whole teams.* Generated from the SiteShelf listing **Mesh Gradient Hero** (Hero Section); every value below is read from that page, not invented.

> **Design systems that feel alive**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Bricolage Grotesque |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **diamond** glyph on a circle tile. A faceted gem is a quiet nod to prisms and to a colour system with many sides. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#0B0B18` | Page background |
| surface | `#000000` | Cards, panels, raised areas |
| text | `#FFFFFF` | Body and heading text |
| textMuted | `#AAAAAE` | Secondary text, captions |
| primary | `#7C4DFF` | Main actions, links, brand colour |
| secondary | `#00D4C0` | Highlights, charts, second accent |
| border | `#FFFFFF` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#00D4C0` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 19.53:1 | pass | pass |
| Muted text on background | 8.44:1 | pass | pass |
| Primary on background | 4.06:1 | fail | pass |
| Text on primary | 4.81:1 | pass | pass |
| Text on surface | 21.00:1 | pass | pass |

**Colours seen on the page** (share of use): `#0B0B18` 97.4%, `#FFFFFF` 1.3%, `#000000` 0.9%, `#FFD6E0` 0.1%, `#D6F0FF` 0.1%, `#E0FFD6` 0.1%, `#FFF3C4` 0.1%, `#7C4DFF` 0.0%, `#00D4C0` 0.0%, `#FF8A3D` 0.0%

## Typography

- Headings: **Bricolage Grotesque** (weight 800)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@500;700;800&family=Inter:wght@400;500;600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Bricolage Grotesque | 104 px | 800 | 101.92px | -3.12px |
| Body | Inter | 19 px | 400 | 29.45px | normal |
| Button | Inter | 13 px | 600 | normal | normal |
| Navigation | Inter | 17 px | 500 | 26.35px | normal |

## Shape, space and motion

- Radius: sm 6 px, md 6 px, lg 6 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 4 px, 6 px, 8 px, 10 px, 12 px, 14 px, 16 px, 18 px, 26 px
- Layout: container 920 px; breakpoints 640 px
- Motion: 150 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** vivid, confident, design-literate.

Prismly sounds like a design lead who loves the craft and respects the engineers: confident, colourful and specific about tokens and components. Copy is bold in headline and exact in detail.

**Do**

- Name the real thing, such as tokens, components or docs
- Keep headlines short and punchy
- Use one vivid verb per sentence

**Do not**

- Use 'seamless' or 'effortless' as filler
- Over-explain colour theory
- Talk about design in abstractions

## Taglines

1. Design systems that feel alive
2. Tokens, components and docs as one
3. A system your team actually uses
4. One source for every pixel
5. Make the system yours

**Boilerplate:** Prismly turns design tokens, components and documentation into one living system that designers and engineers can all use, with themes that adapt to every product.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Get started |
| secondaryCta | See the demo |
| success | Palette applied across your system. |
| error | Could not sync tokens. Check your file and retry. |
| empty | No components yet. Import your first. |

---
Source listing key `o:hero-mesh-gradient`. Rebuild with `python3 scripts/brand-kit/build.py o:hero-mesh-gradient`.
