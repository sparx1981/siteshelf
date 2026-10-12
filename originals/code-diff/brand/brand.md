# Kestrel Review — brand kit

*Code review for keyboard-first teams.* Generated from the SiteShelf listing **Code Diff Viewer** (Components); every value below is read from that page, not invented.

> **Read the change, not the noise**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **chevrons** glyph on a circle tile. Angle brackets are the universal sign for code and for the left and right sides of a diff. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#0D1117` | Page background |
| surface | `#161B22` | Cards, panels, raised areas |
| text | `#E6EDF3` | Body and heading text |
| textMuted | `#FF7B72` | Secondary text, captions |
| primary | `#FF7B72` | Main actions, links, brand colour |
| secondary | `#79C0FF` | Highlights, charts, second accent |
| border | `#30363D` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#713A39` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 16.02:1 | pass | pass |
| Muted text on background | 7.51:1 | pass | pass |
| Primary on background | 7.51:1 | pass | pass |
| Text on primary | 7.79:1 | pass | pass |
| Text on surface | 14.64:1 | pass | pass |

**Colours seen on the page** (share of use): `#0D1117` 68.7%, `#12261E` 18.4%, `#2D1215` 6.1%, `#1A2840` 3.6%, `#1B4332` 1.8%, `#5A1E24` 0.6%, `#E6EDF3` 0.5%, `#FF7B72` 0.1%, `#1F6FEB` 0.1%, `#8B949E` 0.1%

## Typography

- Headings: **Inter** (weight 600)
- Body: **JetBrains Mono**
- Mono: **monospace**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Inter | 20 px | 600 | normal | normal |
| Heading / H2 | Inter | 12 px | 600 | normal | 0.96px |
| Button | Inter | 13 px | 500 | normal | normal |
| Navigation | JetBrains Mono | 13 px | 500 | normal | normal |
| Caption / eyebrow | Inter | 11.7 px | 400 | 17.5px | normal |
| Mono | monospace | 12.5 px | 400 | 18.75px | normal |

## Shape, space and motion

- Radius: sm 6 px, md 8 px, lg 10 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 3 px, 4 px, 6 px, 8 px, 10 px, 12 px, 14 px, 16 px, 18 px
- Layout: container 1500 px; breakpoints 900 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** precise, terse, developer-fluent.

Kestrel Review sounds like a good reviewer's inline comment: exact, short and focused on the change rather than the person. It uses file names, counts and line numbers as its main vocabulary.

**Do**

- Cite files, line numbers and counts in the interface text
- Use imperative verbs such as 'Expand' and 'Split'
- Phrase feedback about the code, not the author

**Do not**

- Use emoji or exclamation marks in review states
- Write vague labels like 'See more'
- Add marketing language to a code view

## Taglines

1. Read the change, not the noise
2. Review at the speed of focus
3. Every line, held to account
4. Diffs that respect your attention
5. Small changes, sharp reviews

**Boilerplate:** Kestrel Review is a pull request viewer that shows side-by-side and unified diffs, collapsible context and inline comment threads for teams that review code from the keyboard.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Split view |
| secondaryCta | Unified view |
| success | Comment posted on line 42. |
| error | Could not post that comment. Retry. |
| empty | No files changed. |

---
Source listing key `o:code-diff`. Rebuild with `python3 scripts/brand-kit/build.py o:code-diff`.
