# Huewise — brand kit

*Accessibility tool for colour vision.* Generated from the SiteShelf listing **Colour Blindness Simulator** (Tools); every value below is read from that page, not invented.

> **See your palette through other eyes**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Outfit |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **aperture** glyph on a circle tile. An aperture-like iris suggests looking through different eyes. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#FFFFFF` | Page background |
| surface | `#F6F4EF` | Cards, panels, raised areas |
| text | `#1B1B1F` | Body and heading text |
| textMuted | `#55525A` | Secondary text, captions |
| primary | `#F29E1C` | Main actions, links, brand colour |
| secondary | `#D7263D` | Highlights, charts, second accent |
| border | `#D6D0C2` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#D7263D` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 17.17:1 | pass | pass |
| Muted text on background | 7.66:1 | pass | pass |
| Primary on background | 2.17:1 | fail | fail |
| Text on primary | 9.06:1 | pass | pass |
| Text on surface | 15.62:1 | pass | pass |

**Colours seen on the page** (share of use): `#FFFFFF` 83.2%, `#FDF3DC` 11.8%, `#EFECFF` 1.7%, `#B9CFAE` 0.9%, `#A3BF97` 0.7%, `#1B1B1F` 0.5%, `#2E933C` 0.4%, `#D7263D` 0.3%, `#F29E1C` 0.3%, `#2F6FDB` 0.2%

## Typography

- Headings: **Outfit** (weight 600)
- Body: **Inter**
- Mono: **IBM Plex Mono**
- Google Fonts: `https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@500&family=Inter:wght@400;500;600&family=Outfit:wght@600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Outfit | 52 px | 600 | 53.56px | normal |
| Heading / H2 | Inter | 13 px | 600 | normal | 1.3px |
| Subheading / H3 | Outfit | 17 px | 600 | normal | normal |
| Body | Inter | 14.5 px | 400 | 21.75px | normal |
| Button | Inter | 14 px | 600 | normal | normal |
| Caption / eyebrow | Inter | 12 px | 600 | normal | 1.92px |
| Mono | IBM Plex Mono | 9.5 px | 500 | normal | normal |

## Shape, space and motion

- Radius: sm 8 px, md 12 px, lg 14 px, pill (fully rounded)
- Shadows: sm: `rgba(30, 30, 40, 0.5) 0px 24px 40px -28px` · md: `rgba(30, 30, 40, 0.5) 0px 24px 40px -28px` · lg: `rgba(30, 30, 40, 0.5) 0px 24px 40px -28px`
- Spacing: base unit 4 px; common steps 2 px, 4 px, 6 px, 8 px, 10 px, 12 px, 14 px, 16 px, 18 px
- Layout: container 1240 px; breakpoints 560 px, 1000 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** practical, inclusive, plainly helpful.

Sounds like an accessibility specialist who explains without lecturing: calm, concrete and kind about real people with real eyes. It names the problem pair and suggests a fix.

**Do**

- Name the specific colours that clash
- Describe what a person sees in plain words
- Use American spelling, but say colour-blind accurately

**Do not**

- No medical jargon in the interface
- Avoid blaming designers
- Never imply colour blindness is a defect

## Taglines

1. See your palette through other eyes
2. Colour that works for everyone
3. Test before you ship
4. Find the pairs that blur
5. Design everyone can read

**Boilerplate:** Huewise is an accessibility website offering a colour blindness simulator that shows how a palette, chart and scene look under the main types of colour vision deficiency.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Randomize |
| secondaryCta | Reset palette |
| success | Palette checked. No confusing pairs found. |
| error | Couldn't read that colour. Enter a hex code like #f29e1c. |
| empty | No colours yet. Add a swatch to start. |

---
Source listing key `o:tool-colorblind-sim`. Rebuild with `python3 scripts/brand-kit/build.py o:tool-colorblind-sim`.
