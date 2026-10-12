# BIONOVA — brand kit

*Biotech consultancy that turns research into companies.* Generated from the SiteShelf listing **Bionova Biotech** (SaaS); every value below is read from that page, not invented.

> **World-class consultants for biotech leaders**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Poppins |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **sprout** glyph. A sprout suggests early-stage science growing into a company. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#FFFFFF` | Page background |
| surface | `#000000` | Cards, panels, raised areas |
| text | `#2B2B2B` | Body and heading text |
| textMuted | `#757575` | Secondary text, captions |
| primary | `#94C2F9` | Main actions, links, brand colour |
| secondary | `#2E5FD0` | Highlights, charts, second accent |
| border | `#2B2B2B` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#2E5FD0` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 14.16:1 | pass | pass |
| Muted text on background | 4.61:1 | pass | pass |
| Primary on background | 1.85:1 | fail | fail |
| Text on primary | 10.61:1 | pass | pass |
| Text on surface | 1.48:1 | fail | fail |

**Colours seen on the page** (share of use): `#FFFFFF` 84.7%, `#000000` 14.6%, `#94C2F9` 0.4%, `#2B2B2B` 0.3%, `#5B8DEF` 0.0%, `#3F78E8` 0.0%, `#2E5FD0` 0.0%, `#7FA8F0` 0.0%, `#757575` 0.0%

## Typography

- Headings: **Poppins** (weight 400)
- Body: **Poppins**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Poppins | 72 px | 400 | 77.76px | -1.8px |
| Heading / H2 | Poppins | 30 px | 500 | 36px | -0.6px |
| Subheading / H3 | Poppins | 24 px | 500 | 28.8px | -0.48px |
| Body | Poppins | 14 px | 400 | 22.4px | normal |
| Button | Poppins | 18 px | 500 | 23.4px | normal |
| Navigation | Poppins | 20 px | 700 | normal | -0.5px |

## Shape, space and motion

- Radius: sm 40 px, md 40 px, lg 40 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 5 px, 8 px, 12 px, 14 px, 16 px, 20 px, 24 px, 32 px, 40 px
- Layout: container 1200 px; breakpoints 479 px, 480 px, 768 px, 1023 px, 1024 px, 1280 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** credible, forward, human.

A seasoned biotech advisor: confident, clear and unshowy about science. It speaks to founders and investors as peers and keeps promises measured.

**Do**

- Name the stage, such as first protocol to first patient
- Use accurate scientific and business terms
- Show partnership with we and your

**Do not**

- Miracle-cure language
- Unexplained jargon
- Stock phrases such as disrupting healthcare

## Taglines

1. World-class consultants for biotech leaders
2. From first protocol to first patient
3. Build your bioventure with us
4. Research, ready for the real world
5. Science needs strategy too

**Boilerplate:** BIONOVA is a biotech consultancy that partners with founders, scientists and investors to turn breakthrough research into lasting companies, from first protocol to first patient.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | How do we work |
| secondaryCta | Get in touch |
| success | Thanks. A consultant will reply within two days |
| error | The message didn't send. Please retry |
| empty | No engagements to show yet |

---
Source listing key `m:bionova-biotech`. Rebuild with `python3 scripts/brand-kit/build.py m:bionova-biotech`.
