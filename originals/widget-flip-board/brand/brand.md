# Pennick Central — brand kit

*Fictional rail station with a split-flap departures board.* Generated from the SiteShelf listing **Departure Flip Board** (Widgets); every value below is read from that page, not invented.

> **Departures, in motion**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Oswald |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **chevrons** glyph. Chevrons are the direction arrows of a station sign and the shape of tracks ahead. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#1B1740` | Page background |
| surface | `#14110F` | Cards, panels, raised areas |
| text | `#F4ECD8` | Body and heading text |
| textMuted | `#FFC247` | Secondary text, captions |
| primary | `#FFC247` | Main actions, links, brand colour |
| secondary | `#522C68` | Highlights, charts, second accent |
| border | `#8A6A30` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#522C68` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 14.35:1 | pass | pass |
| Muted text on background | 10.50:1 | pass | pass |
| Primary on background | 10.50:1 | pass | pass |
| Text on primary | 12.22:1 | pass | pass |
| Text on surface | 15.97:1 | pass | pass |

**Colours seen on the page** (share of use): `#1B1740` 48.7%, `#14110F` 18.6%, `#7A3A7E` 7.1%, `#2F1C4D` 6.5%, `#522C68` 6.4%, `#E2C27A` 3.2%, `#B08D57` 3.2%, `#8A6A30` 3.2%, `#242019` 2.2%, `#F4ECD8` 0.8%

## Typography

- Headings: **Oswald** (weight 500)
- Body: **Oswald**
- Google Fonts: `https://fonts.googleapis.com/css2?family=DM+Sans:wght@500;700&family=Oswald:wght@500&family=Space+Mono:wght@700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Oswald | 34 px | 500 | 34px | 4.76px |
| Button | DM Sans | 14 px | 700 | normal | normal |
| Caption / eyebrow | Space Mono | 11 px | 700 | normal | 2.2px |

## Shape, space and motion

- Radius: sm 3 px, md 12 px, lg 20 px, pill (fully rounded)
- Shadows: sm: `rgba(0, 0, 0, 0.35) 0px 0px 0px 1px inset` · md: `rgba(255, 255, 255, 0.55) 0px 1px 0px 0px inset, rgba(0, 0, 0, 0.35) 0px -3px 0px 0px inset, rgba(0, 0, 0, 0.55) 0px 34px 60px 0px` · lg: `rgb(58, 42, 16) 0px 0px 0px 2px inset, rgba(0, 0, 0, 0.6) 0px 12px 30px 0px inset`
- Spacing: base unit 2 px; common steps 2 px, 4 px, 6 px, 7 px, 8 px, 10 px, 12 px, 14 px, 16 px
- Layout: container 1020 px; breakpoints 760 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** punctual, old-fashioned, atmospheric.

A station announcer at dusk: brisk, courteous and a little romantic. Departures are given in the clipped, exact style of a timetable.

**Do**

- Give platform, time and status for every service
- Use the clipped board style, in capitals where needed
- Keep statuses to one or two words

**Do not**

- Casual chat on the board
- Fake precision about real operators
- Delays described with jokes

## Taglines

1. Departures, in motion
2. Mind the platform, mind the time
3. All aboard from Pennick
4. Every flip, a new destination
5. Dusk trains, brass and timber

**Boilerplate:** Pennick Central is an invented railway station whose brass-framed split-flap board flips through destinations, times and statuses for fictional services.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Shuffle now |
| secondaryCta | Pause updates |
| success | Board updated. Departures refreshed |
| error | The board jammed. Shuffle to retry |
| empty | No departures listed |

---
Source listing key `o:widget-flip-board`. Rebuild with `python3 scripts/brand-kit/build.py o:widget-flip-board`.
