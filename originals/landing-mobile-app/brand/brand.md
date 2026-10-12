# Kindle Habit — brand kit

*Gentle habit tracker with forgiving streaks.* Generated from the SiteShelf listing **Mobile App Landing Page** (Landing Page); every value below is read from that page, not invented.

> **Small habits, big glow**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Bricolage Grotesque |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **flame** glyph. A small flame fits the kindle idea of warming up a habit slowly. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#FFF8EF` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#231A14` | Body and heading text |
| textMuted | `#5A4A3D` | Secondary text, captions |
| primary | `#FF7A2F` | Main actions, links, brand colour |
| secondary | `#FFB68D` | Highlights, charts, second accent |
| border | `#ECD9C3` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#713A1C` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 16.21:1 | pass | pass |
| Muted text on background | 8.03:1 | pass | pass |
| Primary on background | 2.47:1 | fail | fail |
| Text on primary | 7.56:1 | pass | pass |
| Text on surface | 17.08:1 | pass | pass |

**Colours seen on the page** (share of use): `#FFF8EF` 92.9%, `#1A1410` 6.4%, `#FF7A2F` 0.4%, `#5A4A3D` 0.1%, `#7A6A5C` 0.1%, `#E8D4BE` 0.0%, `#F1E5D6` 0.0%, `#2A1100` 0.0%, `#FFB36B` 0.0%, `#FFB68D` 0.0%

## Typography

- Headings: **Bricolage Grotesque** (weight 800)
- Body: **Figtree**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@600;800&family=Figtree:wght@400;500;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Bricolage Grotesque | 72 px | 800 | 72px | -2.16px |
| Heading / H2 | Bricolage Grotesque | 40 px | 800 | 44px | normal |
| Subheading / H3 | Bricolage Grotesque | 20 px | 800 | normal | normal |
| Body | Figtree | 17 px | 400 | 27.2px | normal |
| Button | Figtree | 16 px | 700 | normal | normal |
| Navigation | Figtree | 17 px | 500 | 27.2px | normal |
| Caption / eyebrow | Figtree | 11 px | 400 | 11px | normal |

## Shape, space and motion

- Radius: sm 10 px, md 14 px, lg 20 px, pill (fully rounded)
- Shadows: sm: `rgba(58, 36, 23, 0.08) 0px 1px 4px 0px` · md: `rgba(58, 36, 23, 0.06) 0px 8px 24px 0px` · lg: `rgba(58, 36, 23, 0.19) 0px 12px 30px 0px`
- Spacing: base unit 4 px; common steps 4 px, 8 px, 10 px, 12 px, 14 px, 18 px, 20 px, 22 px, 24 px
- Layout: container 1120 px; breakpoints 860 px
- Motion: 300 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** gentle, warm, encouraging.

Sounds like a friend giving you a warm nudge, never a drill sergeant. It celebrates showing up and treats a missed day as normal.

**Do**

- Praise effort before results
- Use warm light and fire words sparingly
- Keep reminders to one kind sentence

**Do not**

- No guilt about broken streaks
- No loud gamified language
- No productivity-bro tone

## Taglines

1. Small habits, big glow
2. The gentlest way to keep going
3. Streaks that forgive
4. A warm nudge at the right time
5. Build routines that stick

**Boilerplate:** Kindle Habit is a mobile habit tracker with forgiving streaks, quiet reminders and insights that celebrate consistency without guilt.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Send me a link |
| secondaryCta | See how it works |
| success | Habit logged, nicely done |
| error | Could not save that habit, try again |
| empty | No habits yet, start with one small thing |

---
Source listing key `o:landing-mobile-app`. Rebuild with `python3 scripts/brand-kit/build.py o:landing-mobile-app`.
