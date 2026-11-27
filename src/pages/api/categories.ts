import type { NextApiRequest, NextApiResponse } from 'next';

import { getCategories } from '@/utils/mockData';

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(getCategories());
}
