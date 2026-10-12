# Pacepoint — brand kit

*Project scheduling tool for teams who hate status chasing.* Generated from the SiteShelf listing **Testimonial Wall** (Testimonials); every value below is read from that page, not invented.

> **Teams that stopped chasing status updates**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Instrument Serif |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **target** glyph on a squircle tile. A target ring says hitting the date, the thing the product exists to do. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#FBFAF7` | Page background |
| surface | `#FFF0E4` | Cards, panels, raised areas |
| text | `#1E1B16` | Body and heading text |
| textMuted | `#6F695D` | Secondary text, captions |
| primary | `#F0562A` | Main actions, links, brand colour |
| secondary | `#8A2A6A` | Highlights, charts, second accent |
| border | `#EBE6DA` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#8A2A6A` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 16.44:1 | pass | pass |
| Muted text on background | 5.22:1 | pass | pass |
| Primary on background | 3.31:1 | fail | pass |
| Text on primary | 5.68:1 | pass | pass |
| Text on surface | 15.39:1 | pass | pass |

**Colours seen on the page** (share of use): `#FBFAF7` 96.2%, `#1E1B16` 1.3%, `#F0562A` 0.6%, `#F1ECE0` 0.5%, `#8A2A6A` 0.4%, `#2A1A4A` 0.4%, `#6F695D` 0.3%, `#3D6BFF` 0.2%, `#16A085` 0.2%, `#8A5CFF` 0.2%

## Typography

- Headings: **Instrument Serif** (weight 400)
- Body: **Hanken Grotesk**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;700&family=Instrument+Serif:ital@0;1&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Instrument Serif | 72 px | 400 | 72px | -1.44px |
| Body | Hanken Grotesk | 16 px | 400 | 24.8px | normal |
| Button | Hanken Grotesk | 13 px | 500 | normal | normal |

## Shape, space and motion

- Radius: sm 12 px, md 14 px, lg 18 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 2 px, 4 px, 8 px, 10 px, 12 px, 14 px, 16 px, 18 px, 20 px
- Layout: container 1160 px; breakpoints 600 px, 900 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** upbeat, grounded, sharp.

A team lead who lived the problem and shares it: relaxed, specific and a touch wry about status meetings. Customer stories are the star, in their own words.

**Do**

- Quote customers in their own words with role and company
- Quantify outcomes, such as meetings cut or days saved
- Keep the headline conversational

**Do not**

- Over-claiming results
- Anonymous testimonials
- Management buzzwords

## Taglines

1. Teams that stopped chasing status updates
2. Plans that update themselves
3. Fewer meetings, clearer schedules
4. See who's on track at a glance
5. Real teams, real relief

**Boilerplate:** Pacepoint is a project scheduling tool that keeps plans and progress in sync, so teams can stop chasing status updates; trusted by teams across industries.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Start your plan |
| secondaryCta | Filter by role |
| success | Filters applied. Showing 18 of 18 reviews |
| error | Couldn't load reviews. Try again |
| empty | No reviews match. Clear the filters |

---
Source listing key `o:testimonial-wall`. Rebuild with `python3 scripts/brand-kit/build.py o:testimonial-wall`.
