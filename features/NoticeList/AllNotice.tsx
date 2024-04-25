import React, { useState } from 'react';
import Button from '@/shared/@common/ui/Button/Button';
import Pagination from '@/shared/@common/ui/Pagination/Pagination';
import Dropdown from '@/shared/@common/ui/Dropdown/Dropdown';
import Card from '@/shared/@common/notice/ui/Card';
import useGetNoticeData from '@/shared/@common/notice/api/useGetNoticeData';
import { FilterModal } from './FilterModal';

export interface ItemData {
  shop: {
    item: {
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

const AllNotice = () => {
  const [showDetailFilter, setShowDetailFilter] = useState(false);
  const [showCard, setShowCard] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const cardOffset = (currentPage - 1) * showCard;

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
              width="130px"
              options={options}
              onSelect={handleSelectOption}
              defaultValue="마감임박순"
            />
            <div className="relative">
              <Button size="mediumSmall" color="colored" onClick={handleClick}>
                상세 필터
              </Button>
              <FilterModal
                isOpen={showDetailFilter}
                setIsOpen={setShowDetailFilter}
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 grid-rows-2 gap-4">
          {data &&
            data.items.length > 0 &&
            data.items
              .slice(cardOffset, cardOffset + showCard)
              .map((item: ItemData) => (
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
        {data && data.count && (
          <Pagination
            totalPage={Math.ceil(data.count / 2)}
            limit={2}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        )}
      </div>
    </div>
  );
};

export default AllNotice;
