# SceneAI — brand kit

*Text-to-3D scene generator.* Generated from the SiteShelf listing **SceneAI** (Create awesome 3D scenes with AI); every value below is read from that page, not invented.

> **Describe a world, watch it render**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **cube** glyph on a squircle tile. A cube stands for 3D scenes and builds into a crisp icon on a dark page. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#000000` | Page background |
| surface | `#3B1D6E` | Cards, panels, raised areas |
| text | `#FFFFFF` | Body and heading text |
| textMuted | `#A6A6A6` | Secondary text, captions |
| primary | `#3B1D6E` | Main actions, links, brand colour |
| secondary | `#FBBF24` | Highlights, charts, second accent |
| border | `#242424` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#FBBF24` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 21.00:1 | pass | pass |
| Muted text on background | 8.63:1 | pass | pass |
| Primary on background | 1.59:1 | fail | fail |
| Text on primary | 13.23:1 | pass | pass |
| Text on surface | 13.23:1 | pass | pass |

**Colours seen on the page** (share of use): `#000000` 88.7%, `#3B1D6E` 10.4%, `#FFFFFF` 0.3%, `#140C00` 0.3%, `#14141A` 0.2%, `#F97316` 0.0%, `#FBBF24` 0.0%, `#A855F7` 0.0%, `#A6A6A6` 0.0%, `#242424` 0.0%

## Typography

- Headings: **Inter** (weight 700)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Inter | 80 px | 700 | 81.6px | -3.2px |
| Body | Inter | 18 px | 400 | 28.8px | normal |
| Button | Arial | 13.3 px | 400 | normal | normal |
| Navigation | Inter | 11 px | 400 | normal | 1.98px |

## Shape, space and motion

- Radius: sm 10 px, md 12 px, lg 12 px, pill (fully rounded)
- Shadows: sm: `rgb(168, 85, 247) 0px 0px 10px 3px` · md: `rgb(168, 85, 247) 0px 0px 10px 3px` · lg: `rgb(168, 85, 247) 0px 0px 10px 3px`
- Spacing: base unit 4 px; common steps 6 px, 7 px, 8 px, 10 px, 14 px, 16 px, 20 px, 32 px, 34 px
- Layout: container 900 px; breakpoints 860 px
- Motion: 300 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** inventive, fast, friendly.

SceneAI speaks like a creative collaborator who makes complicated things simple. It describes worlds in plain words and promises that lighting, camera and materials are handled.

**Do**

- Invite people to describe a scene in plain words
- Say what the system handles for you
- Use vivid but concrete scene words

**Do not**

- Do not use technical rendering jargon
- Avoid claims of perfect realism
- Never promise instant results without limits

## Taglines

1. Describe a world, watch it render
2. Create awesome 3D scenes with AI
3. Lighting and camera, handled
4. From a sentence to a scene
5. Build worlds in plain words

**Boilerplate:** SceneAI is an AI tool that turns plain-language descriptions into 3D scenes, handling lighting, camera and materials so creators can build worlds in seconds.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Start building |
| secondaryCta | Watch Demo |
| success | Scene generated. |
| error | Could not build that scene. Try rewording it. |
| empty | No scenes yet. Describe one to start. |

---
Source listing key `s:69ef9de7f4d5236f91d13060`. Rebuild with `python3 scripts/brand-kit/build.py s:69ef9de7f4d5236f91d13060`.
