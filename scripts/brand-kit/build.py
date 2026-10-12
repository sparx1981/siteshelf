#!/usr/bin/env python3
"""Step 3 of the brand-kit pipeline: turn facts (extract.py) + voice (written per listing) into a kit folder.

  python3 scripts/brand-kit/build.py [--facts /tmp/brand/facts] [--voice /tmp/brand/voice] [key ...]

Writes, for every listing, <listing dir>/brand/ containing:
  brand.md            the readable kit (overview, colours with contrast, type, tokens, voice, taglines, logo usage)
  brand.json          everything below in one machine-readable file
  tokens.json         design tokens   |  tokens.css  the same as CSS custom properties
  palette.svg         swatch sheet with roles and hex values
  logo-mark.svg       the hand-drawn mark          logo-wordmark.svg  name outlined from the page's heading font
  logo-lockup.svg     mark + wordmark              logo-lockup-mono.svg  single-colour lockup (uses currentColor)
  voice.json          the tone-of-voice source (kept so the kit can be rebuilt)
"""
import json, math, pathlib, re, sys, argparse, colorsys, hashlib, html as _html
sys.path.insert(0, str(pathlib.Path(__file__).parent))
import logos
from extract import listings

def rgb(h): h = h.lstrip('#'); return tuple(int(h[i:i + 2], 16) for i in (0, 2, 4))
def hx(t): return '#%02x%02x%02x' % tuple(max(0, min(255, round(v))) for v in t)
def lin(c): c /= 255; return c / 12.92 if c <= .04045 else ((c + .055) / 1.055) ** 2.4
def lum(h): r, g, b = rgb(h); return .2126 * lin(r) + .7152 * lin(g) + .0722 * lin(b)
def contrast(a, b): la, lb = lum(a), lum(b); hi, lo = max(la, lb), min(la, lb); return (hi + .05) / (lo + .05)
def hsl(h): r, g, b = [v / 255 for v in rgb(h)]; hh, l, s = colorsys.rgb_to_hls(r, g, b); return hh * 360, s, l
def dist(a, b): return math.dist(rgb(a), rgb(b))
def mix(a, b, t): return hx([rgb(a)[i] * (1 - t) + rgb(b)[i] * t for i in range(3)])
def best_on(bg): return '#ffffff' if contrast('#ffffff', bg) >= contrast('#0b0b0f', bg) else '#0b0b0f'
def fix_contrast(fg, bg, target):
    if contrast(fg, bg) >= target: return fg
    toward = '#000000' if lum(bg) > .5 else '#ffffff'
    for i in range(1, 21):
        c = mix(fg, toward, i / 20)
        if contrast(c, bg) >= target: return c
    return toward

def roles(f):
    bgs = [(c, w) for c, w in f['bg']]
    grads = [(c, w) for c, w in f['grad']]
    pool_bg = sorted(bgs + [(c, w * .6) for c, w in grads], key=lambda x: -x[1]) or [('#ffffff', 1)]
    bg = pool_bg[0][0]
    # the page may be a dark canvas hero with transparent body: trust the real body/html colour if opaque
    if not f['bg']:
        for k in ('bodyBg', 'htmlBg'):
            m = re.match(r'rgb\((\d+), (\d+), (\d+)\)', f.get(k) or '')
            if m: bg = hx(tuple(map(int, m.groups()))); break
    surface = next((c for c, w in pool_bg[1:] if dist(c, bg) > 14 and c != bg), mix(bg, '#ffffff' if lum(bg) < .5 else '#000000', .06))
    texts = [(c, w) for c, w in f['tx'] if c != bg]
    readable = [(c, w) for c, w in texts if contrast(c, bg) >= 4.5]
    text = readable[0][0] if readable else (texts[0][0] if texts else best_on(bg))
    if contrast(text, bg) < 4.5: text = fix_contrast(text, bg, 4.5)
    texts = readable or texts
    muted = next((c for c, w in texts[1:] if dist(c, text) > 20 and contrast(c, bg) >= 3), None) or mix(text, bg, .35)
    # accent candidates
    cand = {}
    for src, mult in ((f['cta'], 4), (f['fills'], 1.2), (f['grad'], .8), (f['tx'], 1.5), (f['bg'], .5)):
        for c, w in src:
            h, s, l = hsl(c)
            if s < .28 or l < .12 or l > .88: continue
            if dist(c, bg) < 30: continue
            cand[c] = cand.get(c, 0) + math.log(w + 2) * mult * (.5 + s)
    ranked = sorted(cand.items(), key=lambda x: -x[1])
    primary = ranked[0][0] if ranked else (text if contrast(text, bg) > 3 else '#4a35d6')
    ph = hsl(primary)[0]
    secondary = next((c for c, _ in ranked[1:] if min(abs(hsl(c)[0] - ph), 360 - abs(hsl(c)[0] - ph)) >= 35 or abs(hsl(c)[2] - hsl(primary)[2]) > .25), None)
    if not secondary:
        secondary = mix(primary, '#ffffff' if lum(primary) < .5 else '#000000', .45)
    border = next((c for c, w in f['bd'] if c != bg), None) or mix(bg, text, .14)
    on_primary = best_on(primary)
    accent_on_tile = secondary if contrast(secondary, primary) >= 2.2 else mix(on_primary, primary, .42)
    return {'background': bg, 'surface': surface, 'text': text, 'textMuted': muted, 'primary': primary, 'secondary': secondary, 'border': border, 'onPrimary': on_primary, 'accentOnTile': accent_on_tile}

