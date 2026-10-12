# Greenlit — brand kit

*Data upload and insight tool.* Generated from the SiteShelf listing **Transform Data** (Hero Section); every value below is read from that page, not invented.

> **Transform data quickly**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Outfit |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **cloud** glyph on a circle tile. A cloud suggests uploading your data into something useful. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#EEF3FB` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#000000` | Body and heading text |
| textMuted | `#505050` | Secondary text, captions |
| primary | `#5AE14C` | Main actions, links, brand colour |
| secondary | `#327C2A` | Highlights, charts, second accent |
| border | `#CDD1D8` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#327C2A` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 18.85:1 | pass | pass |
| Muted text on background | 7.24:1 | pass | pass |
| Primary on background | 1.53:1 | fail | fail |
| Text on primary | 11.51:1 | pass | pass |
| Text on surface | 21.00:1 | pass | pass |

**Colours seen on the page** (share of use): `#EEF3FB` 99.0%, `#000000` 0.6%, `#505050` 0.2%, `#0E1311` 0.1%, `#5AE14C` 0.1%, `#222222` 0.0%, `#0C2A0A` 0.0%, `#327C2A` 0.0%, `#CDD1D8` 0.0%

## Typography

- Headings: **Outfit** (weight 700)
- Body: **Outfit**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=Outfit:wght@400;500;600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Outfit | 80 px | 700 | 80px | -4.8px |
| Body | Outfit | 20 px | 500 | 29px | -0.4px |
| Button | Figtree | 16 px | 500 | 16px | -0.2px |
| Navigation | Figtree | 24 px | 600 | 24px | -1.44px |

## Shape, space and motion

- Radius: sm 6 px, md 10 px, lg 12 px, pill (fully rounded)
- Shadows: sm: `rgba(20, 30, 60, 0.12) 0px 2px 10px 0px` · md: `rgba(0, 0, 0, 0.12) 0px 4px 16px 0px` · lg: `rgba(20, 30, 90, 0.2) 0px 20px 60px 0px`
- Spacing: base unit 4 px; common steps 2 px, 4 px, 6 px, 8 px, 10 px, 12 px, 16 px, 32 px, 34 px
- Layout: container 1200 px; breakpoints 560 px, 1024 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** bright, efficient, encouraging.

Greenlit talks like a helpful analyst who has a good answer ready. It is upbeat, plain and quick, and promises quick insight rather than deep magic.

**Do**

- Lead with what the user will get
- Use verbs: upload, ask, see
- Keep sentences short

**Do not**

- Do not use 'powerful' or 'effortless'
- Do not overpromise insight
- Do not use technical jargon in the hero

## Taglines

1. Transform data quickly
2. Upload it, ask, get answers
3. Insights as soon as you upload
4. Work smarter with your own numbers
5. From file to finding in seconds

**Boilerplate:** Greenlit is a data tool that turns uploaded information into clear insights right away, with voice and prompt input.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Upgrade |
| secondaryCta | Attach a file |
| success | File uploaded. Ask your first question. |
| error | We could not read that file. Try a CSV or spreadsheet. |
| empty | No data yet. Attach a file to begin. |

---
Source listing key `m:transform-data`. Rebuild with `python3 scripts/brand-kit/build.py m:transform-data`.
