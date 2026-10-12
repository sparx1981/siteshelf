# Studio School — brand kit

*Online design courses taught by working designers.* Generated from the SiteShelf listing **Online Course Landing** (Landing Page); every value below is read from that page, not invented.

> **Learn colour. Then use it well.**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Young Serif |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **book** glyph on a squircle tile. An open book is a simple, friendly sign for a school and its step-by-step lessons. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#FFF9F0` | Page background |
| surface | `#4A2C7A` | Cards, panels, raised areas |
| text | `#1C1B29` | Body and heading text |
| textMuted | `#5F5C70` | Secondary text, captions |
| primary | `#FF8A3D` | Main actions, links, brand colour |
| secondary | `#4A2C7A` | Highlights, charts, second accent |
| border | `#EFE4D2` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#4A2C7A` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 16.20:1 | pass | pass |
| Muted text on background | 6.17:1 | pass | pass |
| Primary on background | 2.24:1 | fail | fail |
| Text on primary | 8.38:1 | pass | pass |
| Text on surface | 1.56:1 | fail | fail |

**Colours seen on the page** (share of use): `#FFF9F0` 71.0%, `#4A2C7A` 24.5%, `#1C1B29` 2.5%, `#8D5FD0` 0.6%, `#FF8A3D` 0.6%, `#5F5C70` 0.3%, `#FFD9BD` 0.2%, `#F0E8FB` 0.2%, `#FFE9D6` 0.1%, `#D8F6EA` 0.1%

## Typography

- Headings: **Young Serif** (weight 400)
- Body: **Outfit**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600&family=Young+Serif&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Young Serif | 76 px | 400 | 77.52px | -1.52px |
| Heading / H2 | Young Serif | 44 px | 400 | 48.4px | normal |
| Subheading / H3 | Outfit | 18 px | 600 | normal | normal |
| Body | Outfit | 19 px | 400 | 31.35px | normal |
| Button | Outfit | 15 px | 600 | normal | normal |
| Navigation | Outfit | 15 px | 500 | 24.75px | normal |
| Caption / eyebrow | Outfit | 14 px | 400 | normal | normal |

## Shape, space and motion

- Radius: sm 8 px, md 12 px, lg 16 px, pill (fully rounded)
- Shadows: sm: `rgba(28, 27, 41, 0.4) 0px 14px 30px -12px` · md: `rgba(28, 27, 41, 0.5) 0px 30px 50px -20px` · lg: `rgba(74, 44, 122, 0.6) 0px 30px 60px -36px`
- Spacing: base unit 2 px; common steps 9 px, 10 px, 12 px, 14 px, 16 px, 18 px, 20 px, 22 px, 26 px
- Layout: container 1160 px; breakpoints 560 px, 900 px
- Motion: 300 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** encouraging, bright, practical.

Sounds like a warm, expert teacher who wants you to finish the lesson: encouraging, concrete and a touch playful about colour. It promises skills you can use on Monday, not vague transformation.

**Do**

- Name the exact skill, such as testing a palette against contrast rules
- Include lesson counts and minutes so the effort is clear
- Speak to the learner as you, with a kind tone

**Do not**

- Do not promise overnight mastery
- Do not use fake countdown pressure
- Do not talk down to beginners

## Taglines

1. Learn colour. Then use it well.
2. Palettes that look good and pass checks
3. Design skills, taught by designers
4. Small lessons, real confidence
5. See colour the way designers do

**Boilerplate:** Studio School runs short online courses for designers, taught by working practitioners such as Priya Nair-Walsh, with clear lessons, practical exercises and a money-back guarantee.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Enrol now |
| secondaryCta | Watch preview |
| success | You are in. Lesson one is ready. |
| error | Payment did not go through. Please try again. |
| empty | No lessons here yet. Expand a module to begin. |

---
Source listing key `o:course-landing`. Rebuild with `python3 scripts/brand-kit/build.py o:course-landing`.
