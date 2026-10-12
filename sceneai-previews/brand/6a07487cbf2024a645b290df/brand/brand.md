# Jetfly — brand kit

*Gulfstream private charter service.* Generated from the SiteShelf listing **Jetfly** (Gulfstream Charters On Your Schedule); every value below is read from that page, not invented.

> **Gulfstream charters on your schedule**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **plane** glyph. A plane is the clearest sign for charter flights and keeps the page clean. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#FFFFFF` | Page background |
| surface | `#000000` | Cards, panels, raised areas |
| text | `#6B7280` | Body and heading text |
| textMuted | `#111111` | Secondary text, captions |
| primary | `#6AA3D9` | Main actions, links, brand colour |
| secondary | `#355F8C` | Highlights, charts, second accent |
| border | `#EAEBED` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#355F8C` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 4.83:1 | pass | pass |
| Muted text on background | 18.88:1 | pass | pass |
| Primary on background | 2.67:1 | fail | fail |
| Text on primary | 7.35:1 | pass | pass |
| Text on surface | 4.34:1 | fail | pass |

**Colours seen on the page** (share of use): `#FFFFFF` 60.6%, `#000000` 13.3%, `#6AA3D9` 8.7%, `#355F8C` 8.7%, `#16263A` 8.7%, `#6B7280` 0.0%, `#111111` 0.0%, `#EAEBED` 0.0%

## Typography

- Headings: **Inter** (weight 300)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital@1&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Inter | 76 px | 300 | 77.52px | -2.28px |
| Body | Inter | 15 px | 400 | 24px | normal |
| Button | Inter | 14 px | 500 | normal | normal |
| Navigation | Inter | 14 px | 400 | normal | normal |

## Shape, space and motion

- Radius: sm 48 px, md 48 px, lg 48 px, pill (fully rounded)
- Shadows: sm: `rgba(0, 0, 0, 0.2) 0px 6px 18px 0px` · md: `rgba(0, 0, 0, 0.2) 0px 6px 18px 0px` · lg: `rgba(0, 0, 0, 0.2) 0px 6px 18px 0px`
- Spacing: base unit 4 px; common steps 4 px, 11 px, 12 px, 18 px, 20 px, 22 px, 24 px, 28 px, 30 px
- Layout: container 1200 px; breakpoints 760 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** polished, discreet, punctual.

Jetfly talks like a concierge who respects your time: calm, courteous and exact about schedules. It sells departure on your terms, not luxury for its own sake.

**Do**

- Lead with schedule and destination
- Name the aircraft type and crew
- Keep tone courteous and brief

**Do not**

- Do not use jet-set cliches
- Avoid shouting about luxury
- Never quote prices vaguely

## Taglines

1. Gulfstream charters on your schedule
2. Leave when you are ready
3. Land where you need to be
4. Private flying, quietly arranged
5. Your aircraft, your hour

**Boilerplate:** Jetfly arranges Gulfstream charters with seasoned crews, connecting travellers with aircraft so they can leave when they are ready and land where they need to be.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Request a quote |
| secondaryCta | View the fleet |
| success | Request received. A broker will call you. |
| error | Could not send that request. Please try again. |
| empty | No aircraft available for those dates. |

---
Source listing key `s:6a07487cbf2024a645b290df`. Rebuild with `python3 scripts/brand-kit/build.py s:6a07487cbf2024a645b290df`.
