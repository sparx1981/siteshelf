# Kova — brand kit

*App that turns prompts into cinematic scenes.* Generated from the SiteShelf listing **Kova** (Onboarding screens); every value below is read from that page, not invented.

> **Turn your ideas into cinematic scenes**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter Bold (stand-in for -apple-system) |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **aperture** glyph on a squircle tile. A camera aperture suits an app that frames and renders cinematic scenes. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#FFFFFF` | Page background |
| surface | `#000000` | Cards, panels, raised areas |
| text | `#2E1065` | Body and heading text |
| textMuted | `#77649B` | Secondary text, captions |
| primary | `#38BDF8` | Main actions, links, brand colour |
| secondary | `#F472B6` | Highlights, charts, second accent |
| border | `#E2DEE9` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#1E5671` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 15.24:1 | pass | pass |
| Muted text on background | 5.15:1 | pass | pass |
| Primary on background | 2.14:1 | fail | fail |
| Text on primary | 9.17:1 | pass | pass |
| Text on surface | 1.38:1 | fail | fail |

**Colours seen on the page** (share of use): `#FFFFFF` 64.4%, `#000000` 25.7%, `#6D28D9` 1.7%, `#F472B6` 1.6%, `#7C3AED` 1.6%, `#1E1B4B` 1.6%, `#38BDF8` 1.6%, `#0F0A2A` 1.6%, `#E9D5FF` 0.1%, `#C084FC` 0.1%

## Typography

- Headings: **-apple-system** (weight 500)
- Body: **-apple-system**

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Heading / H2 | -apple-system | 24 px | 500 | 31.2px | -0.3px |
| Body | -apple-system | 14 px | 400 | 20.3px | normal |
| Button | -apple-system | 13.3 px | 400 | normal | normal |

## Shape, space and motion

- Radius: sm 16 px, md 44 px, lg 44 px
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 4 px, 6 px, 8 px, 12 px, 14 px, 24 px, 28 px, 30 px, 40 px
- Layout: container 1200 px; breakpoints single fluid layout
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** imaginative, friendly, visual.

Kova sounds like an enthusiastic creative partner who wants to see your idea on screen. It speaks in simple, vivid verbs and keeps instructions as short as a prompt.

**Do**

- Use vivid verbs: pick, drop, render
- Keep onboarding copy to two short lines
- Describe styles with film words

**Do not**

- Do not use heavy AI jargon
- Avoid grand claims about replacing artists
- Never bury the first action

## Taglines

1. Turn your ideas into cinematic scenes
2. Pick a style. Drop a prompt
3. Every scene, your way
4. Kova renders the rest
5. Direct the movie in your pocket

**Boilerplate:** Kova is a creative app that turns written prompts into cinematic scenes in your chosen style, rendered on your phone in moments.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Start creating |
| secondaryCta | Explore styles |
| success | Scene ready. Take a look. |
| error | The render did not finish. Please try again. |
| empty | No scenes yet. Drop a prompt to begin. |

---
Source listing key `s:6a9fa9a72a6e14c217942cb1`. Rebuild with `python3 scripts/brand-kit/build.py s:6a9fa9a72a6e14c217942cb1`.
