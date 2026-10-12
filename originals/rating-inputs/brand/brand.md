# Crumb & Co. — brand kit

*Bakery box subscription asking how it went.* Generated from the SiteShelf listing **Rating & Slider Inputs** (Form Controls); every value below is read from that page, not invented.

> **How was your box?**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Nunito |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **bag** glyph on a circle tile. A paper bag stands for the bakery box in hand. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#FFF8EF` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#2B2118` | Body and heading text |
| textMuted | `#2B1700` | Secondary text, captions |
| primary | `#F59E0B` | Main actions, links, brand colour |
| secondary | `#2B2118` | Highlights, charts, second accent |
| border | `#F0E4D0` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#2B2118` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 14.94:1 | pass | pass |
| Muted text on background | 16.26:1 | pass | pass |
| Primary on background | 2.04:1 | fail | fail |
| Text on primary | 9.15:1 | pass | pass |
| Text on surface | 15.75:1 | pass | pass |

**Colours seen on the page** (share of use): `#FFF8EF` 98.6%, `#F59E0B` 0.8%, `#2B2118` 0.2%, `#F3E8D4` 0.2%, `#86735E` 0.1%, `#FDE68A` 0.0%, `#2B1700` 0.0%, `#B45309` 0.0%, `#0B0B0F` 0.0%

## Typography

- Headings: **Nunito** (weight 800)
- Body: **Nunito**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Nunito:wght@600;700;800&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Nunito | 26 px | 800 | 31.2px | normal |
| Body | Nunito | 16 px | 600 | 24px | normal |
| Button | Nunito | 22 px | 800 | normal | normal |

## Shape, space and motion

- Radius: sm 8 px, md 10 px, lg 12 px, pill (fully rounded)
- Shadows: sm: `rgba(180, 83, 9, 0.08) 0px 18px 40px 0px` · md: `rgba(180, 83, 9, 0.08) 0px 18px 40px 0px` · lg: `rgba(180, 83, 9, 0.08) 0px 18px 40px 0px`
- Spacing: base unit 2 px; common steps 2 px, 3 px, 4 px, 6 px, 8 px, 9 px, 12 px, 16 px, 18 px
- Layout: container 1200 px; breakpoints 480 px
- Motion: 300 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** cheerful, warm, brief.

A baker asking how the box went over a quick chat: friendly, informal and quick. The form promises about 30 seconds and keeps its promise.

**Do**

- Ask short, specific questions
- Say how long the form takes
- Thank people warmly and promptly

**Do not**

- Long surveys
- Pushy follow-ups
- Corporate language like customer satisfaction

## Taglines

1. How was your box?
2. Thirty seconds, tell us everything
3. Your feedback rises like dough
4. Tell us what you loved
5. Crumbs of thought welcome

**Boilerplate:** Crumb & Co. Bakery Box is a bakery subscription that delivers boxes of fresh bread and pastries, and invites customers to rate each box in about 30 seconds.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Send feedback |
| secondaryCta | Skip for now |
| success | Thanks. Your feedback is in the oven |
| error | That didn't send. Please try once more |
| empty | No rating yet. Tap a star |

---
Source listing key `o:rating-inputs`. Rebuild with `python3 scripts/brand-kit/build.py o:rating-inputs`.
