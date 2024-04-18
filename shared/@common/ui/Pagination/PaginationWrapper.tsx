import { ReactNode } from 'react';

const PaginationWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex justify-center items-center w-[964px] h-[64px] bg-white p-100%">
      {children}
    </div>
  );
};

export default PaginationWrapper;
