# Lumen Learning — brand kit

*Friendly tutoring for families.* Generated from the SiteShelf listing **Story Style Testimonials** (Testimonials); every value below is read from that page, not invented.

> **Six stories from the kitchen table**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Bricolage Grotesque |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **book** glyph on a squircle tile. An open book fits a learning brand with a warm, approachable look. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#1A1020` | Page background |
| surface | `#000000` | Cards, panels, raised areas |
| text | `#FFFFFF` | Body and heading text |
| textMuted | `#F6EEF8` | Secondary text, captions |
| primary | `#FF7A5C` | Main actions, links, brand colour |
| secondary | `#C2307D` | Highlights, charts, second accent |
| border | `#FFFFFF` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#713A2F` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 18.44:1 | pass | pass |
| Muted text on background | 16.25:1 | pass | pass |
| Primary on background | 7.19:1 | pass | pass |
| Text on primary | 7.66:1 | pass | pass |
| Text on surface | 21.00:1 | pass | pass |

**Colours seen on the page** (share of use): `#1A1020` 61.2%, `#C2307D` 18.5%, `#000000` 12.9%, `#FFFFFF` 4.0%, `#FF7A5C` 3.2%, `#CBBBD2` 0.1%, `#A692AD` 0.0%, `#FF9A7A` 0.0%, `#713A2F` 0.0%

## Typography

- Headings: **Bricolage Grotesque** (weight 800)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@600;700;800&family=Inter:wght@400;500;600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Bricolage Grotesque | 68 px | 800 | 68px | -1.7px |
| Body | Inter | 18 px | 400 | 27.9px | normal |
| Button | Inter | 16 px | 600 | 24.8px | normal |
| Caption / eyebrow | Inter | 13 px | 600 | normal | 1.82px |

## Shape, space and motion

- Radius: sm 28 px, md 28 px, lg 28 px, pill (fully rounded)
- Shadows: sm: `rgba(0, 0, 0, 0.7) 0px 50px 100px -30px` · md: `rgba(0, 0, 0, 0.7) 0px 50px 100px -30px` · lg: `rgba(0, 0, 0, 0.7) 0px 50px 100px -30px`
- Spacing: base unit 4 px; common steps 4 px, 8 px, 10 px, 13 px, 14 px, 16 px, 18 px, 22 px, 24 px
- Layout: container 1160 px; breakpoints 900 px
- Motion: 150 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** encouraging, real, bright.

Lumen Learning sounds like a teacher at the school gate: warm, plain and proud of kids' progress. It lets parents and children speak for themselves, with real numbers where they exist.

**Do**

- Quote families in their own words
- Pair each story with one concrete result
- Use bright, everyday language

**Do not**

- Do not invent miracle outcomes
- Avoid education buzzwords
- Never talk down to parents

## Taglines

1. Six stories from the kitchen table
2. Real families, real results
3. Learning that lights up
4. Homework help that actually helps
5. Small wins around the table

**Boilerplate:** Lumen Learning is a tutoring service for families, pairing children with patient tutors and sharing real results from kitchen-table sessions.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Watch again |
| secondaryCta | Book a trial |
| success | Thanks for sharing your story. |
| error | The story did not load. Tap to retry. |
| empty | No stories to show yet. |

---
Source listing key `o:testimonial-stories`. Rebuild with `python3 scripts/brand-kit/build.py o:testimonial-stories`.
