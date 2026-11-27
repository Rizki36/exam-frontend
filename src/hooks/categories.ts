import { AxiosResponse } from 'axios';
import useSWR from 'swr';

import fetcher from '@/configs/fetcher';
import { GetCategoriesResponse } from '@/types/dto/category';

export function useCategories() {
  const { data, error } = useSWR([`/categories`], ([url]) => {
    return fetcher
      .get<any, AxiosResponse<GetCategoriesResponse>>(url)
      .then((res) => res.data);
  });

  return {
    categories: data,
    isLoading: !error && !data,
    isError: error,
  };
}
