# Roompulse — brand kit

*Meeting room finder for small teams.* Generated from the SiteShelf listing **Room Pulse Booking** (Widgets); every value below is read from that page, not invented.

> **Find a little thinking room**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from DM Sans |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **pulse** glyph. A pulse line hints at the live availability of every slot. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F5F8FB` | Page background |
| surface | `#E9F0F7` | Cards, panels, raised areas |
| text | `#5E6E84` | Body and heading text |
| textMuted | `#23334A` | Secondary text, captions |
| primary | `#23334A` | Main actions, links, brand colour |
| secondary | `#868F9B` | Highlights, charts, second accent |
| border | `#BCCBDE` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#868F9B` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 4.88:1 | pass | pass |
| Muted text on background | 11.99:1 | pass | pass |
| Primary on background | 11.99:1 | pass | pass |
| Text on primary | 12.77:1 | pass | pass |
| Text on surface | 4.52:1 | pass | pass |

**Colours seen on the page** (share of use): `#F5F8FB` 96.0%, `#DCE0E5` 2.4%, `#285B9A` 0.6%, `#23334A` 0.5%, `#5E6E84` 0.3%, `#375578` 0.1%, `#868F9B` 0.0%, `#BCCBDE` 0.0%

## Typography

- Headings: **DM Sans** (weight 600)
- Body: **DM Sans**
- Google Fonts: `https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | DM Sans | 40 px | 600 | 60px | -1.2px |
| Heading / H2 | DM Sans | 19 px | 600 | 28.5px | normal |
| Subheading / H3 | DM Sans | 18 px | 700 | 27px | normal |
| Body | DM Sans | 14 px | 400 | 21px | normal |
| Button | DM Sans | 11 px | 400 | 16.5px | normal |
| Caption / eyebrow | DM Sans | 12 px | 400 | 18px | normal |

## Shape, space and motion

- Radius: sm 4 px, md 6 px, lg 10 px
- Shadows: none used (flat)
- Spacing: base unit 2 px; common steps 4 px, 6 px, 9 px, 10 px, 12 px, 13 px, 14 px, 18 px, 20 px
- Layout: container 1260 px; breakpoints 560 px, 760 px, 1000 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** clear, brisk, friendly.

Sounds like a helpful office manager: concise, specific about capacity and time, and gently funny about thinking rooms. Availability is the headline every time.

**Do**

- Give capacity and equipment in numbers
- Show free or booked in the label
- Confirm bookings with the time and room name

**Do not**

- No facilities-management jargon
- No apology for a busy diary
- No exclamation marks

## Taglines

1. Find a little thinking room
2. Book the space, not the stress
3. Free, booked, done
4. Right room, right time
5. Rooms that fit the work

**Boilerplate:** Roompulse helps small teams compare meeting rooms by capacity and equipment, pick a conflict-free slot and reserve it in seconds.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Reserve room |
| secondaryCta | Cancel |
| success | Reserved: Room 2, 10:30 to 11:00 |
| error | That slot was just taken, pick another |
| empty | No reservations yet |

---
Source listing key `o:room-pulse-booking`. Rebuild with `python3 scripts/brand-kit/build.py o:room-pulse-booking`.
