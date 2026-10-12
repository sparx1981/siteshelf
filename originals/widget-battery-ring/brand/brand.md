# Nimbus N2 — brand kit

*Smartphone with battery health tools.* Generated from the SiteShelf listing **Battery Health Ring** (Widgets); every value below is read from that page, not invented.

> **Know your battery, inside and out**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **bolt** glyph on a circle tile. A lightning bolt is the universal sign for charge and battery. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#071A1C` | Page background |
| surface | `#04100F` | Cards, panels, raised areas |
| text | `#EAFFF6` | Body and heading text |
| textMuted | `#9CC9BD` | Secondary text, captions |
| primary | `#4DF0B0` | Main actions, links, brand colour |
| secondary | `#C8FF5A` | Highlights, charts, second accent |
| border | `#1F5A5C` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#276B53` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 17.16:1 | pass | pass |
| Muted text on background | 9.80:1 | pass | pass |
| Primary on background | 12.28:1 | pass | pass |
| Text on primary | 13.48:1 | pass | pass |
| Text on surface | 18.54:1 | pass | pass |

**Colours seen on the page** (share of use): `#071A1C` 73.8%, `#0C2A2C` 22.3%, `#000000` 1.0%, `#4DF0B0` 0.7%, `#18403F` 0.6%, `#5FD8FF` 0.6%, `#C8FF5A` 0.3%, `#8A97A3` 0.3%, `#EAFFF6` 0.3%, `#9CC9BD` 0.1%

## Typography

- Headings: **Inter** (weight 600)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@500&family=Outfit:wght@600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Heading / H2 | Inter | 13 px | 600 | normal | 1.82px |
| Button | Inter | 13 px | 600 | normal | normal |
| Caption / eyebrow | Inter | 12 px | 600 | normal | 2.16px |

## Shape, space and motion

- Radius: sm 12 px, md 16 px, lg 18 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 2 px; common steps 2 px, 3 px, 6 px, 8 px, 10 px, 12 px, 14 px, 16 px, 28 px
- Layout: container 1080 px; breakpoints 900 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** clear, reassuring, technical.

Sounds like a phone manual that finally got a friendly editor: clear numbers, plain tips and a calm tone about charge and wear. It estimates, says so and never promises miracles.

**Do**

- Give percentages and times with units
- Label gains in tips as estimates
- Explain health in plain words, like capacity left

**Do not**

- Do not predict battery death
- Do not use tech hype words
- Do not hide that values are simulated

## Taglines

1. Know your battery, inside and out
2. Charge smarter, last longer
3. Health you can see in a ring
4. Every percent, accounted for
5. A battery that tells the truth

**Boilerplate:** Nimbus N2 is a smartphone whose battery dashboard shows charge, long-term health and history in one ring, with practical tips that estimate how much life each habit can add.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Start charging |
| secondaryCta | 7 days |
| success | Tip applied. Estimated gain: 2%. |
| error | Battery data unavailable. Please try again. |
| empty | No history yet. Check back after a day. |

---
Source listing key `o:widget-battery-ring`. Rebuild with `python3 scripts/brand-kit/build.py o:widget-battery-ring`.
