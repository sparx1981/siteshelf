# Brightwick & Sons — brand kit

*Retailer whose retired pages get a museum plaque.* Generated from the SiteShelf listing **Page Gone Museum** (Error Page); every value below is read from that page, not invented.

> **This page has left the building**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Playfair Display |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **monogram** glyph on a circle tile. The ampersand-led name suits a monogram, like a brass plate on a gallery wall. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F4EDDD` | Page background |
| surface | `#E9E2D4` | Cards, panels, raised areas |
| text | `#2A241B` | Body and heading text |
| textMuted | `#5D5342` | Secondary text, captions |
| primary | `#FFECAA` | Main actions, links, brand colour |
| secondary | `#8A2A2A` | Highlights, charts, second accent |
| border | `#4A3424` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#8A2A2A` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 13.17:1 | pass | pass |
| Muted text on background | 6.47:1 | pass | pass |
| Primary on background | 1.01:1 | fail | fail |
| Text on primary | 16.68:1 | pass | pass |
| Text on surface | 11.92:1 | pass | pass |

**Colours seen on the page** (share of use): `#F4EDDD` 38.4%, `#FFFAF0` 15.9%, `#FFECAA` 15.2%, `#2A241B` 8.2%, `#3A2F26` 7.4%, `#5A4130` 5.3%, `#E3C97A` 3.1%, `#B8923F` 3.1%, `#D9B863` 3.1%, `#5D5342` 0.4%

## Typography

- Headings: **Playfair Display** (weight 700)
- Body: **Lora**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;1,400&family=Playfair+Display:ital,wght@0,600;0,700;1,600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Playfair Display | 52 px | 700 | 56.16px | normal |
| Heading / H2 | Lora | 12 px | 700 | normal | 2.88px |
| Subheading / H3 | Playfair Display | 26 px | 700 | normal | normal |
| Body | Lora | 17 px | 400 | 28.05px | normal |
| Button | Lora | 16 px | 500 | normal | normal |

## Shape, space and motion

- Radius: sm 3 px, md 4 px, lg 8 px, pill (fully rounded)
- Shadows: sm: `rgba(40, 25, 10, 0.6) 0px 14px 26px -12px, rgba(255, 255, 255, 0.5) 0px 1px 0px 0px inset` · md: `rgba(60, 40, 10, 0.25) 0px 0px 40px 0px inset` · lg: `rgba(40, 25, 10, 0.55) 0px 30px 60px -20px, rgba(255, 255, 255, 0.06) 0px 0px 0px 2px inset`
- Spacing: base unit 4 px; common steps 4 px, 8 px, 10 px, 11 px, 14 px, 16 px, 20 px, 22 px, 24 px
- Layout: container 1200 px; breakpoints 700 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** dry-witted, dignified, kind.

The deadpan voice of a museum curator describing an extinct web page with total solemnity. It is affectionate about loss and always points visitors to something living.

**Do**

- Write in plaque style, with date, medium and provenance
- Keep the joke straight-faced
- Always offer a next step

**Do not**

- Sarcasm at the visitor's expense
- Technical error codes without context
- Cutesy emoji or slang

## Taglines

1. This page has left the building
2. Gone, but not forgotten
3. Exhibit No. 410, retired in 2019
4. Please visit the gift shop
5. Admire from a distance. It cannot return

**Boilerplate:** Brightwick & Sons is a family retailer whose retired web pages are preserved as museum exhibits, with a gift shop and a guide to what remains.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Visit the gift shop |
| secondaryCta | Audio guide |
| success | Flowers left. Thank you |
| error | The shop is closed for restoration. Try again |
| empty | No exhibits found. Try another search |

---
Source listing key `o:error-410-museum`. Rebuild with `python3 scripts/brand-kit/build.py o:error-410-museum`.
