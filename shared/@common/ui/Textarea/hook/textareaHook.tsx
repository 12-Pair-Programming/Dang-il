import { TextareaChangeEvent } from '@/shared/@common/types/helper';
import { useState } from 'react';

export const useTextarea = (defaultValue?: string) => {
  const [value, setValue] = useState(defaultValue || '');

  const handleTextarea = (e: TextareaChangeEvent) => {
    setValue(e.target.value);
  };

  return { handleTextarea, value };
};

/* 
훅 사용법
const { handleInput, value } = inputHook({ inputValue: '' }); 값지정
<Input type="text" onChange={handleInput} /> 인풋 지정
handleInput<= 이거에 따라 값이 지정되는 곳이 달라집니다.
*/
