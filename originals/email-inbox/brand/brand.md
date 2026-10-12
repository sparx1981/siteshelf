# Postwise — brand kit

*Calm email client for focused teams.* Generated from the SiteShelf listing **Email Inbox** (App UI); every value below is read from that page, not invented.

> **Email, at a calmer pace**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from DM Sans |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **plane** glyph. A paper plane is a familiar, light image for sending mail. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F6F7F9` | Page background |
| surface | `#EAF0FF` | Cards, panels, raised areas |
| text | `#667087` | Body and heading text |
| textMuted | `#1C2230` | Secondary text, captions |
| primary | `#2F6BFF` | Main actions, links, brand colour |
| secondary | `#F2B01E` | Highlights, charts, second accent |
| border | `#E3E6EC` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#F2B01E` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 4.63:1 | pass | pass |
| Muted text on background | 14.83:1 | pass | pass |
| Primary on background | 4.20:1 | fail | pass |
| Text on primary | 4.50:1 | fail | pass |
| Text on surface | 4.35:1 | fail | pass |

**Colours seen on the page** (share of use): `#F6F7F9` 96.8%, `#667087` 1.1%, `#1C2230` 0.9%, `#2F6BFF` 0.7%, `#E4EBFF` 0.5%, `#C3C8D4` 0.0%, `#2FB36B` 0.0%, `#E0662F` 0.0%, `#1F4FD1` 0.0%, `#F2B01E` 0.0%

## Typography

- Headings: **DM Sans** (weight 700)
- Body: **DM Sans**
- Google Fonts: `https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Heading / H2 | DM Sans | 22 px | 700 | 28.6px | normal |
| Button | DM Sans | 13.3 px | 700 | normal | normal |
| Caption / eyebrow | DM Sans | 11.7 px | 400 | 16.9167px | normal |

## Shape, space and motion

- Radius: sm 6 px, md 8 px, lg 10 px, pill (fully rounded)
- Shadows: sm: `rgb(47, 107, 255) 3px 0px 0px 0px inset` · md: `rgb(47, 107, 255) 3px 0px 0px 0px inset` · lg: `rgb(47, 107, 255) 3px 0px 0px 0px inset`
- Spacing: base unit 4 px; common steps 2 px, 3 px, 4 px, 6 px, 8 px, 10 px, 12 px, 14 px, 20 px
- Layout: container 1200 px; breakpoints 700 px, 900 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** calm, tidy, dependable.

Sounds like a quiet colleague who sorts your desk: short, polite and unhurried. Messages say what happened, what can be undone and what is next.

**Do**

- Confirm each action with a verb and offer Undo
- Keep labels to one word where possible
- Use plain mail words like inbox, draft and archive

**Do not**

- Do not use urgent red language for ordinary mail
- Do not gamify inbox zero
- Do not use shouting capitals

## Taglines

1. Email, at a calmer pace
2. Read, reply, archive, breathe
3. Mail that stays out of the way
4. Less noise in every thread
5. Mail that respects your morning

**Boilerplate:** Postwise is a three-pane email client with folders, search and keyboard shortcuts that helps teams read, reply and archive messages without the clutter of a typical inbox.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Compose |
| secondaryCta | Archive |
| success | Message archived. Undo? |
| error | Message could not be sent. It is saved in Drafts. |
| empty | Inbox clear. Nothing waiting. |

---
Source listing key `o:email-inbox`. Rebuild with `python3 scripts/brand-kit/build.py o:email-inbox`.
