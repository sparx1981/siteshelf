# THE PASS — brand kit

*Kitchen ticket screen for busy services.* Generated from the SiteShelf listing **Kitchen Order Display** (Dashboard); every value below is read from that page, not invented.

> **Fire it. Plate it. Bump it.**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Oswald |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **flame** glyph. A flame is the kitchen in one shape and sits naturally beside bold condensed capitals. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#101114` | Page background |
| surface | `#1B1D22` | Cards, panels, raised areas |
| text | `#F4F5F7` | Body and heading text |
| textMuted | `#A3A8B3` | Secondary text, captions |
| primary | `#7CC4FF` | Main actions, links, brand colour |
| secondary | `#2FD07D` | Highlights, charts, second accent |
| border | `#4A4F5A` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#3A5974` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 17.31:1 | pass | pass |
| Muted text on background | 7.92:1 | pass | pass |
| Primary on background | 10.07:1 | pass | pass |
| Text on primary | 10.47:1 | pass | pass |
| Text on surface | 15.46:1 | pass | pass |

**Colours seen on the page** (share of use): `#101114` 81.6%, `#2FD07D` 7.2%, `#FF5A5A` 3.0%, `#FFB020` 2.8%, `#7CC4FF` 2.7%, `#3A3E47` 1.4%, `#2B2F37` 0.5%, `#F4F5F7` 0.5%, `#A3A8B3` 0.1%, `#D5D9E2` 0.0%

## Typography

- Headings: **Oswald** (weight 600)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Oswald:wght@500;600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Heading / H2 | Oswald | 18 px | 600 | normal | 1.8px |
| Button | Inter | 15 px | 600 | normal | normal |
| Caption / eyebrow | Inter | 14 px | 500 | 19.6px | normal |

## Shape, space and motion

- Radius: sm 6 px, md 10 px, lg 14 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 3 px, 4 px, 6 px, 7 px, 8 px, 10 px, 12 px, 14 px, 16 px
- Layout: container 1200 px; breakpoints 1000 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** urgent, blunt, calm under pressure.

THE PASS talks the way a head chef calls a service: one or two words, clear volume and no wasted breath. Every label has to be readable from across a hot kitchen.

**Do**

- Use call-out words such as 'Fire', 'Bump' and 'Hands'
- Put allergens in plain capitals
- Show times as numbers first, words second

**Do not**

- Use soft or polite phrasing on a live ticket
- Use corporate dashboard words like 'insights'
- Add decoration to an alert

## Taglines

1. Fire it. Plate it. Bump it.
2. Every ticket, in its time
3. Calm tickets, loud kitchen
4. Service runs on the pass
5. Nothing waits, nothing gets lost

**Boilerplate:** THE PASS is a kitchen display system that sorts live orders into New, Cooking and Ready, with ageing timers, station filters and allergen flags for fast restaurant service.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Bump |
| secondaryCta | Recall ticket |
| success | Ticket cleared. |
| error | Ticket failed to bump. Try again. |
| empty | No tickets. Kitchen is quiet. |

---
Source listing key `o:dashboard-kitchen-display`. Rebuild with `python3 scripts/brand-kit/build.py o:dashboard-kitchen-display`.
