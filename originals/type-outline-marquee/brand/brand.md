# Nocturne Type Co. — brand kit

*Type foundry for nightlife and display lettering.* Generated from the SiteShelf listing **Outline Marquee Type** (Typography); every value below is read from that page, not invented.

> **Five families, all hours**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Archivo Black |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **monogram** glyph on a squircle tile. A heavy N lets the wordmark read like a poster headline. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#0E0B14` | Page background |
| surface | `#FFB347` | Cards, panels, raised areas |
| text | `#FF3D8B` | Body and heading text |
| textMuted | `#FFB347` | Secondary text, captions |
| primary | `#FFB347` | Main actions, links, brand colour |
| secondary | `#FF3D8B` | Highlights, charts, second accent |
| border | `#FFF3DF` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#715227` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 5.84:1 | pass | pass |
| Muted text on background | 10.95:1 | pass | pass |
| Primary on background | 10.95:1 | pass | pass |
| Text on primary | 11.03:1 | pass | pass |
| Text on surface | 1.87:1 | fail | fail |

**Colours seen on the page** (share of use): `#0E0B14` 67.4%, `#000000` 12.0%, `#FFFFFF` 10.6%, `#1A1033` 4.5%, `#2A1B4A` 4.2%, `#FFB347` 0.4%, `#FF3D8B` 0.4%, `#5A2A22` 0.2%, `#8A4230` 0.2%, `#FFF3DF` 0.1%

## Typography

- Headings: **Archivo Black** (weight 400)
- Body: **Archivo Black**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Archivo+Black&family=DM+Mono:wght@500&family=Space+Grotesk:wght@400;500;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Heading / H2 | Archivo Black | 64 px | 400 | 64px | normal |
| Button | Space Grotesk | 13 px | 700 | normal | normal |
| Navigation | Space Grotesk | 14 px | 500 | 21.7px | normal |
| Caption / eyebrow | Space Grotesk | 12 px | 700 | normal | 2.4px |

## Shape, space and motion

- Radius: sm 12 px, md 18 px, lg 18 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 4 px, 6 px, 12 px, 14 px, 16 px, 18 px, 20 px, 22 px, 24 px
- Layout: container 1100 px; breakpoints 700 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** loud, after-dark, confident.

Speaks in poster headlines: big, short and stylish, then drops quiet for the licensing details. Letters are the hero, copy gets out of the way.

**Do**

- Use few words in huge sizes
- Name families and weights directly
- Keep licensing plain and complete

**Do not**

- No design-trend buzzwords
- No small-print tricks in licences
- No comparing to other foundries by name

## Taglines

1. Five families, all hours
2. Type for after dark
3. Loud letters, quiet licences
4. Draw the night in capitals
5. Fonts with a late pass

**Boilerplate:** Nocturne Type Co. is an independent type foundry releasing display typefaces for late nights, with straightforward licensing for web, print and brand use.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Browse fonts |
| secondaryCta | Read the licence |
| success | Added to your trial |
| error | Could not load the font preview, try again |
| empty | No fonts match that filter |

---
Source listing key `o:type-outline-marquee`. Rebuild with `python3 scripts/brand-kit/build.py o:type-outline-marquee`.
