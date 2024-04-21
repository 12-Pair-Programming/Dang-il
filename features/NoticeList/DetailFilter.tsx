import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Input } from '@/shared/@common/ui/Input/Input';
import Button from '@/shared/@common/ui/Button/Button';
import useGetNoticeData from '@/shared/@common/notice/api/useGetNoticeData';

const DetailFilter = () => {
  // 해시태그 기능 구현 중입니다.
  const [clickedItem, setClickItem] = useState('');
  const [hashtag, setHashtag] = useState<string[]>([]);

  const handleClickItem = (item: string) => {
    setClickItem(item);
    setHashtag((prevHashtags) => [...prevHashtags, item]);
  };

  const { data } = useGetNoticeData();

  return (
    <div className="flex w-[390px] px-6 py-5 flex-col items-start gap-6 bg-white absolute right-[238px] bottom-[150px] rounded-[10px]">
      <div className="flex justify-between items-center self-stretch">
        <h3 className="text-5 font-bold">상세 필터</h3>
        <Image
          src="/images/close.svg"
          alt="필터창 닫힘 아이콘"
          width={24}
          height={24}
        />
      </div>
      <div>
        <div className="flex flex-col items-start gap-3">
          <p>위치</p>
          <>
            <div className="flex flex-col gap-5 items-start flex-wrap p-6 flex-start w-[350px] h-[258px] rounded-[6px] border border-gray-200">
              {data &&
                data.items.length > 0 &&
                data.items
                  .map((item) => item.item.shop.item.address1)
                  .reduce(
                    (acc, value) =>
                      acc.includes(value) ? acc : [...acc, value],
                    [],
                  )
                  .map((address1) => <button>{address1}</button>)}
            </div>
            <div className="flex flex-col items-start gap-2">
              <div className="flex items-center gap-2">
                <div className="flex px-[6px] py-[10px] justify-center items-center gap-1 rounded-[20px] bg-purple-10">
                  <p className="text-primary font-bold">
                    {hashtag.join('')}서울시 강남구
                  </p>
                  <Image
                    src="/images/purpleClose.png"
                    alt="창 닫기 아이콘"
                    height={24}
                    width={24}
                  />
                </div>
                <div className="flex px-[6px] py-[10px] justify-center items-center gap-1 rounded-[20px] bg-purple-10">
                  <p className="text-primary font-bold">
                    {hashtag.join('')}서울시 광진구
                  </p>
                  <Image
                    src="/images/purpleClose.png"
                    alt="창 닫기 아이콘"
                    height={24}
                    width={24}
                  />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex px-[6px] py-[10px] justify-center items-center gap-1 rounded-[20px] bg-purple-10">
                  <p className="text-primary font-bold">
                    {hashtag.join('')}서울시 강동구
                  </p>
                  <Image
                    src="/images/purpleClose.png"
                    alt="창 닫기 아이콘"
                    height={24}
                    width={24}
                  />
                </div>
                <div className="flex px-[6px] py-[10px] justify-center items-center gap-1 rounded-[20px] bg-purple-10">
                  <p className="text-primary font-bold">
                    {hashtag.join('')}서울시 동대문구
                  </p>
                  <Image
                    src="/images/purpleClose.png"
                    alt="창 닫기 아이콘"
                    height={24}
                    width={24}
                  />
                </div>
              </div>
            </div>
          </>
        </div>
        <div className="flex w-[350px] flex-col items-start gap-6">
          <hr className="h-[2px] self-stretch bg-gray-10 mt-6" />
          <Input title="시작일" />
          <hr className="h-[2px] self-stretch bg-gray-10" />
          <Input title="금액" />
        </div>
        {hashtag.join('')}
      </div>
      <div className="flex gap-2">
        <Button
          size="medium"
          color="none"
          onClick={() => {}}
          content="초기화"
          disabled={false}
        />
        <Button
          size="medium"
          color="colored"
          onClick={() => {}}
          content="적용하기"
          disabled={false}
        />
      </div>
    </div>
  );
};

export default DetailFilter;
