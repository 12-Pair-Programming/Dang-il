import { PropsWithChildren } from 'react';

const PaginationWrapper = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex justify-center items-center w-full h-16 bg-white p-100%">
      {children}
    </div>
  );
};

export default PaginationWrapper;
