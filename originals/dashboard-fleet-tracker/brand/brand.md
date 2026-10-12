# convoy — brand kit

*Live fleet tracking for courier teams.* Generated from the SiteShelf listing **Fleet Tracker Board** (Dashboard); every value below is read from that page, not invented.

> **Every van, one clear view**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Space Grotesk |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **chevrons** glyph. Chevrons suggest vehicles in line on a route, and the lowercase wordmark keeps the dashboard friendly. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#0F1318` | Page background |
| surface | `#171D25` | Cards, panels, raised areas |
| text | `#E9EEF5` | Body and heading text |
| textMuted | `#98A6B8` | Secondary text, captions |
| primary | `#38D39F` | Main actions, links, brand colour |
| secondary | `#FFB454` | Highlights, charts, second accent |
| border | `#2A3340` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#1E5F4B` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 15.99:1 | pass | pass |
| Muted text on background | 7.53:1 | pass | pass |
| Primary on background | 9.75:1 | pass | pass |
| Text on primary | 10.28:1 | pass | pass |
| Text on surface | 14.54:1 | pass | pass |

**Colours seen on the page** (share of use): `#0F1318` 90.1%, `#38D39F` 1.8%, `#2F3D50` 1.7%, `#3A4B62` 1.7%, `#000000` 1.6%, `#1F2A35` 1.5%, `#12304A` 0.7%, `#E9EEF5` 0.4%, `#7AA7D9` 0.3%, `#98A6B8` 0.2%

## Typography

- Headings: **Space Grotesk** (weight 700)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@500;600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Heading / H2 | Space Grotesk | 20 px | 700 | normal | normal |
| Button | Inter | 13 px | 600 | normal | normal |
| Caption / eyebrow | Inter | 12 px | 400 | 18px | normal |

## Shape, space and motion

- Radius: sm 4 px, md 12 px, lg 16 px, pill (fully rounded)
- Shadows: sm: `rgba(56, 211, 159, 0) 0px 0px 0px 8.9952px` · md: `rgba(56, 211, 159, 0) 0px 0px 0px 8.9952px` · lg: `rgba(56, 211, 159, 0) 0px 0px 0px 8.9952px`
- Spacing: base unit 2 px; common steps 4 px, 5 px, 6 px, 7 px, 8 px, 10 px, 12 px, 14 px, 18 px
- Layout: container 1200 px; breakpoints 700 px, 1100 px
- Motion: 150 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** alert, crisp, calm.

convoy talks like a good dispatcher: short, factual and never rattled. It gives the status, the driver and the minutes, and leaves the drama to the traffic.

**Do**

- Lead with status and ETA in minutes
- Use driver first names and street names
- Keep alert text to one line with an action

**Do not**

- Do not use alarmist words for a minor delay
- Avoid jargon like telematics
- Never show a figure without its unit

## Taglines

1. Every van, one clear view
2. Know where the day is
3. Eight moving, two idle, none lost
4. Deliveries on time, drivers at ease
5. The route, live

**Boilerplate:** convoy is a fleet tracking board for courier firms, showing every vehicle's status, route, driver and delivery progress on one live map.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Open route |
| secondaryCta | Filter by status |
| success | Route updated. |
| error | Lost signal from this van. Retrying. |
| empty | No vehicles match that filter. |

---
Source listing key `o:dashboard-fleet-tracker`. Rebuild with `python3 scripts/brand-kit/build.py o:dashboard-fleet-tracker`.
