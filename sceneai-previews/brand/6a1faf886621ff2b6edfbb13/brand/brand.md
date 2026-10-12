# Tenlas — brand kit

*Productivity app for tasks and focus.* Generated from the SiteShelf listing **Tenlas** (Take control of your productivity); every value below is read from that page, not invented.

> **Take control of your productivity**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **bolt** glyph on a squircle tile. A lime bolt suggests energy and quick focus. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F5F5F2` | Page background |
| surface | `#050505` | Cards, panels, raised areas |
| text | `#000000` | Body and heading text |
| textMuted | `#565655` | Secondary text, captions |
| primary | `#DBFF00` | Main actions, links, brand colour |
| secondary | `#788C00` | Highlights, charts, second accent |
| border | `#D3D3D0` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#788C00` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 19.23:1 | pass | pass |
| Muted text on background | 6.73:1 | pass | pass |
| Primary on background | 1.05:1 | fail | fail |
| Text on primary | 17.13:1 | pass | pass |
| Text on surface | 1.03:1 | fail | fail |

**Colours seen on the page** (share of use): `#F5F5F2` 62.8%, `#050505` 36.6%, `#DBFF00` 0.4%, `#9CA3AF` 0.1%, `#6B7280` 0.0%, `#565655` 0.0%, `#788C00` 0.0%, `#D3D3D0` 0.0%

## Typography

- Headings: **Inter** (weight 700)
- Body: **Inter**

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Inter | 48 px | 700 | 52.8px | -2.4px |
| Body | Inter | 15 px | 500 | normal | normal |
| Button | Inter | 14 px | 600 | normal | normal |
| Navigation | Inter | 14 px | 400 | normal | normal |

## Shape, space and motion

- Radius: sm 6 px, md 8 px, lg 8 px
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 10 px, 12 px, 14 px, 16 px, 24 px, 28 px, 32 px, 48 px, 96 px
- Layout: container 1280 px; breakpoints 768 px, 1024 px
- Motion: 300 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** focused, brisk, upbeat.

Sounds like a calm productivity friend: short imperatives, light enthusiasm, no hustle culture. It keeps lists short and wins visible.

**Do**

- Use short imperative verbs
- Talk about focus, not busyness
- Keep lists to what matters today

**Do not**

- No hustle-culture language
- No guilt about unfinished tasks
- No productivity jargon

## Taglines

1. Take control of your productivity
2. Organised, focused, on top
3. Your tasks, in order
4. Do what matters first
5. Less clutter, more done

**Boilerplate:** Tenlas is a productivity app that keeps tasks organised and focus protected, helping people stay on top of their day without the overwhelm.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Download now |
| secondaryCta | See how it works |
| success | Task done, nicely |
| error | Could not save your tasks, try again |
| empty | No tasks yet, add your first |

---
Source listing key `s:6a1faf886621ff2b6edfbb13`. Rebuild with `python3 scripts/brand-kit/build.py s:6a1faf886621ff2b6edfbb13`.
