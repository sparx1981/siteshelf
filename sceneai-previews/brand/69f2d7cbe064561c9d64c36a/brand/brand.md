# Brightly — brand kit

*Project and day planner for teams.* Generated from the SiteShelf listing **Brightly** (Organize your day); every value below is read from that page, not invented.

> **Organise your day, own your flow**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **spark** glyph on a circle tile. A spark suggests brightness and a quick lift to a working day. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#050505` | Page background |
| surface | `#111111` | Cards, panels, raised areas |
| text | `#FFFFFF` | Body and heading text |
| textMuted | `#9CA3AF` | Secondary text, captions |
| primary | `#7A2A20` | Main actions, links, brand colour |
| secondary | `#FF4D4D` | Highlights, charts, second accent |
| border | `#282828` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#FF4D4D` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 20.38:1 | pass | pass |
| Muted text on background | 8.03:1 | pass | pass |
| Primary on background | 2.12:1 | fail | fail |
| Text on primary | 9.63:1 | pass | pass |
| Text on surface | 18.88:1 | pass | pass |

**Colours seen on the page** (share of use): `#050505` 75.5%, `#3A1D12` 8.5%, `#7A2A20` 8.5%, `#1C1C1C` 7.2%, `#FFFFFF` 0.3%, `#9CA3AF` 0.1%, `#FF4D4D` 0.0%, `#F97316` 0.0%, `#EC4899` 0.0%

## Typography

- Headings: **Inter** (weight 700)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Inter | 64 px | 700 | 69.12px | -1.92px |
| Body | Inter | 18 px | 400 | 28.8px | normal |
| Button | Inter | 20 px | 700 | normal | normal |
| Navigation | Inter | 14 px | 400 | normal | normal |

## Shape, space and motion

- Radius: sm 10 px, md 18 px, lg 18 px, pill (fully rounded)
- Shadows: sm: `rgba(0, 0, 0, 0.6) 0px 40px 100px 0px` · md: `rgba(0, 0, 0, 0.6) 0px 40px 100px 0px` · lg: `rgba(0, 0, 0, 0.6) 0px 40px 100px 0px`
- Spacing: base unit 4 px; common steps 6 px, 9 px, 10 px, 12 px, 14 px, 16 px, 20 px, 24 px, 32 px
- Layout: container 900 px; breakpoints 900 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** upbeat, organised, encouraging.

Brightly sounds like a motivated project lead who keeps the stand-up short: positive, practical and clear about what is next. It makes order feel light.

**Do**

- Lead with the next action
- Use short, positive verbs like plan, track and ship
- Keep praise specific

**Do not**

- Use productivity-guru phrases
- Guilt people about missed deadlines
- Pile on adjectives

## Taglines

1. Organise your day, own your flow
2. Plan clearly, ship calmly
3. Every deadline, within sight
4. Work that moves along
5. Brighter days, better teams

**Boilerplate:** Brightly is a project management tool that helps teams organise their day, track progress and meet deadlines with smart, simple planning features.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Get started |
| secondaryCta | See the product |
| success | Task done. Nice one. |
| error | That did not save. Try again. |
| empty | No tasks today. Add one. |

---
Source listing key `s:69f2d7cbe064561c9d64c36a`. Rebuild with `python3 scripts/brand-kit/build.py s:69f2d7cbe064561c9d64c36a`.
