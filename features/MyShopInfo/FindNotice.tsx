import Button from '@/shared/@common/ui/Button/Button';
import Card from '@/shared/@common/notice/ui/Card';
import { useRouter } from 'next/router';
import { useState } from 'react';

const RenderNoticeDiv = () => {
  const router = useRouter();
  const [isNotice, setIsNotice] = useState(false);
  const handleWritingNotice = () => {
    /* 공고 작성하는 페이지로 이동시키기 */
    router.push('noticeRegist');
  };

  if (isNotice) {
    return (
      <div className="flex pt-[60px] pb-[120px] px-[238px] flex-col items-start gap-2">
        <div className="flex flex-col items-start gap-8">
          <p className="text-black text-[28px] font-bold">내가 등록한 공고</p>
          <div className="flex flex-col items-start gap-8">
            무한 스크롤 구현하기, api 받아오기
            <div className="flex items-start gap-[14px]">
              {/* <Card />
              <Card />
              <Card /> */}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col items-start gap-8">
        <p className="text-black text-[28px] font-bold">등록한 공고</p>
        <div className="flex w-[964px] py-[60px] px-6 flex-col justify-center items-center gap-6 rounded-xl border border-solid border-gray-20">
          <p className="text-black align-center">공고를 등록해 보세요.</p>
          <Button size="large" color="colored" onClick={handleWritingNotice}>
            공고 등록하기
          </Button>
        </div>
      </div>
    );
  }
};

export default RenderNoticeDiv;
