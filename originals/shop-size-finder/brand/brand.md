# Fieldnote Knitwear — brand kit

*Merino knitwear with a friendly fit guide.* Generated from the SiteShelf listing **Size Finder Assistant** (E-commerce); every value below is read from that page, not invented.

> **Find your size in a minute**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Fraunces |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **grid** glyph. A knit stitch grid refers to both fabric and size chart. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F4EFE6` | Page background |
| surface | `#FFFDF8` | Cards, panels, raised areas |
| text | `#675D4F` | Body and heading text |
| textMuted | `#1E1B17` | Secondary text, captions |
| primary | `#2F6B4A` | Main actions, links, brand colour |
| secondary | `#E2B08A` | Highlights, charts, second accent |
| border | `#E5DCCB` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#E2B08A` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 5.63:1 | pass | pass |
| Muted text on background | 14.98:1 | pass | pass |
| Primary on background | 5.52:1 | pass | pass |
| Text on primary | 6.32:1 | pass | pass |
| Text on surface | 6.35:1 | pass | pass |

**Colours seen on the page** (share of use): `#F4EFE6` 64.2%, `#FFFDF8` 33.3%, `#2F6B4A` 0.9%, `#000000` 0.8%, `#1E1B17` 0.4%, `#675D4F` 0.2%, `#B58A5A` 0.1%, `#5A6A7A` 0.1%, `#4A4136` 0.1%, `#E2B08A` 0.0%

## Typography

- Headings: **Fraunces** (weight 600)
- Body: **Figtree**
- Google Fonts: `https://fonts.googleapis.com/css2?family=DM+Mono:wght@500&family=Figtree:wght@400;500;700&family=Fraunces:wght@600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Fraunces | 56 px | 600 | 57.12px | normal |
| Heading / H2 | Fraunces | 20 px | 600 | normal | normal |
| Body | Figtree | 16 px | 400 | 24px | normal |
| Button | Figtree | 13 px | 700 | normal | normal |
| Caption / eyebrow | Figtree | 12 px | 700 | normal | 1.92px |

## Shape, space and motion

- Radius: sm 10 px, md 14 px, lg 18 px, pill (fully rounded)
- Shadows: sm: `rgb(47, 107, 74) 0px 0px 0px 1.5px inset` · md: `rgba(70, 45, 10, 0.18) 0px 22px 50px 0px` · lg: `rgb(47, 107, 74) 0px 0px 0px 1.5px inset`
- Spacing: base unit 2 px; common steps 2 px, 4 px, 5 px, 6 px, 8 px, 10 px, 12 px, 14 px, 16 px
- Layout: container 1200 px; breakpoints 900 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** warm, helpful, careful.

Speaks like a knitter helping a friend choose a jumper: asks plainly, explains why, admits when it is unsure. Confidence is shown as a number.

**Do**

- Ask one question at a time
- Explain every recommendation in one line
- Show confidence honestly

**Do not**

- No body-shaming or ideal-size language
- No false certainty
- No jargon like stretch coefficient

## Taglines

1. Find your size in a minute
2. Knitwear that fits you
3. A fit guide that shows its working
4. Jumpers, sized with care
5. Merino for your measurements

**Boilerplate:** Fieldnote Knitwear makes merino crew necks and cardigans and offers a transparent size guide that explains why it recommends each fit.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Add size M to bag |
| secondaryCta | How to measure |
| success | Size saved to your bag |
| error | Check your measurements, then try again |
| empty | Answer a few questions to see your size |

---
Source listing key `o:shop-size-finder`. Rebuild with `python3 scripts/brand-kit/build.py o:shop-size-finder`.
