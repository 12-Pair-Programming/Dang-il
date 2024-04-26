import Card from '@/shared/@common/notice/ui/Card';
import { useEffect, useState } from 'react';

/**
 * 최근에 본 공고 리스트 컴포넌트
 * recentNotices에 저장된 데이터 6개를 불러옴
 * @returns
 */
const RecentNotices = () => {
  console.log('Recent Notices');
  interface notices {
    name: string;
    address1: string;
    imageUrl: string;
    startsAt: string;
    workhour: number;
    hourlyPay: number;
    originalHourlyPay: number;
    closed: boolean;
  }

  const [recentNotices, setRecentNotices] = useState<notices[]>([]);

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
        {recentNotices
          ?.slice(0, 6)
          .map((notice) => (
            <Card
              key={notice.name}
              name={notice.name}
              imageUrl={notice.imageUrl}
              address1={notice.address1}
              startsAt={notice.startsAt}
              workhour={notice.workhour}
              hourlyPay={notice.hourlyPay}
              originalHourlyPay={notice.originalHourlyPay}
              closed={notice.closed}
            />
          ))}
      </div>
    </div>
  );
};

export default RecentNotices;
