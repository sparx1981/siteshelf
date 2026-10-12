# Namesake — brand kit

*Profile builder for tags and skills.* Generated from the SiteShelf listing **Tag Input with Suggestions** (Form Controls); every value below is read from that page, not invented.

> **Tell us what you are good at**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter Bold (stand-in for Onest) |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **monogram** glyph. The name is the idea, so a bold initial works better than an icon. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F4F2EE` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#221F1A` | Body and heading text |
| textMuted | `#5B21B6` | Secondary text, captions |
| primary | `#5B21B6` | Main actions, links, brand colour |
| secondary | `#166534` | Highlights, charts, second accent |
| border | `#D9D4C8` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#BAA2E0` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 14.69:1 | pass | pass |
| Muted text on background | 8.03:1 | pass | pass |
| Primary on background | 8.03:1 | pass | pass |
| Text on primary | 8.98:1 | pass | pass |
| Text on surface | 16.42:1 | pass | pass |

**Colours seen on the page** (share of use): `#F4F2EE` 85.7%, `#FFFFFF` 14.0%, `#DCFCE7` 0.2%, `#221F1A` 0.1%, `#5B21B6` 0.0%, `#166534` 0.0%, `#7A7468` 0.0%, `#D9D4C8` 0.0%, `#BAA2E0` 0.0%

## Typography

- Headings: **Onest** (weight 700)
- Body: **Onest**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Onest:wght@400;600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Onest | 22 px | 700 | 33px | normal |
| Button | Onest | 16 px | 600 | 22px | normal |
| Caption / eyebrow | Onest | 11.7 px | 400 | 17.5px | normal |

## Shape, space and motion

- Radius: sm 12 px, md 18 px, lg 18 px, pill (fully rounded)
- Shadows: sm: `rgba(34, 31, 26, 0.1) 0px 10px 36px 0px` · md: `rgba(34, 31, 26, 0.1) 0px 10px 36px 0px` · lg: `rgba(34, 31, 26, 0.1) 0px 10px 36px 0px`
- Spacing: base unit 2 px; common steps 4 px, 6 px, 8 px, 11 px, 16 px, 22 px, 24 px, 26 px, 30 px
- Layout: container 1200 px; breakpoints 520 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** helpful, neat, modest.

Namesake guides people through a form like a considerate receptionist. It confirms what you typed, tells you the limit before you hit it and is never cross about a duplicate.

**Do**

- Tell people the limit before they reach it
- Confirm each tag in a few words
- Offer a fix with every error

**Do not**

- Do not scold for duplicates
- Do not use technical words like 'validation'
- Do not hide what a field is for

## Taglines

1. Tell us what you are good at
2. Skills, in your own words
3. Your profile, one tag at a time
4. Add it, press Enter, move on
5. Be found for the things you do

**Boilerplate:** Namesake helps people build a clear profile by adding skills and contact details as simple tags, with suggestions as they type.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Save profile |
| secondaryCta | Clear all |
| success | Added. You can add 3 more skills. |
| error | That email address needs an @ sign. Please check it. |
| empty | No skills yet. Start typing to see suggestions. |

---
Source listing key `o:controls-tag-input`. Rebuild with `python3 scripts/brand-kit/build.py o:controls-tag-input`.
