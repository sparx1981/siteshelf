# NeuroLink — brand kit

*Online memorial pages for loved ones.* Generated from the SiteShelf listing **NeuroLink** (Where Memories Live Forever); every value below is read from that page, not invented.

> **Where memories live forever**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **flame** glyph on a squircle tile. A candle flame is a gentle universal symbol of remembrance. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#0D1017` | Page background |
| surface | `#141826` | Cards, panels, raised areas |
| text | `#FFFFFF` | Body and heading text |
| textMuted | `#F7F4EC` | Secondary text, captions |
| primary | `#1C2233` | Main actions, links, brand colour |
| secondary | `#FFB733` | Highlights, charts, second accent |
| border | `#2F3137` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#FFB733` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 19.03:1 | pass | pass |
| Muted text on background | 17.31:1 | pass | pass |
| Primary on background | 1.20:1 | fail | fail |
| Text on primary | 15.84:1 | pass | pass |
| Text on surface | 17.67:1 | pass | pass |

**Colours seen on the page** (share of use): `#0D1017` 77.2%, `#1C2233` 11.0%, `#5A6496` 11.0%, `#FFFFFF` 0.7%, `#F7F4EC` 0.0%, `#000000` 0.0%, `#E8DDC4` 0.0%, `#FFB733` 0.0%, `#2F3137` 0.0%

## Typography

- Headings: **Inter** (weight 600)
- Body: **Inter**

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Inter | 44 px | 600 | 49.28px | -0.88px |
| Body | Inter | 15 px | 400 | 25.5px | normal |
| Button | Inter | 15 px | 400 | normal | 0.15px |
| Navigation | Inter | 16 px | 400 | normal | normal |

## Shape, space and motion

- Radius: sm 0 px, md 0 px, lg 0 px, pill (fully rounded)
- Shadows: sm: `rgba(232, 200, 120, 0.4) 0px 0px 5px 1px` · md: `rgba(232, 200, 120, 0.5) 0px 0px 6px 1px` · lg: `rgba(232, 200, 120, 0.35) 0px 0px 6px 1px`
- Spacing: base unit 4 px; common steps 10 px, 15 px, 16 px, 20 px, 26 px, 27 px, 32 px, 34 px, 36 px
- Layout: container 1200 px; breakpoints 520 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** gentle, respectful, warm.

Sounds like a kind friend at a funeral: soft, unhurried and sincere. It says remember and celebrate rather than anything clinical, and never rushes a person through grief.

**Do**

- Use gentle words like remember, honour and share
- Keep sentences short and warm
- Always refer to the person by name

**Do not**

- Do not use euphemisms that sound clinical
- Do not use upbeat sales phrases
- Do not rush with urgency

## Taglines

1. Where memories live forever
2. A place to remember them
3. Share their story with those who cared
4. Celebrate a life, together
5. Photos, tributes and cherished moments

**Boilerplate:** NeuroLink lets families create beautiful online memorials where stories, photos and tributes live forever, so friends and relatives can share and celebrate the lives of those they love.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Create Memorial |
| secondaryCta | How It Works |
| success | Memorial created. Add your first memory. |
| error | We couldn't save that. Please try again, gently. |
| empty | No tributes yet. Be the first to share a memory. |

---
Source listing key `s:6a744f750adc10028b3d9bbd`. Rebuild with `python3 scripts/brand-kit/build.py s:6a744f750adc10028b3d9bbd`.
