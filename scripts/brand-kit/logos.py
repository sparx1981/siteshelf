"""Hand-drawn SVG logo marks (64x64 grid) and font-outline wordmarks for the brand-kit builder."""
import pathlib, hashlib, html as _html
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen

FONTS = pathlib.Path('/tmp/fonts/node_modules/@fontsource')

def _w(g, a, ink):  # helpers return svg fragments using glyph colour g, accent a
    return {
 'orbit': f'<circle cx="32" cy="32" r="8" fill="{g}"/><ellipse cx="32" cy="32" rx="22" ry="9" transform="rotate(-25 32 32)" fill="none" stroke="{g}" stroke-width="3.5"/><circle cx="50" cy="23" r="3.8" fill="{a}"/>',
 'stack': f'<rect x="13" y="16" width="30" height="8" rx="4" fill="{g}"/><rect x="13" y="28" width="38" height="8" rx="4" fill="{a}"/><rect x="13" y="40" width="26" height="8" rx="4" fill="{g}"/>',
 'sprout': f'<path d="M32 52V30" stroke="{g}" stroke-width="4" stroke-linecap="round"/><path d="M32 34C32 24 24 18 13 18C13 29 21 35 32 34Z" fill="{g}"/><path d="M32 28C32 20 38 14 50 14C50 24 43 30 32 28Z" fill="{a}"/>',
 'wave': f'<path d="M10 26q11-12 22 0t22 0" fill="none" stroke="{g}" stroke-width="4.5" stroke-linecap="round"/><path d="M10 40q11-12 22 0t22 0" fill="none" stroke="{a}" stroke-width="4.5" stroke-linecap="round"/>',
 'spark': f'<path d="M32 9C34 24 40 30 55 32C40 34 34 40 32 55C30 40 24 34 9 32C24 30 30 24 32 9Z" fill="{g}"/><circle cx="48" cy="16" r="3.5" fill="{a}"/>',
 'grid': f'<rect x="12" y="12" width="17" height="17" rx="4.5" fill="{g}"/><rect x="35" y="12" width="17" height="17" rx="4.5" fill="{g}"/><rect x="12" y="35" width="17" height="17" rx="4.5" fill="{g}"/><circle cx="43.5" cy="43.5" r="8.5" fill="{a}"/>',
 'chevrons': f'<path d="M16 17L31 32L16 47" fill="none" stroke="{g}" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M33 17L48 32L33 47" fill="none" stroke="{a}" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round"/>',
 'cube': f'<path d="M32 9L51 20L32 31L13 20Z" fill="{g}"/><path d="M13 23L30 33V54L13 43Z" fill="{a}"/><path d="M51 23L34 33V54L51 43Z" fill="{g}" opacity=".7"/>',
 'drop': f'<path d="M32 8C42 22 49 30 49 40A17 17 0 0 1 15 40C15 30 22 22 32 8Z" fill="{g}"/><path d="M24 40a8 8 0 0 0 8 8" fill="none" stroke="{a}" stroke-width="3.5" stroke-linecap="round"/>',
 'pulse': f'<path d="M7 35H20L26 19L35 47L41 31H52" fill="none" stroke="{g}" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="56" cy="31" r="3.5" fill="{a}"/>',
 'peak': f'<path d="M7 50L24 21L34 37L43 26L58 50Z" fill="{g}"/><path d="M24 21L29.5 30.5L24 28L18.5 30.5Z" fill="{a}"/>',
 'shield': f'<path d="M32 8L51 15V32C51 44 43 52 32 56C21 52 13 44 13 32V15Z" fill="{g}"/><path d="M23 32L30 39L42 25" fill="none" stroke="{a}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>',
 'chat': f'<path d="M11 14H53V40H30L19 51V40H11Z" fill="{g}" stroke="{g}" stroke-width="3" stroke-linejoin="round"/><circle cx="24" cy="27" r="3" fill="{a}"/><circle cx="32" cy="27" r="3" fill="{a}"/><circle cx="40" cy="27" r="3" fill="{a}"/>',
 'dial': f'<circle cx="32" cy="34" r="20" fill="none" stroke="{g}" stroke-width="4.5"/><path d="M32 34L43 22" stroke="{a}" stroke-width="4.5" stroke-linecap="round"/><circle cx="32" cy="34" r="3.5" fill="{g}"/>',
 'target': f'<circle cx="32" cy="32" r="21" fill="none" stroke="{g}" stroke-width="4.5"/><circle cx="32" cy="32" r="11" fill="none" stroke="{g}" stroke-width="4.5"/><circle cx="32" cy="32" r="4" fill="{a}"/>',
 'bolt': f'<path d="M37 8L16 36H30L26 56L48 26H34Z" fill="{g}" stroke="{g}" stroke-width="2" stroke-linejoin="round"/><circle cx="49" cy="14" r="3.5" fill="{a}"/>',
 'book': f'<path d="M9 17C19 13 28 15 32 22C36 15 45 13 55 17V49C45 45 36 47 32 54C28 47 19 45 9 49Z" fill="{g}"/><path d="M32 22V54" stroke="{a}" stroke-width="3.5"/>',
 'coins': f'<circle cx="25" cy="38" r="14" fill="{g}"/><circle cx="39" cy="26" r="14" fill="{a}" stroke="{ink}" stroke-width="2.5"/>',
 'aperture': f'<circle cx="32" cy="32" r="21" fill="none" stroke="{g}" stroke-width="4.5"/><path d="M32 32L32 11M32 32L50 42.5M32 32L14 42.5" stroke="{g}" stroke-width="4.5" stroke-linecap="round"/><circle cx="32" cy="32" r="5" fill="{a}"/>',
 'rocket': f'<path d="M32 7C43 17 45 31 40 45H24C19 31 21 17 32 7Z" fill="{g}"/><circle cx="32" cy="26" r="5" fill="{a}"/><path d="M24 40L15 50L25 47M40 40L49 50L39 47" fill="{a}" stroke="{a}" stroke-width="2" stroke-linejoin="round"/><path d="M28 52Q32 60 36 52" stroke="{a}" stroke-width="3.5" fill="none" stroke-linecap="round"/>',
 'cloud': f'<path d="M20 46H45A11 11 0 0 0 45 24A15 15 0 0 0 17 28A9 9 0 0 0 20 46Z" fill="{g}"/><circle cx="46" cy="44" r="5" fill="{a}"/>',
 'globe': f'<circle cx="32" cy="32" r="21" fill="none" stroke="{g}" stroke-width="4"/><ellipse cx="32" cy="32" rx="9" ry="21" fill="none" stroke="{g}" stroke-width="3.5"/><path d="M11 32H53" stroke="{a}" stroke-width="3.5"/>',
 'plane': f'<path d="M8 30L56 10L42 54L31 38Z" fill="{g}" stroke="{g}" stroke-width="2" stroke-linejoin="round"/><path d="M31 38L56 10" stroke="{a}" stroke-width="3.5" stroke-linecap="round"/>',
 'home': f'<path d="M8 33L32 11L56 33H50V54H14V33Z" fill="{g}"/><rect x="27" y="38" width="10" height="16" rx="3" fill="{a}"/>',
 'bag': f'<path d="M15 22H49L53 55H11Z" fill="{g}"/><path d="M24 22V19A8 8 0 0 1 40 19V22" fill="none" stroke="{a}" stroke-width="4.5" stroke-linecap="round"/>',
 'chip': f'<rect x="19" y="19" width="26" height="26" rx="5" fill="{g}"/><rect x="27" y="27" width="10" height="10" rx="2" fill="{a}"/><path d="M26 10V19M38 10V19M26 45V54M38 45V54M10 26H19M10 38H19M45 26H54M45 38H54" stroke="{g}" stroke-width="3.5" stroke-linecap="round"/>',
 'play': f'<path d="M22 14L52 32L22 50Z" fill="{g}" stroke="{g}" stroke-width="4" stroke-linejoin="round"/><circle cx="14" cy="46" r="3.5" fill="{a}"/>',
 'flame': f'<path d="M32 8C35 20 47 25 47 39A15 15 0 0 1 17 39C17 31 23 28 25 20C28 26 31 22 32 8Z" fill="{g}"/><path d="M32 54A7 7 0 0 1 25 47C25 42 30 40 32 35C34 40 39 42 39 47A7 7 0 0 1 32 54Z" fill="{a}"/>',
 'compass': f'<circle cx="32" cy="32" r="22" fill="none" stroke="{g}" stroke-width="4"/><path d="M32 14L39 32L32 50L25 32Z" fill="{g}"/><path d="M32 14L39 32H25Z" fill="{a}"/>',
 'diamond': f'<path d="M32 8L54 28L32 56L10 28Z" fill="{g}"/><path d="M10 28H54M32 8L24 28L32 56L40 28Z" fill="none" stroke="{a}" stroke-width="2.5" stroke-linejoin="round"/>',
 'bars': f'<rect x="12" y="34" width="9" height="18" rx="3" fill="{g}"/><rect x="27" y="22" width="9" height="30" rx="3" fill="{g}"/><rect x="42" y="12" width="9" height="40" rx="3" fill="{a}"/>',
    }

