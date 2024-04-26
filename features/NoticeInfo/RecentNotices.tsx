import Card from '@/shared/@common/notice/ui/Card';
import { useEffect, useState } from 'react';

/**
 * 최근에 본 공고 리스트 컴포넌트
 * recentNotices에 저장된 데이터 6개를 불러옴
 * @returns
 */
const RecentNotices = () => {
  interface ItemData {
    shop: {
      item: {
        id: string;
        name: string;
        imageUrl: string;
        address1: string;
        address2: string;
        originalHourlyPay: number;
      };
    };
    startsAt: string;
    workhour: number;
    hourlyPay: number;
    closed: boolean;
  }

  const [recentNotices, setRecentNotices] = useState<ItemData[]>([]);

  useEffect(() => {
    const storedData = localStorage.getItem('recentNotices');

    if (storedData) {
      setRecentNotices(JSON.parse(storedData));
    }
  }, []);

  return (
    <div className="w-[983px] mt-[60px] mb-3 mx-[238px]">
      <div>
        <p className="text-[28px] font-bold">최근에 본 공고</p>
      </div>
      <div className="mt-8 flex gap-[14px] flex-wrap">
        {recentNotices &&
          recentNotices
            ?.slice(0, 6)
            .map((notice) => (
              <Card
                key={notice.shop.item.id}
                name={notice.shop.item.name}
                imageUrl={notice.shop.item.imageUrl}
                address1={notice.shop.item.address1}
                startsAt={notice.startsAt}
                workhour={notice.workhour}
                hourlyPay={notice.hourlyPay}
                originalHourlyPay={notice.shop.item.originalHourlyPay}
                closed={notice.closed}
              />
            ))}
      </div>
    </div>
  );
};

export default RecentNotices;
