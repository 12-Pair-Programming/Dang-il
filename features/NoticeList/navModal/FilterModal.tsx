import React, { useEffect, useRef } from 'react';

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
          className="absolute flex flex-col align-top px-5 py-6 bg-white rounded-[10px] gap-2 right-0 ml-[-336px] min-h-[250px] top-10"
          ref={modalClick}
          onMouseDown={(e) => e.stopPropagation()}
        >
          여기에 모달 내용 넣으시면 됩니다.
        </div>
      )}
    </>
  );
};
