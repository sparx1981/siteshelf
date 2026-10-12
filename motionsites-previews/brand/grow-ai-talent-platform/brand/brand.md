# Grow — brand kit

*AI talent acquisition platform for recruiters.* Generated from the SiteShelf listing **Grow AI Talent Platform** (SaaS); every value below is read from that page, not invented.

> **Hire faster, hire better**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter Bold (stand-in for General Sans) |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **peak** glyph on a squircle tile. A rising peak stands for career growth. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#05010E` | Page background |
| surface | `#E8E8E9` | Cards, panels, raised areas |
| text | `#F3F3F1` | Body and heading text |
| textMuted | `#D4D2CE` | Secondary text, captions |
| primary | `#7C3AED` | Main actions, links, brand colour |
| secondary | `#3A7BBF` | Highlights, charts, second accent |
| border | `#26232E` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#C8ACF7` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 18.58:1 | pass | pass |
| Muted text on background | 13.67:1 | pass | pass |
| Primary on background | 3.62:1 | fail | pass |
| Text on primary | 5.70:1 | pass | pass |
| Text on surface | 1.10:1 | fail | fail |

**Colours seen on the page** (share of use): `#05010E` 98.1%, `#E8E8E9` 0.9%, `#3A7BBF` 0.9%, `#D4D2CE` 0.0%, `#7C3AED` 0.0%, `#FFFFFF` 0.0%, `#26232E` 0.0%, `#C8ACF7` 0.0%

## Typography

- Headings: **General Sans** (weight 400)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Outfit:wght@400;500;600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | General Sans | 230 px | 400 | 234.6px | -5.52px |
| Body | Inter | 18 px | 400 | 32px | normal |
| Button | Inter | 16 px | 400 | 24px | normal |
| Navigation | Inter | 18 px | 600 | 27px | normal |

## Shape, space and motion

- Radius: sm 8 px, md 8 px, lg 8 px, pill (fully rounded)
- Shadows: sm: `rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset` · md: `rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset` · lg: `rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset`
- Spacing: base unit 4 px; common steps 4 px, 8 px, 9 px, 14 px, 16 px, 20 px, 24 px, 29 px, 32 px
- Layout: container 1024 px; breakpoints 640 px, 900 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** ambitious, clear, energetic.

Sounds like a recruiter who has seen every CV: crisp, human and focused on outcomes. It speaks of people first and technology second.

**Do**

- Put hires and time-to-hire in numbers
- Talk about people before the technology
- Keep calls to action to three words

**Do not**

- No AI hype or robot imagery
- No vague 'best talent' claims
- No jargon like ATS stacks

## Taglines

1. Hire faster, hire better
2. AI that finds the right people
3. Talent, found sooner
4. Recruiting that grows with you
5. Build the team you need

**Boilerplate:** Grow is an AI talent acquisition platform that helps recruiting teams find, screen and hire strong candidates faster, with consultants on hand.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Schedule a consult |
| secondaryCta | Sign up |
| success | Consult booked, check your inbox |
| error | We could not book that slot, try another |
| empty | No candidates in this pipeline yet |

---
Source listing key `m:grow-ai-talent-platform`. Rebuild with `python3 scripts/brand-kit/build.py m:grow-ai-talent-platform`.
