# Lowtide Sessions — brand kit

*Three-night live music festival at The Boiler Room.* Generated from the SiteShelf listing **Event Ticket Page** (E-commerce); every value below is read from that page, not invented.

> **Three nights. One low tide**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Syne |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **bolt** glyph. A bolt of neon matches the electric energy of a late-night live show. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#0D0B14` | Page background |
| surface | `#17141F` | Cards, panels, raised areas |
| text | `#F4F2FA` | Body and heading text |
| textMuted | `#A39DB8` | Secondary text, captions |
| primary | `#FF3D9A` | Main actions, links, brand colour |
| secondary | `#7C5CFF` | Highlights, charts, second accent |
| border | `#2A2536` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#712049` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 17.61:1 | pass | pass |
| Muted text on background | 7.51:1 | pass | pass |
| Primary on background | 5.94:1 | pass | pass |
| Text on primary | 5.97:1 | pass | pass |
| Text on surface | 16.37:1 | pass | pass |

**Colours seen on the page** (share of use): `#0D0B14` 90.8%, `#FF3D9A` 4.1%, `#7C5CFF` 4.1%, `#C7F464` 0.4%, `#2A2536` 0.3%, `#F4F2FA` 0.2%, `#A39DB8` 0.2%, `#FFB4C8` 0.0%, `#712049` 0.0%

## Typography

- Headings: **Syne** (weight 800)
- Body: **Manrope**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700&family=Space+Mono:wght@400;700&family=Syne:wght@700;800&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Syne | 150 px | 800 | 135px | -3px |
| Heading / H2 | Syne | 56 px | 800 | 56px | normal |
| Subheading / H3 | Syne | 28 px | 800 | normal | normal |
| Body | Manrope | 16 px | 400 | 25.6px | normal |
| Button | Manrope | 16 px | 700 | normal | normal |
| Navigation | Manrope | 16 px | 700 | normal | normal |

## Shape, space and motion

- Radius: sm 20 px, md 20 px, lg 20 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 6 px, 8 px, 10 px, 12 px, 14 px, 16 px, 18 px, 20 px, 22 px
- Layout: container 1200 px; breakpoints 900 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** loud, magnetic, nocturnal.

Lowtide Sessions speaks in short, punchy bursts with a wink. It sells the night out: lineups, doors and set times first, with prices stated plainly and urgency kept real.

**Do**

- Lead with the lineup and the doors time
- Use short, punchy lines with hard stops
- State ticket price and fees before checkout

**Do not**

- Do not invent fake scarcity
- Avoid generic festival clichés like 'unforgettable vibes'
- Never hide fees in the last step

## Taglines

1. Three nights. One low tide
2. Doors 7pm. Don't be late
3. Loud rooms, good company
4. Catch the tide at The Boiler Room
5. Your night out starts here

**Boilerplate:** Lowtide Sessions is a three-night live music festival at The Boiler Room, featuring emerging artists and a ticketing flow with clear tiers, fees and printable passes.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Buy tickets |
| secondaryCta | See the lineup |
| success | You're in. Your tickets are on their way. |
| error | Your hold expired. Pick your tickets again. |
| empty | No tickets in your basket yet. |

---
Source listing key `o:event-ticket`. Rebuild with `python3 scripts/brand-kit/build.py o:event-ticket`.
