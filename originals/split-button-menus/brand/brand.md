# Tangent Docs — brand kit

*Collaborative documents with toolbar controls.* Generated from the SiteShelf listing **Split Buttons & Groups** (Buttons); every value below is read from that page, not invented.

> **Compound controls that behave like native ones**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **chevrons** glyph on a circle tile. A chevron is the dropdown cue in a split button. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F4F5F7` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#5D6572` | Body and heading text |
| textMuted | `#14171C` | Secondary text, captions |
| primary | `#4F46E5` | Main actions, links, brand colour |
| secondary | `#9E99F1` | Highlights, charts, second accent |
| border | `#DCDFE4` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#9E99F1` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 5.39:1 | pass | pass |
| Muted text on background | 16.47:1 | pass | pass |
| Primary on background | 5.76:1 | pass | pass |
| Text on primary | 6.29:1 | pass | pass |
| Text on surface | 5.88:1 | pass | pass |

**Colours seen on the page** (share of use): `#F4F5F7` 93.3%, `#101319` 5.9%, `#4F46E5` 0.3%, `#5D6572` 0.2%, `#222834` 0.2%, `#D9DEEA` 0.1%, `#9E99F1` 0.0%

## Typography

- Headings: **Inter** (weight 600)
- Body: **Inter**
- Mono: **monospace**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@500&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Inter | 28 px | 600 | 33.6px | normal |
| Heading / H2 | Inter | 12 px | 600 | normal | 1.2px |
| Body | Inter | 14 px | 400 | 21px | normal |
| Button | Inter | 14 px | 500 | normal | normal |
| Mono | monospace | 13 px | 500 | normal | normal |

## Shape, space and motion

- Radius: sm 6 px, md 10 px, lg 12 px
- Shadows: sm: `rgba(0, 0, 0, 0.15) 0px 1px 2px 0px` · md: `rgba(0, 0, 0, 0.15) 0px 1px 2px 0px` · lg: `rgba(0, 0, 0, 0.15) 0px 1px 2px 0px`
- Spacing: base unit 2 px; common steps 2 px, 3 px, 4 px, 6 px, 8 px, 10 px, 12 px, 14 px, 16 px
- Layout: container 1200 px; breakpoints 560 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** clean, exact, technical.

Tangent Docs writes like a design-system maintainer: precise, keyboard-literate and light on adjectives. It describes what a control does before showing how it looks.

**Do**

- Name the control and its keyboard shortcut
- Describe state in plain words: pressed, expanded, selected
- Keep UI strings to three words

**Do not**

- Do not use 'magical' or 'seamless'
- Do not hide shortcuts
- Do not use vague labels like 'Actions'

## Taglines

1. Compound controls that behave like native ones
2. Toolbars with proper keyboard manners
3. Split buttons that remember
4. Small controls, carefully made
5. Docs that respond to every key

**Boilerplate:** Tangent Docs is a collaborative document editor with a toolbar kit of split buttons, segmented groups and toggles that work with the keyboard.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Publish |
| secondaryCta | Schedule |
| success | Published. Your doc is now live. |
| error | Publishing failed. Your draft has been kept. |
| empty | No recent actions yet. |

---
Source listing key `o:split-button-menus`. Rebuild with `python3 scripts/brand-kit/build.py o:split-button-menus`.
