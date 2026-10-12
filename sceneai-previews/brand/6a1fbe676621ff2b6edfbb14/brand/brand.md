# Peakflow — brand kit

*Contact and community page.* Generated from the SiteShelf listing **Peakflow** (Get in touch); every value below is read from that page, not invented.

> **Get in touch**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **peak** glyph. A peak is a calm, simple mark for a minimal brand. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#FAFAFA` | Page background |
| surface | `#111111` | Cards, panels, raised areas |
| text | `#6B7280` | Body and heading text |
| textMuted | `#111827` | Secondary text, captions |
| primary | `#6B7280` | Main actions, links, brand colour |
| secondary | `#AEB1B9` | Highlights, charts, second accent |
| border | `#2A2A2A` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#AEB1B9` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 4.63:1 | pass | pass |
| Muted text on background | 17.00:1 | pass | pass |
| Primary on background | 4.63:1 | pass | pass |
| Text on primary | 4.83:1 | pass | pass |
| Text on surface | 3.91:1 | fail | pass |

**Colours seen on the page** (share of use): `#FAFAFA` 69.6%, `#111111` 23.8%, `#6B7280` 2.1%, `#D1D5DB` 2.1%, `#1F2937` 2.1%, `#000000` 0.2%, `#9CA3AF` 0.1%, `#111827` 0.0%, `#AEB1B9` 0.0%

## Typography

- Headings: **Inter** (weight 500)
- Body: **Inter**

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Heading / H2 | Inter | 48 px | 500 | normal | -1.2px |
| Subheading / H3 | Inter | 36 px | 300 | normal | normal |
| Body | Inter | 18 px | 400 | normal | normal |
| Button | Inter | 14 px | 500 | normal | normal |

## Shape, space and motion

- Radius: sm 8 px, md 32 px, lg 40 px
- Shadows: sm: `rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.1) 0px 8px 10px -6px` · md: `rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.1) 0px 8px 10px -6px` · lg: `rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.1) 0px 8px 10px -6px`
- Spacing: base unit 4 px; common steps 6 px, 10 px, 14 px, 16 px, 24 px, 32 px, 40 px, 48 px, 64 px
- Layout: container 1280 px; breakpoints 768 px, 1024 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** minimal, open, quiet.

Peakflow writes with the economy of a business card: a few words, a friendly nod, an open door. It is polite, short and happy to be reached.

**Do**

- Use the fewest words that stay friendly
- Say who will reply and when
- Give one way to get in touch

**Do not**

- Do not ask for unneeded details
- Do not use marketing language
- Do not hide the contact method

## Taglines

1. Get in touch
2. Say hello, we reply
3. Connect with Peakflow
4. Questions welcome, answers quick
5. Join the conversation

**Boilerplate:** Peakflow is a small company that invites people to get in touch or join its community through a simple contact page.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Contact |
| secondaryCta | Join |
| success | Thanks. We will reply soon. |
| error | We could not send that. Please try again. |
| empty | No messages yet. |

---
Source listing key `s:6a1fbe676621ff2b6edfbb14`. Rebuild with `python3 scripts/brand-kit/build.py s:6a1fbe676621ff2b6edfbb14`.
