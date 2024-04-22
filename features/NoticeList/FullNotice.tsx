import React, { useState } from 'react';
import Button from '@/shared/@common/ui/Button/Button';
import PaginationBar from '@/pages/test/paginationBar';
import Dropdown from '@/shared/@common/ui/Dropdown/Dropdown';
import Card from '@/shared/@common/ui/Card/Card';
import DetailFilter from './DetailFilter';
import useGetNoticeData from '@/shared/@common/notice/api/useGetNoticeData';

const FullNotice = () => {
  const [showDetailFilter, setShowDetailFilter] = useState(false);
  const handleClick = () => {
    setShowDetailFilter(true);
  };
  const options = [
    { value: '마감임박순', label: '마감임박순' },
    { value: '시급많은순', label: '시급많은순' },
    { value: '시간적은순', label: '시간적은순' },
    { value: '가나다순', label: '가나다순' },
  ];

  const handleSelectOption = () => {};

  const { data } = useGetNoticeData();

  return (
    <div className="flex w-[1440px] py-[60px] px-[238px] flex-col items-start bg-white tracking-wide">
      <div className="flex flex-col gap-10">
        <div className="flex justify-between">
          <p className="text-[28px] font-bold">전체 공고</p>
          <div className="flex gap-3">
            <Dropdown
              title={''}
              options={options}
              onSelect={handleSelectOption}
              defaultValue="마감임박순"
              className="flex h-[30px] p-3 items-center gap-[6px] rounded-[5px]"
            />
            <Button size="small" color="colored" onClick={handleClick}>
              상세 필터
              {showDetailFilter && <DetailFilter />}
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-3 grid-rows-2 gap-4">
          {data &&
            data.items.length > 0 &&
            data.items
              .slice(0, 9)
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
        <PaginationBar />
      </div>
    </div>
  );
};

export default FullNotice;
