# ClubX — brand kit

*Private club for technology investors.* Generated from the SiteShelf listing **ClubX Investors** (Landing Page); every value below is read from that page, not invented.

> **Finance. Freedom. Fellows.**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **diamond** glyph on a squircle tile. A cut diamond hints at exclusivity and refined taste. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#002B42` | Page background |
| surface | `#111827` | Cards, panels, raised areas |
| text | `#FFFFFF` | Body and heading text |
| textMuted | `#A6B5BD` | Secondary text, captions |
| primary | `#EFE3D0` | Main actions, links, brand colour |
| secondary | `#C9D6EA` | Highlights, charts, second accent |
| border | `#FFFFFF` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#6B6660` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 14.74:1 | pass | pass |
| Muted text on background | 7.00:1 | pass | pass |
| Primary on background | 11.63:1 | pass | pass |
| Text on primary | 15.50:1 | pass | pass |
| Text on surface | 17.74:1 | pass | pass |

**Colours seen on the page** (share of use): `#002B42` 97.5%, `#111827` 1.3%, `#000000` 0.4%, `#CFD8E6` 0.4%, `#FFFFFF` 0.1%, `#1F2937` 0.1%, `#E8D8E8` 0.1%, `#EFE3D0` 0.1%, `#6B3A1E` 0.0%, `#B8863B` 0.0%

## Typography

- Headings: **Inter** (weight 700)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Inter | 78.4 px | 700 | 74.48px | -1.5px |
| Body | Inter | 14 px | 400 | 18.2px | normal |
| Button | Inter | 14 px | 400 | normal | normal |
| Navigation | Inter | 16 px | 400 | normal | normal |

## Shape, space and motion

- Radius: sm 24 px, md 24 px, lg 24 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 2 px, 4 px, 6 px, 8 px, 10 px, 12 px, 16 px, 24 px, 32 px
- Layout: container 1280 px; breakpoints 480 px, 640 px, 768 px, 900 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** exclusive, assured, understated.

Sounds like an invitation on heavy paper: short, polite and sure of itself. It implies access without boasting and speaks to investors as peers, never as leads.

**Do**

- Address the reader as a peer
- State facts like 400+ members and stop
- Use a refined, short call to action

**Do not**

- Do not promise returns
- Do not use hype or FOMO language
- Do not shout

## Taglines

1. Finance. Freedom. Fellows.
2. Where tech investors meet
3. Four hundred investors, one club
4. Back founders, together
5. An invitation to invest with peers

**Boilerplate:** ClubX is a private club for technology investors, bringing more than 400 members together to share deals, back founders and build lasting relationships across finance and tech.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Begin Journey |
| secondaryCta | Learn more |
| success | Request received. We'll be in touch. |
| error | We couldn't send your request. Please try again. |
| empty | No events scheduled yet. |

---
Source listing key `m:clubx-investors`. Rebuild with `python3 scripts/brand-kit/build.py m:clubx-investors`.
