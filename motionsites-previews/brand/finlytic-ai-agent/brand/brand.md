# Finlytic — brand kit

*AI agent for leads, support and data entry.* Generated from the SiteShelf listing **Finlytic AI Agent** (SaaS); every value below is read from that page, not invented.

> **Let the agent handle it**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **spark** glyph. A single spark is a modest, familiar mark for intelligent automation. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#000000` | Page background |
| surface | `#0E0B1A` | Cards, panels, raised areas |
| text | `#FFFFFF` | Body and heading text |
| textMuted | `#9A94B5` | Secondary text, captions |
| primary | `#7B39FC` | Main actions, links, brand colour |
| secondary | `#58D6A0` | Highlights, charts, second accent |
| border | `#242424` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#58D6A0` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 21.00:1 | pass | pass |
| Muted text on background | 7.28:1 | pass | pass |
| Primary on background | 3.83:1 | fail | pass |
| Text on primary | 5.48:1 | pass | pass |
| Text on surface | 19.42:1 | pass | pass |

**Colours seen on the page** (share of use): `#000000` 86.8%, `#0E0B1A` 11.8%, `#2B2344` 0.3%, `#7B39FC` 0.3%, `#58D6A0` 0.2%, `#9B6BFF` 0.2%, `#FFFFFF` 0.2%, `#1C1630` 0.1%, `#9A94B5` 0.0%, `#E9E6F5` 0.0%

## Typography

- Headings: **Inter** (weight 600)
- Body: **Manrope**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Cabin:wght@400;500;600&family=DM+Sans:wght@400;500;600&family=Inter:wght@400;500;600&family=Instrument+Serif:ital@1&family=Manrope:wght@400;500;600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Subheading / H3 | Inter | 18 px | 600 | normal | -0.18px |
| Body | Manrope | 18 px | 400 | 26px | normal |
| Navigation | Manrope | 16 px | 400 | normal | normal |
| Caption / eyebrow | Inter | 12 px | 400 | normal | -0.18px |

## Shape, space and motion

- Radius: sm 6 px, md 10 px, lg 12 px, pill (fully rounded)
- Shadows: sm: `rgba(23, 23, 23, 0.04) 0px 4px 16px 0px` · md: `rgba(23, 23, 23, 0.04) 0px 4px 16px 0px` · lg: `rgba(23, 23, 23, 0.04) 0px 4px 16px 0px`
- Spacing: base unit 4 px; common steps 3 px, 4 px, 6 px, 8 px, 9 px, 10 px, 12 px, 14 px, 16 px
- Layout: container 1440 px; breakpoints 560 px, 900 px, 1100 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** efficient, capable, low-key.

Finlytic sounds like a reliable operations colleague who has already finished the task: concise, confident and focused on the work removed from your plate. It lists jobs, not magic.

**Do**

- Name the specific tasks the agent handles
- Lead with the time saved
- Keep claims modest and checkable

**Do not**

- Use sci-fi AI language
- Promise to replace people
- Use vague words like 'intelligent'

## Taglines

1. Let the agent handle it
2. Leads, support, data entry: done
3. Build while your agent works
4. Fewer tasks, more building
5. The back office, on autopilot

**Boilerplate:** Finlytic is an AI agent platform that handles lead generation, customer support and data entry, so small teams can spend their time building the business.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Get started |
| secondaryCta | See how it works |
| success | Agent deployed. It is already working. |
| error | The agent hit a snag. Check its log and retry. |
| empty | No tasks assigned yet. |

---
Source listing key `m:finlytic-ai-agent`. Rebuild with `python3 scripts/brand-kit/build.py m:finlytic-ai-agent`.
