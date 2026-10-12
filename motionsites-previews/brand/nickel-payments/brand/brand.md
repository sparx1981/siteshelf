# nickel — brand kit

*Payments and collections for accounts-payable teams.* Generated from the SiteShelf listing **Nickel Payments** (SaaS); every value below is read from that page, not invented.

> **Unlock growth with every payment**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **coins** glyph on a squircle tile. A coin is a simple nod to the name nickel and to payments. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F3F2F7` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#16161D` | Body and heading text |
| textMuted | `#6D6D7B` | Secondary text, captions |
| primary | `#FFCDA8` | Main actions, links, brand colour |
| secondary | `#F2601B` | Highlights, charts, second accent |
| border | `#D4D3D8` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#F2601B` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 16.16:1 | pass | pass |
| Muted text on background | 4.57:1 | pass | pass |
| Primary on background | 1.30:1 | fail | fail |
| Text on primary | 13.61:1 | pass | pass |
| Text on surface | 18.00:1 | pass | pass |

**Colours seen on the page** (share of use): `#F3F2F7` 88.2%, `#FFCDA8` 3.8%, `#FF8A4A` 3.8%, `#F2601B` 3.8%, `#16161D` 0.1%, `#FFA970` 0.1%, `#6D6D7B` 0.0%, `#D4D3D8` 0.0%

## Typography

- Headings: **Inter** (weight 500)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Inter | 72 px | 500 | 75.6px | -1.8px |
| Body | Inter | 20 px | 400 | 32.5px | normal |
| Button | Inter | 16 px | 500 | 24px | normal |
| Navigation | Inter | 24 px | 700 | normal | -0.6px |

## Shape, space and motion

- Radius: sm 2 px, md 8 px, lg 12 px, pill (fully rounded)
- Shadows: sm: `rgb(225, 225, 232) 0px 0px 0px 1px` · md: `rgba(20, 20, 40, 0.06) 0px 1px 2px 0px` · lg: `rgba(240, 100, 30, 0.55) 0px 8px 20px -8px, rgba(255, 255, 255, 0.35) 0px 1px 0px 0px inset`
- Spacing: base unit 4 px; common steps 2 px, 4 px, 8 px, 16 px, 20 px, 22 px, 24 px, 32 px, 40 px
- Layout: container 1280 px; breakpoints 560 px, 640 px, 768 px, 1024 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** plainspoken, dependable, brisk.

nickel sounds like a sharp finance lead who respects your time. Short, confident sentences promise automation, honest net terms and a real person to talk to.

**Do**

- Name the outcome: payments, terms, collections
- Use verbs finance teams use: reconcile, collect, extend
- Offer a human option in every flow

**Do not**

- Do not use fintech buzzwords like 'disrupt'
- Avoid vague claims about 'growth'
- Never hide fees

## Taglines

1. Unlock growth with every payment
2. Net terms, extended
3. Collections that run themselves
4. Run payments. Skip the chase
5. Talk to a human

**Boilerplate:** nickel is a payments platform that lets businesses run payments, extend net terms and automate collections compliance, with specialist tools for accountants.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Get started |
| secondaryCta | Talk to a human |
| success | Payment scheduled. |
| error | That payment did not go through. Please check the details. |
| empty | No invoices due. All paid up. |

---
Source listing key `m:nickel-payments`. Rebuild with `python3 scripts/brand-kit/build.py m:nickel-payments`.
