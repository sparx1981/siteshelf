# Cargo Drop — brand kit

*File transfer manager for big project folders.* Generated from the SiteShelf listing **File Transfer Progress** (Loaders); every value below is read from that page, not invented.

> **Move big files, calmly**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **cube** glyph on a squircle tile. A cube stands for a parcel, the unit of cargo this tool moves. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#EEF1F6` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#121826` | Body and heading text |
| textMuted | `#5F646F` | Secondary text, captions |
| primary | `#2F6BFF` | Main actions, links, brand colour |
| secondary | `#F59E0B` | Highlights, charts, second accent |
| border | `#F0F2F6` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#A8C1FF` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 15.66:1 | pass | pass |
| Muted text on background | 5.24:1 | pass | pass |
| Primary on background | 3.97:1 | fail | pass |
| Text on primary | 4.50:1 | fail | pass |
| Text on surface | 17.73:1 | pass | pass |

**Colours seen on the page** (share of use): `#EEF1F6` 70.4%, `#FFFFFF` 28.7%, `#667085` 0.2%, `#121826` 0.1%, `#E5484D` 0.1%, `#7C4DFF` 0.1%, `#0EA5E9` 0.1%, `#16A34A` 0.1%, `#F59E0B` 0.1%, `#14B8A6` 0.1%

## Typography

- Headings: **Inter** (weight 700)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Inter | 18 px | 700 | 27px | normal |
| Button | Arial | 17 px | 400 | normal | normal |
| Caption / eyebrow | Inter | 11.7 px | 400 | 17.5px | normal |

## Shape, space and motion

- Radius: sm 10 px, md 12 px, lg 20 px, pill (fully rounded)
- Shadows: sm: `rgba(18, 24, 38, 0.1) 0px 18px 50px 0px` · md: `rgba(18, 24, 38, 0.1) 0px 18px 50px 0px` · lg: `rgba(18, 24, 38, 0.1) 0px 18px 50px 0px`
- Spacing: base unit 4 px; common steps 2 px, 4 px, 6 px, 8 px, 10 px, 12 px, 14 px, 16 px, 20 px
- Layout: container 1200 px; breakpoints 520 px
- Motion: 250 ms, `linear`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** reliable, brisk, matter-of-fact.

Cargo Drop talks like a good logistics manager: it tells you what is moving, how fast and how long is left, and never dramatises a delay. Errors come with a clear retry.

**Do**

- Report size, speed and time left in one line
- Use verbs: pause, resume, retry
- Keep status text under ten words

**Do not**

- Do not use cute loading puns
- Avoid hiding failed items
- Never say 'something went wrong' without naming the file

## Taglines

1. Move big files, calmly
2. Every file accounted for
3. Upload it. Forget it
4. Fast lanes for heavy folders
5. Delivered, down to the byte

**Boilerplate:** Cargo Drop is a file transfer manager that uploads large project folders reliably, showing per-file progress, speed and time remaining with pause, resume and retry.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Pause all |
| secondaryCta | Cancel all |
| success | All 6 files uploaded. |
| error | Upload failed for report.pdf. Retry? |
| empty | No files queued. Drop some here. |

---
Source listing key `o:loader-file-transfer`. Rebuild with `python3 scripts/brand-kit/build.py o:loader-file-transfer`.
