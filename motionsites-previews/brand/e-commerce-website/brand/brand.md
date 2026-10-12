# Halden Health — brand kit

*Telehealth weight-loss programmes.* Generated from the SiteShelf listing **E-commerce Website** (Landing Page); every value below is read from that page, not invented.

> **Weight loss, made affordable**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter Bold (stand-in for ui-sans-serif) |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **sprout** glyph. A sprout signals gentle growth and avoids clinical or diet cliches. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#FAFAFA` | Page background |
| surface | `#18181B` | Cards, panels, raised areas |
| text | `#1E1B1A` | Body and heading text |
| textMuted | `#4B5563` | Secondary text, captions |
| primary | `#E8D6B0` | Main actions, links, brand colour |
| secondary | `#173A42` | Highlights, charts, second accent |
| border | `#52525B` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#173A42` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 16.40:1 | pass | pass |
| Muted text on background | 7.24:1 | pass | pass |
| Primary on background | 1.37:1 | fail | fail |
| Text on primary | 13.73:1 | pass | pass |
| Text on surface | 1.04:1 | fail | fail |

**Colours seen on the page** (share of use): `#FAFAFA` 75.6%, `#18181B` 12.5%, `#000000` 6.0%, `#2A2A5A` 1.2%, `#173A42` 0.9%, `#1E0E04` 0.8%, `#F6F1E6` 0.8%, `#35495F` 0.8%, `#183A2C` 0.7%, `#84A9FA` 0.6%

## Typography

- Headings: **ui-sans-serif** (weight 600)
- Body: **ui-sans-serif**

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | ui-sans-serif | 60 px | 600 | 66px | -1.2px |
| Heading / H2 | ui-sans-serif | 60 px | 600 | 66px | -1.2px |
| Subheading / H3 | ui-sans-serif | 24 px | 600 | 36px | normal |
| Body | ui-sans-serif | 18 px | 400 | 27px | normal |
| Button | ui-sans-serif | 14 px | 500 | 21px | normal |
| Navigation | ui-sans-serif | 20 px | 600 | 30px | normal |
| Caption / eyebrow | ui-sans-serif | 13 px | 400 | 19.5px | normal |

## Shape, space and motion

- Radius: sm 10 px, md 16 px, lg 24 px, pill (fully rounded)
- Shadows: sm: `rgba(0, 0, 0, 0.08) 2px 4px 12px 0px` · md: `rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px` · lg: `rgba(0, 0, 0, 0.08) 2px 4px 12px 0px`
- Spacing: base unit 4 px; common steps 2 px, 6 px, 8 px, 10 px, 12 px, 14 px, 16 px, 18 px, 24 px
- Layout: container 1280 px; breakpoints 560 px, 640 px, 767 px, 768 px, 1024 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** reassuring, plain, respectful.

Halden Health speaks gently and plainly about a sensitive subject. It explains the programme, cost and medical review without shame or hype.

**Do**

- Explain costs and steps upfront
- Mention medical review and licensed providers
- Use respectful, non-judgmental language

**Do not**

- Do not promise specific weight loss
- Avoid shame or before-and-after framing
- Never use miracle language

## Taglines

1. Weight loss, made affordable
2. A plan made just for you
3. Medication, clearly explained
4. Care that fits your life
5. Science and nature, in balance

**Boilerplate:** Halden Health is an online weight-loss programme offering physician-guided GLP-1 medication plans without the need for insurance, with clear pricing and ongoing support.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Get started |
| secondaryCta | What is a GLP-1 program? |
| success | Thanks. A provider will contact you. |
| error | Could not submit that. Please check your details. |
| empty | No questions in this category yet. |

---
Source listing key `m:e-commerce-website`. Rebuild with `python3 scripts/brand-kit/build.py m:e-commerce-website`.