def inventory(f, r):
    tot = {}
    for src in (f['bg'], f['tx'], f['fills'], f['grad'], f['cta']):
        for c, w in src: tot[c] = tot.get(c, 0) + w
    for c in r.values(): tot.setdefault(c, 1)
    out = []
    for c, w in sorted(tot.items(), key=lambda x: -x[1]):
        if all(dist(c, o['hex']) > 22 for o in out): out.append({'hex': c, 'weight': w})
        if len(out) >= 10: break
    s = sum(o['weight'] for o in out) or 1
    for o in out: o['share'] = round(o['weight'] / s * 100, 1); del o['weight']
    return out

def stack(fam, kind):
    f = (fam or '').split(',')[0].replace('"', '').replace("'", '').strip()
    gen = {'serif': 'Georgia, serif', 'mono': 'ui-monospace, Menlo, monospace'}.get(kind, 'system-ui, sans-serif')
    return f, f"'{f}', {gen}" if f and f.lower() not in ('serif', 'sans-serif', 'monospace', 'system-ui', 'ui-monospace', '-apple-system') else gen

SERIFS = {'fraunces', 'lora', 'playfair display', 'newsreader', 'spectral', 'instrument serif', 'young serif', 'dm serif display', 'gloock', 'cormorant garamond', 'georgia', 'times new roman'}
def kindof(name): return 'serif' if name.lower() in SERIFS else ('mono' if 'mono' in name.lower() or name.lower() in ('inconsolata', 'vt323', 'courier new') else 'sans')

def typography(f):
    t = f['type']
    def row(name, e, extra=None):
        if not e: return None
        fam, st = stack(e['family'], kindof(e['family'].split(',')[0].replace('"', '').strip()))
        return {'role': name, 'family': fam, 'stack': st, 'sizePx': round(e['size'], 1), 'weight': e['weight'], 'lineHeight': e['line'] if e['line'] != 'normal' else 'normal', 'letterSpacing': e['ls'], 'textTransform': e['tt']}
    scale = [x for x in (row('Display / H1', t['h1']), row('Heading / H2', t['h2']), row('Subheading / H3', t['h3']), row('Body', t['body']), row('Button', t['button']), row('Navigation', t['nav']), row('Caption / eyebrow', t['small']), row('Mono', t['mono'])) if x]
    fams = [n for n, w in f['fam'] if n.lower() not in ('serif', 'sans-serif', 'monospace', 'system-ui', 'ui-monospace')]
    heading = (scale[0]['family'] if scale else (fams[0] if fams else 'Inter'))
    body = next((x['family'] for x in scale if x['role'] == 'Body'), fams[0] if fams else 'Inter')
    mono = next((x['family'] for x in scale if x['role'] == 'Mono'), None)
    gf = next((u for u in f['gf'] if '/css' in u), '')
    return {'heading': heading, 'body': body, 'mono': mono, 'scale': scale, 'googleFonts': gf, 'headingWeight': int(float(scale[0]['weight'])) if scale else 700}

