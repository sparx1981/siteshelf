# Lumen Habit — brand kit

*Habit tracker for calmer routines.* Generated from the SiteShelf listing **Coming Soon Waitlist** (Coming Soon); every value below is read from that page, not invented.

> **Habits that glow**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Syne |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **spark** glyph on a squircle tile. A small spark suggests a habit that glows without burning. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#0D0B24` | Page background |
| surface | `#8B6BFF` | Cards, panels, raised areas |
| text | `#A9A4D0` | Body and heading text |
| textMuted | `#F4F2FF` | Secondary text, captions |
| primary | `#8B6BFF` | Main actions, links, brand colour |
| secondary | `#FF6B8A` | Highlights, charts, second accent |
| border | `#23203C` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#413374` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 8.17:1 | pass | pass |
| Muted text on background | 17.42:1 | pass | pass |
| Primary on background | 5.18:1 | pass | pass |
| Text on primary | 5.28:1 | pass | pass |
| Text on surface | 1.58:1 | fail | fail |

**Colours seen on the page** (share of use): `#0D0B24` 78.4%, `#8B6BFF` 10.8%, `#FF6B8A` 8.9%, `#FFFFFF` 0.6%, `#CFC4FF` 0.6%, `#FFB3C4` 0.6%, `#A9A4D0` 0.1%, `#23203C` 0.0%, `#413374` 0.0%

## Typography

- Headings: **Syne** (weight 800)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Inter:wght@400;500;600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Syne | 84 px | 800 | 84px | normal |
| Body | Inter | 16 px | 400 | 24.8px | normal |
| Button | Inter | 16 px | 700 | normal | normal |
| Caption / eyebrow | Inter | 11 px | 400 | 17.05px | 1.32px |

## Shape, space and motion

- Radius: sm 12 px, md 20 px, lg 50 px, pill (fully rounded)
- Shadows: sm: `rgb(255, 107, 138) 0px 0px 16px 0px` · md: `rgb(255, 107, 138) 0px 0px 16px 0px` · lg: `rgb(255, 107, 138) 0px 0px 16px 0px`
- Spacing: base unit 4 px; common steps 4 px, 8 px, 12 px, 14 px, 16 px, 22 px, 24 px, 40 px
- Layout: container 1200 px; breakpoints 480 px
- Motion: 600 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** glowing, encouraging, low-pressure.

Lumen Habit sounds like a friend who cheers quietly from the doorway. It is warm and encouraging, favours small wins over big promises, and counts down to launch without any hype.

**Do**

- Celebrate the small step, not the streak
- Use light imagery: glow, spark, dawn
- Give real numbers, like queue position and spots left

**Do not**

- Do not guilt anyone about missed days
- Do not use fake urgency
- Do not promise life-changing results

## Taglines

1. Habits that glow
2. A calmer way to build routines
3. Small days, lit one by one
4. Early access for the first 2,000
5. Begin gently, keep going

**Boilerplate:** Lumen Habit is a habit-building app for people who want calmer routines, launching soon with early access for the first 2,000 people on the waitlist.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Join the waitlist |
| secondaryCta | Copy my referral link |
| success | You are in. You are number 214 in the queue. |
| error | That did not save. Check your email address and try again. |
| empty | No one has joined through your link yet. |

---
Source listing key `o:coming-soon-waitlist`. Rebuild with `python3 scripts/brand-kit/build.py o:coming-soon-waitlist`.
