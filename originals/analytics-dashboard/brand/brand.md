# Pulse — brand kit

*Product analytics dashboard for growing teams.* Generated from the SiteShelf listing **Analytics Dashboard** (Dashboard); every value below is read from that page, not invented.

> **See the signal, skip the noise**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter Bold (stand-in for Inter Tight) |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **pulse** glyph on a squircle tile. A heartbeat line is the natural mark for a product built to watch live traffic. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#0F1115` | Page background |
| surface | `#171B22` | Cards, panels, raised areas |
| text | `#E8EBF2` | Body and heading text |
| textMuted | `#8A93A6` | Secondary text, captions |
| primary | `#4C8DFF` | Main actions, links, brand colour |
| secondary | `#FB7185` | Highlights, charts, second accent |
| border | `#232832` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#264274` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 15.83:1 | pass | pass |
| Muted text on background | 6.12:1 | pass | pass |
| Primary on background | 5.90:1 | pass | pass |
| Text on primary | 6.14:1 | pass | pass |
| Text on surface | 14.47:1 | pass | pass |

**Colours seen on the page** (share of use): `#0F1115` 95.7%, `#4C8DFF` 1.6%, `#222A37` 1.2%, `#2DD4BF` 0.8%, `#8A93A6` 0.2%, `#E8EBF2` 0.2%, `#FBBF24` 0.1%, `#FB7185` 0.1%, `#A78BFA` 0.0%, `#F59E0B` 0.0%

## Typography

- Headings: **Inter Tight** (weight 600)
- Body: **Inter Tight**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Inter Tight | 26 px | 600 | 31.2px | -0.52px |
| Button | Inter Tight | 13 px | 600 | normal | normal |
| Navigation | Inter Tight | 14 px | 500 | 21px | normal |
| Caption / eyebrow | Inter Tight | 11.7 px | 400 | 17.5px | normal |

## Shape, space and motion

- Radius: sm 3 px, md 9 px, lg 14 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 2 px; common steps 2 px, 3 px, 4 px, 6 px, 8 px, 9 px, 10 px, 12 px, 14 px
- Layout: container 1200 px; breakpoints 520 px, 900 px, 1100 px
- Motion: 500 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** sharp, calm, numerate.

Reads like a good analyst's margin note: short, specific and unbothered by noise. It states what changed, by how much and over what window, and leaves the interpretation to the reader.

**Do**

- State the delta and the period together, for example up 12% in 30 days
- Use tabular figures and consistent units
- Label every chart with what is being counted

**Do not**

- Do not celebrate vanity numbers with exclamation marks
- Do not hide a drop behind soft wording
- Do not use growth hacker slang

## Taglines

1. See the signal, skip the noise
2. Your traffic, read at a glance
3. Every visit, accounted for
4. Know what moved, and why
5. Analytics that keeps its cool

**Boilerplate:** Pulse is a product analytics platform that turns visitor, acquisition and page data into clear dashboards so product teams can see what changed and decide what to do next.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Export report |
| secondaryCta | Change date range |
| success | Report exported. Check your downloads. |
| error | Data failed to load. Retry the last range. |
| empty | No visitors recorded for this range. |

---
Source listing key `o:analytics-dashboard`. Rebuild with `python3 scripts/brand-kit/build.py o:analytics-dashboard`.
