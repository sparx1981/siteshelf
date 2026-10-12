# Parley — brand kit

*Team messenger for quick conversations.* Generated from the SiteShelf listing **Messenger Chat UI** (App UI); every value below is read from that page, not invented.

> **Talk it through, quickly**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter Bold (stand-in for Albert Sans) |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **chat** glyph. A speech bubble is the plain, instantly legible sign of a messenger. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#FFFFFF` | Page background |
| surface | `#F4F1EC` | Cards, panels, raised areas |
| text | `#7B756D` | Body and heading text |
| textMuted | `#231F1B` | Secondary text, captions |
| primary | `#0F766E` | Main actions, links, brand colour |
| secondary | `#7C3AED` | Highlights, charts, second accent |
| border | `#E6E1D9` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#9AC5C2` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 4.56:1 | pass | pass |
| Muted text on background | 16.36:1 | pass | pass |
| Primary on background | 5.47:1 | pass | pass |
| Text on primary | 5.47:1 | pass | pass |
| Text on surface | 4.05:1 | fail | pass |

**Colours seen on the page** (share of use): `#FFFFFF` 51.2%, `#F4F1EC` 45.2%, `#1F2A28` 2.4%, `#0F766E` 0.6%, `#7C3AED` 0.2%, `#7B756D` 0.1%, `#DB2777` 0.1%, `#0284C7` 0.1%, `#EA580C` 0.1%, `#4D7C0F` 0.1%

## Typography

- Headings: **Albert Sans** (weight 700)
- Body: **Albert Sans**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Albert+Sans:wght@400;500;600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Albert Sans | 22 px | 700 | normal | normal |
| Button | Arial | 13.3 px | 400 | normal | normal |

## Shape, space and motion

- Radius: sm 12 px, md 14 px, lg 18 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 2 px; common steps 2 px, 3 px, 6 px, 8 px, 9 px, 10 px, 12 px, 14 px, 16 px
- Layout: container 1200 px; breakpoints 900 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** friendly, quick, informal.

Talks like a good coworker in a hallway: casual, short and warm, with room for an emoji. Replies are brief, and the interface stays out of the way of the conversation.

**Do**

- Keep system messages to a few words
- Use first names and plain language
- Match the friendly tone of a message thread

**Do not**

- No corporate announcements in a chat window
- Avoid long explanatory banners
- Do not over-use exclamation marks

## Taglines

1. Talk it through, quickly
2. Say less, get answers
3. Where the team just talks
4. Conversations that keep up
5. Hello again, pick up where you left off

**Boilerplate:** Parley is a team messenger that keeps conversations, calls and quick reactions in one calm, fast-moving place for small groups.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Send message |
| secondaryCta | Start a call |
| success | Message sent. |
| error | Message not sent. Tap to retry. |
| empty | No messages yet. Say hello. |

---
Source listing key `o:chat-ui`. Rebuild with `python3 scripts/brand-kit/build.py o:chat-ui`.
