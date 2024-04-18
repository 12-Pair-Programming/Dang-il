import { ReactNode } from 'react';

const PageButton = ({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick: () => void;
}) => {
  return (
    <button
      className="bg-white active:bg-purple-30 text-black active:text-white rounded flex flex-col justify-center items-center gap-[10px] shrink-0 w-[40px] h-[40px] p-[12px]"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default PageButton;
