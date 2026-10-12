# Packwise — brand kit

*Weather-aware trip packing checklist.* Generated from the SiteShelf listing **Trip Packing List** (App UI); every value below is read from that page, not invented.

> **Pack once, pack right**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from DM Sans |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **bag** glyph. A holdall silhouette says travel and tidy packing in one simple shape. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F6F3EC` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#1F2A2E` | Body and heading text |
| textMuted | `#5A666B` | Secondary text, captions |
| primary | `#2F8A5B` | Main actions, links, brand colour |
| secondary | `#8A5A00` | Highlights, charts, second accent |
| border | `#B9B19C` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#1A402F` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 13.26:1 | pass | pass |
| Muted text on background | 5.34:1 | pass | pass |
| Primary on background | 3.86:1 | fail | pass |
| Text on primary | 4.59:1 | pass | pass |
| Text on surface | 14.70:1 | pass | pass |

**Colours seen on the page** (share of use): `#F6F3EC` 49.1%, `#FFFFFF` 47.6%, `#35495F` 0.9%, `#FDE8D6` 0.7%, `#E0F1EE` 0.7%, `#2F8A5B` 0.3%, `#000000` 0.2%, `#B7C8D8` 0.2%, `#8AA1B8` 0.2%, `#5D7690` 0.2%

## Typography

- Headings: **DM Sans** (weight 700)
- Body: **DM Sans**
- Google Fonts: `https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Fraunces:wght@600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Heading / H2 | DM Sans | 13 px | 700 | normal | 1.3px |
| Button | DM Sans | 22 px | 700 | 33px | normal |
| Caption / eyebrow | DM Sans | 13 px | 700 | normal | 2.34px |

## Shape, space and motion

- Radius: sm 8 px, md 16 px, lg 18 px, pill (fully rounded)
- Shadows: sm: `rgba(40, 30, 10, 0.5) 0px 40px 80px -40px` · md: `rgba(40, 30, 10, 0.5) 0px 40px 80px -40px` · lg: `rgba(40, 30, 10, 0.5) 0px 40px 80px -40px`
- Spacing: base unit 2 px; common steps 2 px, 4 px, 6 px, 7 px, 8 px, 10 px, 12 px, 14 px, 16 px
- Layout: container 1100 px; breakpoints 900 px
- Motion: 150 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** helpful, breezy, organised.

Sounds like a well-travelled friend leaning over your suitcase: friendly, a bit wry and always practical. It reacts to the forecast and the length of the trip rather than giving generic advice.

**Do**

- Tie every suggestion to the weather or the number of nights
- Keep item names short and concrete
- Celebrate progress lightly, like a tick and a quick nod

**Do not**

- Do not nag about forgotten items
- Do not use travel brochure superlatives
- Do not suggest anything without a reason

## Taglines

1. Pack once, pack right
2. Know the forecast before you zip
3. Light bags, no last-minute panic
4. Everything you need, nothing you don't
5. The list that checks the weather

**Boilerplate:** Packwise is a trip packing planner that builds a checklist from your destination weather, number of nights and who is travelling, and saves it on your own device.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Start packing |
| secondaryCta | Add your own item |
| success | Packed. Safe travels. |
| error | That item could not be added. Try again. |
| empty | Nothing on the list yet. Pick a trip length to begin. |

---
Source listing key `o:app-packing-list`. Rebuild with `python3 scripts/brand-kit/build.py o:app-packing-list`.
