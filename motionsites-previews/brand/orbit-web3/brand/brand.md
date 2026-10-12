# Orbit — brand kit

*Self-custody wallet for digital assets.* Generated from the SiteShelf listing **Orbit Web3** (Web3); every value below is read from that page, not invented.

> **Own the future of your assets**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Instrument Serif |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **orbit** glyph. Orbit lines are the name and a ring of protection around assets. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#0A0F0D` | Page background |
| surface | `#12382A` | Cards, panels, raised areas |
| text | `#EDE9DE` | Body and heading text |
| textMuted | `#FFFFFF` | Secondary text, captions |
| primary | `#ECD693` | Main actions, links, brand colour |
| secondary | `#12382A` | Highlights, charts, second accent |
| border | `#2A2E2A` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#12382A` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 15.93:1 | pass | pass |
| Muted text on background | 19.32:1 | pass | pass |
| Primary on background | 13.44:1 | pass | pass |
| Text on primary | 13.66:1 | pass | pass |
| Text on surface | 10.65:1 | pass | pass |

**Colours seen on the page** (share of use): `#0A0F0D` 95.0%, `#12382A` 4.0%, `#ECD693` 0.5%, `#FAF6EB` 0.3%, `#EDE9DE` 0.2%, `#FFFFFF` 0.1%, `#2A2E2A` 0.0%

## Typography

- Headings: **Instrument Serif** (weight 400)
- Body: **Instrument Serif**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Instrument Serif | 112 px | 400 | 106.4px | -2.8px |
| Button | Instrument Serif | 20 px | 400 | 28px | normal |
| Navigation | Instrument Serif | 16 px | 400 | normal | normal |

## Shape, space and motion

- Radius: sm 0 px, md 0 px, lg 0 px, pill (fully rounded)
- Shadows: sm: `rgba(217, 172, 38, 0.6) 0px 4px 95px 4px` · md: `rgba(217, 172, 38, 0.6) 0px 4px 95px 4px` · lg: `rgba(217, 172, 38, 0.6) 0px 4px 95px 4px`
- Spacing: base unit 4 px; common steps 6 px, 12 px, 16 px, 20 px, 24 px, 32 px, 40 px, 48 px, 64 px
- Layout: container 1200 px; breakpoints 420 px, 768 px, 1024 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** dignified, cinematic, secure.

Sounds like a private banker in a quiet room: elegant, sparing and serious about safety. The tone is low and slow, with serif gravitas.

**Do**

- Use short, dignified sentences
- Name the action: send, receive, hold
- Treat security as a matter of fact

**Do not**

- No crypto-bro slang
- Avoid price speculation
- Never use exclamation marks

## Taglines

1. Own the future of your assets
2. Your vault, your orbit
3. Hold what's yours
4. Quiet security for digital wealth
5. Send, receive, keep

**Boilerplate:** Orbit is a self-custody wallet for digital assets, offering a secure vault with simple send and receive tools, trusted by builders worldwide.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Launch your orbit |
| secondaryCta | Open vault |
| success | Transfer sent. |
| error | Transfer failed. Your funds are safe. Try again. |
| empty | Your vault is empty. Receive your first asset. |

---
Source listing key `m:orbit-web3`. Rebuild with `python3 scripts/brand-kit/build.py m:orbit-web3`.
