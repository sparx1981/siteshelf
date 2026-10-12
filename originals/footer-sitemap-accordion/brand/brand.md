# Northfold — brand kit

*Product company with a tidy, collapsible site footer.* Generated from the SiteShelf listing **Footer with Accordion Sitemap** (Footer); every value below is read from that page, not invented.

> **Everything, neatly in its place**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Manrope |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **diamond** glyph on a squircle tile. A folded diamond echoes the fold-out accordion and the north in the name. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F1F4F0` | Page background |
| surface | `#101418` | Cards, panels, raised areas |
| text | `#5B665F` | Body and heading text |
| textMuted | `#101418` | Secondary text, captions |
| primary | `#B6F23D` | Main actions, links, brand colour |
| secondary | `#648522` | Highlights, charts, second accent |
| border | `#2B3641` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#648522` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 5.39:1 | pass | pass |
| Muted text on background | 16.68:1 | pass | pass |
| Primary on background | 1.20:1 | fail | fail |
| Text on primary | 14.74:1 | pass | pass |
| Text on surface | 3.09:1 | fail | pass |

**Colours seen on the page** (share of use): `#F1F4F0` 72.7%, `#101418` 26.5%, `#1A2128` 0.5%, `#AEB8C2` 0.2%, `#FFFFFF` 0.0%, `#5B665F` 0.0%, `#D4DDE5` 0.0%, `#B6F23D` 0.0%, `#648522` 0.0%, `#2B3641` 0.0%

## Typography

- Headings: **Manrope** (weight 700)
- Body: **Manrope**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;800&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Manrope | 34 px | 700 | normal | normal |
| Subheading / H3 | Manrope | 18.7 px | 700 | normal | normal |
| Body | Manrope | 15 px | 400 | 24px | normal |
| Button | Manrope | 13 px | 800 | normal | 1.3px |

## Shape, space and motion

- Radius: sm 8 px, md 8 px, lg 8 px, pill (fully rounded)
- Shadows: sm: `rgba(182, 242, 61, 0.18) 0px 0px 0px 4px` · md: `rgba(182, 242, 61, 0.18) 0px 0px 0px 4px` · lg: `rgba(182, 242, 61, 0.18) 0px 0px 0px 4px`
- Spacing: base unit 4 px; common steps 4 px, 6 px, 8 px, 10 px, 12 px, 16 px, 22 px, 24 px, 32 px
- Layout: container 1100 px; breakpoints 760 px, 761 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** orderly, modern, helpful.

Plain-spoken and structured, like a good sitemap: everything has a place and a label that says what it is. It reassures with status and clarity, not slogans.

**Do**

- Label links with the noun a visitor expects
- Keep status messages literal, such as all systems normal
- Write headings in sentence-length fragments, never puns

**Do not**

- Clever link names that hide the destination
- Legal text in marketing voice
- Exclamation marks in a footer

## Taglines

1. Everything, neatly in its place
2. Find your way in one fold
3. Clear links, calm pages
4. Navigation without the maze
5. All systems normal, all paths clear

**Boilerplate:** Northfold makes software for small teams, and keeps its site simple with clear sections for product, company, resources and legal, plus a live status indicator.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Back to top |
| secondaryCta | Open section |
| success | Language updated |
| error | Could not change currency. Try again |
| empty | No links in this section |

---
Source listing key `o:footer-sitemap-accordion`. Rebuild with `python3 scripts/brand-kit/build.py o:footer-sitemap-accordion`.
