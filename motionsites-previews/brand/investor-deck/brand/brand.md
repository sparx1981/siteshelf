# Viktory — brand kit

*AI company focused on cybersecurity and web3.* Generated from the SiteShelf listing **Investor Deck** (Investor Presentations); every value below is read from that page, not invented.

> **Innovation and growth**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter Bold (stand-in for Aeonik) |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **peak** glyph on a squircle tile. A peak signals victory, growth and the summit of a market. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#000000` | Page background |
| surface | `#131318` | Cards, panels, raised areas |
| text | `#FFFFFF` | Body and heading text |
| textMuted | `#80838E` | Secondary text, captions |
| primary | `#7FBAFF` | Main actions, links, brand colour |
| secondary | `#B9D9FF` | Highlights, charts, second accent |
| border | `#FFFFFF` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#3C5474` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 21.00:1 | pass | pass |
| Muted text on background | 5.55:1 | pass | pass |
| Primary on background | 10.37:1 | pass | pass |
| Text on primary | 9.70:1 | pass | pass |
| Text on surface | 18.52:1 | pass | pass |

**Colours seen on the page** (share of use): `#000000` 89.7%, `#131318` 9.6%, `#FFFFFF` 0.7%, `#80838E` 0.0%, `#7FBAFF` 0.0%, `#536EFB` 0.0%, `#B9D9FF` 0.0%, `#3C5474` 0.0%

## Typography

- Headings: **Aeonik** (weight 500)
- Body: **Aeonik**
- Google Fonts: `https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Aeonik | 140 px | 500 | 126px | -3.5px |
| Heading / H2 | Aeonik | 50.4 px | 500 | 52.416px | normal |
| Button | Arial | 13.3 px | 400 | normal | normal |

## Shape, space and motion

- Radius: sm 0 px, md 0 px, lg 0 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 2 px, 8 px, 12 px, 16 px, 32 px, 43 px, 50 px, 58 px, 72 px
- Layout: container 1200 px; breakpoints 760 px
- Motion: 300 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** assured, analytical, forward-looking.

Speaks in the confident, compact register of an investor deck: short claims with numbers behind them and a clear market framing. It names the problem before the solution.

**Do**

- State problem, market and solution in order
- Back each claim with a figure
- Keep slide text to one idea

**Do not**

- No filler like cutting edge
- Avoid unsupported superlatives
- Never leave a claim without a market

## Taglines

1. Innovation and growth
2. AI that decides faster
3. Cybersecurity and web3, secured
4. Where AI meets enterprise
5. A growing market, a clear path

**Boilerplate:** Viktory is an AI company targeting enterprise data analysis, cybersecurity and web3, selling through a direct sales team, online platforms and strategic partners.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Next slide |
| secondaryCta | Contact investor relations |
| success | Request received. We'll send the full deck. |
| error | Couldn't load that slide. Please refresh. |
| empty | No slides to show. |

---
Source listing key `m:investor-deck`. Rebuild with `python3 scripts/brand-kit/build.py m:investor-deck`.
