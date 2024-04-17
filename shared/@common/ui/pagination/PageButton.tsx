import { ReactNode } from 'react';

const PageButton = ({
  children,
  onClick,
}: {
  children?: ReactNode;
  onClick?: () => void;
}) => {
  return (
    <button
      className="flex flex-col justify-center items-center gap-[10px] shrink-0 w-[40px] h-[40px] p-[12px]"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default PageButton;
