# Summit 2026 — brand kit

*Three-day conference agenda for attendees.* Generated from the SiteShelf listing **Conference Schedule** (Timeline); every value below is read from that page, not invented.

> **Plan your three days**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Space Grotesk |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **peak** glyph on a circle tile. A summit peak is the literal name and an easy mark for a conference. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#0F1220` | Page background |
| surface | `#171B2E` | Cards, panels, raised areas |
| text | `#8E94B8` | Body and heading text |
| textMuted | `#EEF0FB` | Secondary text, captions |
| primary | `#222845` | Main actions, links, brand colour |
| secondary | `#FFC933` | Highlights, charts, second accent |
| border | `#2F3556` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#FFC933` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 6.28:1 | pass | pass |
| Muted text on background | 16.40:1 | pass | pass |
| Primary on background | 1.29:1 | fail | fail |
| Text on primary | 14.41:1 | pass | pass |
| Text on surface | 5.74:1 | pass | pass |

**Colours seen on the page** (share of use): `#0F1220` 85.4%, `#222845` 13.8%, `#EEF0FB` 0.4%, `#8E94B8` 0.3%, `#FF4D6D` 0.1%, `#B6BBD8` 0.0%, `#19D3A2` 0.0%, `#FFC933` 0.0%, `#7C5CFF` 0.0%, `#FF7A59` 0.0%

## Typography

- Headings: **Space Grotesk** (weight 700)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=Inter:wght@400;500;600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Space Grotesk | 40 px | 700 | 42px | -1.2px |
| Body | Inter | 15 px | 400 | 21.75px | normal |
| Button | Inter | 14 px | 600 | normal | normal |
| Caption / eyebrow | Inter | 12.5 px | 400 | 18.125px | normal |

## Shape, space and motion

- Radius: sm 8 px, md 12 px, lg 18 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 2 px; common steps 2 px, 3 px, 6 px, 7 px, 8 px, 10 px, 12 px, 14 px, 16 px
- Layout: container 1180 px; breakpoints 900 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** energetic, organised, welcoming.

Summit 2026 sounds like a well-briefed event host: upbeat, punctual and keen to help attendees plan a full day. Times, rooms and speakers come first, atmosphere second.

**Do**

- Lead each session with time and room
- Use track names consistently
- Keep hosts' voice warm but efficient

**Do not**

- Use hype words like 'epic' or 'game-changing'
- Bury times in paragraphs
- Overpromise on session content

## Taglines

1. Plan your three days
2. Three days, four tracks, one plan
3. Every session, on the clock
4. Build your own agenda
5. Be in the right room

**Boilerplate:** Summit 2026 is a three-day conference at the Riverside Convention Centre, with parallel tracks across product, engineering, design and business and a personal agenda for every attendee.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | My agenda |
| secondaryCta | Add to agenda |
| success | Saved to your agenda. |
| error | Could not save that session. Try again. |
| empty | Your agenda is empty. Star a session to add it. |

---
Source listing key `o:event-schedule`. Rebuild with `python3 scripts/brand-kit/build.py o:event-schedule`.
