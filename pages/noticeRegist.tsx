import { Input } from '@/shared/@common/ui/Input/Input';
import Image from 'next/image';

const noticeRegist = () => {
  return (
    <>
      <div className="flex py-[60px] px-[238px] flex-col items-start gap-2">
        <div className="flex flex-col items-center gap-8">
          <div className="flex justify-between items-center self-stretch">
            <p className="text-black text-[28px] font-bold">공고 등록</p>
            <Image
              src={`/images/close.svg`}
              alt="닫기"
              width={32}
              height={32}
            />
          </div>
          <div className="inline-flex items-start gap-5">
            <Input
              title="시급*"
              placeholder="입력"
              type="text"
              countText="원"
              onChange={handleHourlyPay}
            ></Input>
          </div>
        </div>
      </div>
    </>
  );
};

export default noticeRegist;
