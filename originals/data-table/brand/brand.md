# Tallybook — brand kit

*Customer records, sorted and counted.* Generated from the SiteShelf listing **Data Table** (Dashboard); every value below is read from that page, not invented.

> **Every customer, in order**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **grid** glyph. A grid of rows and columns is the plainest portrait of a table. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F8FAFC` | Page background |
| surface | `#DCFCE7` | Cards, panels, raised areas |
| text | `#0F172A` | Body and heading text |
| textMuted | `#64748B` | Secondary text, captions |
| primary | `#4F46E5` | Main actions, links, brand colour |
| secondary | `#15803D` | Highlights, charts, second accent |
| border | `#E2E8F0` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#B5B1F4` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 17.06:1 | pass | pass |
| Muted text on background | 4.55:1 | pass | pass |
| Primary on background | 6.01:1 | pass | pass |
| Text on primary | 6.29:1 | pass | pass |
| Text on surface | 16.26:1 | pass | pass |

**Colours seen on the page** (share of use): `#F8FAFC` 97.4%, `#DCFCE7` 0.7%, `#4F46E5` 0.5%, `#0F172A` 0.4%, `#64748B` 0.3%, `#FEE2E2` 0.2%, `#0891B2` 0.2%, `#7C3AED` 0.1%, `#16A34A` 0.1%, `#E2E8F0` 0.1%

## Typography

- Headings: **Inter** (weight 600)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Inter | 26 px | 600 | 31.2px | -0.52px |
| Button | Inter | 14 px | 500 | normal | normal |
| Caption / eyebrow | Inter | 15 px | 400 | 18px | -0.52px |

## Shape, space and motion

- Radius: sm 8 px, md 14 px, lg 14 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 2 px, 3 px, 4 px, 6 px, 8 px, 10 px, 12 px, 14 px, 16 px
- Layout: container 1180 px; breakpoints 760 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** orderly, practical, plain-spoken.

Tallybook sounds like a tidy bookkeeper: clear about counts, statuses and what a bulk action will touch. It uses ordinary business words and never dresses up a spreadsheet.

**Do**

- Put the count in the label, such as '3 selected'
- Name each status in a single word
- Say exactly how many rows an action affects

**Do not**

- Use words like 'leverage' or 'empower'
- Hide what a bulk action will change
- Write long empty-state messages

## Taglines

1. Every customer, in order
2. Sort it, filter it, done
3. Counts you can trust
4. Records without the clutter
5. Find the row, skip the hunt

**Boilerplate:** Tallybook is a customer data table with sorting, filters, bulk actions and export, built for small teams that need to find and update accounts quickly.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Add customer |
| secondaryCta | Export |
| success | 3 customers exported. |
| error | Could not export. Check your selection and retry. |
| empty | No customers match these filters. |

---
Source listing key `o:data-table`. Rebuild with `python3 scripts/brand-kit/build.py o:data-table`.
