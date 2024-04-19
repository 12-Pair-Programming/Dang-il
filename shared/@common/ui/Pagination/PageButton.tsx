import React, { useRef } from 'react';
import { ReactNode } from 'react';

const PageButton = ({
  children,
  onClick,
  isActive,
}: {
  children: ReactNode;
  onClick: () => void;
  isActive: boolean;
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    onClick();
    buttonRef.current?.focus();
  };
  return (
    <button
      ref={buttonRef}
      className={`${
        isActive ? 'bg-purple-30 text-white' : 'bg-white text-black'
      }  rounded flex flex-col justify-center items-center gap-[10px] shrink-0 w-10 h-10 p-3}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default PageButton;
