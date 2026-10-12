# Plainproof — brand kit

*Customer results shown with real numbers.* Generated from the SiteShelf listing **Customer Results Tabs** (Testimonials); every value below is read from that page, not invented.

> **Results our customers can point to**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Bricolage Grotesque |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **bars** glyph on a circle tile. Rising bars are the plainest picture of a result. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F5F7F4` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#14201A` | Body and heading text |
| textMuted | `#607167` | Secondary text, captions |
| primary | `#1F8A5B` | Main actions, links, brand colour |
| secondary | `#E0652B` | Highlights, charts, second accent |
| border | `#DDE4DA` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#13402F` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 15.58:1 | pass | pass |
| Muted text on background | 4.81:1 | pass | pass |
| Primary on background | 4.02:1 | fail | pass |
| Text on primary | 4.53:1 | pass | pass |
| Text on surface | 16.78:1 | pass | pass |

**Colours seen on the page** (share of use): `#F5F7F4` 97.9%, `#14201A` 0.6%, `#1F8A5B` 0.6%, `#D5DCD3` 0.4%, `#607167` 0.1%, `#2F64D6` 0.1%, `#E0652B` 0.1%, `#7A4FD3` 0.1%, `#0B0B0F` 0.0%, `#13402F` 0.0%

## Typography

- Headings: **Bricolage Grotesque** (weight 700)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@500;700&family=Inter:wght@400;500;600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Bricolage Grotesque | 44 px | 700 | 48.4px | -0.88px |
| Button | Inter | 15 px | 600 | normal | normal |

## Shape, space and motion

- Radius: sm 9 px, md 16 px, lg 24 px, pill (fully rounded)
- Shadows: sm: `color(srgb 0.121569 0.541176 0.356863 / 0.18) 0px 0px 0px 3px` · md: `color(srgb 0.121569 0.541176 0.356863 / 0.18) 0px 0px 0px 3px` · lg: `color(srgb 0.121569 0.541176 0.356863 / 0.18) 0px 0px 0px 3px`
- Spacing: base unit 4 px; common steps 6 px, 8 px, 10 px, 12 px, 14 px, 16 px, 22 px, 24 px, 32 px
- Layout: container 1040 px; breakpoints 820 px
- Motion: 900 ms, `cubic-bezier(0.2`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** credible, specific, grounded.

Plainproof sounds like an honest analyst: it lets numbers do the talking and quotes customers without polishing them. Claims are short, specific and backed by a figure.

**Do**

- Lead with a measurable result
- Quote customers in their own words
- Show before and after together

**Do not**

- Use unsupported superlatives
- Edit quotes into marketing speak
- Hide the time frame

## Taglines

1. Results our customers can point to
2. Numbers first, quotes second
3. Proof you can check
4. Before and after, plainly shown
5. Real customers, real figures

**Boilerplate:** Plainproof presents customer success stories with verifiable results, showing each company's quote, headline numbers and a before and after comparison.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Read the story |
| secondaryCta | Pause auto-rotate |
| success | Story opened. |
| error | We could not load that story. Try another. |
| empty | No results yet for this customer. |

---
Source listing key `o:testimonial-metric-tabs`. Rebuild with `python3 scripts/brand-kit/build.py o:testimonial-metric-tabs`.
