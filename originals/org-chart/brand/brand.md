# Kestrel Works — brand kit

*Product company of twenty people.* Generated from the SiteShelf listing **Org Chart** (Widgets); every value below is read from that page, not invented.

> **Who works with whom**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Manrope |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **chevrons** glyph on a squircle tile. Upward chevrons suggest a kestrel's wings and the branching lines of a chart. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F4F5F9` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#181B2A` | Body and heading text |
| textMuted | `#4338CA` | Secondary text, captions |
| primary | `#4338CA` | Main actions, links, brand colour |
| secondary | `#0EA5E9` | Highlights, charts, second accent |
| border | `#E0E3EC` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#0EA5E9` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 15.68:1 | pass | pass |
| Muted text on background | 7.25:1 | pass | pass |
| Primary on background | 7.25:1 | pass | pass |
| Text on primary | 7.90:1 | pass | pass |
| Text on surface | 17.09:1 | pass | pass |

**Colours seen on the page** (share of use): `#F4F5F9` 90.7%, `#D9DCE6` 7.6%, `#7C5CFF` 0.4%, `#0EA5E9` 0.3%, `#181B2A` 0.3%, `#6A7188` 0.2%, `#F472B6` 0.2%, `#F59E0B` 0.1%, `#10B981` 0.1%, `#4338CA` 0.0%

## Typography

- Headings: **Manrope** (weight 800)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Manrope:wght@500;600;700;800&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Manrope | 26 px | 800 | normal | -0.52px |
| Heading / H2 | Manrope | 20 px | 800 | normal | normal |
| Body | Inter | 14 px | 400 | 21px | normal |
| Button | Manrope | 13 px | 600 | normal | normal |
| Caption / eyebrow | Inter | 12.5 px | 400 | 18.75px | normal |

## Shape, space and motion

- Radius: sm 10 px, md 14 px, lg 16 px, pill (fully rounded)
- Shadows: sm: `rgb(124, 92, 255) 0px 0px 0px 2px, rgba(24, 27, 42, 0.4) 0px 10px 24px -10px` · md: `rgba(24, 27, 42, 0.25) 0px 4px 14px -8px` · lg: `rgb(124, 92, 255) 0px 0px 0px 2px, rgba(24, 27, 42, 0.4) 0px 10px 24px -10px`
- Spacing: base unit 4 px; common steps 3 px, 4 px, 6 px, 8 px, 10 px, 12 px, 14 px, 16 px, 20 px
- Layout: container 1280 px; breakpoints 900 px
- Motion: 150 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** clear, collegial, tidy.

Speaks like a well-run small company handbook: plain, helpful and a little proud of how it is organised. People are named by role first, then by what they do.

**Do**

- Give names and roles together
- Say who works with whom in one line
- Use plain job titles

**Do not**

- No hierarchy jargon like reports into
- Avoid buzzwords like rockstar
- Never hide who leads a team

## Taglines

1. Who works with whom
2. Twenty people, one clear chart
3. Find the person you need
4. Teams, mapped and named
5. See how Kestrel fits together

**Boilerplate:** Kestrel Works is a twenty-person product company organised into product, engineering, design, operations and people teams, with a chart that shows who works with whom.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Expand all |
| secondaryCta | View profile |
| success | Branch expanded. |
| error | Couldn't find that person. Check the spelling. |
| empty | No one matches that search. Try another name. |

---
Source listing key `o:org-chart`. Rebuild with `python3 scripts/brand-kit/build.py o:org-chart`.
