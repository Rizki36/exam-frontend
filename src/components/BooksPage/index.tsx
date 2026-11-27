import { useEffect } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';

import {
  setActiveTab,
  setSearch,
  setSelectedBook,
} from '@/configs/redux/bookSlice';
import { useAppDispatch, useAppSelector } from '@/configs/redux/hooks';

import Container from '../Container';
import CategoryItem from './CategoryItem';
import DetailItem from './DetailItem';
import SearchItem from './SearchItem';
import BookSection from './Sections/BookSection';
import FavoriteSection from './Sections/FavoriteSection';
import TabItem from './TabItem';

const BooksPage = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  useEffect(() => {
    const search = router.query.search as string;
    const section = router.query.section as string;

    if (search) dispatch(setSearch(search));
    if (section === 'favorite') dispatch(setActiveTab('favorite'));

    // unselect book when first load
    dispatch(setSelectedBook(null));
  }, [dispatch, router.query]);

  const { activeTab } = useAppSelector((state) => state.book);

  return (
    <div className="overflow-hidden !pr-0">
      <div className="flex lg:h-screen">
        <Container className="overflow-x-hidden overflow-y-scroll py-5 w-full">
          <div className="flex flex-col justify-between mb-10 lg:flex-row">
            <TabItem className={'w-full'} />
            <SearchItem className={'mt-8 w-full lg:w-fit'} />
          </div>

          <CategoryItem />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.15 }}
            >
              {/* pagination only appears in the book tab */}
              {activeTab === 'favorite' && <FavoriteSection />}
              {activeTab === 'books' && <BookSection />}
            </motion.div>
          </AnimatePresence>
        </Container>

        <DetailItem />
      </div>
    </div>
  );
};

export default BooksPage;
