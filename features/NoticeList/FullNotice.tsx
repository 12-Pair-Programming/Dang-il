import React from 'react';
import Button from '@/shared/@common/ui/Button/Button';
import PaginationBar from '@/pages/test/paginationBar';
import Dropdown from '@/shared/@common/ui/Dropdown/Dropdown';

const FullNotice = () => {
  const handleClick = () => {
    () => {};
  };
  const options = [
    { value: '마감임박순', label: '마감임박순' },
    { value: '시급많은순', label: '시급많은순' },
    { value: '시간적은순', label: '시간적은순' },
    { value: '가나다순', label: '가나다순' },
  ];

  const handleSelectOption = () => {};

  return (
    <div className="flex w-[1440px] py-[60px] px-[238px] flex-col items-start bg-white tracking-wide">
      <div className="flex flex-col gap-10">
        <div className="flex justify-between">
          <label className="text-[28px] font-bold">맞춤 공고</label>
          <div className="flex gap-3">
            <Dropdown
              title={''}
              options={options}
              onSelect={handleSelectOption}
              defaultValue="마감임박순"
              className="flex h-[30px] p-3 items-center gap-[6px] rounded-[5px]"
            />
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
