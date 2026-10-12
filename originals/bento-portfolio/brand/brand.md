# Noor Eliasson — brand kit

*Product designer in Gothenburg making calm tools.* Generated from the SiteShelf listing **Bento Portfolio** (Portfolio); every value below is read from that page, not invented.

> **Calm, useful products for real people**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Bricolage Grotesque |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **grid** glyph. A grid of tiles echoes the bento layout of the portfolio itself. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#ECEAE6` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#17171A` | Body and heading text |
| textMuted | `#4A3D99` | Secondary text, captions |
| primary | `#BFE8D3` | Main actions, links, brand colour |
| secondary | `#FFC9B0` | Highlights, charts, second accent |
| border | `#E1DDD5` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#576861` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 14.89:1 | pass | pass |
| Muted text on background | 7.23:1 | pass | pass |
| Primary on background | 1.11:1 | fail | fail |
| Text on primary | 14.69:1 | pass | pass |
| Text on surface | 17.89:1 | pass | pass |

**Colours seen on the page** (share of use): `#ECEAE6` 57.5%, `#FFFFFF` 14.7%, `#CFC3FF` 7.5%, `#F6E27A` 7.5%, `#17171A` 4.3%, `#FFC9B0` 3.9%, `#BFE8D3` 1.7%, `#BCD9FF` 1.7%, `#E6E1FF` 0.9%, `#8A6DFF` 0.1%

## Typography

- Headings: **Bricolage Grotesque** (weight 800)
- Body: **Inter Tight**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400;600;800&family=Inter+Tight:wght@400;500;600&family=JetBrains+Mono:wght@500&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Bricolage Grotesque | 60 px | 800 | 58.8px | -1.8px |
| Heading / H2 | Bricolage Grotesque | 26 px | 800 | 27.3px | normal |
| Subheading / H3 | Bricolage Grotesque | 18 px | 800 | 20.7px | normal |
| Body | Inter Tight | 17 px | 400 | 25.5px | normal |
| Button | Inter Tight | 16 px | 400 | 24px | normal |
| Caption / eyebrow | Inter Tight | 15 px | 500 | normal | normal |

## Shape, space and motion

- Radius: sm 3 px, md 10 px, lg 28 px, pill (fully rounded)
- Shadows: sm: `rgba(0, 0, 0, 0) 0px 0px 0px 0.0542662px` · md: `rgba(0, 0, 0, 0.04) 0px 1px 2px 0px, rgba(30, 25, 15, 0.25) 0px 12px 30px -16px` · lg: `rgba(40, 20, 120, 0.3) 0px -10px 30px -10px`
- Spacing: base unit 4 px; common steps 4 px, 5 px, 6 px, 8 px, 10 px, 12 px, 14 px, 16 px, 20 px
- Layout: container 1120 px; breakpoints 560 px, 900 px
- Motion: 250 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** calm, considered, friendly.

A first-person, easy voice with the confidence of someone who explains their work well. It prefers plain verbs and small honest claims, in the spirit of the calm products it designs.

**Do**

- Write in first person and keep it conversational
- Describe outcomes for health, finance and learning tools in plain words
- Keep project blurbs to one clear sentence

**Do not**

- Buzzwords such as ninja, rockstar or disruptive
- Long case-study jargon in tile copy
- Self-congratulation with no example behind it

## Taglines

1. Calm, useful products for real people
2. Design that lowers the noise
3. Small teams, careful work
4. Gothenburg-based, quietly curious
5. Health, money and learning, made gentle

**Boilerplate:** Noor Eliasson is a product designer based in Gothenburg who works with small teams on health, finance and learning tools, favouring calm interfaces over clever ones.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Let's talk |
| secondaryCta | Copy email |
| success | Email copied. Say hello any time |
| error | The email did not copy. Select it by hand? |
| empty | No project selected yet. Pick a tile |

---
Source listing key `o:bento-portfolio`. Rebuild with `python3 scripts/brand-kit/build.py o:bento-portfolio`.
