# Oakhaven Studios — brand kit

*Product-design agency known for long client relationships.* Generated from the SiteShelf listing **3D Testimonial Carousel** (Testimonials); every value below is read from that page, not invented.

> **Clients say it best**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Playfair Display |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **monogram** glyph. A serif O in gold suits an agency whose name carries the weight. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#0A1226` | Page background |
| surface | `#1E3A8A` | Cards, panels, raised areas |
| text | `#F1F4FF` | Body and heading text |
| textMuted | `#A9B6DD` | Secondary text, captions |
| primary | `#F2C14E` | Main actions, links, brand colour |
| secondary | `#1E3A8A` | Highlights, charts, second accent |
| border | `#2A3A6E` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#1E3A8A` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 16.96:1 | pass | pass |
| Muted text on background | 9.24:1 | pass | pass |
| Primary on background | 11.10:1 | pass | pass |
| Text on primary | 11.71:1 | pass | pass |
| Text on surface | 9.43:1 | pass | pass |

**Colours seen on the page** (share of use): `#0A1226` 75.3%, `#1E3A8A` 17.2%, `#16224A` 6.4%, `#F1F4FF` 0.8%, `#A9B6DD` 0.2%, `#F2C14E` 0.1%, `#3A4C88` 0.0%, `#2A3A6E` 0.0%, `#0B0B0F` 0.0%

## Typography

- Headings: **Playfair Display** (weight 700)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:wght@700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Playfair Display | 56 px | 700 | 58.8px | normal |
| Body | Inter | 18 px | 400 | 27.9px | normal |
| Button | Inter | 16 px | 400 | 24.8px | normal |
| Caption / eyebrow | Inter | 18 px | 600 | normal | 2.88px |

## Shape, space and motion

- Radius: sm 22 px, md 22 px, lg 22 px, pill (fully rounded)
- Shadows: sm: `rgba(0, 0, 0, 0.8) 0px 30px 60px -28px, rgba(255, 255, 255, 0.07) 0px 1px 0px 0px inset` · md: `rgba(0, 0, 0, 0.8) 0px 30px 60px -28px, rgba(255, 255, 255, 0.07) 0px 1px 0px 0px inset` · lg: `rgba(0, 0, 0, 0.8) 0px 30px 60px -28px, rgba(255, 255, 255, 0.07) 0px 1px 0px 0px inset`
- Spacing: base unit 4 px; common steps 4 px, 6 px, 10 px, 12 px, 14 px, 16 px, 18 px, 20 px, 28 px
- Layout: container 1200 px; breakpoints 700 px
- Motion: 300 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** assured, warm, polished.

A senior partner on a calm day: confident, courteous and quietly proud of long relationships. Quotes speak for the studio; the studio's own copy stays short.

**Do**

- Let client quotes carry the claims
- Attribute quotes with name, role and company
- Describe work in outcomes, not process

**Do not**

- Self-praise adjectives like award-winning
- Unnamed quotes
- Buzzwords like synergy

## Taglines

1. Clients say it best
2. Design partners for the long run
3. Craft, trust and repeat work
4. Words from the people we've built with
5. Quiet confidence, clearly said

**Boilerplate:** Oakhaven Studios is a product-design agency partnering with software teams on strategy, interface and brand, and the clients whose words fill its testimonial carousel.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Read the story |
| secondaryCta | See our work |
| success | Quote copied |
| error | The carousel stalled. Use the arrows |
| empty | No testimonials yet |

---
Source listing key `o:testimonial-3d-carousel`. Rebuild with `python3 scripts/brand-kit/build.py o:testimonial-3d-carousel`.
