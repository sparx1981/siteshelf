# Fieldnotes — brand kit

*Design and engineering notes from a product team.* Generated from the SiteShelf listing **Blog Index** (Blog); every value below is read from that page, not invented.

> **Notes from the work itself**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Newsreader |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **book** glyph on a squircle tile. An open book suits a journal of written-down lessons. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#FFFFFF` | Page background |
| surface | `#C7D2FE` | Cards, panels, raised areas |
| text | `#667085` | Body and heading text |
| textMuted | `#101828` | Secondary text, captions |
| primary | `#4F46E5` | Main actions, links, brand colour |
| secondary | `#FDBA74` | Highlights, charts, second accent |
| border | `#EAECF0` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#FDBA74` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 4.97:1 | pass | pass |
| Muted text on background | 17.75:1 | pass | pass |
| Primary on background | 6.29:1 | pass | pass |
| Text on primary | 6.29:1 | pass | pass |
| Text on surface | 3.34:1 | fail | pass |

**Colours seen on the page** (share of use): `#FFFFFF` 91.7%, `#C7D2FE` 1.7%, `#A5B4FC` 1.7%, `#A7F3D0` 1.0%, `#5EEAD4` 1.0%, `#FDE68A` 0.7%, `#FDBA74` 0.7%, `#FBCFE8` 0.7%, `#F9A8D4` 0.7%, `#101828` 0.3%

## Typography

- Headings: **Newsreader** (weight 600)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Newsreader:ital,wght@0,500;0,600;1,400&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Heading / H2 | Newsreader | 48 px | 600 | 51.84px | -0.96px |
| Subheading / H3 | Newsreader | 22 px | 600 | 27.5px | -0.22px |
| Body | Inter | 17 px | 400 | 26.35px | normal |
| Button | Inter | 14 px | 500 | normal | normal |
| Navigation | Inter | 15 px | 500 | 23.25px | normal |
| Caption / eyebrow | Inter | 13 px | 600 | 20.15px | 0.78px |

## Shape, space and motion

- Radius: sm 10 px, md 16 px, lg 20 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 7 px, 8 px, 10 px, 12 px, 14 px, 18 px, 22 px, 24 px, 28 px
- Layout: container 1120 px; breakpoints 600 px, 900 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** thoughtful, plain, curious.

Writes like a good colleague explaining what worked, with numbers rather than hype. Headlines make one clear claim and the excerpt gives the evidence.

**Do**

- Lead with the result, then the method
- Use one number per excerpt where possible
- Keep titles under ten words

**Do not**

- No clickbait questions
- No jargon stacked on jargon
- No claims without the measured outcome

## Taglines

1. Notes from the work itself
2. Small lessons, written down
3. What we tried and what held
4. Fewer clever ideas, more finished ones
5. Plain notes on building well

**Boilerplate:** Fieldnotes is the working journal of a product team, publishing short essays on design, engineering, product and culture, each with the evidence behind the opinion.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Load more |
| secondaryCta | Read the post |
| success | Subscribed, see you next issue |
| error | Search failed, please try again |
| empty | No posts match that search yet |

---
Source listing key `o:blog-index`. Rebuild with `python3 scripts/brand-kit/build.py o:blog-index`.
