# Qumica — brand kit

*Digital infrastructure platform.* Generated from the SiteShelf listing **Qumica** (Elevate your digital infrastructure); every value below is read from that page, not invented.

> **Ready to elevate your infrastructure?**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **cube** glyph on a squircle tile. A cube stands for modular infrastructure blocks. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#05060A` | Page background |
| surface | `#101A3A` | Cards, panels, raised areas |
| text | `#FFFFFF` | Body and heading text |
| textMuted | `#F59E0B` | Secondary text, captions |
| primary | `#F97316` | Main actions, links, brand colour |
| secondary | `#2B1650` | Highlights, charts, second accent |
| border | `#111111` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#2B1650` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 20.25:1 | pass | pass |
| Muted text on background | 9.43:1 | pass | pass |
| Primary on background | 7.23:1 | pass | pass |
| Text on primary | 7.01:1 | pass | pass |
| Text on surface | 17.06:1 | pass | pass |

**Colours seen on the page** (share of use): `#05060A` 77.2%, `#101A3A` 11.0%, `#2B1650` 11.0%, `#FFFFFF` 0.4%, `#F97316` 0.2%, `#9333EA` 0.1%, `#A855F7` 0.0%, `#3B82F6` 0.0%, `#F59E0B` 0.0%

## Typography

- Headings: **Inter** (weight 700)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital@1&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Inter | 68 px | 700 | 71.4px | -2.04px |
| Body | Inter | 18 px | 400 | 27.9px | normal |
| Button | Inter | 14 px | 500 | normal | normal |
| Navigation | Inter | 14 px | 400 | normal | normal |
| Caption / eyebrow | Inter | 10 px | 400 | normal | 3px |

## Shape, space and motion

- Radius: sm 0 px, md 0 px, lg 0 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 8 px, 9 px, 10 px, 12 px, 15 px, 18 px, 20 px, 24 px, 28 px
- Layout: container 1200 px; breakpoints 720 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** engineered, confident, brisk.

Qumica sounds like an infrastructure lead who ships. It is direct, plain on performance and avoids vague promises about transformation.

**Do**

- Name the system and the outcome
- Use measurable terms: latency, uptime, throughput
- Keep calls to action to one or two words

**Do not**

- Do not say 'revolutionary'
- Do not stack buzzwords
- Do not promise growth you cannot measure

## Taglines

1. Ready to elevate your infrastructure?
2. High-performance operations, built for scale
3. Modern infrastructure, measured results
4. Platforms that keep pace with growth
5. Solutions that run the whole organization

**Boilerplate:** Qumica builds high-performance digital infrastructure and solutions to modernize operations and drive growth across an entire organization.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Generate |
| secondaryCta | View platform |
| success | Done. Your environment is ready. |
| error | Something went wrong. Check your configuration and retry. |
| empty | Nothing deployed yet. Generate your first environment. |

---
Source listing key `s:69ef0b46f15dc209f8f5c102`. Rebuild with `python3 scripts/brand-kit/build.py s:69ef0b46f15dc209f8f5c102`.
