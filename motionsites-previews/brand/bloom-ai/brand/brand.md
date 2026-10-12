# Bloom — brand kit

*AI-powered floral and plant design platform.* Generated from the SiteShelf listing **Bloom AI** (Hero Section); every value below is read from that page, not invented.

> **Innovating the spirit of bloom**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Poppins |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **sprout** glyph on a squircle tile. A sprout is the simplest symbol of bloom and growth. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#0A0A0A` | Page background |
| surface | `#222222` | Cards, panels, raised areas |
| text | `#FFFFFF` | Body and heading text |
| textMuted | `#A9A9A9` | Secondary text, captions |
| primary | `#FFFFFF` | Main actions, links, brand colour |
| secondary | `#8C8C8C` | Highlights, charts, second accent |
| border | `#2C2C2C` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#8C8C8C` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 19.80:1 | pass | pass |
| Muted text on background | 8.42:1 | pass | pass |
| Primary on background | 19.80:1 | pass | pass |
| Text on primary | 19.64:1 | pass | pass |
| Text on surface | 15.91:1 | pass | pass |

**Colours seen on the page** (share of use): `#0A0A0A` 99.4%, `#FFFFFF` 0.4%, `#222222` 0.2%, `#A9A9A9` 0.0%, `#8C8C8C` 0.0%

## Typography

- Headings: **Poppins** (weight 500)
- Body: **Poppins**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&family=Newsreader:ital,wght@1,400&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Poppins | 72 px | 500 | 73.44px | -3.6px |
| Subheading / H3 | Poppins | 14 px | 500 | normal | normal |
| Body | Poppins | 12 px | 400 | 18px | normal |
| Button | Poppins | 14 px | 400 | normal | normal |
| Navigation | Poppins | 16 px | 400 | normal | normal |

## Shape, space and motion

- Radius: sm 16 px, md 24 px, lg 40 px, pill (fully rounded)
- Shadows: sm: `rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset` · md: `rgba(0, 0, 0, 0.05) 4px 4px 4px 0px, rgba(255, 255, 255, 0.15) 0px 1px 1px 0px inset` · lg: `rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset`
- Spacing: base unit 4 px; common steps 4 px, 6 px, 8 px, 10 px, 12 px, 14 px, 16 px, 24 px, 28 px
- Layout: container 1200 px; breakpoints 480 px, 640 px, 1024 px
- Motion: 250 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** dreamy, airy, poetic.

Speaks like an artist describing a garden at dawn: soft, imaginative and a little mythic. Plain verbs keep the poetry grounded.

**Do**

- Use growth and light imagery sparingly
- Keep sentences short and open
- Let one quote carry the mood

**Do not**

- No tech-bro AI buzzwords
- No heavy punctuation
- No promises of perfection

## Taglines

1. Innovating the spirit of bloom
2. A realm with no ending
3. Design that grows with you
4. Where plants meet imagination
5. Let your garden dream

**Boilerplate:** Bloom is an AI-powered plant and floral design platform that helps creators imagine, shape and share botanical worlds with liquid, glass-like interfaces.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Explore now |
| secondaryCta | Menu |
| success | Saved to your garden |
| error | Could not generate that design, try again |
| empty | Your garden is empty, start with a seed |

---
Source listing key `m:bloom-ai`. Rebuild with `python3 scripts/brand-kit/build.py m:bloom-ai`.
