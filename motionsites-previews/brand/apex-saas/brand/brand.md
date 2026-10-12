# APEX — brand kit

*Lead and revenue growth platform for sales teams.* Generated from the SiteShelf listing **Apex SaaS** (SaaS); every value below is read from that page, not invented.

> **Accelerate your revenue growth**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter Bold (stand-in for Geist) |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **peak** glyph on a squircle tile. A sharp peak says top of the funnel to peak performance and suits the capitals. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#05010E` | Page background |
| surface | `#7C3BED` | Cards, panels, raised areas |
| text | `#F3F3F1` | Body and heading text |
| textMuted | `#D4D2CE` | Secondary text, captions |
| primary | `#7C3BED` | Main actions, links, brand colour |
| secondary | `#B793F5` | Highlights, charts, second accent |
| border | `#313135` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#B793F5` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 18.58:1 | pass | pass |
| Muted text on background | 13.67:1 | pass | pass |
| Primary on background | 3.64:1 | fail | pass |
| Text on primary | 5.67:1 | pass | pass |
| Text on surface | 5.10:1 | pass | pass |

**Colours seen on the page** (share of use): `#05010E` 99.6%, `#7C3BED` 0.3%, `#F3F3F1` 0.1%, `#D4D2CE` 0.0%, `#27272A` 0.0%, `#B793F5` 0.0%

## Typography

- Headings: **Geist** (weight 600)
- Body: **Geist**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Geist | 72 px | 600 | 75.6px | -1.8px |
| Body | Geist | 18 px | 400 | 32px | normal |
| Button | Geist | 16 px | 400 | normal | normal |
| Navigation | Geist | 16 px | 400 | normal | normal |

## Shape, space and motion

- Radius: sm 8 px, md 12 px, lg 24 px, pill (fully rounded)
- Shadows: sm: `rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset` · md: `rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset` · lg: `rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset`
- Spacing: base unit 4 px; common steps 2 px, 4 px, 8 px, 12 px, 16 px, 24 px, 32 px, 48 px, 64 px
- Layout: container 1024 px; breakpoints 640 px, 700 px, 768 px, 1024 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** driven, sleek, energetic.

Sounds like a sales leader's morning pep talk: fast, outcome-first and confident. Sentences are short, verbs are strong and every claim points to pipeline, funnel or revenue.

**Do**

- Lead with the outcome, such as more qualified leads
- Use strong verbs like drive, close and convert
- Keep CTA copy to three or four words

**Do not**

- Do not promise guaranteed revenue
- Do not bury the sign-up under features
- Do not pile on buzzwords

## Taglines

1. Accelerate your revenue growth
2. Move your funnel forward
3. Leads in, revenue up
4. Sell smarter, close faster
5. Growth with a clear line of sight

**Boilerplate:** APEX is a revenue growth platform that connects workflows, analytics and lead management so sales and marketing teams can move prospects through the funnel faster.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Start free right now |
| secondaryCta | Schedule a consult |
| success | You're in. Your workspace is ready. |
| error | We couldn't create your account. Please try again. |
| empty | No leads yet. Import a list to begin. |

---
Source listing key `m:apex-saas`. Rebuild with `python3 scripts/brand-kit/build.py m:apex-saas`.
