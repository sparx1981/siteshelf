# Tickmark — brand kit

*Friendly weekly habit tracker.* Generated from the SiteShelf listing **Habit Tracker** (App UI); every value below is read from that page, not invented.

> **Small ticks, big changes**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Bricolage Grotesque |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **grid** glyph on a squircle tile. A grid of tick boxes mirrors the weekly habit table on the page. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F6F1EA` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#2B2620` | Body and heading text |
| textMuted | `#726D67` | Secondary text, captions |
| primary | `#B4570A` | Main actions, links, brand colour |
| secondary | `#D9CCB6` | Highlights, charts, second accent |
| border | `#DDD2C0` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#D9CCB6` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 13.34:1 | pass | pass |
| Muted text on background | 4.56:1 | pass | pass |
| Primary on background | 4.34:1 | fail | pass |
| Text on primary | 4.87:1 | pass | pass |
| Text on surface | 14.99:1 | pass | pass |

**Colours seen on the page** (share of use): `#F6F1EA` 65.7%, `#FFFFFF` 33.2%, `#2B2620` 0.5%, `#5FA37A` 0.3%, `#7A6F62` 0.2%, `#D9CCB6` 0.1%, `#B4570A` 0.0%

## Typography

- Headings: **Bricolage Grotesque** (weight 700)
- Body: **Nunito Sans**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@500;700&family=Nunito+Sans:wght@400;600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Bricolage Grotesque | 32 px | 700 | 35.2px | normal |
| Body | Nunito Sans | 15 px | 400 | 22.5px | normal |
| Button | Nunito Sans | 14 px | 700 | normal | normal |
| Caption / eyebrow | Nunito Sans | 12.5 px | 400 | 18.75px | normal |

## Shape, space and motion

- Radius: sm 8 px, md 12 px, lg 16 px, pill (fully rounded)
- Shadows: sm: `color(srgb 0.937255 0.435294 0.368627 / 0.3) 0px 0px 0px 3px` · md: `color(srgb 0.298039 0.607843 0.909804 / 0.3) 0px 0px 0px 3px` · lg: `rgba(80, 60, 30, 0.3) 0px 6px 20px -12px`
- Spacing: base unit 4 px; common steps 4 px, 6 px, 8 px, 9 px, 10 px, 12 px, 14 px, 16 px, 18 px
- Layout: container 960 px; breakpoints 600 px, 820 px
- Motion: 150 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** gentle, bright, steady.

Sounds like a supportive friend who remembers what you said you'd do: warm, light on advice and quick with a small cheer. Missed days are met with a shrug, not a lecture.

**Do**

- Greet by time of day and use the person's own habit names
- Celebrate streaks with one short line
- Make resetting a day feel easy

**Do not**

- Do not scold for missed days
- Do not use diet or hustle language
- Do not stack more than one cheer per screen

## Taglines

1. Small ticks, big changes
2. One day at a time, ticked
3. Habits that stay friendly
4. Show up, tick, repeat
5. Your week, gently tracked

**Boilerplate:** Tickmark is a weekly habit tracker with tappable day checks, streaks and a daily progress ring, made for people who want steady routines without guilt, and stored on their own device.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Add habit |
| secondaryCta | This week |
| success | Ticked. That's a four day streak. |
| error | That didn't save. Tap to try again. |
| empty | No habits yet. Add your first one. |

---
Source listing key `o:habit-tracker`. Rebuild with `python3 scripts/brand-kit/build.py o:habit-tracker`.
