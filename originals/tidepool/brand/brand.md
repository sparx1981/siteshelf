# Skerry Marine Lab — brand kit

*Coastal research lab with an open archive.* Generated from the SiteShelf listing **Tidepool Hero Section** (Hero Section); every value below is read from that page, not invented.

> **The sea keeps better records**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Fraunces |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **wave** glyph on a circle tile. A wave is a simple, honest mark for a tide-focused lab and sits calmly on sea-glass. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#DCEFEC` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#0B2B33` | Body and heading text |
| textMuted | `#547074` | Secondary text, captions |
| primary | `#0B2B33` | Main actions, links, brand colour |
| secondary | `#FF6B4A` | Highlights, charts, second accent |
| border | `#0B2B33` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#FF6B4A` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 12.50:1 | pass | pass |
| Muted text on background | 4.46:1 | fail | pass |
| Primary on background | 12.50:1 | pass | pass |
| Text on primary | 14.92:1 | pass | pass |
| Text on surface | 14.92:1 | pass | pass |

**Colours seen on the page** (share of use): `#DCEFEC` 87.1%, `#FFFFFF` 12.6%, `#0B2B33` 0.3%, `#FF6B4A` 0.0%, `#547074` 0.0%

## Typography

- Headings: **Fraunces** (weight 300)
- Body: **DM Sans**
- Google Fonts: `https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&family=Fraunces:ital,wght@0,300;0,400;1,300&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Fraunces | 103.7 px | 300 | 105.754px | -3.1104px |
| Body | DM Sans | 17 px | 400 | 26.35px | normal |

## Shape, space and motion

- Radius: sm 50 px, md 50 px, lg 50 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 4 px, 10 px, 20 px, 24 px, 28 px, 32 px, 36 px, 48 px, 56 px
- Layout: container 900 px; breakpoints 760 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** observant, dry, generous.

Skerry Marine Lab writes like a long-serving scientist: precise, patient and a little wry. It states what was recorded and when, and opens its archive without fuss.

**Do**

- Give dates and places for every observation
- Use measured verbs: logged, recorded, observed
- Invite readers to ask for the archive

**Do not**

- Do not use dramatic ocean language
- Avoid claims beyond the data
- Never close the archive behind a form

## Taglines

1. The sea keeps better records
2. Since 1987, every season logged
3. An open archive of the coast
4. Tides, divers and decades of data
5. Ask us what the water did

**Boilerplate:** Skerry Marine Lab has logged every season on one stretch of coast since 1987 using divers and tide gauges, and keeps the full archive open to anyone who asks.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Request the archive |
| secondaryCta | Read the latest log |
| success | Request received. We will reply within a week. |
| error | Could not send that request. Please try again. |
| empty | No records for that date. |

---
Source listing key `o:tidepool`. Rebuild with `python3 scripts/brand-kit/build.py o:tidepool`.
