# Depth Bench — brand kit

*Utility site for CSS box shadows.* Generated from the SiteShelf listing **Box Shadow Lab** (Tools); every value below is read from that page, not invented.

> **Shadows, built layer by layer**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Sora |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **stack** glyph. Stacked layers represent the layered shadows the tool builds. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F1F3F8` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#161A26` | Body and heading text |
| textMuted | `#586078` | Secondary text, captions |
| primary | `#4153D6` | Main actions, links, brand colour |
| secondary | `#EFE3CD` | Highlights, charts, second accent |
| border | `#C9CFE0` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#EFE3CD` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 15.63:1 | pass | pass |
| Muted text on background | 5.63:1 | pass | pass |
| Primary on background | 5.51:1 | pass | pass |
| Text on primary | 6.12:1 | pass | pass |
| Text on surface | 17.36:1 | pass | pass |

**Colours seen on the page** (share of use): `#F1F3F8` 94.6%, `#0F1220` 3.2%, `#000000` 0.9%, `#4153D6` 0.6%, `#EFE3CD` 0.2%, `#DFE4F8` 0.2%, `#D6E3D4` 0.2%, `#C9683A` 0.0%, `#4A7A5A` 0.0%, `#586078` 0.0%

## Typography

- Headings: **Sora** (weight 600)
- Body: **Inter**
- Mono: **IBM Plex Mono**
- Google Fonts: `https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@500&family=Inter:wght@400;500;600&family=Sora:wght@600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Sora | 44 px | 600 | 46.2px | normal |
| Heading / H2 | Sora | 14 px | 600 | normal | 0.84px |
| Subheading / H3 | Sora | 20 px | 600 | 22px | normal |
| Button | Inter | 13 px | 600 | normal | normal |
| Caption / eyebrow | Inter | 12 px | 600 | normal | 1.92px |
| Mono | IBM Plex Mono | 13 px | 500 | 20.8px | normal |

## Shape, space and motion

- Radius: sm 7 px, md 10 px, lg 12 px, pill (fully rounded)
- Shadows: sm: `rgba(20, 25, 50, 0.1) 0px 1px 2px 0px, rgba(20, 25, 50, 0.1) 0px 4px 8px 0px, rgba(20, 25, 50, 0.12) 0px 12px 24px 0px` · md: `rgba(20, 25, 50, 0.12) 0px 2px 6px 0px` · lg: `rgba(20, 25, 50, 0.08) 0px 2px 8px 0px, rgba(20, 25, 50, 0.1) 0px 8px 24px 0px`
- Spacing: base unit 4 px; common steps 2 px, 3 px, 4 px, 6 px, 8 px, 10 px, 12 px, 14 px, 16 px
- Layout: container 1280 px; breakpoints 560 px, 980 px
- Motion: 150 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** practical, tidy, nerdy.

Depth Bench talks like a workshop bench for front-end developers: tools first, jargon welcome and nothing flashy. Labels are exact and every control shows its CSS.

**Do**

- Name each control with its CSS property
- Show the copy-ready CSS at all times
- Explain presets in a single phrase

**Do not**

- Do not call a shadow beautiful or stunning
- Avoid vague words like nice
- Never hide the generated code

## Taglines

1. Shadows, built layer by layer
2. Natural depth from one number
3. Tweak, preview and copy
4. Soft, layered or sharp
5. CSS shadows without the guessing

**Boilerplate:** Depth Bench is a utility site for designers and developers featuring a layered box-shadow editor, a natural shadow generator and copy-ready CSS for any surface.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Generate |
| secondaryCta | Copy |
| success | CSS copied. |
| error | Could not copy. Select the CSS by hand. |
| empty | No layers yet. Add a layer. |

---
Source listing key `o:tool-shadow-lab`. Rebuild with `python3 scripts/brand-kit/build.py o:tool-shadow-lab`.
