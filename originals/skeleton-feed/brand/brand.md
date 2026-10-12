# Pulse — brand kit

*Social feed for short posts and replies.* Generated from the SiteShelf listing **Skeleton Feed** (Loaders); every value below is read from that page, not invented.

> **Say it short, say it now**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Figtree |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **chat** glyph on a squircle tile. A speech bubble is a natural mark for a feed of short conversations. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F5F6F8` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#111827` | Body and heading text |
| textMuted | `#616670` | Secondary text, captions |
| primary | `#06B6D4` | Main actions, links, brand colour |
| secondary | `#EC4899` | Highlights, charts, second accent |
| border | `#E5E7EB` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#095362` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 16.41:1 | pass | pass |
| Muted text on background | 5.33:1 | pass | pass |
| Primary on background | 2.25:1 | fail | fail |
| Text on primary | 8.09:1 | pass | pass |
| Text on surface | 17.74:1 | pass | pass |

**Colours seen on the page** (share of use): `#F5F6F8` 94.9%, `#06B6D4` 2.3%, `#10B981` 2.3%, `#111827` 0.3%, `#6B7280` 0.1%, `#EC4899` 0.1%, `#F97316` 0.0%, `#3B82F6` 0.0%, `#8B5CF6` 0.0%, `#616670` 0.0%

## Typography

- Headings: **Figtree** (weight 400)
- Body: **Figtree**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Body | Figtree | 16 px | 400 | 24.8px | normal |
| Button | Arial | 13.3 px | 400 | normal | normal |

## Shape, space and motion

- Radius: sm 12 px, md 16 px, lg 16 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 2 px; common steps 3 px, 6 px, 8 px, 10 px, 12 px, 14 px, 16 px, 18 px
- Layout: container 1200 px; breakpoints 640 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** chatty, light, quick.

Sounds like friendly chatter at a bus stop: short, relaxed and a bit funny. It keeps loading and error states human, so waiting feels like a pause in conversation.

**Do**

- Write posts and prompts in short, casual lines
- Keep error states kind and retry-focused
- Use first names and handles naturally

**Do not**

- Do not use engagement-bait phrases
- Do not blame the user for being offline
- Do not use all-caps shouting

## Taglines

1. Say it short, say it now
2. What's everyone talking about?
3. Your friends, one quick scroll
4. Posts worth pausing for
5. Chatter, kept light

**Boilerplate:** Pulse is a social feed for short posts and replies, with shimmering placeholders while content loads, quick likes and a gentle retry whenever the connection drops.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Load more |
| secondaryCta | Retry |
| success | Posted. Your friends can see it. |
| error | You seem to be offline. Tap to retry. |
| empty | No posts yet. Be the first to say something. |

---
Source listing key `o:skeleton-feed`. Rebuild with `python3 scripts/brand-kit/build.py o:skeleton-feed`.
