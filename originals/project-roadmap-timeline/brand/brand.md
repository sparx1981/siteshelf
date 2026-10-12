# Orbit Notes — brand kit

*Note-taking product roadmap.* Generated from the SiteShelf listing **Project Roadmap Timeline** (Timeline); every value below is read from that page, not invented.

> **See what ships, and when**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Sora |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **orbit** glyph. An orbit ring matches the name and loops neatly around a notes product. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F4F6FA` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#172033` | Body and heading text |
| textMuted | `#62708A` | Secondary text, captions |
| primary | `#2F6BFF` | Main actions, links, brand colour |
| secondary | `#172033` | Highlights, charts, second accent |
| border | `#172033` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#172033` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 15.04:1 | pass | pass |
| Muted text on background | 4.62:1 | pass | pass |
| Primary on background | 4.16:1 | fail | pass |
| Text on primary | 4.50:1 | fail | pass |
| Text on surface | 16.27:1 | pass | pass |

**Colours seen on the page** (share of use): `#F4F6FA` 81.0%, `#2F6BFF` 6.6%, `#12A37A` 5.6%, `#8B97AD` 3.2%, `#F59E0B` 1.9%, `#172033` 1.6%, `#E5484D` 0.1%, `#62708A` 0.0%, `#2B1D00` 0.0%

## Typography

- Headings: **Sora** (weight 700)
- Body: **Sora**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Sora | 20 px | 700 | 30px | normal |
| Button | Sora | 13 px | 600 | 19.5px | normal |

## Shape, space and motion

- Radius: sm 10 px, md 16 px, lg 16 px, pill (fully rounded)
- Shadows: sm: `rgba(0, 0, 0, 0.133) 0px 1px 3px 0px` · md: `rgba(23, 32, 51, 0.133) 0px 2px 6px 0px` · lg: `rgba(0, 0, 0, 0.133) 0px 1px 3px 0px`
- Spacing: base unit 4 px; common steps 3 px, 6 px, 8 px, 10 px, 12 px, 14 px, 16 px, 20 px
- Layout: container 1100 px; breakpoints 700 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** organised, candid, steady.

Orbit Notes writes roadmaps the way a good product team does: clear about what is planned, in progress, shipped or at risk. Status words are exact and dates are never a surprise.

**Do**

- Use the four statuses exactly: planned, in progress, shipped, at risk
- Put dates and owners in the first line of an item
- Explain slips in one sentence

**Do not**

- Do not promise dates without a status
- Avoid vague words like soon or later
- Never hide at-risk items

## Taglines

1. See what ships, and when
2. The plan, out in the open
3. Four lanes, one honest roadmap
4. Quarter by quarter, no spin
5. Know what is next

**Boilerplate:** Orbit Notes is a note-taking product that shares its quarterly roadmap in public, organised into Design, Web, Mobile and Platform lanes with honest status for each item.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Zoom to month |
| secondaryCta | Today |
| success | Item updated. |
| error | Could not open that item. Please try again. |
| empty | No items in this lane. |

---
Source listing key `o:project-roadmap-timeline`. Rebuild with `python3 scripts/brand-kit/build.py o:project-roadmap-timeline`.
