import { FC } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import Container from '@/components/Container';

const Navbar: FC<{ className?: string }> = ({ className }) => {
  return (
    <Container className={`backdrop-blur bg-base-100 w-full ${className}`}>
      <div className="navbar">
        <div className="flex-1">
          <Link
            href={'/'}
            id="title-button"
            className="text-4xl normal-case btn btn-ghost"
          >
            Booku
          </Link>
        </div>
        <div className="flex-none">
          <Link
            href={'/books?section=favorite'}
            id="favorite-button"
            className="btn btn-ghost btn-circle"
          >
            <div className="indicator">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                />
              </svg>
            </div>
          </Link>
          <Link
            href={'/profile'}
            id="profile-button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="relative w-10 rounded-full">
              <Image
                src={'/me.png'}
                alt="me"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
