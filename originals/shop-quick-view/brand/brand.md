# Parcel & Pine — brand kit

*Shop selling quiet things for wet days.* Generated from the SiteShelf listing **Quick View Modal** (E-commerce); every value below is read from that page, not invented.

> **Quiet things for wet days**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Young Serif |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **sprout** glyph on a squircle tile. A pine sprig-like sprout links the shop name to woodland and rain. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F5F0E6` | Page background |
| surface | `#FFFDF8` | Cards, panels, raised areas |
| text | `#1C1915` | Body and heading text |
| textMuted | `#675D4F` | Secondary text, captions |
| primary | `#E3BFA4` | Main actions, links, brand colour |
| secondary | `#183A2C` | Highlights, charts, second accent |
| border | `#E4DAC7` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#183A2C` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 15.42:1 | pass | pass |
| Muted text on background | 5.68:1 | pass | pass |
| Primary on background | 1.51:1 | fail | fail |
| Text on primary | 11.46:1 | pass | pass |
| Text on surface | 17.23:1 | pass | pass |

**Colours seen on the page** (share of use): `#F5F0E6` 59.2%, `#FFFDF8` 34.6%, `#000000` 2.8%, `#E8DCC4` 0.6%, `#E3BFA4` 0.6%, `#C7CED6` 0.6%, `#183A2C` 0.6%, `#7FA889` 0.3%, `#4F7D63` 0.3%, `#2F5A46` 0.3%

## Typography

- Headings: **Young Serif** (weight 400)
- Body: **Figtree**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;700&family=Young+Serif&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Young Serif | 60 px | 400 | 60px | normal |
| Button | Figtree | 14 px | 700 | normal | normal |
| Caption / eyebrow | Figtree | 12 px | 700 | normal | 1.92px |

## Shape, space and motion

- Radius: sm 6 px, md 16 px, lg 22 px, pill (fully rounded)
- Shadows: sm: `rgba(0, 0, 0, 0.25) 0px 0px 0px 1px inset` · md: `rgba(0, 0, 0, 0.25) 0px 0px 0px 1px inset` · lg: `rgba(0, 0, 0, 0.25) 0px 0px 0px 1px inset`
- Spacing: base unit 4 px; common steps 2 px, 4 px, 6 px, 8 px, 10 px, 12 px, 14 px, 16 px, 20 px
- Layout: container 1280 px; breakpoints 760 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** cosy, understated, thoughtful.

A gently humorous shopkeeper in a wool jumper: quiet, considered and fond of a good coat for the rain. Product notes are practical first, poetic second.

**Do**

- Name materials, sizes and stock plainly
- Use weather and woodland imagery sparingly
- Keep descriptions to two sentences

**Do not**

- Sale shouting and countdown banners
- Trend words like must-have
- Stacking adjectives

## Taglines

1. Quiet things for wet days
2. Packed up with pine and care
3. Autumn edit, softly curated
4. Good gear for grey skies
5. Stay dry, stay unhurried

**Boilerplate:** Parcel & Pine is a small online store selling bags, everyday and home goods designed for wet-weather days, with an autumn edit of thoughtfully chosen pieces.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Add to bag |
| secondaryCta | Quick view |
| success | Added to your bag |
| error | That size just sold out. Try another |
| empty | Nothing here yet. Try another category |

---
Source listing key `o:shop-quick-view`. Rebuild with `python3 scripts/brand-kit/build.py o:shop-quick-view`.
