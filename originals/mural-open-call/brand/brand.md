# Merefield Works — brand kit

*Local arts council commissioning public murals.* Generated from the SiteShelf listing **Mural Open Call** (Form); every value below is read from that page, not invented.

> **A wall with something to say**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Space Grotesk |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **monogram** glyph on a squircle tile. A big yellow letter M works like a painted mural initial, bold and easy to spot from a distance. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#EFD84D` | Page background |
| surface | `#FFFDF3` | Cards, panels, raised areas |
| text | `#27271C` | Body and heading text |
| textMuted | `#615C2B` | Secondary text, captions |
| primary | `#615C2B` | Main actions, links, brand colour |
| secondary | `#8B3C28` | Highlights, charts, second accent |
| border | `#8E8C77` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#BDBBA6` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 10.48:1 | pass | pass |
| Muted text on background | 4.75:1 | pass | pass |
| Primary on background | 4.75:1 | pass | pass |
| Text on primary | 6.83:1 | pass | pass |
| Text on surface | 14.78:1 | pass | pass |

**Colours seen on the page** (share of use): `#EFD84D` 66.2%, `#FFFDF3` 30.0%, `#27271C` 3.3%, `#E6E1C8` 0.3%, `#8B3C28` 0.1%, `#615C2B` 0.1%, `#65733E` 0.0%, `#66604A` 0.0%, `#8E8C77` 0.0%, `#BDBBA6` 0.0%

## Typography

- Headings: **Space Grotesk** (weight 600)
- Body: **DM Sans**
- Google Fonts: `https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Space Grotesk | 64 px | 600 | 65.28px | -2.56px |
| Heading / H2 | Space Grotesk | 26 px | 600 | normal | normal |
| Subheading / H3 | DM Sans | 17.6 px | 700 | 27.2025px | normal |
| Body | DM Sans | 15 px | 400 | 23.25px | normal |
| Button | DM Sans | 15 px | 700 | 23.25px | normal |
| Caption / eyebrow | DM Sans | 12 px | 400 | 18.6px | normal |

## Shape, space and motion

- Radius: sm 2 px, md 3 px, lg 3 px
- Shadows: none used (flat)
- Spacing: base unit 2 px; common steps 5 px, 6 px, 7 px, 10 px, 11 px, 12 px, 15 px, 18 px, 22 px
- Layout: container 1260 px; breakpoints 760 px, 1000 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** bold, communal, encouraging.

Merefield Works speaks like a community arts officer who wants your idea on a wall. It is direct, generous with detail and clear that proposals from neighbours matter as much as those from professionals.

**Do**

- Name the wall, the street and the deadline
- Invite people by saying who can apply
- Explain the budget in plain numbers

**Do not**

- Do not use art-world jargon
- Avoid vague promises of exposure
- Never imply a decision before the review

## Taglines

1. A wall with something to say
2. Bring a new point of view
3. Paint it with passers-by
4. Proposals welcome from every neighbour
5. Bracken Lane needs your idea

**Boilerplate:** Merefield Works is a community arts council that commissions public murals, inviting local artists and neighbours to propose work for walls like the one on Bracken Lane.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Review proposal |
| secondaryCta | Save draft |
| success | Draft saved on this device. |
| error | Please complete the highlighted fields before reviewing. |
| empty | No draft saved yet. Start your proposal. |

---
Source listing key `o:mural-open-call`. Rebuild with `python3 scripts/brand-kit/build.py o:mural-open-call`.
