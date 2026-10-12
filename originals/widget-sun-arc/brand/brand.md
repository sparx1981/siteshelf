# Halcyon Daylight — brand kit

*Daylight times for coastal towns.* Generated from the SiteShelf listing **Sunrise Sunset Arc** (Widgets); every value below is read from that page, not invented.

> **Follow the sun, minute by minute**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Bricolage Grotesque |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **orbit** glyph. An orbit arc represents the sun's daily path and fits a night-sky card. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#0B1026` | Page background |
| surface | `#121A42` | Cards, panels, raised areas |
| text | `#EEF1FF` | Body and heading text |
| textMuted | `#A7B0D6` | Secondary text, captions |
| primary | `#FFD36B` | Main actions, links, brand colour |
| secondary | `#161E48` | Highlights, charts, second accent |
| border | `#333F7C` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#161E48` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 16.72:1 | pass | pass |
| Muted text on background | 8.80:1 | pass | pass |
| Primary on background | 13.24:1 | pass | pass |
| Text on primary | 13.83:1 | pass | pass |
| Text on surface | 14.90:1 | pass | pass |

**Colours seen on the page** (share of use): `#0B1026` 86.0%, `#121A42` 5.5%, `#000000` 4.1%, `#FFFFFF` 1.9%, `#382B1E` 0.8%, `#8C6B4C` 0.7%, `#664E37` 0.7%, `#EEF1FF` 0.2%, `#A7B0D6` 0.1%, `#232C5A` 0.1%

## Typography

- Headings: **Bricolage Grotesque** (weight 600)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@600&family=Inter:wght@400;500;600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Bricolage Grotesque | 44 px | 600 | 46.2px | normal |
| Body | Inter | 15 px | 500 | 22.5px | normal |
| Button | Inter | 14 px | 600 | normal | normal |
| Caption / eyebrow | Inter | 12 px | 600 | normal | 2.16px |

## Shape, space and motion

- Radius: sm 12 px, md 16 px, lg 28 px, pill (fully rounded)
- Shadows: sm: `rgba(0, 0, 0, 0.5) 0px 30px 80px 0px` · md: `rgba(0, 0, 0, 0.5) 0px 30px 80px 0px` · lg: `rgba(0, 0, 0, 0.5) 0px 30px 80px 0px`
- Spacing: base unit 2 px; common steps 2 px, 4 px, 6 px, 8 px, 10 px, 12 px, 14 px, 16 px, 22 px
- Layout: container 1000 px; breakpoints 420 px, 760 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** serene, precise, poetic.

Halcyon Daylight reads like a gentle almanac: accurate times set in quiet, unhurried sentences. It names golden hour and daylight length as plainly as sunrise.

**Do**

- Give times to the minute with the town and date
- Say how much daylight changes day to day
- Use calm, concrete sky words

**Do not**

- Do not use dramatic sunset cliches
- Avoid vague times like early evening
- Never mix time zones

## Taglines

1. Follow the sun, minute by minute
2. Daylight, plainly told
3. Golden hour, set to the minute
4. Light for every little town
5. The day, in one long arc

**Boilerplate:** Halcyon Daylight is a daylight widget showing sunrise, sunset, golden hour and daylight length for five coastal towns, with a draggable sun on a sky that shifts through the day.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Now |
| secondaryCta | Sunset |
| success | Showing sunset in Pennick Bay. |
| error | Could not load that town. Please try again. |
| empty | No town selected. |

---
Source listing key `o:widget-sun-arc`. Rebuild with `python3 scripts/brand-kit/build.py o:widget-sun-arc`.
