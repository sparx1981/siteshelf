# Graphite & Gum — brand kit

*Stationery brand for sketchers and note-takers.* Generated from the SiteShelf listing **Pencil Draw Loader** (Loaders); every value below is read from that page, not invented.

> **Drawn while you wait**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Caveat |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **monogram** glyph on a circle tile. A hand-drawn G stands for the brand and looks like a quick pencil mark. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#FFFDF6` | Page background |
| surface | `#D9482B` | Cards, panels, raised areas |
| text | `#2A2620` | Body and heading text |
| textMuted | `#6B6354` | Secondary text, captions |
| primary | `#D9482B` | Main actions, links, brand colour |
| secondary | `#E8C9A0` | Highlights, charts, second accent |
| border | `#2A2620` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#E8C9A0` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 14.77:1 | pass | pass |
| Muted text on background | 5.83:1 | pass | pass |
| Primary on background | 4.20:1 | fail | pass |
| Text on primary | 4.60:1 | pass | pass |
| Text on surface | 3.52:1 | fail | pass |

**Colours seen on the page** (share of use): `#FFFDF6` 31.0%, `#D9482B` 21.4%, `#F7F1E3` 21.4%, `#C8B996` 21.4%, `#3B3B3B` 3.0%, `#2A2620` 0.7%, `#000000` 0.3%, `#EFE5CC` 0.3%, `#6B6354` 0.2%, `#6B6B6B` 0.1%

## Typography

- Headings: **Caveat** (weight 700)
- Body: **Work Sans**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Work+Sans:wght@400;500;600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Caveat | 72 px | 700 | 72px | normal |
| Body | Work Sans | 17 px | 400 | 26.35px | normal |
| Button | Work Sans | 16 px | 600 | 24.8px | normal |
| Caption / eyebrow | Work Sans | 13 px | 600 | normal | 2.08px |

## Shape, space and motion

- Radius: sm 10 px, md 18 px, lg 18 px, pill (fully rounded)
- Shadows: sm: `rgba(60, 40, 10, 0.5) 0px 24px 50px -28px` · md: `rgba(60, 40, 10, 0.5) 0px 24px 50px -28px` · lg: `rgba(60, 40, 10, 0.5) 0px 24px 50px -28px`
- Spacing: base unit 2 px; common steps 2 px, 8 px, 9 px, 10 px, 12 px, 14 px, 18 px, 20 px, 22 px
- Layout: container 1200 px; breakpoints 520 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** handmade, cheerful, unfussy.

Sounds like a friendly scribble in a sketchbook margin: warm, loose and a bit self-deprecating. It talks about pencils, erasers and patience with a smile.

**Do**

- Use stationery words like stroke, sketch and rub out
- Keep sentences short and a bit chatty
- Let a joke about erasing slip in

**Do not**

- No corporate loading-bar language
- Avoid technical progress jargon
- Never rush the reader

## Taglines

1. Drawn while you wait
2. Sketch first, perfect later
3. Every line is a good start
4. Pencils, paper and patience
5. Rubbed out, drawn again

**Boilerplate:** Graphite & Gum is a stationery brand making pencils, sketchbooks and erasers for people who think best with a line on paper.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Replay |
| secondaryCta | Pause |
| success | All drawn. Ready when you are. |
| error | The pencil slipped. Replay to try again. |
| empty | Nothing sketched yet. Pick a shape. |

---
Source listing key `o:loader-pencil-draw`. Rebuild with `python3 scripts/brand-kit/build.py o:loader-pencil-draw`.
