#!/usr/bin/env python3
"""Step 1 of the brand-kit pipeline: read what each preview page really uses.

Renders every listing at 1440x900 in headless Chromium (no network except local fonts) and writes one
facts file per listing: colours weighted by how much of the page they cover, fonts, type sizes, radii,
shadows, spacing, motion, breakpoints and the visible copy. Nothing is invented here.

  python3 scripts/brand-kit/extract.py [--out /tmp/brand/facts] [--procs 4] [key ...]
Keys: o:<slug> (originals), m:<id> (motionsites-previews), s:<id> (sceneai-previews)
"""
import json, pathlib, re, sys, argparse, multiprocessing as mp

REPO = pathlib.Path(__file__).resolve().parents[2]

def listings():
    out = []
    for d in sorted((REPO / 'originals').iterdir()):
        if (d / 'preview.html').exists() and (d / 'meta.json').exists():
            m = json.loads((d / 'meta.json').read_text())
            out.append({'key': 'o:' + d.name, 'dir': d, 'html': d / 'preview.html', 'title': m['title'], 'category': m['category'], 'description': m['description'], 'kind': 'original'})
    cats = {}
    tsv = pathlib.Path('/tmp/ms/meta.tsv')
    if tsv.exists():
        for line in tsv.read_text().splitlines():
            i, t, c = line.split('|'); cats[i] = (t, c)
    for f in sorted((REPO / 'motionsites-previews').glob('*.html')):
        t, c = cats.get(f.stem, (f.stem, 'Landing Page'))
        out.append({'key': 'm:' + f.stem, 'dir': REPO / 'motionsites-previews' / 'brand' / f.stem, 'html': f, 'title': t, 'category': c, 'description': '', 'kind': 'motionsites'})
    for f in sorted((REPO / 'sceneai-previews').glob('*.html')):
        m = re.search(r'<title>(.*?)</title>', f.read_text(errors='ignore'), re.S)
        t = (m.group(1).strip() if m else f.stem)
        out.append({'key': 's:' + f.stem, 'dir': REPO / 'sceneai-previews' / 'brand' / f.stem, 'html': f, 'title': t.split(' — ')[0], 'category': (t.split(' — ')[1] if ' — ' in t else 'Landing Page'), 'description': '', 'kind': 'sceneai'})
    return out

