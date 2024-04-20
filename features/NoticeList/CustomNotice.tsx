import React from 'react';

const CustomNotice = () => {
  return (
    <div className="flex w-[1440px] py-[60px] px-[238px] flex-col items-start bg-purple-10 tracking-wide">
      <div className="flex flex-col gap-[31px]">
        <label className="text-[28px] font-bold">맞춤 공고</label>
        <div className="flex gap-4">
          <div className="w-[312px] h-[349px] bg-white" />
          <div className="w-[312px] h-[349px] bg-white" />
          <div className="w-[312px] h-[349px] bg-white" />
          {/* <Card />
          <Card />
          <Card /> */}
        </div>
      </div>
    </div>
  );
};

export default CustomNotice;
