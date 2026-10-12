# Synapse — brand kit

*Automated testing and deployment platform.* Generated from the SiteShelf listing **Synapse Dark Hero** (SaaS); every value below is read from that page, not invented.

> **Where innovation meets execution**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **chip** glyph on a squircle tile. A chip says automated systems and engineering at once, in a clean shape. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#000000` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#FFFFFF` | Body and heading text |
| textMuted | `#A6A6A6` | Secondary text, captions |
| primary | `#FFFFFF` | Main actions, links, brand colour |
| secondary | `#8C8C8C` | Highlights, charts, second accent |
| border | `#FFFFFF` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#8C8C8C` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 21.00:1 | pass | pass |
| Muted text on background | 8.63:1 | pass | pass |
| Primary on background | 21.00:1 | pass | pass |
| Text on primary | 19.64:1 | pass | pass |
| Text on surface | 1.00:1 | fail | fail |

**Colours seen on the page** (share of use): `#000000` 99.6%, `#FFFFFF` 0.3%, `#C9CCD3` 0.1%, `#111111` 0.0%, `#A6A6A6` 0.0%, `#8C8C8C` 0.0%

## Typography

- Headings: **Inter** (weight 500)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Inter | 80 px | 500 | 81.6px | -3.6px |
| Body | Inter | 18 px | 400 | 28.8px | normal |
| Navigation | Inter | 20 px | 500 | normal | -0.6px |

## Shape, space and motion

- Radius: sm 0 px, md 0 px, lg 0 px, pill (fully rounded)
- Shadows: sm: `rgba(255, 255, 255, 0.6) 0px 1px 0px 0px inset, rgba(255, 255, 255, 0.12) 0px 4px 20px 0px` · md: `rgba(255, 255, 255, 0.6) 0px 1px 0px 0px inset, rgba(255, 255, 255, 0.12) 0px 4px 20px 0px` · lg: `rgba(255, 255, 255, 0.6) 0px 1px 0px 0px inset, rgba(255, 255, 255, 0.12) 0px 4px 20px 0px`
- Spacing: base unit 4 px; common steps 6 px, 8 px, 10 px, 12 px, 14 px, 16 px, 20 px, 24 px, 26 px
- Layout: container 1100 px; breakpoints 640 px, 900 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** sharp, minimal, assured.

Synapse speaks in terse, engineer-friendly lines that put speed and confidence first. It states what is automated and how fast.

**Do**

- Name what is automated: tests, builds, deploys
- Quote time saved in minutes
- Keep sentences under fifteen words

**Do not**

- Do not use vague innovation talk
- Avoid long feature lists
- Never hide behind buzzwords

## Taglines

1. Where innovation meets execution
2. Test in minutes, deploy with confidence
3. Ship every release faster
4. Automated testing, calm deploys
5. From idea to release, quickly

**Boilerplate:** Synapse automates testing and deployment so engineering teams can test ideas in minutes and ship every release faster and with confidence.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Get Started for Free |
| secondaryCta | See how it works |
| success | Pipeline connected. |
| error | Could not connect your repository. Try again. |
| empty | No deployments yet. |

---
Source listing key `m:synapse-dark-hero`. Rebuild with `python3 scripts/brand-kit/build.py m:synapse-dark-hero`.
