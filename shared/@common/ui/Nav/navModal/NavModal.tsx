import React, { useEffect, useRef } from 'react';
import { NavModalMessage } from './navModalMessage/NavModalMessage';
import { SetState } from '@/shared/@common/types/helper';
import useFetch from '@/shared/@common/api/hooks/useFetch';
import Image from 'next/image';
import { alertAPI } from '@/shared/@common/api/Api';

interface NavModalProps {
  isOpen: boolean;
  userId: string;
  onClose: () => void;
}

export const NavModal = ({ isOpen, userId, onClose }: NavModalProps) => {
  const modalClick = useRef<HTMLDivElement>(null);

  const handleClick = (e: MouseEvent) => {
    if (modalClick.current && !modalClick.current.contains(e.target as Node)) {
      onClose();
    }
  };

  const handleClose = () => {
    onClose();
  };

  const { data, loading, error, execute } = useFetch(() =>
    alertAPI.get(userId),
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div
          className="absolute flex flex-col align-top px-5 py-6 bg-purple-10 rounded-[10px] gap-2 right-0 ml-[-336px] min-h-[250px] top-10"
          ref={modalClick}
          onMouseDown={(e) => e.stopPropagation()}
        >
          <div className="inline-flex flex-col gap-4 w-full">
            <div className="flex justify-between items-center self-stretch">
              <p className="font-spoqa font-semibold text-lg">
                알림 {data.count}개
              </p>
              <Image
                width={28}
                height={28}
                src={'/images/purpleClose.png'}
                alt="닫기 버튼"
                className="cursor-pointer hover:bg-purple-20 rounded-[10px]"
                onClick={handleClose}
              />
            </div>
            {data.count !== 0 ? (
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
            ) : (
              <div className="flex flex-col gap-2 w-[350px] h-[500px] items-center justify-center">
                알림이 없습니다!
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
