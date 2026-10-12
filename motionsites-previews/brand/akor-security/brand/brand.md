# AKOR — brand kit

*Security, automation and AI systems for business.* Generated from the SiteShelf listing **AKOR Security** (Landing Page); every value below is read from that page, not invented.

> **Intelligent security, built for business**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Sora |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **shield** glyph. A shield states the security promise and sits well beside a vivid green accent. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#1A1A1A` | Page background |
| surface | `#000000` | Cards, panels, raised areas |
| text | `#999999` | Body and heading text |
| textMuted | `#F5F5F5` | Secondary text, captions |
| primary | `#05E901` | Main actions, links, brand colour |
| secondary | `#111C42` | Highlights, charts, second accent |
| border | `#333333` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#111C42` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 6.11:1 | pass | pass |
| Muted text on background | 15.96:1 | pass | pass |
| Primary on background | 10.49:1 | pass | pass |
| Text on primary | 11.85:1 | pass | pass |
| Text on surface | 7.37:1 | pass | pass |

**Colours seen on the page** (share of use): `#1A1A1A` 58.2%, `#000000` 20.4%, `#F5F5F5` 19.3%, `#1B2A5A` 0.6%, `#111C42` 0.5%, `#0A122E` 0.4%, `#05E901` 0.4%, `#999999` 0.1%, `#2E2E2E` 0.1%, `#5C5C5C` 0.1%

## Typography

- Headings: **Sora** (weight 300)
- Body: **Sora**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Sora | 88 px | 300 | 83.6px | -2.2px |
| Heading / H2 | Sora | 36 px | 400 | 41.4px | -0.9px |
| Subheading / H3 | Sora | 20 px | 500 | 24px | normal |
| Body | Sora | 18 px | 400 | 28.8px | normal |
| Button | Sora | 12 px | 500 | 12px | 1.2px |
| Navigation | Sora | 20 px | 600 | normal | -0.5px |

## Shape, space and motion

- Radius: sm 2 px, md 6 px, lg 8 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 8 px, 10 px, 12 px, 24 px, 28 px, 32 px, 36 px, 40 px, 64 px
- Layout: container 1200 px; breakpoints 640 px, 1024 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** assured, technical, direct.

AKOR speaks like an engineer who briefs a boardroom: precise, calm and quietly authoritative. It states what a system does and what it protects.

**Do**

- Name the system and the result in one sentence
- Use measured numbers instead of claims
- Keep tone confident but never alarming

**Do not**

- Do not use fear to sell security
- Avoid hype words like revolutionary
- Never overpromise on AI

## Taglines

1. Intelligent security, built for business
2. Systems that watch so you do not
3. Automation that secures and saves
4. Smart infrastructure, safely run
5. Protection that thinks ahead

**Boilerplate:** AKOR designs and installs intelligent security, automation and AI systems for businesses and smart infrastructure, helping teams protect sites and run more efficiently.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Get Quote |
| secondaryCta | Get Consultation |
| success | Request received. An engineer will call you. |
| error | That did not send. Please check the details and try again. |
| empty | No services selected yet. |

---
Source listing key `m:akor-security`. Rebuild with `python3 scripts/brand-kit/build.py m:akor-security`.
