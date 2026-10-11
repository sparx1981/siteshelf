import assert from 'node:assert/strict';
import { planSync, mergeUpdate } from '../lib/sync.js';
import { paragraphs, buildSections, compose, isSafeUrl, hash } from '../lib/text.js';
import { extractJson, extractHtml } from '../lib/claude.js';

// planSync: only free items are fetched; new and changed ones only
const list = [
  { _id: 'a', type: 'free', updatedAt: '2026-10-01' },
  { _id: 'b', type: 'free', updatedAt: '2026-10-05' },
  { _id: 'c', type: 'free', updatedAt: '2026-09-01' },
  { _id: 'p', type: 'premium', updatedAt: '2026-10-05' },
];
const existing = new Map([
  ['b', { source_updated_at: '2026-10-01' }],
  ['c', { source_updated_at: '2026-09-01' }],
]);
const plan = planSync(list, existing);
assert.deepEqual(plan.fetchIds, ['a', 'b']);
assert.equal(plan.premium, 1);
assert.equal(plan.free, 3);

// mergeUpdate never overwrites your edits
assert.deepEqual(mergeUpdate({ prompt: 'x', original_prompt: 'x' }, 'y'), { original_prompt: 'y', prompt: 'y', keptEdits: false });
const kept = mergeUpdate({ prompt: 'mine', original_prompt: 'x' }, 'y');
assert.equal(kept.prompt, undefined);
assert.equal(kept.keptEdits, true);

// sections: lossless grouping, and a safe fallback
const text = 'Canvas: one\n\nLayer: two\n\nLayer: three\n\nRules: four';
const paras = paragraphs(text);
assert.equal(paras.length, 4);
const ok = buildSections(paras, [{ label: 'Base', from: 0, to: 0 }, { label: 'Layers', from: 1, to: 2 }, { label: 'Rules', from: 3, to: 3 }]);
assert.equal(ok.length, 3);
assert.equal(compose(ok), text);
for (const bad of [null, [], [{ from: 0, to: 1 }], [{ from: 1, to: 3 }], [{ from: 0, to: 9 }], [{ from: 0, to: 2 }, { from: 2, to: 3 }]]) {
  const fb = buildSections(paras, bad);
  assert.equal(fb.length, 4);
  assert.equal(compose(fb), text);
}

// url safety
assert.equal(isSafeUrl('https://example.com/a'), true);
for (const u of ['http://localhost:3000', 'http://127.0.0.1', 'http://192.168.1.4', 'http://169.254.169.254/x', 'ftp://example.com', 'nope', 'http://10.0.0.1', 'http://172.20.1.1']) assert.equal(isSafeUrl(u), false, u);

// model output parsing
assert.deepEqual(extractJson('Here:\n```json\n[{"a":1}]\n```'), [{ a: 1 }]);
assert.equal(extractJson('no json here'), null);
assert.match(extractHtml('```html\n<!doctype html><html></html>\n```'), /^<!doctype html>/);
assert.match(extractHtml('Sure! <html><body></body></html>'), /^<html>/);
assert.equal(hash('a'), hash('a'));
assert.notEqual(hash('a'), hash('b'));
console.log('all logic checks passed');
