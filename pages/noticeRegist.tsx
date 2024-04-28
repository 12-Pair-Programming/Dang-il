import { Input } from '@/shared/@common/ui/Input/Input';
import Image from 'next/image';
import Calendar from '@/features/NoticeRegist/Calendar';
import { useState } from 'react';
import { useInput } from '@/shared/@common/ui/Input/hook/inputHook';
import Button from '@/shared/@common/ui/Button/Button';
import { useRouter } from 'next/router';
import { useTextarea } from '@/shared/@common/ui/Textarea/hook/textareaHook';
import { Textarea } from '@/shared/@common/ui/Textarea/Textarea';

const noticeRegist = () => {
  const router = useRouter();

  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  const handleClose = () => {
    router.push('myShopInfo');
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data = {
      hourlypay: hourlypay.value,
      startsAt: selectedDate,
      workhour: hour.value,
      description: description.value,
    };
    console.log(data);
  };

  const handleWritingNotice = () => {
    router.push('/myShopInfo');
  };

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const hourlypay = useInput('');
  const hour = useInput('');
  const description = useTextarea('');

  return (
    <>
      <div className="flex py-[60px] px-[238px] flex-col items-start gap-2 bg-gray-05">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-8"
        >
          <div className="flex justify-between items-center self-stretch max-w-[1440px]">
            <p className="text-black text-[28px] font-bold">공고 등록</p>
            <button onClick={handleClose}>
              <Image
                src={`/images/close.svg`}
                alt="닫기"
                width={32}
                height={32}
              />
            </button>
          </div>
          <div className="inline-flex items-start gap-5">
            <Input
              title="시급*"
              placeholder="입력"
              type="text"
              countText="원"
              width="300px"
              onChange={hourlypay.handleInput}
            />
            <Calendar onDateChange={handleDateChange} />
            <Input
              title="업무 시간*"
              placeholder="입력"
              type="text"
              countText="시간"
              width="300px"
              onChange={hour.handleInput}
            />
          </div>
          <div className="flex w-[964px] flex-col items-start gap-2">
            <Textarea
              title="공고 설명"
              placeholder="설명을 작성해 주세요"
              width="100%"
              onChange={description.handleTextarea}
            />
          </div>
          <div className="items-center flex justify-center gap-2">
            <Button size="large" color="colored" onClick={handleWritingNotice}>
              등록하기
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default noticeRegist;

/*
  handleHourlypay는 시급을 입력하면 값이 지속적으로 변겨되는 구조.
*/
