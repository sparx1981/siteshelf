# Vaultline — brand kit

*Cloud storage with a clearly indexed help centre.* Generated from the SiteShelf listing **Sticky Index FAQ** (FAQ); every value below is read from that page, not invented.

> **Help, indexed**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from IBM Plex Sans |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **shield** glyph on a squircle tile. A shield conveys the safekeeping of files in cloud storage. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#0E1218` | Page background |
| surface | `#151B24` | Cards, panels, raised areas |
| text | `#C4CFDF` | Body and heading text |
| textMuted | `#E8EDF5` | Secondary text, captions |
| primary | `#4CC9F0` | Main actions, links, brand colour |
| secondary | `#FFC857` | Highlights, charts, second accent |
| border | `#26303D` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#265B6E` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 11.93:1 | pass | pass |
| Muted text on background | 15.97:1 | pass | pass |
| Primary on background | 9.76:1 | pass | pass |
| Text on primary | 10.22:1 | pass | pass |
| Text on surface | 10.99:1 | pass | pass |

**Colours seen on the page** (share of use): `#0E1218` 97.6%, `#C4CFDF` 1.0%, `#17303D` 0.7%, `#E8EDF5` 0.3%, `#4CC9F0` 0.2%, `#9AA8BB` 0.1%, `#FFFFFF` 0.0%, `#06222C` 0.0%, `#FFC857` 0.0%, `#6F7E93` 0.0%

## Typography

- Headings: **IBM Plex Sans** (weight 600)
- Body: **IBM Plex Sans**
- Mono: **IBM Plex Mono**
- Google Fonts: `https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400&family=IBM+Plex+Sans:wght@400;500;600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | IBM Plex Sans | 56 px | 600 | 60.48px | -1.12px |
| Heading / H2 | IBM Plex Mono | 12 px | 400 | normal | 0.96px |
| Body | IBM Plex Sans | 16 px | 400 | 26.4px | normal |
| Button | IBM Plex Mono | 13 px | 400 | normal | normal |
| Navigation | IBM Plex Sans | 16 px | 500 | 26.4px | normal |
| Mono | IBM Plex Mono | 14 px | 400 | normal | normal |

## Shape, space and motion

- Radius: sm 5 px, md 10 px, lg 14 px
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 8 px, 9 px, 10 px, 12 px, 14 px, 16 px, 18 px, 39 px, 44 px
- Layout: container 1180 px; breakpoints 900 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** precise, friendly, dependable.

A support engineer who writes the docs they would want to read: concise, exact and on your side. Answers come first, then the detail, with no padding.

**Do**

- Answer in the first sentence, then explain
- Name features exactly as they appear in the product
- Offer a copyable link for every answer

**Do not**

- Cheerful filler like great question
- Security hand-waving with no specifics
- Walls of text without headings

## Taglines

1. Help, indexed
2. Find the answer, share the link
3. Your files, your answers
4. Every question has an address
5. Storage you can ask about

**Boilerplate:** Vaultline is a cloud storage service for teams and individuals, backed by a help centre organised by topic with a shareable link on every answer.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Search help |
| secondaryCta | Contact support |
| success | Link copied to clipboard |
| error | Search is unavailable. Try again shortly |
| empty | No answers found. Contact support |

---
Source listing key `o:faq-sticky-index`. Rebuild with `python3 scripts/brand-kit/build.py o:faq-sticky-index`.
