# Foxglove Studio — brand kit

*Small design studio for careful brands.* Generated from the SiteShelf listing **Contact Form with Live Validation** (Form); every value below is read from that page, not invented.

> **Let's make something good**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Fraunces |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **sprout** glyph. A small sprout stands for early-stage ideas that a careful studio helps to grow. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F7F3EE` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#75687F` | Body and heading text |
| textMuted | `#231A2D` | Secondary text, captions |
| primary | `#C2306B` | Main actions, links, brand colour |
| secondary | `#CDB8D8` | Highlights, charts, second accent |
| border | `#DDD3E3` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#CDB8D8` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 4.70:1 | pass | pass |
| Muted text on background | 15.12:1 | pass | pass |
| Primary on background | 4.84:1 | pass | pass |
| Text on primary | 5.34:1 | pass | pass |
| Text on surface | 5.19:1 | pass | pass |

**Colours seen on the page** (share of use): `#F7F3EE` 52.1%, `#FFFFFF` 26.9%, `#2B1B3A` 15.4%, `#5A2F6B` 3.9%, `#C2306B` 1.2%, `#75687F` 0.3%, `#CDB8D8` 0.1%, `#A994B6` 0.0%, `#8C1D4B` 0.0%, `#F0A6C6` 0.0%

## Typography

- Headings: **Fraunces** (weight 700)
- Body: **Outfit**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Fraunces:wght@600;700&family=Outfit:wght@400;500;600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Fraunces | 46 px | 700 | 48.3px | -0.92px |
| Heading / H2 | Fraunces | 28 px | 700 | normal | normal |
| Body | Outfit | 16 px | 400 | 24px | normal |
| Button | Outfit | 15 px | 500 | normal | normal |

## Shape, space and motion

- Radius: sm 12 px, md 14 px, lg 28 px, pill (fully rounded)
- Shadows: sm: `rgba(43, 27, 58, 0.14) 0px 24px 60px 0px` · md: `rgba(43, 27, 58, 0.14) 0px 24px 60px 0px` · lg: `rgba(43, 27, 58, 0.14) 0px 24px 60px 0px`
- Spacing: base unit 2 px; common steps 2 px, 4 px, 6 px, 10 px, 12 px, 14 px, 16 px, 18 px, 20 px
- Layout: container 1100 px; breakpoints 600 px, 900 px
- Motion: 150 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** warm, witty, particular.

Foxglove Studio sounds like a studio founder writing a personal note: warm, a little playful and fond of detail. It asks good questions and promises a human reply within one working day.

**Do**

- Ask about the project, not the budget, first
- Promise a reply time and keep it
- Use one friendly flourish per message, no more

**Do not**

- Do not use agency boilerplate like 'solutions' or 'synergy'
- Avoid forms that scold in capital letters
- Never say 'as soon as possible' without a day

## Taglines

1. Let's make something good
2. Tell us what you're planning
3. Brands that care about the details
4. Small studio, big attention
5. Say hello. We write back

**Boilerplate:** Foxglove Studio is a small design studio that builds brands and websites for clients who care about the details, and replies to every new enquiry within one working day.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Send message |
| secondaryCta | Call us instead |
| success | Thanks, we got it. Expect a reply within one working day. |
| error | Something went wrong sending that. Please check the highlighted fields. |
| empty | No attachments yet. Drop a file here if it helps. |

---
Source listing key `o:contact-form`. Rebuild with `python3 scripts/brand-kit/build.py o:contact-form`.
