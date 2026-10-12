# Modulo — brand kit

*Calm workspace for drafts and launches.* Generated from the SiteShelf listing **Bento Features Grid** (Landing Page); every value below is read from that page, not invented.

> **Everything you need. Nothing you don't**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Sora |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **grid** glyph. A tiled grid mirrors the bento layout and the idea of small modules fitting together. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#0A0A0F` | Page background |
| surface | `#12121A` | Cards, panels, raised areas |
| text | `#8B8BA0` | Body and heading text |
| textMuted | `#F4F4F8` | Secondary text, captions |
| primary | `#7C5CFF` | Main actions, links, brand colour |
| secondary | `#19D3FF` | Highlights, charts, second accent |
| border | `#23232F` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#19D3FF` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 5.92:1 | pass | pass |
| Muted text on background | 18.00:1 | pass | pass |
| Primary on background | 4.54:1 | pass | pass |
| Text on primary | 4.52:1 | pass | pass |
| Text on surface | 5.59:1 | pass | pass |

**Colours seen on the page** (share of use): `#0A0A0F` 93.7%, `#171722` 4.2%, `#7C5CFF` 0.8%, `#19D3FF` 0.5%, `#8B8BA0` 0.3%, `#5A7BFF` 0.2%, `#F4F4F8` 0.2%, `#2C2C3D` 0.1%, `#FF7A59` 0.0%, `#E01E5A` 0.0%

## Typography

- Headings: **Sora** (weight 700)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700&family=Inter:wght@400;500&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Heading / H2 | Sora | 52 px | 700 | 54.6px | -1.56px |
| Subheading / H3 | Sora | 22 px | 600 | normal | -0.22px |
| Body | Inter | 18 px | 400 | 27.9px | normal |
| Button | Arial | 13.3 px | 400 | normal | normal |
| Caption / eyebrow | Sora | 22 px | 600 | 22px | normal |

## Shape, space and motion

- Radius: sm 6 px, md 14 px, lg 24 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 4 px, 6 px, 8 px, 9 px, 10 px, 12 px, 14 px, 16 px, 18 px
- Layout: container 1180 px; breakpoints 600 px, 900 px
- Motion: 800 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** composed, fast, confident.

Modulo speaks in compact, balanced lines, the way its cards sit in a grid. It claims little, shows a lot, and trusts the product demo to carry the weight.

**Do**

- Pair every claim with a visible example
- Keep headlines to two short lines
- Write for people who already know what a good tool feels like

**Do not**

- Do not stack adjectives on one feature
- Avoid superlatives without a number
- Never explain a card that explains itself

## Taglines

1. Everything you need. Nothing you don't
2. The right tools in the right places
3. From first draft to final launch
4. A workspace that keeps up
5. Small pieces, one calm whole

**Boilerplate:** Modulo is a modular workspace that brings chat, charts and integrations into one fast, quiet interface, from the first draft to the final launch.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Try Modulo |
| secondaryCta | See all features |
| success | Integration connected. |
| error | That did not connect. Check your key and retry. |
| empty | Nothing here yet. Add your first card. |

---
Source listing key `o:bento-features`. Rebuild with `python3 scripts/brand-kit/build.py o:bento-features`.
