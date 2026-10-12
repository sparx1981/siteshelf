# Oasis — brand kit

*Project management for teams who value their day.* Generated from the SiteShelf listing **Oasis** (Master your day, boost productivity); every value below is read from that page, not invented.

> **Master your day, boost productivity**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **drop** glyph on a circle tile. A water drop suggests an oasis and the refreshing calm of a clear day. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#0B0C10` | Page background |
| surface | `#2A1A6E` | Cards, panels, raised areas |
| text | `#FFFFFF` | Body and heading text |
| textMuted | `#A1A1AA` | Secondary text, captions |
| primary | `#6744FF` | Main actions, links, brand colour |
| secondary | `#2A1A6E` | Highlights, charts, second accent |
| border | `#2D2E31` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#2A1A6E` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 19.55:1 | pass | pass |
| Muted text on background | 7.63:1 | pass | pass |
| Primary on background | 3.58:1 | fail | pass |
| Text on primary | 5.46:1 | pass | pass |
| Text on surface | 14.27:1 | pass | pass |

**Colours seen on the page** (share of use): `#0B0C10` 81.0%, `#2A1A6E` 15.9%, `#1B1840` 1.8%, `#1C1D22` 0.5%, `#6744FF` 0.4%, `#FFFFFF` 0.2%, `#A1A1AA` 0.1%, `#2D2E31` 0.0%

## Typography

- Headings: **Inter** (weight 700)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Inter | 72 px | 700 | 79.2px | -1.44px |
| Body | Inter | 20 px | 400 | 32px | normal |
| Button | Inter | 14 px | 500 | normal | normal |
| Navigation | Inter | 14 px | 500 | normal | normal |

## Shape, space and motion

- Radius: sm 8 px, md 12 px, lg 24 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 6 px, 8 px, 10 px, 12 px, 14 px, 18 px, 20 px, 24 px, 32 px
- Layout: container 1400 px; breakpoints 820 px
- Motion: 300 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** fresh, focused, optimistic.

A productivity friend who is genuinely helpful: upbeat, direct and a bit refreshing. It frames work as getting a calm, clear day back.

**Do**

- Lead with the outcome, such as stay on track
- Use simple, active verbs
- Promise a smoother day, not magic

**Do not**

- Overuse of productivity buzzwords
- Exaggerated claims
- Pushy trials

## Taglines

1. Master your day, boost productivity
2. Stay on track, meet deadlines
3. Smart tools for smoother teams
4. A calm place for the project
5. Get more done, worry less

**Boilerplate:** Oasis is a project management platform with smart tools that help teams stay on track, meet deadlines and keep productivity high.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Get started |
| secondaryCta | How it works |
| success | Welcome to Oasis. Let's plan your day |
| error | Something went wrong. Please try again |
| empty | No projects yet. Create one |

---
Source listing key `s:6a03689d11f6ab71b2b946a6`. Rebuild with `python3 scripts/brand-kit/build.py s:6a03689d11f6ab71b2b946a6`.