JS = r"""
() => {
  const W = 1440, CAP = 3200;
  const parse = (c) => { const m = c && c.match(/rgba?\(([^)]+)\)/); if (!m) return null; const p = m[1].split(/[ ,\/]+/).filter(Boolean).map(Number); return { r: p[0], g: p[1], b: p[2], a: p.length > 3 ? p[3] : 1 }; };
  const hex = (o) => '#' + [o.r, o.g, o.b].map(v => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, '0')).join('');
  const add = (map, k, w) => { map[k] = (map[k] || 0) + w; };
  const bg = {}, tx = {}, bd = {}, fills = {}, cta = {}, grad = {};
  const fam = {}, rad = {}, shd = {}, gaps = {}, dur = {}, ease = {}, maxw = {};
  const vis = (e, cs, r) => cs.display !== 'none' && cs.visibility !== 'hidden' && r.width > 1 && r.height > 1 && +cs.opacity > 0.05;
  const els = [...document.querySelectorAll('body, body *')];
  for (const e of els) {
    if (['SCRIPT', 'STYLE', 'NOSCRIPT', 'CANVAS'].includes(e.tagName)) continue;
    const cs = getComputedStyle(e), r = e.getBoundingClientRect();
    if (!vis(e, cs, r)) continue;
    const w = Math.min(r.width, W), h = Math.min(r.height, CAP), area = w * h;
    const b = parse(cs.backgroundColor);
    if (b && b.a > 0.3) add(bg, hex(b), area * b.a);
    const gi = cs.backgroundImage;
    if (gi && gi !== 'none') { const m = gi.match(/rgba?\([^)]+\)/g) || []; for (const c of m) { const o = parse(c); if (o && o.a > 0.3) add(grad, hex(o), area / Math.max(1, m.length) * 0.5); } }
    let own = 0; for (const n of e.childNodes) if (n.nodeType === 3) own += n.textContent.trim().length;
    const t = parse(cs.color);
    if (own > 0 && t && t.a > 0.3) { add(tx, hex(t), own * parseFloat(cs.fontSize)); const f = cs.fontFamily.split(',')[0].replace(/["']/g, '').trim(); add(fam, f, own); }
    for (const side of ['Top', 'Left']) { const c = parse(cs['border' + side + 'Color']); if (c && c.a > 0.2 && parseFloat(cs['border' + side + 'Width']) > 0 && cs['border' + side + 'Style'] !== 'none') add(bd, hex(c), 1); }
    if (e instanceof SVGElement && !(e instanceof SVGSVGElement)) { for (const p of ['fill', 'stroke']) { const c = parse(cs[p]); if (c && c.a > 0.3) add(fills, hex(c), Math.min(area, 40000) * 0.25); } }
    if (e.matches('button, a, [role=button], input[type=submit]')) { const cb = parse(cs.backgroundColor), ct = parse(cs.color); if (cb && cb.a > 0.5) add(cta, hex(cb), 3); else if (ct && e.tagName === 'A') add(cta, hex(ct), 0.5); }
    const rr = parseFloat(cs.borderTopLeftRadius); if (rr > 0) { const k = (rr >= Math.min(r.width, r.height) / 2 - 1 && r.height < 120) ? 9999 : Math.round(rr); add(rad, k, 1); }
    if (cs.boxShadow && cs.boxShadow !== 'none') add(shd, cs.boxShadow, 1);
    for (const p of ['paddingTop', 'paddingLeft', 'rowGap', 'columnGap', 'marginTop', 'marginBottom']) { const v = parseFloat(cs[p]); if (v > 0 && v <= 160 && cs[p].endsWith('px')) add(gaps, Math.round(v), 1); }
    const td = parseFloat(cs.transitionDuration); if (td > 0) { add(dur, Math.round(td * 1000), 1); add(ease, cs.transitionTimingFunction.split(',')[0].trim(), 1); }
    if (cs.maxWidth && cs.maxWidth.endsWith('px')) { const v = parseFloat(cs.maxWidth); if (v >= 300 && v <= 1900) add(maxw, Math.round(v), 1); }
  }
  const pick = (sel, o) => { for (const e of document.querySelectorAll(sel)) { const cs = getComputedStyle(e), r = e.getBoundingClientRect(); if (!vis(e, cs, r)) continue; if (o && o.minText && e.textContent.trim().length < o.minText) continue; return { tag: e.tagName.toLowerCase(), text: e.textContent.trim().replace(/\s+/g, ' ').slice(0, 90), family: cs.fontFamily, size: parseFloat(cs.fontSize), weight: cs.fontWeight, line: cs.lineHeight, ls: cs.letterSpacing, tt: cs.textTransform, style: cs.fontStyle }; } return null; };
  const type = { h1: pick('h1'), h2: pick('h2'), h3: pick('h3'), body: pick('p', { minText: 40 }), button: pick('button, a[class*=btn], a[class*=button], [role=button]'), nav: pick('nav a, header a'), small: pick('small, figcaption, [class*=caption], [class*=eyebrow], .eb'), mono: pick('code, pre, kbd, [class*=mono]') };
  const texts = (sel, n, max) => { const seen = new Set(), out = []; for (const e of document.querySelectorAll(sel)) { const cs = getComputedStyle(e), r = e.getBoundingClientRect(); if (!vis(e, cs, r)) continue; const t = e.textContent.trim().replace(/\s+/g, ' '); if (t.length < 2 || t.length > max || seen.has(t)) continue; seen.add(t); out.push(t); if (out.length >= n) break; } return out; };
  const brandEl = [...document.querySelectorAll('[class*=logo i], [class*=brand i], [id*=logo i], [id*=brand i], header a, nav a, header strong, header b')].filter(e => { const cs = getComputedStyle(e), r = e.getBoundingClientRect(); const t = e.textContent.trim(); return vis(e, cs, r) && t.length >= 2 && t.length <= 32 && r.top < 400; }).slice(0, 4).map(e => e.textContent.trim().replace(/\s+/g, ' '));
  const mq = new Set();
  for (const s of document.styleSheets) { try { for (const rule of s.cssRules) { if (rule.type === 4) { const m = rule.conditionText.match(/\((min|max)-width:\s*([\d.]+)px\)/g) || []; m.forEach(x => mq.add(x.replace(/[()\s]/g, ''))); } } } catch (x) {} }
  const gf = [...document.querySelectorAll('link[href*="fonts.googleapis.com"]')].map(l => l.href);
  const sorted = (m, n) => Object.entries(m).sort((a, b) => b[1] - a[1]).slice(0, n);
  return { bg: sorted(bg, 14), grad: sorted(grad, 10), tx: sorted(tx, 10), bd: sorted(bd, 6), fills: sorted(fills, 10), cta: sorted(cta, 8), fam: sorted(fam, 5), rad: sorted(rad, 6), shd: sorted(shd, 5), gaps: sorted(gaps, 14), dur: sorted(dur, 4), ease: sorted(ease, 3), maxw: sorted(maxw, 4), type, mq: [...mq], gf, htmlTitle: document.title,
    h1: texts('h1', 2, 160), h2: texts('h2', 6, 120), buttons: texts('button, a[class*=btn], a[class*=button], [role=button]', 10, 40), nav: texts('nav a, header a', 8, 28), brand: brandEl, para: texts('p', 3, 260), body: document.body.innerText.replace(/\s+/g, ' ').slice(0, 700), bodyBg: getComputedStyle(document.body).backgroundColor, htmlBg: getComputedStyle(document.documentElement).backgroundColor, scheme: getComputedStyle(document.documentElement).colorScheme };
}
"""

