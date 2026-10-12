# Jotter — brand kit

*Quick notes app with fast actions.* Generated from the SiteShelf listing **Floating Action Button Speed Dial** (Buttons); every value below is read from that page, not invented.

> **Jot it down, move on**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Outfit |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **spark** glyph. A spark suggests an idea captured in an instant. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#EEF0F6` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#4B5563` | Body and heading text |
| textMuted | `#151826` | Secondary text, captions |
| primary | `#6C4BF4` | Main actions, links, brand colour |
| secondary | `#F59E0B` | Highlights, charts, second accent |
| border | `#D7DAE1` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#F59E0B` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 6.63:1 | pass | pass |
| Muted text on background | 15.48:1 | pass | pass |
| Primary on background | 4.67:1 | pass | pass |
| Text on primary | 5.32:1 | pass | pass |
| Text on surface | 7.56:1 | pass | pass |

**Colours seen on the page** (share of use): `#EEF0F6` 71.7%, `#FFFFFF` 17.6%, `#FEF3C7` 4.8%, `#CCFBF1` 4.8%, `#6C4BF4` 0.4%, `#4B5563` 0.3%, `#151826` 0.2%, `#F59E0B` 0.0%, `#F43F8E` 0.0%, `#3B82F6` 0.0%

## Typography

- Headings: **Outfit** (weight 700)
- Body: **Outfit**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Outfit | 26 px | 700 | normal | normal |
| Button | Outfit | 14 px | 600 | normal | normal |

## Shape, space and motion

- Radius: sm 10 px, md 16 px, lg 20 px, pill (fully rounded)
- Shadows: sm: `rgba(0, 0, 0, 0.06) 0px 1px 3px 0px` · md: `rgba(0, 0, 0, 0.18) 0px 4px 12px 0px` · lg: `rgba(0, 0, 0, 0.25) 0px 6px 14px 0px`
- Spacing: base unit 2 px; common steps 2 px, 4 px, 6 px, 10 px, 12 px, 14 px, 16 px, 18 px, 20 px
- Layout: container 1200 px; breakpoints 460 px
- Motion: 300 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** quick, light, friendly.

Sounds like a pen that is always at hand: very short phrases, active verbs, no ceremony. Actions are labelled like a note's first word.

**Do**

- Start every action with a verb
- Keep labels to two words
- Show state in the label, not a paragraph

**Do not**

- No long onboarding text
- No guilt about unfinished notes
- No emoji in action labels

## Taglines

1. Jot it down, move on
2. Notes at the speed of thought
3. One tap, one thought
4. Capture first, tidy later
5. Your notes, always within reach

**Boilerplate:** Jotter is a notes app built for speed, with a floating action button that fans out into new note, checklist, voice and photo in a single motion.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | New note |
| secondaryCta | Open speed dial |
| success | Note saved |
| error | Could not save that note, try again |
| empty | No notes yet, tap the plus to start |

---
Source listing key `o:fab-speed-dial`. Rebuild with `python3 scripts/brand-kit/build.py o:fab-speed-dial`.
