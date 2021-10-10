import { FC } from 'react';

export const Layout: FC = ({ children }) => {
  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10 max-w-6xl m-auto">{children}</div>
  );
};
