# V Vortex — brand kit

*Creative studio of designer Sarah Vortex.* Generated from the SiteShelf listing **AI Designer Portfolio** (Landing Page); every value below is read from that page, not invented.

> **Build the next wave, boldly**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **wave** glyph on a circle tile. A wave echoes the next wave in the headline and the vortex of the name. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#FFFFFF` | Page background |
| surface | `#E0EBF0` | Cards, panels, raised areas |
| text | `#051A24` | Body and heading text |
| textMuted | `#273C46` | Secondary text, captions |
| primary | `#3A1C08` | Main actions, links, brand colour |
| secondary | `#173A42` | Highlights, charts, second accent |
| border | `#DCDFE0` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#ACA097` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 17.80:1 | pass | pass |
| Muted text on background | 11.53:1 | pass | pass |
| Primary on background | 15.56:1 | pass | pass |
| Text on primary | 15.56:1 | pass | pass |
| Text on surface | 14.67:1 | pass | pass |

**Colours seen on the page** (share of use): `#FFFFFF` 50.9%, `#E0EBF0` 36.6%, `#051A24` 8.5%, `#173A42` 0.9%, `#000000` 0.8%, `#8A4A1A` 0.7%, `#5E3010` 0.5%, `#3A1C08` 0.5%, `#7FA3A8` 0.3%, `#4F7F86` 0.3%

## Typography

- Headings: **Inter** (weight 500)
- Body: **Inter**
- Mono: **DM Mono**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Instrument+Serif:ital@0;1&family=DM+Mono:wght@400;500&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Inter | 52 px | 500 | 54.08px | -1.82px |
| Heading / H2 | Inter | 52 px | 500 | 54.6px | -1.56px |
| Subheading / H3 | Inter | 20 px | 500 | 30px | normal |
| Body | Inter | 15 px | 400 | 22.5px | normal |
| Button | Inter | 14 px | 500 | 21px | normal |
| Navigation | Inter | 15 px | 400 | 22.5px | normal |
| Caption / eyebrow | Inter | 15 px | 400 | 15px | normal |
| Mono | DM Mono | 14 px | 400 | 21px | normal |

## Shape, space and motion

- Radius: sm 16 px, md 20 px, lg 24 px, pill (fully rounded)
- Shadows: sm: `rgba(5, 26, 36, 0.3) 0px 1px 2px 0px, rgba(5, 26, 36, 0.18) 0px 4px 10px 0px, rgba(255, 255, 255, 0.18) 0px 1px 0px 0px inset` · md: `rgba(5, 26, 36, 0.08) 0px 1px 3px 0px, rgba(5, 26, 36, 0.06) 0px 8px 24px 0px` · lg: `rgba(0, 0, 0, 0.12) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px`
- Spacing: base unit 4 px; common steps 3 px, 8 px, 10 px, 12 px, 16 px, 20 px, 24 px, 28 px, 40 px
- Layout: container 1280 px; breakpoints 767 px, 768 px, 1024 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** bold, confident, modern.

Speaks like a designer who once worked at Apple and knows how to say it with restraint: direct, ambitious and a little cinematic. Short lines carry the weight.

**Do**

- Make bold claims in short lines
- Lead with the work, not credentials
- Invite a chat rather than a pitch

**Do not**

- No jargon like synergy or disrupt
- Avoid listing software skills
- Never apologise for ambition

## Taglines

1. Build the next wave, boldly
2. Design with nerve
3. Work that makes people look twice
4. Bold ideas, carefully made
5. Let's make something worth watching

**Boilerplate:** V Vortex is the creative studio of Sarah Vortex, a former Apple designer, building bold brands, products and digital experiences for ambitious clients.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Start a chat |
| secondaryCta | View projects |
| success | Message sent. Talk soon. |
| error | That didn't send. Please try again. |
| empty | No projects to show yet. |

---
Source listing key `m:ai-designer-portfolio`. Rebuild with `python3 scripts/brand-kit/build.py m:ai-designer-portfolio`.
