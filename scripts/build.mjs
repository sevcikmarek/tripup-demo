import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

export const root = fileURLToPath(new URL('../', import.meta.url));

export async function build() {
  const destination = path.join(root, 'public');
  const template = await readFile(path.join(root, 'src/index.html'), 'utf8');
  const logic = await readFile(path.join(root, 'src/prototype.js'), 'utf8');
  const marker = '<!-- TRIPUP_APPLICATION_CODE -->';
  if (template.split(marker).length !== 2) throw new Error('Expected one application code marker.');
  // The export runtime reads an inline component script, so assemble it at build time.
  const html = template.replace(marker, () => logic.replace(/<\/script/gi, '<\\/script'));
  await rm(destination, { recursive: true, force: true });
  await mkdir(destination, { recursive: true });
  await cp(path.join(root, 'static'), destination, { recursive: true });
  await cp(path.join(root, 'src/styles.css'), path.join(destination, 'styles.css'));
  await writeFile(path.join(destination, 'index.html'), html);
  console.log('Built TripUp into public/');
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) await build();
