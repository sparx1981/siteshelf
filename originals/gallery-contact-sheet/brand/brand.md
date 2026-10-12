# Safelight Darkroom — brand kit

*Film darkroom and contact-sheet service.* Generated from the SiteShelf listing **Film Contact Sheet** (Gallery); every value below is read from that page, not invented.

> **Circle the frames that matter**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Instrument Serif |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **aperture** glyph. A lens aperture ties to film while its bladed shape resembles a darkroom enlarger. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#17110D` | Page background |
| surface | `#0B0908` | Cards, panels, raised areas |
| text | `#E0884A` | Body and heading text |
| textMuted | `#EFE6DA` | Secondary text, captions |
| primary | `#C8B6FF` | Main actions, links, brand colour |
| secondary | `#FF7A59` | Highlights, charts, second accent |
| border | `#4A3C31` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#5A5374` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 6.94:1 | pass | pass |
| Muted text on background | 15.15:1 | pass | pass |
| Primary on background | 10.33:1 | pass | pass |
| Text on primary | 10.84:1 | pass | pass |
| Text on surface | 7.37:1 | pass | pass |

**Colours seen on the page** (share of use): `#17110D` 66.8%, `#222222` 24.7%, `#CBF3F0` 1.3%, `#C8B6FF` 1.1%, `#2EC4B6` 1.0%, `#6A4C93` 1.0%, `#D62828` 1.0%, `#264653` 1.0%, `#FF7A59` 1.0%, `#0B132B` 1.0%

## Typography

- Headings: **Instrument Serif** (weight 400)
- Body: **DM Mono**
- Google Fonts: `https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Inter:wght@400;500&family=Instrument+Serif&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Instrument Serif | 88 px | 400 | 83.6px | normal |
| Body | DM Mono | 12 px | 500 | normal | 1.2px |
| Button | DM Mono | 12 px | 500 | normal | 0.96px |

## Shape, space and motion

- Radius: sm 1 px, md 4 px, lg 6 px, pill (fully rounded)
- Shadows: sm: `rgb(23, 17, 13) 0px 0px 0px 2px, rgb(255, 255, 255) 0px 0px 0px 4px` · md: `rgb(0, 0, 0) 0px 40px 80px -30px` · lg: `rgb(23, 17, 13) 0px 0px 0px 2px, rgb(255, 255, 255) 0px 0px 0px 4px`
- Spacing: base unit 2 px; common steps 6 px, 8 px, 10 px, 12 px, 14 px, 16 px, 18 px, 22 px, 28 px
- Layout: container 1200 px; breakpoints 800 px
- Motion: 600 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** analogue, patient, precise.

Writes like a printer under a red lamp: quiet, technical and affectionate toward grain. It speaks in frame numbers and stops, and treats a favourite as a decision worth circling.

**Do**

- Refer to frames, rolls and stops by number
- Use darkroom words like develop, mark and enlarge
- Keep sentences measured and low-key

**Do not**

- Do not use digital-photo filter language
- Do not hype with words like stunning
- Do not rush

## Taglines

1. Circle the frames that matter
2. Roll 14, in red pencil
3. Grain, patience and a safelight
4. Contact sheets, the honest first look
5. Develop slowly. Choose well.

**Boilerplate:** Safelight Darkroom develops black and white and colour film, makes proper contact sheets and enlargements, and gives photographers a place to mark their best frames by hand.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Develop colour |
| secondaryCta | Mark mode |
| success | Frame marked. Circled in red. |
| error | That frame won't enlarge. Try another. |
| empty | No marked frames yet. |

---
Source listing key `o:gallery-contact-sheet`. Rebuild with `python3 scripts/brand-kit/build.py o:gallery-contact-sheet`.
