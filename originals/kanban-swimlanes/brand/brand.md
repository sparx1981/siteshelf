# Lanewise — brand kit

*Kanban boards with team swimlanes.* Generated from the SiteShelf listing **Kanban Swimlanes** (App UI); every value below is read from that page, not invented.

> **Every lane, every limit, in view**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **stack** glyph on a squircle tile. Stacked lanes echo a board of swimlanes and cards. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F3F4F8` | Page background |
| surface | `#E9EBF3` | Cards, panels, raised areas |
| text | `#1B2033` | Body and heading text |
| textMuted | `#646B82` | Secondary text, captions |
| primary | `#1B2033` | Main actions, links, brand colour |
| secondary | `#7A4B00` | Highlights, charts, second accent |
| border | `#E0E3EC` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#9FA1A9` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 14.69:1 | pass | pass |
| Muted text on background | 4.82:1 | pass | pass |
| Primary on background | 14.69:1 | pass | pass |
| Text on primary | 16.14:1 | pass | pass |
| Text on surface | 13.56:1 | pass | pass |

**Colours seen on the page** (share of use): `#F3F4F8` 97.8%, `#1B2033` 0.6%, `#E2E5FF` 0.4%, `#E09A1F` 0.3%, `#1F9D6B` 0.2%, `#646B82` 0.2%, `#4B4FE0` 0.1%, `#D9486E` 0.1%, `#FDE2E2` 0.1%, `#FBE3B4` 0.1%

## Typography

- Headings: **Inter** (weight 700)
- Body: **Inter**
- Mono: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Inter | 18 px | 700 | normal | normal |
| Body | Inter | 13 px | 400 | 18.85px | normal |
| Button | Inter | 13 px | 600 | normal | normal |
| Caption / eyebrow | Inter | 12.5 px | 500 | normal | normal |
| Mono | Inter | 12 px | 600 | normal | normal |

## Shape, space and motion

- Radius: sm 4 px, md 8 px, lg 10 px, pill (fully rounded)
- Shadows: sm: `rgba(27, 32, 51, 0.05) 0px 1px 2px 0px` · md: `rgba(27, 32, 51, 0.05) 0px 1px 2px 0px` · lg: `rgba(27, 32, 51, 0.05) 0px 1px 2px 0px`
- Spacing: base unit 2 px; common steps 2 px, 4 px, 5 px, 6 px, 7 px, 8 px, 9 px, 10 px, 12 px
- Layout: container 1200 px; breakpoints single fluid layout
- Motion: 150 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** organised, clear, even-handed.

Lanewise reads like a good project lead's stand-up notes: factual, short and evenhanded. It flags limits without blaming anyone and names people and columns precisely.

**Do**

- Name the person, the lane and the column
- State limits as numbers, not warnings
- Use verbs of motion: pick up, move, drop

**Do not**

- Do not scold for exceeding a limit
- Do not use 'velocity' as a stick
- Do not hide who owns a card

## Taglines

1. Every lane, every limit, in view
2. Move work, not meetings
3. Clear lanes make calm sprints
4. Flag the overflow, keep the flow
5. Sprint planning without the shouting

**Boilerplate:** Lanewise is a project tool that splits kanban boards into team swimlanes with work-in-progress limits, so teams can see where work is piling up.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Add card |
| secondaryCta | Collapse all |
| success | Card moved to Doing. That lane has 3 of 4. |
| error | Doing is over its limit by 1. You can still drop the card. |
| empty | No cards in this cell. Add one with the plus button. |

---
Source listing key `o:kanban-swimlanes`. Rebuild with `python3 scripts/brand-kit/build.py o:kanban-swimlanes`.
