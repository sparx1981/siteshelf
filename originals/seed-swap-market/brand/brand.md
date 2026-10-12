# Seedfold — brand kit

*Neighbourhood seed-sharing exchange.* Generated from the SiteShelf listing **Seed Swap Market** (E-commerce); every value below is read from that page, not invented.

> **Small packets. New possibilities**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Fraunces |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **sprout** glyph on a squircle tile. A sprout is the most direct image of a seed given a chance to grow. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F3F2DF` | Page background |
| surface | `#FFFEF1` | Cards, panels, raised areas |
| text | `#616B47` | Body and heading text |
| textMuted | `#30391E` | Secondary text, captions |
| primary | `#30391E` | Main actions, links, brand colour |
| secondary | `#DADFBC` | Highlights, charts, second accent |
| border | `#CFD1B3` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#DADFBC` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 5.02:1 | pass | pass |
| Muted text on background | 10.74:1 | pass | pass |
| Primary on background | 10.74:1 | pass | pass |
| Text on primary | 12.14:1 | pass | pass |
| Text on surface | 5.59:1 | pass | pass |

**Colours seen on the page** (share of use): `#F3F2DF` 76.3%, `#FFFEF1` 11.6%, `#E5B786` 2.7%, `#D4DCB4` 2.7%, `#DFCEA4` 2.7%, `#C4CDA5` 2.7%, `#30391E` 0.5%, `#485D28` 0.5%, `#616B47` 0.3%

## Typography

- Headings: **Fraunces** (weight 500)
- Body: **DM Sans**
- Google Fonts: `https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Fraunces:wght@500;600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Fraunces | 48 px | 500 | 51.84px | -1.44px |
| Heading / H2 | Fraunces | 23 px | 500 | normal | normal |
| Body | DM Sans | 14 px | 400 | 21.7px | normal |
| Button | DM Sans | 12 px | 400 | 18.6px | normal |
| Caption / eyebrow | DM Sans | 12 px | 400 | 18.6px | normal |

## Shape, space and motion

- Radius: sm 2 px, md 6 px, lg 8 px
- Shadows: none used (flat)
- Spacing: base unit 2 px; common steps 3 px, 8 px, 10 px, 12 px, 13 px, 14 px, 16 px, 18 px, 20 px
- Layout: container 1260 px; breakpoints 760 px, 780 px, 1000 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** neighbourly, earthy, generous.

Seedfold sounds like a friendly allotment neighbour: practical, warm and happy to share. It talks about sowing, shade and spare packets in ordinary words.

**Do**

- Use gardening words, such as sow, shade and spare
- Describe swaps as offers between neighbours
- Keep growing notes brief and useful

**Do not**

- Use marketplace jargon like 'listings'
- Talk about money
- Overpromise germination

## Taglines

1. Small packets. New possibilities
2. Exchange, do not discard
3. Share the seeds, grow the street
4. A shelf of spare seeds
5. Swap with the neighbours

**Boilerplate:** Seedfold is a community seed-sharing marketplace where neighbours with spare seeds and room to grow swap packets and sowing advice without any payment.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Request packet |
| secondaryCta | Review swap |
| success | Swap proposed. Your neighbour will reply. |
| error | Check your contact details and try again. |
| empty | No packets match. Try another condition. |

---
Source listing key `o:seed-swap-market`. Rebuild with `python3 scripts/brand-kit/build.py o:seed-swap-market`.
