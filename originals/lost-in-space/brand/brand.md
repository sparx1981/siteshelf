# Tether — brand kit

*Playful 404 page with a floating astronaut.* Generated from the SiteShelf listing **Lost in Space 404 Page** (Error Page); every value below is read from that page, not invented.

> **Houston, this page drifted away**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Unbounded |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **orbit** glyph on a squircle tile. An orbit loop is the astronaut's tether and the sense of drifting around a point. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#0A0D24` | Page background |
| surface | `#2A1F63` | Cards, panels, raised areas |
| text | `#EEF0FF` | Body and heading text |
| textMuted | `#9AA1D6` | Secondary text, captions |
| primary | `#FFB84D` | Main actions, links, brand colour |
| secondary | `#2A1F63` | Highlights, charts, second accent |
| border | `#EEF0FF` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#2A1F63` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 16.92:1 | pass | pass |
| Muted text on background | 7.70:1 | pass | pass |
| Primary on background | 11.15:1 | pass | pass |
| Text on primary | 11.43:1 | pass | pass |
| Text on surface | 12.58:1 | pass | pass |

**Colours seen on the page** (share of use): `#0A0D24` 82.2%, `#2A1F63` 16.4%, `#000000` 0.3%, `#FFFFFF` 0.3%, `#EEF0FF` 0.2%, `#FFB84D` 0.1%, `#E0782F` 0.1%, `#FFD28A` 0.1%, `#B8501F` 0.1%, `#9AA1D6` 0.1%

## Typography

- Headings: **Unbounded** (weight 600)
- Body: **Outfit**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Unbounded:wght@600;800&family=Outfit:wght@300;400;500&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Unbounded | 40 px | 600 | 48px | normal |
| Body | Outfit | 18 px | 300 | 28.8px | normal |
| Button | Outfit | 18 px | 300 | 28.8px | normal |

## Shape, space and motion

- Radius: sm 50 px, md 50 px, lg 50 px, pill (fully rounded)
- Shadows: sm: `rgba(0, 0, 0, 0.45) -22px -18px 40px 0px inset` · md: `rgba(0, 0, 0, 0.45) -22px -18px 40px 0px inset` · lg: `rgba(0, 0, 0, 0.45) -22px -18px 40px 0px inset`
- Spacing: base unit 4 px; common steps 6 px, 10 px, 12 px, 16 px, 20 px, 22 px, 24 px, 28 px, 40 px
- Layout: container 1200 px; breakpoints 900 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** playful, calm, wry.

Talks like a mission controller with a sense of humour: crisp radio phrases, a deadpan joke, and a clear route home. It treats the broken link as a minor drift, not a disaster.

**Do**

- Use mission-control phrasing like roger and copy that
- Offer a clear way back immediately
- Keep jokes dry and short

**Do not**

- No real alarm or panic wording
- Avoid space jargon that needs explaining
- Never blame the visitor

## Taglines

1. Houston, this page drifted away
2. Floating free, but not for long
3. Copy that. Tracking down your page
4. Stay on the tether
5. Back to base in one click

**Boilerplate:** Tether is a playful 404 page featuring a CSS astronaut on a line among drifting stars, with a search box that points visitors back to the right page.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Search the site |
| secondaryCta | Return to base |
| success | Found it. Bringing you in. |
| error | Signal lost. Try that search again. |
| empty | No matches in this sector. Try another word. |

---
Source listing key `o:lost-in-space`. Rebuild with `python3 scripts/brand-kit/build.py o:lost-in-space`.
