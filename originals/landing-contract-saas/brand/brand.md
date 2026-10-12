# Clause & Co — brand kit

*Contract review software for small legal teams.* Generated from the SiteShelf listing **Clause & Co Contracts** (Landing Page); every value below is read from that page, not invented.

> **Read every clause. Sign with confidence**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Spectral |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **shield** glyph on a squircle tile. A shield stands for protection in the small print. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F8F6F0` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#14213D` | Body and heading text |
| textMuted | `#5A6478` | Secondary text, captions |
| primary | `#14213D` | Main actions, links, brand colour |
| secondary | `#B8872B` | Highlights, charts, second accent |
| border | `#E5DFD0` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#B8872B` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 14.78:1 | pass | pass |
| Muted text on background | 5.51:1 | pass | pass |
| Primary on background | 14.78:1 | pass | pass |
| Text on primary | 15.97:1 | pass | pass |
| Text on surface | 15.97:1 | pass | pass |

**Colours seen on the page** (share of use): `#F8F6F0` 85.1%, `#14213D` 14.0%, `#B8872B` 0.4%, `#5A6478` 0.2%, `#FBE3DF` 0.1%, `#FFE08A` 0.1%, `#DFF1E6` 0.1%, `#7A4A00` 0.0%, `#8F2418` 0.0%, `#D9B866` 0.0%

## Typography

- Headings: **Spectral** (weight 500)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Spectral:ital,wght@0,500;0,600;1,500&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Spectral | 74.9 px | 500 | 77.8752px | -0.7488px |
| Heading / H2 | Spectral | 44 px | 500 | 48.4px | normal |
| Body | Inter | 18 px | 400 | 28.8px | normal |
| Button | Inter | 14 px | 600 | normal | normal |
| Navigation | Inter | 15 px | 500 | 24px | normal |
| Caption / eyebrow | Inter | 11 px | 600 | normal | 1.54px |

## Shape, space and motion

- Radius: sm 8 px, md 12 px, lg 14 px, pill (fully rounded)
- Shadows: sm: `rgba(20, 33, 61, 0.5) 0px 30px 70px -40px` · md: `rgba(20, 33, 61, 0.5) 0px 30px 70px -40px` · lg: `rgba(20, 33, 61, 0.5) 0px 30px 70px -40px`
- Spacing: base unit 2 px; common steps 2 px, 4 px, 5 px, 6 px, 8 px, 10 px, 12 px, 18 px, 20 px
- Layout: container 1280 px; breakpoints 900 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** measured, assured, precise.

Clause & Co writes like a careful senior associate explaining a contract over lunch. It is calm and exact, translates legal terms into plain English and never raises an alarm it cannot justify.

**Do**

- Translate each clause in one plain sentence
- Say risky, missing or fine, with a reason
- Cite clause numbers precisely

**Do not**

- Do not use legalese to sound authoritative
- Do not promise legal advice
- Do not use scary red wording for minor issues

## Taglines

1. Read every clause. Sign with confidence
2. Fewer surprises in the small print
3. Contracts, explained in plain English
4. From first draft to renewal
5. Careful teams, careful contracts

**Boilerplate:** Clause & Co is contract review software that flags risky terms, explains them in plain English and tracks each contract from first draft to renewal.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Book a demo |
| secondaryCta | See a sample report |
| success | Report ready. 3 risky clauses and 1 missing term found. |
| error | We could not read that file. Upload a PDF or Word document. |
| empty | No contracts yet. Upload one to review. |

---
Source listing key `o:landing-contract-saas`. Rebuild with `python3 scripts/brand-kit/build.py o:landing-contract-saas`.
