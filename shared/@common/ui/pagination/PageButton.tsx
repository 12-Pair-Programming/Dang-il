import { ReactNode } from 'react';

const PageButton = ({
  children,
  key,
  onClick,
}: {
  children: ReactNode;
  key: number;
  onClick: () => void;
}) => {
  return (
    <button className="flex-col justify-center items-center gap-[10px] shrink-0 w-[40px] h-[40px] p-[12px]">
      <span className="text-black leading-[22px]"></span>
    </button>
  );
};

export default PageButton;
