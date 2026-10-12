# Headroom — brand kit

*Team capacity and workload planner.* Generated from the SiteShelf listing **Team Workload Dashboard** (Dashboard); every value below is read from that page, not invented.

> **See the week before it happens**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Manrope |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **bars** glyph. Stacked bars mirror the workload bars at the core of the page. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F4F6FB` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#121A2B` | Body and heading text |
| textMuted | `#66718A` | Secondary text, captions |
| primary | `#F59E0B` | Main actions, links, brand colour |
| secondary | `#0EA5E9` | Highlights, charts, second accent |
| border | `#E3E8F2` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#6D490D` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 16.07:1 | pass | pass |
| Muted text on background | 4.52:1 | pass | pass |
| Primary on background | 1.99:1 | fail | fail |
| Text on primary | 9.15:1 | pass | pass |
| Text on surface | 17.38:1 | pass | pass |

**Colours seen on the page** (share of use): `#F4F6FB` 93.6%, `#4F46E5` 1.7%, `#10B981` 1.5%, `#0EA5E9` 1.5%, `#F59E0B` 1.0%, `#121A2B` 0.2%, `#66718A` 0.2%, `#6D28D9` 0.1%, `#0369A1` 0.1%, `#BE185D` 0.1%

## Typography

- Headings: **Manrope** (weight 800)
- Body: **Manrope**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Manrope:wght@500;700;800&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Manrope | 24 px | 800 | 36px | normal |
| Button | Arial | 18 px | 400 | normal | normal |
| Caption / eyebrow | Manrope | 11.7 px | 600 | 17.5px | normal |

## Shape, space and motion

- Radius: sm 4 px, md 10 px, lg 16 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 2 px; common steps 2 px, 3 px, 6 px, 8 px, 10 px, 12 px, 14 px, 16 px, 24 px
- Layout: container 1000 px; breakpoints 700 px
- Motion: 400 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** balanced, candid, supportive.

Headroom sounds like a thoughtful manager who looks after people's weeks. It states hours and overloads plainly, and frames fixes as moves to try rather than failures.

**Do**

- Show hours alongside names, never bare percentages
- Frame an overload as a choice with a next step
- Use 'capacity' for people, not 'resources'

**Do not**

- Do not call people resources or headcount
- Avoid shaming words like underperforming
- Never celebrate full utilisation as a goal

## Taglines

1. See the week before it happens
2. Capacity that respects people
3. Spot overload while it is small
4. Plan the load, protect the team
5. Fair weeks, fully visible

**Boilerplate:** Headroom is a team workload dashboard that shows who is booked, who is stretched and who has room, so managers can rebalance before anyone burns out.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Reassign work |
| secondaryCta | Sort by load |
| success | Work reassigned. Hours updated. |
| error | Could not move that task. Nothing changed. |
| empty | No bookings this week. |

---
Source listing key `o:dashboard-team-workload`. Rebuild with `python3 scripts/brand-kit/build.py o:dashboard-team-workload`.
