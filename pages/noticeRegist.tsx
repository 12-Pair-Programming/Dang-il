import { Input } from '@/shared/@common/ui/Input/Input';
import Image from 'next/image';
import Calendar from '@/features/NoticeRegist/Calendar';
import { useState } from 'react';
import { useInput } from '@/shared/@common/ui/Input/hook/inputHook';
import Button from '@/shared/@common/ui/Button/Button';
import { useRouter } from 'next/router';
import { useTextarea } from '@/shared/@common/ui/Textarea/hook/textareaHook';
import { Textarea } from '@/shared/@common/ui/Textarea/Textarea';
import { jwtDecode } from 'jwt-decode';
import userAPI from '@/shared/@common/api/userAPI';
import noticeAPI from '@/shared/@common/api/noticeAPI';
import Footer from '@/shared/@common/ui/Footer/Footer';
import NavigationBar from '@/shared/@common/ui/Nav/NavigationBar';

const noticeRegist = () => {
  const router = useRouter();

  const [selectedDate, setSelectedDate] = useState<String | null>('');

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

  const handleWritingNotice = async () => {
    const token = localStorage.getItem('token');
    const decodedToken = token ? jwtDecode(token) : null;
    const userId = (decodedToken as any)?.userId || '';
    const hourlyPayNumber = Number(hourlypay.value);
    const workingHour = Number(hour.value);
    try {
      const userData = await userAPI.getUserData(userId);
      shopId = userData.data.item.shop.item.id;
      if (hourlyPayNumber && selectedDate && workingHour) {
        const noticeData = await noticeAPI.post(shopId, {
          hourlyPay: hourlyPayNumber,
          startsAt: selectedDate,
          workhour: workingHour,
          description: description.value,
        });
        if (noticeData) {
          alert('등록이 완료되었습니다');
          router.push('/myShopInfo');
        }
      } else {
        alert('필수 입력 내용을 입력해주세요');
      }
    } catch (error) {
      console.error('Notice Regist Failed', error);
    }
  };

  const handleDateChange = (date: Date | null) => {
    const formattedDate = date.toISOString().replace('.000Z', 'Z');
    setSelectedDate(formattedDate);
  };

  const hourlypay = useInput('');
  const hour = useInput('');
  const description = useTextarea('');

  let shopId = '';

  return (
    <div className="bg-gray-05">
      <NavigationBar />
      <div className="flex py-[60px] m-auto w-[983px] h-[100vh] px-[auto] flex-col items-center gap-2 bg-gray-05">
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
          <div className="flex w-[935px] flex-col items-start gap-2">
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
      <Footer />
    </div>
  );
};

export default noticeRegist;

/*
  handleHourlypay는 시급을 입력하면 값이 지속적으로 변겨되는 구조.
*/
