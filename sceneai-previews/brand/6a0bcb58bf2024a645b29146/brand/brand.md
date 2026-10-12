# Averra — brand kit

*Customer proof and testimonials.* Generated from the SiteShelf listing **Testimonials** (Averra); every value below is read from that page, not invented.

> **What customers say, plainly**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter Bold (stand-in for Arial) |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **chat** glyph on a squircle tile. A speech bubble is the clearest sign of customers talking. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#EBEFE5` | Page background |
| surface | `#181A15` | Cards, panels, raised areas |
| text | `#111111` | Body and heading text |
| textMuted | `#4B5563` | Secondary text, captions |
| primary | `#A5E038` | Main actions, links, brand colour |
| secondary | `#4B6B1F` | Highlights, charts, second accent |
| border | `#CCD0C7` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#4B6B1F` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 16.19:1 | pass | pass |
| Muted text on background | 6.48:1 | pass | pass |
| Primary on background | 1.35:1 | fail | fail |
| Text on primary | 12.46:1 | pass | pass |
| Text on surface | 1.08:1 | fail | fail |

**Colours seen on the page** (share of use): `#EBEFE5` 99.4%, `#181A15` 0.5%, `#A5E038` 0.1%, `#4B6B1F` 0.1%, `#6B7280` 0.0%, `#4B5563` 0.0%, `#CCD0C7` 0.0%

## Typography

- Headings: **Arial** (weight 400)
- Body: **Inter**

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Button | Arial | 13.3 px | 400 | normal | normal |

## Shape, space and motion

- Radius: sm 16 px, md 16 px, lg 16 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 6 px, 12 px, 16 px, 24 px, 32 px, 48 px, 64 px
- Layout: container 1000 px; breakpoints single fluid layout
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** warm, grounded, quietly proud.

Averra sounds like a customer who really loves the product and tells a friend: honest, concrete and unembellished. It lets the quote lead and keeps the framing minimal.

**Do**

- Quote customers in their own words
- Name the person and role
- Keep surrounding copy very short

**Do not**

- Rewrite quotes into slogans
- Use star-rating hype
- Add unsupported statistics

## Taglines

1. What customers say, plainly
2. Heard from the people who use it
3. Proof in their own words
4. Good work, good words
5. Real voices, real results

**Boilerplate:** Averra collects and presents genuine customer testimonials, giving brands a calm, credible page of quotes from the people who use their product.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Read the stories |
| secondaryCta | Share yours |
| success | Thank you. Your story is in. |
| error | We could not send your story. Please try again. |
| empty | No testimonials yet. |

---
Source listing key `s:6a0bcb58bf2024a645b29146`. Rebuild with `python3 scripts/brand-kit/build.py s:6a0bcb58bf2024a645b29146`.
