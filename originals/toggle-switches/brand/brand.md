# Switchyard — brand kit

*Support plans with control panel settings.* Generated from the SiteShelf listing **Control Panel Toggles and Sliders** (Form Controls); every value below is read from that page, not invented.

> **Set it up your way**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Plus Jakarta Sans |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **dial** glyph on a squircle tile. A control dial echoes the knobs, toggles and sliders of the panel. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#ECEFF4` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#1B2230` | Body and heading text |
| textMuted | `#646A75` | Secondary text, captions |
| primary | `#3B5BFD` | Main actions, links, brand colour |
| secondary | `#93A5FE` | Highlights, charts, second accent |
| border | `#DDE2EA` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#93A5FE` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 13.82:1 | pass | pass |
| Muted text on background | 4.72:1 | pass | pass |
| Primary on background | 4.44:1 | fail | pass |
| Text on primary | 5.12:1 | pass | pass |
| Text on surface | 15.93:1 | pass | pass |

**Colours seen on the page** (share of use): `#ECEFF4` 66.6%, `#FFFFFF` 27.1%, `#1B2230` 5.9%, `#3B5BFD` 0.2%, `#667085` 0.1%, `#CBD2DD` 0.1%, `#93A5FE` 0.0%, `#DDE2EA` 0.0%

## Typography

- Headings: **Plus Jakarta Sans** (weight 700)
- Body: **Plus Jakarta Sans**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Plus Jakarta Sans | 24 px | 700 | normal | -0.48px |
| Heading / H2 | Plus Jakarta Sans | 20 px | 700 | normal | normal |
| Button | Arial | 13.3 px | 400 | normal | normal |

## Shape, space and motion

- Radius: sm 9 px, md 14 px, lg 24 px, pill (fully rounded)
- Shadows: sm: `rgba(0, 0, 0, 0.12) 0px 1px 3px 0px` · md: `rgba(27, 34, 48, 0.08) 0px 20px 40px 0px` · lg: `rgba(0, 0, 0, 0.12) 0px 1px 3px 0px`
- Spacing: base unit 4 px; common steps 4 px, 6 px, 8 px, 10 px, 12 px, 14 px, 16 px, 18 px, 20 px
- Layout: container 1040 px; breakpoints 560 px, 900 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** practical, tidy, reassuring.

A product-support lead explaining plan options to a busy customer: clear, upbeat and exact about price and response time. Every control states what it does.

**Do**

- State prices and response times together, such as £49 per month with 4 hour reply
- Describe toggles by outcome
- Show a live summary after every change

**Do not**

- Vague tier names without details
- Pushy upsells
- Technical jargon

## Taglines

1. Set it up your way
2. Plans you can actually adjust
3. Every control, one clear summary
4. Switch it, see it, done
5. Support that fits your week

**Boilerplate:** Switchyard offers support plans, Basic, Priority and Premium, with adjustable settings and a live summary so customers know exactly what they will get.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Save settings |
| secondaryCta | Reset |
| success | Settings saved. Your plan is updated |
| error | One setting conflicts. Check the range |
| empty | No plan selected. Pick one |

---
Source listing key `o:toggle-switches`. Rebuild with `python3 scripts/brand-kit/build.py o:toggle-switches`.
