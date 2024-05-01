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
  const [count, setCount] = useState(10);

  const newData: Item[] = [
    {
      item: {
        id: '473297ee-68e5-4ed5-906c-17de8b040adb',
        result: 'canceled',
        read: false,
        application: {
          href: 'exampleApplicationHref1',
        },
        notice: {
          item: {
            id: '473297ee-68e5-4ed5-906c-17de8b040adb',
            startsAt: '2024-05-10T09:00:00.000Z',
            description: '공고 설명 1',
          },
        },
        shop: {
          item: {
            id: '7cd020d9-c2b4-4cdc-93f3-f0cb412b914f',
            name: '솥뚜껑 왕삼겹',
          },
        },
        createdAt: new Date('2024-04-30T02:28:54.258Z'),
      },
    },
    {
      item: {
        id: '18b584c8-a3d0-4a4f-b606-ff08ad560768',
        result: 'canceled',
        read: false,
        application: {
          href: 'exampleApplicationHref2',
        },
        notice: {
          item: {
            id: '18b584c8-a3d0-4a4f-b606-ff08ad560768',
            startsAt: '2024-05-11T09:00:00.000Z',
            description: '공고 설명 2',
          },
        },
        shop: {
          item: {
            id: 'bc386cfb-4b05-4b3a-acb7-6fd787b3a53d',
            name: '우레옥',
          },
        },
        createdAt: new Date('2024-04-30T02:28:54.258Z'),
      },
    },
    // 나머지 데이터 추가
    {
      item: {
        id: '535f38e7-c611-4ea5-a533-c518ac62ecb3',
        result: 'canceled',
        read: false,
        application: {
          href: 'exampleApplicationHref3',
        },
        notice: {
          item: {
            id: '535f38e7-c611-4ea5-a533-c518ac62ecb3',
            startsAt: '2024-05-12T09:00:00.000Z',
            description: '공고 설명 3',
          },
        },
        shop: {
          item: {
            id: 'ee742532-e127-4384-a4ad-868eef325c02',
            name: '땡깡김밥',
          },
        },
        createdAt: new Date('2024-04-30T02:28:54.258Z'),
      },
    },
    // 나머지 데이터 추가
    {
      item: {
        id: '11eb7ed0-88db-4060-b59d-3543e1cfeb53',
        result: 'canceled',
        read: true,
        application: {
          href: 'exampleApplicationHref4',
        },
        notice: {
          item: {
            id: '11eb7ed0-88db-4060-b59d-3543e1cfeb53',
            startsAt: '2024-05-13T09:00:00.000Z',
            description: '공고 설명 4',
          },
        },
        shop: {
          item: {
            id: '03246e1c-061b-4047-baa8-0edc048718c5',
            name: '통통 순대',
          },
        },
        createdAt: new Date('2024-04-30T02:28:54.258Z'),
      },
    },
    // 나머지 데이터 추가
    {
      item: {
        id: 'f2f09b1c-69c8-434c-a253-c2f86a28d8a1',
        result: 'canceled',
        read: true,
        application: {
          href: 'exampleApplicationHref5',
        },
        notice: {
          item: {
            id: 'f2f09b1c-69c8-434c-a253-c2f86a28d8a1',
            startsAt: '2024-05-14T09:00:00.000Z',
            description: '공고 설명 5',
          },
        },
        shop: {
          item: {
            id: '79ccf6cc-be7a-4985-bf1b-712acebd7a30',
            name: '만사성 중화요리',
          },
        },
        createdAt: new Date('2024-04-30T02:28:54.258Z'),
      },
    },
    // 나머지 데이터 추가
    {
      item: {
        id: '66961977-d166-473c-82a8-49f7772d3fad',
        result: 'canceled',
        read: true,
        application: {
          href: 'exampleApplicationHref6',
        },
        notice: {
          item: {
            id: '66961977-d166-473c-82a8-49f7772d3fad',
            startsAt: '2024-05-15T09:00:00.000Z',
            description: '공고 설명 6',
          },
        },
        shop: {
          item: {
            id: 'bc386cfb-4b05-4b3a-acb7-6fd787b3a53d',
            name: '우레옥',
          },
        },
        createdAt: new Date('2024-04-30T02:28:54.258Z'),
      },
    },
    // 나머지 데이터 추가
    {
      item: {
        id: '8c7ba816-839a-43d0-a2d9-b257884b5e5d',
        result: 'canceled',
        read: false,
        application: {
          href: 'exampleApplicationHref7',
        },
        notice: {
          item: {
            id: '8c7ba816-839a-43d0-a2d9-b257884b5e5d',
            startsAt: '2024-05-16T09:00:00.000Z',
            description: '공고 설명 7',
          },
        },
        shop: {
          item: {
            id: 'c0046d67-84b1-4f18-bb35-3cb1f2108ebd',
            name: '냉면 맛집',
          },
        },
        createdAt: new Date('2024-04-30T02:28:54.258Z'),
      },
    },
    // 나머지 데이터 추가
    {
      item: {
        id: '5bc2f2c9-0823-4d71-92bd-a6d05abff8da',
        result: 'canceled',
        read: false,
        application: {
          href: 'exampleApplicationHref8',
        },
        notice: {
          item: {
            id: '5bc2f2c9-0823-4d71-92bd-a6d05abff8da',
            startsAt: '2024-05-17T09:00:00.000Z',
            description: '공고 설명 8',
          },
        },
        shop: {
          item: {
            id: 'bf4015a7-2cdb-4e73-be0e-5d1feba9adc2',
            name: '통일희망집',
          },
        },
        createdAt: new Date('2024-04-30T02:28:54.258Z'),
      },
    },
    // 나머지 데이터 추가
    {
      item: {
        id: 'c116b76d-c8f0-4282-ad9d-d855b1d549ca',
        result: 'canceled',
        read: false,
        application: {
          href: 'exampleApplicationHref9',
        },
        notice: {
          item: {
            id: 'c116b76d-c8f0-4282-ad9d-d855b1d549ca',
            startsAt: '2024-05-18T09:00:00.000Z',
            description: '공고 설명 9',
          },
        },
        shop: {
          item: {
            id: 'c0046d67-84b1-4f18-bb35-3cb1f2108ebd',
            name: '냉면 맛집',
          },
        },
        createdAt: new Date('2024-04-30T02:28:54.258Z'),
      },
    },
    // 나머지 데이터 추가
    {
      item: {
        id: '647e3699-b0e5-4831-aa91-ef94913e23f5',
        result: 'canceled',
        read: false,
        application: {
          href: 'exampleApplicationHref10',
        },
        notice: {
          item: {
            id: '647e3699-b0e5-4831-aa91-ef94913e23f5',
            startsAt: '2024-05-19T09:00:00.000Z',
            description: '공고 설명 10',
          },
        },
        shop: {
          item: {
            id: 'ab434b98-e9a7-4e5a-b841-cd54d4e73bbb',
            name: '토끼',
          },
        },
        createdAt: new Date('2024-04-30T02:28:54.258Z'),
      },
    },
  ];
  console.log(newData);

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
        //setCount(response.data.count);
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
                {newData.map((item: Item, index: number) => {
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
