# Primer Studio — brand kit

*Design studio for bold brand work.* Generated from the SiteShelf listing **New Era Bold Hero** (Agency); every value below is read from that page, not invented.

> **A new era of design starts now**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Rubik |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **aperture** glyph on a circle tile. An aperture signals a lens and a fresh view, which fits a studio promising a new era. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#21346E` | Page background |
| surface | `#0A1232` | Cards, panels, raised areas |
| text | `#FFFFFF` | Body and heading text |
| textMuted | `#B1B8CC` | Secondary text, captions |
| primary | `#172552` | Main actions, links, brand colour |
| secondary | `#3F63C4` | Highlights, charts, second accent |
| border | `#405082` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#3F63C4` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 11.79:1 | pass | pass |
| Muted text on background | 5.95:1 | pass | pass |
| Primary on background | 1.25:1 | fail | fail |
| Text on primary | 14.76:1 | pass | pass |
| Text on surface | 18.33:1 | pass | pass |

**Colours seen on the page** (share of use): `#21346E` 84.3%, `#0A1232` 6.8%, `#3F63C4` 2.9%, `#18285A` 2.9%, `#2A4590` 2.9%, `#FFFFFF` 0.2%, `#161A20` 0.0%, `#B1B8CC` 0.0%, `#405082` 0.0%

## Typography

- Headings: **Rubik** (weight 700)
- Body: **Rubik**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Rubik | 100 px | 700 | 98px | -4px |
| Button | Rubik | 20 px | 700 | 20px | normal |

## Shape, space and motion

- Radius: sm 0 px, md 0 px, lg 0 px
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 40 px, 64 px
- Layout: container 1280 px; breakpoints 400 px, 768 px, 1024 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** bold, forward, direct.

Primer Studio writes big, short headlines that announce a change. It sounds optimistic and confident, and it always points to the next step.

**Do**

- Use big, short headlines with a clear verb
- State the shift, then the offer
- Keep body copy to two lines

**Do not**

- Do not use cliches like game-changing
- Avoid long explanations
- Never apologise for ambition

## Taglines

1. A new era of design starts now
2. Bold work for brave brands
3. Start with a better first impression
4. Design that moves first
5. Make the next thing better

**Boilerplate:** Primer Studio is a design studio creating bold brands, websites and campaigns for companies ready to move first and look ahead.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Get Started |
| secondaryCta | See the work |
| success | Thanks. We will be in touch. |
| error | That did not send. Please try again. |
| empty | No projects yet. |

---
Source listing key `m:new-era-bold-hero`. Rebuild with `python3 scripts/brand-kit/build.py m:new-era-bold-hero`.
