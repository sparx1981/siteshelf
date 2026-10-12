# Ratw — brand kit

*Daily planning templates.* Generated from the SiteShelf listing **Ratw** (Plan better, start your day right); every value below is read from that page, not invented.

> **Plan better, start your day right**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **sprout** glyph. A sprout reflects a fresh start to the day. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#E5E7EB` | Page background |
| surface | `#000000` | Cards, panels, raised areas |
| text | `#000000` | Body and heading text |
| textMuted | `#505152` | Secondary text, captions |
| primary | `#D98C5F` | Main actions, links, brand colour |
| secondary | `#7A4A3A` | Highlights, charts, second accent |
| border | `#C5C7CA` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#7A4A3A` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 16.96:1 | pass | pass |
| Muted text on background | 6.43:1 | pass | pass |
| Primary on background | 2.16:1 | fail | fail |
| Text on primary | 7.36:1 | pass | pass |
| Text on surface | 1.00:1 | fail | fail |

**Colours seen on the page** (share of use): `#E5E7EB` 43.5%, `#000000` 37.6%, `#D98C5F` 6.3%, `#7A4A3A` 6.3%, `#2A1A1A` 6.3%, `#FFFFFF` 0.2%, `#505152` 0.0%, `#C5C7CA` 0.0%

## Typography

- Headings: **Inter** (weight 600)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital@1&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Button | Inter | 14 px | 600 | normal | normal |
| Navigation | Inter | 14 px | 500 | normal | normal |

## Shape, space and motion

- Radius: sm 32 px, md 32 px, lg 32 px, pill (fully rounded)
- Shadows: sm: `rgba(0, 0, 0, 0.28) 0px 30px 70px 0px` · md: `rgba(0, 0, 0, 0.28) 0px 30px 70px 0px` · lg: `rgba(0, 0, 0, 0.28) 0px 30px 70px 0px`
- Spacing: base unit 4 px; common steps 10 px, 16 px, 22 px, 32 px, 40 px
- Layout: container 1400 px; breakpoints 768 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** warm, practical, encouraging.

Sounds like a friend who loves a good template: simple, upbeat and low on jargon. It speaks to the start of the day and the relief of having a plan.

**Do**

- Talk about mornings and plans
- Use short, friendly sentences
- Mention the template by name

**Do not**

- No productivity hype
- Avoid guilt about unfinished tasks
- Never overcomplicate the offer

## Taglines

1. Plan better, start your day right
2. A template for a calmer morning
3. Pages that plan your day
4. Get organised, gently
5. Begin with a plan

**Boilerplate:** Ratw makes daily planning templates that help people organise their tasks, set priorities and start each day with a clear, achievable plan.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Get template |
| secondaryCta | See pricing |
| success | Template ready. Enjoy your day. |
| error | Couldn't download the template. Please try again. |
| empty | No plans yet. Pick a template to begin. |

---
Source listing key `s:6a05f69895b816c773a812be`. Rebuild with `python3 scripts/brand-kit/build.py s:6a05f69895b816c773a812be`.
