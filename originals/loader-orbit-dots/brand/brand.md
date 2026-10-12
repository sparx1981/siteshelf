# Calmloop — brand kit

*Quiet loading spinners for interfaces.* Generated from the SiteShelf listing **Orbit Dot Loaders** (Loaders); every value below is read from that page, not invented.

> **Loaders that do not shout**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Outfit |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **orbit** glyph. Orbiting dots are both the product and its mood. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#0F1524` | Page background |
| surface | `#172036` | Cards, panels, raised areas |
| text | `#9AA8C7` | Body and heading text |
| textMuted | `#E9EEFC` | Secondary text, captions |
| primary | `#6EC7FF` | Main actions, links, brand colour |
| secondary | `#22304F` | Highlights, charts, second accent |
| border | `#263250` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#22304F` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 7.63:1 | pass | pass |
| Muted text on background | 15.70:1 | pass | pass |
| Primary on background | 9.78:1 | pass | pass |
| Text on primary | 10.55:1 | pass | pass |
| Text on surface | 6.79:1 | pass | pass |

**Colours seen on the page** (share of use): `#0F1524` 69.8%, `#172036` 29.2%, `#FFFFFF` 0.4%, `#9AA8C7` 0.2%, `#22304F` 0.2%, `#E9EEFC` 0.2%, `#6EC7FF` 0.1%, `#B7E4FF` 0.0%, `#0B0B0F` 0.0%

## Typography

- Headings: **Outfit** (weight 700)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Outfit:wght@500;600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Outfit | 58 px | 700 | 60.32px | -1.16px |
| Heading / H2 | Outfit | 16 px | 600 | normal | normal |
| Body | Inter | 18 px | 400 | 27.9px | normal |
| Button | Inter | 16 px | 600 | 24.8px | normal |
| Caption / eyebrow | Outfit | 13 px | 600 | normal | 2.08px |

## Shape, space and motion

- Radius: sm 16 px, md 20 px, lg 20 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 2 px; common steps 2 px, 6 px, 7 px, 8 px, 10 px, 12 px, 14 px, 16 px, 18 px
- Layout: container 1100 px; breakpoints 560 px, 900 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** quiet, gentle, precise.

Calmloop speaks softly to designers who are tired of loud interfaces. It is short, polite and technical when it needs to be, and never uses a shout to make a point.

**Do**

- Describe motion in plain terms: slow, steady, soft
- Give speeds and sizes exactly
- Keep captions below fifteen words

**Do not**

- Do not use 'blazing' or 'lightning'
- Do not describe a spinner as 'delightful'
- Do not shout

## Taglines

1. Loaders that do not shout
2. Orbits for the waiting moments
3. A calm moment while it loads
4. Spin gently, wait kindly
5. Small motion, large patience

**Boilerplate:** Calmloop is a UI kit of six calm orbiting-dot loaders with shared controls for speed, size and colour.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Copy loader |
| secondaryCta | Pause all |
| success | Copied. Paste it into your project. |
| error | Speed must be between 0.5 and 3. Try again. |
| empty | No loaders match. Clear the filter. |

---
Source listing key `o:loader-orbit-dots`. Rebuild with `python3 scripts/brand-kit/build.py o:loader-orbit-dots`.
