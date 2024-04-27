import { Input } from '@/shared/@common/ui/Input/Input';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useInput } from '@/shared/@common/ui/Input/hook/inputHook';
import Button from '@/shared/@common/ui/Button/Button';
import { useRouter } from 'next/router';
import Dropdown from '@/shared/@common/ui/Dropdown/Dropdown';
import { useTextarea } from '@/shared/@common/ui/Textarea/hook/textareaHook';
import { Textarea } from '@/shared/@common/ui/Textarea/Textarea';
import userAPI from '@/shared/@common/api/userAPI';
import { JwtPayload, jwtDecode } from 'jwt-decode';

interface CustomDecodedToken extends JwtPayload {
  userId?: string;
}

const registMyProfile = () => {
  const router = useRouter();

  const name = useInput('');
  const phone = useInput('');
  const description = useTextarea('');
  const [location, setLocation] = useState('');
  const [userId, setUserId] = useState<string>('');

  const handleClose = () => {
    router.push('./myProfileInfo');
  };

  const handleSelectLocations = (option: string) => {
    setLocation(option);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    const decodedToken = token ? jwtDecode(token) : null;
    setUserId((decodedToken as CustomDecodedToken)?.userId || '');
  }, []);

  const handleTotalSubmit = async () => {
    try {
      const data = await userAPI.put(userId, localStorage.getItem('token'), {
        name: name.value,
        phone: phone.value,
        address: location,
        bio: description.value,
      });
      if (data) {
        alert('등록이 완료되었습니다.');
        router.push('/myProfileInfo');
      }
    } catch (error) {
      console.error('Regist Failed', error);
    }
  };

  const locations = [
    { value: '서울시 종로구', label: '서울시 종로구' },
    { value: '서울시 중구', label: '서울시 중구' },
    { value: '서울시 용산구', label: '서울시 용산구' },
    { value: '서울시 성동구', label: '서울시 성동구' },
    { value: '서울시 광진구', label: '서울시 광진구' },
    { value: '서울시 동대문구', label: '서울시 동대문구' },
    { value: '서울시 중랑구', label: '서울시 중랑구' },
    { value: '서울시 성북구', label: '서울시 성북구' },
    { value: '서울시 강북구', label: '서울시 강북구' },
    { value: '서울시 도봉구', label: '서울시 도봉구' },
    { value: '서울시 노원구', label: '서울시 노원구' },
    { value: '서울시 은평구', label: '서울시 은평구' },
    { value: '서울시 서대문구', label: '서울시 서대문구' },
    { value: '서울시 마포구', label: '서울시 마포구' },
    { value: '서울시 양천구', label: '서울시 양천구' },
    { value: '서울시 강서구', label: '서울시 강서구' },
    { value: '서울시 구로구', label: '서울시 구로구' },
    { value: '서울시 금천구', label: '서울시 금천구' },
    { value: '서울시 영등포구', label: '서울시 영등포구' },
    { value: '서울시 동작구', label: '서울시 동작구' },
    { value: '서울시 관악구', label: '서울시 관악구' },
    { value: '서울시 서초구', label: '서울시 서초구' },
    { value: '서울시 강남구', label: '서울시 강남구' },
    { value: '서울시 송파구', label: '서울시 송파구' },
    { value: '서울시 강동구', label: '서울시 강동구' },
  ];

  return (
    <>
      <div className="flex py-[60px] px-[238px] flex-col items-start gap-2 bg-gray-05">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-8"
        >
          <div className="flex justify-between items-center self-stretch">
            <p className="text-black text-[28px] font-bold">내 프로필</p>
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
              title="이름*"
              placeholder="입력"
              type="text"
              onChange={name.handleInput}
            />
            <Input
              title="연락처*"
              placeholder="입력"
              type="text"
              onChange={phone.handleInput}
            />
            <Dropdown
              title="선호 지역"
              options={locations}
              onSelect={(option) => handleSelectLocations(option)}
              defaultValue="선택"
            />
          </div>
          <div className="flex w-[964px] flex-col items-start gap-2">
            <Textarea
              title="소개"
              width="100%"
              height="153px"
              placeholder="설명을 작성해 주세요"
              onChange={description.handleTextarea}
            />
          </div>
          <div className="flex items-center">
            <Button size="large" color="colored" onClick={handleTotalSubmit}>
              등록하기
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default registMyProfile;
