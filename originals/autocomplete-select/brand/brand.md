# Parcelo Shipping — brand kit

*Parcel booking for small businesses.* Generated from the SiteShelf listing **Autocomplete & Multi-Select** (Form Controls); every value below is read from that page, not invented.

> **Book the parcel, skip the paperwork**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Plus Jakarta Sans |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **cube** glyph on a circle tile. A simple parcel cube is the plainest picture of what the product moves. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#FAFAF9` | Page background |
| surface | `#2563EB` | Cards, panels, raised areas |
| text | `#78716C` | Body and heading text |
| textMuted | `#1C1917` | Secondary text, captions |
| primary | `#2563EB` | Main actions, links, brand colour |
| secondary | `#87A9F4` | Highlights, charts, second accent |
| border | `#E7E5E4` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#87A9F4` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 4.59:1 | pass | pass |
| Muted text on background | 16.74:1 | pass | pass |
| Primary on background | 4.95:1 | pass | pass |
| Text on primary | 5.17:1 | pass | pass |
| Text on surface | 1.08:1 | fail | fail |

**Colours seen on the page** (share of use): `#FAFAF9` 99.0%, `#2563EB` 0.7%, `#78716C` 0.2%, `#1C1917` 0.1%, `#1D4ED8` 0.0%, `#87A9F4` 0.0%, `#E7E5E4` 0.0%

## Typography

- Headings: **Plus Jakarta Sans** (weight 700)
- Body: **Plus Jakarta Sans**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Plus Jakarta Sans | 28 px | 700 | 33.6px | normal |
| Body | Plus Jakarta Sans | 15 px | 400 | 22.5px | normal |
| Button | Arial | 15 px | 400 | 15px | normal |

## Shape, space and motion

- Radius: sm 10 px, md 14 px, lg 14 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 3 px, 4 px, 6 px, 8 px, 10 px, 12 px, 13 px, 16 px, 20 px
- Layout: container 1200 px; breakpoints single fluid layout
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** efficient, clear, dependable.

Parcelo writes like a good dispatch clerk: exact, brief and never vague about where a parcel is going. Form labels do the explaining, so the copy stays out of the way.

**Do**

- Name the field and the action in the same words everywhere
- Show the match, then the result, in as few words as possible
- State what happens next after each submit

**Do not**

- Use courier-industry puffery such as 'lightning fast'
- Write error text that blames the sender
- Use two names for the same field

## Taglines

1. Book the parcel, skip the paperwork
2. Send it right the first time
3. Every address, found in a keystroke
4. Shipping that stays out of your way
5. From counter to doorstep, sorted

**Boilerplate:** Parcelo Shipping is a booking tool for small businesses that need to create shipments quickly, with fast address search, tagging and trustworthy confirmation of every parcel.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Create shipment |
| secondaryCta | Save as draft |
| success | Shipment created. Label ready to print. |
| error | Pick a destination city to continue. |
| empty | No matches. Press Enter to add it as new. |

---
Source listing key `o:autocomplete-select`. Rebuild with `python3 scripts/brand-kit/build.py o:autocomplete-select`.
