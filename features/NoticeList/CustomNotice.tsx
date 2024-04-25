import React from 'react';
import Card from '@/shared/@common/notice/ui/Card';
import useGetNoticeData from '@/shared/@common/notice/api/useGetNoticeData';
import { ItemData } from './AllNotice';

const CustomNotice = () => {
  const { data } = useGetNoticeData();

  return (
    <div className="flex w-[1440px] py-[60px] px-[238px] flex-col items-start bg-purple-10 tracking-wide">
      <div className="flex flex-col gap-[31px]">
        <p className="text-[28px] font-bold">맞춤 공고</p>
        <div className="flex gap-4">
          {data &&
            data.items.length > 0 &&
            data.items
              .slice(0, 3)
              .map((item: ItemData) => (
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
              ))}
        </div>
      </div>
    </div>
  );
};

export default CustomNotice;
