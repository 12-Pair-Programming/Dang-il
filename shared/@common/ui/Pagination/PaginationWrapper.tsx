import { PropsWithChildren } from 'react';

const PaginationWrapper = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex justify-center items-center w-241 h-16 bg-white p-100%">
      {children}
    </div>
  );
};

export default PaginationWrapper;
