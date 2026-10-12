# Sabrina Residences — brand kit

*Real estate agency presenting the latest houses.* Generated from the SiteShelf listing **Sabrina Residences** (Our Latest Houses); every value below is read from that page, not invented.

> **Trusted experts for a smoother journey**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Playfair Display |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **home** glyph on a squircle tile. A house shape speaks directly to residential real estate. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#FFFFFF` | Page background |
| surface | `#1150EF` | Cards, panels, raised areas |
| text | `#161616` | Body and heading text |
| textMuted | `#686868` | Secondary text, captions |
| primary | `#B9CFFD` | Main actions, links, brand colour |
| secondary | `#3C7AF6` | Highlights, charts, second accent |
| border | `#DEDEDE` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#3C7AF6` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 18.10:1 | pass | pass |
| Muted text on background | 5.57:1 | pass | pass |
| Primary on background | 1.57:1 | fail | fail |
| Text on primary | 12.54:1 | pass | pass |
| Text on surface | 2.95:1 | fail | fail |

**Colours seen on the page** (share of use): `#FFFFFF` 79.0%, `#1150EF` 5.2%, `#3C7AF6` 5.2%, `#76A2FA` 5.2%, `#B9CFFD` 5.2%, `#161616` 0.0%, `#686868` 0.0%, `#DEDEDE` 0.0%

## Typography

- Headings: **Playfair Display** (weight 400)
- Body: **Archivo**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500&family=Archivo:wght@400;500&family=Manrope:wght@400;500&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Playfair Display | 109.6 px | 400 | 95.3172px | -0.5478px |
| Heading / H2 | Playfair Display | 66.2 px | 400 | 79.488px | normal |
| Body | Archivo | 23.9 px | 400 | 24.3821px | -1.07568px |
| Button | Archivo | 12 px | 500 | normal | normal |
| Navigation | Archivo | 16 px | 400 | normal | normal |

## Shape, space and motion

- Radius: sm 13 px, md 13 px, lg 13 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 2 px, 4 px, 5 px, 8 px, 10 px, 12 px, 18 px, 24 px, 32 px
- Layout: container 1200 px; breakpoints 700 px, 860 px, 861 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** trusted, refined, bilingual.

A calm, knowledgeable estate agent: polished, assured and straightforward about homes. It uses short, confident lines and a bilingual note for local clients.

**Do**

- Give bedrooms, areas and prices plainly
- Use restrained language about places
- Offer clear next steps for viewings

**Do not**

- Hype like dream home
- Pressure to decide quickly
- Unverified claims

## Taglines

1. Trusted experts for a smoother journey
2. Our latest houses, in focus
3. A smarter way to find home
4. Properties presented with care
5. Find the house, then the home

**Boilerplate:** Sabrina Residences is a real estate agency presenting its latest houses and guiding buyers through a smoother, smarter property journey, in Bosnian and English.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | View properties |
| secondaryCta | Contact an agent |
| success | Viewing requested. An agent will call |
| error | We couldn't send your request. Try again |
| empty | No houses match your filters |

---
Source listing key `s:6ab36048c56174d54e02a003`. Rebuild with `python3 scripts/brand-kit/build.py s:6ab36048c56174d54e02a003`.
