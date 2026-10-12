# Horizon Outfitters — brand kit

*Outdoor gear for early starts and golden finishes.* Generated from the SiteShelf listing **Sunset Gradient Footer** (Footer); every value below is read from that page, not invented.

> **Gear for the long way home**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Fraunces |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **peak** glyph on a squircle tile. A mountain peak anchors the outdoor line and the horizon above it. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#FBF6EE` | Page background |
| surface | `#0F0A24` | Cards, panels, raised areas |
| text | `#231A16` | Body and heading text |
| textMuted | `#4B3B33` | Secondary text, captions |
| primary | `#FFD9A6` | Main actions, links, brand colour |
| secondary | `#1D1030` | Highlights, charts, second accent |
| border | `#EADFCE` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#1D1030` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 15.86:1 | pass | pass |
| Muted text on background | 9.90:1 | pass | pass |
| Primary on background | 1.24:1 | fail | fail |
| Text on primary | 14.71:1 | pass | pass |
| Text on surface | 1.13:1 | fail | fail |

**Colours seen on the page** (share of use): `#FBF6EE` 65.4%, `#0F0A24` 10.9%, `#E0BC93` 6.8%, `#FF9873` 6.8%, `#936DA7` 6.8%, `#000000` 1.0%, `#FFB36B` 0.8%, `#5A2E5F` 0.6%, `#3B1F4A` 0.5%, `#FFD27A` 0.4%

## Typography

- Headings: **Fraunces** (weight 700)
- Body: **DM Sans**
- Google Fonts: `https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=Fraunces:wght@600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Fraunces | 68 px | 700 | 66.64px | -1.36px |
| Heading / H2 | Fraunces | 84 px | 700 | 84px | -1.68px |
| Subheading / H3 | Fraunces | 18 px | 600 | normal | normal |
| Body | DM Sans | 19 px | 400 | 30.4px | normal |
| Button | DM Sans | 16 px | 600 | normal | normal |
| Navigation | DM Sans | 14 px | 400 | 22.4px | normal |

## Shape, space and motion

- Radius: sm 12 px, md 20 px, lg 50 px, pill (fully rounded)
- Shadows: sm: `rgba(255, 210, 122, 0.2) 0px 0px 0px 30px, rgba(255, 170, 100, 0.12) 0px 0px 0px 70px, rgba(255, 150, 90, 0.6) 0px 0px 160px 60px` · md: `rgba(255, 210, 122, 0.2) 0px 0px 0px 30px, rgba(255, 170, 100, 0.12) 0px 0px 0px 70px, rgba(255, 150, 90, 0.6) 0px 0px 160px 60px` · lg: `rgba(255, 210, 122, 0.2) 0px 0px 0px 30px, rgba(255, 170, 100, 0.12) 0px 0px 0px 70px, rgba(255, 150, 90, 0.6) 0px 0px 160px 60px`
- Spacing: base unit 4 px; common steps 6 px, 8 px, 10 px, 12 px, 14 px, 16 px, 18 px, 20 px, 24 px
- Layout: container 1160 px; breakpoints 520 px, 900 px
- Motion: 300 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** adventurous, grounded, warm.

Sounds like someone lacing boots at dawn: plain, optimistic, a little poetic about light. It talks about kit by what it does on the trail.

**Do**

- Describe gear by the job it does outdoors
- Use time of day to set the mood
- Keep claims honest about weight and weather

**Do not**

- No extreme-sports hype
- No fake urgency or countdown deals
- No jargon like technical fabrics without a use

## Taglines

1. Gear for the long way home
2. Early start, golden finish
3. Made for the trailhead
4. See you at golden hour
5. Trail-tested, light-chasing kit

**Boilerplate:** Horizon Outfitters makes tents, boots and stoves for people who reach the trailhead early and walk home as the light turns gold.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Subscribe |
| secondaryCta | Pause the sky |
| success | You're in, see you on the trail |
| error | That did not send, check the address |
| empty | Nothing in your pack yet |

---
Source listing key `o:footer-sunset`. Rebuild with `python3 scripts/brand-kit/build.py o:footer-sunset`.
