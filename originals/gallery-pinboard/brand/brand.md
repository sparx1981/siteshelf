# Driftboard — brand kit

*Moodboard pinboard for creative projects.* Generated from the SiteShelf listing **Draggable Pinboard** (Gallery); every value below is read from that page, not invented.

> **Pin it. Move it. Make a mood**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Caveat |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **grid** glyph. A dot grid echoes the snap-to-grid surface of the board. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#1B2421` | Page background |
| surface | `#2D3A35` | Cards, panels, raised areas |
| text | `#E8F0EC` | Body and heading text |
| textMuted | `#9FB2A9` | Secondary text, captions |
| primary | `#FF7A59` | Main actions, links, brand colour |
| secondary | `#2EC4B6` | Highlights, charts, second accent |
| border | `#3A4A44` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#713A2E` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 13.71:1 | pass | pass |
| Muted text on background | 7.13:1 | pass | pass |
| Primary on background | 6.19:1 | pass | pass |
| Text on primary | 7.65:1 | pass | pass |
| Text on surface | 10.24:1 | pass | pass |

**Colours seen on the page** (share of use): `#1B2421` 33.0%, `#2D3A35` 27.1%, `#E7ECE9` 23.2%, `#FFFFFF` 8.5%, `#C5D0CA` 5.8%, `#FFF3B0` 0.6%, `#FFD9D2` 0.6%, `#DBE5FF` 0.6%, `#264653` 0.3%, `#6A4C93` 0.3%

## Typography

- Headings: **Caveat** (weight 600)
- Body: **DM Sans**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Caveat:wght@600&family=DM+Sans:wght@400;500;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Button | Caveat | 32 px | 600 | normal | normal |

## Shape, space and motion

- Radius: sm 2 px, md 10 px, lg 18 px, pill (fully rounded)
- Shadows: sm: `rgba(0, 0, 0, 0.35) 0px 3px 4px 0px` · md: `rgba(0, 0, 0, 0.4) 0px 8px 14px -8px` · lg: `rgba(0, 0, 0, 0.45) 0px 8px 16px -8px`
- Spacing: base unit 4 px; common steps 6 px, 8 px, 10 px, 14 px, 16 px, 20 px, 36 px, 40 px
- Layout: container 1200 px; breakpoints single fluid layout
- Motion: 150 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** loose, creative, tidy-minded.

Driftboard sounds like a studio wall: casual and visual, with labels that read like sticky notes. It encourages play first and offers neat-up tools without scolding.

**Do**

- Write labels the way people write on sticky notes
- Use verbs that move things: drag, pin, snap, tidy
- Announce each move in plain words

**Do not**

- Do not insist on structure; let the board be messy
- Avoid design buzzwords like ideate
- Never auto-delete anything without an undo

## Taglines

1. Pin it. Move it. Make a mood
2. A wall for half-formed ideas
3. Drag your references into place
4. Messy now, tidy when you say
5. Everything on one board

**Boilerplate:** Driftboard is a draggable moodboard where designers pin images, notes and colour swatches, nudge them with the keyboard and keep the layout saved between visits.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | + Note |
| secondaryCta | + Swatch |
| success | Pinned. Moved to the front. |
| error | Could not save the board. Your layout is still here. |
| empty | Nothing pinned yet. Add a note or swatch. |

---
Source listing key `o:gallery-pinboard`. Rebuild with `python3 scripts/brand-kit/build.py o:gallery-pinboard`.
