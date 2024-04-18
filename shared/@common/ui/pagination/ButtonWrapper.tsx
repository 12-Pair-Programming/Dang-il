import { ReactNode } from 'react';

const ButtonWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex justify-between align-center h-[40px]">{children}</div>
  );
};

export default ButtonWrapper;
