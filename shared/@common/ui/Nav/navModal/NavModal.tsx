import React, { useEffect, useRef } from 'react';
import { NavModalMessage } from './navModalMessage/NavModalMessage';
import { SetState } from '@/shared/@common/types/helper';

interface NavModalProps {
  isOpen: boolean;
  setIsOpen: SetState<boolean>;
}

export const NavModal = ({ isOpen, setIsOpen }: NavModalProps) => {
  const modalClick = useRef<HTMLDivElement>(null);

  const handleClick = (e: MouseEvent) => {
    if (modalClick.current && !modalClick.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  //연동 전 오류 방지용 데이터입니다.
  const data = { offset: 0, limit: 5, count: 5, hasNext: false, items: [] };

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
          className="absolute flex flex-col align-top px-5 py-6 bg-purple-10 rounded-[10px] gap-2 right-0 ml-[-336px] min-h-[250px] top-10"
          ref={modalClick}
          onMouseDown={(e) => e.stopPropagation()}
        >
          <div className="inline-flex flex-col gap-4 w-full">
            <p className="font-spoqa font-semibold text-lg">
              알림 {data.items.length}개
            </p>
            <div className="flex flex-col gap-2">
              {data.items?.map((item: any) => {
                // 각 항목에서 필요한 데이터 추출 ()
                const result = item.item.result;
                const startsAt = new Date(
                  item.item.notice.item.startsAt,
                ).toLocaleString();

                // NavModalMessage 컴포넌트에 필요한 데이터 전달
                return (
                  <NavModalMessage
                    key={item.item.id}
                    isResult={result}
                    noticeName={item.item.notice.item.description}
                    noticePeriod={startsAt}
                    createdAt={item.item.createdAt}
                  />
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
/* noticeName={item.item.notice.item.description}
          noticePeriod={item.item.notice.item.startsAt}
          minutesAgo={Math.round((new Date().getTime() - new Date(item.item.createdAt).getTime()) / (1000 * 60))}
*/
