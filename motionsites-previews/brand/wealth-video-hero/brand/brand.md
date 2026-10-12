# Fortuna — brand kit

*Wealth-building platform for families.* Generated from the SiteShelf listing **Wealth Video Hero** (Fintech); every value below is read from that page, not invented.

> **Build wealth that lasts generations**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Plus Jakarta Sans |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **coins** glyph. Stacked coins signal wealth and stable growth. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#000000` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#FFFFFF` | Body and heading text |
| textMuted | `#A6A6A6` | Secondary text, captions |
| primary | `#FFFFFF` | Main actions, links, brand colour |
| secondary | `#8C8C8C` | Highlights, charts, second accent |
| border | `#FFFFFF` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#8C8C8C` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 21.00:1 | pass | pass |
| Muted text on background | 8.63:1 | pass | pass |
| Primary on background | 21.00:1 | pass | pass |
| Text on primary | 19.64:1 | pass | pass |
| Text on surface | 1.00:1 | fail | fail |

**Colours seen on the page** (share of use): `#000000` 99.0%, `#FFFFFF` 1.0%, `#A6A6A6` 0.0%, `#8C8C8C` 0.0%

## Typography

- Headings: **Plus Jakarta Sans** (weight 600)
- Body: **Plus Jakarta Sans**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Plus Jakarta Sans | 100 px | 600 | 102px | -4px |
| Heading / H2 | Plus Jakarta Sans | 16 px | 600 | 20.8px | -0.16px |
| Body | Plus Jakarta Sans | 19 px | 400 | 28.5px | normal |
| Button | Plus Jakarta Sans | 15 px | 500 | 22.5px | normal |
| Navigation | Plus Jakarta Sans | 20 px | 700 | 30px | -0.4px |

## Shape, space and motion

- Radius: sm 24 px, md 24 px, lg 24 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 4 px, 8 px, 10 px, 11 px, 14 px, 16 px, 20 px, 24 px, 30 px
- Layout: container 1440 px; breakpoints 640 px, 900 px, 1100 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** steady, aspirational, trustworthy.

Sounds like a trusted family advisor: patient, plain and long-sighted. It talks in generations and goals, with step-by-step clarity, and never hypes returns.

**Do**

- Describe wealth as long-term and in steps
- Use plain words like goals, accounts and track
- Show the four-step path clearly

**Do not**

- Do not promise returns or get-rich-quick
- Do not use jargon like alpha
- Do not use fear of missing out

## Taglines

1. Build wealth that lasts generations
2. Today's earnings, tomorrow's family fortune
3. Set goals. Track them. Grow.
4. Patient money, lasting legacies
5. Wealth, planned in four steps

**Boilerplate:** Fortuna is a wealth-building platform that helps families connect their accounts, set financial goals and track progress so today's earnings can become lasting generational wealth.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Get Started |
| secondaryCta | Features |
| success | Account created. Let's set your first goal. |
| error | We couldn't connect that bank. Please try again. |
| empty | No goals yet. Set your first one. |

---
Source listing key `m:wealth-video-hero`. Rebuild with `python3 scripts/brand-kit/build.py m:wealth-video-hero`.
