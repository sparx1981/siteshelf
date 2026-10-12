# Lumen — brand kit

*AI assistant that reads your docs.* Generated from the SiteShelf listing **Lumen Labs AI Product Hero** (Hero Section); every value below is read from that page, not invented.

> **An assistant that thinks with you**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter Bold (stand-in for Onest) |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **spark** glyph on a squircle tile. A spark stands for the light in the name and signals an assistant without cliches. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#0B0A14` | Page background |
| surface | `#35D0FF` | Cards, panels, raised areas |
| text | `#F2F0FF` | Body and heading text |
| textMuted | `#A1A0AD` | Secondary text, captions |
| primary | `#35D0FF` | Main actions, links, brand colour |
| secondary | `#A99BFF` | Highlights, charts, second accent |
| border | `#A99BFF` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#1D5E74` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 17.50:1 | pass | pass |
| Muted text on background | 7.63:1 | pass | pass |
| Primary on background | 10.88:1 | pass | pass |
| Text on primary | 10.87:1 | pass | pass |
| Text on surface | 1.61:1 | fail | fail |

**Colours seen on the page** (share of use): `#0B0A14` 57.6%, `#35D0FF` 15.9%, `#7C5CFF` 12.6%, `#FF5CA8` 12.0%, `#A99BFF` 0.8%, `#6FE0FF` 0.7%, `#FFFFFF` 0.4%, `#A1A0AD` 0.0%, `#1D5E74` 0.0%

## Typography

- Headings: **Onest** (weight 600)
- Body: **Onest**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Onest:wght@400;500;600;700&family=Geist+Mono:wght@400&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Onest | 86.4 px | 600 | 88.128px | -3.024px |
| Body | Onest | 19 px | 400 | 28.5px | normal |
| Button | Onest | 16 px | 600 | normal | normal |

## Shape, space and motion

- Radius: sm 18 px, md 22 px, lg 50 px, pill (fully rounded)
- Shadows: sm: `rgb(124, 92, 255) 0px 0px 18px 0px` · md: `rgb(124, 92, 255) 0px 0px 18px 0px` · lg: `rgb(124, 92, 255) 0px 0px 18px 0px`
- Spacing: base unit 4 px; common steps 6 px, 8 px, 10 px, 12 px, 16 px, 18 px, 20 px, 21 px, 22 px
- Layout: container 1200 px; breakpoints 700 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** bright, clear, capable.

Lumen speaks plainly and shows its working. It invites people to ask in everyday words and promises a first draft rather than a final answer.

**Do**

- Invite plain requests with a short example
- Say what the assistant read and used
- Keep promises to first drafts, not finished work

**Do not**

- Do not claim to think like a human
- Avoid mystical words like magic
- Never imply perfect accuracy

## Taglines

1. An assistant that thinks with you
2. Ask in plain words
3. First drafts from your own docs
4. See the work behind the answer
5. Less hunting, more doing

**Boilerplate:** Lumen is an AI assistant that reads your documents, writes the first draft and shows its working, helping teams summarise, draft and explain without leaving the page.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Try Lumen free |
| secondaryCta | Talk to sales |
| success | Draft ready. Edit it as you like. |
| error | Lumen could not read that file. Try another format. |
| empty | Nothing asked yet. Try a suggestion. |

---
Source listing key `o:lumen-labs`. Rebuild with `python3 scripts/brand-kit/build.py o:lumen-labs`.
