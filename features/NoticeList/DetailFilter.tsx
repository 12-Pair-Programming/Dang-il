import React from 'react';
import Image from 'next/image';
import { Input } from '@/shared/@common/ui/Input/Input';
import Button from '@/shared/@common/ui/Button/Button';

const DetailFilter = () => {
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
          <div className="w-[350px] h-[258px] rounded-[6px] border border-gray-200"></div>
          <div></div>
        </div>
        <div className="flex w-[350px] flex-col items-start gap-6">
          <hr className="h-[2px] self-stretch bg-gray-10" />
          <Input title="시작일" />
          <hr className="h-[2px] self-stretch bg-gray-10" />
          <Input title="금액" />
        </div>
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
