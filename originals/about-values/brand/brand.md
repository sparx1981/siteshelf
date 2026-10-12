# Tessel & Thrive — brand kit

*Community-owned solar for apartment blocks.* Generated from the SiteShelf listing **About — Values & Journey** (About Page); every value below is read from that page, not invented.

> **Every rooftop should work harder**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Young Serif |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **home** glyph on a circle tile. A simple house shape says shared roof and shared home in one glance. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#FFF7EC` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#2A1F14` | Body and heading text |
| textMuted | `#7A6A58` | Secondary text, captions |
| primary | `#2F7D4F` | Main actions, links, brand colour |
| secondary | `#FFB938` | Highlights, charts, second accent |
| border | `#ECDCC4` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#FFB938` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 15.15:1 | pass | pass |
| Muted text on background | 4.91:1 | pass | pass |
| Primary on background | 4.74:1 | pass | pass |
| Text on primary | 5.04:1 | pass | pass |
| Text on surface | 16.10:1 | pass | pass |

**Colours seen on the page** (share of use): `#FFF7EC` 92.2%, `#3A2C1E` 3.7%, `#F3E6D0` 2.2%, `#2F7D4F` 0.6%, `#2A1F14` 0.4%, `#FFB938` 0.3%, `#7A6A58` 0.2%, `#E3D0AC` 0.2%, `#F4B194` 0.2%, `#D96B3B` 0.2%

## Typography

- Headings: **Young Serif** (weight 400)
- Body: **Figtree**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700&family=Young+Serif&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Young Serif | 80 px | 400 | 83.2px | -0.8px |
| Heading / H2 | Young Serif | 50 px | 400 | 55px | normal |
| Subheading / H3 | Young Serif | 28 px | 400 | normal | normal |
| Body | Figtree | 20 px | 400 | 32px | normal |
| Button | Figtree | 17 px | 400 | 27.2px | normal |
| Navigation | Figtree | 15 px | 600 | 24px | normal |
| Caption / eyebrow | Figtree | 14.2 px | 400 | 22.6667px | normal |

## Shape, space and motion

- Radius: sm 14 px, md 18 px, lg 22 px, pill (fully rounded)
- Shadows: sm: `rgba(217, 107, 59, 0.008) 0px 0px 0px 17.7297px` · md: `rgba(217, 107, 59, 0.008) 0px 0px 0px 17.7297px` · lg: `rgba(217, 107, 59, 0.008) 0px 0px 0px 17.7297px`
- Spacing: base unit 4 px; common steps 8 px, 9 px, 10 px, 12 px, 14 px, 16 px, 20 px, 22 px, 24 px
- Layout: container 1100 px; breakpoints 560 px, 900 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** warm, neighbourly, hopeful.

Sounds like a friendly neighbour who happens to know about roofs: plain words, shared pronouns, a little sunshine. It speaks to residents and landlords alike, so it explains money and wiring without jargon.

**Do**

- Say we and our block, never the customer
- Put the saving next to the person it helps
- Use short sentences and everyday words for kit and costs

**Do not**

- No engineering acronyms without a plain gloss
- No guilt about carbon, lead with the shared bill
- No lone-hero language about the founders

## Taglines

1. Every rooftop should work harder
2. One roof, one bill, one block
3. Sunshine, shared out fairly
4. Solar that the whole block owns
5. Make the roof pay its rent

**Boilerplate:** Tessel & Thrive helps apartment blocks own their solar together, installing shared rooftop systems that cut bills and keep the benefit with the residents who live under them.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Come build with us |
| secondaryCta | Read our story |
| success | Welcome aboard, we will be in touch this week |
| error | That did not send, please try once more |
| empty | No open roles in this city yet, check back soon |

---
Source listing key `o:about-values`. Rebuild with `python3 scripts/brand-kit/build.py o:about-values`.
