import { Dispatch, FC, SetStateAction } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/router';

import { setSelectedBook } from '@/configs/redux/bookSlice';
import { useAppDispatch } from '@/configs/redux/hooks';
import { BookType } from '@/types';

const ImageItem: FC<
  BookType & { selected: number; setSelected: Dispatch<SetStateAction<number>> }
> = ({ selected, setSelected, ...book }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  return (
    <button
      title="Double click to view book"
      tabIndex={0}
      className={`book-item aspect-[2/3] overflow-hidden relative mx-3 h-32 rounded-lg hover:shadow-2xl transition scale-90 hover:scale-95 cursor-pointer lg:h-96 
      tooltip carousel-item ${
        book.id === selected &&
        'scale-95 outline outline-base-content outline-4'
      }`}
      onClick={() => {
        if (selected === book.id) {
          dispatch(setSelectedBook(book));
          router.push(`/books/${book.id}`);
        } else {
          setSelected(book.id);
        }
      }}
    >
      <Image
        className="rounded-md"
        fill
        style={{ objectFit: 'contain' }}
        src={book.cover_url}
        alt="Booku"
      />
    </button>
  );
};

export default ImageItem;
