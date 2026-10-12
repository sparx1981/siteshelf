# Datacore — brand kit

*Hotel and resort booking with fast, 24/7 support.* Generated from the SiteShelf listing **Datacore Booking** (SaaS); every value below is read from that page, not invented.

> **Book your perfect stay instantly**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Instrument Serif |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **globe** glyph. A globe signals worldwide destinations for a booking brand. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#07030F` | Page background |
| surface | `#7B39FC` | Cards, panels, raised areas |
| text | `#FFFFFF` | Body and heading text |
| textMuted | `#A8A7AB` | Secondary text, captions |
| primary | `#7B39FC` | Main actions, links, brand colour |
| secondary | `#2B2344` | Highlights, charts, second accent |
| border | `#D4D4D4` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#2B2344` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 20.41:1 | pass | pass |
| Muted text on background | 8.53:1 | pass | pass |
| Primary on background | 3.73:1 | fail | pass |
| Text on primary | 5.48:1 | pass | pass |
| Text on surface | 5.48:1 | pass | pass |

**Colours seen on the page** (share of use): `#07030F` 97.1%, `#7B39FC` 1.1%, `#FFFFFF` 0.8%, `#2B2344` 0.7%, `#55506E` 0.3%, `#171717` 0.0%, `#A8A7AB` 0.0%, `#D4D4D4` 0.0%

## Typography

- Headings: **Instrument Serif** (weight 400)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600&family=Inter:wght@400;500&family=Instrument+Serif:ital@0;1&family=Manrope:wght@400;500;600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Instrument Serif | 96 px | 400 | 105.6px | -0.96px |
| Body | Inter | 18 px | 400 | 28.8px | normal |
| Button | Manrope | 14 px | 500 | 14px | normal |
| Navigation | Manrope | 20 px | 700 | 20px | -0.4px |

## Shape, space and motion

- Radius: sm 6 px, md 8 px, lg 10 px
- Shadows: sm: `rgba(0, 0, 0, 0.25) 0px 1px 2px 0px, rgba(123, 57, 252, 0.35) 0px 4px 14px 0px` · md: `rgba(0, 0, 0, 0.25) 0px 1px 2px 0px, rgba(123, 57, 252, 0.35) 0px 4px 14px 0px` · lg: `rgba(0, 0, 0, 0.25) 0px 1px 2px 0px, rgba(123, 57, 252, 0.35) 0px 4px 14px 0px`
- Spacing: base unit 4 px; common steps 2 px, 4 px, 5 px, 6 px, 10 px, 12 px, 16 px, 24 px, 28 px
- Layout: container 1000 px; breakpoints 480 px, 768 px, 1024 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** effortless, reliable, modern.

A concierge with a laptop: quick, polite and very sure of the details. Plain statements about deals and support, with a touch of luxury.

**Do**

- Lead with the benefit, such as instant booking
- Name places and dates plainly
- Keep reassurance concrete, like 24/7 support

**Do not**

- Travel cliches like paradise awaits
- Hidden fees
- Technical talk about data

## Taglines

1. Book your perfect stay instantly
2. Handpicked hotels, hassle-free
3. Deals worth packing for
4. Your next stay, one click away
5. Rooms confirmed, worries cleared

**Boilerplate:** Datacore is a booking platform for handpicked hotels, resorts and stays, offering exclusive deals, fast checkout and round-the-clock support.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Get started |
| secondaryCta | Services |
| success | Booking confirmed. Safe travels |
| error | We couldn't hold that room. Try another |
| empty | No stays match. Adjust your dates |

---
Source listing key `m:datacore-booking`. Rebuild with `python3 scripts/brand-kit/build.py m:datacore-booking`.
