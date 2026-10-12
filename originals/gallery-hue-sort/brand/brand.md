# Spectrum Room — brand kit

*Studio showing generated art sorted by colour.* Generated from the SiteShelf listing **Sort By Colour Gallery** (Gallery); every value below is read from that page, not invented.

> **Sorted by colour, nothing else**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Bricolage Grotesque |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **grid** glyph. A tile grid represents the swatch wall the brand reorders. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#FAFAFA` | Page background |
| surface | `#161616` | Cards, panels, raised areas |
| text | `#161616` | Body and heading text |
| textMuted | `#646464` | Secondary text, captions |
| primary | `#B11061` | Main actions, links, brand colour |
| secondary | `#76790B` | Highlights, charts, second accent |
| border | `#E4E4E4` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#DE9BBD` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 17.34:1 | pass | pass |
| Muted text on background | 5.67:1 | pass | pass |
| Primary on background | 6.46:1 | pass | pass |
| Text on primary | 6.74:1 | pass | pass |
| Text on surface | 1.00:1 | fail | fail |

**Colours seen on the page** (share of use): `#FAFAFA` 96.3%, `#381259` 0.4%, `#37630D` 0.4%, `#91221D` 0.4%, `#B11061` 0.4%, `#151273` 0.4%, `#7A501F` 0.4%, `#5F585B` 0.4%, `#249E6B` 0.4%, `#76790B` 0.4%

## Typography

- Headings: **Bricolage Grotesque** (weight 800)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@700;800&family=DM+Mono:wght@400;500&family=Inter:wght@400;500&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Bricolage Grotesque | 96 px | 800 | 91.2px | -3.84px |
| Body | Inter | 15 px | 400 | 23.25px | normal |
| Button | DM Mono | 12 px | 500 | normal | 0.72px |

## Shape, space and motion

- Radius: sm 8 px, md 8 px, lg 8 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 3 px, 4 px, 6 px, 8 px, 10 px, 14 px, 16 px, 18 px, 20 px
- Layout: container 1200 px; breakpoints 600 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** bright, orderly, playful.

Sounds like a gallery guide with a love of swatches: short, visual, a bit wry. Colours are named precisely, hex codes always shown.

**Do**

- Name colours with a quirky word and show the hex
- Describe sorting in verbs: regroup, reflow, copy
- Keep titles to three words or fewer

**Do not**

- No art-critic waffle
- No calling every piece unique
- No vague colour words like pretty

## Taglines

1. Sorted by colour, nothing else
2. Forty-eight works, one rainbow
3. Hue first, meaning later
4. Change your mind, the tiles follow
5. A room full of colour

**Boilerplate:** Spectrum Room is a studio and gallery of small generated artworks that reorder themselves by hue, lightness or title, with every colour one tap from your clipboard.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Sort by hue |
| secondaryCta | Copy palette |
| success | Colour copied to the clipboard |
| error | That colour could not be copied, try again |
| empty | No works match that hue yet |

---
Source listing key `o:gallery-hue-sort`. Rebuild with `python3 scripts/brand-kit/build.py o:gallery-hue-sort`.
