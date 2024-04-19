import React, { PropsWithChildren, useRef } from 'react';

interface Props {
  onClick: () => void;
  isActive: boolean;
}

const PageButton = ({
  children,
  onClick,
  isActive,
}: PropsWithChildren<Props>) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    onClick();
    buttonRef.current?.focus();
  };

  return (
    <button
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
