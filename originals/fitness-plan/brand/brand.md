# Ironleaf — brand kit

*Strength training planner and session tracker.* Generated from the SiteShelf listing **Workout Planner** (App UI); every value below is read from that page, not invented.

> **Show up. Lift. Log it.**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter Bold (stand-in for Barlow Condensed) |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **sprout** glyph on a squircle tile. A leaf shoot over iron-like strength fits the name: growth built from hard work. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#101114` | Page background |
| surface | `#1A1C21` | Cards, panels, raised areas |
| text | `#F3F4F6` | Body and heading text |
| textMuted | `#9AA1AD` | Secondary text, captions |
| primary | `#C6F432` | Main actions, links, brand colour |
| secondary | `#FF7A2F` | Highlights, charts, second accent |
| border | `#3A3E48` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#5A6D1E` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 17.16:1 | pass | pass |
| Muted text on background | 7.26:1 | pass | pass |
| Primary on background | 14.73:1 | pass | pass |
| Text on primary | 15.33:1 | pass | pass |
| Text on surface | 15.49:1 | pass | pass |

**Colours seen on the page** (share of use): `#101114` 96.3%, `#C6F432` 1.5%, `#1F2229` 1.1%, `#FF7A2F` 0.3%, `#F3F4F6` 0.3%, `#2A2112` 0.2%, `#9AA1AD` 0.1%, `#333844` 0.1%, `#FFB066` 0.0%, `#3A4A05` 0.0%

## Typography

- Headings: **Barlow Condensed** (weight 700)
- Body: **Barlow**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700&family=Barlow:wght@400;500;600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Barlow Condensed | 52 px | 700 | 52px | normal |
| Heading / H2 | Barlow Condensed | 15 px | 700 | normal | 1.5px |
| Subheading / H3 | Barlow Condensed | 22 px | 700 | normal | 0.44px |
| Button | Barlow | 15 px | 400 | 22.5px | normal |
| Caption / eyebrow | Barlow | 12 px | 400 | 18px | 0.96px |

## Shape, space and motion

- Radius: sm 10 px, md 14 px, lg 16 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 2 px, 4 px, 6 px, 8 px, 10 px, 12 px, 14 px, 16 px, 20 px
- Layout: container 1100 px; breakpoints 520 px, 900 px
- Motion: 1000 ms, `linear`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** driven, direct, encouraging.

Sounds like a coach counting you through the last rep: short commands, specific numbers and a nod when you finish. Hype is kept for the finish line, not the warm-up.

**Do**

- Use short imperatives like Rest, Lift, Log
- Show sets, reps and kilos exactly
- Give credit when a streak holds

**Do not**

- Do not shame missed days
- Do not use diet-culture language
- Do not use vague motivation like crush it

## Taglines

1. Show up. Lift. Log it.
2. Strength that adds up, week by week
3. Sixteen sets, no excuses needed
4. Train hard, rest harder
5. Your week, planned in iron

**Boilerplate:** Ironleaf is a weekly workout planner that helps lifters schedule training days, track sets, time rests and review weekly volume in one dark, focused app.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Start session |
| secondaryCta | Skip rest |
| success | Session logged. Nice work. |
| error | Set not saved. Tap to try again. |
| empty | Rest day. Nothing planned. |

---
Source listing key `o:fitness-plan`. Rebuild with `python3 scripts/brand-kit/build.py o:fitness-plan`.
