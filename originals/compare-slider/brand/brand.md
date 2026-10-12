# Splitframe — brand kit

*Before and after image comparison slider.* Generated from the SiteShelf listing **Before/After Compare Slider** (Gallery); every value below is read from that page, not invented.

> **See the difference**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter Bold (stand-in for Hanken Grotesk) |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **chevrons** glyph on a squircle tile. Two opposing chevrons mirror the handle that slides between before and after. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#101114` | Page background |
| surface | `#FF9A6B` | Cards, panels, raised areas |
| text | `#9A9BA6` | Body and heading text |
| textMuted | `#F2F2F5` | Secondary text, captions |
| primary | `#FFD166` | Main actions, links, brand colour |
| secondary | `#9FD6E8` | Highlights, charts, second accent |
| border | `#2D2E37` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#715E34` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 6.84:1 | pass | pass |
| Muted text on background | 16.90:1 | pass | pass |
| Primary on background | 13.09:1 | pass | pass |
| Text on primary | 13.62:1 | pass | pass |
| Text on surface | 1.32:1 | fail | fail |

**Colours seen on the page** (share of use): `#101114` 67.9%, `#FF9A6B` 6.8%, `#FFD9A0` 6.8%, `#9FD6E8` 6.8%, `#4AA3C8` 6.8%, `#FFF6C9` 1.4%, `#7A5C8A` 1.0%, `#4E3D70` 1.0%, `#2C2552` 1.0%, `#1E1F26` 0.4%

## Typography

- Headings: **Hanken Grotesk** (weight 800)
- Body: **Hanken Grotesk**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;600;700;800&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Hanken Grotesk | 30 px | 800 | normal | -0.6px |
| Body | Hanken Grotesk | 16 px | 400 | 24px | normal |
| Button | Hanken Grotesk | 15 px | 600 | normal | normal |

## Shape, space and motion

- Radius: sm 16 px, md 24 px, lg 50 px, pill (fully rounded)
- Shadows: sm: `rgba(255, 255, 255, 0.45) 0px 0px 0px 7.8978px, rgba(0, 0, 0, 0.4) 0px 6px 20px 0px` · md: `rgba(0, 0, 0, 0.4) 0px 0px 12px 0px` · lg: `rgb(255, 233, 168) 0px 0px 60px 0px`
- Spacing: base unit 4 px; common steps 4 px, 6 px, 8 px, 9 px, 14 px, 16 px, 18 px, 24 px
- Layout: container 1200 px; breakpoints 640 px
- Motion: 150 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** clear, visual, modest.

Writes like a showroom guide who steps back and lets the picture speak. Short instructions, concrete scene names and a calm tone that never oversells the result.

**Do**

- Tell the viewer how to interact in one sentence
- Name scenes plainly, like Mountains or Living room
- Keep labels to one or two words

**Do not**

- Do not claim dramatic transformations
- Do not use the word magic
- Do not bury the instruction under hype

## Taglines

1. See the difference
2. Drag to compare, stay for the detail
3. Two images, one honest line
4. Slide the line, judge for yourself
5. Before and after, side by side

**Boilerplate:** Splitframe is an image comparison component that lets visitors drag a divider, tap or use the keyboard to see a before and after side by side, in any scene.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Drag the handle |
| secondaryCta | Switch scene |
| success | Compare ready. Slide to explore. |
| error | The image could not load. Please reload the scene. |
| empty | Pick a scene to compare. |

---
Source listing key `o:compare-slider`. Rebuild with `python3 scripts/brand-kit/build.py o:compare-slider`.
