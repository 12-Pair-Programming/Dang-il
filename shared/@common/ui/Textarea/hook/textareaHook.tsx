import { TextareaChangeEvent } from '@/shared/@common/types/helper';
import { useState } from 'react';

export const useTextarea = (defaultValue?: string) => {
  const [value, setValue] = useState(defaultValue || '');

  const handleTextarea = (e: TextareaChangeEvent) => {
    setValue(e.target.value);
  };

  return { handleTextarea, value };
};
