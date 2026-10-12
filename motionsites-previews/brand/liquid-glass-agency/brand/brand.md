# Clearpane Studio — brand kit

*AI-assisted web design agency.* Generated from the SiteShelf listing **Liquid Glass Agency** (Landing Page); every value below is read from that page, not invented.

> **The website your brand deserves**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Instrument Serif |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **diamond** glyph on a squircle tile. A clear diamond echoes glass and polish and keeps the mark simple. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#000000` | Page background |
| surface | `#06080C` | Cards, panels, raised areas |
| text | `#FFFFFF` | Body and heading text |
| textMuted | `#A6A6A6` | Secondary text, captions |
| primary | `#D9A6B8` | Main actions, links, brand colour |
| secondary | `#4A2A1A` | Highlights, charts, second accent |
| border | `#FFFFFF` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#4A2A1A` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 21.00:1 | pass | pass |
| Muted text on background | 8.63:1 | pass | pass |
| Primary on background | 10.10:1 | pass | pass |
| Text on primary | 9.45:1 | pass | pass |
| Text on surface | 20.04:1 | pass | pass |

**Colours seen on the page** (share of use): `#000000` 98.9%, `#FFFFFF` 0.8%, `#0A0F1C` 0.1%, `#222222` 0.0%, `#7D8FB5` 0.0%, `#8DB8A8` 0.0%, `#D9A6B8` 0.0%, `#4A2A1A` 0.0%, `#1F3B36` 0.0%, `#5A2A3C` 0.0%

## Typography

- Headings: **Instrument Serif** (weight 400)
- Body: **Barlow**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Barlow:wght@300;400;500;600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Instrument Serif | 88 px | 400 | 70.4px | -4px |
| Heading / H2 | Instrument Serif | 60 px | 400 | 54px | -1.5px |
| Subheading / H3 | Instrument Serif | 40 px | 400 | 36px | -1px |
| Body | Barlow | 15 px | 300 | normal | normal |
| Button | Barlow | 14 px | 500 | normal | normal |
| Navigation | Barlow | 16 px | 300 | normal | normal |
| Caption / eyebrow | Barlow | 16 px | 300 | normal | normal |

## Shape, space and motion

- Radius: sm 4 px, md 16 px, lg 24 px, pill (fully rounded)
- Shadows: sm: `rgba(255, 255, 255, 0.114) 0px 0px 0px 6.11866px` · md: `rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset` · lg: `rgba(0, 0, 0, 0.05) 4px 4px 4px 0px, rgba(255, 255, 255, 0.15) 0px 1px 1px 0px inset`
- Spacing: base unit 4 px; common steps 4 px, 6 px, 8 px, 12 px, 14 px, 16 px, 20 px, 24 px, 64 px
- Layout: container 1152 px; breakpoints 560 px, 700 px, 768 px, 900 px, 1024 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** polished, confident, minimal.

Clearpane Studio sounds like an Apple-style keynote: short, quiet declarations and a lot of space. It promises speed and care in the same breath.

**Do**

- Use short declarative sentences
- Pair a speed claim with a craft claim
- Keep copy sparse and let the visuals lead

**Do not**

- Do not explain the AI in detail
- Avoid slang or exclamations
- Never claim perfection

## Taglines

1. The website your brand deserves
2. You dream it. We ship it
3. Built by AI, refined by experts
4. Web design, reimagined
5. Zero complexity. Full polish

**Boilerplate:** Clearpane Studio is an AI-powered web design agency that builds fast, polished sites, refined by human experts, for brands that want premium results with little complexity.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Get Started |
| secondaryCta | Watch the Film |
| success | Thanks. We will be in touch. |
| error | That did not send. Please try again. |
| empty | No projects to show yet. |

---
Source listing key `m:liquid-glass-agency`. Rebuild with `python3 scripts/brand-kit/build.py m:liquid-glass-agency`.
