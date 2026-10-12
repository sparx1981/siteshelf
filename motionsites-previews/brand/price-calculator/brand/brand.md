# Ballpark — brand kit

*Project estimation tool for web studios.* Generated from the SiteShelf listing **Price Calculator** (SaaS); every value below is read from that page, not invented.

> **Get a premium website within your budget**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **bars** glyph on a squircle tile. Rising bars hint at budgets and estimates in a neutral, instantly readable mark. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#0A0A0A` | Page background |
| surface | `#262626` | Cards, panels, raised areas |
| text | `#FAFAFA` | Body and heading text |
| textMuted | `#A3A3A3` | Secondary text, captions |
| primary | `#FF5656` | Main actions, links, brand colour |
| secondary | `#FFA2A2` | Highlights, charts, second accent |
| border | `#525252` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#712A2D` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 18.97:1 | pass | pass |
| Muted text on background | 7.85:1 | pass | pass |
| Primary on background | 6.33:1 | pass | pass |
| Text on primary | 6.28:1 | pass | pass |
| Text on surface | 14.50:1 | pass | pass |

**Colours seen on the page** (share of use): `#0A0A0A` 92.6%, `#262626` 4.0%, `#EC4899` 1.3%, `#F97316` 1.3%, `#FAFAFA` 0.4%, `#A3A3A3` 0.2%, `#D4D4D4` 0.1%, `#FF5656` 0.0%, `#FFA2A2` 0.0%, `#525252` 0.0%

## Typography

- Headings: **Inter** (weight 400)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=DM+Mono:wght@400;500&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Inter | 48 px | 400 | 55.2px | -0.96px |
| Subheading / H3 | Inter | 18 px | 500 | 27px | normal |
| Body | Inter | 15 px | 400 | 22.5px | normal |
| Caption / eyebrow | DM Mono | 13 px | 400 | 19.5px | 1.3px |

## Shape, space and motion

- Radius: sm 4 px, md 16 px, lg 16 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 3 px, 8 px, 12 px, 16 px, 18 px, 24 px, 28 px, 48 px, 64 px
- Layout: container 1280 px; breakpoints 420 px, 768 px, 1024 px
- Motion: 150 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** straight-talking, friendly, practical.

Ballpark sounds like a seasoned studio lead giving you a fair estimate across a table. It trusts numbers and asks plain questions before offering a range.

**Do**

- Ask one question at a time
- Present a price as a range
- Explain what moves the number

**Do not**

- Do not hide the range behind a form
- Avoid 'premium' without evidence
- Never quote without listing the assumptions

## Taglines

1. Get a premium website within your budget
2. Price your project in a minute
3. A fair number, before the call
4. Know the cost before the kickoff
5. Estimates without the runaround

**Boilerplate:** Ballpark is a project estimation calculator for web studios, giving clients an instant price range based on pages, features and timeline.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Get my estimate |
| secondaryCta | Talk to us |
| success | Estimate ready. Your range is below. |
| error | We could not calculate that. Please check your inputs. |
| empty | Choose your project options to see a range. |

---
Source listing key `m:price-calculator`. Rebuild with `python3 scripts/brand-kit/build.py m:price-calculator`.
