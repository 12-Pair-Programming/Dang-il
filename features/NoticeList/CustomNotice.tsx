import React from 'react';
import Card from '@/shared/@common/ui/Card/Card';
import useGetNoticeData from '@/shared/@common/notice/api/useGetNoticeData';

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
              .map((item) => item.item)
              .map((item) => (
                <Card
                  name={item.shop.item.name}
                  imageUrl={item.shop.item.imageUrl}
                  address1={`${item.shop.item.address1} ${item.shop.item.address2}`}
                  startsAt={item.startsAt}
                  workhour={item.workhour}
                  hourlyPay={item.hourlyPay}
                  originalHourlyPay={item.shop.item.originalHourlyPay}
                  closed={item.closed}
                />
              ))}
        </div>
      </div>
    </div>
  );
};

export default CustomNotice;
