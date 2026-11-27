import { AxiosResponse } from 'axios';
import useSWR from 'swr';

import fetcher from '@/configs/fetcher';
import type { GetBooksResponse } from '@/types/dto/book';

export function useBooks(_categoryId?: number, _page = 0, _size = 10) {
  const { data, error } = useSWR(
    [`/books`, _categoryId, _page, _size],
    ([url, categoryId, page, size]) => {
      if (!categoryId) return [];

      // prevent fetching data when categoryId is null
      return fetcher
        .get<any, AxiosResponse<GetBooksResponse>>(url, {
          params: {
            categoryId,
            page,
            size,
          },
        })
        .then((res) => res.data);
    }
  );

  return {
    books: data,
    isLoading: !error && !data,
    isError: error,
  };
}
