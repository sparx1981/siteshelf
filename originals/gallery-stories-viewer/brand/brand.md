# Ringtale — brand kit

*Short stories in tappable rings.* Generated from the SiteShelf listing **Stories Viewer** (Gallery); every value below is read from that page, not invented.

> **Tap a ring, see the story**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Figtree |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **target** glyph on a squircle tile. A ring is the tappable avatar the product is built around. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#0B0B0F` | Page background |
| surface | `#F59E0B` | Cards, panels, raised areas |
| text | `#8C8D9C` | Body and heading text |
| textMuted | `#CFD0DA` | Secondary text, captions |
| primary | `#F59E0B` | Main actions, links, brand colour |
| secondary | `#8B5CF6` | Highlights, charts, second accent |
| border | `#1D1D23` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#6D490D` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 5.99:1 | pass | pass |
| Muted text on background | 12.80:1 | pass | pass |
| Primary on background | 9.15:1 | pass | pass |
| Text on primary | 9.15:1 | pass | pass |
| Text on surface | 1.53:1 | fail | fail |

**Colours seen on the page** (share of use): `#0B0B0F` 98.5%, `#F59E0B` 0.4%, `#EC4899` 0.3%, `#8B5CF6` 0.2%, `#7C3AED` 0.1%, `#059669` 0.1%, `#14B8A6` 0.1%, `#E11D48` 0.1%, `#F97316` 0.1%, `#2563EB` 0.1%

## Typography

- Headings: **Figtree** (weight 700)
- Body: **Figtree**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Figtree:wght@400;600;800&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Figtree | 22 px | 700 | 30.8px | normal |
| Body | Figtree | 16 px | 400 | 22.4px | normal |
| Button | Figtree | 13 px | 400 | 18.2px | normal |

## Shape, space and motion

- Radius: sm 0 px, md 0 px, lg 0 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 2 px, 3 px, 6 px, 8 px, 12 px, 16 px, 18 px, 20 px, 28 px
- Layout: container 1200 px; breakpoints 480 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** quick, casual, expressive.

Ringtale talks in the clipped, friendly way people caption a story: lowercase-leaning, brisk and a little playful. Instructions are tiny because a story is only seconds long.

**Do**

- Give instructions in four words or fewer
- Use first names and handles as written
- Keep captions bold and short

**Do not**

- Use influencer hype
- Explain tap zones at length
- Add pressure about unseen stories

## Taglines

1. Tap a ring, see the story
2. Seconds long, stays with you
3. Hold to pause, tap to skip
4. Small stories, big feelings
5. Today, in a few taps

**Boilerplate:** Ringtale is a stories player with segmented progress bars, tap zones and hold-to-pause, made for short visual updates from friends and creators.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Open story |
| secondaryCta | Close |
| success | Story shared with your friends. |
| error | This story could not load. Tap to retry. |
| empty | No new stories. You are all caught up. |

---
Source listing key `o:gallery-stories-viewer`. Rebuild with `python3 scripts/brand-kit/build.py o:gallery-stories-viewer`.
