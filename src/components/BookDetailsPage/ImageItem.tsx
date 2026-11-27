import Image from 'next/image';

import { useAppSelector } from '@/configs/redux/hooks';

const ImageItem = () => {
  const { selectedBook } = useAppSelector((state) => state.book);

  return (
    <div className="aspect-[2/3] overflow-hidden relative w-full rounded-lg">
      <Image
        className="rounded-md"
        fill
        style={{ objectFit: 'contain' }}
        src={selectedBook?.cover_url ?? '/'}
        alt="Booku"
      />
    </div>
  );
};

export default ImageItem;
