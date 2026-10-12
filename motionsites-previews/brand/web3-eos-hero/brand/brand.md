# EOS — brand kit

*Web3 base layer for creators.* Generated from the SiteShelf listing **Web3 EOS Hero** (Web3); every value below is read from that page, not invented.

> **Web3 at the speed of experience**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from DM Sans |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **orbit** glyph on a squircle tile. Orbiting rings suggest a connected network around a single core. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

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

**Colours seen on the page** (share of use): `#000000` 99.0%, `#FFFFFF` 1.0%, `#A6A6A6` 0.0%, `#8C8C8C` 0.0%

## Typography

- Headings: **DM Sans** (weight 500)
- Body: **DM Sans**
- Google Fonts: `https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | DM Sans | 56 px | 500 | 71.68px | normal |
| Body | DM Sans | 15 px | 400 | 24px | normal |
| Button | DM Sans | 14 px | 500 | normal | normal |
| Navigation | DM Sans | 16 px | 400 | normal | normal |

## Shape, space and motion

- Radius: sm 0 px, md 0 px, lg 0 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 2 px; common steps 2 px, 6 px, 8 px, 10 px, 11 px, 14 px, 16 px, 20 px, 29 px
- Layout: container 1200 px; breakpoints 420 px, 767 px, 768 px, 1280 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** fast, visionary, assured.

EOS speaks in a clipped, optimistic voice for builders who want speed without noise: confident, short and forward-looking, with no crypto-bro swagger. It leads with experience.

**Do**

- Focus on speed, scale and experience
- Keep sentences short
- Address creators and developers directly

**Do not**

- Use price talk or token hype
- Use meme language
- Overpromise on decentralisation

## Taglines

1. Web3 at the speed of experience
2. Built for creators who move
3. Real-time, resilient, ready
4. The base for what you build
5. Join the waitlist, build early

**Boilerplate:** EOS is a Web3 platform providing the fast, resilient base layer that creators and developers need to build real-time experiences at scale.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Join Waitlist |
| secondaryCta | Developers |
| success | You are on the list. |
| error | Could not join the waitlist. Please try again. |
| empty | No resources yet. Check back soon. |

---
Source listing key `m:web3-eos-hero`. Rebuild with `python3 scripts/brand-kit/build.py m:web3-eos-hero`.
