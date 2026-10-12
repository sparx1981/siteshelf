# Larchwood School — brand kit

*School gradebook for Year 9 Science.* Generated from the SiteShelf listing **Teacher Gradebook** (Dashboard); every value below is read from that page, not invented.

> **Every mark in its place**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Newsreader |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **sprout** glyph on a squircle tile. A young sprout stands for pupils growing, echoing the school's tree name. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F8F5EE` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#22201A` | Body and heading text |
| textMuted | `#66604F` | Secondary text, captions |
| primary | `#1F6B47` | Main actions, links, brand colour |
| secondary | `#2A5FC7` | Highlights, charts, second accent |
| border | `#F3CFCC` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#A1C1B2` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 14.96:1 | pass | pass |
| Muted text on background | 5.76:1 | pass | pass |
| Primary on background | 5.93:1 | pass | pass |
| Text on primary | 6.46:1 | pass | pass |
| Text on surface | 16.28:1 | pass | pass |

**Colours seen on the page** (share of use): `#F8F5EE` 97.1%, `#2A5FC7` 0.6%, `#22201A` 0.4%, `#E8F0FF` 0.4%, `#D1383A` 0.4%, `#2F9E5A` 0.3%, `#1F6B47` 0.3%, `#7BB342` 0.2%, `#66604F` 0.2%, `#EFE9D8` 0.1%

## Typography

- Headings: **Newsreader** (weight 600)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=DM+Mono:wght@400&family=Inter:wght@400;500;600&family=Newsreader:wght@600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Newsreader | 28 px | 600 | normal | normal |
| Heading / H2 | Newsreader | 18 px | 600 | normal | normal |
| Button | Inter | 13 px | 600 | normal | normal |
| Caption / eyebrow | Inter | 13 px | 500 | normal | normal |

## Shape, space and motion

- Radius: sm 5 px, md 10 px, lg 14 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 2 px; common steps 2 px, 3 px, 4 px, 6 px, 7 px, 8 px, 10 px, 12 px, 14 px
- Layout: container 1500 px; breakpoints 1100 px
- Motion: 300 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** orderly, fair, supportive.

Sounds like a thoughtful head of department writing a report: measured, specific and kind. It states marks and trends plainly and flags concern without labelling a child.

**Do**

- Pair every figure with its category and weight
- Flag students as needing support, not failing
- Use grade letters and numbers consistently

**Do not**

- Do not use harsh words like weak or lazy
- Do not display a mark without its context
- Do not use edtech slang

## Taglines

1. Every mark in its place
2. Know where each student stands
3. Fair grades, clear next steps
4. Averages that update as you type
5. Year 9 Science, sorted

**Boilerplate:** Larchwood School uses this gradebook to keep Year 9 Science marks, weighted category totals and at-risk flags in one editable grid that updates as teachers type.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Export CSV |
| secondaryCta | Sort by total |
| success | Mark saved. Averages updated. |
| error | That mark is out of range. Enter 0 to 100. |
| empty | No marks entered yet for this category. |

---
Source listing key `o:dashboard-gradebook`. Rebuild with `python3 scripts/brand-kit/build.py o:dashboard-gradebook`.
