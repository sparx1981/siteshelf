# Stowaway — brand kit

*File upload component for web forms.* Generated from the SiteShelf listing **File Uploader** (Form Controls); every value below is read from that page, not invented.

> **Drop it in. We will carry it**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Outfit |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **stack** glyph on a circle tile. A stack of layers suggests files piling into a tray. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F6F7FB` | Page background |
| surface | `#4F46E5` | Cards, panels, raised areas |
| text | `#667096` | Body and heading text |
| textMuted | `#151A30` | Secondary text, captions |
| primary | `#4F46E5` | Main actions, links, brand colour |
| secondary | `#151A30` | Highlights, charts, second accent |
| border | `#E3E6EF` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#151A30` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 4.54:1 | pass | pass |
| Muted text on background | 16.05:1 | pass | pass |
| Primary on background | 5.87:1 | pass | pass |
| Text on primary | 6.29:1 | pass | pass |
| Text on surface | 1.29:1 | fail | fail |

**Colours seen on the page** (share of use): `#F6F7FB` 99.4%, `#4F46E5` 0.4%, `#667096` 0.1%, `#151A30` 0.1%, `#E3E6EF` 0.0%

## Typography

- Headings: **Outfit** (weight 700)
- Body: **Outfit**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Outfit | 26 px | 700 | 31.2px | normal |
| Body | Outfit | 15 px | 400 | 22.5px | normal |
| Button | Outfit | 16 px | 400 | 24px | normal |

## Shape, space and motion

- Radius: sm 10 px, md 16 px, lg 20 px
- Shadows: sm: `rgba(30, 41, 90, 0.3) 0px 24px 60px -24px` · md: `rgba(30, 41, 90, 0.3) 0px 24px 60px -24px` · lg: `rgba(30, 41, 90, 0.3) 0px 24px 60px -24px`
- Spacing: base unit 4 px; common steps 4 px, 6 px, 8 px, 10 px, 16 px, 20 px, 24 px, 28 px, 34 px
- Layout: container 1200 px; breakpoints 520 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** dependable, plain, helpful.

Stowaway sounds like a good form helper: it names the limits first and the mistakes second. Every message states the file, the problem and the fix.

**Do**

- Name the file in every message about it
- Give limits upfront: type, size and count
- Offer retry or cancel beside each error

**Do not**

- Do not say 'invalid file' without a reason
- Avoid technical codes in messages
- Never celebrate a finished upload loudly

## Taglines

1. Drop it in. We will carry it
2. Files in, fuss out
3. Uploads that explain themselves
4. Six files, five megabytes, no stress
5. Every file accounted for

**Boilerplate:** Stowaway is an accessible drag and drop file uploader with clear limits, per-file progress, previews and simple retry for forms that collect documents and images.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Browse files |
| secondaryCta | Cancel upload |
| success | All files uploaded. |
| error | That file is too large. The limit is 5 MB. |
| empty | No files yet. Drag some here. |

---
Source listing key `o:file-uploader`. Rebuild with `python3 scripts/brand-kit/build.py o:file-uploader`.
