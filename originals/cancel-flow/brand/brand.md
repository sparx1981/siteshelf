# Cadence — brand kit

*Habit-planning app that respects your choices.* Generated from the SiteShelf listing **Cancel Subscription Flow** (Components); every value below is read from that page, not invented.

> **Plan at your own pace**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter Bold (stand-in for Instrument Sans) |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **pulse** glyph on a squircle tile. A steady pulse line suggests the rhythm of habits and the calm cadence of the brand. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F3F4F1` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#667068` | Body and heading text |
| textMuted | `#1D241F` | Secondary text, captions |
| primary | `#1F7A4D` | Main actions, links, brand colour |
| secondary | `#84B69D` | Highlights, charts, second accent |
| border | `#C7CCC3` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#84B69D` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 4.66:1 | pass | pass |
| Muted text on background | 14.36:1 | pass | pass |
| Primary on background | 4.82:1 | pass | pass |
| Text on primary | 5.32:1 | pass | pass |
| Text on surface | 5.14:1 | pass | pass |

**Colours seen on the page** (share of use): `#F3F4F1` 99.9%, `#667068` 0.1%, `#1D241F` 0.1%, `#1F7A4D` 0.0%, `#84B69D` 0.0%, `#C7CCC3` 0.0%

## Typography

- Headings: **Instrument Sans** (weight 700)
- Body: **Instrument Sans**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Instrument Sans | 26 px | 700 | normal | -0.52px |
| Body | Instrument Sans | 16 px | 400 | 24.8px | normal |
| Button | Instrument Sans | 16 px | 600 | normal | normal |

## Shape, space and motion

- Radius: sm 12 px, md 20 px, lg 20 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 2 px; common steps 2 px, 8 px, 10 px, 12 px, 20 px, 26 px, 30 px
- Layout: container 900 px; breakpoints 560 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** respectful, calm, transparent.

Cadence talks to people who are leaving as it would to a friend leaving a club: no guilt, no tricks. It states costs, dates and what is lost in plain sentences and makes the exit easy to find.

**Do**

- State the renewal date and price in the first line
- Offer a pause or discount once, clearly, then step aside
- Say exactly what the person keeps and loses

**Do not**

- Never guilt-trip with 'we are sad to see you go'
- Do not hide the confirm button
- Avoid dark-pattern wording like 'No, I hate saving money'

## Taglines

1. Plan at your own pace
2. Habits that fit the week you have
3. Stay, pause or go. All fine
4. Your plan, your rhythm
5. Quiet tools for steady routines

**Boilerplate:** Cadence is a habit-planning app that helps people build routines around the week they actually have, with a Plus plan at £7.99 a month and a cancellation flow that is honest from start to finish.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Keep my plan |
| secondaryCta | Cancel subscription |
| success | Your plan is cancelled. You keep access until 11 November. |
| error | We could not cancel your plan. Please try again. |
| empty | No past invoices yet. |

---
Source listing key `o:cancel-flow`. Rebuild with `python3 scripts/brand-kit/build.py o:cancel-flow`.
