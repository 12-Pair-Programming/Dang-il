import React, { useState } from 'react';
import Image from 'next/image';
import { useInput } from '@/shared/@common/ui/input/hook/inputHook';
import { Input } from '@/shared/@common/ui/input/Input';
import { SetState } from '@/shared/@common/types/helper';
import Button from '@/shared/@common/ui/Button/Button';
import FilterCalendar from './FilterCalendar';
import { FilterValues, ItemData } from './AllNotice';
import { Data } from './AllNotice';

interface DetailFilterProps {
  setIsOpen: SetState<boolean>;
  noticeData: Data | undefined;
  onClickFilter: (filterValues: FilterValues) => void;
}

const DetailFilter = ({
  setIsOpen,
  noticeData,
  onClickFilter,
}: DetailFilterProps) => {
  const [clickedAddress, setClickedAddress] = useState('');
  const [hashtag, setHashtag] = useState<string[]>([]);
  const [startDate, setStartDate] = useState<Date>();
  const money = useInput('');

  const handleClickAddress = (address: string) => {
    if (address.trim() !== '') {
      setClickedAddress(address);
      setHashtag((prevHashtag) => [...prevHashtag, address]);
    }
  };

  const handleFilterTag = (address: string) => {
    setHashtag((prevHashtag) => prevHashtag.filter((tag) => tag !== address));
  };

  const handleDateChange = (date: Date) => {
    setStartDate(date);
  };

  const handleResetValue = () => {
    setHashtag([]);
    setStartDate(undefined);
    money.handleReset();
  };

  return (
    <>
      <div className="flex justify-between items-center self-stretch mobile:w-[350px] mobile:self-auto">
        <p className="text-5 font-bold">상세 필터</p>
        <Image
          src={`/images/close.svg`}
          alt="필터창 닫힘 아이콘"
          onClick={() => setIsOpen(false)}
          className="cursor-pointer"
          width={24}
          height={24}
        />
      </div>
      <div>
        <div className="flex flex-col items-start gap-3 mobile:w-[350px]">
          <p>위치</p>
          <>
            <div className="flex flex-col gap-5 items-start flex-wrap p-6 flex-start w-[350px] h-[258px] rounded-[6px] border border-gray-300">
              {noticeData &&
                noticeData.items.length > 0 &&
                noticeData.items
                  .map((item: ItemData) => item.item.shop.item.address1)
                  .filter((value, index, self) => self.indexOf(value) === index)
                  .map((address: string) => (
                    <button onClick={() => handleClickAddress(address)}>
                      {address}
                    </button>
                  ))}
            </div>
            <div className="flex flex-col items-start gap-2">
              <div className="flex items-center gap-2 flex-wrap">
                {hashtag.length > 0 && (
                  <>
                    {hashtag
                      .reduce(
                        (hashTags: string[], value: string) =>
                          hashTags.some((hashtag) => hashtag === value)
                            ? hashTags
                            : [...hashTags, value],
                        [],
                      )
                      .map((tag) => (
                        <div className="flex px-[6px] py-[10px] justify-center items-center gap-1 rounded-[20px] bg-purple-10">
                          <p className="text-primary font-bold">{tag}</p>
                          <Image
                            src={`/images/purpleClose.png`}
                            alt="창 닫기 아이콘"
                            className="cursor-pointer"
                            onClick={() => handleFilterTag(tag)}
                            height={24}
                            width={24}
                          />
                        </div>
                      ))}
                  </>
                )}
              </div>
            </div>
          </>
        </div>
        <div className="flex w-[350px] flex-col items-start gap-6">
          <hr className="h-[2px] self-stretch bg-gray-10 mt-6" />
          <FilterCalendar selected={startDate} onChange={handleDateChange} />
          <hr className="h-[2px] self-stretch bg-gray-10" />
          <div className="flex items-center gap-3">
            <Input
              title="금액"
              width="190px"
              countText="원"
              type="number"
              placeholder="값을 입력해주세요"
              onChange={money.handleInput}
              value={money.value}
            />
            <p className="pt-9">이상부터</p>
          </div>
        </div>
      </div>
      <div className="flex gap-[11px]">
        <Button
          size="mediumLarge"
          color="none"
          onClick={() => {
            handleResetValue();
          }}
          disabled={false}
        >
          초기화
        </Button>
        <Button
          size="mediumLarge"
          color="colored"
          onClick={() => {
            onClickFilter({
              clickedAddress,
              hashtag,
              startDate,
              money: Number(money.value),
            });
          }}
          disabled={false}
        >
          적용하기
        </Button>
      </div>
    </>
  );
};

export default DetailFilter;
