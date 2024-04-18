import { useState } from 'react';

interface InputHookProps {
  inputValue: string | number | Date;
}

export const inputHook = ({ inputValue }: InputHookProps) => {
  const [value, setValue] = useState(inputValue);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return { handleInput, value };
};

/* 
훅 사용법
const { handleInput, value } = inputHook({ inputValue: '' }); 값지정
<Input type="text" onChange={handleInput} /> 인풋 지정
handleInput<= 이거에 따라 값이 지정되는 곳이 달라집니다.
*/
