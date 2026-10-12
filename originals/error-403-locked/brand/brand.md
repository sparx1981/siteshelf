# Vaultline Docs — brand kit

*Shared workspace for sensitive documents.* Generated from the SiteShelf listing **403 Locked Error Page** (Error Page); every value below is read from that page, not invented.

> **Locked for a reason**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Sora |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **shield** glyph on a squircle tile. A shield is the honest symbol for a product whose job is controlled access. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#151821` | Page background |
| surface | `#1D2130` | Cards, panels, raised areas |
| text | `#98A0B8` | Body and heading text |
| textMuted | `#EEF0F6` | Secondary text, captions |
| primary | `#FFB020` | Main actions, links, brand colour |
| secondary | `#FF5D6C` | Highlights, charts, second accent |
| border | `#343C58` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#715016` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 6.80:1 | pass | pass |
| Muted text on background | 15.56:1 | pass | pass |
| Primary on background | 9.69:1 | pass | pass |
| Text on primary | 10.74:1 | pass | pass |
| Text on surface | 6.14:1 | pass | pass |

**Colours seen on the page** (share of use): `#151821` 97.6%, `#FFB020` 1.9%, `#FF5D6C` 0.2%, `#98A0B8` 0.2%, `#EEF0F6` 0.1%, `#AAB2C8` 0.1%, `#2A1C00` 0.0%, `#343C58` 0.0%, `#0B0B0F` 0.0%, `#715016` 0.0%

## Typography

- Headings: **Sora** (weight 700)
- Body: **Sora**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Sora | 120 px | 700 | 120px | -4.8px |
| Heading / H2 | Sora | 26 px | 700 | 40.3px | normal |
| Body | Sora | 16 px | 400 | 24.8px | normal |
| Button | Arial | 13.3 px | 400 | normal | normal |

## Shape, space and motion

- Radius: sm 12 px, md 18 px, lg 20 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 10 px, 12 px, 16 px, 18 px, 20 px, 22 px, 32 px
- Layout: container 1200 px; breakpoints single fluid layout
- Motion: 500 ms, `cubic-bezier(0.3`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** firm, fair, considerate.

Vaultline Docs says no politely and says why. It names the document and the owner, so a locked door reads like a clear rule rather than a failure.

**Do**

- Name the document and who owns it
- Offer the next step in the same message
- Keep a steady, respectful tone even when refusing

**Do not**

- Blame the user for a permission gap
- Use scary security language
- Joke about being locked out

## Taglines

1. Locked for a reason
2. Ask nicely, we will open up
3. Access, with a paper trail
4. Some doors need a key
5. Private until you are invited

**Boilerplate:** Vaultline Docs is a document workspace where every file has an owner and an access list, so teams can share sensitive material with clear permission requests.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Request access |
| secondaryCta | Go back |
| success | Request sent to Dana Whitlock. |
| error | We could not send your request. Try again. |
| empty | No requests pending. |

---
Source listing key `o:error-403-locked`. Rebuild with `python3 scripts/brand-kit/build.py o:error-403-locked`.
