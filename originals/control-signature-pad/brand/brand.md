# Inkline — brand kit

*Signing for documents, drawn or typed.* Generated from the SiteShelf listing **Signature Pad** (Form Controls); every value below is read from that page, not invented.

> **Sign once, sign properly**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Newsreader |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **monogram** glyph on a squircle tile. A plain initial reads like a signature flourish, which is the product's whole subject. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#EEF0F4` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#14213D` | Body and heading text |
| textMuted | `#56627A` | Secondary text, captions |
| primary | `#1F4FD1` | Main actions, links, brand colour |
| secondary | `#14213D` | Highlights, charts, second accent |
| border | `#D9DDE6` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#14213D` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 14.00:1 | pass | pass |
| Muted text on background | 5.38:1 | pass | pass |
| Primary on background | 5.94:1 | pass | pass |
| Text on primary | 6.78:1 | pass | pass |
| Text on surface | 15.97:1 | pass | pass |

**Colours seen on the page** (share of use): `#EEF0F4` 70.4%, `#FFFFFF` 27.9%, `#8DA4E6` 1.1%, `#14213D` 0.4%, `#56627A` 0.1%, `#1F4FD1` 0.1%, `#0E7A5A` 0.0%, `#D9DDE6` 0.0%

## Typography

- Headings: **Newsreader** (weight 600)
- Body: **Newsreader**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Caveat:wght@700&family=Inter:wght@400;500;600&family=Kalam:wght@400&family=Newsreader:wght@500;600&family=Shadows+Into+Light&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Newsreader | 38 px | 600 | 41.8px | -0.38px |
| Button | Inter | 14 px | 600 | normal | normal |
| Caption / eyebrow | Inter | 12 px | 600 | normal | 1.68px |

## Shape, space and motion

- Radius: sm 9 px, md 12 px, lg 20 px, pill (fully rounded)
- Shadows: sm: `rgb(255, 255, 255) 0px 0px 0px 2px, rgb(170, 180, 200) 0px 0px 0px 3.5px` · md: `rgba(0, 0, 0, 0.12) 0px 1px 4px 0px` · lg: `rgba(20, 33, 61, 0.5) 0px 24px 50px -34px`
- Spacing: base unit 4 px; common steps 2 px, 4 px, 8 px, 9 px, 10 px, 12 px, 13 px, 14 px, 16 px
- Layout: container 1080 px; breakpoints 900 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** formal, reassuring, exact.

Inkline sounds like a careful notary: courteous, precise and entirely unhurried about consequence. It tells people exactly what signing does before they do it.

**Do**

- Say what a click commits the person to
- Use full sentences for anything legally relevant
- Keep labels formal and short

**Do not**

- Use breezy or jokey language near a signature
- Hide the terms behind vague wording
- Use contractions in required statements

## Taglines

1. Sign once, sign properly
2. Your name, in your hand
3. Agreements, without the paper
4. Draw it or type it
5. Put your name to it

**Boilerplate:** Inkline is a document signing field that lets people draw or type a signature, preview it and accept an agreement only after a clear required check.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Accept and sign |
| secondaryCta | Clear signature |
| success | Signed. A copy has been sent to you. |
| error | Please sign above the line before accepting. |
| empty | No signature yet. Draw or type to begin. |

---
Source listing key `o:control-signature-pad`. Rebuild with `python3 scripts/brand-kit/build.py o:control-signature-pad`.
