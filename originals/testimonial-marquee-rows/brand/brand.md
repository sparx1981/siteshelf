# Quillstack — brand kit

*Writing and publishing workspace for editorial teams.* Generated from the SiteShelf listing **Testimonial Marquee Rows** (Testimonials); every value below is read from that page, not invented.

> **Loved by twelve thousand teams**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from DM Serif Display |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **stack** glyph. A stack of layers hints at drafts, reviews and publishing combined. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#161822` | Page background |
| surface | `#0C0D12` | Cards, panels, raised areas |
| text | `#EEF0F7` | Body and heading text |
| textMuted | `#9AA1B5` | Secondary text, captions |
| primary | `#FFC857` | Main actions, links, brand colour |
| secondary | `#1B2140` | Highlights, charts, second accent |
| border | `#262A38` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#1B2140` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 15.53:1 | pass | pass |
| Muted text on background | 6.85:1 | pass | pass |
| Primary on background | 11.49:1 | pass | pass |
| Text on primary | 12.77:1 | pass | pass |
| Text on surface | 17.05:1 | pass | pass |

**Colours seen on the page** (share of use): `#161822` 83.9%, `#1B2140` 12.4%, `#EEF0F7` 1.7%, `#9AA1B5` 0.4%, `#FFC857` 0.3%, `#5EEAD4` 0.2%, `#FF9EC7` 0.2%, `#A5B4FC` 0.2%, `#FDBA74` 0.2%, `#86EFAC` 0.2%

## Typography

- Headings: **DM Serif Display** (weight 400)
- Body: **DM Sans**
- Google Fonts: `https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=DM+Serif+Display&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | DM Serif Display | 52 px | 400 | 57.2px | normal |
| Body | DM Sans | 15 px | 400 | 23.25px | normal |
| Button | DM Sans | 14 px | 700 | normal | normal |
| Caption / eyebrow | DM Sans | 15 px | 400 | 23.25px | normal |

## Shape, space and motion

- Radius: sm 18 px, md 18 px, lg 18 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 6 px, 12 px, 14 px, 16 px, 20 px, 72 px
- Layout: container 1200 px; breakpoints 600 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** credible, warm, literate.

Sounds like an editor quoting a happy colleague: concise, specific and free of exaggeration. Praise is allowed to speak for itself, and each quote names the team and the job it did.

**Do**

- Quote real-sounding specifics, such as three tools replaced by one
- Credit the person and team
- Let numbers like 4.9 stand with no adjectives

**Do not**

- Do not edit quotes into hype
- Do not use five-star spam
- Do not claim more than the quotes say

## Taglines

1. Loved by twelve thousand teams
2. Drafts, reviews and publishing in one place
3. Editors say it best
4. One workspace, fewer tools
5. The place words get finished

**Boilerplate:** Quillstack is an editorial workspace where teams draft, review and publish in one place, trusted by more than 12,000 teams that have replaced three or more separate tools.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Pause scrolling |
| secondaryCta | Read more stories |
| success | Scrolling resumed. |
| error | Quotes didn't load. Please refresh. |
| empty | No reviews yet. Be the first to share. |

---
Source listing key `o:testimonial-marquee-rows`. Rebuild with `python3 scripts/brand-kit/build.py o:testimonial-marquee-rows`.
