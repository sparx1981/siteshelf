# Orchid Notes — brand kit

*Garden journal with gliding navigation.* Generated from the SiteShelf listing **Sliding Pill Navigation** (Navigation); every value below is read from that page, not invented.

> **Navigation that follows you**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Sora |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **compass** glyph on a squircle tile. A compass shows direction and finding your place, the whole idea of the page. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F4F1FB` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#6F6890` | Body and heading text |
| textMuted | `#1D1730` | Secondary text, captions |
| primary | `#6D4AFF` | Main actions, links, brand colour |
| secondary | `#F59E0B` | Highlights, charts, second accent |
| border | `#DDD6F3` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#F59E0B` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 4.64:1 | pass | pass |
| Muted text on background | 15.46:1 | pass | pass |
| Primary on background | 4.62:1 | pass | pass |
| Text on primary | 5.15:1 | pass | pass |
| Text on surface | 5.17:1 | pass | pass |

**Colours seen on the page** (share of use): `#F4F1FB` 97.7%, `#E0D8FF` 0.6%, `#6F6890` 0.6%, `#6D4AFF` 0.2%, `#0EA5E9` 0.1%, `#F43F5E` 0.1%, `#F59E0B` 0.1%, `#10B981` 0.1%, `#8B5CF6` 0.1%, `#1D1730` 0.1%

## Typography

- Headings: **Sora** (weight 700)
- Body: **Sora**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Sora:wght@500;600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Sora | 32 px | 700 | 36.8px | normal |
| Heading / H2 | Sora | 12 px | 600 | normal | 1.44px |
| Subheading / H3 | Sora | 20 px | 700 | normal | normal |
| Body | Sora | 15 px | 500 | 24px | normal |
| Button | Arial | 13.3 px | 400 | normal | normal |
| Navigation | Sora | 15 px | 700 | 24px | normal |

## Shape, space and motion

- Radius: sm 14 px, md 20 px, lg 24 px, pill (fully rounded)
- Shadows: sm: `rgba(109, 74, 255, 0.2) 0px 2px 8px 0px` · md: `rgba(109, 74, 255, 0.2) 0px 2px 8px 0px` · lg: `rgba(109, 74, 255, 0.2) 0px 2px 8px 0px`
- Spacing: base unit 2 px; common steps 6 px, 10 px, 12 px, 14 px, 16 px, 18 px, 20 px, 22 px, 26 px
- Layout: container 900 px; breakpoints 560 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** gentle, observant, tidy.

Orchid Notes sounds like a considered garden diary: soft, observant and slightly formal. It names the thing shown and the way to move around it.

**Do**

- Number sections and name them plainly
- Describe movement with calm verbs like 'glides'
- Keep sentences under fifteen words

**Do not**

- Use showy tech jargon
- Over-promise delight
- Explain navigation too long

## Taglines

1. Navigation that follows you
2. One moving indicator, three ways
3. Find your place and stay
4. Small guides for slow readers
5. Glide from page to page

**Boilerplate:** Orchid Notes is a garden journal whose navigation uses a single moving indicator, shown as a sliding pill, scroll-spy tabs and a magnifying dock.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Open the journal |
| secondaryCta | Browse gardens |
| success | Page found. You are here. |
| error | That page is missing. Try the menu. |
| empty | No notes yet. Add the first. |

---
Source listing key `o:nav-pill-indicator`. Rebuild with `python3 scripts/brand-kit/build.py o:nav-pill-indicator`.
