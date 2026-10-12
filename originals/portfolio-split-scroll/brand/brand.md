# Noor Linden — brand kit

*Independent product designer.* Generated from the SiteShelf listing **Split Scroll Portfolio** (Portfolio); every value below is read from that page, not invented.

> **Calm interfaces for everyday tools**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Instrument Serif |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **monogram** glyph on a squircle tile. A serif initial letter keeps a personal portfolio human and understated. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F3F0EA` | Page background |
| surface | `#101010` | Cards, panels, raised areas |
| text | `#4A463E` | Body and heading text |
| textMuted | `#151515` | Secondary text, captions |
| primary | `#C9F23B` | Main actions, links, brand colour |
| secondary | `#6A7A10` | Highlights, charts, second accent |
| border | `#CFC9BB` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#6A7A10` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 8.25:1 | pass | pass |
| Muted text on background | 16.06:1 | pass | pass |
| Primary on background | 1.14:1 | fail | fail |
| Text on primary | 15.20:1 | pass | pass |
| Text on surface | 2.03:1 | fail | fail |

**Colours seen on the page** (share of use): `#F3F0EA` 67.4%, `#101010` 9.3%, `#1F3A2E` 9.3%, `#FFD166` 3.0%, `#F6D9A8` 2.8%, `#C9F23B` 2.7%, `#FFB347` 2.1%, `#D5F5FF` 2.1%, `#FFFFFF` 0.7%, `#5AA9FF` 0.5%

## Typography

- Headings: **Instrument Serif** (weight 400)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Instrument Serif | 96 px | 400 | 91.2px | -0.96px |
| Heading / H2 | Instrument Serif | 84 px | 400 | 79.8px | normal |
| Subheading / H3 | Instrument Serif | 54 px | 400 | 54px | normal |
| Body | Inter | 17 px | 400 | 26.35px | normal |
| Button | Arial | 16 px | 400 | normal | normal |

## Shape, space and motion

- Radius: sm 12 px, md 20 px, lg 50 px, pill (fully rounded)
- Shadows: sm: `rgba(34, 197, 94, 0.2) 0px 0px 0px 4px` · md: `rgb(255, 207, 86) 0px 0px 120px 0px` · lg: `rgba(34, 197, 94, 0.2) 0px 0px 0px 4px`
- Spacing: base unit 4 px; common steps 2 px, 6 px, 8 px, 12 px, 14 px, 18 px, 28 px, 32 px, 72 px
- Layout: container 1200 px; breakpoints 900 px
- Motion: 300 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** considered, calm, exacting.

Noor Linden writes in first person with a quiet confidence: short, specific and light on adjectives. Each project is described by what it solved and for whom, with the year and role stated.

**Do**

- Write in first person, present tense
- Name the problem, the user and the result
- State year and role beside every project

**Do not**

- Do not claim to be 'passionate' or 'a ninja'
- Avoid vague phrases like 'user-centred solutions'
- Never list tools instead of outcomes

## Taglines

1. Calm interfaces for everyday tools
2. From first sketch to shipped system
3. Design that stays out of the way
4. Selected work, plainly told
5. Small details, steady systems

**Boilerplate:** Noor Linden is an independent product designer who shapes calm interfaces for everyday tools, from the first sketch to the shipped design system.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | See selected work |
| secondaryCta | Say hello |
| success | Message sent. I will reply within two days. |
| error | That did not send. Please email me directly. |
| empty | No projects in this view. Try another filter. |

---
Source listing key `o:portfolio-split-scroll`. Rebuild with `python3 scripts/brand-kit/build.py o:portfolio-split-scroll`.
