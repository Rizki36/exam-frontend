import path from 'path';

import books from '../../mock-server/data/books.json';
import categories from '../../mock-server/data/categories.json';

// Cover files are served from `public/covers`.
const withLocalCover = <T extends { cover_url?: string }>(book: T): T => ({
  ...book,
  cover_url: book.cover_url
    ? `/covers/${path.basename(new URL(book.cover_url).pathname)}`
    : book.cover_url,
});

export const getCategories = () => categories;

export const getBooks = (categoryId?: string, page = 0, size = 10) => {
  const list = categoryId
    ? books.filter((b) => String(b.category_id) === categoryId)
    : books;

  return list.slice(page * size, (page + 1) * size).map(withLocalCover);
};
