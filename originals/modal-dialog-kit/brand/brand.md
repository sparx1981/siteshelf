# Hatchway — brand kit

*Accessible dialog components for interfaces.* Generated from the SiteShelf listing **Modal Dialog Kit** (Components); every value below is read from that page, not invented.

> **Four patterns, one shared behaviour**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from DM Sans |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **stack** glyph. Layered panes picture dialogs stacked above a page. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#EEF1F6` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#0F172A` | Body and heading text |
| textMuted | `#5D6371` | Secondary text, captions |
| primary | `#0F172A` | Main actions, links, brand colour |
| secondary | `#7B7F8A` | Highlights, charts, second accent |
| border | `#CBD5E1` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#7B7F8A` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 15.77:1 | pass | pass |
| Muted text on background | 5.32:1 | pass | pass |
| Primary on background | 15.77:1 | pass | pass |
| Text on primary | 17.85:1 | pass | pass |
| Text on surface | 17.85:1 | pass | pass |

**Colours seen on the page** (share of use): `#EEF1F6` 89.2%, `#FFFFFF` 10.7%, `#0F172A` 0.0%, `#64748B` 0.0%, `#5D6371` 0.0%, `#7B7F8A` 0.0%, `#CBD5E1` 0.0%

## Typography

- Headings: **DM Sans** (weight 700)
- Body: **DM Sans**
- Google Fonts: `https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | DM Sans | 22 px | 700 | 33px | normal |
| Body | DM Sans | 16 px | 400 | 24px | normal |
| Button | DM Sans | 15 px | 600 | normal | normal |

## Shape, space and motion

- Radius: sm 10 px, md 18 px, lg 18 px
- Shadows: sm: `rgba(15, 23, 42, 0.08) 0px 10px 30px 0px` · md: `rgba(15, 23, 42, 0.08) 0px 10px 30px 0px` · lg: `rgba(15, 23, 42, 0.08) 0px 10px 30px 0px`
- Spacing: base unit 4 px; common steps 4 px, 10 px, 11 px, 14 px, 16 px, 18 px, 24 px, 28 px
- Layout: container 1200 px; breakpoints 480 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** careful, plain, dependable.

Sounds like a thoughtful component author: precise about focus, keys and escape routes, and relaxed about everything else. Copy states the pattern and the guarantee in one line.

**Do**

- Name the pattern and its keyboard behaviour
- Use verbs that match the button action
- Keep body copy to a sentence

**Do not**

- Do not use scare language in destructive dialogs
- Do not trap users without an escape
- Do not decorate with jokes

## Taglines

1. Four patterns, one shared behaviour
2. Dialogs that behave themselves
3. Focus in, focus back, no surprises
4. Every overlay has a way out
5. Small windows, careful manners

**Boilerplate:** Hatchway is a kit of accessible dialog components, including confirm modals, form dialogs, side drawers and bottom sheets, with focus trapping, Escape handling and consistent behaviour.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Confirm delete |
| secondaryCta | Cancel |
| success | Changes saved. The dialog is closed. |
| error | Couldn't save. Review the highlighted field. |
| empty | Nothing selected. Open a dialog to begin. |

---
Source listing key `o:modal-dialog-kit`. Rebuild with `python3 scripts/brand-kit/build.py o:modal-dialog-kit`.
