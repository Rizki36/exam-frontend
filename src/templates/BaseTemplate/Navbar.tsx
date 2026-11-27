import { FC, useState } from 'react';

import Link from 'next/link';

import ButtonModal from './ButtonModal';
import ModalMenu from './ModalMenu';

const Navbar: FC<{ className: string }> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className={`flex relative justify-between items-center py-3 px-5 bg-base-100 ${className}`}
      >
        <Link
          href={'/'}
          className={`text-3xl font-bold tracking-wider text-left text-base-content`}
        >
          Booku
        </Link>

        <ButtonModal isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      {isOpen && <ModalMenu isOpen={isOpen} setIsOpen={setIsOpen} />}
    </>
  );
};

export default Navbar;
