import { InputChangeEvent } from '@/shared/@common/types/helper';
import { useState } from 'react';

export const useInput = (defaultValue?: string | number) => {
  const [value, setValue] = useState(defaultValue || '');

  const handleInput = (e: InputChangeEvent) => {
    setValue(e.target.value);
  };

  const handleReset = () => {
    setValue('');
  };

  return { handleInput, value, handleReset };
};
