# Hearthly — brand kit

*Calm smart thermostat for the living room.* Generated from the SiteShelf listing **Smart Thermostat** (App UI); every value below is read from that page, not invented.

> **Warm rooms, quiet bills**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Outfit |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **flame** glyph on a squircle tile. A small flame says warmth and hearth without looking like a fire alarm. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#1B1F27` | Page background |
| surface | `#0F1318` | Cards, panels, raised areas |
| text | `#F4F6FA` | Body and heading text |
| textMuted | `#AAB3C2` | Secondary text, captions |
| primary | `#FF8A4C` | Main actions, links, brand colour |
| secondary | `#A9C8D8` | Highlights, charts, second accent |
| border | `#FFFFFF` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#714029` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 15.26:1 | pass | pass |
| Muted text on background | 7.81:1 | pass | pass |
| Primary on background | 7.07:1 | pass | pass |
| Text on primary | 8.41:1 | pass | pass |
| Text on surface | 17.23:1 | pass | pass |

**Colours seen on the page** (share of use): `#1B1F27` 71.7%, `#0F1318` 22.0%, `#FFFFFF` 1.5%, `#000000` 1.5%, `#5F8A6A` 1.0%, `#FF8A4C` 0.5%, `#E6E0D6` 0.5%, `#CFE6F4` 0.5%, `#8FBF9A` 0.5%, `#A9C8D8` 0.5%

## Typography

- Headings: **Outfit** (weight 500)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Outfit:wght@300;500;600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Outfit | 48 px | 500 | 50.4px | -0.48px |
| Heading / H2 | Outfit | 13 px | 600 | normal | 1.82px |
| Body | Inter | 14 px | 400 | 21px | normal |
| Button | Outfit | 26 px | 500 | normal | normal |
| Caption / eyebrow | Outfit | 13 px | 600 | normal | 2.34px |

## Shape, space and motion

- Radius: sm 10 px, md 28 px, lg 50 px, pill (fully rounded)
- Shadows: sm: `rgba(255, 255, 255, 0.2) 0px 0px 0px 2px` · md: `rgba(255, 255, 255, 0.2) 0px 0px 0px 2px` · lg: `rgba(255, 255, 255, 0.2) 0px 0px 0px 2px`
- Spacing: base unit 2 px; common steps 2 px, 4 px, 6 px, 8 px, 10 px, 12 px, 14 px, 15 px, 20 px
- Layout: container 1040 px; breakpoints 900 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** cosy, steady, quiet.

Speaks softly, like a warm room at dusk. It states temperatures and times plainly and keeps energy talk gentle rather than guilt-driven.

**Do**

- Show degrees and times first, words second
- Describe comfort in sensory terms like cool or golden
- Keep confirmations to a few words

**Do not**

- No alarmist energy-waste warnings
- No gadget slang or version numbers
- No jokes at the expense of a cold house

## Taglines

1. Warm rooms, quiet bills
2. Comfort that follows your day
3. The right warm, right on time
4. Heat that listens
5. Keep the evening golden

**Boilerplate:** Hearthly makes a smart thermostat that sets the temperature and the light of the room together, with schedules and energy estimates that stay easy to understand.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Resume schedule |
| secondaryCta | Override until 17:30 |
| success | Holding at 21.5 degrees |
| error | Could not reach the heating, check your connection |
| empty | No schedule set for this day yet |

---
Source listing key `o:app-smart-thermostat`. Rebuild with `python3 scripts/brand-kit/build.py o:app-smart-thermostat`.
