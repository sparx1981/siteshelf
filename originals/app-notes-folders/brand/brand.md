# Pocketpad — brand kit

*Local-first notes with folders and pins.* Generated from the SiteShelf listing **Notes With Folders** (App UI); every value below is read from that page, not invented.

> **Notes that stay in your pocket**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Figtree |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **book** glyph on a circle tile. An open book signals a notebook without leaning on pencil clichés, and fits a calm paper-and-ink interface. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#E8E4DA` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#6A6454` | Body and heading text |
| textMuted | `#25221B` | Secondary text, captions |
| primary | `#2F6B4F` | Main actions, links, brand colour |
| secondary | `#B4372C` | Highlights, charts, second accent |
| border | `#D8D3C6` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#A8C1B5` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 4.64:1 | pass | pass |
| Muted text on background | 12.50:1 | pass | pass |
| Primary on background | 4.96:1 | pass | pass |
| Text on primary | 6.29:1 | pass | pass |
| Text on surface | 5.89:1 | pass | pass |

**Colours seen on the page** (share of use): `#E8E4DA` 50.6%, `#FFFFFF` 46.9%, `#FFF1C9` 1.4%, `#6A6454` 0.4%, `#2F6B4F` 0.4%, `#25221B` 0.3%, `#8A8472` 0.1%, `#E3A008` 0.0%, `#B4372C` 0.0%, `#FFD666` 0.0%

## Typography

- Headings: **Figtree** (weight 500)
- Body: **Figtree**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Figtree:wght@500;600;700&family=Newsreader:wght@500;600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Body | Figtree | 13.5 px | 500 | 20.25px | normal |
| Button | Figtree | 14 px | 700 | 21px | normal |
| Caption / eyebrow | Figtree | 12 px | 500 | 18px | normal |

## Shape, space and motion

- Radius: sm 4 px, md 10 px, lg 12 px, pill (fully rounded)
- Shadows: sm: `rgba(40, 30, 10, 0.55) 0px 40px 90px -30px` · md: `rgba(40, 30, 10, 0.55) 0px 40px 90px -30px` · lg: `rgba(40, 30, 10, 0.55) 0px 40px 90px -30px`
- Spacing: base unit 2 px; common steps 2 px, 4 px, 6 px, 7 px, 8 px, 10 px, 12 px, 14 px, 18 px
- Layout: container 1200 px; breakpoints 640 px, 900 px
- Motion: 150 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** tidy, quiet, dependable.

Pocketpad talks like a well-kept notebook: short labels, plain verbs and no fuss. It reassures people that their words stay on their own device and that nothing is lost when they tidy up.

**Do**

- Use two or three words for every action label
- Say where things live: this folder, this device
- Confirm destructive actions with an undo, not a warning

**Do not**

- Do not use cloud or sync language; notes are stored locally
- Avoid productivity hype and streak counters
- Never scold an empty note

## Taglines

1. Notes that stay in your pocket
2. A tidy place for loose thoughts
3. Write now, file later
4. Your notes, kept on your device
5. Folders, pins and nothing extra

**Boilerplate:** Pocketpad is a three-pane notes app with folders, pinned notes and a live-saving editor, storing everything locally so writing stays fast and private.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | + New note |
| secondaryCta | + New folder |
| success | Saved. Saved here, on this device. |
| error | Could not save that note. Your text is still on screen. |
| empty | No notes in this folder yet. Start one. |

---
Source listing key `o:app-notes-folders`. Rebuild with `python3 scripts/brand-kit/build.py o:app-notes-folders`.
