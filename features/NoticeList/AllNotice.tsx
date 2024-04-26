import React, { useEffect, useState } from 'react';
import Button from '@/shared/@common/ui/Button/Button';
import Pagination from '@/shared/@common/ui/Pagination/Pagination';
import Dropdown from '@/shared/@common/ui/Dropdown/Dropdown';
import Card from '@/shared/@common/notice/ui/Card';
import FilterModal from './FilterModal';
import noticeAPI from '@/shared/@common/api/noticeAPI';

export interface ItemData {
  item: {
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
  };
}

interface Data {
  count: number;
  items: [item: ItemData];
}

const AllNotice = () => {
  const [showDetailFilter, setShowDetailFilter] = useState(false);
  const [showCard, setShowCard] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const cardOffset = (currentPage - 1) * showCard;
  const [noticeData, setNoticeData] = useState();
  const [data, setData] = useState<Data>();

  const API = async () => {
    const data = await noticeAPI.getNoticeList({ sort: noticeData });
    setData(data.data);
  };

  useEffect(() => {
    API();
  }, [noticeData]);

  const handleClick = () => {
    setShowDetailFilter(true);
  };

  const options = [
    { value: 'time', label: '마감임박순' },
    { value: 'pay', label: '시급많은순' },
    { value: 'hour', label: '시간적은순' },
    { value: 'shop', label: '가나다순' },
  ];

  const handleSelectOption = (value: any) => {
    setNoticeData(value);
  };

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
                  key={item.item.shop.item.id}
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
        {data && (
          <Pagination
            totalPage={data.count}
            limit={10}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        )}
      </div>
    </div>
  );
};

export default AllNotice;
