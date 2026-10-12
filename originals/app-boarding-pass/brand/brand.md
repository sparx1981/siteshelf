# Wayfarer Wallet — brand kit

*Digital boarding passes with live gate updates.* Generated from the SiteShelf listing **Boarding Pass Wallet** (App UI); every value below is read from that page, not invented.

> **Everything for the gate**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Outfit |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **plane** glyph on a circle tile. A paper plane is instantly legible on a pass and echoes the destination photography. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#FFFFFF` | Page background |
| surface | `#24428A` | Cards, panels, raised areas |
| text | `#14213D` | Body and heading text |
| textMuted | `#56627A` | Secondary text, captions |
| primary | `#14213D` | Main actions, links, brand colour |
| secondary | `#1F4FD1` | Highlights, charts, second accent |
| border | `#5D78C8` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#1F4FD1` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 15.97:1 | pass | pass |
| Muted text on background | 6.13:1 | pass | pass |
| Primary on background | 15.97:1 | pass | pass |
| Text on primary | 15.97:1 | pass | pass |
| Text on surface | 1.69:1 | fail | fail |

**Colours seen on the page** (share of use): `#FFFFFF` 52.4%, `#0C1730` 20.3%, `#24428A` 20.2%, `#050818` 3.6%, `#000000` 1.9%, `#1B2A5A` 0.6%, `#C3CBDB` 0.4%, `#2F1C4D` 0.3%, `#56627A` 0.2%, `#1F4FD1` 0.2%

## Typography

- Headings: **Outfit** (weight 700)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Inter:wght@400;500&family=Outfit:wght@500;600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Outfit | 56 px | 700 | 58.24px | -1.12px |
| Heading / H2 | Outfit | 20 px | 700 | normal | normal |
| Body | Inter | 18 px | 400 | 27px | normal |
| Button | Outfit | 15 px | 600 | normal | normal |
| Caption / eyebrow | Outfit | 13 px | 600 | normal | 2.34px |

## Shape, space and motion

- Radius: sm 12 px, md 24 px, lg 24 px, pill (fully rounded)
- Shadows: sm: `rgba(0, 0, 0, 0.7) 0px 30px 60px -24px` · md: `rgba(0, 0, 0, 0.7) 0px 30px 60px -24px` · lg: `rgba(0, 0, 0, 0.7) 0px 30px 60px -24px`
- Spacing: base unit 2 px; common steps 3 px, 6 px, 8 px, 10 px, 11 px, 12 px, 14 px, 18 px, 20 px
- Layout: container 960 px; breakpoints 900 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** calm, helpful, brisk.

Wayfarer Wallet sounds like a seasoned gate agent who is never rattled: clear, short and one step ahead of the traveller. It gives the next thing to do before the traveller has to ask.

**Do**

- Lead with the gate, the time and the seat
- Use present tense for live updates, such as 'Boarding now'
- Keep every message under ten words

**Do not**

- Use airline cheerfulness like 'Have a magical journey'
- Hide a delay behind soft wording
- Add exclamation marks to gate changes

## Taglines

1. Everything for the gate
2. Your pass, ready before you are
3. Gate, seat, boarding: sorted
4. Less queue, more journey
5. Scan, board, settle in

**Boilerplate:** Wayfarer Wallet is a travel app that keeps boarding passes, gate changes and flight details in one place, so travellers can reach the aircraft without hunting through emails.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Flip pass |
| secondaryCta | Next pass |
| success | Pass added to your wallet. |
| error | We could not refresh your gate. Retrying. |
| empty | No passes yet. Add a flight to begin. |

---
Source listing key `o:app-boarding-pass`. Rebuild with `python3 scripts/brand-kit/build.py o:app-boarding-pass`.
