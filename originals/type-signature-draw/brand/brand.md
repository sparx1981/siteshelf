# Lantern & Pine Studio — brand kit

*Boutique studio offering letters of engagement.* Generated from the SiteShelf listing **Handwriting Signature** (Typography); every value below is read from that page, not invented.

> **Sign with a little ceremony**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Newsreader |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **flame** glyph. A lantern flame suits the name and gives the signature page a warm, desk-lamp feel. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#3F2814` | Page background |
| surface | `#FBF6EA` | Cards, panels, raised areas |
| text | `#FFFFFF` | Body and heading text |
| textMuted | `#BCB4AD` | Secondary text, captions |
| primary | `#1B2A6B` | Main actions, links, brand colour |
| secondary | `#A8743E` | Highlights, charts, second accent |
| border | `#FFFFFF` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#A8743E` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 13.77:1 | pass | pass |
| Muted text on background | 6.73:1 | pass | pass |
| Primary on background | 1.04:1 | fail | fail |
| Text on primary | 13.21:1 | pass | pass |
| Text on surface | 1.08:1 | fail | fail |

**Colours seen on the page** (share of use): `#3F2814` 63.4%, `#FBF6EA` 24.3%, `#FFFFFF` 2.6%, `#000000` 2.6%, `#2A1608` 2.4%, `#A8743E` 2.3%, `#1B2A6B` 1.5%, `#2A2620` 0.7%, `#111418` 0.1%, `#5A3A1E` 0.1%

## Typography

- Headings: **Newsreader** (weight 600)
- Body: **Newsreader**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Caveat:wght@700&family=Inter:wght@500;600&family=Newsreader:ital,wght@0,400;0,500;0,600;1,400&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Newsreader | 26 px | 600 | 29.9px | normal |
| Body | Newsreader | 14 px | 400 | 22.4px | normal |
| Button | Inter | 15 px | 600 | normal | normal |
| Caption / eyebrow | Inter | 11 px | 500 | normal | 1.1px |

## Shape, space and motion

- Radius: sm 3 px, md 12 px, lg 16 px, pill (fully rounded)
- Shadows: sm: `rgb(205, 187, 152) 0px 0px 0px 1.5px` · md: `rgba(0, 0, 0, 0.25) 0px 2px 3px 0px, rgba(0, 0, 0, 0.45) 0px 26px 50px 0px, rgba(150, 110, 50, 0.12) 0px 0px 60px 0px inset` · lg: `rgba(0, 0, 0, 0.4) 0px 18px 40px 0px`
- Spacing: base unit 2 px; common steps 2 px, 4 px, 6 px, 8 px, 10 px, 12 px, 14 px, 18 px, 20 px
- Layout: container 1180 px; breakpoints 900 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** formal, warm, considered.

Lantern & Pine Studio writes like a studio founder with a good pen: courteous, exact and a touch old-fashioned. It treats a signature as a small ceremony.

**Do**

- Use dates, references and full names in letters
- Write short, courteous sentences
- Describe ink and pen details with care

**Do not**

- Do not use legal boilerplate
- Avoid casual slang
- Never rush the signing

## Taglines

1. Sign with a little ceremony
2. A letter worth putting a name to
3. Ink, paper and your own hand
4. Written slowly, signed beautifully
5. Sealed with a signature

**Boilerplate:** Lantern & Pine Studio is a boutique studio that sends clients a letter of engagement and invites them to sign it on screen with a handwritten, replayable flourish.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Replay |
| secondaryCta | Copy SVG |
| success | Signature copied as SVG. |
| error | Could not copy the signature. Please try again. |
| empty | Type your name to sign. |

---
Source listing key `o:type-signature-draw`. Rebuild with `python3 scripts/brand-kit/build.py o:type-signature-draw`.
