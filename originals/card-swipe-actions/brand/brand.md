# Postbox — brand kit

*Inbox that clears with a flick.* Generated from the SiteShelf listing **Swipe Action Cards** (Cards); every value below is read from that page, not invented.

> **Clear your inbox with a flick**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Figtree |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **chat** glyph on a squircle tile. A speech bubble stands for messages in a way a mailbox alone cannot on a phone-sized mark. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F7F3EA` | Page background |
| surface | `#FFFDF8` | Cards, panels, raised areas |
| text | `#5A5345` | Body and heading text |
| textMuted | `#1D1A14` | Secondary text, captions |
| primary | `#FFB020` | Main actions, links, brand colour |
| secondary | `#0F8A73` | Highlights, charts, second accent |
| border | `#ECE4D3` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#0F8A73` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 6.88:1 | pass | pass |
| Muted text on background | 15.67:1 | pass | pass |
| Primary on background | 1.65:1 | fail | fail |
| Text on primary | 10.74:1 | pass | pass |
| Text on surface | 7.49:1 | pass | pass |

**Colours seen on the page** (share of use): `#F7F3EA` 63.4%, `#FFFFFF` 29.6%, `#0F8A73` 3.0%, `#FFB020` 2.9%, `#5A5345` 0.5%, `#1D1A14` 0.3%, `#2F7D4F` 0.1%, `#C4492F` 0.1%, `#8C2F5F` 0.1%, `#2457FF` 0.1%

## Typography

- Headings: **Figtree** (weight 800)
- Body: **Figtree**
- Mono: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Figtree:wght@500;600;700;800&family=Inter:wght@400;500&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Figtree | 56 px | 800 | 58.24px | -1.68px |
| Heading / H2 | Figtree | 22 px | 800 | normal | normal |
| Body | Figtree | 18 px | 500 | 27px | normal |
| Button | Figtree | 14 px | 500 | 21px | normal |
| Caption / eyebrow | Figtree | 13 px | 800 | normal | 2.08px |
| Mono | Inter | 12 px | 600 | normal | normal |

## Shape, space and motion

- Radius: sm 6 px, md 18 px, lg 28 px, pill (fully rounded)
- Shadows: sm: `rgba(60, 40, 10, 0.5) 0px 40px 80px -40px` · md: `rgba(60, 40, 10, 0.5) 0px 40px 80px -40px` · lg: `rgba(60, 40, 10, 0.5) 0px 40px 80px -40px`
- Spacing: base unit 2 px; common steps 2 px, 4 px, 6 px, 7 px, 8 px, 10 px, 12 px, 14 px, 18 px
- Layout: container 1040 px; breakpoints 480 px, 960 px
- Motion: 240 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** quick, friendly, low-pressure.

Postbox sounds like a cheerful postie: short, light and happy to take the load off. It rewards a clear inbox without ever making unread mail feel like a debt.

**Do**

- Use one verb per action, such as 'Archive' or 'Snooze'
- Confirm with a tiny line and offer Undo straight away
- Keep a warm, informal tone

**Do not**

- Guilt people about unread counts
- Use email-industry jargon like 'inbox zero'
- Bury the undo option

## Taglines

1. Clear your inbox with a flick
2. Swipe it away, think it later
3. Mail that knows when to wait
4. Done in one swipe
5. Less post, more peace

**Boilerplate:** Postbox is a mail app that lets people archive or snooze messages with a swipe, with keyboard shortcuts and an undo toast for every action.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Archive |
| secondaryCta | Snooze |
| success | Archived. Undo? |
| error | Could not move that message. Try again. |
| empty | All clear. Nothing waiting. |

---
Source listing key `o:card-swipe-actions`. Rebuild with `python3 scripts/brand-kit/build.py o:card-swipe-actions`.
