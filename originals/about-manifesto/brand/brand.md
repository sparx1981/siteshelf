# Hollow Oak Studio — brand kit

*Furniture and design studio, built to be mended.* Generated from the SiteShelf listing **Studio Manifesto** (About Page); every value below is read from that page, not invented.

> **Build it so someone can mend it**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Big Shoulders Display |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **sprout** glyph. A young shoot on an oak nods to the growing tree on the page and to furniture that outlives its maker. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#0E1418` | Page background |
| surface | `#FFB454` | Cards, panels, raised areas |
| text | `#F7F1E6` | Body and heading text |
| textMuted | `#D9D3C7` | Secondary text, captions |
| primary | `#FFB454` | Main actions, links, brand colour |
| secondary | `#111C42` | Highlights, charts, second accent |
| border | `#FFB454` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#111C42` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 16.50:1 | pass | pass |
| Muted text on background | 12.45:1 | pass | pass |
| Primary on background | 10.52:1 | pass | pass |
| Text on primary | 11.14:1 | pass | pass |
| Text on surface | 1.57:1 | fail | fail |

**Colours seen on the page** (share of use): `#0E1418` 87.1%, `#FFB454` 8.0%, `#1E0E04` 1.1%, `#35495F` 0.9%, `#6F767B` 0.8%, `#FFFFFF` 0.8%, `#000000` 0.7%, `#3C2B1B` 0.2%, `#2F7A45` 0.2%, `#4F9F5A` 0.2%

## Typography

- Headings: **Big Shoulders Display** (weight 800)
- Body: **Big Shoulders Display**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@800&family=Work+Sans:wght@400;500;600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Big Shoulders Display | 96 px | 800 | 88.32px | normal |
| Heading / H2 | Big Shoulders Display | 100 px | 800 | 92px | normal |
| Body | Big Shoulders Display | 109.4 px | 800 | 100.685px | normal |
| Button | Work Sans | 16 px | 400 | 24.8px | normal |
| Caption / eyebrow | Work Sans | 12 px | 600 | normal | 2.4px |

## Shape, space and motion

- Radius: sm 0 px, md 0 px, lg 0 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 2 px, 6 px, 14 px, 16 px, 20 px, 24 px, 28 px, 34 px, 60 px
- Layout: container 1200 px; breakpoints 819 px
- Motion: 500 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** earnest, grounded, unhurried.

Hollow Oak speaks like a carpenter reading a creed aloud: short declarative lines, warm and a little stubborn. It trusts plain words about wood, repair and time over any design-world gloss.

**Do**

- State beliefs as short sentences a person could say at a workbench
- Name the material, the joint or the tool instead of the idea
- Let a line end early and leave room for the reader

**Do not**

- Use agency jargon like 'solutions' or 'experience'
- Promise perfection when we mean repairable
- Shout, since the type is already big

## Taglines

1. Build it so someone can mend it
2. Ten things we believe
3. Made slowly, kept for decades
4. Furniture that earns its scratches
5. Oak, patience and a good joint

**Boilerplate:** Hollow Oak Studio is an independent furniture and design workshop that makes pieces to be repaired, passed on and lived with, guided by ten written beliefs about craft.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Visit the workshop |
| secondaryCta | Read the ten again |
| success | Line received. We will be in touch. |
| error | That did not go through. Try once more. |
| empty | Nothing here yet, just sawdust. |

---
Source listing key `o:about-manifesto`. Rebuild with `python3 scripts/brand-kit/build.py o:about-manifesto`.
