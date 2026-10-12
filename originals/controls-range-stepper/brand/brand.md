# Tuner — brand kit

*Settings controls with live readouts.* Generated from the SiteShelf listing **Range and Stepper Controls** (Form Controls); every value below is read from that page, not invented.

> **Dial it in**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Plus Jakarta Sans |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **dial** glyph on a squircle tile. A dial is the natural icon for a product built around tuning values. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F2F4FA` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#151A2E` | Body and heading text |
| textMuted | `#4F46E5` | Secondary text, captions |
| primary | `#4F46E5` | Main actions, links, brand colour |
| secondary | `#151A2E` | Highlights, charts, second accent |
| border | `#E2E6F0` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#151A2E` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 15.66:1 | pass | pass |
| Muted text on background | 5.72:1 | pass | pass |
| Primary on background | 5.72:1 | pass | pass |
| Text on primary | 6.29:1 | pass | pass |
| Text on surface | 17.23:1 | pass | pass |

**Colours seen on the page** (share of use): `#F2F4FA` 98.4%, `#DDE1EE` 0.5%, `#7430E8` 0.3%, `#4F46E5` 0.2%, `#E83030` 0.1%, `#6A7290` 0.1%, `#151A2E` 0.1%, `#E8E830` 0.1%, `#30E830` 0.1%, `#30E8E8` 0.1%

## Typography

- Headings: **Plus Jakarta Sans** (weight 800)
- Body: **Plus Jakarta Sans**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;700;800&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Plus Jakarta Sans | 26 px | 800 | 39px | normal |
| Heading / H2 | Plus Jakarta Sans | 13 px | 700 | 19.5px | 1.04px |
| Button | Arial | 22 px | 700 | normal | normal |

## Shape, space and motion

- Radius: sm 10 px, md 16 px, lg 22 px, pill (fully rounded)
- Shadows: sm: `rgba(0, 0, 0, 0.133) 0px 1px 4px 0px` · md: `rgba(0, 0, 0, 0.2) 0px 1px 5px 0px` · lg: `rgba(0, 0, 0, 0.2) 0px 3px 8px 0px`
- Spacing: base unit 4 px; common steps 4 px, 6 px, 12 px, 14 px, 15 px, 16 px, 22 px, 32 px
- Layout: container 1200 px; breakpoints 700 px
- Motion: 150 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** precise, tactile, calm.

Sounds like a well-made instrument panel label: exact, short and unfussy. Every control says what it sets and shows the value beside it.

**Do**

- Label controls with a noun, then the live value
- Use units and minimums plainly
- Prefer sentence case

**Do not**

- No marketing copy on a control surface
- No ambiguous toggles without a state word
- No decorative verbs

## Taglines

1. Dial it in
2. Every setting, within reach
3. Fine control, plain labels
4. Turn, slide, step, done
5. Settings that answer back

**Boilerplate:** Tuner is a settings and filtering interface with range sliders, steppers, segmented switches and knobs, each showing its value live and working fully from the keyboard.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Copy hex |
| secondaryCta | Reset |
| success | Copied to clipboard |
| error | Value out of range, adjust and retry |
| empty | No filters set yet |

---
Source listing key `o:controls-range-stepper`. Rebuild with `python3 scripts/brand-kit/build.py o:controls-range-stepper`.
