# Springwell — brand kit

*Charity building wells for rural communities.* Generated from the SiteShelf listing **Nonprofit Donation Landing** (Landing Page); every value below is read from that page, not invented.

> **Clean water, one village at a time**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Fraunces |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **drop** glyph on a squircle tile. A single water drop is the entire mission in one shape. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#FDF8F1` | Page background |
| surface | `#0B4F4A` | Cards, panels, raised areas |
| text | `#4A5E5B` | Body and heading text |
| textMuted | `#1C2B29` | Secondary text, captions |
| primary | `#0B4F4A` | Main actions, links, brand colour |
| secondary | `#F2A900` | Highlights, charts, second accent |
| border | `#E3DCCD` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#F2A900` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 6.53:1 | pass | pass |
| Muted text on background | 13.93:1 | pass | pass |
| Primary on background | 8.91:1 | pass | pass |
| Text on primary | 9.41:1 | pass | pass |
| Text on surface | 1.36:1 | fail | fail |

**Colours seen on the page** (share of use): `#FDF8F1` 59.6%, `#0B4F4A` 35.8%, `#F2A900` 0.9%, `#7FD0C7` 0.8%, `#F6C25B` 0.8%, `#C8571B` 0.8%, `#EFE9DD` 0.7%, `#17655F` 0.3%, `#E5F3F0` 0.2%, `#4A5E5B` 0.1%

## Typography

- Headings: **Fraunces** (weight 800)
- Body: **Nunito Sans**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Fraunces:wght@600;800&family=Nunito+Sans:wght@400;600;800&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Fraunces | 58 px | 800 | 60.9px | normal |
| Heading / H2 | Fraunces | 22 px | 800 | normal | normal |
| Subheading / H3 | Fraunces | 20 px | 800 | normal | normal |
| Body | Nunito Sans | 19 px | 400 | 30.4px | normal |
| Button | Nunito Sans | 16 px | 700 | 25.6px | normal |

## Shape, space and motion

- Radius: sm 9 px, md 16 px, lg 18 px, pill (fully rounded)
- Shadows: sm: `rgba(0, 0, 0, 0.06) 0px 6px 20px 0px` · md: `rgba(11, 79, 74, 0.1) 0px 8px 24px 0px` · lg: `rgba(0, 0, 0, 0.25) 0px 20px 50px 0px`
- Spacing: base unit 4 px; common steps 3 px, 4 px, 6 px, 8 px, 9 px, 10 px, 12 px, 14 px, 20 px
- Layout: container 1080 px; breakpoints 480 px, 860 px
- Motion: 1000 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** hopeful, grounded, sincere.

Speaks with plain gratitude and no guilt: short, human and focused on one village at a time. Numbers show what a gift does, in dollars and litres.

**Do**

- Name the village or well when possible
- Show exactly what each gift buys
- Thank first, ask second

**Do not**

- No guilt-trip imagery or pity
- Avoid saviour language
- Never inflate an impact figure

## Taglines

1. Clean water, one village at a time
2. Your gift runs deep
3. Wells that last for decades
4. Give once, flow for years
5. Every well starts with someone like you

**Boilerplate:** Springwell is a charity that builds and maintains community wells, bringing clean water to villages for decades and showing donors exactly where each gift goes.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Give now |
| secondaryCta | Read their stories |
| success | Thank you. Your gift is on its way. |
| error | Your gift didn't go through. Please try again. |
| empty | No gifts yet this month. Be the first. |

---
Source listing key `o:landing-nonprofit-donate`. Rebuild with `python3 scripts/brand-kit/build.py o:landing-nonprofit-donate`.
