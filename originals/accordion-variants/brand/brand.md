# Quartz UI — brand kit

*Accessible accordion patterns for interfaces.* Generated from the SiteShelf listing **Accordion Variants** (Components); every value below is read from that page, not invented.

> **Five patterns, one keyboard model**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **stack** glyph. Stacked panels echo the layers of an accordion and the pieces of a component kit. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F8F9FB` | Page background |
| surface | `#EFEFEF` | Cards, panels, raised areas |
| text | `#475467` | Body and heading text |
| textMuted | `#667085` | Secondary text, captions |
| primary | `#0E9384` | Main actions, links, brand colour |
| secondary | `#7AC4BB` | Highlights, charts, second accent |
| border | `#E4E7EC` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#0C4440` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 7.30:1 | pass | pass |
| Muted text on background | 4.72:1 | pass | pass |
| Primary on background | 3.61:1 | fail | pass |
| Text on primary | 5.17:1 | pass | pass |
| Text on surface | 6.69:1 | pass | pass |

**Colours seen on the page** (share of use): `#F8F9FB` 98.7%, `#475467` 0.7%, `#667085` 0.2%, `#101828` 0.2%, `#0E9384` 0.1%, `#FEF3C7` 0.1%, `#DBEAFE` 0.1%, `#0B6E63` 0.0%, `#7AC4BB` 0.0%, `#0B0B0F` 0.0%

## Typography

- Headings: **Inter** (weight 700)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Inter | 28 px | 700 | 33.6px | normal |
| Heading / H2 | Inter | 12 px | 700 | normal | 1.2px |
| Subheading / H3 | Inter | 15 px | 400 | 23.25px | normal |
| Body | Inter | 15 px | 400 | 23.25px | normal |
| Button | Inter | 13 px | 600 | normal | normal |
| Caption / eyebrow | Inter | 13.5 px | 400 | normal | normal |

## Shape, space and motion

- Radius: sm 8 px, md 14 px, lg 16 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 2 px, 4 px, 6 px, 8 px, 10 px, 12 px, 14 px, 16 px, 18 px
- Layout: container 1200 px; breakpoints single fluid layout
- Motion: 250 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** tidy, exact, friendly.

Quartz UI sounds like good documentation written by someone who actually uses the components. It names the pattern, shows the keyboard behaviour and answers the question in the first line.

**Do**

- Answer the question in the opening sentence
- Mention the keyboard shortcut next to each pattern
- Keep headings to four words or fewer

**Do not**

- Do not call anything 'magical' or 'powerful'
- Do not bury the answer under a preamble
- Do not use exclamation marks in docs

## Taglines

1. Five patterns, one keyboard model
2. Open what you need, nothing more
3. Components that behave themselves
4. Expand all, collapse all, break nothing
5. Clear panels for clear interfaces

**Boilerplate:** Quartz UI is a component library whose accordions, tabs and menus share one consistent keyboard model and need no framework.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Expand all |
| secondaryCta | Collapse all |
| success | Panel opened. Focus moved to its content. |
| error | That panel could not open. Reload the page and try again. |
| empty | No questions yet. Add the first one. |

---
Source listing key `o:accordion-variants`. Rebuild with `python3 scripts/brand-kit/build.py o:accordion-variants`.
