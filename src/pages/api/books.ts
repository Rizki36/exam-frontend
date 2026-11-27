import type { NextApiRequest, NextApiResponse } from 'next';

import { getBooks } from '@/utils/mockData';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { categoryId } = req.query;
  const page = Math.max(Number(req.query.page) || 0, 0);
  const size = Math.max(Number(req.query.size) || 10, 1);

  res
    .status(200)
    .json(
      getBooks(
        typeof categoryId === 'string' ? categoryId : undefined,
        page,
        size
      )
    );
}
