# Fieldnote — brand kit

*Markdown editor for short, honest writing.* Generated from the SiteShelf listing **Markdown Editor** (App UI); every value below is read from that page, not invented.

> **Field notes on writing small**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **book** glyph on a squircle tile. An open book suits an editor devoted to notes, drafts and tidy writing. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F3F1EC` | Page background |
| surface | `#FFFEFB` | Cards, panels, raised areas |
| text | `#1F1D1A` | Body and heading text |
| textMuted | `#4A463D` | Secondary text, captions |
| primary | `#0B6E4F` | Main actions, links, brand colour |
| secondary | `#79AF9E` | Highlights, charts, second accent |
| border | `#DDD8CC` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#79AF9E` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 14.90:1 | pass | pass |
| Muted text on background | 8.33:1 | pass | pass |
| Primary on background | 5.54:1 | pass | pass |
| Text on primary | 6.25:1 | pass | pass |
| Text on surface | 16.67:1 | pass | pass |

**Colours seen on the page** (share of use): `#F3F1EC` 67.8%, `#FFFEFB` 29.0%, `#1E2A25` 2.9%, `#0B6E4F` 0.2%, `#DDD8CC` 0.1%, `#4A463D` 0.0%, `#A8A191` 0.0%, `#7C766A` 0.0%, `#79AF9E` 0.0%

## Typography

- Headings: **Inter** (weight 700)
- Body: **Source Serif 4**
- Mono: **JetBrains Mono**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Source+Serif+4:ital,wght@0,400;0,600;1,400&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Inter | 30 px | 700 | 37.5px | -0.3px |
| Heading / H2 | Inter | 22 px | 700 | 27.5px | -0.22px |
| Body | Source Serif 4 | 17 px | 400 | 28.9px | normal |
| Button | Inter | 13 px | 600 | normal | normal |
| Mono | JetBrains Mono | 14 px | 500 | normal | normal |

## Shape, space and motion

- Radius: sm 5 px, md 7 px, lg 8 px
- Shadows: none used (flat)
- Spacing: base unit 2 px; common steps 3 px, 4 px, 6 px, 7 px, 8 px, 10 px, 11 px, 16 px, 17 px
- Layout: container 1200 px; breakpoints 800 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** plainspoken, focused, tidy.

Fieldnote sounds like a good editor with a pencil: brief, kind and allergic to padding. It talks about writing as small, useful notes and keeps its own instructions equally short.

**Do**

- Use verbs that match the toolbar: bold, link, copy
- Keep tips to one line
- Show shortcuts in the same sentence as the action

**Do not**

- Do not use writing-guru phrases like 'unleash your creativity'
- Avoid long onboarding tours
- Never alter the user's text without saying so

## Taglines

1. Field notes on writing small
2. Write plain. Preview live
3. Short notes, well kept
4. Markdown without the manual
5. Say it in fewer words

**Boilerplate:** Fieldnote is a split-pane Markdown editor with live preview, keyboard shortcuts, word count and one-click HTML export, built for people who write short and often.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Copy HTML |
| secondaryCta | Clear |
| success | Copied as HTML. |
| error | Could not copy. Select the preview and try again. |
| empty | Nothing written yet. Start typing on the left. |

---
Source listing key `o:markdown-editor`. Rebuild with `python3 scripts/brand-kit/build.py o:markdown-editor`.
