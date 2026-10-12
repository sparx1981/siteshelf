# Marrow & Finch — brand kit

*Design studio for identities, products and places.* Generated from the SiteShelf listing **Fullscreen Staggered Menu** (Navigation); every value below is read from that page, not invented.

> **Design that holds its shape**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Syne |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **diamond** glyph. A diamond is a clean, geometric mark that suits a studio focused on lasting form. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F5F2EA` | Page background |
| surface | `#EBE6D9` | Cards, panels, raised areas |
| text | `#4A463D` | Body and heading text |
| textMuted | `#1A1814` | Secondary text, captions |
| primary | `#4A463D` | Main actions, links, brand colour |
| secondary | `#9B9994` | Highlights, charts, second accent |
| border | `#DDDAD2` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#9B9994` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 8.40:1 | pass | pass |
| Muted text on background | 15.85:1 | pass | pass |
| Primary on background | 8.40:1 | pass | pass |
| Text on primary | 9.40:1 | pass | pass |
| Text on surface | 7.54:1 | pass | pass |

**Colours seen on the page** (share of use): `#F5F2EA` 59.9%, `#EBE6D9` 20.0%, `#E0E8F5` 20.0%, `#1A1814` 0.1%, `#4A463D` 0.1%, `#9B9994` 0.0%, `#FFFFFF` 0.0%

## Typography

- Headings: **Syne** (weight 800)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Syne:wght@700;800&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Syne | 115.2 px | 800 | 109.44px | -4.608px |
| Heading / H2 | Syne | 115.2 px | 800 | 109.44px | -4.608px |
| Body | Inter | 19 px | 400 | 30.4px | normal |
| Button | Syne | 14 px | 600 | normal | 1.4px |
| Navigation | Syne | 20 px | 800 | normal | -0.4px |

## Shape, space and motion

- Radius: sm 0 px, md 0 px, lg 0 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 2 px; common steps 10 px, 11 px, 18 px, 19 px, 22 px, 48 px, 86 px, 140 px
- Layout: container 1200 px; breakpoints 800 px
- Motion: 300 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** confident, spare, considered.

Speaks like a studio partner who has said no to a lot of trends: few words, strong nouns and a steady voice. Claims are modest and rooted in time.

**Do**

- Make claims that last ten years
- Name the discipline in the sentence
- Keep headings short and uppercase

**Do not**

- No trend-chasing words
- Avoid superlatives and award bragging
- Never describe the work as innovative

## Taglines

1. Design that holds its shape
2. Work that outlasts the moment
3. Identities, products and places
4. Thirty people, one steady hand
5. Made to look right in ten years

**Boilerplate:** Marrow & Finch is a thirty-person design studio creating identities, products and places that are built to look right a decade from now.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Start a project |
| secondaryCta | See our work |
| success | Message sent. We'll reply within two days. |
| error | Message not sent. Please try again. |
| empty | No projects in this category yet. |

---
Source listing key `o:nav-fullscreen-stagger`. Rebuild with `python3 scripts/brand-kit/build.py o:nav-fullscreen-stagger`.
