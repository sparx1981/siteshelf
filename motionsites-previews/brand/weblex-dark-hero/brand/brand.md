# Weblex — brand kit

*Web design studio turning ideas into websites.* Generated from the SiteShelf listing **Weblex Dark Hero** (Landing Page); every value below is read from that page, not invented.

> **Turn your big idea into a website**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **globe** glyph on a squircle tile. A globe stands for the web and a studio that works for sites around the world. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#010104` | Page background |
| surface | `#CEFD26` | Cards, panels, raised areas |
| text | `#EBEBEB` | Body and heading text |
| textMuted | `#FFFFFF` | Secondary text, captions |
| primary | `#CEFD26` | Main actions, links, brand colour |
| secondary | `#718B15` | Highlights, charts, second accent |
| border | `#FFFFFF` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#718B15` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 17.49:1 | pass | pass |
| Muted text on background | 20.85:1 | pass | pass |
| Primary on background | 17.57:1 | pass | pass |
| Text on primary | 16.56:1 | pass | pass |
| Text on surface | 1.00:1 | fail | fail |

**Colours seen on the page** (share of use): `#010104` 97.8%, `#CEFD26` 1.2%, `#FFFFFF` 0.8%, `#EBEBEB` 0.2%, `#718B15` 0.0%

## Typography

- Headings: **Inter** (weight 500)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Inter | 62 px | 500 | 68.2px | -1.24px |
| Body | Inter | 16 px | 400 | 24.8px | normal |
| Button | Inter | 14 px | 500 | normal | normal |
| Navigation | Inter | 20 px | 600 | normal | -0.4px |

## Shape, space and motion

- Radius: sm 0 px, md 0 px, lg 0 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 4 px, 6 px, 8 px, 10 px, 12 px, 14 px, 16 px, 20 px, 24 px
- Layout: container 1280 px; breakpoints 420 px, 640 px, 768 px, 1024 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** bold, sleek, direct.

Weblex talks like a confident designer who ships quickly: short sentences, direct promises and an electric-lime accent for emphasis. It keeps jargon out of the headline and puts the big idea first.

**Do**

- Lead with the outcome: idea to website
- Keep nav labels to one word
- Use bold verbs: build, launch, ship

**Do not**

- Do not use long agency boilerplate
- Avoid vague tech-speak
- Never bury pricing

## Taglines

1. Turn your big idea into a website
2. From sketch to launch
3. Websites that mean business
4. Design fast. Launch faster
5. Build the thing. Ship the thing

**Boilerplate:** Weblex is a web design studio that turns founders' big ideas into polished, launch-ready websites, with clear pricing and a fast process.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Get Started |
| secondaryCta | See Pricing |
| success | Request received. We will reply within a day. |
| error | That did not send. Please try again. |
| empty | No projects yet. Start with your big idea. |

---
Source listing key `m:weblex-dark-hero`. Rebuild with `python3 scripts/brand-kit/build.py m:weblex-dark-hero`.
