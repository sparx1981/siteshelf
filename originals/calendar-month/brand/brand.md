# Dayfold — brand kit

*Month calendar for busy, ordinary weeks.* Generated from the SiteShelf listing **Month Calendar** (Widgets); every value below is read from that page, not invented.

> **Your month, folded flat**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Young Serif |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **grid** glyph. A simple grid is the shape of a month, and the fold in the name is hinted by its tidy cells. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#FFFFFF` | Page background |
| surface | `#1F3A5F` | Cards, panels, raised areas |
| text | `#1D1B17` | Body and heading text |
| textMuted | `#7A7366` | Secondary text, captions |
| primary | `#E8704F` | Main actions, links, brand colour |
| secondary | `#1F3A5F` | Highlights, charts, second accent |
| border | `#E0D9CC` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#1F3A5F` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 17.19:1 | pass | pass |
| Muted text on background | 4.70:1 | pass | pass |
| Primary on background | 3.06:1 | fail | pass |
| Text on primary | 6.42:1 | pass | pass |
| Text on surface | 1.50:1 | fail | fail |

**Colours seen on the page** (share of use): `#FFFFFF` 97.3%, `#1F3A5F` 1.4%, `#6A9A7B` 0.4%, `#E8704F` 0.4%, `#D9A441` 0.2%, `#8A5A9B` 0.2%, `#1D1B17` 0.1%, `#7A7366` 0.1%, `#B5AD9E` 0.0%, `#E0D9CC` 0.0%

## Typography

- Headings: **Young Serif** (weight 400)
- Body: **Hanken Grotesk**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;600;700&family=Young+Serif&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Young Serif | 40 px | 400 | 40px | -0.4px |
| Heading / H2 | Young Serif | 22 px | 400 | normal | normal |
| Button | Hanken Grotesk | 14 px | 600 | normal | normal |
| Caption / eyebrow | Hanken Grotesk | 12.5 px | 400 | 18.125px | normal |

## Shape, space and motion

- Radius: sm 6 px, md 10 px, lg 18 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 2 px; common steps 2 px, 3 px, 6 px, 7 px, 8 px, 10 px, 14 px, 16 px, 18 px
- Layout: container 1240 px; breakpoints 600 px, 900 px
- Motion: 250 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** tidy, friendly, matter-of-fact.

Dayfold sounds like a well-organised colleague who keeps the diary without fuss. It states the time and the thing, and trusts people to know what a dentist appointment means.

**Do**

- Write events as time then name, such as '09:30 Sprint planning'
- Use plain day and month words, with Monday first
- Keep confirmations to one short line

**Do not**

- Use productivity slogans
- Pad labels with words like 'event details'
- Nag about busy days

## Taglines

1. Your month, folded flat
2. Every day, in its place
3. Plan the week, then forget it
4. A calmer way to see October
5. See it, schedule it, get on

**Boilerplate:** Dayfold is a month-view calendar that keeps events, colours and upcoming plans on one tidy page, designed for people who want a clear week rather than a clever one.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Add event |
| secondaryCta | Today |
| success | Event added to your calendar. |
| error | We could not save that event. Check the date and time. |
| empty | Nothing planned. Enjoy the quiet. |

---
Source listing key `o:calendar-month`. Rebuild with `python3 scripts/brand-kit/build.py o:calendar-month`.
