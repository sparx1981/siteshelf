# Odile Raskin — brand kit

*Product designer for transit and civic services.* Generated from the SiteShelf listing **Case Study Portfolio Page** (Portfolio); every value below is read from that page, not invented.

> **Design that respects your morning**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Instrument Serif |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **monogram** glyph. A monogram suits a personal portfolio where the designer's name is the brand. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#FBFAF7` | Page background |
| surface | `#16161A` | Cards, panels, raised areas |
| text | `#16161A` | Body and heading text |
| textMuted | `#44444C` | Secondary text, captions |
| primary | `#2240E8` | Main actions, links, brand colour |
| secondary | `#FF9A62` | Highlights, charts, second accent |
| border | `#DCDAD3` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#FF9A62` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 17.29:1 | pass | pass |
| Muted text on background | 9.24:1 | pass | pass |
| Primary on background | 6.78:1 | pass | pass |
| Text on primary | 7.08:1 | pass | pass |
| Text on surface | 1.00:1 | fail | fail |

**Colours seen on the page** (share of use): `#FBFAF7` 66.1%, `#16161A` 20.0%, `#E9EDFF` 5.3%, `#E8E6E0` 4.6%, `#2240E8` 1.3%, `#7A5CFF` 1.2%, `#FF9A62` 1.2%, `#FDE6D8` 0.1%, `#44444C` 0.1%, `#B5B3AC` 0.1%

## Typography

- Headings: **Instrument Serif** (weight 400)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Instrument+Serif:ital@0;1&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Instrument Serif | 110 px | 400 | 104.5px | -2.2px |
| Heading / H2 | Instrument Serif | 60 px | 400 | 63px | -0.6px |
| Subheading / H3 | Inter | 19 px | 700 | 31.35px | normal |
| Body | Inter | 21 px | 400 | 34.65px | normal |
| Button | Inter | 19 px | 600 | normal | normal |
| Navigation | Inter | 13 px | 600 | 21.45px | normal |
| Caption / eyebrow | Inter | 12 px | 400 | 19.8px | 1.2px |

## Shape, space and motion

- Radius: sm 6 px, md 14 px, lg 26 px, pill (fully rounded)
- Shadows: sm: `rgba(0, 0, 0, 0.08) 0px 4px 18px 0px` · md: `rgba(0, 0, 0, 0.25) 0px 20px 50px 0px` · lg: `rgba(0, 0, 0, 0.08) 0px 4px 18px 0px`
- Spacing: base unit 2 px; common steps 6 px, 7 px, 8 px, 10 px, 12 px, 14 px, 20 px, 22 px, 24 px
- Layout: container 1040 px; breakpoints 720 px, 1100 px
- Motion: 250 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** reflective, rigorous, warm.

Odile Raskin writes in the first person with the clarity of a good case study: what was wrong, what was tried and what changed. She credits the users and the numbers before herself.

**Do**

- Lead each section with the problem and a number
- Explain design decisions as trade-offs
- Credit users and teammates by role

**Do not**

- Do not claim sole credit for team work
- Avoid vague outcomes like improved experience
- Never use design buzzwords

## Taglines

1. Design that respects your morning
2. Listen, rebuild, prove it
3. Clear services for real commutes
4. Trust the clock, trust the bus
5. Designing for people on the move

**Boilerplate:** Odile Raskin is an independent product designer who redesigns regional transport and civic services, with case studies that show the problem, the decisions and the measured results.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | View case study |
| secondaryCta | Next project |
| success | Message sent. I will reply soon. |
| error | That did not send. Please email me directly. |
| empty | No projects in this category yet. |

---
Source listing key `o:portfolio-case-study`. Rebuild with `python3 scripts/brand-kit/build.py o:portfolio-case-study`.