def tokens(f, r, ty):
    rad = sorted({int(k) for k, w in f['rad'] if int(k) != 9999 and int(k) <= 80})
    top = [int(k) for k, w in f['rad'] if int(k) != 9999 and int(k) <= 80][:4]
    rs = sorted(set(top))
    radius = {}
    if rs:
        radius['sm'] = rs[0]; radius['md'] = rs[len(rs) // 2]; radius['lg'] = rs[-1]
    else:
        radius = {'sm': 0, 'md': 0, 'lg': 0}
    radius['pill'] = 9999 if any(int(k) == 9999 for k, w in f['rad']) else None
    def blur(s): m = re.findall(r'(-?\d+(?:\.\d+)?)px', s); return float(m[2]) if len(m) >= 3 else 0
    shadows = sorted([s for s, w in f['shd']][:3], key=blur)
    shadow = {}
    for name, s in zip(('sm', 'md', 'lg'), (shadows if len(shadows) == 3 else (shadows * 3)[:3] if shadows else [])): shadow[name] = s
    gaps = [int(k) for k, w in f['gaps'] if int(k) >= 2]
    steps = sorted(set(gaps[:10]))
    base = 4 if sum(1 for v in steps if v % 4 == 0) >= len(steps) / 2 else (2 if sum(1 for v in steps if v % 2 == 0) >= len(steps) / 2 else 1)
    maxw = [int(k) for k, w in f['maxw'] if 900 <= int(k) <= 1700]
    bps = sorted({int(re.search(r'(\d+)', x).group(1)) for x in f['mq']})
    return {'radius': radius, 'shadow': shadow, 'spacing': {'base': base, 'steps': steps[:9]}, 'container': (max(maxw) if maxw else 1200), 'breakpoints': bps[:6], 'motion': {'duration': (int(f['dur'][0][0]) if f['dur'] else 200), 'easing': (f['ease'][0][0] if f['ease'] else 'ease')}}

def palette_svg(name, r, inv):
    rows = [('Background', 'background'), ('Surface', 'surface'), ('Text', 'text'), ('Text muted', 'textMuted'), ('Primary', 'primary'), ('Secondary', 'secondary'), ('Border', 'border'), ('On primary', 'onPrimary')]
    w, h = 960, 150 + 78 * ((len(rows) + 3) // 4)
    o = [f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" width="{w}" height="{h}" role="img" aria-label="{_html.escape(name)} palette"><rect width="{w}" height="{h}" fill="#ffffff"/><text x="32" y="44" font-family="system-ui,sans-serif" font-size="22" font-weight="700" fill="#111">{_html.escape(name)} · palette</text>']
    for i, (lab, k) in enumerate(rows):
        x = 32 + (i % 4) * 226; y = 70 + (i // 4) * 120
        o.append(f'<rect x="{x}" y="{y}" width="206" height="62" rx="10" fill="{r[k]}" stroke="#00000022"/><text x="{x}" y="{y + 82}" font-family="system-ui,sans-serif" font-size="13" font-weight="600" fill="#111">{lab}</text><text x="{x + 206}" y="{y + 82}" text-anchor="end" font-family="ui-monospace,Menlo,monospace" font-size="13" fill="#444">{r[k].upper()}</text>')
    y = 70 + 120 * ((len(rows) + 3) // 4)
    o.append(f'<text x="32" y="{y + 6}" font-family="system-ui,sans-serif" font-size="12" font-weight="600" fill="#555">Colours seen on the page, by share of use</text>')
    x = 32
    for c in inv[:10]:
        wd = max(30, 896 * c['share'] / 100)
        o.append(f'<rect x="{x:.1f}" y="{y + 16}" width="{wd:.1f}" height="22" fill="{c["hex"]}"/>'); x += wd
    o.append('</svg>'); return ''.join(o)

def css_tokens(name, r, ty, tk):
    L = [f'/* {name} brand tokens (generated from the preview page) */', ':root {']
    for k, v in r.items(): L.append(f'  --color-{re.sub(r"([A-Z])", lambda m: "-" + m.group(1).lower(), k)}: {v};')
    L.append(f'  --font-heading: {next((s["stack"] for s in ty["scale"] if s["family"] == ty["heading"]), ty["heading"])};')
    L.append(f'  --font-body: {next((s["stack"] for s in ty["scale"] if s["family"] == ty["body"]), ty["body"])};')
    if ty['mono']: L.append(f'  --font-mono: {next(s["stack"] for s in ty["scale"] if s["family"] == ty["mono"])};')
    for k, v in tk['radius'].items():
        if v is not None: L.append(f'  --radius-{k}: {v}px;')
    for k, v in tk['shadow'].items(): L.append(f'  --shadow-{k}: {v};')
    L.append(f'  --space-unit: {tk["spacing"]["base"]}px;')
    for i, v in enumerate(tk['spacing']['steps'], 1): L.append(f'  --space-{i}: {v}px;')
    L.append(f'  --container: {tk["container"]}px;'); L.append(f'  --duration: {tk["motion"]["duration"]}ms;'); L.append(f'  --easing: {tk["motion"]["easing"]};'); L.append('}')
    return '\n'.join(L) + '\n'

def md(item, v, r, inv, ty, tk, logo):
    n = v['brandName']
    pairs = [('Text on background', r['text'], r['background']), ('Muted text on background', r['textMuted'], r['background']), ('Primary on background', r['primary'], r['background']), ('Text on primary', r['onPrimary'], r['primary']), ('Text on surface', r['text'], r['surface'])]
    L = [f'# {n} — brand kit', '', f'*{v["descriptor"]}.* Generated from the SiteShelf listing **{item["title"]}** ({item["category"]}); every value below is read from that page, not invented.', '', f'> **{v["taglines"][0]}**', '', '## Logo', '', '| File | Use |', '|---|---|', '| `logo-lockup.svg` | Default logo: mark plus name |', '| `logo-mark.svg` | App icon, avatar, favicon source (square) |', '| `logo-wordmark.svg` | Name only, outlined from ' + logo['wordmarkFont'] + ' |', '| `logo-lockup-mono.svg` | One-colour version for any background: set the CSS `color`; the mark is cut out of the tile |', '', f'The mark is a hand-drawn **{logo["motif"]}** glyph' + (f' on a {logo["tile"]} tile' if logo['tile'] != 'none' else '') + f'. {v["logo"]["note"]} Keep clear space equal to half the mark height on every side and do not render the mark smaller than 24 px.', '', '## Colour', '', '| Role | Hex | Use |', '|---|---|---|']
    use = {'background': 'Page background', 'surface': 'Cards, panels, raised areas', 'text': 'Body and heading text', 'textMuted': 'Secondary text, captions', 'primary': 'Main actions, links, brand colour', 'secondary': 'Highlights, charts, second accent', 'border': 'Dividers and outlines', 'onPrimary': 'Text and icons placed on primary', 'accentOnTile': 'Detail colour inside the logo tile'}
    for k, h in r.items(): L.append(f'| {k} | `{h.upper()}` | {use[k]} |')
    L += ['', '**Contrast checks**', '', '| Pair | Ratio | AA text (4.5) | AA large (3) |', '|---|---|---|---|']
    for lab, a, b in pairs:
        c = contrast(a, b); L.append(f'| {lab} | {c:.2f}:1 | {"pass" if c >= 4.5 else "fail"} | {"pass" if c >= 3 else "fail"} |')
    L += ['', '**Colours seen on the page** (share of use): ' + ', '.join(f'`{o["hex"].upper()}` {o["share"]}%' for o in inv), '', '## Typography', '', f'- Headings: **{ty["heading"]}**' + f' (weight {ty["headingWeight"]})', f'- Body: **{ty["body"]}**' + (f'\n- Mono: **{ty["mono"]}**' if ty['mono'] else '')]
    if ty['googleFonts']: L.append(f'- Google Fonts: `{ty["googleFonts"]}`')
    L += ['', '| Role | Family | Size | Weight | Line height | Tracking |', '|---|---|---|---|---|---|']
    for s in ty['scale']: L.append(f'| {s["role"]} | {s["family"]} | {s["sizePx"]} px | {s["weight"]} | {s["lineHeight"]} | {s["letterSpacing"]} |')
    rd = tk['radius']; L += ['', '## Shape, space and motion', '', f'- Radius: ' + ', '.join(f'{k} {v} px' for k, v in rd.items() if v is not None and k != 'pill') + (', pill (fully rounded)' if rd.get('pill') else ''), '- Shadows: ' + (' · '.join(f'{k}: `{v}`' for k, v in tk['shadow'].items()) if tk['shadow'] else 'none used (flat)'), f'- Spacing: base unit {tk["spacing"]["base"]} px; common steps ' + ', '.join(f'{x} px' for x in tk['spacing']['steps']), f'- Layout: container {tk["container"]} px; breakpoints ' + (', '.join(f'{b} px' for b in tk['breakpoints']) or 'single fluid layout'), f'- Motion: {tk["motion"]["duration"]} ms, `{tk["motion"]["easing"]}`; always respect `prefers-reduced-motion`']
    L += ['', '## Voice and tone', '', f'**Personality:** {", ".join(v["personality"])}.', '', v['voice']['summary'], '', '**Do**', ''] + [f'- {x}' for x in v['voice']['dos']] + ['', '**Do not**', ''] + [f'- {x}' for x in v['voice']['donts']]
    L += ['', '## Taglines', ''] + [f'{i}. {t}' for i, t in enumerate(v['taglines'], 1)] + ['', f'**Boilerplate:** {v["boilerplate"]}', '', '## Microcopy', '', '| Moment | Copy |', '|---|---|'] + [f'| {k} | {t} |' for k, t in v['microcopy'].items()]
    L += ['', '---', f'Source listing key `{item["key"]}`. Rebuild with `python3 scripts/brand-kit/build.py {item["key"]}`.', '']
    return '\n'.join(L)

REQ = ['brandName', 'descriptor', 'personality', 'voice', 'taglines', 'boilerplate', 'microcopy', 'logo']
def build_one(item, f, v):
    r = roles(f); inv = inventory(f, r); ty = typography(f); tk = tokens(f, r, ty)
    wt = ty['headingWeight']
    font = logos.load(ty['heading'], wt) or logos.load(ty['body'], wt) or logos.load('Inter', max(600, wt))
    name = logos.apply_case(v['brandName'], v['logo'].get('wordmarkCase', 'as-is'))
    motif = v['logo'].get('motif', 'monogram'); mono = v['logo'].get('monogram') or v['brandName'][:1].upper()
    mark, motif, tile = logos.mark_svg(item['key'], motif, mono, r, font)
    ink = r['text'] if contrast(r['text'], r['background']) >= 7 else (r['text'] if contrast(r['text'], r['background']) >= 4.5 and contrast(best_on(r['background']), r['background']) < 9 else best_on(r['background']))
    word, _ = logos.wordmark_svg(name, font, ink, r['background'])
    lock = logos.lockup_svg(item['key'], name, motif, mono, r, font, ink, tile, bg=r['background'])
    lockm = logos.lockup_svg(item['key'], name, motif, mono, r, font, r['text'], tile, mono=True)
    kit = pathlib.Path(item['dir']) / 'brand'; kit.mkdir(parents=True, exist_ok=True)
    wf = logos.load(ty['heading'], wt) is not None
    logo = {'motif': motif, 'tile': tile, 'wordmarkFont': ty['heading'] if wf else ('Inter Bold (stand-in for ' + ty['heading'] + ')')}
    # wordmark colour: use text colour, but on dark pages the text colour is light, so ship dark-on-light-safe version in lockup-mono instead
    (kit / 'logo-mark.svg').write_text(mark); (kit / 'logo-wordmark.svg').write_text(word); (kit / 'logo-lockup.svg').write_text(lock); (kit / 'logo-lockup-mono.svg').write_text(lockm)
    (kit / 'palette.svg').write_text(palette_svg(v['brandName'], r, inv))
    (kit / 'tokens.css').write_text(css_tokens(v['brandName'], r, ty, tk))
    data = {'name': v['brandName'], 'descriptor': v['descriptor'], 'listing': {'key': item['key'], 'title': item['title'], 'category': item['category']}, 'colors': r, 'colorInventory': inv, 'typography': ty, 'tokens': tk, 'logo': logo, 'voice': {k: v[k] for k in ('personality', 'voice', 'taglines', 'boilerplate', 'microcopy')}}
    (kit / 'tokens.json').write_text(json.dumps({'color': r, 'font': {'heading': ty['heading'], 'body': ty['body'], 'mono': ty['mono']}, **tk}, indent=2))
    (kit / 'brand.json').write_text(json.dumps(data, indent=2, ensure_ascii=False))
    (kit / 'voice.json').write_text(json.dumps(v, indent=2, ensure_ascii=False))
    (kit / 'brand.md').write_text(md(item, v, r, inv, ty, tk, logo))
    return motif

if __name__ == '__main__':
    ap = argparse.ArgumentParser(); ap.add_argument('--facts', default='/tmp/brand/facts'); ap.add_argument('--voice', default='/tmp/brand/voice'); ap.add_argument('keys', nargs='*'); a = ap.parse_args()
    items = {l['key']: l for l in listings()}; done = 0; bad = []
    for key, item in items.items():
        if a.keys and key not in a.keys: continue
        sk = key.replace(':', '__')
        fp, vp = pathlib.Path(a.facts) / (sk + '.json'), pathlib.Path(a.voice) / (sk + '.json')
        if not fp.exists() or not vp.exists(): bad.append((key, 'missing facts/voice')); continue
        try:
            build_one(item, json.loads(fp.read_text()), json.loads(vp.read_text())); done += 1
        except Exception as e:
            bad.append((key, repr(e)[:160]))
    print(f'built {done} kits, {len(bad)} problems')
    for b in bad[:30]: print(b)
