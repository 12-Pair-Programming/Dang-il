import React from 'react';
import Link from 'next/link';
import Card from '@/shared/@common/notice/ui/Card';
import { ItemData } from './AllNotice';
import useFetch from '@/shared/@common/api/hooks/useFetch';
import noticeAPI from '@/shared/@common/api/noticeAPI';

const CustomNotice = () => {
  const { data, loading, error, execute } = useFetch(() => {
    return noticeAPI.getNoticeList({});
  });

  return (
    <>
      <div className="flex w-full py-[60px] pc: px-auto flex-col items-center bg-purple-10 tracking-wide tablet:pl-8 tablet:items-start tablet:overflow-x-scroll tablet:whitespace-pre tablet:scrollbar-hide mobile:pl-3 mobile:overflow-x-scroll mobile:whitespace-pre mobile:scrollbar-hide mobile:items-start">
        <div className="flex flex-col gap-[31px]">
          <p className="text-[28px] font-bold">맞춤 공고</p>
          <div className="flex gap-4">
            {data &&
              data.items.length > 0 &&
              data.items.slice(0, 3).map((item: ItemData) => (
                <Link href={`/noticeInfo/${item.item.shop.item.id}`}>
                  <Card
                    name={item.item.shop.item.name}
                    imageUrl={item.item.shop.item.imageUrl}
                    address1={`${item.item.shop.item.address1} ${item.item.shop.item.address2}`}
                    startsAt={item.item.startsAt}
                    workhour={item.item.workhour}
                    hourlyPay={item.item.hourlyPay}
                    originalHourlyPay={item.item.shop.item.originalHourlyPay}
                    closed={item.item.closed}
                  />
                </Link>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomNotice;
