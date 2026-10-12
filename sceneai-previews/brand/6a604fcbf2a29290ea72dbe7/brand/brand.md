# LaunchPad — brand kit

*Growth strategy and market insights consultancy.* Generated from the SiteShelf listing **Market Insights** (LaunchPad); every value below is read from that page, not invented.

> **Expert insights for better growth**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **rocket** glyph on a squircle tile. A rocket is a direct nod to the brand name and growth. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#FFFFFF` | Page background |
| surface | `#DDD6FE` | Cards, panels, raised areas |
| text | `#6B7280` | Body and heading text |
| textMuted | `#111827` | Secondary text, captions |
| primary | `#2563EB` | Main actions, links, brand colour |
| secondary | `#BFDBFE` | Highlights, charts, second accent |
| border | `#EAEBED` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#BFDBFE` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 4.83:1 | pass | pass |
| Muted text on background | 17.74:1 | pass | pass |
| Primary on background | 5.17:1 | pass | pass |
| Text on primary | 5.17:1 | pass | pass |
| Text on surface | 3.48:1 | fail | pass |

**Colours seen on the page** (share of use): `#FFFFFF` 87.3%, `#DDD6FE` 1.9%, `#4C1D95` 1.9%, `#BFDBFE` 1.9%, `#1E3A8A` 1.9%, `#BBF7D0` 1.9%, `#14532D` 1.9%, `#6B7280` 0.4%, `#2563EB` 0.4%, `#111827` 0.3%

## Typography

- Headings: **Inter** (weight 700)
- Body: **Inter**

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Heading / H2 | Inter | 36 px | 700 | 45px | -0.72px |
| Subheading / H3 | Inter | 18 px | 600 | 24.75px | normal |
| Body | Inter | 15 px | 400 | normal | normal |
| Caption / eyebrow | Inter | 12 px | 400 | normal | normal |

## Shape, space and motion

- Radius: sm 16 px, md 16 px, lg 16 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 4 px, 8 px, 12 px, 16 px, 24 px, 32 px, 48 px, 64 px
- Layout: container 1280 px; breakpoints 768 px, 1024 px
- Motion: 800 ms, `ease-out`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** bold, expert, forward.

Sounds like a sharp strategist: confident, direct, a little energetic. It backs up each claim with a clear reason.

**Do**

- Lead with the insight, then the action
- Use growth numbers where available
- Keep sentences under 20 words

**Do not**

- No vague 'synergy' talk
- No guaranteed-results claims
- No buzzword pileups

## Taglines

1. Expert insights for better growth
2. Bold ideas, sharp strategy
3. Fuel your next move
4. Market clarity, faster growth
5. Strategy that gets going

**Boilerplate:** LaunchPad is a growth consultancy that fuels bold ideas with market insights and sharp strategy, helping companies decide where to go and how to get there.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Get insights |
| secondaryCta | Talk to us |
| success | Thanks, we will be in touch |
| error | Something went wrong, try again |
| empty | No insights published yet |

---
Source listing key `s:6a604fcbf2a29290ea72dbe7`. Rebuild with `python3 scripts/brand-kit/build.py s:6a604fcbf2a29290ea72dbe7`.
