# Lantern Calendar — brand kit

*Calendar app with a horizontal day strip.* Generated from the SiteShelf listing **Agenda Strip** (Widgets); every value below is read from that page, not invented.

> **See your whole day at a glance**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Young Serif |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **spark** glyph on a squircle tile. A spark shows a lit lantern wick and stays simple at small sizes. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F4EFE6` | Page background |
| surface | `#FFFDF8` | Cards, panels, raised areas |
| text | `#6B6253` | Body and heading text |
| textMuted | `#1F1A14` | Secondary text, captions |
| primary | `#2F56D4` | Main actions, links, brand colour |
| secondary | `#C4532F` | Highlights, charts, second accent |
| border | `#CFC3AC` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#A8B8ED` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 5.24:1 | pass | pass |
| Muted text on background | 15.08:1 | pass | pass |
| Primary on background | 5.39:1 | pass | pass |
| Text on primary | 6.17:1 | pass | pass |
| Text on surface | 5.91:1 | pass | pass |

**Colours seen on the page** (share of use): `#F4EFE6` 53.3%, `#FFFDF8` 39.9%, `#2F56D4` 1.8%, `#C4532F` 1.0%, `#2A2A5A` 1.0%, `#1F7A58` 0.7%, `#000000` 0.6%, `#8A8FC0` 0.5%, `#6A6AA8` 0.5%, `#4A4A88` 0.5%

## Typography

- Headings: **Young Serif** (weight 400)
- Body: **Figtree**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;700&family=Young+Serif&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Young Serif | 44 px | 400 | 46.2px | normal |
| Body | Figtree | 15 px | 500 | 21.75px | normal |
| Button | Figtree | 14 px | 700 | normal | normal |
| Caption / eyebrow | Figtree | 12 px | 700 | normal | 1.92px |

## Shape, space and motion

- Radius: sm 8 px, md 12 px, lg 24 px, pill (fully rounded)
- Shadows: sm: `rgba(255, 255, 255, 0.5) 0px 0px 0px 2px` · md: `rgba(30, 20, 10, 0.22) 0px 4px 12px 0px` · lg: `rgba(60, 40, 10, 0.16) 0px 24px 60px 0px`
- Spacing: base unit 4 px; common steps 2 px, 4 px, 6 px, 8 px, 10 px, 12 px, 14 px, 18 px, 20 px
- Layout: container 1120 px; breakpoints 760 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** clear, calm, organised.

Lantern Calendar speaks like a thoughtful assistant who lights what is next. It gives times in full, names the room, and keeps the day readable at a glance.

**Do**

- Give start and end times in 24-hour form
- Name the place or room with each event
- Summarise the next event in one sentence

**Do not**

- Do not use busy-ness language like packed
- Avoid nagging reminders
- Never hide overlaps

## Taglines

1. See your whole day at a glance
2. Light on what is next
3. Calm mornings, clear agendas
4. Your day, side to side
5. The day, laid out

**Boilerplate:** Lantern Calendar is a calendar app that lays out the day on a horizontal strip with lanes, a live now line and a clear summary of what comes next.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Today |
| secondaryCta | Open details |
| success | Event updated. |
| error | Could not load events. Please try again. |
| empty | Nothing scheduled. Enjoy the quiet. |

---
Source listing key `o:widget-agenda-strip`. Rebuild with `python3 scripts/brand-kit/build.py o:widget-agenda-strip`.
