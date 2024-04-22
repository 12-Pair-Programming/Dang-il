import { Input } from "@/shared/@common/ui/Input/Input";
import Image from "next/image";
import Calendar from "@/features/NoticeRegist/Calendar";
import { useState } from "react";
import { useInput } from "@/shared/@common/ui/Input/hook/inputHook";

const noticeRegist = () => {

  const [hourlypay, setHourlypay] = useState(0);
  const [hour, setHour] = useState(0);
  const [description, setDescription] = useState('');

  const inputsConfigs = [
    { inputValue: '' },
    { inputValue: '' },
    { inputValue: '' },
  ];

  const inputs = inputsConfigs.map((config) => useInput(config));

  const handleHourlyPay = () => {
    console.log('a');
  };

  const handleHour = () => {
    console.log('b');
  };

  const handleDescription = () => {
    console.log(c);
  }
  return (
    <>
      <div className="flex py-[60px] px-[238px] flex-col items-start gap-2 bg-gray-05">
        <div className="flex flex-col items-center gap-8">
          <div className="flex justify-between items-center self-stretch">
            <p className="text-black text-[28px] font-bold">
              공고 등록
            </p>
            <Image src={`/images/close.svg`} alt='닫기' width={32} height={32} />
          </div>
          <div className="inline-flex items-start gap-5">
            <Input title='시급*' placeholder="입력" type="text" countText="원" onChange={inputs[0].handleInput}>
              
            </Input>
            <Calendar />
            <Input title='업무 시간*' placeholder="입력" type="text" countText="시간" onChange={inputs[1].handleInput}>

            </Input>
            <Input title="공고 설명" placeholder="설명을 작성해 주세요" type="text" onChange={inputs[2].handleInput}>

            </Input>
          </div>
        </div>
      </div>
    </>
  );
};

export default noticeRegist;

/*
  handleHourlypay는 시급을 입력하면 값이 지속적으로 변겨되는 구조.
*/