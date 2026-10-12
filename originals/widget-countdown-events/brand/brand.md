# Tickdown — brand kit

*Live countdown cards for dates that matter.* Generated from the SiteShelf listing **Event Countdown Widgets** (Widgets); every value below is read from that page, not invented.

> **Count down to what matters**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Archivo |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **pulse** glyph on a circle tile. A pulse line suggests a ticking clock and a live heartbeat. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#FFFFFF` | Page background |
| surface | `#E8F1FF` | Cards, panels, raised areas |
| text | `#1B1F3A` | Body and heading text |
| textMuted | `#6B6F94` | Secondary text, captions |
| primary | `#4F46E5` | Main actions, links, brand colour |
| secondary | `#1B1F3A` | Highlights, charts, second accent |
| border | `#D7DAF0` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#1B1F3A` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 16.11:1 | pass | pass |
| Muted text on background | 4.85:1 | pass | pass |
| Primary on background | 6.29:1 | pass | pass |
| Text on primary | 6.29:1 | pass | pass |
| Text on surface | 14.16:1 | pass | pass |

**Colours seen on the page** (share of use): `#FFFFFF` 54.2%, `#E8F1FF` 44.2%, `#4F46E5` 0.7%, `#1B1F3A` 0.3%, `#6B6F94` 0.3%, `#0EA5A4` 0.1%, `#F97316` 0.1%, `#E11D48` 0.1%, `#5B5F86` 0.0%, `#D7DAF0` 0.0%

## Typography

- Headings: **Archivo** (weight 700)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Archivo:wght@500;700&family=Inter:wght@400;600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Archivo | 30 px | 700 | normal | normal |
| Heading / H2 | Archivo | 19 px | 700 | normal | normal |
| Button | Inter | 15 px | 600 | normal | normal |

## Shape, space and motion

- Radius: sm 10 px, md 16 px, lg 18 px, pill (fully rounded)
- Shadows: sm: `rgb(255, 255, 255) 0px 0px 0px 3px, rgb(27, 31, 58) 0px 0px 0px 5px` · md: `rgba(27, 31, 58, 0.07) 0px 6px 20px 0px` · lg: `rgba(79, 70, 229, 0.08) 0px 6px 20px 0px`
- Spacing: base unit 4 px; common steps 2 px, 4 px, 6 px, 8 px, 10 px, 11 px, 12 px, 16 px, 18 px
- Layout: container 1000 px; breakpoints 560 px, 860 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** clear, punctual, upbeat.

Tickdown sounds like a stopwatch with a friendly face: crisp, numerical and glad when the big day arrives. Units and times lead, and feelings follow.

**Do**

- Put days, hours, minutes and seconds in that order
- Name the event and its date plainly
- Mark passed events calmly as 'ended'

**Do not**

- Create anxiety about deadlines
- Use drama for ordinary dates
- Hide the target date

## Taglines

1. Count down to what matters
2. Every second, in its place
3. Dates you can watch arrive
4. Ticking toward launch day
5. Know exactly how long to go

**Boilerplate:** Tickdown is a countdown widget that tracks launches, offsites, quarter ends and personal dates with live flip-style digits, sorted so the soonest event is always first.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Add event |
| secondaryCta | Remove |
| success | Event added. 12 days to go. |
| error | Choose a future date and time. |
| empty | No countdowns yet. Add your first. |

---
Source listing key `o:widget-countdown-events`. Rebuild with `python3 scripts/brand-kit/build.py o:widget-countdown-events`.
