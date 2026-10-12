# faruq® — brand kit

*Visual archive of slow-shutter stories.* Generated from the SiteShelf listing **stories in light** (faruq® visual archive); every value below is read from that page, not invented.

> **stories in light and motion**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Archivo |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **aperture** glyph on a squircle tile. A camera aperture is the plainest symbol of a photographer's tool and of light let in over time. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#2B3342` | Page background |
| surface | `#141820` | Cards, panels, raised areas |
| text | `#F0F0EE` | Body and heading text |
| textMuted | `#ABAEB2` | Secondary text, captions |
| primary | `#F0F0EE` | Main actions, links, brand colour |
| secondary | `#848483` | Highlights, charts, second accent |
| border | `#F0F0EE` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#848483` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 11.12:1 | pass | pass |
| Muted text on background | 5.70:1 | pass | pass |
| Primary on background | 11.12:1 | pass | pass |
| Text on primary | 17.22:1 | pass | pass |
| Text on surface | 15.58:1 | pass | pass |

**Colours seen on the page** (share of use): `#2B3342` 69.8%, `#141820` 19.9%, `#4A5570` 10.0%, `#F0F0EE` 0.3%, `#ABAEB2` 0.0%, `#848483` 0.0%, `#0B0B0F` 0.0%

## Typography

- Headings: **Archivo** (weight 500)
- Body: **Archivo**

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Archivo | 104 px | 500 | 101.92px | -2.08px |
| Body | Archivo | 15.5 px | 400 | 24.8px | normal |

## Shape, space and motion

- Radius: sm 0 px, md 0 px, lg 0 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 4 px, 14 px, 20 px, 24 px, 28 px, 40 px, 44 px, 48 px, 64 px
- Layout: container 1200 px; breakpoints 500 px, 800 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** quiet, nocturnal, handmade.

faruq writes in lowercase, like a photographer's notebook kept after dark: short, dreamy and precise about shutter and light. The voice shows its process and avoids selling anything.

**Do**

- Write in lowercase with plain, short lines
- Mention shutter, light and time as materials
- Describe process, not ambition

**Do not**

- Use art-world jargon
- Use exclamation marks
- Write long artist statements

## Taglines

1. stories in light and motion
2. time, left open long enough
3. after dark, the light draws
4. slow shutters, moving light
5. no studio, only time and light

**Boilerplate:** faruq is a visual archive of short films and slow-shutter photographs made after dark, where motion is the subject and light does the drawing.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | view the archive |
| secondaryCta | say hello |
| success | message sent, thank you. |
| error | that did not send. try again. |
| empty | nothing here yet, check back soon. |

---
Source listing key `s:6a7720f002182a6c02231201`. Rebuild with `python3 scripts/brand-kit/build.py s:6a7720f002182a6c02231201`.
