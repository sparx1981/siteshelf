# Loopday — brand kit

*Daily activity rings and streak tracker.* Generated from the SiteShelf listing **Activity Rings Widget** (Widgets); every value below is read from that page, not invented.

> **Close the loop, every day**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Sora |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **target** glyph on a squircle tile. A target made of concentric rings mirrors the three closing rings the product is built around. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#1C1C1E` | Page background |
| surface | `#000000` | Cards, panels, raised areas |
| text | `#FFFFFF` | Body and heading text |
| textMuted | `#8E8E93` | Secondary text, captions |
| primary | `#FA114F` | Main actions, links, brand colour |
| secondary | `#92E82A` | Highlights, charts, second accent |
| border | `#2C2C2E` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#92E82A` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 17.01:1 | pass | pass |
| Muted text on background | 5.22:1 | pass | pass |
| Primary on background | 4.26:1 | fail | pass |
| Text on primary | 4.92:1 | pass | pass |
| Text on surface | 21.00:1 | pass | pass |

**Colours seen on the page** (share of use): `#000000` 45.5%, `#141416` 43.7%, `#2C2C2E` 4.7%, `#FA114F` 2.2%, `#FFFFFF` 1.9%, `#92E82A` 1.1%, `#1EEAEF` 0.5%, `#FF5C7F` 0.3%, `#8E8E93` 0.1%

## Typography

- Headings: **Sora** (weight 700)
- Body: **Sora**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Sora | 24 px | 700 | 26.4px | normal |
| Heading / H2 | Sora | 12 px | 600 | normal | 1.2px |
| Button | Sora | 13 px | 600 | 16.25px | normal |
| Caption / eyebrow | Sora | 11 px | 600 | 16.5px | 1.1px |

## Shape, space and motion

- Radius: sm 7 px, md 14 px, lg 28 px, pill (fully rounded)
- Shadows: sm: `rgba(0, 0, 0, 0.6) 0px 30px 80px 0px` · md: `rgba(0, 0, 0, 0.6) 0px 30px 80px 0px` · lg: `rgba(0, 0, 0, 0.6) 0px 30px 80px 0px`
- Spacing: base unit 2 px; common steps 2 px, 5 px, 6 px, 8 px, 10 px, 12 px, 14 px, 18 px, 20 px
- Layout: container 1200 px; breakpoints 480 px
- Motion: 150 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** energetic, encouraging, clear.

Speaks like a good coach who counts quietly and cheers at the right moment. Numbers lead, praise is brief, and a missed day is treated as information rather than failure.

**Do**

- Lead with the number, then one short line of encouragement
- Celebrate closed rings in a few words
- Use active verbs like close, log and keep

**Do not**

- Do not shame a broken streak
- Avoid medical or weight-loss claims
- No exclamation marks stacked on top of each other

## Taglines

1. Close the loop, every day
2. Three rings. One good habit
3. Move a little, count it all
4. Small wins, closed daily
5. Your day, in three colours

**Boilerplate:** Loopday is a fitness dashboard that turns movement, exercise and standing time into three simple rings and a streak you can see at a glance.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Log 10 min walk |
| secondaryCta | Reset day |
| success | Ring closed. Nice work, streak is now 7. |
| error | Could not save that activity. Try again. |
| empty | Nothing logged yet today. A ten minute walk counts. |

---
Source listing key `o:activity-rings`. Rebuild with `python3 scripts/brand-kit/build.py o:activity-rings`.
