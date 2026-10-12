# Glimmerdeck — brand kit

*Collectible holographic cards.* Generated from the SiteShelf listing **3D Tilt Cards** (Cards); every value below is read from that page, not invented.

> **Forged where the lights touch the sea**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Unbounded |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **diamond** glyph on a squircle tile. A faceted gem hints at holographic rarity and a collector's treasure. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#12142A` | Page background |
| surface | `#000000` | Cards, panels, raised areas |
| text | `#FFFFFF` | Body and heading text |
| textMuted | `#CFD3F5` | Secondary text, captions |
| primary | `#F59E0B` | Main actions, links, brand colour |
| secondary | `#5B3DF5` | Highlights, charts, second accent |
| border | `#FFFFFF` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#5B3DF5` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 18.12:1 | pass | pass |
| Muted text on background | 12.33:1 | pass | pass |
| Primary on background | 8.44:1 | pass | pass |
| Text on primary | 9.15:1 | pass | pass |
| Text on surface | 21.00:1 | pass | pass |

**Colours seen on the page** (share of use): `#12142A` 31.3%, `#0B0C14` 26.8%, `#000000` 23.7%, `#5B3DF5` 2.6%, `#C23DF5` 2.6%, `#0EA5A4` 2.6%, `#22C55E` 2.6%, `#F59E0B` 2.6%, `#EF4444` 2.6%, `#FFFFFF` 2.5%

## Typography

- Headings: **Unbounded** (weight 700)
- Body: **Manrope**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Unbounded:wght@500;700&family=Manrope:wght@500;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Heading / H2 | Unbounded | 26 px | 700 | 28.6px | normal |
| Body | Manrope | 14 px | 500 | 20.3px | normal |
| Button | Manrope | 14 px | 500 | 20.3px | normal |
| Caption / eyebrow | Manrope | 11.7 px | 500 | 16.9167px | normal |

## Shape, space and motion

- Radius: sm 22 px, md 50 px, lg 50 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 6 px, 8 px, 12 px, 14 px, 16 px, 34 px, 40 px
- Layout: container 1200 px; breakpoints single fluid layout
- Motion: 500 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** shimmering, collectible, slightly mythic.

Glimmerdeck sounds like a trading card flavour text: short, mythic and a little grand. It describes each card by rarity, power and a single striking image.

**Do**

- Write card text as one vivid, mythic sentence
- Show rarity and power in plain labels
- Use light and metal imagery

**Do not**

- Use fantasy cliche like 'ancient evil'
- Over-explain stats
- Use exclamation marks

## Taglines

1. Forged where the lights touch the sea
2. Tilt it toward the light
3. Cards that catch the light
4. Rare things deserve a shine
5. Hold the glare, keep the glow

**Boilerplate:** Glimmerdeck is a collectible card brand whose holographic cards tilt and shimmer with the viewer's movement, each one carrying a rarity, a power and a short legend.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Collect this card |
| secondaryCta | View the set |
| success | Card added to your collection. |
| error | This card slipped away. Try again. |
| empty | Your collection is empty. |

---
Source listing key `o:tilt-cards`. Rebuild with `python3 scripts/brand-kit/build.py o:tilt-cards`.