def work(args):
    items, out = args
    from playwright.sync_api import sync_playwright
    res = []
    with sync_playwright() as p:
        b = p.chromium.launch()
        for it in items:
            try:
                ctx = b.new_context(viewport={'width': 1440, 'height': 900})
                pg = ctx.new_page()
                pg.route('**/*', lambda r: r.continue_() if r.request.url.startswith(('file:', 'data:', 'blob:')) else r.abort())
                pg.goto(pathlib.Path(it['html']).resolve().as_uri(), wait_until='load')
                pg.wait_for_timeout(1500)
                f = pg.evaluate(JS)
                f.update({'key': it['key'], 'title': it['title'], 'category': it['category'], 'description': it['description'], 'kind': it['kind']})
                (pathlib.Path(out) / (it['key'].replace(':', '__') + '.json')).write_text(json.dumps(f, ensure_ascii=False))
                res.append((it['key'], 'ok'))
                ctx.close()
            except Exception as e:
                res.append((it['key'], 'ERR ' + str(e)[:120]))
        b.close()
    return res

if __name__ == '__main__':
    ap = argparse.ArgumentParser()
    ap.add_argument('--out', default='/tmp/brand/facts')
    ap.add_argument('--procs', type=int, default=4)
    ap.add_argument('keys', nargs='*')
    a = ap.parse_args()
    pathlib.Path(a.out).mkdir(parents=True, exist_ok=True)
    L = [l for l in listings() if not a.keys or l['key'] in a.keys]
    for l in L: l['html'] = str(l['html']); l['dir'] = str(l['dir'])
    chunks = [L[i::a.procs] for i in range(a.procs)]
    with mp.Pool(a.procs) as pool:
        results = [r for part in pool.map(work, [(c, a.out) for c in chunks]) for r in part]
    bad = [r for r in results if r[1] != 'ok']
    print(f'{len(results) - len(bad)} ok, {len(bad)} failed of {len(L)}')
    for r in bad: print(r)
