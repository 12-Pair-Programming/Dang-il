import React, { useEffect, useRef } from 'react';
import { NavModalMessage } from './navModalMessage/NavModalMessage';
import useFetch from '@/shared/@common/api/hooks/useFetch';
import Image from 'next/image';
import alertAPI from '@/shared/@common/api/alertAPI';

interface NavModalProps {
  isOpen: boolean;
  user_id: string;
  onClose: () => void;
}

interface Item {
  item: {
    id: string;
    result: string;
    read: boolean;
    application: {
      href: string;
    };
    notice: {
      item: {
        startsAt: string;
        description: string;
      };
    };
    createdAt: Date;
  };
}

export const NavModal = ({ isOpen, user_id, onClose }: NavModalProps) => {
  const modalClick = useRef<HTMLDivElement>(null);

  const handleClick = (e: MouseEvent) => {
    if (modalClick.current && !modalClick.current.contains(e.target as Node)) {
      onClose();
    }
  };

  const handleClose = () => {
    onClose();
  };

  const { data } = useFetch(() => alertAPI.get({ user_id }));

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
          className="absolute flex flex-col align-top px-5 py-6 bg-purple-10 rounded-[10px] gap-2 right-0 ml-[-336px]  h-[500px] top-10 mobile:fixed mobile:top-0 mobile:right-0 mobile:bottom-0 mobile:left-0 mobile:h-screen mobile:rounded-none mobile:ml-0"
          ref={modalClick}
          onMouseDown={(e) => e.stopPropagation()}
        >
          <div className="inline-flex flex-col gap-4 w-full h-full">
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
              <div className="flex flex-col gap-2 h-full">
                {data.items?.map((item: Item) => {
                  return (
                    <NavModalMessage
                      key={item.item.id}
                      isResult={item.item.result}
                      noticeName={item.item.notice.item.description}
                      noticePeriod={new Date(
                        item.item.notice.item.startsAt,
                      ).toLocaleString()}
                      createdAt={item.item.createdAt}
                      url={item.item.application.href}
                      checked={item.item.read}
                      user_id={user_id}
                    />
                  );
                })}
              </div>
            ) : (
              <div className="flex flex-col gap-2 w-[350px] h-full items-center justify-center text-base font-bold mobile:w-full">
                알림이 없습니다!
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
