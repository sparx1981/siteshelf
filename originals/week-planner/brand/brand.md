# Timebox — brand kit

*Weekly time-block planner.* Generated from the SiteShelf listing **Weekly Time-Block Planner** (App UI); every value below is read from that page, not invented.

> **Block your week, own your time**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **cube** glyph. A cube is a block of time, and the box in Timebox. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F7F8FA` | Page background |
| surface | `#C7D2FE` | Cards, panels, raised areas |
| text | `#6B7280` | Body and heading text |
| textMuted | `#111827` | Secondary text, captions |
| primary | `#78350F` | Main actions, links, brand colour |
| secondary | `#134E4A` | Highlights, charts, second accent |
| border | `#E6E9EF` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#C6AA9A` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 4.55:1 | pass | pass |
| Muted text on background | 16.69:1 | pass | pass |
| Primary on background | 8.54:1 | pass | pass |
| Text on primary | 9.07:1 | pass | pass |
| Text on surface | 3.24:1 | fail | pass |

**Colours seen on the page** (share of use): `#F7F8FA` 91.5%, `#C7D2FE` 2.8%, `#99F6E4` 2.4%, `#FDE68A` 1.6%, `#FECDD3` 1.0%, `#4F46E5` 0.1%, `#6B7280` 0.1%, `#111827` 0.1%, `#134E4A` 0.1%, `#312E81` 0.1%

## Typography

- Headings: **Inter** (weight 700)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Inter | 20 px | 700 | normal | normal |
| Heading / H2 | Inter | 14 px | 700 | normal | normal |
| Button | Inter | 13 px | 600 | normal | normal |
| Caption / eyebrow | Inter | 10 px | 500 | 14px | normal |

## Shape, space and motion

- Radius: sm 8 px, md 10 px, lg 16 px, pill (fully rounded)
- Shadows: sm: `rgba(0, 0, 0, 0.08) 0px 1px 2px 0px` · md: `rgba(0, 0, 0, 0.08) 0px 1px 2px 0px` · lg: `rgba(0, 0, 0, 0.08) 0px 1px 2px 0px`
- Spacing: base unit 4 px; common steps 2 px, 4 px, 6 px, 7 px, 8 px, 10 px, 12 px, 14 px, 16 px
- Layout: container 1200 px; breakpoints 640 px, 900 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** focused, tidy, calm.

Sounds like a well-organised friend with an hour-by-hour grid: crisp, quietly encouraging and focused on protecting time. It refers to blocks, hours and the week ahead.

**Do**

- Talk in hours and blocks
- Name the category colours plainly
- Keep prompts to one short line

**Do not**

- No hustle language
- Avoid guilt about unfilled hours
- Never overload an agenda message

## Taglines

1. Block your week, own your time
2. Hours, planned on purpose
3. See your week at a glance
4. Protect time for what matters
5. Plan the week in boxes

**Boilerplate:** Timebox is a weekly time-block planner with an hour-by-hour grid, draggable events and colour categories that help people plan and protect their time.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | New event |
| secondaryCta | Today |
| success | Event saved. |
| error | Couldn't save that event. Check the time and retry. |
| empty | Nothing planned yet. Drag across the grid to add a block. |

---
Source listing key `o:week-planner`. Rebuild with `python3 scripts/brand-kit/build.py o:week-planner`.
