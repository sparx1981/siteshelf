# Kiln & Reed Quarterly — brand kit

*Craft magazine of studio visits and interviews.* Generated from the SiteShelf listing **Interview Q&A Article** (Blog); every value below is read from that page, not invented.

> **Hands, heat and patience**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Instrument Serif |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **flame** glyph. A kiln flame names the craft at the centre of every interview. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F7EFE3` | Page background |
| surface | `#FFFAF2` | Cards, panels, raised areas |
| text | `#2B211A` | Body and heading text |
| textMuted | `#1F5F5B` | Secondary text, captions |
| primary | `#A8431F` | Main actions, links, brand colour |
| secondary | `#1F5F5B` | Highlights, charts, second accent |
| border | `#A8431F` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#DAB0A1` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 13.79:1 | pass | pass |
| Muted text on background | 6.47:1 | pass | pass |
| Primary on background | 5.28:1 | pass | pass |
| Text on primary | 6.02:1 | pass | pass |
| Text on surface | 15.14:1 | pass | pass |

**Colours seen on the page** (share of use): `#F7EFE3` 93.7%, `#000000` 2.4%, `#2B211A` 1.2%, `#E3D1B4` 0.8%, `#E4D0D8` 0.4%, `#CFDDE8` 0.4%, `#F0DCC4` 0.4%, `#1F5F5B` 0.2%, `#A8431F` 0.2%, `#FFFFFF` 0.2%

## Typography

- Headings: **Instrument Serif** (weight 400)
- Body: **Instrument Serif**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Work+Sans:wght@400;500;600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Instrument Serif | 78 px | 400 | 76.44px | -0.78px |
| Heading / H2 | Work Sans | 12 px | 600 | normal | 1.92px |
| Subheading / H3 | Work Sans | 12 px | 600 | normal | 1.92px |
| Body | Instrument Serif | 28 px | 400 | 35px | normal |
| Button | Work Sans | 14 px | 500 | normal | normal |
| Navigation | Work Sans | 14 px | 600 | 18.2px | normal |
| Caption / eyebrow | Work Sans | 12 px | 600 | normal | 2.16px |

## Shape, space and motion

- Radius: sm 14 px, md 20 px, lg 20 px, pill (fully rounded)
- Shadows: sm: `rgba(60, 30, 10, 0.7) 0px 28px 46px -30px` · md: `rgba(60, 30, 10, 0.7) 0px 28px 46px -30px` · lg: `rgba(60, 30, 10, 0.7) 0px 28px 46px -30px`
- Spacing: base unit 4 px; common steps 2 px, 4 px, 8 px, 10 px, 12 px, 14 px, 16 px, 17 px, 20 px
- Layout: container 1180 px; breakpoints 520 px, 999 px
- Motion: 150 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** literary, patient, tactile.

Kiln & Reed Quarterly writes like a long afternoon in a studio: unhurried, observant and fond of the physical detail. Questions are open, answers are left to breathe, and craft is never made precious.

**Do**

- Lead with a sensory detail, then the idea
- Let the maker's own words carry the quote
- Use plain, concrete nouns: clay, heat, glaze

**Do not**

- Do not call anything 'artisan' or 'curated'
- Do not summarise an answer that can be quoted
- Do not rush to a conclusion

## Taglines

1. Hands, heat and patience
2. Conversations from the working studio
3. Makers, in their own words
4. Slow craft, slowly told
5. Every pot has a story behind it

**Boilerplate:** Kiln & Reed Quarterly is an independent craft magazine that publishes long studio-visit interviews with potters, weavers and other makers.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Read the interview |
| secondaryCta | Copy quote |
| success | Quote copied. Credit the maker when you share it. |
| error | The quote did not copy. Select it and try again. |
| empty | No answers match. Turn off the highlights filter. |

---
Source listing key `o:blog-interview-qa`. Rebuild with `python3 scripts/brand-kit/build.py o:blog-interview-qa`.
