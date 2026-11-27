import * as React from 'react';
import { FC, PropsWithChildren } from 'react';

import Navbar from './Navbar';

const LandingTemplate: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Navbar className="fixed z-50" />
      <div className="flex flex-col">{children}</div>
    </>
  );
};
export default LandingTemplate;
