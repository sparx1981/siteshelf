# VIRALMEDIA — brand kit

*AI web design agency.* Generated from the SiteShelf listing **AI Designer Agency** (Landing Page); every value below is read from that page, not invented.

> **Build stunning with AI**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter Bold (stand-in for Barlow) |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **play** glyph on a squircle tile. A play button suits an agency named for video virality, set in capitals. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#000000` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#FFFFFF` | Body and heading text |
| textMuted | `#BFBFBF` | Secondary text, captions |
| primary | `#E4572E` | Main actions, links, brand colour |
| secondary | `#E9DFD0` | Highlights, charts, second accent |
| border | `#333333` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#E9DFD0` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 21.00:1 | pass | pass |
| Muted text on background | 11.42:1 | pass | pass |
| Primary on background | 5.70:1 | pass | pass |
| Text on primary | 5.33:1 | pass | pass |
| Text on surface | 1.00:1 | fail | fail |

**Colours seen on the page** (share of use): `#000000` 98.3%, `#FFFFFF` 0.7%, `#0B1020` 0.1%, `#E9DFD0` 0.1%, `#1A2230` 0.1%, `#C8C8CC` 0.1%, `#D4A24C` 0.1%, `#E4572E` 0.1%, `#CFE6F4` 0.1%, `#333333` 0.0%

## Typography

- Headings: **Barlow** (weight 500)
- Body: **Barlow**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600&family=Archivo:wght@400;500;600&family=Instrument+Serif:ital@0;1&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Barlow | 72 px | 500 | 75.6px | -2px |
| Heading / H2 | Barlow | 48 px | 500 | 52.8px | -2px |
| Subheading / H3 | Barlow | 20 px | 500 | normal | normal |
| Body | Barlow | 18 px | 400 | normal | normal |
| Button | Barlow | 14 px | 500 | normal | normal |
| Navigation | Barlow | 20 px | 600 | normal | -0.5px |

## Shape, space and motion

- Radius: sm 2 px, md 16 px, lg 16 px, pill (fully rounded)
- Shadows: sm: `rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset` · md: `rgba(0, 0, 0, 0.05) 4px 4px 4px 0px, rgba(255, 255, 255, 0.15) 0px 1px 1px 0px inset` · lg: `rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset`
- Spacing: base unit 4 px; common steps 4 px, 8 px, 10 px, 12 px, 16 px, 24 px, 32 px, 40 px, 64 px
- Layout: container 1152 px; breakpoints 480 px, 640 px, 767 px, 768 px, 1024 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** confident, punchy, stylish.

VIRALMEDIA speaks like a sleek creative director who knows the work shows itself. It is brisk and slightly theatrical, with an italic flourish on one word and no filler.

**Do**

- Lead with the result: speed, beauty, performance
- Use one italic flourish per headline
- Keep calls to action to two words

**Do not**

- Do not describe AI as 'magic' beyond the headline
- Do not use more than one exclamation mark
- Do not name tools or frameworks in the copy

## Taglines

1. Build stunning with AI
2. Websites crafted for beauty and speed
3. Fast to launch, made to last
4. Design that goes viral on its own
5. From brief to live in days

**Boilerplate:** VIRALMEDIA is an AI-powered web design agency that builds fast, beautiful websites built for lasting performance.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Get started |
| secondaryCta | Book a call |
| success | Request sent. We will be in touch within a day. |
| error | That did not send. Check your details and try again. |
| empty | No projects to show yet. |

---
Source listing key `m:ai-designer-agency`. Rebuild with `python3 scripts/brand-kit/build.py m:ai-designer-agency`.
