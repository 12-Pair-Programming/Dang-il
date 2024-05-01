import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
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
    id: string;
    startsAt: string;
    workhour: number;
    hourlyPay: number;
    closed: boolean;
  };
}

export interface Data {
  offset: number;
  limit: number;
  address: [];
  count: number;
  items: [item: ItemData];
}

export interface FilterValues {
  clickedAddress?: string;
  hashtag?: string[] | undefined;
  startDate?: Date;
  money?: number;
}

const ITEM_PER_PAGE = 6;

const SORT_OPTIONS = [
  { value: 'time', label: '마감임박순' },
  { value: 'pay', label: '시급많은순' },
  { value: 'hour', label: '시간적은순' },
  { value: 'shop', label: '가나다순' },
];

const AllNotice = () => {
  const router = useRouter();
  const value: string = router.query.value as string;
  const [showDetailFilter, setShowDetailFilter] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const cardOffset = (currentPage - 1) * ITEM_PER_PAGE;
  const [data, setData] = useState<Data>();
  const [keyword, setKeyword] = useState(value);
  const [sortedData, setSortedData] = useState<string>();
  const [filterValues, setFilterValues] = useState<FilterValues>({
    clickedAddress: '',
    hashtag: [],
    startDate: undefined,
    money: undefined,
  });

  useEffect(() => {
    setKeyword(value);
  }, [value]);

  let filterOptions = 0;

  if (filterValues.hashtag) {
    filterOptions += filterValues.hashtag.length;
  }
  if (filterValues.startDate) {
    filterOptions++;
  }

  if (filterValues.money) {
    filterOptions++;
  }

  useEffect(() => {
    const getNoticeList = async () => {
      const data = await noticeAPI.getNoticeList({
        offset: cardOffset,
        limit: ITEM_PER_PAGE,
        address: filterValues.clickedAddress,
        keyword: keyword,
        startsAtGte: filterValues.startDate?.toISOString(),
        hourlyPayGte: filterValues.money,
        sort: sortedData,
      });

      setData(data.data);
    };

    getNoticeList();
  }, [
    currentPage,
    sortedData,
    filterValues.clickedAddress,
    keyword,
    filterValues.startDate,
    filterValues.money,
  ]);

  const handleSelectOption = (value: string) => {
    setSortedData(value);
  };

  const handleClickFilter = (filterValues: FilterValues) => {
    setFilterValues(filterValues);
  };

  const handleFilterButtonClick = () => {
    setShowDetailFilter(true);
  };

  return (
    <div className="flex flex-col w-full py-[60px] px-auto items-center bg-white tracking-wide mobile:px-4">
      <div className="flex flex-col gap-10 px-4 w-[983px] tablet:w-[678px] mobile:max-w-[520px]">
        <div className="flex justify-between mobile:flex-col mobile: gap-4">
          <div className="w-[291px]">
            <p className="text-[28px] font-bold">전체 공고</p>
          </div>
          <div className="flex gap-3">
            <Dropdown
              title={''}
              width="138px"
              options={SORT_OPTIONS}
              onSelect={handleSelectOption}
              defaultValue="마감임박순"
            />
            <div className="relative">
              <Button
                size="mediumSmall"
                color="colored"
                onClick={handleFilterButtonClick}
              >
                상세 필터 ({filterOptions.toString()})
              </Button>
              <FilterModal
                isOpen={showDetailFilter}
                setIsOpen={setShowDetailFilter}
                noticeData={data}
                onClickFilter={handleClickFilter}
              />
            </div>
          </div>
        </div>
        <div className="w-full grid grid-cols-3 grid-rows-2 gap-4 tablet:grid-cols-2 mobile:grid-cols-2 mobile: g-3">
          {data &&
            data.items.length > 0 &&
            data.items.map((item: ItemData) => (
              <Link
                href={`/noticeInfo?shopId=${item.item.shop.item.id}&noticeId=${item.item.id}`}
              >
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
              </Link>
            ))}
        </div>
        {data && (
          <Pagination
            totalPage={data.count}
            limit={data.count / ITEM_PER_PAGE}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        )}
      </div>
    </div>
  );
};

export default AllNotice;
