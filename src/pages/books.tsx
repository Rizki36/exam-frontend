import { useState } from 'react';

import BookItem from '@/components/BooksPage/BookItem';
import CategoryItem from '@/components/BooksPage/CategoryItem';
import DetailItem from '@/components/BooksPage/DetailItem';
import EmptyStateItem from '@/components/BooksPage/EmptyStateItem';
import PaginationItem from '@/components/BooksPage/PaginationItem';
import SearchItem from '@/components/BooksPage/SearchItem';
import TabItem from '@/components/BooksPage/TabItem';
import Container from '@/components/Container';
import { Page } from '@types';

const Books: Page = () => {
  const [categoryId, setCategoryId] = useState<number | null>(null);

  return (
    <div className="overflow-y-hidden !pr-0">
      <div className="flex lg:h-screen">
        <Container className="overflow-y-scroll py-5 w-full">
          <div className="flex flex-col justify-between mb-10 lg:flex-row">
            <TabItem className={'w-full'} />
            <SearchItem className={'mt-8 w-full lg:w-fit'} />
          </div>

          <CategoryItem setCategoryId={setCategoryId} categoryId={categoryId} />

          {categoryId ? (
            <>
              <div className="grid flex-1 grid-cols-2 gap-x-3 gap-y-10 lg:grid-cols-4 lg:gap-x-8">
                <BookItem />
              </div>
              <div className="flex justify-center mt-16 w-full">
                <PaginationItem />
              </div>
            </>
          ) : (
            <EmptyStateItem />
          )}
        </Container>

        <DetailItem className="hidden lg:flex" />
      </div>
    </div>
  );
};

export default Books;
