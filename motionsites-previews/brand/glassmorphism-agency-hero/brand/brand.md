# Prismlane — brand kit

*Digital design agency in glass and light.* Generated from the SiteShelf listing **Glassmorphism Agency Hero** (Agency); every value below is read from that page, not invented.

> **Your vision, our digital reality**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Plus Jakarta Sans |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **diamond** glyph. A faceted diamond reflects the prism in the name and the glass finish. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#010101` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#FFFFFF` | Body and heading text |
| textMuted | `#A6A6A6` | Secondary text, captions |
| primary | `#E7B6F5` | Main actions, links, brand colour |
| secondary | `#983AD6` | Highlights, charts, second accent |
| border | `#252525` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#983AD6` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 20.87:1 | pass | pass |
| Muted text on background | 8.57:1 | pass | pass |
| Primary on background | 12.33:1 | pass | pass |
| Text on primary | 11.61:1 | pass | pass |
| Text on surface | 1.00:1 | fail | fail |

**Colours seen on the page** (share of use): `#010101` 98.6%, `#FFFFFF` 0.9%, `#E7B6F5` 0.3%, `#B25CE0` 0.3%, `#FA93FA` 0.0%, `#C967E8` 0.0%, `#983AD6` 0.0%, `#A6A6A6` 0.0%, `#252525` 0.0%

## Typography

- Headings: **Plus Jakarta Sans** (weight 700)
- Body: **Plus Jakarta Sans**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Plus Jakarta Sans | 80 px | 700 | 84px | -2.8px |
| Body | Plus Jakarta Sans | 18 px | 400 | 28.8px | normal |

## Shape, space and motion

- Radius: sm 8 px, md 8 px, lg 8 px, pill (fully rounded)
- Shadows: sm: `rgba(201, 103, 232, 0.65) 0px 0px 18px 0px` · md: `rgba(201, 103, 232, 0.65) 0px 0px 18px 0px` · lg: `rgba(201, 103, 232, 0.65) 0px 0px 18px 0px`
- Spacing: base unit 4 px; common steps 5 px, 6 px, 8 px, 10 px, 14 px, 20 px, 26 px, 32 px, 36 px
- Layout: container 1100 px; breakpoints 760 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** bold, glossy, ambitious.

A confident agency pitch with a taste for polish: direct, glossy and quick to promise growth. Short claims in the first person plural.

**Do**

- Pair design and business results in one sentence
- Use we and your, not the agency
- Keep headlines to four or five words

**Do not**

- Vague superlatives like stunning
- Jargon-heavy process talk
- Promises without a mechanism

## Taglines

1. Your vision, our digital reality
2. Design that moves your business
3. Bold ideas, polished delivery
4. See the light through glass
5. Modern design that grows

**Boilerplate:** Prismlane is a digital design agency that turns bold ideas into modern interfaces and brand experiences built to grow its clients' businesses.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Start a project |
| secondaryCta | See our work |
| success | Brief received. We'll be in touch |
| error | The form hit a snag. Please try again |
| empty | No case studies yet |

---
Source listing key `m:glassmorphism-agency-hero`. Rebuild with `python3 scripts/brand-kit/build.py m:glassmorphism-agency-hero`.
