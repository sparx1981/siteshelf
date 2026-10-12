# Nimbus Mail — brand kit

*Private email service with a helpful FAQ bot.* Generated from the SiteShelf listing **Chat-Style FAQ Assistant** (FAQ); every value below is read from that page, not invented.

> **Email that answers back**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Nunito |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **chat** glyph on a squircle tile. A chat bubble reflects the assistant at the centre of the page. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F1EEFB` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#4328C9` | Body and heading text |
| textMuted | `#1B1535` | Secondary text, captions |
| primary | `#5B3DF5` | Main actions, links, brand colour |
| secondary | `#2D1B69` | Highlights, charts, second accent |
| border | `#CFC6F5` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#2D1B69` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 7.70:1 | pass | pass |
| Muted text on background | 15.24:1 | pass | pass |
| Primary on background | 5.35:1 | pass | pass |
| Text on primary | 6.12:1 | pass | pass |
| Text on surface | 8.80:1 | pass | pass |

**Colours seen on the page** (share of use): `#F1EEFB` 71.9%, `#FFFFFF` 25.5%, `#2D1B69` 2.2%, `#5B3DF5` 0.2%, `#4328C9` 0.1%, `#1B1535` 0.1%, `#FFB86B` 0.0%, `#FF6B9A` 0.0%, `#4ADE80` 0.0%, `#CFC6F5` 0.0%

## Typography

- Headings: **Nunito** (weight 700)
- Body: **Nunito**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;800&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Button | Nunito | 13 px | 700 | normal | normal |
| Caption / eyebrow | Nunito | 12.5 px | 400 | 18.75px | normal |

## Shape, space and motion

- Radius: sm 18 px, md 24 px, lg 24 px, pill (fully rounded)
- Shadows: sm: `rgba(45, 27, 105, 0.19) 0px 24px 60px 0px` · md: `rgba(45, 27, 105, 0.19) 0px 24px 60px 0px` · lg: `rgba(45, 27, 105, 0.19) 0px 24px 60px 0px`
- Spacing: base unit 2 px; common steps 6 px, 8 px, 10 px, 12 px, 14 px, 18 px, 22 px, 24 px
- Layout: container 1200 px; breakpoints 600 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** friendly, plainspoken, patient.

Nimbus Mail speaks through Pip, a cheerful guide who answers in short, kind sentences and admits when a person would help better. It explains storage, security and imports without jargon.

**Do**

- Answer in two sentences, then offer a follow-up chip
- Use 'your mail' and 'your storage' in plain terms
- Offer a human when the question is unclear

**Do not**

- Do not use technical shorthand like IMAP unprompted
- Avoid fake human claims; Pip is a bot
- Never dodge a pricing question

## Taglines

1. Email that answers back
2. Mail without the small print
3. Ask Pip anything about your inbox
4. Simple mail, quietly private
5. Questions answered before you ask twice

**Boilerplate:** Nimbus Mail is a private email service for individuals and small teams, with generous storage, easy imports and a friendly assistant named Pip for quick answers.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Ask Pip |
| secondaryCta | Talk to a human |
| success | Glad that helped. |
| error | Pip lost the thread. Try rephrasing, or ask a person. |
| empty | Pip has no answer for that yet. |

---
Source listing key `o:faq-chat-assistant`. Rebuild with `python3 scripts/brand-kit/build.py o:faq-chat-assistant`.
