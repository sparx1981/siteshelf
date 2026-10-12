# Relay — brand kit

*Notification tooling for product teams.* Generated from the SiteShelf listing **Toast Notification Center** (App UI); every value below is read from that page, not invented.

> **Toasts that know their place**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter Bold (stand-in for Public Sans) |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **chat** glyph on a squircle tile. A speech bubble stands for a message handed on to the user. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F6F6F9` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#6B6B82` | Body and heading text |
| textMuted | `#17172A` | Secondary text, captions |
| primary | `#17172A` | Main actions, links, brand colour |
| secondary | `#4F46E5` | Highlights, charts, second accent |
| border | `#D9D9E6` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#4F46E5` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 4.81:1 | pass | pass |
| Muted text on background | 16.33:1 | pass | pass |
| Primary on background | 16.33:1 | pass | pass |
| Text on primary | 17.61:1 | pass | pass |
| Text on surface | 5.18:1 | pass | pass |

**Colours seen on the page** (share of use): `#F6F6F9` 98.5%, `#4F46E5` 0.7%, `#17172A` 0.5%, `#6B6B82` 0.3%, `#DC2626` 0.0%, `#12803A` 0.0%, `#A85A05` 0.0%, `#B91C1C` 0.0%, `#0284C7` 0.0%, `#0369A1` 0.0%

## Typography

- Headings: **Public Sans** (weight 700)
- Body: **Public Sans**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;500;600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Public Sans | 26 px | 700 | normal | -0.52px |
| Body | Public Sans | 15 px | 400 | 21.75px | normal |
| Button | Arial | 13.3 px | 400 | normal | normal |

## Shape, space and motion

- Radius: sm 6 px, md 14 px, lg 20 px, pill (fully rounded)
- Shadows: sm: `rgba(23, 23, 42, 0.18) 0px 12px 32px 0px` · md: `rgba(23, 23, 42, 0.18) 0px 12px 32px 0px` · lg: `rgba(23, 23, 42, 0.18) 0px 12px 32px 0px`
- Spacing: base unit 4 px; common steps 2 px, 6 px, 7 px, 8 px, 10 px, 12 px, 14 px, 16 px, 20 px
- Layout: container 1200 px; breakpoints 560 px
- Motion: 260 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** responsive, tidy, reliable.

Relay speaks in the clear one-liners of well-designed software: what happened, what can be done, nothing more. It gives developers short examples and names the toast type in plain words.

**Do**

- State the outcome first, then offer an action
- Use consistent verbs across toast types
- Keep messages under twelve words

**Do not**

- Do not use alarming language for warnings
- Avoid auto-dismissing errors too fast
- Never stack identical toasts

## Taglines

1. Toasts that know their place
2. Notify without nagging
3. Say it once, clearly
4. Messages that wait for you
5. Undo is always one click away

**Boilerplate:** Relay is a notification toolkit for product teams, offering success, warning, error and info toasts with timers, undo and a history drawer.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Send a toast |
| secondaryCta | Open history |
| success | Changes saved. |
| error | Could not save changes. Try again. |
| empty | No notifications yet. Fire a toast to see it here. |

---
Source listing key `o:toast-center`. Rebuild with `python3 scripts/brand-kit/build.py o:toast-center`.
