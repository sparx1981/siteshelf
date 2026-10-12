# Splitly — brand kit

*Restaurant bill and tip splitter.* Generated from the SiteShelf listing **Tip & Bill Splitter** (Widgets); every value below is read from that page, not invented.

> **Split the bill, keep the peace**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from DM Sans |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **coins** glyph on a squircle tile. Coins are the obvious picture of dividing a bill. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#E8F3EE` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#14231C` | Body and heading text |
| textMuted | `#5B7367` | Secondary text, captions |
| primary | `#5EE6A8` | Main actions, links, brand colour |
| secondary | `#0F3D2E` | Highlights, charts, second accent |
| border | `#D4E5DC` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#0F3D2E` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 14.36:1 | pass | pass |
| Muted text on background | 4.52:1 | pass | pass |
| Primary on background | 1.38:1 | fail | fail |
| Text on primary | 12.50:1 | pass | pass |
| Text on surface | 16.32:1 | pass | pass |

**Colours seen on the page** (share of use): `#E8F3EE` 60.2%, `#FFFFFF` 26.7%, `#0F3D2E` 11.7%, `#5EE6A8` 0.7%, `#1C5A45` 0.4%, `#1F9D6B` 0.2%, `#14231C` 0.1%, `#5B7367` 0.0%, `#A9D9C4` 0.0%, `#CFE9DD` 0.0%

## Typography

- Headings: **DM Sans** (weight 700)
- Body: **DM Sans**
- Google Fonts: `https://fonts.googleapis.com/css2?family=DM+Mono:wght@500&family=DM+Sans:wght@500;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Button | DM Sans | 18 px | 700 | normal | normal |
| Caption / eyebrow | DM Sans | 14 px | 500 | 21px | normal |

## Shape, space and motion

- Radius: sm 6 px, md 12 px, lg 14 px
- Shadows: sm: `rgba(15, 61, 46, 0.15) 0px 24px 60px 0px` · md: `rgba(15, 61, 46, 0.15) 0px 24px 60px 0px` · lg: `rgba(15, 61, 46, 0.15) 0px 24px 60px 0px`
- Spacing: base unit 2 px; common steps 2 px, 4 px, 6 px, 8 px, 10 px, 14 px, 16 px, 18 px, 22 px
- Layout: container 1200 px; breakpoints 420 px, 760 px
- Motion: 150 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** friendly, quick, fair.

Splitly sounds like the friend who is good at maths and never makes dinner awkward: quick, fair and plain about the arithmetic. It speaks in amounts per person.

**Do**

- Show the per-person amount first
- Use friendly, light language around money
- Be exact with rounding

**Do not**

- Use accounting jargon
- Make anyone feel stingy
- Hide how the total was reached

## Taglines

1. Split the bill, keep the peace
2. Dinner maths, done
3. Fair shares, no fuss
4. Everyone pays their part
5. Tip, split, off you go

**Boilerplate:** Splitly is a restaurant bill calculator that divides the total, tip and rounding between diners and produces a clear, copyable receipt for the table.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Copy summary |
| secondaryCta | Reset |
| success | Summary copied. Everyone owes £22.50. |
| error | Enter a bill amount to split. |
| empty | No bill yet. Type an amount to start. |

---
Source listing key `o:tip-splitter`. Rebuild with `python3 scripts/brand-kit/build.py o:tip-splitter`.
