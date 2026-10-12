# Small Fences — brand kit

*Cosy gardening game about snails and patience.* Generated from the SiteShelf listing **Pixel Garden Retro Game Hero** (Hero Section); every value below is read from that page, not invented.

> **Grow something small**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from DM Mono |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **sprout** glyph on a squircle tile. A pixel sprout sums up growing something small and a game made of tiny joys. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#8FD3FF` | Page background |
| surface | `#FF7A59` | Cards, panels, raised areas |
| text | `#1B1B2F` | Body and heading text |
| textMuted | `#445B78` | Secondary text, captions |
| primary | `#FF7A59` | Main actions, links, brand colour |
| secondary | `#FFB6A4` | Highlights, charts, second accent |
| border | `#1B1B2F` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#713A2E` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 10.39:1 | pass | pass |
| Muted text on background | 4.29:1 | fail | pass |
| Primary on background | 1.58:1 | fail | fail |
| Text on primary | 7.65:1 | pass | pass |
| Text on surface | 6.57:1 | pass | pass |

**Colours seen on the page** (share of use): `#8FD3FF` 98.6%, `#FF7A59` 1.0%, `#1B1B2F` 0.3%, `#FFFFFF` 0.0%, `#FFD23F` 0.0%, `#445B78` 0.0%, `#FFB6A4` 0.0%, `#0B0B0F` 0.0%, `#713A2E` 0.0%

## Typography

- Headings: **DM Mono** (weight 700)
- Body: **DM Mono**
- Google Fonts: `https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | DM Mono | 84 px | 700 | 92.4px | 1.68px |
| Body | DM Mono | 16 px | 400 | 25.6px | normal |
| Button | Arial | 13.3 px | 400 | normal | normal |

## Shape, space and motion

- Radius: sm 0 px, md 0 px, lg 0 px
- Shadows: sm: `rgb(255, 122, 89) 6px 0px 0px 0px, rgb(255, 122, 89) -6px 0px 0px 0px, rgb(255, 122, 89) 0px 6px 0px 0px, rgb(255, 122, 89) 0px -6px 0px 0px, rgb(255, 210, 63) 0px 0px 0px 0px` · md: `rgb(255, 210, 63) 4px 0px 0px 0px, rgb(255, 210, 63) 8px 0px 0px 0px, rgb(255, 210, 63) 0px 4px 0px 0px, rgb(255, 210, 63) 4px 4px 0px 0px, rgb(255, 210, 63) 8px 4px 0px 0px, rgb(255, 210, 63) 0px 8px 0px 0px, rgb(255, 210, 63) 4px 8px 0px 0px, rgb(255, 210, 63) 8px 8px 0px 0px` · lg: `rgb(27, 27, 47) 6px 6px 0px 0px`
- Spacing: base unit 2 px; common steps 10 px, 20 px, 24 px, 26 px, 30 px, 40 px, 83 px
- Layout: container 1200 px; breakpoints 700 px
- Motion: 300 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** gentle, quirky, cosy.

Small Fences writes like the back of a lovingly drawn game box: warm, tiny, a bit silly. It celebrates slow growth and snails, with a pixelated wink and zero pressure.

**Do**

- Use soft, small nouns: snail, sprout, fence
- Keep sentences in lower-key present tense
- Add one tiny joke per paragraph

**Do not**

- Do not use gamer jargon like 'grind' or 'meta'
- Avoid hype countdowns
- Never promise endless content

## Taglines

1. Grow something small
2. Patience, snails and tiny fences
3. Plant it. Wait. Smile
4. A garden at your own pace
5. Out this spring on Switch and PC

**Boilerplate:** Small Fences is a cosy pixel-art gardening game about patience, snails and very small fences, coming this spring to Nintendo Switch and PC.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Wishlist on Steam |
| secondaryCta | Watch the trailer |
| success | Seed planted. Give it time. |
| error | The garden would not load. Please refresh. |
| empty | The garden is empty. Click the soil to plant. |

---
Source listing key `o:pixel-garden`. Rebuild with `python3 scripts/brand-kit/build.py o:pixel-garden`.
