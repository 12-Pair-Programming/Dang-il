import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Input } from '@/shared/@common/ui/Input/Input';
import Button from '@/shared/@common/ui/Button/Button';
import useGetNoticeData from '@/shared/@common/notice/api/useGetNoticeData';

const DetailFilter = () => {
  // 해시태그 기능 구현 중입니다.
  const [clickedItem, setClickedItem] = useState('');
  const [hashtag, setHashtag] = useState<string[]>([]);

  const handleClickItem = (address: string) => {
    if (address.trim() !== '') {
      setClickedItem(address);
      setHashtag((prevhashtag) => [...prevhashtag, address]);
    }
  };

  const handleDeleteTag = (address: string) => {
    setHashtag((prevhashtag) => prevhashtag.filter((tag) => tag !== address));
  };

  const { data } = useGetNoticeData();

  return (
    <div className="flex w-[390px] px-6 py-5 flex-col items-start gap-6 bg-white absolute right-[238px] bottom-[150px] rounded-[10px] z-modal">
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
                    (items, value) =>
                      items.includes(value) ? items : [...items, value],
                    [],
                  )
                  .map((address) => (
                    <button onClick={() => handleClickItem(address)}>
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
                        (hashTags, value) =>
                          hashTags.includes(value)
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
                            onClick={() => handleDeleteTag(tag)}
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
          <Input title="시작일" />
          <hr className="h-[2px] self-stretch bg-gray-10" />
          <div className="flex items-center gap-3">
            <Input title="금액" width="190px" countText="원" />
            <p className="pt-9">이상부터</p>
          </div>
        </div>
      </div>
      <div className="flex gap-[11px]">
        <Button
          size="mediumLarge"
          color="none"
          onClick={() => {}}
          disabled={false}
        >
          초기화
        </Button>
        <Button
          size="mediumLarge"
          color="colored"
          onClick={() => {}}
          disabled={false}
        >
          적용하기
        </Button>
      </div>
    </div>
  );
};

export default DetailFilter;
