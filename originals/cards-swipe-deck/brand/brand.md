# Wander Deck — brand kit

*Swipe-to-choose deck for travel ideas.* Generated from the SiteShelf listing **Swipe Card Deck** (Cards); every value below is read from that page, not invented.

> **Swipe right on places you'd go**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Poppins |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **compass** glyph on a circle tile. A compass needle points to the next destination, the whole point of the deck. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#FFFFFF` | Page background |
| surface | `#FDF2F8` | Cards, panels, raised areas |
| text | `#6B6885` | Body and heading text |
| textMuted | `#1D1B2E` | Secondary text, captions |
| primary | `#4C1D95` | Main actions, links, brand colour |
| secondary | `#2C3E75` | Highlights, charts, second accent |
| border | `#EAEAEE` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#B4A0D2` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 5.32:1 | pass | pass |
| Muted text on background | 16.82:1 | pass | pass |
| Primary on background | 10.95:1 | pass | pass |
| Text on primary | 10.95:1 | pass | pass |
| Text on surface | 4.88:1 | pass | pass |

**Colours seen on the page** (share of use): `#FFFFFF` 69.2%, `#5B4B8A` 6.5%, `#2C3E75` 5.9%, `#7A2E1C` 3.2%, `#7B5CD6` 2.8%, `#FFD1A0` 2.6%, `#FF7E6B` 2.6%, `#3B2A4D` 2.5%, `#CFE8FF` 2.3%, `#7FB2FF` 2.3%

## Typography

- Headings: **Poppins** (weight 700)
- Body: **Poppins**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Poppins | 22 px | 700 | 33px | normal |
| Heading / H2 | Poppins | 26 px | 700 | 28.6px | normal |
| Button | Arial | 24 px | 400 | normal | normal |

## Shape, space and motion

- Radius: sm 24 px, md 50 px, lg 50 px, pill (fully rounded)
- Shadows: sm: `rgba(76, 29, 149, 0.15) 0px 8px 20px 0px` · md: `rgba(76, 29, 149, 0.15) 0px 18px 40px 0px` · lg: `rgba(76, 29, 149, 0.15) 0px 8px 20px 0px`
- Spacing: base unit 4 px; common steps 2 px, 4 px, 6 px, 10 px, 12 px, 16 px, 18 px, 20 px, 24 px
- Layout: container 1200 px; breakpoints single fluid layout
- Motion: 150 ms, `cubic-bezier(0.2`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** breezy, curious, light.

Sounds like a friend showing postcards across a table. Short, upbeat and a bit cheeky, with one memorable detail per place.

**Do**

- Give each place a sensory detail in under ten words
- Keep the swipe verbs consistent: pass, like, undo
- Use country names in full

**Do not**

- No brochure superlatives like paradise or hidden gem
- No pressure to book
- No more than one exclamation mark a screen

## Taglines

1. Swipe right on places you'd go
2. Your next trip, one card at a time
3. Pick a place, skip the rest
4. Where to next? You decide
5. Postcards that ask your opinion

**Boilerplate:** Wander Deck is a swipeable deck of destination cards that helps travellers choose between places by instinct, with undo, shortlists and a summary of everywhere they liked.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Like |
| secondaryCta | Pass |
| success | Added to your shortlist |
| error | That card would not load, try again |
| empty | The deck is empty, start a fresh round |

---
Source listing key `o:cards-swipe-deck`. Rebuild with `python3 scripts/brand-kit/build.py o:cards-swipe-deck`.
