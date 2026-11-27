import { FC, PropsWithChildren } from 'react';

const Container: FC<PropsWithChildren<{ className?: string }>> = ({
  className,
  children,
}) => {
  return <div className={`px-2 xl:px-10 ${className}`}>{children}</div>;
};

export default Container;
