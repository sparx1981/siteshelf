# Linden Physiotherapy — brand kit

*Physio clinic with online booking.* Generated from the SiteShelf listing **Appointment Slot Picker** (Form); every value below is read from that page, not invented.

> **Book your physio, then breathe**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Sora |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **pulse** glyph on a squircle tile. A pulse line signals movement and care without leaning on a medical cross. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#EEF4F4` | Page background |
| surface | `#FFFFFF` | Cards, panels, raised areas |
| text | `#10292B` | Body and heading text |
| textMuted | `#4F6B6D` | Secondary text, captions |
| primary | `#0F8B8D` | Main actions, links, brand colour |
| secondary | `#7BBFC0` | Highlights, charts, second accent |
| border | `#BCD2D2` | Dividers and outlines |
| onPrimary | `#0B0B0F` | Text and icons placed on primary |
| accentOnTile | `#0D4144` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 13.74:1 | pass | pass |
| Muted text on background | 5.16:1 | pass | pass |
| Primary on background | 3.70:1 | fail | pass |
| Text on primary | 4.77:1 | pass | pass |
| Text on surface | 15.28:1 | pass | pass |

**Colours seen on the page** (share of use): `#EEF4F4` 68.7%, `#FFFFFF` 30.4%, `#0F8B8D` 0.5%, `#10292B` 0.3%, `#4F6B6D` 0.2%, `#8AA0A1` 0.0%, `#D8F3F3` 0.0%, `#7BBFC0` 0.0%, `#BCD2D2` 0.0%, `#0B0B0F` 0.0%

## Typography

- Headings: **Sora** (weight 700)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Sora:wght@600;700&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Sora | 52 px | 700 | 56.16px | -1.04px |
| Heading / H2 | Sora | 18 px | 700 | normal | normal |
| Subheading / H3 | Inter | 12 px | 600 | normal | 1.44px |
| Body | Inter | 16 px | 400 | 24.8px | normal |
| Button | Arial | 16 px | 400 | normal | normal |
| Caption / eyebrow | Inter | 12 px | 600 | 18.6px | 0.72px |

## Shape, space and motion

- Radius: sm 12 px, md 16 px, lg 22 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 4 px; common steps 2 px, 4 px, 6 px, 8 px, 10 px, 12 px, 14 px, 16 px, 24 px
- Layout: container 1120 px; breakpoints 900 px
- Motion: 150 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** caring, precise, reassuring.

Linden Physiotherapy sounds like a calm clinician: clear about the time, the length and the person you will see. It uses short, kind sentences and never makes someone feel rushed.

**Do**

- State the day, time, length and clinician in full
- Explain the five-minute hold in plain words
- Acknowledge discomfort without clinical jargon

**Do not**

- Do not use medical terms the patient has not used
- Avoid pressure about slots running out
- Never promise outcomes of treatment

## Taglines

1. Book your physio, then breathe
2. Moving better starts with a booking
3. Care that keeps its appointments
4. Pick a day. We will hold it
5. Clear times, kind hands

**Boilerplate:** Linden Physiotherapy is a clinic offering initial assessments and follow-up treatment with an online booking form that holds a chosen slot for five minutes.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Confirm appointment |
| secondaryCta | Choose a different time |
| success | Booked. We will see you then. |
| error | That slot was released. Please pick another. |
| empty | No slots on this day. |

---
Source listing key `o:form-appointment-slots`. Rebuild with `python3 scripts/brand-kit/build.py o:form-appointment-slots`.
