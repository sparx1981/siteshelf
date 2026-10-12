# Cliently — brand kit

*Client testimonials made simple.* Generated from the SiteShelf listing **What they say about us?** (Cliently); every value below is read from that page, not invented.

> **What they say about us**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **chat** glyph. A speech bubble stands for the testimonials the brand collects. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#FFFFFF` | Page background |
| surface | `#27272A` | Cards, panels, raised areas |
| text | `#18181B` | Body and heading text |
| textMuted | `#69696B` | Secondary text, captions |
| primary | `#5A4A2E` | Main actions, links, brand colour |
| secondary | `#A49B8C` | Highlights, charts, second accent |
| border | `#DFDFDF` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#A49B8C` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 17.72:1 | pass | pass |
| Muted text on background | 5.48:1 | pass | pass |
| Primary on background | 8.56:1 | pass | pass |
| Text on primary | 8.56:1 | pass | pass |
| Text on surface | 1.19:1 | fail | fail |

**Colours seen on the page** (share of use): `#FFFFFF` 55.8%, `#27272A` 33.7%, `#3B3F5C` 2.1%, `#14151F` 2.1%, `#5C3B4A` 2.1%, `#2F5148` 2.1%, `#5A4A2E` 2.1%, `#69696B` 0.0%, `#A49B8C` 0.0%, `#DFDFDF` 0.0%

## Typography

- Headings: **Inter** (weight 600)
- Body: **Inter**

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Inter | 56 px | 600 | 58.8px | -1.68px |
| Body | Inter | 16 px | 400 | normal | normal |
| Button | Arial | 13.3 px | 400 | normal | normal |

## Shape, space and motion

- Radius: sm 32 px, md 32 px, lg 32 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 6 px, 16 px, 20 px, 24 px, 32 px, 56 px, 64 px
- Layout: container 1400 px; breakpoints 767 px, 768 px, 1024 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** warm, trustworthy, clear.

Sounds like a reference from a happy client: short, human and specific. It lets customers speak and keeps its own voice modest.

**Do**

- Quote customers directly
- Name the role and company
- Keep the headline as a question

**Do not**

- No invented praise
- No exaggerated claims
- No marketing jargon

## Taglines

1. What they say about us
2. Clients, in their own words
3. Trust, written by others
4. Stories from happy clients
5. Proof, from the people we serve

**Boilerplate:** Cliently collects and shows client testimonials, giving agencies and service businesses a clean way to let happy customers speak for them.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Read the stories |
| secondaryCta | Share your story |
| success | Thanks, your testimonial is in |
| error | Could not save that testimonial, try again |
| empty | No testimonials yet |

---
Source listing key `s:6a036ef211f6ab71b2b946a7`. Rebuild with `python3 scripts/brand-kit/build.py s:6a036ef211f6ab71b2b946a7`.
