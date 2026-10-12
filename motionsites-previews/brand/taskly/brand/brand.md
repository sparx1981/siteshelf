# Taskly — brand kit

*Task management for fast-moving teams.* Generated from the SiteShelf listing **Taskly** (Hero Section); every value below is read from that page, not invented.

> **Work smarter, achieve faster**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter Bold (stand-in for Fustat) |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **stack** glyph on a squircle tile. A stack of layers reflects tasks piled into an orderly list. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#FFFFFF` | Page background |
| surface | `#60B1FF` | Cards, panels, raised areas |
| text | `#0B1220` | Body and heading text |
| textMuted | `#2B3445` | Secondary text, captions |
| primary | `#0084FF` | Main actions, links, brand colour |
| secondary | `#FF801E` | Highlights, charts, second accent |
| border | `#DDDEE0` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#063E74` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 18.72:1 | pass | pass |
| Muted text on background | 12.50:1 | pass | pass |
| Primary on background | 3.66:1 | fail | pass |
| Text on primary | 5.37:1 | pass | pass |
| Text on surface | 8.23:1 | pass | pass |

**Colours seen on the page** (share of use): `#FFFFFF` 80.6%, `#60B1FF` 11.9%, `#319AFF` 7.1%, `#0084FF` 0.3%, `#0B1220` 0.1%, `#2B3445` 0.1%, `#444444` 0.0%, `#4B5563` 0.0%, `#FF801E` 0.0%, `#0066F0` 0.0%

## Typography

- Headings: **Fustat** (weight 700)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Fustat:wght@700&family=Plus+Jakarta+Sans:wght@600;700;800&family=Inter:wght@400;500;600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Fustat | 75 px | 700 | 78.75px | -2px |
| Body | Inter | 18 px | 400 | 27.9px | -0.6px |
| Button | Inter | 16 px | 600 | normal | normal |
| Navigation | Fustat | 22 px | 700 | normal | -0.5px |

## Shape, space and motion

- Radius: sm 7 px, md 16 px, lg 50 px, pill (fully rounded)
- Shadows: sm: `rgba(255, 255, 255, 0.25) 0px 4px 4px 0px inset, rgba(20, 60, 120, 0.08) 0px 8px 30px 0px` · md: `rgba(255, 255, 255, 0.25) 0px 4px 4px 0px inset` · lg: `rgba(255, 255, 255, 0.35) 0px 4px 4px 0px inset, rgba(0, 100, 240, 0.28) 0px 12px 28px 0px`
- Spacing: base unit 2 px; common steps 2 px, 7 px, 8 px, 9 px, 10 px, 14 px, 22 px, 24 px, 28 px
- Layout: container 1600 px; breakpoints 480 px, 768 px, 1024 px, 1280 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** upbeat, clear, efficient.

Taskly speaks like an organised teammate with a bright desk: short, positive and focused on getting things done. Headlines are action-first and avoid heavy jargon.

**Do**

- Start with a verb: manage, plan, finish
- Keep benefits to one clause
- Use 'you' and 'your team'

**Do not**

- Do not promise 'effortless' without a demo
- Avoid productivity-guru language
- Never bury the get-started button

## Taglines

1. Work smarter, achieve faster
2. Plan it, do it, done
3. Tasks that stay on track
4. Your team, in sync
5. Finish more by juggling less

**Boilerplate:** Taskly is a task management tool that helps teams manage projects, collaborate in one place and reach their goals with less overhead.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Get Started Now |
| secondaryCta | See features |
| success | Task completed. |
| error | Could not save the task. Please try again. |
| empty | No tasks yet. Add your first task. |

---
Source listing key `m:taskly`. Rebuild with `python3 scripts/brand-kit/build.py m:taskly`.
