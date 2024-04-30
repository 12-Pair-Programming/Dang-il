import React, { useEffect, useRef, useState } from 'react';
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
        id: string;
        startsAt: string;
        description: string;
      };
    };
    shop: {
      item: {
        id: string;
        name: string;
      };
    };
    createdAt: Date;
  };
}

export const NavModal = ({ isOpen, user_id, onClose }: NavModalProps) => {
  const modalClick = useRef<HTMLDivElement>(null);
  const target = useRef<HTMLDivElement>(null);
  const [data, setData] = useState<Item[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);

  const handleClick = (e: MouseEvent) => {
    if (modalClick.current && !modalClick.current.contains(e.target as Node)) {
      onClose();
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await alertAPI.get({
          limit: 3,
          offset: page,
          user_id,
        });
        setCount(response.data.count);
        if (page === 1) {
          setData(response.data.items);
        } else {
          setData((prevData) => [...prevData, ...response.data.items]);
        }
      } catch (error) {
        console.error('Error fetching notice data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [page, user_id]);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      const entry = entries[0];
      if (entry.isIntersecting && !loading && data.length < count) {
        setPage((prevPage) => prevPage + 1);
      }
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0,
    });

    if (target.current && isOpen) {
      observer.observe(target.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [target.current, isOpen, loading, data.length, count]);

  const handleClose = () => {
    onClose();
  };

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
          className="absolute flex flex-col align-top px-5 py-6 bg-purple-10 shadow-md rounded-[10px] gap-2 right-0 ml-[-336px]  h-[500px] top-10 mobile:fixed mobile:top-0 mobile:right-0 mobile:bottom-0 mobile:left-0 mobile:h-screen mobile:rounded-none mobile:ml-0"
          ref={modalClick}
          onMouseDown={(e) => e.stopPropagation()}
        >
          <div className="inline-flex flex-col gap-4 w-full h-full">
            <div className="flex justify-between items-center self-stretch">
              <p className="font-spoqa font-semibold text-lg">알림 {count}개</p>
              <Image
                width={28}
                height={28}
                src={'/images/purpleClose.png'}
                alt="닫기 버튼"
                className="cursor-pointer hover:bg-purple-20 rounded-[10px]"
                onClick={handleClose}
              />
            </div>
            {count !== 0 ? (
              <div className="flex flex-col gap-2 overflow-y-scroll h-[1000px]">
                {data.map((item: Item, index: number) => {
                  return (
                    <NavModalMessage
                      key={index}
                      messageKey={item.item.id}
                      isResult={item.item.result}
                      shop_id={item.item.shop.item.id}
                      notice_id={item.item.notice.item.id}
                      noticeName={item.item.shop.item.name}
                      noticePeriod={new Date(
                        item.item.notice.item.startsAt,
                      ).toLocaleString()}
                      createdAt={item.item.createdAt}
                      checked={item.item.read}
                      user_id={user_id}
                    />
                  );
                })}
                <div ref={target} className="h-[300px]">
                  {loading && <div>Loading...</div>}
                </div>
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

/*
sss@naver.com
qazwsx1357
*/
