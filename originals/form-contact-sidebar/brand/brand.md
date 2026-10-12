# Harbourside Studio — brand kit

*Independent creative studio in Plymouth.* Generated from the SiteShelf listing **Contact With Office Hours** (Form); every value below is read from that page, not invented.

> **Let's talk about your project**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Instrument Serif |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **wave** glyph on a squircle tile. A rolling wave line recalls the harbour and the studio's coastal home. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F5EFE3` | Page background |
| surface | `#1E3A2F` | Cards, panels, raised areas |
| text | `#14120E` | Body and heading text |
| textMuted | `#5D564A` | Secondary text, captions |
| primary | `#E4472B` | Main actions, links, brand colour |
| secondary | `#1E3A2F` | Highlights, charts, second accent |
| border | `#14120E` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#1E3A2F` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 16.34:1 | pass | pass |
| Muted text on background | 6.33:1 | pass | pass |
| Primary on background | 3.50:1 | fail | pass |
| Text on primary | 4.90:1 | pass | pass |
| Text on surface | 1.52:1 | fail | fail |

**Colours seen on the page** (share of use): `#F5EFE3` 86.6%, `#1E3A2F` 12.2%, `#E4472B` 0.6%, `#14120E` 0.5%, `#FFFFFF` 0.1%, `#CFE0D4` 0.0%, `#5D564A` 0.0%, `#A8C0B2` 0.0%, `#6EE09A` 0.0%

## Typography

- Headings: **Instrument Serif** (weight 400)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Instrument+Serif:ital@0;1&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Instrument Serif | 108 px | 400 | 102.6px | -2.16px |
| Heading / H2 | Instrument Serif | 32 px | 400 | normal | normal |
| Button | Inter | 15 px | 500 | normal | normal |
| Navigation | Inter | 15 px | 500 | 24px | normal |
| Caption / eyebrow | Inter | 11 px | 600 | normal | 1.54px |

## Shape, space and motion

- Radius: sm 16 px, md 26 px, lg 26 px, pill (fully rounded)
- Shadows: sm: `rgba(110, 224, 154, 0) 0px 0px 0px 9.98507px` · md: `rgba(110, 224, 154, 0) 0px 0px 0px 9.98507px` · lg: `rgba(110, 224, 154, 0) 0px 0px 0px 9.98507px`
- Spacing: base unit 2 px; common steps 4 px, 7 px, 8 px, 9 px, 10 px, 16 px, 18 px, 26 px, 30 px
- Layout: container 1240 px; breakpoints 900 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** considered, candid, unfussy.

Sounds like a studio founder replying to a new enquiry themselves: honest about timelines, curious about the project and never salesy. Sentences are plain, a touch literary and lightly lowercase in spirit.

**Do**

- Tell people when they will hear back, in hours
- Ask about the project, not the budget first
- Write like one person to another

**Do not**

- Do not use agency buzzwords like synergy
- Do not promise instant turnarounds
- Do not hide the opening hours

## Taglines

1. Let's talk about your project
2. Good work starts with a conversation
3. Say hello, we'll write back
4. Plymouth studio, open to ideas
5. Tell us what you're making

**Boilerplate:** Harbourside Studio is an independent creative studio in Plymouth that designs brands, websites and print for makers, charities and small companies, and replies to every enquiry personally.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Send message |
| secondaryCta | New project |
| success | Thanks. Your reference is below, we'll reply soon. |
| error | That didn't send. Please try again or email us. |
| empty | No messages yet. Say hello. |

---
Source listing key `o:form-contact-sidebar`. Rebuild with `python3 scripts/brand-kit/build.py o:form-contact-sidebar`.
