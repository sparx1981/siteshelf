# Daybreak Alarm — brand kit

*Alarm clock with a calm scrolling time wheel.* Generated from the SiteShelf listing **Time Wheel Picker** (Form Controls); every value below is read from that page, not invented.

> **When should we wake you?**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Outfit |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **dial** glyph on a circle tile. A round dial is the clock face behind a time wheel and a rising sun. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#101230` | Page background |
| surface | `#FFD9A0` | Cards, panels, raised areas |
| text | `#F5F2FF` | Body and heading text |
| textMuted | `#D8D0F0` | Secondary text, captions |
| primary | `#FFC872` | Main actions, links, brand colour |
| secondary | `#1B1F4A` | Highlights, charts, second accent |
| border | `#FFC872` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#1B1F4A` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 16.53:1 | pass | pass |
| Muted text on background | 12.33:1 | pass | pass |
| Primary on background | 11.95:1 | pass | pass |
| Text on primary | 12.87:1 | pass | pass |
| Text on surface | 1.21:1 | fail | fail |

**Colours seen on the page** (share of use): `#101230` 24.8%, `#1B1F4A` 14.1%, `#FFD9A0` 14.1%, `#FFB27A` 14.1%, `#4A3A7A` 14.1%, `#F08A6B` 14.1%, `#FFC872` 3.5%, `#F5F2FF` 0.9%, `#D8D0F0` 0.4%, `#2A1A00` 0.0%

## Typography

- Headings: **Outfit** (weight 500)
- Body: **DM Sans**
- Google Fonts: `https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Outfit:wght@300;500;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Outfit | 56 px | 500 | 58.8px | -1.12px |
| Heading / H2 | Outfit | 18 px | 700 | normal | 0.18px |
| Subheading / H3 | DM Sans | 12 px | 700 | normal | 1.44px |
| Body | DM Sans | 18 px | 400 | 27px | normal |
| Button | DM Sans | 13 px | 700 | normal | normal |
| Caption / eyebrow | DM Sans | 13 px | 700 | normal | 2.34px |

## Shape, space and motion

- Radius: sm 9 px, md 16 px, lg 28 px, pill (fully rounded)
- Shadows: sm: `rgba(0, 0, 0, 0.6) 0px 40px 80px -30px` · md: `rgba(0, 0, 0, 0.6) 0px 40px 80px -30px` · lg: `rgba(0, 0, 0, 0.6) 0px 40px 80px -30px`
- Spacing: base unit 2 px; common steps 3 px, 6 px, 7 px, 10 px, 12 px, 14 px, 16 px, 22 px, 48 px
- Layout: container 960 px; breakpoints 420 px, 900 px
- Motion: 150 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** gentle, dawnlike, reassuring.

Speaks softly, like the first light through a curtain. Short, kind sentences that treat early mornings as something to ease into, never to conquer.

**Do**

- Ask in the second person, such as when should we wake you
- Confirm times in full, with day and AM or PM
- Keep error text soft and practical

**Do not**

- Productivity bravado like rise and grind
- Sudden, shouting alerts
- Technical wording about spin buttons

## Taglines

1. When should we wake you?
2. Wake up slowly
3. Set it tonight, ease into tomorrow
4. Mornings, without the jolt
5. A softer way to start

**Boilerplate:** Daybreak Alarm is a gentle alarm app with a scroll-snap time wheel, 12 and 24 hour modes and a plain-language summary of when you will wake.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Set alarm |
| secondaryCta | Switch to 24 hour |
| success | Alarm set for 6:45 AM. Sleep well |
| error | That time did not take. Pick it again |
| empty | No alarms yet. Set your first |

---
Source listing key `o:control-time-wheel`. Rebuild with `python3 scripts/brand-kit/build.py o:control-time-wheel`.
