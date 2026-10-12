# Framelix — brand kit

*Cinematic 3D motion studio.* Generated from the SiteShelf listing **Framelix 3D Studios** (Agency); every value below is read from that page, not invented.

> **Cinematic motion in 24 to 48 hours**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **play** glyph on a circle tile. A play triangle says motion and film at a glance. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#000000` | Page background |
| surface | `#EAEAEA` | Cards, panels, raised areas |
| text | `#FFFFFF` | Body and heading text |
| textMuted | `#A6A6A6` | Secondary text, captions |
| primary | `#A6A4FF` | Main actions, links, brand colour |
| secondary | `#CECDFF` | Highlights, charts, second accent |
| border | `#242424` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#4C4B74` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 21.00:1 | pass | pass |
| Muted text on background | 8.63:1 | pass | pass |
| Primary on background | 9.38:1 | pass | pass |
| Text on primary | 8.77:1 | pass | pass |
| Text on surface | 1.20:1 | fail | fail |

**Colours seen on the page** (share of use): `#000000` 67.4%, `#EAEAEA` 30.7%, `#A6A4FF` 1.5%, `#FFFFFF` 0.4%, `#A6A6A6` 0.0%, `#CECDFF` 0.0%, `#242424` 0.0%, `#4C4B74` 0.0%

## Typography

- Headings: **Inter** (weight 500)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Inter | 68 px | 500 | 73.44px | -1.36px |
| Heading / H2 | Inter | 52 px | 500 | 57.2px | -1.04px |
| Button | Inter | 22 px | 500 | normal | normal |
| Navigation | Inter | 19.2 px | 600 | normal | -0.384px |

## Shape, space and motion

- Radius: sm 0 px, md 0 px, lg 0 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 2 px, 4 px, 8 px, 10 px, 12 px, 14 px, 16 px, 24 px, 60 px
- Layout: container 1200 px; breakpoints 600 px, 900 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** cinematic, fast, polished.

Framelix sounds like a producer pitching a trailer: confident, visual and a little hurried. Deadlines and deliverables are stated in hours, never vaguely.

**Do**

- State turnaround in hours or days
- Name the deliverable: reel, logo sting, product loop
- Use film vocabulary sparingly: cut, frame, reel

**Do not**

- Do not promise 'Hollywood quality'
- Avoid vague 'stunning visuals'
- Never leave out the turnaround time

## Taglines

1. Cinematic motion in 24 to 48 hours
2. Frames that move people
3. Studio-grade 3D, shipped fast
4. Roll the reel
5. Motion with a point of view

**Boilerplate:** Framelix 3D is a cinematic motion studio delivering product animations, logo stings and reels in 24 to 48 hours, with a catalogue of ready-made scenes.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Explore Reel |
| secondaryCta | Buy Now |
| success | Order placed. Delivery within 48 hours. |
| error | Payment failed. Please check your details and retry. |
| empty | No scenes in your cart yet. |

---
Source listing key `m:framelix-3d-studios`. Rebuild with `python3 scripts/brand-kit/build.py m:framelix-3d-studios`.
