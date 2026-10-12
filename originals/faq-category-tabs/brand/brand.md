# Harbor Pay — brand kit

*Payments for small businesses.* Generated from the SiteShelf listing **FAQ with Category Tabs** (FAQ); every value below is read from that page, not invented.

> **Get paid, without the guesswork**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter Bold (stand-in for Public Sans) |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **coins** glyph. Stacked coins say payments immediately and keep the mark friendly for small shops. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F6F8FB` | Page background |
| surface | `#2457FF` | Cards, panels, raised areas |
| text | `#38465C` | Body and heading text |
| textMuted | `#0E1A2B` | Secondary text, captions |
| primary | `#2457FF` | Main actions, links, brand colour |
| secondary | `#87A3FF` | Highlights, charts, second accent |
| border | `#E1E7EF` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#87A3FF` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 8.98:1 | pass | pass |
| Muted text on background | 16.43:1 | pass | pass |
| Primary on background | 5.08:1 | pass | pass |
| Text on primary | 5.41:1 | pass | pass |
| Text on surface | 1.77:1 | fail | fail |

**Colours seen on the page** (share of use): `#F6F8FB` 96.5%, `#2457FF` 1.9%, `#38465C` 0.8%, `#0E1A2B` 0.4%, `#5D6B82` 0.3%, `#87A3FF` 0.0%, `#E1E7EF` 0.0%

## Typography

- Headings: **Public Sans** (weight 700)
- Body: **Public Sans**
- Mono: **Public Sans**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;500;600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Public Sans | 42 px | 700 | 46.2px | -0.84px |
| Heading / H2 | Public Sans | 18 px | 700 | 28.8px | normal |
| Subheading / H3 | Public Sans | 18.7 px | 700 | 29.952px | normal |
| Body | Public Sans | 16 px | 400 | 25.6px | normal |
| Button | Public Sans | 15 px | 600 | normal | normal |
| Caption / eyebrow | Public Sans | 12 px | 600 | normal | normal |
| Mono | Public Sans | 13 px | 600 | 22px | normal |

## Shape, space and motion

- Radius: sm 6 px, md 14 px, lg 18 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 6 px, 8 px, 10 px, 12 px, 14 px, 16 px, 20 px, 22 px, 24 px
- Layout: container 1000 px; breakpoints 820 px
- Motion: 250 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** reassuring, plain, dependable.

Sounds like a straight-talking bookkeeper who has answered this question a hundred times: calm, specific and free of fine print. Money words are exact and fees are always spelled out.

**Do**

- Answer the question in the first sentence
- Quote fees and timings as numbers
- Use you and we, with short paragraphs

**Do not**

- No hidden conditions or vague reassurance
- Avoid banking jargon
- Never promise instant when it means one day

## Taglines

1. Get paid, without the guesswork
2. Payments that stay in plain sight
3. Small business money, made clear
4. Straight answers about your takings
5. Your harbour for every payment

**Boilerplate:** Harbor Pay provides payment processing for small businesses, with transparent fees, next-day payouts and a help centre that answers questions in plain language.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Search help centre |
| secondaryCta | Contact support |
| success | Thanks for the feedback. |
| error | Search failed. Please try again. |
| empty | No answers match that. Contact us and we'll help. |

---
Source listing key `o:faq-category-tabs`. Rebuild with `python3 scripts/brand-kit/build.py o:faq-category-tabs`.
