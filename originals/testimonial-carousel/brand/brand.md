# Beacon CRM — brand kit

*Customer relationship manager for growing teams.* Generated from the SiteShelf listing **Testimonial Carousel** (Testimonials); every value below is read from that page, not invented.

> **Teams that grew with Beacon**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Plus Jakarta Sans |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **chat** glyph on a squircle tile. A speech bubble stands for customers speaking for the product. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#EEF2FF` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#1E1B4B` | Body and heading text |
| textMuted | `#4F46E5` | Secondary text, captions |
| primary | `#4F46E5` | Main actions, links, brand colour |
| secondary | `#1E1B4B` | Highlights, charts, second accent |
| border | `#C7D2FE` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#1E1B4B` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 14.30:1 | pass | pass |
| Muted text on background | 5.62:1 | pass | pass |
| Primary on background | 5.62:1 | pass | pass |
| Text on primary | 6.29:1 | pass | pass |
| Text on surface | 15.99:1 | pass | pass |

**Colours seen on the page** (share of use): `#EEF2FF` 96.4%, `#1E1B4B` 1.1%, `#4F46E5` 0.9%, `#0EA5E9` 0.3%, `#DB2777` 0.3%, `#059669` 0.3%, `#D97706` 0.3%, `#6366A0` 0.2%, `#8E91C9` 0.1%, `#3730A3` 0.1%

## Typography

- Headings: **Plus Jakarta Sans** (weight 700)
- Body: **Newsreader**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Newsreader:ital,wght@0,400;0,500;1,400&family=Plus+Jakarta+Sans:wght@500;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Plus Jakarta Sans | 40 px | 700 | 46px | -0.8px |
| Button | Arial | 18 px | 400 | normal | normal |

## Shape, space and motion

- Radius: sm 24 px, md 24 px, lg 24 px, pill (fully rounded)
- Shadows: sm: `rgba(67, 56, 202, 0.12) 0px 20px 50px 0px` · md: `rgba(67, 56, 202, 0.12) 0px 20px 50px 0px` · lg: `rgba(67, 56, 202, 0.12) 0px 20px 50px 0px`
- Spacing: base unit 4 px; common steps 6 px, 10 px, 12 px, 14 px, 16 px, 20 px, 24 px, 26 px, 56 px
- Layout: container 1200 px; breakpoints 520 px
- Motion: 300 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** trusting, clear, upbeat.

Sounds like a team that lets customers speak: modest, direct and specific about results. Quotes carry the weight, the brand stays out of the way.

**Do**

- Attribute quotes to a name, role and company
- Lead with the customer's result
- Keep claims concrete, with a number

**Do not**

- No inflated superlatives
- No unattributed praise
- No unverifiable guarantees

## Taglines

1. Teams that grew with Beacon
2. Real results, in their words
3. Customers say it best
4. Grow without losing track
5. The CRM teams talk about

**Boilerplate:** Beacon CRM is a customer relationship manager that helps growing teams track deals, contacts and follow-ups, trusted by sales and customer teams around the world.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Start free trial |
| secondaryCta | Read more stories |
| success | Thanks, we'll be in touch |
| error | Could not send that, please try again |
| empty | No stories to show yet |

---
Source listing key `o:testimonial-carousel`. Rebuild with `python3 scripts/brand-kit/build.py o:testimonial-carousel`.
