# Paradiso — brand kit

*Alerts for nearby homes.* Generated from the SiteShelf listing **Paradiso** (Subscribe); every value below is read from that page, not invented.

> **Be first to know about nearby homes**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **home** glyph on a squircle tile. A home outline says where the alerts come from. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F3F1EC` | Page background |
| surface | `#000000` | Cards, panels, raised areas |
| text | `#666666` | Body and heading text |
| textMuted | `#979795` | Secondary text, captions |
| primary | `#141E30` | Main actions, links, brand colour |
| secondary | `#3A2A4D` | Highlights, charts, second accent |
| border | `#DFDED9` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#9CA0A8` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 5.09:1 | pass | pass |
| Muted text on background | 2.59:1 | fail | fail |
| Primary on background | 14.79:1 | pass | pass |
| Text on primary | 16.69:1 | pass | pass |
| Text on surface | 3.66:1 | fail | pass |

**Colours seen on the page** (share of use): `#F3F1EC` 67.1%, `#000000` 15.7%, `#243B55` 5.7%, `#141E30` 5.7%, `#3A2A4D` 5.7%, `#FFFFFF` 0.2%, `#666666` 0.0%, `#979795` 0.0%, `#DFDED9` 0.0%

## Typography

- Headings: **Inter** (weight 500)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Inter | 46 px | 500 | 50.6px | -0.92px |
| Body | Inter | 15 px | 400 | 24px | normal |
| Button | Inter | 15 px | 500 | normal | normal |

## Shape, space and motion

- Radius: sm 32 px, md 32 px, lg 32 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 13 px, 14 px, 16 px, 20 px, 24 px, 26 px, 28 px
- Layout: container 1200 px; breakpoints 560 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** warm, timely, trustworthy.

Paradiso sounds like a friendly local estate agent who rings you first. It is warm, plain and prompt, with a promise to tell you early about homes close by.

**Do**

- Name the area and the type of home
- Say how soon you will be told
- Keep promises small and true

**Do not**

- Do not use 'dream home' clichés
- Do not pressure with fake scarcity
- Do not share contact details

## Taglines

1. Be first to know about nearby homes
2. Homes near you, before anyone else
3. New listings, delivered with care
4. Find your next place sooner
5. Local homes, straight to your inbox

**Boilerplate:** Paradiso notifies people about newly listed homes in their area and connects them with trusted professionals for a smooth move.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Subscribe |
| secondaryCta | Maybe later |
| success | You are subscribed. We will email new homes near you. |
| error | That email does not look right. Check and try again. |
| empty | No homes yet in your area. We will tell you when one lists. |

---
Source listing key `s:6a61a4ae0cd891fdf74d708a`. Rebuild with `python3 scripts/brand-kit/build.py s:6a61a4ae0cd891fdf74d708a`.
