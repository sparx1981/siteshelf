# Marginalia — brand kit

*AI meeting notes for small teams.* Generated from the SiteShelf listing **Marginalia Meeting Notes** (Landing Page); every value below is read from that page, not invented.

> **Meetings end. The notes shouldn't**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Newsreader |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **book** glyph. A book is a nod to written margins and keeps the mark friendly for a notes product. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#FBF8F2` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#6B6256` | Body and heading text |
| textMuted | `#1F1B16` | Secondary text, captions |
| primary | `#1F6B4F` | Main actions, links, brand colour |
| secondary | `#B3261E` | Highlights, charts, second accent |
| border | `#E8E0D0` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#A1C1B5` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 5.65:1 | pass | pass |
| Muted text on background | 16.15:1 | pass | pass |
| Primary on background | 6.05:1 | pass | pass |
| Text on primary | 6.41:1 | pass | pass |
| Text on surface | 5.99:1 | pass | pass |

**Colours seen on the page** (share of use): `#FBF8F2` 87.2%, `#1F6B4F` 12.3%, `#6B6256` 0.3%, `#1F1B16` 0.2%, `#DFF3EA` 0.0%, `#E8E0D0` 0.0%, `#FFE27A` 0.0%, `#000000` 0.0%, `#B3261E` 0.0%, `#14543D` 0.0%

## Typography

- Headings: **Newsreader** (weight 500)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Newsreader:ital,wght@0,500;1,500&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Newsreader | 76 px | 500 | 79.04px | -1.52px |
| Heading / H2 | Inter | 12 px | 600 | normal | 1.68px |
| Body | Inter | 18 px | 400 | 28.8px | normal |
| Button | Inter | 14 px | 600 | normal | normal |
| Navigation | Inter | 15 px | 500 | 24px | normal |
| Caption / eyebrow | Inter | 12 px | 400 | 19.2px | normal |

## Shape, space and motion

- Radius: sm 3 px, md 18 px, lg 20 px, pill (fully rounded)
- Shadows: sm: `rgba(60, 40, 10, 0.28) 0px 30px 80px -30px` · md: `rgba(60, 40, 10, 0.28) 0px 30px 80px -30px` · lg: `rgba(60, 40, 10, 0.28) 0px 30px 80px -30px`
- Spacing: base unit 4 px; common steps 6 px, 8 px, 10 px, 12 px, 14 px, 16 px, 20 px, 24 px, 26 px
- Layout: container 1100 px; breakpoints 820 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** thoughtful, literate, useful.

Marginalia sounds like a good note-taker at the table: calm, precise and quietly editorial. It talks about decisions and actions, not artificial intelligence.

**Do**

- Name outputs: decision, action item, owner
- Keep promises about notes modest and specific
- Use italic emphasis for the one word that matters

**Do not**

- Do not lean on AI jargon in headlines
- Avoid claims of perfect accuracy
- Never nag people about meetings

## Taglines

1. Meetings end. The notes shouldn't
2. Give your next meeting a memory
3. Every decision, written down
4. Notes that write themselves, kindly
5. Hear every decision, keep every action

**Boilerplate:** Marginalia is an AI meeting-notes tool for small teams that joins calls, writes clean notes live and pulls out every decision and action item before the meeting ends.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Start free, no card |
| secondaryCta | Watch a 2 minute demo |
| success | Notes saved to your workspace. |
| error | Could not join that call. Check the link and try again. |
| empty | No meetings yet. Paste a call link. |

---
Source listing key `o:landing-note-taker`. Rebuild with `python3 scripts/brand-kit/build.py o:landing-note-taker`.
