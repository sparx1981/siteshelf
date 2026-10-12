# Datacore — brand kit

*Network access, logs and server control for admins.* Generated from the SiteShelf listing **Datacore SaaS Hero** (SaaS); every value below is read from that page, not invented.

> **Your networks, one rapid interface**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **stack** glyph on a squircle tile. Stacked layers refer to servers and data layers. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#000000` | Page background |
| surface | `#0B0618` | Cards, panels, raised areas |
| text | `#FFFFFF` | Body and heading text |
| textMuted | `#A6A6A6` | Secondary text, captions |
| primary | `#7B39FC` | Main actions, links, brand colour |
| secondary | `#2B2344` | Highlights, charts, second accent |
| border | `#A484D7` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#2B2344` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 21.00:1 | pass | pass |
| Muted text on background | 8.63:1 | pass | pass |
| Primary on background | 3.83:1 | fail | pass |
| Text on primary | 5.48:1 | pass | pass |
| Text on surface | 19.93:1 | pass | pass |

**Colours seen on the page** (share of use): `#000000` 60.9%, `#0B0618` 38.1%, `#7B39FC` 0.4%, `#2B2344` 0.2%, `#FFFFFF` 0.2%, `#55506E` 0.2%, `#F87B52` 0.0%, `#1B0A02` 0.0%, `#A6A6A6` 0.0%, `#A484D7` 0.0%

## Typography

- Headings: **Inter** (weight 600)
- Body: **Manrope**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700&family=Manrope:wght@400;500;600;700&family=Figtree:wght@500;600;700&family=Instrument+Serif:ital@1&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Inter | 76 px | 600 | 82.08px | -2.66px |
| Body | Manrope | 19 px | 400 | 28.5px | normal |
| Button | Manrope | 15 px | 400 | 22.5px | normal |
| Navigation | Inter | 18 px | 600 | 27px | normal |

## Shape, space and motion

- Radius: sm 9 px, md 12 px, lg 12 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 2 px; common steps 2 px, 4 px, 6 px, 10 px, 11 px, 13 px, 14 px, 20 px, 24 px
- Layout: container 1280 px; breakpoints 640 px, 900 px, 1024 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** efficient, sharp, reliable.

Sounds like a trusted systems admin: terse, exact, and allergic to fluff. It talks about access, logs and uptime with numbers.

**Do**

- Name the system: access, logs, servers
- Use verbs admins use: audit, revoke, restore
- Keep headlines under eight words

**Do not**

- No cloud-speak buzzwords
- No exaggerated uptime claims
- No humour about outages

## Taglines

1. Your networks, one rapid interface
2. Control access with purpose
3. Every log, every server, one place
4. Admin control without the clutter
5. Know who has the keys

**Boilerplate:** Datacore is a platform that lets IT admins control network access, logs and servers from a single fast interface.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Get started |
| secondaryCta | Book a free demo |
| success | Access updated |
| error | Could not reach the server, check the connection |
| empty | No logs match that filter |

---
Source listing key `m:datacore-saas-hero`. Rebuild with `python3 scripts/brand-kit/build.py m:datacore-saas-hero`.
