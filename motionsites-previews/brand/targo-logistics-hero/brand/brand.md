# targo — brand kit

*Freight and delivery planning for fleets.* Generated from the SiteShelf listing **Targo Logistics Hero** (SaaS); every value below is read from that page, not invented.

> **Swift and simple transport**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Rubik |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **target** glyph on a circle tile. A target ring is both the name and the aim of every delivery. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#000000` | Page background |
| surface | `#EE3F2C` | Cards, panels, raised areas |
| text | `#FFFFFF` | Body and heading text |
| textMuted | `#A6A6A6` | Secondary text, captions |
| primary | `#EE3F2C` | Main actions, links, brand colour |
| secondary | `#F6958B` | Highlights, charts, second accent |
| border | `#242424` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#6A211B` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 21.00:1 | pass | pass |
| Muted text on background | 8.63:1 | pass | pass |
| Primary on background | 5.38:1 | pass | pass |
| Text on primary | 5.04:1 | pass | pass |
| Text on surface | 3.90:1 | fail | pass |

**Colours seen on the page** (share of use): `#000000` 99.1%, `#FFFFFF` 0.5%, `#EE3F2C` 0.5%, `#A6A6A6` 0.0%, `#F6958B` 0.0%, `#242424` 0.0%, `#6A211B` 0.0%

## Typography

- Headings: **Rubik** (weight 700)
- Body: **Rubik**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Rubik | 64 px | 700 | 65.28px | -2.56px |
| Heading / H2 | Rubik | 22 px | 600 | normal | -0.44px |
| Body | Rubik | 14 px | 400 | 21.7px | normal |
| Button | Rubik | 14 px | 500 | normal | normal |
| Navigation | Rubik | 16 px | 400 | normal | normal |

## Shape, space and motion

- Radius: sm 20 px, md 20 px, lg 20 px
- Shadows: sm: `rgba(255, 255, 255, 0.25) 0px 1px 1px 0px inset, rgba(255, 255, 255, 0.03) 0px -20px 40px 0px inset, rgba(0, 0, 0, 0.35) 0px 24px 60px 0px` · md: `rgba(255, 255, 255, 0.25) 0px 1px 1px 0px inset, rgba(255, 255, 255, 0.03) 0px -20px 40px 0px inset, rgba(0, 0, 0, 0.35) 0px 24px 60px 0px` · lg: `rgba(255, 255, 255, 0.25) 0px 1px 1px 0px inset, rgba(255, 255, 255, 0.03) 0px -20px 40px 0px inset, rgba(0, 0, 0, 0.35) 0px 24px 60px 0px`
- Spacing: base unit 4 px; common steps 2 px, 6 px, 10 px, 12 px, 16 px, 20 px, 28 px, 36 px, 48 px
- Layout: container 1200 px; breakpoints 420 px, 819 px, 820 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** swift, direct, dependable.

targo talks like a dispatcher on a deadline: short, bold and sure of the route. It states routes, windows and promises in plain words and keeps the replies fast.

**Do**

- Use short, bold headline phrases
- Mention routes, windows and fleets by name
- Promise a reply time and keep it

**Do not**

- Use vague promises like 'best in class'
- Pad with logistics jargon
- Overstate speed

## Taglines

1. Swift and simple transport
2. Every route, right on time
3. Your fleet, one clear plan
4. Delivery windows kept
5. Talk to someone who moves freight

**Boilerplate:** targo is a logistics company that plans routes, fleets and delivery windows for businesses, with a specialist who replies to every enquiry within one business day.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Get Started |
| secondaryCta | Book a Call |
| success | Request sent. We reply within one business day. |
| error | That did not send. Please try again. |
| empty | No shipments yet. Book your first. |

---
Source listing key `m:targo-logistics-hero`. Rebuild with `python3 scripts/brand-kit/build.py m:targo-logistics-hero`.
