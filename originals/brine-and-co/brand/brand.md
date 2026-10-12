# Brine & Co — brand kit

*Day-boat seafood restaurant cooked over fire.* Generated from the SiteShelf listing **Brine & Co Food Menu Hero** (Hero Section); every value below is read from that page, not invented.

> **Fresh off the boat, onto the plate**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from DM Serif Display |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **flame** glyph on a squircle tile. A flame points to cooking over fire and sits well against the harbour teal and crab orange. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#0F3D4C` | Page background |
| surface | `#FF7A45` | Cards, panels, raised areas |
| text | `#FDF6E7` | Body and heading text |
| textMuted | `#FF7A45` | Secondary text, captions |
| primary | `#FF7A45` | Main actions, links, brand colour |
| secondary | `#FFB699` | Highlights, charts, second accent |
| border | `#FDF6E7` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#713A26` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 10.89:1 | pass | pass |
| Muted text on background | 4.53:1 | pass | pass |
| Primary on background | 4.53:1 | pass | pass |
| Text on primary | 7.60:1 | pass | pass |
| Text on surface | 2.40:1 | fail | fail |

**Colours seen on the page** (share of use): `#0F3D4C` 93.7%, `#FF7A45` 5.7%, `#FDF6E7` 0.6%, `#FFB699` 0.0%, `#0B0B0F` 0.0%, `#713A26` 0.0%

## Typography

- Headings: **DM Serif Display** (weight 400)
- Body: **Instrument Sans**
- Google Fonts: `https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Instrument+Sans:wght@400;500;600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | DM Serif Display | 115.2 px | 400 | 109.44px | -2.304px |
| Subheading / H3 | DM Serif Display | 28 px | 400 | 32.2px | normal |
| Body | Instrument Sans | 16 px | 400 | 24px | normal |
| Button | Instrument Sans | 12 px | 600 | normal | 1.44px |

## Shape, space and motion

- Radius: sm 0 px, md 0 px, lg 0 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 6 px, 8 px, 16 px, 18 px, 20 px, 22 px, 24 px, 28 px, 32 px
- Layout: container 1200 px; breakpoints 900 px
- Motion: 300 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** salty, direct, generous.

Brine & Co talks like a harbour kitchen: short, sensory and a bit cheeky. It names the boat, the port and the pan, then lets the food do the persuading.

**Do**

- Name the catch and the port before any adjective
- Use cooking verbs: char, crisp, shuck, flash-fry
- Keep menu descriptions to one line

**Do not**

- Do not call anything gourmet, artisan or fusion
- Avoid fancy French menu phrasing
- Never pretend the catch is the same every day

## Taglines

1. Fresh off the boat, onto the plate
2. Caught at dawn, cooked by dinner
3. Simple fish, hot pan, open fire
4. Today's catch, nothing fancy
5. Eat what the sea sent

**Boilerplate:** Brine & Co is a seafood restaurant serving day-boat catch from Pittenweem, cooked simply over fire or in a hot pan, with a menu that changes with the tide.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | See the menu |
| secondaryCta | Book a table |
| success | Table booked. We will keep the oysters cold. |
| error | That did not go through. Try again, or ring us. |
| empty | Nothing in this section today. The boats are still out. |

---
Source listing key `o:brine-and-co`. Rebuild with `python3 scripts/brand-kit/build.py o:brine-and-co`.
