# Power AI — brand kit

*AI for talent acquisition teams.* Generated from the SiteShelf listing **Power AI** (Hero Section); every value below is read from that page, not invented.

> **The most powerful AI in hiring**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from DM Sans |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **bolt** glyph. A bolt carries the word power in a single shape. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#05010E` | Page background |
| surface | `#6366F1` | Cards, panels, raised areas |
| text | `#F3F3F1` | Body and heading text |
| textMuted | `#D4D2CE` | Secondary text, captions |
| primary | `#FCD34D` | Main actions, links, brand colour |
| secondary | `#A855F7` | Highlights, charts, second accent |
| border | `#26232E` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#A855F7` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 18.58:1 | pass | pass |
| Muted text on background | 13.67:1 | pass | pass |
| Primary on background | 14.32:1 | pass | pass |
| Text on primary | 13.62:1 | pass | pass |
| Text on surface | 4.02:1 | fail | pass |

**Colours seen on the page** (share of use): `#05010E` 97.9%, `#6366F1` 0.6%, `#A855F7` 0.6%, `#FCD34D` 0.6%, `#F3F3F1` 0.2%, `#D4D2CE` 0.1%, `#38BDF8` 0.0%, `#34D399` 0.0%, `#FB923C` 0.0%, `#26232E` 0.0%

## Typography

- Headings: **DM Sans** (weight 400)
- Body: **Geist**
- Google Fonts: `https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Geist:wght@400;500;600&family=Inter:wght@400;500;600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | DM Sans | 218.9 px | 400 | 223.258px | -5.25312px |
| Body | Geist | 18 px | 400 | 32px | normal |
| Button | Geist | 15 px | 400 | normal | normal |
| Navigation | Geist | 16 px | 400 | normal | normal |

## Shape, space and motion

- Radius: sm 8 px, md 50 px, lg 50 px, pill (fully rounded)
- Shadows: sm: `rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset` · md: `rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset` · lg: `rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset`
- Spacing: base unit 4 px; common steps 4 px, 6 px, 8 px, 12 px, 14 px, 16 px, 20 px, 32 px, 48 px
- Layout: container 1024 px; breakpoints 520 px, 640 px, 880 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** bold, modern, results-minded.

Power AI speaks with the confidence of a recruiter who has hit every target: bold headline, brisk detail and plenty of proof. It stays on hiring and avoids vague AI talk.

**Do**

- Tie every claim to hiring outcomes
- Use short, active sentences
- Name the recruiter's job, such as sourcing or screening

**Do not**

- Use generic AI hype
- Mention robots or replacing recruiters
- Hide the pricing path

## Taglines

1. The most powerful AI in hiring
2. Find talent before others do
3. Hire faster, hire better
4. Recruiting, powered up
5. Your hiring team, amplified

**Boilerplate:** Power AI provides AI tools for talent acquisition teams, speeding sourcing, screening and scheduling so recruiters can spend time with candidates.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Schedule a Consult |
| secondaryCta | Features |
| success | Consult booked. We will confirm by email. |
| error | Could not book that time. Choose another slot. |
| empty | No candidates matched yet. |

---
Source listing key `m:power-ai`. Rebuild with `python3 scripts/brand-kit/build.py m:power-ai`.
