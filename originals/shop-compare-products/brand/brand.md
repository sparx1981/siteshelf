# Resonance Audio — brand kit

*Headphones for every listener.* Generated from the SiteShelf listing **Compare Products Tray** (E-commerce); every value below is read from that page, not invented.

> **Find the pair that fits**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Sora |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **wave** glyph on a squircle tile. A sound wave is a direct and immediate image for audio. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#EEF1F5` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#52606D` | Body and heading text |
| textMuted | `#14202B` | Secondary text, captions |
| primary | `#3A47C9` | Main actions, links, brand colour |
| secondary | `#14202B` | Highlights, charts, second accent |
| border | `#14202B` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#14202B` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 5.70:1 | pass | pass |
| Muted text on background | 14.58:1 | pass | pass |
| Primary on background | 6.34:1 | pass | pass |
| Text on primary | 7.18:1 | pass | pass |
| Text on surface | 6.46:1 | pass | pass |

**Colours seen on the page** (share of use): `#EEF1F5` 59.4%, `#FFFFFF` 35.3%, `#000000` 2.3%, `#3A47C9` 1.4%, `#2A2A2A` 0.9%, `#DFE8DF` 0.3%, `#14202B` 0.2%, `#52606D` 0.1%

## Typography

- Headings: **Sora** (weight 600)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@500&family=Inter:wght@400;500;600&family=Sora:wght@600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Sora | 52 px | 600 | 53.56px | normal |
| Heading / H2 | Sora | 19 px | 600 | normal | normal |
| Body | Inter | 15 px | 400 | 22.5px | normal |
| Button | Inter | 14 px | 600 | normal | normal |
| Caption / eyebrow | Inter | 12 px | 700 | normal | 1.92px |

## Shape, space and motion

- Radius: sm 10 px, md 16 px, lg 22 px
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 2 px, 4 px, 6 px, 8 px, 10 px, 12 px, 14 px, 16 px, 20 px
- Layout: container 1240 px; breakpoints 760 px, 1000 px
- Motion: 150 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** exact, friendly, enthusiastic.

Resonance Audio speaks like a knowledgeable shop assistant who lets you try before you buy. It states specs plainly, notes trade-offs honestly and respects that you may not want the dearest pair.

**Do**

- Compare on measurable specs and say which wins
- Give price and battery life in plain numbers
- Mention trade-offs

**Do not**

- Do not call any pair 'audiophile-grade'
- Do not hide the weight or battery figure
- Do not use superlatives

## Taglines

1. Find the pair that fits
2. Compare, then choose with confidence
3. Sound you can measure
4. Three pairs, side by side
5. Headphones, honestly described

**Boilerplate:** Resonance Audio is an audio brand with six headphone models, compared side by side on specs, weight, battery life and price.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Compare |
| secondaryCta | Clear tray |
| success | Added to compare. You can pick two more. |
| error | Your tray is full. Remove a pair to add another. |
| empty | Your tray is empty. Pick up to three pairs. |

---
Source listing key `o:shop-compare-products`. Rebuild with `python3 scripts/brand-kit/build.py o:shop-compare-products`.
