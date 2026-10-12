# AutomationMachines — brand kit

*Full-stack builders of futuristic web experiences.* Generated from the SiteShelf listing **Automation Machines** (Hero Section); every value below is read from that page, not invented.

> **Code your dreams**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter Bold (stand-in for Orbitron) |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **chip** glyph on a circle tile. A microchip is a literal symbol of automation and engineering. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

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

**Colours seen on the page** (share of use): `#000000` 98.9%, `#FFFFFF` 1.1%, `#A6A6A6` 0.0%, `#8C8C8C` 0.0%

## Typography

- Headings: **Orbitron** (weight 200)
- Body: **Space Grotesk**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Unbounded:wght@200;300;400&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Orbitron | 72 px | 200 | 64.8px | -1.8px |
| Heading / H2 | JetBrains Mono | 10 px | 400 | normal | 3px |
| Body | Space Grotesk | 14 px | 300 | 22.75px | normal |
| Button | Arial | 13.3 px | 400 | normal | normal |

## Shape, space and motion

- Radius: sm 0 px, md 0 px, lg 0 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 8 px, 12 px, 16 px, 20 px, 24 px, 32 px, 40 px
- Layout: container 1200 px; breakpoints 640 px, 767 px, 768 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** futuristic, technical, cool.

AutomationMachines speaks like a terse engineer who loves the build. Sentences are short, technical and a little dreamy, with stack names doing the talking.

**Do**

- Name the stack plainly: TS/JS, Full-Stack, Cloud-Ready
- Keep sentences short and mechanical
- Mix one dreamy line with every technical one

**Do not**

- Do not use vague 'innovative solutions' language
- Avoid exclamation marks
- Never hide the technical specs

## Taglines

1. Code your dreams
2. Built by hands that build the web
3. Pixel-perfect, full-stack, cloud-ready
4. For people who build, not browse
5. Machines that make machines

**Boilerplate:** AutomationMachines is a one-person engineering studio crafting pixel-perfect, full-stack, cloud-ready web experiences with TypeScript, 3D scenes and automation.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | View specs |
| secondaryCta | Contact |
| success | Message received. Powering up a reply. |
| error | Connection lost. Please try again. |
| empty | No specs to show yet. |

---
Source listing key `m:automation-machines`. Rebuild with `python3 scripts/brand-kit/build.py m:automation-machines`.
