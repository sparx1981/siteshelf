# Weavegate — brand kit

*Access control console for teams.* Generated from the SiteShelf listing **Permission Weave** (Components); every value below is read from that page, not invented.

> **Access, made explicit**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Space Grotesk |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **grid** glyph. A woven grid reflects the matrix of roles and permissions. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F4F3F8` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#625D72` | Body and heading text |
| textMuted | `#161922` | Secondary text, captions |
| primary | `#3E2775` | Main actions, links, brand colour |
| secondary | `#9588B3` | Highlights, charts, second accent |
| border | `#D8D3E4` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#9588B3` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 5.72:1 | pass | pass |
| Muted text on background | 15.90:1 | pass | pass |
| Primary on background | 10.86:1 | pass | pass |
| Text on primary | 11.99:1 | pass | pass |
| Text on surface | 6.31:1 | pass | pass |

**Colours seen on the page** (share of use): `#F4F3F8` 92.9%, `#E5DEF1` 5.9%, `#161922` 0.5%, `#625D72` 0.3%, `#60449A` 0.3%, `#3E2775` 0.1%, `#9588B3` 0.0%

## Typography

- Headings: **Space Grotesk** (weight 600)
- Body: **DM Sans**
- Google Fonts: `https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Space Grotesk | 38 px | 600 | 41.8px | -1.14px |
| Body | DM Sans | 14 px | 400 | 21px | normal |
| Button | DM Sans | 14 px | 700 | 21px | normal |
| Caption / eyebrow | DM Sans | 10 px | 400 | 15px | normal |

## Shape, space and motion

- Radius: sm 6 px, md 8 px, lg 8 px
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 3 px, 6 px, 8 px, 12 px, 14 px, 16 px, 20 px, 22 px, 24 px
- Layout: container 1260 px; breakpoints 560 px, 760 px, 850 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** explicit, methodical, calm.

Weavegate writes the way a careful administrator would want it: explicit, ordered and complete. It never hides inherited rules behind a friendly word, and it says what changed.

**Do**

- Say whether a permission is inherited or an exception
- Name the role and the resource in each sentence
- Confirm what was saved and what was discarded

**Do not**

- Do not use vague words like some access
- Avoid scare language about security
- Never imply a change is saved before it is

## Taglines

1. Access, made explicit
2. Every role, every right, in view
3. See inherited rules, change exceptions
4. Policy without the guesswork
5. Clear access, clean audits

**Boilerplate:** Weavegate is an access console that shows what every role can do across workspaces, separating inherited access from editable exceptions with explicit review before saving.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Save policy |
| secondaryCta | Discard changes |
| success | Policy saved. |
| error | Could not save the policy. Your edits are still here. |
| empty | No pending changes. |

---
Source listing key `o:permission-weave`. Rebuild with `python3 scripts/brand-kit/build.py o:permission-weave`.
