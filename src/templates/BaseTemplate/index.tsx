import { FC, PropsWithChildren } from 'react';

import Navbar from './Navbar';
import Sidebar from './Sidebar';

const BaseTemplate: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen lg:flex-row">
      <Sidebar className="hidden lg:flex" />
      <Navbar className="lg:hidden" />
      <div className="overflow-x-hidden overflow-y-auto w-full lg:h-screen">
        {children}
      </div>
    </div>
  );
};

export default BaseTemplate;
