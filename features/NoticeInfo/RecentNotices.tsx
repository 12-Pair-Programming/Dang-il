import Link from 'next/link';
import Card from '@/shared/@common/notice/ui/Card';
import { useEffect, useState } from 'react';
import isPastNotice from '@/shared/@common/notice/utils/isPastNotice';

interface props {
  noticeId: string;
}

/**
 * 최근에 본 공고 리스트 컴포넌트
 * recentNotices에 저장된 데이터 6개를 불러옴
 * @returns
 */
const RecentNotices = ({ noticeId }: props) => {
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
    id: string;
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
  }, [noticeId]);

  return (
    <div className="w-[983px] tablet:w-[680px] mobile:max-w-[351px] mt-[60px] mb-3 mx-[238px] mobile:mx-[50px]">
      <div>
        <p className="text-[28px] font-bold">최근에 본 공고</p>
      </div>
      <div className="mt-8 gap-[14px] grid grid-cols-3 tablet:grid-cols-2 mobile:grid-cols-2 ">
        {recentNotices &&
          recentNotices?.slice(0, 6).map((notice) => (
            <Link
              href={`/noticeInfo?shopId=${notice.shop.item.id}&noticeId=${notice.id}`}
              onClick={(e) => {
                if (notice.closed === true || isPastNotice(notice.startsAt)) {
                  e.preventDefault();
                }
              }}
            >
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
                isPastNotice={isPastNotice(notice.startsAt)}
              />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default RecentNotices;
