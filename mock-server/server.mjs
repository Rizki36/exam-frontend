// Mock of the Booku backend (replaces the cloudfunctions.net upstream).
// Usage: node mock-server/server.mjs   (PORT defaults to 4000)
import { createReadStream } from 'node:fs';
import { readFile, stat } from 'node:fs/promises';
import http from 'node:http';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));
const PORT = Number(process.env.PORT || 4000);
const PUBLIC_URL = process.env.MOCK_PUBLIC_URL || `http://localhost:${PORT}`;

const categories = JSON.parse(
  await readFile(path.join(root, 'data/categories.json'), 'utf8')
);
const books = JSON.parse(
  await readFile(path.join(root, 'data/books.json'), 'utf8')
);

const MIME = {
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
};

const send = (res, status, body) => {
  res.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
  });
  res.end(JSON.stringify(body));
};

const withLocalCover = (b) => ({
  ...b,
  cover_url: b.cover_url
    ? `${PUBLIC_URL}/covers/${path.basename(new URL(b.cover_url).pathname)}`
    : b.cover_url,
});

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, PUBLIC_URL);
  console.log(`${req.method} ${url.pathname}${url.search}`);

  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': '*',
    });
    return res.end();
  }

  if (url.pathname === '/fee-assessment-categories') {
    return send(res, 200, categories);
  }

  if (url.pathname === '/fee-assessment-books') {
    const categoryId = url.searchParams.get('categoryId');
    const page = Math.max(Number(url.searchParams.get('page')) || 0, 0);
    const size = Math.max(Number(url.searchParams.get('size')) || 10, 1);
    const list = categoryId
      ? books.filter((b) => String(b.category_id) === categoryId)
      : books;
    return send(
      res,
      200,
      list.slice(page * size, (page + 1) * size).map(withLocalCover)
    );
  }

  if (url.pathname.startsWith('/covers/')) {
    const file = path.join(root, '../public/covers', path.basename(url.pathname));
    try {
      await stat(file);
      res.writeHead(200, {
        'Content-Type': MIME[path.extname(file).toLowerCase()] || 'application/octet-stream',
        'Cache-Control': 'public, max-age=86400',
        'Access-Control-Allow-Origin': '*',
      });
      return createReadStream(file).pipe(res);
    } catch {
      return send(res, 404, { message: 'cover not found' });
    }
  }

  return send(res, 404, { message: 'not found' });
});

server.listen(PORT, () => console.log(`Mock server on ${PUBLIC_URL}`));
