# Stagewise — brand kit

*Sales pipeline dashboard with stage conversion rates.* Generated from the SiteShelf listing **Sales Funnel Dashboard** (Dashboard); every value below is read from that page, not invented.

> **See where deals leak**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Manrope |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **chevrons** glyph on a squircle tile. Stacked chevrons describe the narrowing steps of a funnel. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F1F4F8` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#111A2E` | Body and heading text |
| textMuted | `#3730A3` | Secondary text, captions |
| primary | `#0F9D6C` | Main actions, links, brand colour |
| secondary | `#111A2E` | Highlights, charts, second accent |
| border | `#D6DCE8` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#111A2E` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 15.72:1 | pass | pass |
| Muted text on background | 9.00:1 | pass | pass |
| Primary on background | 3.14:1 | fail | pass |
| Text on primary | 5.67:1 | pass | pass |
| Text on surface | 17.34:1 | pass | pass |

**Colours seen on the page** (share of use): `#F1F4F8` 95.4%, `#4338CA` 1.7%, `#4F46E5` 1.0%, `#2563EB` 0.5%, `#111A2E` 0.4%, `#0EA5E9` 0.4%, `#14B8A6` 0.4%, `#667491` 0.2%, `#3730A3` 0.1%, `#0F9D6C` 0.1%

## Typography

- Headings: **Manrope** (weight 800)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Manrope:wght@600;800&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Manrope | 20 px | 800 | normal | normal |
| Heading / H2 | Manrope | 17 px | 800 | normal | normal |
| Body | Inter | 14 px | 400 | 21px | normal |
| Button | Inter | 13 px | 600 | 19.5px | normal |
| Caption / eyebrow | Inter | 11.7 px | 600 | 17.5px | normal |

## Shape, space and motion

- Radius: sm 8 px, md 10 px, lg 14 px, pill (fully rounded)
- Shadows: sm: `rgba(0, 0, 0, 0.12) 0px 1px 4px 0px` · md: `rgba(17, 26, 46, 0.05) 0px 2px 10px 0px` · lg: `rgba(0, 0, 0, 0.12) 0px 1px 4px 0px`
- Spacing: base unit 2 px; common steps 2 px, 3 px, 6 px, 8 px, 9 px, 10 px, 14 px, 16 px, 18 px
- Layout: container 1180 px; breakpoints 960 px
- Motion: 600 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** sharp, numerate, no-nonsense.

A sales ops lead who has read the numbers before the meeting: direct, specific and impatient with fluff. It states what happened and the rate, then stops.

**Do**

- State counts and percentages together, such as 427 leads became 41 wins
- Name stages exactly as the funnel does
- Use tabular, round-free figures

**Do not**

- Motivational sales slogans
- Vague words like great results
- Hiding drop-off between stages

## Taglines

1. See where deals leak
2. Every stage, every rate
3. Pipeline clarity, no guesswork
4. From first lead to closed win
5. Know what's converting this quarter

**Boilerplate:** Stagewise is a pipeline dashboard that visualises deal stages as a funnel, with conversion rates between them, regional filters and a top-deals table.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | View top deals |
| secondaryCta | Change period |
| success | Filters applied. Figures refreshed |
| error | Could not load the pipeline. Try again |
| empty | No deals in this range |

---
Source listing key `o:dashboard-sales-funnel`. Rebuild with `python3 scripts/brand-kit/build.py o:dashboard-sales-funnel`.
