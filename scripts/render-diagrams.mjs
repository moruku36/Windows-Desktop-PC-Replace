// docs/diagrams/src/*.mmd を Pele の render(source, options).svg で docs/diagrams/svg/*.svg に変換する。
// Pele の CLI は未確認のため使わない(ライブラリ API のみ)。
import { readdir, readFile, writeFile, mkdir } from 'node:fs/promises';
import { join, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

let render;
try {
  ({ render } = await import('pele'));
} catch (e) {
  console.error('pele が未導入です。docs/diagrams/README.md の手順で `npm install --save-exact pele` を実行してください。');
  process.exit(1);
}

const root = fileURLToPath(new URL('..', import.meta.url));
const srcDir = join(root, 'docs/diagrams/src');
const outDir = join(root, 'docs/diagrams/svg');
await mkdir(outDir, { recursive: true });

const options = {
  fontFamily: '"Yu Gothic UI", "Hiragino Sans", "Noto Sans CJK JP", "Meiryo", sans-serif',
  fontSize: 16,
  responsive: true,
};

for (const f of (await readdir(srcDir)).filter((n) => n.endsWith('.mmd')).sort()) {
  const source = await readFile(join(srcDir, f), 'utf8');
  const { svg, width, height, type } = render(source, options);
  const out = join(outDir, basename(f, '.mmd') + '.svg');
  await writeFile(out, svg, 'utf8');
  console.log(`${f} -> ${out} (${type}, ${width}x${height})`);
}
