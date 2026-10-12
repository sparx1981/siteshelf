# Tidewalk — brand kit

*Coastal walks planner with tide times.* Generated from the SiteShelf listing **Bottom Sheet Tab Bar** (Navigation); every value below is read from that page, not invented.

> **Walk the coast with the tide**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Sora |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **compass** glyph on a squircle tile. A compass points the way along the coast. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#E9F1F2` | Page background |
| surface | `#0E2A33` | Cards, panels, raised areas |
| text | `#0E2A33` | Body and heading text |
| textMuted | `#4C6B72` | Secondary text, captions |
| primary | `#0F8B8D` | Main actions, links, brand colour |
| secondary | `#F0B86B` | Highlights, charts, second accent |
| border | `#D6E6E8` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#F0B86B` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 13.11:1 | pass | pass |
| Muted text on background | 5.02:1 | pass | pass |
| Primary on background | 3.60:1 | fail | pass |
| Text on primary | 4.77:1 | pass | pass |
| Text on surface | 1.00:1 | fail | fail |

**Colours seen on the page** (share of use): `#E9F1F2` 51.9%, `#0E2A33` 25.5%, `#FFFFFF` 19.4%, `#CFE7E8` 2.1%, `#7CC4C6` 0.4%, `#3EA2A5` 0.3%, `#0F8B8D` 0.2%, `#F0B86B` 0.2%, `#4C6B72` 0.1%, `#2B1A00` 0.0%

## Typography

- Headings: **Sora** (weight 700)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Sora:wght@600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Sora | 24 px | 700 | 27.6px | normal |
| Heading / H2 | Sora | 22 px | 700 | normal | normal |
| Subheading / H3 | Sora | 14 px | 600 | normal | 0.84px |
| Body | Inter | 15 px | 400 | 22.5px | normal |
| Button | Sora | 11 px | 600 | normal | normal |

## Shape, space and motion

- Radius: sm 12 px, md 18 px, lg 24 px
- Shadows: sm: `rgba(240, 184, 107, 0.9) 0px 12px 24px -8px, rgb(255, 255, 255) 0px 0px 0px 6px` · md: `rgba(14, 42, 51, 0.3) 0px -18px 40px -12px` · lg: `rgba(14, 42, 51, 0.55) 0px 40px 80px -30px`
- Spacing: base unit 2 px; common steps 2 px, 4 px, 6 px, 8 px, 10 px, 12 px, 14 px, 16 px, 18 px
- Layout: container 1200 px; breakpoints 560 px
- Motion: 150 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** fresh, friendly, outdoorsy.

Sounds like a local who knows the cliff path and the tides: friendly, practical, a bit salty. It mixes weather and route facts into one sentence.

**Do**

- Pair tide times with route advice
- Use first names and the time of day
- Keep directions short and concrete

**Do not**

- No adventure-sport hype
- No unsafe advice about tides
- No long paragraphs on a small screen

## Taglines

1. Walk the coast with the tide
2. Low tide, high spirits
3. Plan a walk, mind the sea
4. Know before you go
5. Cliffs, coves and good timing

**Boilerplate:** Tidewalk is a coastal walking app that pairs route suggestions with tide times and weather, so you pick the right path for the hour.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Start now |
| secondaryCta | Tide times |
| success | Walk saved to your list |
| error | Could not load routes, try again |
| empty | No saved walks yet |

---
Source listing key `o:nav-bottom-sheet-tabs`. Rebuild with `python3 scripts/brand-kit/build.py o:nav-bottom-sheet-tabs`.
