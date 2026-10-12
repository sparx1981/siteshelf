# Wagewise — brand kit

*Payroll software for small teams.* Generated from the SiteShelf listing **Chat Bubble Testimonials** (Testimonials); every value below is read from that page, not invented.

> **Payroll people actually message us about**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Plus Jakarta Sans |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **chat** glyph on a circle tile. A speech bubble is how customers talk about Wagewise. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#EEF0FF` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#1D1B3A` | Body and heading text |
| textMuted | `#46446D` | Secondary text, captions |
| primary | `#3A31A8` | Main actions, links, brand colour |
| secondary | `#1D1B3A` | Highlights, charts, second accent |
| border | `#DCDFFA` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#ACA8DA` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 14.60:1 | pass | pass |
| Muted text on background | 8.03:1 | pass | pass |
| Primary on background | 8.49:1 | pass | pass |
| Text on primary | 9.61:1 | pass | pass |
| Text on surface | 16.53:1 | pass | pass |

**Colours seen on the page** (share of use): `#EEF0FF` 60.7%, `#FFFFFF` 34.1%, `#3A31A8` 4.5%, `#1D1B3A` 0.3%, `#46446D` 0.1%, `#19B394` 0.1%, `#FF7A59` 0.1%, `#6A6896` 0.0%, `#7A78A6` 0.0%, `#DCDFFA` 0.0%

## Typography

- Headings: **Plus Jakarta Sans** (weight 800)
- Body: **Plus Jakarta Sans**
- Google Fonts: `https://fonts.googleapis.com/css2?family=DM+Mono:wght@400&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Plus Jakarta Sans | 64 px | 800 | 65.28px | -1.6px |
| Body | Plus Jakarta Sans | 18 px | 500 | 27.9px | normal |
| Button | Plus Jakarta Sans | 15 px | 700 | 23.25px | normal |
| Caption / eyebrow | Plus Jakarta Sans | 13 px | 700 | normal | 1.82px |

## Shape, space and motion

- Radius: sm 16 px, md 18 px, lg 24 px, pill (fully rounded)
- Shadows: sm: `rgba(54, 48, 140, 0.5) 0px 40px 80px -40px` · md: `rgba(54, 48, 140, 0.5) 0px 40px 80px -40px` · lg: `rgba(54, 48, 140, 0.5) 0px 40px 80px -40px`
- Spacing: base unit 2 px; common steps 3 px, 4 px, 6 px, 10 px, 11 px, 12 px, 14 px, 15 px, 16 px
- Layout: container 1180 px; breakpoints 900 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** friendly, chatty, dependable.

Sounds like a helpful colleague in the team chat who happens to know payroll: casual, quick and reassuring. Customers do the talking and the brand keeps replies short.

**Do**

- Let customers quote in their own words
- Keep payroll terms plain: pay day, payslip, tax
- Use short messages and the occasional emoji

**Do not**

- No compliance jargon in marketing lines
- Avoid corporate testimonial phrasing
- Never invent quotes without a first name

## Taglines

1. Payroll people actually message us about
2. Pay day, sorted in one thread
3. Loved by small teams
4. Payroll that talks back
5. The payroll team that replies

**Boilerplate:** Wagewise is payroll software for small teams that runs pay day, payslips and tax filings, and supports customers through a fast, friendly chat.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Replay |
| secondaryCta | Show all |
| success | Message sent. We'll reply shortly. |
| error | Message not delivered. Tap to retry. |
| empty | No messages yet. Press replay to start the thread. |

---
Source listing key `o:testimonial-chat-bubbles`. Rebuild with `python3 scripts/brand-kit/build.py o:testimonial-chat-bubbles`.
