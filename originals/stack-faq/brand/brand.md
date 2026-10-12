# Plainsight — brand kit

*Project software with straight answers.* Generated from the SiteShelf listing **Stack FAQ Accordion** (FAQ); every value below is read from that page, not invented.

> **Questions, answered**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter Bold (stand-in for Familjen Grotesk) |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **chat** glyph. A speech bubble reflects the question and answer exchange at the page's core. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#101312` | Page background |
| surface | `#1E2120` | Cards, panels, raised areas |
| text | `#C3CDC6` | Body and heading text |
| textMuted | `#E9EFE9` | Secondary text, captions |
| primary | `#B8F36B` | Main actions, links, brand colour |
| secondary | `#65863B` | Highlights, charts, second accent |
| border | `#292D2B` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#65863B` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 11.45:1 | pass | pass |
| Muted text on background | 16.00:1 | pass | pass |
| Primary on background | 14.30:1 | pass | pass |
| Text on primary | 15.03:1 | pass | pass |
| Text on surface | 9.95:1 | pass | pass |

**Colours seen on the page** (share of use): `#101312` 98.7%, `#C3CDC6` 0.7%, `#E9EFE9` 0.4%, `#8D9A92` 0.1%, `#B8F36B` 0.0%, `#1E2120` 0.0%, `#65863B` 0.0%

## Typography

- Headings: **Familjen Grotesk** (weight 600)
- Body: **Geist**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Familjen+Grotesk:wght@500;600;700&family=Geist:wght@400;500&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Familjen Grotesk | 72 px | 600 | 72px | -2.16px |
| Body | Geist | 17 px | 400 | 27.2px | normal |
| Button | Familjen Grotesk | 22 px | 500 | 28.6px | normal |
| Caption / eyebrow | Familjen Grotesk | 13 px | 600 | normal | 1.82px |

## Shape, space and motion

- Radius: sm 12 px, md 12 px, lg 12 px
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 6 px, 14 px, 18 px, 20 px, 24 px, 28 px, 40 px, 44 px, 64 px
- Layout: container 1200 px; breakpoints 900 px
- Motion: 300 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** frank, brisk, modern.

Talks like a founder who answers support emails personally: direct, specific and a bit dry. Answers start with yes or no, and the reasoning follows in a sentence or two.

**Do**

- Start answers with yes or no
- Give a number or a date where possible
- Keep each answer under forty words

**Do not**

- No evasive hedging
- Avoid legal jargon in answers
- Never say it depends without saying on what

## Taglines

1. Questions, answered
2. The short answer, then the reason
3. Straight answers, no runaround
4. Everything you'd ask us, covered
5. Ask once, get a clear reply

**Boilerplate:** Plainsight is project software for small teams, with transparent plans, exportable data and a support team that replies within one working day.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Search questions |
| secondaryCta | Email the team |
| success | Thanks. We'll reply within a working day. |
| error | Search failed. Please try again. |
| empty | No questions match that. Ask us directly. |

---
Source listing key `o:stack-faq`. Rebuild with `python3 scripts/brand-kit/build.py o:stack-faq`.
