import { readFile, access } from 'node:fs/promises';
import path from 'node:path';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import { build, root } from './build.mjs';

await build();
const logic = await readFile(path.join(root, 'src/prototype.js'), 'utf8');
new vm.Script(logic, { filename: 'src/prototype.js' });
const mapCode = await readFile(path.join(root, 'static/resource-map.js'), 'utf8');
const sandbox = { window: {} };
vm.runInNewContext(mapCode, sandbox, { timeout: 1000 });
const html = await readFile(path.join(root, 'public/index.html'), 'utf8');
const css = await readFile(path.join(root, 'public/styles.css'), 'utf8');
const references = new Set([
  ...Object.values(sandbox.window.__resources),
  ...Array.from((html + css).matchAll(/(?:src|href)=["'](\/[^"']+)["']|url\(["']?(\/[^)'"\s]+)["']?\)/g), m => m[1] || m[2])
]);
for (const reference of references) await access(path.join(root, 'public', reference));
for (const file of ['react.production.min.js', 'react-dom.production.min.js', 'dc-runtime.js']) {
  new vm.Script(await readFile(path.join(root, 'static/assets/vendor', file), 'utf8'), { filename: file });
}
assert(!html.includes('__bundler/'), 'The former full-screen export loader must be absent.');
assert(!html.includes('TRIPUP_APPLICATION_CODE'), 'The application code must be assembled.');
assert(css.includes('touch-action: manipulation'), 'Mobile taps must retain the gesture fix.');
console.log(`Syntax and ${references.size} local asset references checked.`);
