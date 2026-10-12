# The Slow Dispatch — brand kit

*Weekly letter on craft, cities and small tools.* Generated from the SiteShelf listing **Newsletter Archive** (Blog); every value below is read from that page, not invented.

> **A weekly letter, worth the walk**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Playfair Display |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **drop** glyph on a circle tile. An ink drop suits a letter about writing, sketching and craft. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F7F2E9` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#4A4237` | Body and heading text |
| textMuted | `#1D1A16` | Secondary text, captions |
| primary | `#C8402A` | Main actions, links, brand colour |
| secondary | `#E1968A` | Highlights, charts, second accent |
| border | `#1D1A16` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#E8AFA6` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 8.86:1 | pass | pass |
| Muted text on background | 15.54:1 | pass | pass |
| Primary on background | 4.46:1 | fail | pass |
| Text on primary | 4.97:1 | pass | pass |
| Text on surface | 9.88:1 | pass | pass |

**Colours seen on the page** (share of use): `#F7F2E9` 96.4%, `#FFFFFF` 1.4%, `#1D1A16` 1.1%, `#4A4237` 0.7%, `#6D655A` 0.2%, `#C8402A` 0.1%, `#3C352C` 0.1%, `#E1968A` 0.0%, `#E8AFA6` 0.0%

## Typography

- Headings: **Playfair Display** (weight 900)
- Body: **Source Serif 4**
- Google Fonts: `https://fonts.googleapis.com/css2?family=DM+Sans:wght@500;700&family=Playfair+Display:ital,wght@0,700;1,900&family=Source+Serif+4:wght@400;600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Playfair Display | 104 px | 900 | 98.8px | -2.08px |
| Heading / H2 | Playfair Display | 42 px | 700 | 46.2px | normal |
| Subheading / H3 | Playfair Display | 24 px | 700 | normal | normal |
| Body | Source Serif 4 | 17 px | 400 | 26.35px | normal |
| Button | DM Sans | 14 px | 700 | normal | normal |

## Shape, space and motion

- Radius: sm 2 px, md 2 px, lg 2 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 4 px, 6 px, 8 px, 10 px, 12 px, 14 px, 16 px, 18 px, 20 px
- Layout: container 1100 px; breakpoints 820 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** thoughtful, dry, generous.

Sounds like a friend's long, well-edited email: curious, a little wry and in no rush. It recommends one thing worth the walk and trusts readers to follow a tangent.

**Do**

- Open with a specific object, person or street
- Give reading time and issue number
- End each issue with one recommendation

**Do not**

- Do not use growth-newsletter phrases like unmissable
- Do not exaggerate subject lines
- Do not pad issues with filler links

## Taglines

1. A weekly letter, worth the walk
2. Craft, cities and small tools
3. Read slowly, think a little longer
4. Good things, made by hand
5. One letter, no rush

**Boilerplate:** The Slow Dispatch is a weekly letter on craft, cities and small tools, with a featured essay, reader questions and one recommendation worth walking to, archived back to its first issue.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Read issue 38 |
| secondaryCta | Subscribe |
| success | You're subscribed. Issue 39 lands on Friday. |
| error | That email address doesn't look right. Please check it. |
| empty | No issues match that search. |

---
Source listing key `o:newsletter-archive`. Rebuild with `python3 scripts/brand-kit/build.py o:newsletter-archive`.
