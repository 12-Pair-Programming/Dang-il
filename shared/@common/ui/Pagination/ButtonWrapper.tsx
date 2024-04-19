import { PropsWithChildren } from 'react';

const ButtonWrapper = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex justify-between align-center h-[40px]">{children}</div>
  );
};

export default ButtonWrapper;
