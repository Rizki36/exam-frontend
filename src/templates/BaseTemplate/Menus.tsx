import { FC } from 'react';

import { BookOpenIcon } from '@heroicons/react/outline';
import Link from 'next/link';

const Menus: FC<{ className?: string }> = ({ className }) => {
  return (
    <ul className={`p-2 menu bg-base-100 rounded-box ${className}`}>
      <li>
        <Link href={'/books'} className="active">
          <BookOpenIcon className="w-6 h-6" />
          Books
        </Link>
      </li>
      {/* <li>
        <a>
          <ViewGridIcon className="w-6 h-6" />
          Book Categories
        </a>
      </li> */}
    </ul>
  );
};

export default Menus;
