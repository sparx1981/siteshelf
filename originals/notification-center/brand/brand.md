# Orbit — brand kit

*Team workspace with a calm notification centre.* Generated from the SiteShelf listing **Notification Center** (App UI); every value below is read from that page, not invented.

> **Everything that needs you, nothing that doesn't**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Plus Jakarta Sans |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **orbit** glyph on a circle tile. An orbit ring suggests teammates revolving around shared work and a notification dot circling in. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F5F6F8` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#111827` | Body and heading text |
| textMuted | `#2563EB` | Secondary text, captions |
| primary | `#2563EB` | Main actions, links, brand colour |
| secondary | `#93C5FD` | Highlights, charts, second accent |
| border | `#E4E6EB` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#93C5FD` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 16.41:1 | pass | pass |
| Muted text on background | 4.78:1 | pass | pass |
| Primary on background | 4.78:1 | pass | pass |
| Text on primary | 5.17:1 | pass | pass |
| Text on surface | 17.74:1 | pass | pass |

**Colours seen on the page** (share of use): `#F5F6F8` 97.6%, `#111827` 0.9%, `#6B7280` 0.5%, `#2563EB` 0.2%, `#DC2626` 0.2%, `#7C3AED` 0.1%, `#0891B2` 0.1%, `#16A34A` 0.1%, `#EA580C` 0.1%, `#DB2777` 0.1%

## Typography

- Headings: **Plus Jakarta Sans** (weight 700)
- Body: **Plus Jakarta Sans**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Heading / H2 | Plus Jakarta Sans | 18 px | 700 | 27px | normal |
| Subheading / H3 | Plus Jakarta Sans | 14 px | 600 | 19.6px | normal |
| Body | Plus Jakarta Sans | 13 px | 400 | 19.5px | normal |
| Button | Arial | 13.3 px | 400 | normal | normal |

## Shape, space and motion

- Radius: sm 10 px, md 14 px, lg 16 px, pill (fully rounded)
- Shadows: sm: `rgba(16, 24, 40, 0.25) 0px 20px 50px -12px` · md: `rgba(16, 24, 40, 0.25) 0px 20px 50px -12px` · lg: `rgba(16, 24, 40, 0.25) 0px 20px 50px -12px`
- Spacing: base unit 2 px; common steps 2 px, 4 px, 6 px, 7 px, 8 px, 10 px, 12 px, 14 px, 18 px
- Layout: container 900 px; breakpoints 520 px
- Motion: 150 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** organised, considerate, crisp.

Orbit sounds like a thoughtful teammate who tells you only what matters, in order. Updates name the person, the document and the change in one tidy line.

**Do**

- Name who did what, in that order
- Group updates by day
- Offer undo for every dismissal

**Do not**

- Do not use alarm language for ordinary updates
- Avoid vague 'You have new activity'
- Never badge a number that is not unread

## Taglines

1. Everything that needs you, nothing that doesn't
2. Stay in the loop, gently
3. Updates in orbit
4. Quiet alerts, clear priorities
5. Know what changed, instantly

**Boilerplate:** Orbit is a team workspace whose notification centre groups mentions, system alerts and updates by day, so people can catch up without being interrupted.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Mark all as read |
| secondaryCta | View all |
| success | Marked as read. |
| error | We could not load notifications. Please retry. |
| empty | You are all caught up. No new notifications. |

---
Source listing key `o:notification-center`. Rebuild with `python3 scripts/brand-kit/build.py o:notification-center`.
