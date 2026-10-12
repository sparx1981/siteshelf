# Cortexa — brand kit

*Creative studio answering client questions up front.* Generated from the SiteShelf listing **Frequently asked questions** (Cortexa); every value below is read from that page, not invented.

> **Questions, answered plainly**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **aperture** glyph on a circle tile. An aperture mark points to a studio's lens and open, clear answers. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#FFFFFF` | Page background |
| surface | `#000000` | Cards, panels, raised areas |
| text | `#6B7280` | Body and heading text |
| textMuted | `#000000` | Secondary text, captions |
| primary | `#6B7280` | Main actions, links, brand colour |
| secondary | `#AEB1B9` | Highlights, charts, second accent |
| border | `#EAEBED` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#AEB1B9` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 4.83:1 | pass | pass |
| Muted text on background | 21.00:1 | pass | pass |
| Primary on background | 4.83:1 | pass | pass |
| Text on primary | 4.83:1 | pass | pass |
| Text on surface | 4.34:1 | fail | pass |

**Colours seen on the page** (share of use): `#FFFFFF` 98.3%, `#6B7280` 1.2%, `#000000` 0.5%, `#AEB1B9` 0.0%, `#EAEBED` 0.0%

## Typography

- Headings: **Inter** (weight 500)
- Body: **Inter**

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Inter | 72 px | 500 | 75.6px | -2.16px |
| Body | Inter | 18 px | 400 | 29.7px | normal |
| Button | Inter | 16 px | 400 | normal | normal |

## Shape, space and motion

- Radius: sm 0 px, md 0 px, lg 0 px
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 6 px, 8 px, 16 px, 32 px, 64 px, 96 px, 128 px
- Layout: container 1440 px; breakpoints 768 px, 1024 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** transparent, approachable, professional.

A project manager answering questions before they are asked: patient, direct and approachable. Answers are short and honest, and always name the next step.

**Do**

- Answer the question in the first line
- Explain the process step by step
- Invite contact without pressure

**Do not**

- Jargon-heavy process talk
- Evasive answers
- Overlong paragraphs

## Taglines

1. Questions, answered plainly
2. Starting a project is simple
3. Clear answers before you ask
4. Talk to us, we'll explain
5. Everything you need to know

**Boilerplate:** Cortexa is a creative studio that guides clients from first contact to delivery, with straightforward answers about services, process and getting started.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Contact us |
| secondaryCta | Read more |
| success | Message sent. We'll reply shortly |
| error | We couldn't send that. Please try again |
| empty | No questions match your search |

---
Source listing key `s:6a0be7b0bf2024a645b2914b`. Rebuild with `python3 scripts/brand-kit/build.py s:6a0be7b0bf2024a645b2914b`.