MOTIFS = [
 'orbit','stack','sprout','wave','spark','grid','chevrons','cube','drop','pulse','peak','shield','chat','dial','target','bolt','book','coins','aperture','rocket','cloud','globe','plane','home','bag','chip','play','flame','compass','diamond','bars','monogram']

def hash_pick(key, items):
    return items[int(hashlib.sha1(key.encode()).hexdigest()[:8], 16) % len(items)]

def font_file(family, weight):
    slug = family.strip().lower().replace(' ', '-')
    d = FONTS / slug / 'files'
    if not d.is_dir():
        return None
    import re
    have = sorted({int(m.group(1)) for p in d.glob(f'{slug}-latin-*-normal.woff2') for m in [re.search(r'-latin-(\d+)-normal\.woff2$', p.name)] if m})
    if not have:
        return None
    w = min(have, key=lambda x: abs(x - weight))
    return d / f'{slug}-latin-{w}-normal.woff2', w

_cache = {}
def load(family, weight):
    r = font_file(family, weight)
    if not r:
        return None
    path, w = r
    if path not in _cache:
        _cache[path] = TTFont(str(path))
    return _cache[path], w

def text_path(font, text, size, letter=0.0):
    """Return (svg path d, width, ascent, descent) for text outlined at size px."""
    upm = font['head'].unitsPerEm
    gs = font.getGlyphSet(); cmap = font.getBestCmap(); hmtx = font['hmtx']
    s = size / upm; x = 0.0; ds = []
    for ch in text:
        gn = cmap.get(ord(ch))
        if gn is None:
            gn = cmap.get(ord('?'), '.notdef')
        pen = SVGPathPen(gs)
        tp = TransformPen(pen, (s, 0, 0, -s, x, 0))
        gs[gn].draw(tp)
        d = pen.getCommands()
        if d: ds.append(d)
        x += hmtx[gn][0] * s + letter * size
    os2 = font['OS/2']
    asc = getattr(os2, 'sCapHeight', 0) * s or size * 0.7
    return ' '.join(ds), x - letter * size, asc

