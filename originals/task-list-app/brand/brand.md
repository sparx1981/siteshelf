# Tickoff — brand kit

*Simple daily task list.* Generated from the SiteShelf listing **Task List App** (App UI); every value below is read from that page, not invented.

> **Today, one tick at a time**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from DM Serif Display |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **bars** glyph on a squircle tile. A short progress bar echoes ticking items off a list. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F1EEFB` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#231F3B` | Body and heading text |
| textMuted | `#6D4AFF` | Secondary text, captions |
| primary | `#6D4AFF` | Main actions, links, brand colour |
| secondary | `#231F3B` | Highlights, charts, second accent |
| border | `#CFC8EE` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#231F3B` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 13.80:1 | pass | pass |
| Muted text on background | 4.51:1 | pass | pass |
| Primary on background | 4.51:1 | pass | pass |
| Text on primary | 5.15:1 | pass | pass |
| Text on surface | 15.78:1 | pass | pass |

**Colours seen on the page** (share of use): `#F1EEFB` 68.1%, `#FFFFFF` 31.4%, `#6D4AFF` 0.3%, `#231F3B` 0.1%, `#7B7599` 0.1%, `#8D6BFF` 0.0%, `#F4A259` 0.0%, `#C3BDE0` 0.0%, `#EF476F` 0.0%, `#4FB286` 0.0%

## Typography

- Headings: **DM Serif Display** (weight 400)
- Body: **DM Sans**
- Google Fonts: `https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=DM+Serif+Display&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | DM Serif Display | 40 px | 400 | 44px | normal |
| Button | DM Sans | 15 px | 700 | normal | normal |

## Shape, space and motion

- Radius: sm 8 px, md 12 px, lg 22 px, pill (fully rounded)
- Shadows: sm: `rgba(80, 60, 160, 0.35) 0px 30px 70px -30px` · md: `rgba(80, 60, 160, 0.35) 0px 30px 70px -30px` · lg: `rgba(80, 60, 160, 0.35) 0px 30px 70px -30px`
- Spacing: base unit 4 px; common steps 6 px, 7 px, 8 px, 10 px, 11 px, 12 px, 14 px, 16 px, 20 px
- Layout: container 1200 px; breakpoints 520 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** brisk, easygoing, tidy.

Tickoff sounds like a friend who keeps your to-do list honest: brisk, kind and tiny on words. It cheers each finished item and treats an empty list as a good day.

**Do**

- Write tasks as short verb phrases
- Celebrate completion in a few words
- Keep counts visible and plain

**Do not**

- Use productivity guru talk
- Guilt-trip about overdue items
- Bury Undo

## Taglines

1. Today, one tick at a time
2. Do the next thing
3. Short list, clear head
4. Tick it off, move on
5. Your day, kept simple

**Boilerplate:** Tickoff is a simple daily task list with quick add, priorities, filters and undo, designed for people who want to finish a short list rather than manage a long one.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Add |
| secondaryCta | Clear completed |
| success | Done. Nicely ticked. |
| error | Could not save that task. Try again. |
| empty | Nothing on your list. Enjoy the day. |

---
Source listing key `o:task-list-app`. Rebuild with `python3 scripts/brand-kit/build.py o:task-list-app`.
