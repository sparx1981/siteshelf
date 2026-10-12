# Hearth — brand kit

*Calm home control for lights, heat and doors.* Generated from the SiteShelf listing **Smart Home Dashboard** (Dashboard); every value below is read from that page, not invented.

> **Everything at home, in hand**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter Bold (stand-in for Inter Tight) |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **home** glyph on a circle tile. A simple house shape is the plain truth of the product. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#12141A` | Page background |
| surface | `#1C1F28` | Cards, panels, raised areas |
| text | `#8A92A6` | Body and heading text |
| textMuted | `#F1F3F8` | Secondary text, captions |
| primary | `#3DDC97` | Main actions, links, brand colour |
| secondary | `#FF7A45` | Highlights, charts, second accent |
| border | `#2A2E3A` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#206348` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 5.91:1 | pass | pass |
| Muted text on background | 16.58:1 | pass | pass |
| Primary on background | 10.42:1 | pass | pass |
| Text on primary | 11.12:1 | pass | pass |
| Text on surface | 5.28:1 | pass | pass |

**Colours seen on the page** (share of use): `#12141A` 97.0%, `#FFFFFF` 1.4%, `#262A36` 0.8%, `#3DDC97` 0.3%, `#8A92A6` 0.2%, `#FFB547` 0.1%, `#3A3F4E` 0.1%, `#FF7A45` 0.1%, `#206348` 0.0%

## Typography

- Headings: **Inter Tight** (weight 700)
- Body: **Inter Tight**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Inter Tight | 24 px | 700 | 36px | normal |
| Heading / H2 | Inter Tight | 12 px | 700 | 18px | 0.96px |
| Button | Inter Tight | 14 px | 600 | 21px | normal |

## Shape, space and motion

- Radius: sm 12 px, md 18 px, lg 18 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 3 px, 4 px, 6 px, 8 px, 10 px, 12 px, 16 px, 18 px, 24 px
- Layout: container 1000 px; breakpoints 640 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** calm, helpful, precise.

Hearth sounds like a thoughtful housemate who keeps things comfortable: unobtrusive, brief and exact about temperatures, doors and lights. It greets by name and stays out of the way.

**Do**

- Report states in plain words such as 'Locked' and 'Off'
- Use the person's first name in greetings
- Give numbers with units

**Do not**

- Use gadget hype
- Bury a security warning in friendly language
- Add noise to quiet states

## Taglines

1. Everything at home, in hand
2. Good morning, and the house knows
3. Warm rooms, locked doors
4. Comfort without the fiddling
5. Home, quietly looked after

**Boilerplate:** Hearth is a smart home dashboard that brings lights, thermostat, door locks and energy use together in one calm screen, with scenes for movies, nights and leaving.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Good night |
| secondaryCta | Add a scene |
| success | Front door locked. |
| error | Living room lights are not responding. |
| empty | No activity yet today. |

---
Source listing key `o:smart-home-dashboard`. Rebuild with `python3 scripts/brand-kit/build.py o:smart-home-dashboard`.
