# Brookline Water — brand kit

*Hydration brand with a fill-up loader.* Generated from the SiteShelf listing **Water Fill Loader** (Loaders); every value below is read from that page, not invented.

> **Fill it up**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Fredoka |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **drop** glyph on a squircle tile. A water drop is the clearest symbol for a hydration brand. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#06263A` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#EAF8FF` | Body and heading text |
| textMuted | `#9FC7D8` | Secondary text, captions |
| primary | `#1AA6D6` | Main actions, links, brand colour |
| secondary | `#BFEAFF` | Highlights, charts, second accent |
| border | `#BEF0FF` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#114C63` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 14.39:1 | pass | pass |
| Muted text on background | 8.64:1 | pass | pass |
| Primary on background | 5.55:1 | pass | pass |
| Text on primary | 6.99:1 | pass | pass |
| Text on surface | 1.08:1 | fail | fail |

**Colours seen on the page** (share of use): `#06263A` 95.4%, `#000000` 2.1%, `#1AA6D6` 0.7%, `#D9F4FF` 0.7%, `#FFFFFF` 0.4%, `#0B3550` 0.3%, `#78DCFF` 0.1%, `#9FC7D8` 0.1%, `#4CD0F5` 0.1%, `#BFEAFF` 0.0%

## Typography

- Headings: **Fredoka** (weight 700)
- Body: **Nunito**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Nunito:wght@400;600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Fredoka | 72 px | 700 | 72px | normal |
| Body | Nunito | 17 px | 400 | 26.35px | normal |
| Caption / eyebrow | Nunito | 13 px | 600 | normal | 2.34px |

## Shape, space and motion

- Radius: sm 10 px, md 10 px, lg 10 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 2 px, 8 px, 10 px, 12 px, 14 px, 16 px, 18 px, 24 px, 26 px
- Layout: container 1200 px; breakpoints 560 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** clean, refreshing, helpful.

Brookline Water sounds like a cool glass on a hot day: clear, simple and quietly encouraging. Short sentences make a point about drinking enough without nagging.

**Do**

- Use short, clear sentences about water and levels
- Show percentages as plain figures
- Encourage habits kindly

**Do not**

- Use wellness hype or health claims
- Use aquatic puns on every line
- Talk down about hydration

## Taglines

1. Fill it up
2. A little more every hour
3. Clear, cold and ready
4. Drink up, stay level
5. Top up the day

**Boilerplate:** Brookline Water is a hydration brand that helps people drink enough through simple reminders, a visual fill gauge and bottles designed to be refilled.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Fill it up |
| secondaryCta | Top up |
| success | Glass full. Nice work. |
| error | Could not update your level. Try again. |
| empty | Your glass is empty. Start filling. |

---
Source listing key `o:loader-water-fill`. Rebuild with `python3 scripts/brand-kit/build.py o:loader-water-fill`.
