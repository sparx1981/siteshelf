# Layover — brand kit

*Destination discovery deck for spontaneous trips.* Generated from the SiteShelf listing **Stacked Card Deck** (Cards); every value below is read from that page, not invented.

> **Where next?**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Sora |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **plane** glyph on a squircle tile. A plane is a direct sign for travel and lifts easily into a small tab icon. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#222222` | Page background |
| surface | `#3A2A6B` | Cards, panels, raised areas |
| text | `#FFFFFF` | Body and heading text |
| textMuted | `#BDB4DC` | Secondary text, captions |
| primary | `#FFB27A` | Main actions, links, brand colour |
| secondary | `#3A2A6B` | Highlights, charts, second accent |
| border | `#FFB27A` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#3A2A6B` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 15.91:1 | pass | pass |
| Muted text on background | 8.13:1 | pass | pass |
| Primary on background | 9.02:1 | pass | pass |
| Text on primary | 11.13:1 | pass | pass |
| Text on surface | 12.19:1 | pass | pass |

**Colours seen on the page** (share of use): `#222222` 36.3%, `#3A2A6B` 31.5%, `#0A0619` 6.3%, `#2F5F8F` 5.0%, `#6A2F3F` 4.4%, `#1FA0B0` 3.9%, `#1E2F5C` 3.4%, `#1F5A4A` 3.4%, `#3A1F2F` 3.0%, `#0F4D6B` 2.7%

## Typography

- Headings: **Sora** (weight 700)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Sora:wght@500;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Sora | 22 px | 700 | normal | normal |
| Heading / H2 | Sora | 26 px | 700 | 28.6px | normal |
| Subheading / H3 | Sora | 13 px | 700 | normal | 1.3px |
| Button | Arial | 22 px | 400 | normal | normal |

## Shape, space and motion

- Radius: sm 28 px, md 50 px, lg 50 px, pill (fully rounded)
- Shadows: sm: `rgba(0, 0, 0, 0.45) 0px 24px 50px 0px` · md: `rgba(255, 255, 255, 0.4) 0px 0px 60px 20px` · lg: `rgba(0, 0, 0, 0.45) 0px 24px 50px 0px`
- Spacing: base unit 4 px; common steps 3 px, 4 px, 6 px, 7 px, 8 px, 10 px, 12 px, 16 px, 20 px
- Layout: container 1200 px; breakpoints single fluid layout
- Motion: 150 ms, `cubic-bezier(0.3`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** wanderlust, light, decisive.

Layover talks like a friend with a map and a free weekend: quick, evocative and decisive. It names places and moods in a few words and invites a swipe.

**Do**

- Name the place and one feeling in a line
- Use short imperatives: swipe, save, pass
- Keep captions under ten words

**Do not**

- Do not use tourism cliches like hidden gem
- Avoid listing facts a map already shows
- Never push a booking

## Taglines

1. Where next?
2. Swipe to your next escape
3. Pass, save, or pack
4. Seven places, one good idea
5. Find a weekend worth leaving for

**Boilerplate:** Layover is a destination discovery app that deals travel ideas as a swipeable card deck, letting you pass or save places and keep a short list for later.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Shuffle remaining |
| secondaryCta | Save for later |
| success | Saved to your list. |
| error | Could not save that place. Try again. |
| empty | The deck is empty. Shuffle to see more. |

---
Source listing key `o:stacked-cards`. Rebuild with `python3 scripts/brand-kit/build.py o:stacked-cards`.
