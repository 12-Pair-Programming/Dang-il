import React, { useEffect, useRef } from 'react';
import DetailFilter from './DetailFilter';
import { SetState } from '@/shared/@common/types/helper';
import { Data, FilterValues } from './AllNotice';

interface FilterModalProps {
  isOpen: boolean;
  noticeData: Data | undefined;
  setIsOpen: SetState<boolean>;
  onClickFilter: (filterValues: FilterValues) => void;
}

const FilterModal = ({
  isOpen,
  noticeData,
  setIsOpen,
  onClickFilter,
}: FilterModalProps) => {
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
          <DetailFilter
            setIsOpen={setIsOpen}
            noticeData={noticeData}
            onClickFilter={onClickFilter}
          />
        </div>
      )}
    </>
  );
};

export default FilterModal;
