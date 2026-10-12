# Wayfind — brand kit

*Site search that finds missing pages.* Generated from the SiteShelf listing **404 with Smart Suggestions** (Error Page); every value below is read from that page, not invented.

> **Not here, but we'll find it**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Plus Jakarta Sans |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **compass** glyph. A compass points back to the right path, which is exactly what a 404 should do. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F5F7FB` | Page background |
| surface | `#4F46E5` | Cards, panels, raised areas |
| text | `#151A30` | Body and heading text |
| textMuted | `#5B6280` | Secondary text, captions |
| primary | `#4F46E5` | Main actions, links, brand colour |
| secondary | `#151A30` | Highlights, charts, second accent |
| border | `#D8DCEF` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#151A30` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 16.02:1 | pass | pass |
| Muted text on background | 5.59:1 | pass | pass |
| Primary on background | 5.86:1 | pass | pass |
| Text on primary | 6.29:1 | pass | pass |
| Text on surface | 2.73:1 | fail | fail |

**Colours seen on the page** (share of use): `#F5F7FB` 97.4%, `#4F46E5` 2.0%, `#E5E7FF` 0.3%, `#151A30` 0.1%, `#5B6280` 0.1%, `#6C7392` 0.1%, `#E11D48` 0.0%, `#D8DCEF` 0.0%

## Typography

- Headings: **Plus Jakarta Sans** (weight 700)
- Body: **Plus Jakarta Sans**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500&family=Plus+Jakarta+Sans:wght@400;600;800&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Plus Jakarta Sans | 30 px | 700 | 46.5px | normal |
| Heading / H2 | Plus Jakarta Sans | 15 px | 700 | 23.25px | normal |
| Body | Plus Jakarta Sans | 16 px | 400 | 24.8px | normal |
| Button | Plus Jakarta Sans | 15 px | 700 | normal | normal |
| Caption / eyebrow | Fira Code | 12.5 px | 400 | normal | normal |

## Shape, space and motion

- Radius: sm 10 px, md 12 px, lg 16 px, pill (fully rounded)
- Shadows: sm: `rgba(21, 26, 48, 0.07) 0px 6px 22px 0px` · md: `rgba(21, 26, 48, 0.07) 0px 6px 22px 0px` · lg: `rgba(21, 26, 48, 0.07) 0px 6px 22px 0px`
- Spacing: base unit 2 px; common steps 2 px, 3 px, 6 px, 8 px, 10 px, 11 px, 12 px, 14 px, 18 px
- Layout: container 1200 px; breakpoints single fluid layout
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** helpful, unflustered, straightforward.

Sounds like a friendly receptionist who says you are not lost, just in the wrong corridor. It admits the miss quickly and moves straight to the next step.

**Do**

- Admit the error in the first six words
- Offer a likely alternative immediately
- Use first-person we, never blame the link

**Do not**

- No jokes that make a visitor feel stupid
- Avoid error codes in the headline
- Do not dump a full sitemap

## Taglines

1. Not here, but we'll find it
2. Lost link? Found a better one
3. Back on track in one click
4. We know where it went
5. The right page, probably this one

**Boilerplate:** Wayfind is a not-found page toolkit that reads the missing address, suggests the closest matching pages and lets visitors report a broken link in seconds.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Search the docs |
| secondaryCta | Send report |
| success | Thanks, we'll fix that link. |
| error | We could not send your report. Please try again. |
| empty | No close matches. Try a different word. |

---
Source listing key `o:error-broken-link-search`. Rebuild with `python3 scripts/brand-kit/build.py o:error-broken-link-search`.