def apply_case(name, mode):
    return {'upper': name.upper(), 'lower': name.lower(), 'title': name.title()}.get(mode, name)

def mark_svg(key, motif, monogram, colors, font=None, tile=None, size=64):
    g_on_tile, acc, tile_fill, ink = colors['onPrimary'], colors['accentOnTile'], colors['primary'], colors['text']
    t = tile or hash_pick(key, ['squircle', 'circle', 'squircle', 'none'])
    if motif == 'monogram' or motif not in MOTIFS[:-1]:
        motif = motif if motif in MOTIFS else hash_pick(key, MOTIFS)
    if t == 'none':
        g, a, bgfill = colors['primary'], colors['secondary'], ''
    else:
        g, a = g_on_tile, acc
        bgfill = f'<rect width="64" height="64" rx="{32 if t == "circle" else 16}" fill="{tile_fill}"/>'
    if motif == 'monogram':
        inner = ''
        if font:
            d, w, cap = text_path(font[0], (monogram or 'A')[0], 40)
            inner = f'<path transform="translate({(64 - w) / 2:.2f} {32 + cap / 2:.2f})" d="{d}" fill="{g}"/>'
    else:
        inner = _w(g, a, tile_fill if t != 'none' else colors['background'])[motif]
    return f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="{size}" height="{size}" role="img" aria-label="logo mark">{bgfill}{inner}</svg>', motif, t

