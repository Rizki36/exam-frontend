// Snapshot the real backend: categories, all books, and cover images.
// Usage: node mock-server/scripts/harvest.mjs
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const API =
  process.env.UPSTREAM_API ||
  'https://asia-southeast2-sejutacita-app.cloudfunctions.net';
const SIZE = 10;

const getJson = async (url) => {
  const res = await fetch(url);
  if (!res.ok) return null;
  try {
    return await res.json();
  } catch {
    return null;
  }
};

const categories = await getJson(`${API}/fee-assessment-categories`);
if (!categories) throw new Error('Cannot fetch categories');

const byId = new Map();
for (const c of categories) {
  for (let page = 0; ; page += 1) {
    const data = await getJson(
      `${API}/fee-assessment-books?categoryId=${c.id}&page=${page}&size=${SIZE}`
    );
    if (!Array.isArray(data) || data.length === 0) break;
    data.forEach((b) => byId.set(b.id, b));
    console.log(`category ${c.id} page ${page}: ${data.length}`);
    if (data.length < SIZE) break;
  }
}
const books = [...byId.values()];

await writeFile(
  path.join(root, 'data/categories.json'),
  `${JSON.stringify(categories, null, 2)}\n`
);
await writeFile(
  path.join(root, 'data/books.json'),
  `${JSON.stringify(books, null, 2)}\n`
);

// Covers: from books + landing page dummy data
const dummy = await readFile(
  path.join(root, '../src/configs/dummy.ts'),
  'utf8'
).catch(() => '');
const urls = new Set(books.map((b) => b.cover_url).filter(Boolean));
for (const m of dummy.matchAll(/https:\/\/cdn\.sejutacita\.id\/[^'"\s]+/g)) {
  urls.add(m[0]);
}
await mkdir(path.join(root, '../public/covers'), { recursive: true });
let ok = 0;
for (const url of urls) {
  const res = await fetch(url);
  if (!res.ok) {
    console.warn(`FAILED ${res.status} ${url}`);
    continue;
  }
  const name = path.basename(new URL(url).pathname);
  await writeFile(
    path.join(root, '../public/covers', name),
    Buffer.from(await res.arrayBuffer())
  );
  ok += 1;
}
console.log(
  `Saved ${categories.length} categories, ${books.length} books, ${ok}/${urls.size} covers`
);
