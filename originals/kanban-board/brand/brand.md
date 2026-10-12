# Tallyboard — brand kit

*Simple kanban board for small teams.* Generated from the SiteShelf listing **Kanban Board** (App UI); every value below is read from that page, not invented.

> **Move work, not mouths**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter Bold (stand-in for Onest) |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **stack** glyph on a circle tile. Stacked layers read as cards sitting in a column. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F1F2F6` | Page background |
| surface | `#E6E8F0` | Cards, panels, raised areas |
| text | `#1B1D29` | Body and heading text |
| textMuted | `#666871` | Secondary text, captions |
| primary | `#EC4899` | Main actions, links, brand colour |
| secondary | `#0EA5E9` | Highlights, charts, second accent |
| border | `#E1E3EC` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#692549` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 14.97:1 | pass | pass |
| Muted text on background | 4.96:1 | pass | pass |
| Primary on background | 3.15:1 | fail | pass |
| Text on primary | 5.57:1 | pass | pass |
| Text on surface | 13.68:1 | pass | pass |

**Colours seen on the page** (share of use): `#F1F2F6` 98.3%, `#EC4899` 0.4%, `#1B1D29` 0.3%, `#4F46E5` 0.3%, `#0EA5E9` 0.2%, `#3B82F6` 0.2%, `#F59E0B` 0.1%, `#6D7287` 0.1%, `#10B981` 0.0%, `#EF4444` 0.0%

## Typography

- Headings: **Onest** (weight 700)
- Body: **Onest**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Onest:wght@400;500;600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Onest | 22 px | 700 | normal | -0.44px |
| Subheading / H3 | Onest | 15 px | 600 | normal | normal |
| Button | Onest | 14 px | 600 | normal | normal |

## Shape, space and motion

- Radius: sm 9 px, md 12 px, lg 16 px, pill (fully rounded)
- Shadows: sm: `rgba(20, 22, 40, 0.06) 0px 1px 2px 0px` · md: `rgba(20, 22, 40, 0.06) 0px 1px 2px 0px` · lg: `rgba(20, 22, 40, 0.06) 0px 1px 2px 0px`
- Spacing: base unit 4 px; common steps 2 px, 4 px, 6 px, 8 px, 9 px, 10 px, 12 px, 14 px, 16 px
- Layout: container 1200 px; breakpoints 800 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** tidy, brisk, friendly.

Sounds like a good team lead at a whiteboard: short labels, clear verbs, no fluff. It keeps tasks small and counts them honestly.

**Do**

- Name cards with a verb and an object
- Show counts on every column
- Keep tags to one lowercase word

**Do not**

- No productivity slogans
- No guilt about overdue cards
- No emoji in card titles

## Taglines

1. Move work, not mouths
2. Every card, one column
3. Small boards, finished work
4. Drag it forward
5. Plan the sprint, then do it

**Boilerplate:** Tallyboard is a lightweight kanban board for small teams, with drag-and-drop columns, quick card capture and filters that keep a sprint visible.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | + Add card |
| secondaryCta | Filter cards |
| success | Card moved to Done |
| error | Could not move that card, try again |
| empty | Nothing here yet, add a card |

---
Source listing key `o:kanban-board`. Rebuild with `python3 scripts/brand-kit/build.py o:kanban-board`.
