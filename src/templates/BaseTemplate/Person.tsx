import { FC } from 'react';

import Image from 'next/image';
import Link from 'next/link';

const Person: FC<{ className?: string; showImg?: boolean }> = ({
  className,
  showImg = true,
}) => {
  return (
    <Link
      href={'/profile'}
      className={`flex items-center space-x-2  bg-base-100 p-5 rounded-lg select-none w-full text-base-content ${className}`}
    >
      <div className="avatar">
        {showImg && (
          <div className="relative w-14 h-14 rounded-full bg-base-content">
            <Image
              src={'/me.png'}
              alt="Avatar Tailwind CSS Component"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        )}
      </div>
      <div>
        <div className="ml-1 text-lg font-extrabold line-clamp-1">
          Rizki Fitra
        </div>
        <small className="text-base-content/80">View Profile</small>
      </div>
    </Link>
  );
};

export default Person;
