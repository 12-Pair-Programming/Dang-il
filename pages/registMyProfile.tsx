import { Input } from "@/shared/@common/ui/Input/Input";
import Image from "next/image";
import { useState } from "react";
import { useInput } from "@/shared/@common/ui/Input/hook/inputHook";
import Button from "@/shared/@common/ui/Button/Button";
import { useRouter } from "next/router";
import Dropdown from "@/shared/@common/ui/Dropdown/Dropdown";

const registMyProfile = () => {

  const router = useRouter();

  const inputsConfigs = [
    { inputValue: '' },
    { inputValue: '' },
    { inputValue: '' },
  ];
  const [location, setLocation] = useState('');

  const handleSelectLocations = (option: string) => {
    setLocation(option);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const handleTotalSubmit = () => {
    alert('등록이 완료되었습니다.');
    router.push('/myProfileInfo');
  }

  
  const locations = [
    { value: '종로구', label: '서울시 종로구' },
    { value: '중구', label: '서울시 중구' },
    { value: '용산구', label: '서울시 용산구' },
    { value: '성동구', label: '서울시 성동구' },
    { value: '광진구', label: '서울시 광진구' },
    { value: '동대문구', label: '서울시 동대문구' },
    { value: '중랑구', label: '서울시 중랑구' },
    { value: '성북구', label: '서울시 성북구' },
    { value: '강북구', label: '서울시 강북구' },
    { value: '도봉구', label: '서울시 도봉구' },
    { value: '노원구', label: '서울시 노원구' },
    { value: '은평구', label: '서울시 은평구' },
    { value: '서대문구', label: '서울시 서대문구' },
    { value: '마포구', label: '서울시 마포구' },
    { value: '양천구', label: '서울시 양천구' },
    { value: '강서구', label: '서울시 강서구' },
    { value: '구로구', label: '서울시 구로구' },
    { value: '금천구', label: '서울시 금천구' },
    { value: '영등포구', label: '서울시 영등포구' },
    { value: '동작구', label: '서울시 동작구' },
    { value: '관악구', label: '서울시 관악구' },
    { value: '서초구', label: '서울시 서초구' },
    { value: '강남구', label: '서울시 강남구' },
    { value: '송파구', label: '서울시 송파구' },
    { value: '강동구', label: '서울시 강동구' },
  ]

  const inputs = inputsConfigs.map((config) => useInput(config));

  return (
    <>
      <div className="flex py-[60px] px-[238px] flex-col items-start gap-2 bg-gray-05">
        <div className="flex flex-col items-center gap-8">
          <div className="flex justify-between items-center self-stretch">
            <p className="text-black text-[28px] font-bold">
              내 프로필
            </p>
            <Image src={`/images/close.svg`} alt='닫기' width={32} height={32} />
          </div>
          <form onSubmit={handleSubmit}>
            <div className="inline-flex items-start gap-5">
              <Input title='이름*' placeholder="입력" type="text" countText="원" onChange={inputs[0].handleInput}>
                
              </Input>
              <Input title='연락처*' placeholder="입력" type="text" countText="시간" onChange={inputs[1].handleInput}>

              </Input>
              <Dropdown title="선호 지역" options={locations} onSelect={(option) => handleSelectLocations(option)} defaultValue="선택" />
              <Input title="소개" placeholder="설명을 작성해 주세요" type="text" onChange={inputs[2].handleInput}>

              </Input>
              <Button size='large' color="colored" onClick={handleTotalSubmit}>
                등록하기
              </Button>
            </div>
          </form>

        </div>
      </div>
    </>
  );
};

export default registMyProfile;