# Sayso — brand kit

*Customer story platform for small teams.* Generated from the SiteShelf listing **Voices Testimonial Carousel** (Testimonials); every value below is read from that page, not invented.

> **Customers say it better**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Inter Bold (stand-in for Arial) |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **chat** glyph on a squircle tile. A speech bubble is the clearest sign for quotes and spoken words. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#14201C` | Page background |
| surface | `#3D6B5A` | Cards, panels, raised areas |
| text | `#F1F4EE` | Body and heading text |
| textMuted | `#FFFFFF` | Secondary text, captions |
| primary | `#C9F27A` | Main actions, links, brand colour |
| secondary | `#B5724A` | Highlights, charts, second accent |
| border | `#333E39` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#B5724A` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 15.09:1 | pass | pass |
| Muted text on background | 16.76:1 | pass | pass |
| Primary on background | 13.14:1 | pass | pass |
| Text on primary | 15.40:1 | pass | pass |
| Text on surface | 5.48:1 | pass | pass |

**Colours seen on the page** (share of use): `#14201C` 98.8%, `#F1F4EE` 0.4%, `#3D6B5A` 0.3%, `#B5724A` 0.1%, `#5A62A8` 0.1%, `#A8566F` 0.1%, `#7B8F3D` 0.1%, `#C9F27A` 0.0%, `#FFFFFF` 0.0%, `#333E39` 0.0%

## Typography

- Headings: **Arial** (weight 400)
- Body: **Instrument Serif**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Instrument+Sans:wght@400;500;600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Button | Arial | 18 px | 400 | normal | normal |
| Caption / eyebrow | Instrument Sans | 14 px | 600 | 21px | 0.84px |

## Shape, space and motion

- Radius: sm 0 px, md 0 px, lg 0 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 6 px, 10 px, 12 px, 16 px, 18 px, 20 px, 36 px, 40 px, 96 px
- Layout: container 1100 px; breakpoints 700 px
- Motion: 350 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** human, upbeat, grounded.

Sounds like a thoughtful interviewer: quotes come first, names are real and small details do the persuading. The brand steps back so customers can talk.

**Do**

- Quote customers in their own words
- Name the person and the team
- Keep the quote to a sentence or two

**Do not**

- Do not paraphrase into marketing speak
- Do not invent job titles
- Do not crowd the quote with logos

## Taglines

1. Customers say it better
2. Real voices, right on the page
3. One honest quote at a time
4. Listen first, then decide
5. People talking, plainly

**Boilerplate:** Sayso is a platform that helps small teams collect, curate and show customer stories as simple rotating quotes, with names, faces and the time to read them.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Next voice |
| secondaryCta | Pause |
| success | Quote added to your page. |
| error | That quote couldn't be saved. Try again. |
| empty | No quotes yet. Add your first customer story. |

---
Source listing key `o:voices-testimonials`. Rebuild with `python3 scripts/brand-kit/build.py o:voices-testimonials`.
