# Orbital — brand kit

*Aerospace-minded product company hiring in Bristol.* Generated from the SiteShelf listing **Job Application Form** (Form); every value below is read from that page, not invented.

> **Apply to join Orbital**

## Logo

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo: mark plus name |
| `logo-mark.svg` | App icon, avatar, favicon source (square) |
| `logo-wordmark.svg` | Name only, outlined from Epilogue |
| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |

The mark is a hand-drawn **orbit** glyph on a squircle tile. Orbit rings link the Orbital name and Orbital Systems to a design team moving in circles around a user. Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.

## Colour

| Role | Hex | Use |
|---|---|---|
| background | `#F5F7FB` | Page background |
| surface | `#101A30` | Cards, panels, raised areas |
| text | `#101A30` | Body and heading text |
| textMuted | `#52607C` | Secondary text, captions |
| primary | `#2349E8` | Main actions, links, brand colour |
| secondary | `#101A30` | Highlights, charts, second accent |
| border | `#CFD8E8` | Dividers and outlines |
| onPrimary | `#FFFFFF` | Text and icons placed on primary |
| accentOnTile | `#101A30` | Detail colour inside the logo tile |

**Contrast checks**

| Pair | Ratio | AA text (4.5) | AA large (3) |
|---|---|---|---|
| Text on background | 16.15:1 | pass | pass |
| Muted text on background | 5.89:1 | pass | pass |
| Primary on background | 6.14:1 | pass | pass |
| Text on primary | 6.58:1 | pass | pass |
| Text on surface | 1.00:1 | fail | fail |

**Colours seen on the page** (share of use): `#F5F7FB` 92.8%, `#101A30` 6.6%, `#2349E8` 0.4%, `#C8D2F0` 0.1%, `#52607C` 0.1%, `#A8B4D4` 0.0%, `#9DB4FF` 0.0%

## Typography

- Headings: **Epilogue** (weight 800)
- Body: **Inter**
- Google Fonts: `https://fonts.googleapis.com/css2?family=Epilogue:wght@600;700;800&family=Inter:wght@400;500;600&display=swap`

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Epilogue | 52 px | 800 | 55.12px | -1.04px |
| Heading / H2 | Epilogue | 22 px | 700 | normal | normal |
| Button | Inter | 15 px | 600 | normal | normal |
| Caption / eyebrow | Inter | 13.3 px | 400 | 20.6667px | normal |

## Shape, space and motion

- Radius: sm 12 px, md 16 px, lg 22 px, pill (fully rounded)
- Shadows: none used (flat)
- Spacing: base unit 2 px; common steps 3 px, 5 px, 6 px, 10 px, 12 px, 13 px, 14 px, 16 px, 18 px
- Layout: container 1120 px; breakpoints 900 px
- Motion: 200 ms, `ease`; always respect `prefers-reduced-motion`

## Voice and tone

**Personality:** welcoming, exact, energetic.

A hiring manager who respects your time: friendly, specific and never gushing. It explains what happens next and treats a draft saved as a small act of care.

**Do**

- Tell applicants what happens next and when
- Describe the role and the hybrid setup plainly
- Use warm confirmations with a reference number

**Do not**

- Rocket-ship startup cliches
- Vague deadlines
- Blaming the applicant for form errors

## Taglines

1. Apply to join Orbital
2. Help us design what comes next
3. Bristol-based, hybrid, human
4. Bring your craft, we bring the problems
5. Good design, steady orbit

**Boilerplate:** Orbital Systems is a Bristol-based product company hiring a Senior Product Designer in a hybrid role, with a short application that saves drafts automatically.

## Microcopy

| Moment | Copy |
|---|---|
| primaryCta | Submit application |
| secondaryCta | Save and finish later |
| success | Application sent. Your reference is OB-2041 |
| error | Something is missing. Check the highlighted field |
| empty | No file yet. Drop your CV here |

---
Source listing key `o:form-job-application`. Rebuild with `python3 scripts/brand-kit/build.py o:form-job-application`.
