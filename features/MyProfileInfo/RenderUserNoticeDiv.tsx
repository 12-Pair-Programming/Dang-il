import Button from '@/shared/@common/ui/Button/Button';
import Table from '@/shared/@common/ui/Table/Table';
import { useRouter } from 'next/router';
import { useState } from 'react';

const RenderNoticeDiv = () => {
  const router = useRouter();
  const [isNotice, setIsNotice] = useState(true);
  const handleWritingNotice = () => {
    /* 공고 작성하는 페이지로 이동시키기 */
    router.push('/noticeList');
  };

  if (isNotice) {
    return (
      <div className="flex pt-[60px] pb-[120px] px-[238px] flex-col items-start gap-2">
        <div className="flex flex-col items-start gap-8">
          <p className="text-black text-[28px] font-bold">신청 내역</p>
          <div className="flex flex-col items-start gap-8">
            <Table />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col items-start gap-8">
        <p className="text-black text-[28px] font-bold">신청 내역</p>
        <div className="flex w-[964px] py-[60px] px-6 flex-col justify-center items-center gap-6 rounded-xl border border-solid border-gray-20">
          <p className="text-black align-center">아직 신청 내역이 없어요.</p>
          <Button size="large" color="colored" onClick={handleWritingNotice}>
            공고 보러가기
          </Button>
        </div>
      </div>
    );
  }
};

export default RenderNoticeDiv;
