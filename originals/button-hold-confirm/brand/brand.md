# Bunkerline — brand kit

*Hosting dashboard for careful deploys.* Generated from the SiteShelf listing **Hold To Confirm Button** (Buttons); every value below is read from that page, not invented.

> **Some buttons should make you mean it**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Manrope |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **shield** glyph on a squircle tile. A shield expresses a product whose whole purpose is guarding people from their own fastest clicks. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#0E1116` | Page background |
| surface | `#171C24` | Cards, panels, raised areas |
| text | `#9AA6B6` | Body and heading text |
| textMuted | `#E9EDF3` | Secondary text, captions |
| primary | `#FF4D5E` | Main actions, links, brand colour |
| secondary | `#FFB020` | Highlights, charts, second accent |
| border | `#2A313C` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#712730` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 7.66:1 | pass | pass |
| Muted text on background | 16.10:1 | pass | pass |
| Primary on background | 5.83:1 | pass | pass |
| Text on primary | 6.06:1 | pass | pass |
| Text on surface | 6.93:1 | pass | pass |

**Colours seen on the page** (share of use): `#0E1116` 93.5%, `#232A35` 4.5%, `#FF4D5E` 0.8%, `#9AA6B6` 0.4%, `#FFFFFF` 0.4%, `#E9EDF3` 0.3%, `#3A4452` 0.1%, `#B7C1CE` 0.0%, `#FFB020` 0.0%, `#2DD4A6` 0.0%

## Typography

- Headings: **Manrope** (weight 800)
- Body: **Manrope**
- Google Fonts: `https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Manrope:wght@600;700;800&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Manrope | 58 px | 800 | 59.16px | -1.74px |
| Heading / H2 | Manrope | 19 px | 800 | normal | normal |
| Body | Manrope | 17 px | 500 | 26.35px | normal |
| Button | Manrope | 15 px | 500 | 23.25px | normal |
| Caption / eyebrow | Manrope | 13 px | 800 | normal | 2.08px |

## Shape, space and motion

- Radius: sm 16 px, md 18 px, lg 20 px, pill (fully rounded)
- Shadows: sm: `rgba(255, 77, 94, 0.37) 0px 0px 24.9189px 0px` · md: `rgba(255, 77, 94, 0.37) 0px 0px 24.9189px 0px` · lg: `rgba(255, 77, 94, 0.37) 0px 0px 24.9189px 0px`
- Spacing: base unit 4 px; common steps 2 px, 4 px, 6 px, 10 px, 12 px, 16 px, 18 px, 22 px, 24 px
- Layout: container 1100 px; breakpoints 860 px
- Motion: 150 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** terse, steady, protective.

Bunkerline sounds like an on-call engineer at 3 a.m.: short, exact and never panicked. It names the irreversible thing plainly and asks for a deliberate hold before doing it.

**Do**

- State the consequence in one clause, such as 'This deletes the project'
- Use imperative verbs and exact durations
- Log what happened with a timestamp, never a flourish

**Do not**

- Do not joke when something is destructive
- Avoid soft words like 'oops' or 'whoops'
- Never hide the safe option behind the risky one

## Taglines

1. Some buttons should make you mean it
2. Hold to confirm. Release to think
3. Deploy with your eyes open
4. Irreversible deserves a second
5. Slow down on the dangerous parts

**Boilerplate:** Bunkerline is a hosting dashboard that guards risky actions, such as deleting projects or publishing to production, behind deliberate gestures and a clear activity log.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Hold to confirm |
| secondaryCta | Keep project |
| success | Done. Logged at 14:02 UTC. |
| error | Released too early. Nothing changed. |
| empty | No activity yet. Actions will appear here. |

---
Source listing key `o:button-hold-confirm`. Rebuild with `python3 scripts/brand-kit/build.py o:button-hold-confirm`.
