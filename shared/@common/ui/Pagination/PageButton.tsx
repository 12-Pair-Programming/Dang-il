import React, { useRef } from 'react';
import { ReactNode } from 'react';

const PageButton = ({
  children,
  onClick,
  autoFocus,
}: {
  children: ReactNode;
  onClick: () => void;
  autoFocus: boolean;
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    onClick();
    buttonRef.current?.focus();
  };
  return (
    <button
      ref={buttonRef}
      className="bg-white focus:bg-purple-30 text-black focus:text-white rounded flex flex-col justify-center items-center gap-[10px] shrink-0 w-[40px] h-[40px] p-[12px]"
      onClick={handleClick}
      tabIndex={autoFocus ? 0 : -1}
    >
      {children}
    </button>
  );
};

export default PageButton;
