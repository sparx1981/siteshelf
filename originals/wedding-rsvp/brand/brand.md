# Imogen & Rafael — brand kit

*Wedding invitation for 14 June 2027.* Generated from the SiteShelf listing **Wedding RSVP** (Landing Page); every value below is read from that page, not invented.

> **Our day, in your company**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Cormorant Garamond |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **sprout** glyph on a circle tile. A botanical sprig echoes the leaves drawn through the invitation. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#FAF6EF` | Page background |
| surface | `#3D4A34` | Cards, panels, raised areas |
| text | `#6B6A5C` | Body and heading text |
| textMuted | `#3D4A34` | Secondary text, captions |
| primary | `#B8935A` | Main actions, links, brand colour |
| secondary | `#E4DCCB` | Highlights, charts, second accent |
| border | `#3D4A34` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#54442E` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 5.07:1 | pass | pass |
| Muted text on background | 8.75:1 | pass | pass |
| Primary on background | 2.65:1 | fail | fail |
| Text on primary | 6.88:1 | pass | pass |
| Text on surface | 1.72:1 | fail | fail |

**Colours seen on the page** (share of use): `#FAF6EF` 98.3%, `#B8935A` 0.8%, `#3D4A34` 0.5%, `#6B6A5C` 0.3%, `#D3C9B2` 0.1%, `#E4DCCB` 0.1%, `#A29F8C` 0.0%, `#0B0B0F` 0.0%, `#54442E` 0.0%

## Typography

- Headings: **Cormorant Garamond** (weight 400)
- Body: **Jost**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Jost:wght@300;400;500&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Cormorant Garamond | 110 px | 400 | 104.5px | -1.1px |
| Heading / H2 | Cormorant Garamond | 48 px | 500 | 52.8px | normal |
| Subheading / H3 | Cormorant Garamond | 28 px | 500 | normal | normal |
| Body | Jost | 15.5 px | 300 | 26.35px | normal |
| Button | Jost | 13 px | 500 | normal | 2.6px |
| Navigation | Jost | 13 px | 500 | normal | 2.6px |

## Shape, space and motion

- Radius: sm 2 px, md 2 px, lg 2 px, pill (fully rounded)
- Shadows: sm: `rgba(61, 74, 52, 0.4) 0px 30px 60px -40px` · md: `rgba(61, 74, 52, 0.4) 0px 30px 60px -40px` · lg: `rgba(61, 74, 52, 0.4) 0px 30px 60px -40px`
- Spacing: base unit 2 px; common steps 2 px, 6 px, 8 px, 10 px, 16 px, 18 px, 28 px, 30 px, 34 px
- Layout: container 1200 px; breakpoints 720 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** romantic, gracious, light.

Imogen & Rafael write like a wedding invitation from two people who love their guests: warm, a little formal and slightly playful. They give the practical details first and flourish second.

**Do**

- Give the date, time and place plainly
- Thank guests by name
- Keep tone formal in nouns, relaxed in verbs

**Do not**

- Do not use 'blessed' or 'forever' as filler
- Do not lecture about the dress code
- Do not ask for gifts in the invitation

## Taglines

1. Our day, in your company
2. Together at Hollin Court Gardens
3. Please come and celebrate with us
4. 14 June 2027, we hope you join
5. A garden, a vow, a long table

**Boilerplate:** Imogen and Rafael are marrying on 14 June 2027 at Hollin Court Gardens, and this page gathers the schedule, venue details and RSVP for their guests.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | RSVP |
| secondaryCta | Continue |
| success | Thank you. We have your reply and cannot wait to see you. |
| error | Please add a name for each guest before you continue. |
| empty | No guests added yet. Tell us who is coming. |

---
Source listing key `o:wedding-rsvp`. Rebuild with `python3 scripts/brand-kit/build.py o:wedding-rsvp`.
