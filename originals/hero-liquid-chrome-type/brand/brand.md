# Alloy & Oak — brand kit

*Hand-finished steel, brass and oak furniture.* Generated from the SiteShelf listing **Liquid Chrome Headline** (Hero Section); every value below is read from that page, not invented.

> **Forged to last. Shaped to feel.**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Archivo Black |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **diamond** glyph. A faceted diamond shape suggests cut metal and hard craft, and stays crisp in capitals. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#1C2026` | Page background |
| surface | `#0B0C0E` | Cards, panels, raised areas |
| text | `#AAB0B8` | Body and heading text |
| textMuted | `#E9EDF2` | Secondary text, captions |
| primary | `#6E5217` | Main actions, links, brand colour |
| secondary | `#AFA07F` | Highlights, charts, second accent |
| border | `#3A3F47` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#AFA07F` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 7.49:1 | pass | pass |
| Muted text on background | 13.91:1 | pass | pass |
| Primary on background | 2.24:1 | fail | fail |
| Text on primary | 7.29:1 | pass | pass |
| Text on surface | 8.96:1 | pass | pass |

**Colours seen on the page** (share of use): `#0B0C0E` 40.9%, `#1C2026` 40.9%, `#FFFFFF` 4.1%, `#4B4F56` 4.1%, `#E9EDF2` 3.7%, `#8B9098` 2.1%, `#CFD5DC` 2.0%, `#6B7078` 2.0%, `#AAB0B8` 0.3%, `#6E5217` 0.0%

## Typography

- Headings: **Archivo Black** (weight 400)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Archivo+Black&family=Inter:wght@400;500;600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Archivo Black | 121.0 px | 400 | 108.864px | -3.6288px |
| Body | Inter | 18 px | 400 | 28.8px | normal |
| Button | Inter | 17 px | 600 | 27.2px | normal |
| Navigation | Archivo Black | 18 px | 400 | normal | 1.08px |

## Shape, space and motion

- Radius: sm 0 px, md 0 px, lg 0 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 8 px, 10 px, 12 px, 14 px, 15 px, 16 px, 22 px, 26 px, 28 px
- Layout: container 1440 px; breakpoints 760 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** forged, exacting, quietly proud.

Sounds like a maker describing the weld seam: sparse, confident and rooted in material. It names the metal, the finish and the run size, and leaves the shine to the page.

**Do**

- Name materials and finishes exactly, such as brass or oak
- State small batch sizes as fact
- Keep lines short and weighty

**Do not**

- Do not use luxury cliches like bespoke excellence
- Do not rush the reader with urgency
- Do not oversell with adjectives

## Taglines

1. Forged to last. Shaped to feel.
2. Steel, brass and oak, by hand
3. Twelve at a time, never more
4. Made to order, built to outlive trends
5. Finishes that gain character with age

**Boilerplate:** Alloy & Oak is a small metalworks studio that hand-finishes steel, brass and oak furniture to order in limited runs of twelve, with chrome, gold and copper finishes.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | See the collection |
| secondaryCta | How we make it |
| success | Added to your order. We'll confirm the finish. |
| error | We couldn't add that piece. Please try again. |
| empty | Nothing in your order yet. |

---
Source listing key `o:hero-liquid-chrome-type`. Rebuild with `python3 scripts/brand-kit/build.py o:hero-liquid-chrome-type`.