def inner_mark(key, motif, monogram, colors, font, tile):
    svg, m, t = mark_svg(key, motif, monogram, colors, font, tile)
    return svg[svg.index('>') + 1:svg.rindex('</svg>')], m, t

def wordmark_svg(name, font, color, bg=None, size=40, letter=0.0, pad=14):
    d, w, cap = text_path(font[0], name, size, letter)
    W, H = w + 2 * pad, size * 1.1 + 2 * pad
    plate = f'<rect width="{W:.1f}" height="{H:.1f}" rx="12" fill="{bg}"/>' if bg else ''
    return f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W:.1f} {H:.1f}" width="{W:.0f}" height="{H:.0f}" role="img" aria-label="{_html.escape(name)}">{plate}<path transform="translate({pad} {pad + size * 0.78:.2f})" d="{d}" fill="{color}"/></svg>', w

def mono_inner(key, motif, monogram, font, tile, uid):
    """One-colour mark: a currentColor tile with the glyph cut out through a mask (so it works on any background)."""
    t = tile
    if motif == 'monogram':
        glyph = ''
        if font:
            d, w, cap = text_path(font[0], (monogram or 'A')[0], 40)
            glyph = f'<path transform="translate({(64 - w) / 2:.2f} {32 + cap / 2:.2f})" d="{d}" fill="#000"/>'
    else:
        glyph = _w('#000', '#000', '#000')[motif]
    if t == 'none':
        return glyph.replace('#000', 'currentColor')
    r = 32 if t == 'circle' else 16
    return f'<defs><mask id="{uid}"><rect width="64" height="64" fill="#fff"/>{glyph}</mask></defs><rect width="64" height="64" rx="{r}" fill="currentColor" mask="url(#{uid})"/>'

def lockup_svg(key, name, motif, monogram, colors, font, text_color, tile, bg=None, letter=0.0, mono=False, pad=14):
    size = 40
    d, w, cap = text_path(font[0], name, size, letter)
    if mono:
        inner, ink, bg = mono_inner(key, motif, monogram, font, tile, 'k' + hashlib.sha1(key.encode()).hexdigest()[:6]), 'currentColor', None
    else:
        inner, m, t = inner_mark(key, motif, monogram, colors, font, tile); ink = text_color
    p = 0 if mono else pad
    W, H = 64 + 18 + w + 2 * p + 4, 64 + 2 * p
    plate = f'<rect width="{W:.1f}" height="{H:.1f}" rx="14" fill="{bg}"/>' if bg else ''
    return f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W:.1f} {H:.1f}" width="{W:.0f}" height="{H:.0f}" role="img" aria-label="{_html.escape(name)}">{plate}<g transform="translate({p} {p})">{inner}</g><path transform="translate({p + 82} {p + 32 + cap / 2:.2f})" d="{d}" fill="{ink}"/></svg>'
