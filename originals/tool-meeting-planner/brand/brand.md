# Meridian Desk — brand kit

*Time zone planner for distributed teams.* Generated from the SiteShelf listing **Meeting Time Planner** (Tools); every value below is read from that page, not invented.

> **Find the hour that works for everyone**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Manrope |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **globe** glyph. A globe reflects the cities and time zones being compared. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#EAF1F8` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#10213A` | Body and heading text |
| textMuted | `#4B5D78` | Secondary text, captions |
| primary | `#1F5FD1` | Main actions, links, brand colour |
| secondary | `#10213A` | Highlights, charts, second accent |
| border | `#FFFFFF` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#10213A` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 14.17:1 | pass | pass |
| Muted text on background | 5.88:1 | pass | pass |
| Primary on background | 5.10:1 | pass | pass |
| Text on primary | 5.81:1 | pass | pass |
| Text on surface | 16.15:1 | pass | pass |

**Colours seen on the page** (share of use): `#EAF1F8` 47.4%, `#FFFFFF` 44.7%, `#1E2B4A` 2.4%, `#BFE8D4` 2.1%, `#FDE8B8` 1.5%, `#000000` 0.8%, `#1F5FD1` 0.3%, `#7A3A7E` 0.3%, `#4F7F86` 0.3%, `#6A6AA8` 0.3%

## Typography

- Headings: **Manrope** (weight 800)
- Body: **DM Sans**
- Google Fonts: `https://fonts.googleapis.com/css2?family=DM+Mono:wght@500&family=DM+Sans:wght@400;500;600&family=Manrope:wght@700;800&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Manrope | 52 px | 800 | 53.56px | -0.52px |
| Heading / H2 | DM Sans | 13 px | 700 | normal | 1.3px |
| Subheading / H3 | Manrope | 17 px | 800 | normal | normal |
| Body | DM Sans | 14.5 px | 400 | 21.75px | normal |
| Button | DM Sans | 14 px | 600 | normal | normal |
| Caption / eyebrow | DM Sans | 12 px | 600 | normal | 1.92px |

## Shape, space and motion

- Radius: sm 4 px, md 10 px, lg 14 px, pill (fully rounded)
- Shadows: sm: `rgb(16, 33, 58) 0px 0px 0px 2px inset` · md: `rgb(31, 95, 209) 0px 0px 0px 3px inset` · lg: `rgb(16, 33, 58) 0px 0px 0px 2px inset`
- Spacing: base unit 4 px; common steps 2 px, 4 px, 6 px, 8 px, 10 px, 12 px, 14 px, 16 px, 24 px
- Layout: container 1240 px; breakpoints 600 px, 760 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** considerate, tidy, global.

Meridian Desk sounds like a scheduling assistant with a very good map in its head. It is polite, careful about time zones and gives one clear best slot with the invite line ready to paste.

**Do**

- Name the cities and the local times together
- Offer the best slot first
- Spell out time zone abbreviations once

**Do not**

- Do not use ambiguous times without a zone
- Avoid jokes about time zones
- Never suggest a slot outside working hours

## Taglines

1. Find the hour that works for everyone
2. Meet across the map
3. One slot, five cities
4. Time zones, tamed
5. Schedule kindly, wherever they are

**Boilerplate:** Meridian Desk is a meeting planner that compares working hours across up to five cities, finds the best shared slot and writes the invite line for you.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Jump to best slot |
| secondaryCta | Add city |
| success | Invite line copied. |
| error | That city could not be found. Check the spelling. |
| empty | Add a city to compare working hours. |

---
Source listing key `o:tool-meeting-planner`. Rebuild with `python3 scripts/brand-kit/build.py o:tool-meeting-planner`.
