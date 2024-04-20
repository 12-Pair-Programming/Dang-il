import React from 'react';
import Image from 'next/image';
import Button from '@/shared/Button/Button';
import PaginationBar from '@/pages/test/paginationBar';

const FullNotice = () => {
  const handleClick = () => {
    () => {};
  };
  return (
    <div className="flex w-[1440px] py-[60px] px-[238px] flex-col items-start bg-white tracking-wide">
      <div className="flex flex-col gap-10">
        <div className="flex justify-between">
          <label className="text-[28px] font-bold">맞춤 공고</label>
          <div className="flex gap-3">
            <Button
              size="small"
              color="none"
              onClick={handleClick}
              content="마감임박순"
            >
              {/* <Image
                src="/images/poligon.svg"
                alt="아래 화살표 아이콘"
                width={10}
                height={10}
              /> */}
            </Button>
            <Button
              size="small"
              color="colored"
              onClick={handleClick}
              content="상세 필터"
            ></Button>
          </div>
        </div>
        <div className="grid grid-cols-3 grid-rows-2 gap-4">
          <div className="w-[312px] h-[349px] bg-purple-10" />
          <div className="w-[312px] h-[349px] bg-purple-10" />
          <div className="w-[312px] h-[349px] bg-purple-10" />
          <div className="w-[312px] h-[349px] bg-purple-10" />
          <div className="w-[312px] h-[349px] bg-purple-10" />
          <div className="w-[312px] h-[349px] bg-purple-10" />
          {/* <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card /> */}
        </div>
        <PaginationBar />
      </div>
    </div>
  );
};

export default FullNotice;
