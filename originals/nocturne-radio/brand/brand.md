# Nocturne Radio — brand kit

*Late-night radio for the small hours.* Generated from the SiteShelf listing **Nocturne Radio Hero Section** (Hero Section); every value below is read from that page, not invented.

> **Music for the hours nobody asked for**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Syne |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **dial** glyph on a squircle tile. A tuning dial is the old-fashioned radio icon and echoes the spinning vinyl and level bars. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#17101F` | Page background |
| surface | `#FFB347` | Cards, panels, raised areas |
| text | `#EFE8F7` | Body and heading text |
| textMuted | `#A99BBD` | Secondary text, captions |
| primary | `#FFB347` | Main actions, links, brand colour |
| secondary | `#8C6227` | Highlights, charts, second accent |
| border | `#FFB347` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#8C6227` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 15.53:1 | pass | pass |
| Muted text on background | 7.18:1 | pass | pass |
| Primary on background | 10.43:1 | pass | pass |
| Text on primary | 11.03:1 | pass | pass |
| Text on surface | 1.49:1 | fail | fail |

**Colours seen on the page** (share of use): `#17101F` 97.5%, `#FFB347` 2.3%, `#EFE8F7` 0.2%, `#A99BBD` 0.0%, `#8C6227` 0.0%

## Typography

- Headings: **Syne** (weight 800)
- Body: **DM Mono**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Syne:wght@800&family=DM+Mono:wght@400;500&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Syne | 123.8 px | 800 | 113.933px | -4.3344px |
| Button | Arial | 13.3 px | 400 | normal | normal |

## Shape, space and motion

- Radius: sm 50 px, md 50 px, lg 50 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 4 px, 10 px, 11 px, 16 px, 18 px, 20 px, 24 px, 32 px, 36 px
- Layout: container 1115 px; breakpoints 800 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** nocturnal, dry, intimate.

Nocturne Radio sounds like the voice on the station at 3 a.m.: low, a little wry and talking to one listener. Station idents are short and slightly mysterious.

**Do**

- Write like an on-air ident, not an advert
- Mention the hour or the dark
- Keep lines under ten words

**Do not**

- Use morning-radio cheer
- Use shouty promotions
- Over-explain the playlist

## Taglines

1. Music for the hours nobody asked for
2. Awake? So are we
3. Broadcasting from the small hours
4. Turn it low, keep it on
5. On air until the sun comes up

**Boilerplate:** Nocturne Radio is an independent late-night station that plays music for insomniacs, night-shift workers and anyone else still awake after midnight.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Tune in |
| secondaryCta | See the schedule |
| success | You are on air. Stay a while. |
| error | The signal dropped. Retuning. |
| empty | Nothing playing. The station is off air. |

---
Source listing key `o:nocturne-radio`. Rebuild with `python3 scripts/brand-kit/build.py o:nocturne-radio`.
