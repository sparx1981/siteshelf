# Buzzentic — brand kit

*Short-form video agency.* Generated from the SiteShelf listing **Buzzentic Agency** (Agency); every value below is read from that page, not invented.

> **Videos that stop the scroll**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter Bold (stand-in for Barlow) |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **play** glyph on a circle tile. A play triangle is the universal sign for video. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#120D24` | Page background |
| surface | `#F8F8F8` | Cards, panels, raised areas |
| text | `#FFFFFF` | Body and heading text |
| textMuted | `#ACAAB2` | Secondary text, captions |
| primary | `#E3342F` | Main actions, links, brand colour |
| secondary | `#F08F8D` | Highlights, charts, second accent |
| border | `#332F43` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#661C1C` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 18.94:1 | pass | pass |
| Muted text on background | 8.25:1 | pass | pass |
| Primary on background | 4.33:1 | fail | pass |
| Text on primary | 4.49:1 | fail | pass |
| Text on surface | 1.06:1 | fail | fail |

**Colours seen on the page** (share of use): `#120D24` 99.1%, `#FFFFFF` 0.9%, `#E3342F` 0.0%, `#ACAAB2` 0.0%, `#F08F8D` 0.0%, `#332F43` 0.0%, `#0B0B0F` 0.0%, `#661C1C` 0.0%

## Typography

- Headings: **Barlow** (weight 300)
- Body: **Barlow**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Archivo:wght@300;400;500;600&family=Barlow:wght@300;400;500;600&family=Instrument+Serif:ital@0;1&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Barlow | 64 px | 300 | 67.2px | -1.28px |
| Body | Barlow | 18 px | 400 | 27.9px | normal |
| Button | Barlow | 16 px | 500 | normal | normal |
| Navigation | Barlow | 22 px | 500 | normal | -0.22px |

## Shape, space and motion

- Radius: sm 2 px, md 2 px, lg 2 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 4 px, 6 px, 7 px, 8 px, 10 px, 12 px, 14 px, 16 px, 26 px
- Layout: container 980 px; breakpoints 640 px, 820 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** punchy, hungry, energetic.

Talks like a creative director who lives in the scroll: fast, confident and full of verbs. Every sentence tries to stop a thumb.

**Do**

- Lead with a verb and an outcome
- Use words like reels, hook and reach
- Keep sentences under twelve words

**Do not**

- No vague agency waffle
- Avoid promising virality as a guarantee
- Never use corporate phrases like leverage

## Taglines

1. Videos that stop the scroll
2. Reels with real revenue
3. Hook them in three seconds
4. Script, shoot, cut, repeat
5. Short videos, long impact

**Boilerplate:** Buzzentic is a short-form video agency that scripts, shoots and edits reels for brands wanting reach, recall and revenue from every post.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Book a free strategy call |
| secondaryCta | See our reels |
| success | Got it. We'll call you within a day. |
| error | Something went wrong. Try booking again. |
| empty | No reels to show yet. |

---
Source listing key `m:buzzentic-agency`. Rebuild with `python3 scripts/brand-kit/build.py m:buzzentic-agency`.
