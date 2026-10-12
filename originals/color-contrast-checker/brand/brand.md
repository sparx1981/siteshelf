# Hueproof — brand kit

*WCAG colour contrast checker for designers.* Generated from the SiteShelf listing **Colour Contrast Checker** (Tools); every value below is read from that page, not invented.

> **Proof your colours**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Manrope |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **aperture** glyph on a circle tile. An aperture reflects light let in and seen clearly, a nod to testing how colours are actually perceived. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F5F6F8` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#5D6475` | Body and heading text |
| textMuted | `#1D4F91` | Secondary text, captions |
| primary | `#1D4F91` | Main actions, links, brand colour |
| secondary | `#FFD54A` | Highlights, charts, second accent |
| border | `#DDE0E6` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#FFD54A` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 5.48:1 | pass | pass |
| Muted text on background | 7.53:1 | pass | pass |
| Primary on background | 7.53:1 | pass | pass |
| Text on primary | 8.14:1 | pass | pass |
| Text on surface | 5.92:1 | pass | pass |

**Colours seen on the page** (share of use): `#F5F6F8` 96.4%, `#DFF4E6` 0.8%, `#14171F` 0.7%, `#0B6BCB` 0.5%, `#FFD54A` 0.5%, `#E06C3C` 0.5%, `#5D6475` 0.2%, `#1D4F91` 0.2%, `#0E6B32` 0.0%, `#767676` 0.0%

## Typography

- Headings: **Manrope** (weight 800)
- Body: **Manrope**
- Google Fonts: `https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@500&family=Manrope:wght@500;700;800&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Manrope | 28 px | 800 | normal | -0.56px |
| Heading / H2 | Manrope | 22 px | 800 | normal | normal |
| Body | Manrope | 16 px | 500 | 24px | normal |
| Button | Arial | 18 px | 400 | normal | normal |
| Caption / eyebrow | Manrope | 12 px | 500 | 18px | normal |

## Shape, space and motion

- Radius: sm 8 px, md 12 px, lg 14 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 2 px, 3 px, 4 px, 6 px, 8 px, 10 px, 12 px, 14 px, 16 px
- Layout: container 1000 px; breakpoints 820 px
- Motion: 250 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** exacting, helpful, unfussy.

Hueproof reads like a calm accessibility colleague who shows the ratio first and the opinion second. It is precise with numbers, kind about failures, and always follows a fail with a way to fix it.

**Do**

- Lead with the ratio, then the verdict
- Name the WCAG level and text size explicitly
- Offer a concrete fix after every failure

**Do not**

- Do not scold designers for failing
- Avoid vague words like 'readable enough'
- Never present AA and AAA as interchangeable

## Taglines

1. Proof your colours
2. Contrast, checked in a blink
3. Pass with proof
4. Colours that read for everyone
5. Check the pair. Fix the pair

**Boilerplate:** Hueproof is a free colour contrast checker that tests any text and background pair against WCAG AA and AAA, shows a live preview and suggests the nearest passing colour.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Suggest a fix |
| secondaryCta | Swap colours |
| success | Passes AA for normal text. |
| error | That is not a valid hex colour. Try six characters, like 1d4f91. |
| empty | Pick two colours to see the ratio. |

---
Source listing key `o:color-contrast-checker`. Rebuild with `python3 scripts/brand-kit/build.py o:color-contrast-checker`.
