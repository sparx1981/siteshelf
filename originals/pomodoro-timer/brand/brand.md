# Slowtick — brand kit

*Focus timer with gentle breaks.* Generated from the SiteShelf listing **Pomodoro Focus Timer** (Widgets); every value below is read from that page, not invented.

> **Focus a little, rest a little**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Manrope |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **dial** glyph on a squircle tile. A dial is the clock face at the heart of the timer. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#2B1A1A` | Page background |
| surface | `#FF6B5A` | Cards, panels, raised areas |
| text | `#FFFFFF` | Body and heading text |
| textMuted | `#B5AFAF` | Secondary text, captions |
| primary | `#FF6B5A` | Main actions, links, brand colour |
| secondary | `#FFAEA4` | Highlights, charts, second accent |
| border | `#493A3A` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#71332E` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 16.60:1 | pass | pass |
| Muted text on background | 7.68:1 | pass | pass |
| Primary on background | 5.93:1 | pass | pass |
| Text on primary | 7.02:1 | pass | pass |
| Text on surface | 2.80:1 | fail | fail |

**Colours seen on the page** (share of use): `#2B1A1A` 98.1%, `#FF6B5A` 1.8%, `#FFFFFF` 0.1%, `#1A0D0B` 0.0%, `#B5AFAF` 0.0%, `#FFAEA4` 0.0%, `#493A3A` 0.0%, `#71332E` 0.0%

## Typography

- Headings: **Manrope** (weight 700)
- Body: **Manrope**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Manrope:wght@500;700;800&family=Space+Grotesk:wght@500;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Heading / H2 | Manrope | 12 px | 700 | normal | 1.44px |
| Button | Manrope | 14 px | 700 | normal | normal |

## Shape, space and motion

- Radius: sm 10 px, md 14 px, lg 28 px, pill (fully rounded)
- Shadows: sm: `rgba(255, 107, 90, 0.18) 0px 0px 0px 3px, rgb(255, 107, 90) 0px 0px 0px 2px inset` · md: `rgba(255, 107, 90, 0.18) 0px 0px 0px 3px, rgb(255, 107, 90) 0px 0px 0px 2px inset` · lg: `rgba(255, 107, 90, 0.18) 0px 0px 0px 3px, rgb(255, 107, 90) 0px 0px 0px 2px inset`
- Spacing: base unit 2 px; common steps 3 px, 4 px, 6 px, 8 px, 9 px, 10 px, 12 px, 14 px, 18 px
- Layout: container 1200 px; breakpoints 420 px
- Motion: 300 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** steady, kind, focused.

Slowtick sounds like a patient study partner who watches the clock so you don't have to. It is encouraging without pushing, and treats breaks as seriously as work.

**Do**

- Use the session count and the mode in each message
- Treat breaks as part of the work
- Keep timer words short: start, skip, reset

**Do not**

- Do not praise overwork
- Do not use guilt when a session is skipped
- Do not use 'hustle'

## Taglines

1. Focus a little, rest a little
2. Twenty-five minutes at a time
3. Work in rounds, not marathons
4. A gentle clock for good days
5. One session, then a proper break

**Boilerplate:** Slowtick is a focus timer with focus, short break and long break modes, session dots and a simple log of the day's completed work.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Start |
| secondaryCta | Skip |
| success | Session 1 done. Take a short break. |
| error | The chime could not play. The timer is still running. |
| empty | No sessions yet today. Press Start. |

---
Source listing key `o:pomodoro-timer`. Rebuild with `python3 scripts/brand-kit/build.py o:pomodoro-timer`.
