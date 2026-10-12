# Six Sides — brand kit

*Small gallery of six works on a cube.* Generated from the SiteShelf listing **Cube Rotator Gallery** (Gallery); every value below is read from that page, not invented.

> **Every side has a story**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Fraunces |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **cube** glyph. A cube is the object and the name in one shape. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#EFE9E0` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#231D16` | Body and heading text |
| textMuted | `#6A5F50` | Secondary text, captions |
| primary | `#FF9F1C` | Main actions, links, brand colour |
| secondary | `#5BC0BE` | Highlights, charts, second accent |
| border | `#CDBFAB` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#714914` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 13.82:1 | pass | pass |
| Muted text on background | 5.17:1 | pass | pass |
| Primary on background | 1.70:1 | fail | fail |
| Text on primary | 9.57:1 | pass | pass |
| Text on surface | 16.68:1 | pass | pass |

**Colours seen on the page** (share of use): `#EFE9E0` 85.8%, `#FFFFFF` 6.6%, `#5BC0BE` 1.7%, `#F4A261` 1.4%, `#FF9F1C` 1.0%, `#FFD166` 0.8%, `#F26B4F` 0.7%, `#1B1B3A` 0.7%, `#6A4C93` 0.7%, `#0B132B` 0.7%

## Typography

- Headings: **Fraunces** (weight 600)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,600;1,600&family=Inter:wght@400;500;600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Fraunces | 76 px | 600 | 76px | -1.52px |
| Heading / H2 | Fraunces | 24 px | 600 | normal | normal |
| Button | Arial | 18 px | 400 | normal | normal |

## Shape, space and motion

- Radius: sm 4 px, md 18 px, lg 18 px, pill (fully rounded)
- Shadows: sm: `rgba(255, 255, 255, 0.35) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.18) 0px 0px 60px 0px inset` · md: `rgba(60, 40, 20, 0.6) 0px 14px 30px -22px` · lg: `rgba(255, 255, 255, 0.35) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.18) 0px 0px 60px 0px inset`
- Spacing: base unit 4 px; common steps 2 px, 4 px, 6 px, 8 px, 10 px, 16 px, 18 px, 20 px, 22 px
- Layout: container 1200 px; breakpoints 600 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** curious, playful, gallery-quiet.

Six Sides sounds like a gallery guide who loves a small, odd show: warm, short and gently teasing. It invites a turn of the cube before it explains anything.

**Do**

- Name each work and artist in one short caption
- Invite action with a verb, such as 'Turn'
- Describe colour and mood rather than technique

**Do not**

- Use art-world abstractions
- Over-explain the artwork
- Talk down to the visitor

## Taglines

1. Every side has a story
2. Turn the cube, meet the work
3. Six small works, one object
4. Look all the way around
5. A gallery you can spin

**Boilerplate:** Six Sides is an online gallery that shows six small invented artworks on a rotating cube, with a caption for each face and a slow auto-spin for looking around.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Turn the cube |
| secondaryCta | Auto-spin |
| success | Now showing: Morning Roof. |
| error | The cube is stuck. Refresh to spin again. |
| empty | No work on this face yet. |

---
Source listing key `o:gallery-cube-rotator`. Rebuild with `python3 scripts/brand-kit/build.py o:gallery-cube-rotator`.
