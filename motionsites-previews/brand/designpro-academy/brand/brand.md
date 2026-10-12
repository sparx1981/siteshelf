# DesignPro — brand kit

*Online academy for product designers.* Generated from the SiteShelf listing **DesignPro Academy** (Hero Section); every value below is read from that page, not invented.

> **Become a product leader**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **peak** glyph on a circle tile. A peak signals a climb from beginner to leader. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#000000` | Page background |
| surface | `#64CEFB` | Cards, panels, raised areas |
| text | `#FFFFFF` | Body and heading text |
| textMuted | `#A6A6A6` | Secondary text, captions |
| primary | `#64CEFB` | Main actions, links, brand colour |
| secondary | `#37718A` | Highlights, charts, second accent |
| border | `#FFFFFF` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#37718A` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 21.00:1 | pass | pass |
| Muted text on background | 8.63:1 | pass | pass |
| Primary on background | 11.76:1 | pass | pass |
| Text on primary | 11.00:1 | pass | pass |
| Text on surface | 1.79:1 | fail | fail |

**Colours seen on the page** (share of use): `#000000` 97.8%, `#64CEFB` 1.6%, `#FFFFFF` 0.6%, `#A6A6A6` 0.0%, `#37718A` 0.0%

## Typography

- Headings: **Inter** (weight 500)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Inter | 128 px | 500 | 108.8px | -6.4px |
| Body | Inter | 16 px | 400 | 24.8px | normal |
| Navigation | Inter | 18 px | 600 | normal | normal |
| Caption / eyebrow | Inter | 14 px | 500 | normal | -0.35px |

## Shape, space and motion

- Radius: sm 0 px, md 0 px, lg 0 px, pill (fully rounded)
- Shadows: sm: `rgba(0, 0, 0, 0.4) 0px 8px 30px 0px` · md: `rgba(0, 0, 0, 0.4) 0px 8px 30px 0px` · lg: `rgba(0, 0, 0, 0.4) 0px 8px 30px 0px`
- Spacing: base unit 4 px; common steps 4 px, 6 px, 8 px, 10 px, 14 px, 16 px, 20 px, 24 px, 32 px
- Layout: container 1280 px; breakpoints 380 px, 640 px, 768 px, 1024 px, 1280 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** ambitious, supportive, clear.

DesignPro sounds like a mentor who has already hired a hundred designers. It is encouraging, direct about standards and keen to show a route from learner to leader.

**Do**

- Speak to the student's next step
- Name the skills: research, prototyping, craft
- Be specific about outcomes

**Do not**

- Do not promise job guarantees
- Do not use 'rockstar'
- Do not talk down to beginners

## Taglines

1. Become a product leader
2. Learn the craft, lead the product
3. Design education with a direction
4. Where good designers get better
5. Make the leap with real skill

**Boilerplate:** DesignPro is an online education platform for emerging product designers, offering programs that build practical skills and leadership.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Join the program |
| secondaryCta | About us |
| success | You are in. Welcome to DesignPro. |
| error | We could not save your details. Try again. |
| empty | No lessons yet. Choose a program to begin. |

---
Source listing key `m:designpro-academy`. Rebuild with `python3 scripts/brand-kit/build.py m:designpro-academy`.
