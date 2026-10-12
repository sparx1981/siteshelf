# Asme — brand kit

*Cinematic site for the curious.* Generated from the SiteShelf listing **Asme** (Hero Section); every value below is read from that page, not invented.

> **Built for the curious**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Instrument Serif |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **aperture** glyph. An aperture is an eye opening, a fitting symbol for curiosity and a cinematic screen. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#000000` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#FFFFFF` | Body and heading text |
| textMuted | `#A6A6A6` | Secondary text, captions |
| primary | `#FFFFFF` | Main actions, links, brand colour |
| secondary | `#8C8C8C` | Highlights, charts, second accent |
| border | `#242424` | Dividers and outlines |
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

**Colours seen on the page** (share of use): `#000000` 99.7%, `#FFFFFF` 0.3%, `#A6A6A6` 0.0%, `#8C8C8C` 0.0%, `#242424` 0.0%

## Typography

- Headings: **Instrument Serif** (weight 400)
- Body: **ui-sans-serif**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Instrument Serif | 72 px | 400 | 79.2px | -1.8px |
| Body | ui-sans-serif | 14 px | 400 | 22.75px | normal |
| Button | ui-sans-serif | 15 px | 400 | normal | normal |
| Navigation | ui-sans-serif | 18 px | 600 | normal | normal |

## Shape, space and motion

- Radius: sm 0 px, md 0 px, lg 0 px, pill (fully rounded)
- Shadows: sm: `rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset` · md: `rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset` · lg: `rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset`
- Spacing: base unit 4 px; common steps 4 px, 6 px, 8 px, 12 px, 16 px, 24 px, 32 px, 48 px
- Layout: container 1024 px; breakpoints 480 px, 768 px, 1024 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** cinematic, reserved, quietly confident.

Asme speaks like a film title card: sparse, elegant and sure of itself. It invites rather than sells, and trusts a dark screen and a serif line to do the work.

**Do**

- Write lines like captions on a title card
- Keep sentences under eight words
- Use the second person sparingly

**Do not**

- Use growth-marketing phrases
- Use exclamation marks
- Over-explain the product

## Taglines

1. Built for the curious
2. For those who look twice
3. Ask more. Know more
4. Stay curious, always
5. Where questions begin

**Boilerplate:** Asme is a members' platform for curious people, delivering considered news and insight in a cinematic, ad-free setting with a monthly manifesto.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Sign Up |
| secondaryCta | Manifesto |
| success | You are in. Welcome to Asme. |
| error | That did not work. Please try again. |
| empty | Nothing new yet. Check back soon. |

---
Source listing key `m:asme`. Rebuild with `python3 scripts/brand-kit/build.py m:asme`.
