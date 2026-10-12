# Stillwater — brand kit

*Breath-paced meditation timer.* Generated from the SiteShelf listing **Meditation Timer** (App UI); every value below is read from that page, not invented.

> **Breathe for a few minutes**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Cormorant Garamond |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **drop** glyph. A single drop and its ripple stand for a still lake and a steady breath. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#0F1426` | Page background |
| surface | `#171D36` | Cards, panels, raised areas |
| text | `#EAEEFC` | Body and heading text |
| textMuted | `#A0ABD4` | Secondary text, captions |
| primary | `#7BE0FF` | Main actions, links, brand colour |
| secondary | `#FFC3A0` | Highlights, charts, second accent |
| border | `#3A4676` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#3A6474` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 15.79:1 | pass | pass |
| Muted text on background | 8.07:1 | pass | pass |
| Primary on background | 12.15:1 | pass | pass |
| Text on primary | 13.05:1 | pass | pass |
| Text on surface | 14.33:1 | pass | pass |

**Colours seen on the page** (share of use): `#0F1426` 93.8%, `#7BE0FF` 2.5%, `#E8EEFF` 2.0%, `#000000` 0.6%, `#2A3358` 0.6%, `#FFFFFF` 0.2%, `#A0ABD4` 0.2%, `#3A4676` 0.1%, `#C4CDEE` 0.1%, `#FFC3A0` 0.0%

## Typography

- Headings: **Cormorant Garamond** (weight 600)
- Body: **Outfit**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=Outfit:wght@400;500;600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Cormorant Garamond | 64 px | 600 | 65.28px | normal |
| Heading / H2 | Outfit | 12 px | 600 | normal | 1.68px |
| Body | Outfit | 18 px | 400 | 27px | normal |
| Button | Outfit | 16 px | 600 | normal | normal |
| Caption / eyebrow | Outfit | 13 px | 600 | normal | 2.34px |

## Shape, space and motion

- Radius: sm 10 px, md 24 px, lg 50 px, pill (fully rounded)
- Shadows: sm: `color(srgb 0.482353 0.878431 1 / 0.5) 0px 0px 80px 0px` · md: `color(srgb 0.482353 0.878431 1 / 0.5) 0px 0px 80px 0px` · lg: `color(srgb 0.482353 0.878431 1 / 0.5) 0px 0px 80px 0px`
- Spacing: base unit 2 px; common steps 2 px, 6 px, 8 px, 9 px, 10 px, 12 px, 14 px, 16 px, 18 px
- Layout: container 1080 px; breakpoints 900 px
- Motion: 800 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** quiet, gentle, spacious.

Stillwater speaks softly and slowly, like a teacher who is happy to let a silence stand. Sentences are short, verbs are kind, and nothing ever asks for urgency.

**Do**

- Use short sentences with room to breathe
- Invite rather than instruct: 'when you are ready'
- Prefer concrete images such as lake, breath and bell

**Do not**

- Do not use streaks, scores or pressure
- Do not use exclamation marks
- Do not promise enlightenment or cures

## Taglines

1. Breathe for a few minutes
2. Let the water settle
3. One slow breath at a time
4. Stillness, kept in your pocket
5. Come back to the lake

**Boilerplate:** Stillwater is a breath-paced meditation timer with gentle interval bells and a private session log, made for a few quiet minutes at a time.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Start |
| secondaryCta | End |
| success | Session saved. Well done for stopping. |
| error | The bell could not play. You can keep breathing without it. |
| empty | No sessions yet. Your first one will appear here. |

---
Source listing key `o:app-meditation-timer`. Rebuild with `python3 scripts/brand-kit/build.py o:app-meditation-timer`.
