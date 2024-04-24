import React, { useEffect, useRef } from 'react';
import DetailFilter from '../DetailFilter';

interface FilterModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const FilterModal = ({ isOpen, setIsOpen }: FilterModalProps) => {
  const modalClick = useRef<HTMLDivElement>(null);

  const handleClick = (e: MouseEvent) => {
    if (modalClick.current && !modalClick.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  return (
    <>
      {isOpen && (
        <div
          className="border-[1px] border-purple-30 flex w-[390px] px-6 py-5 flex-col items-start gap-6 bg-white absolute right-[0px] top-[70px] rounded-[10px] z-modalbody"
          ref={modalClick}
          onMouseDown={(e) => e.stopPropagation()}
        >
          <DetailFilter setIsOpen={setIsOpen} />
        </div>
      )}
    </>
  );
};
