# Cloudlane Airlines — brand kit

*Tailored travel planning for meaningful journeys.* Generated from the SiteShelf listing **Airlines** (Travel the World Without Any Stress); every value below is read from that page, not invented.

> **Travel the world without any stress**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **plane** glyph on a squircle tile. A plane is the unmistakable symbol for an airline and its journeys. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#0B2A44` | Page background |
| surface | `#000000` | Cards, panels, raised areas |
| text | `#FFFFFF` | Body and heading text |
| textMuted | `#AAB4BE` | Secondary text, captions |
| primary | `#5AA5D8` | Main actions, links, brand colour |
| secondary | `#1D4F7A` | Highlights, charts, second accent |
| border | `#FFFFFF` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#1D4F7A` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 14.70:1 | pass | pass |
| Muted text on background | 6.99:1 | pass | pass |
| Primary on background | 5.46:1 | pass | pass |
| Text on primary | 7.30:1 | pass | pass |
| Text on surface | 21.00:1 | pass | pass |

**Colours seen on the page** (share of use): `#0B2A44` 66.3%, `#000000` 14.2%, `#5AA5D8` 9.5%, `#1D4F7A` 9.5%, `#FFFFFF` 0.5%, `#AAB4BE` 0.0%

## Typography

- Headings: **Inter** (weight 500)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Inter | 56 px | 500 | 61.6px | -0.56px |
| Body | Inter | 18 px | 400 | 28.8px | normal |
| Button | Inter | 14 px | 400 | normal | normal |
| Navigation | Inter | 14 px | 400 | normal | normal |

## Shape, space and motion

- Radius: sm 0 px, md 0 px, lg 0 px, pill (fully rounded)
- Shadows: sm: `rgba(0, 0, 0, 0.25) 0px 8px 24px 0px` · md: `rgba(0, 0, 0, 0.25) 0px 8px 24px 0px` · lg: `rgba(0, 0, 0, 0.25) 0px 8px 24px 0px`
- Spacing: base unit 4 px; common steps 9 px, 12 px, 18 px, 20 px, 24 px, 26 px, 30 px, 32 px, 64 px
- Layout: container 1200 px; breakpoints 768 px, 820 px
- Motion: 250 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** reassuring, adventurous, polished.

A travel planner who takes the stress away: warm, composed and quietly excited. The tone is of a trusted guide, not a salesperson.

**Do**

- Promise the planning, not the destination
- Use calm, active verbs such as explore and travel
- Keep sentences short and reassuring

**Do not**

- Fear-based urgency
- Airline jargon
- Bucket-list cliches

## Taglines

1. Travel the world without any stress
2. We plan, you wander
3. Journeys crafted just for you
4. Fly well, explore more
5. Meaningful travel, carefully planned

**Boilerplate:** Cloudlane Airlines plans and flies meaningful journeys for travellers who want a stress-free trip, handling the details so passengers can simply explore.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Start travel |
| secondaryCta | Start exploring |
| success | Trip request received. We'll plan the rest |
| error | We couldn't save your trip. Try again |
| empty | No trips yet. Start exploring |

---
Source listing key `s:6a5cba37f2a29290ea72db3e`. Rebuild with `python3 scripts/brand-kit/build.py s:6a5cba37f2a29290ea72db3e`.
