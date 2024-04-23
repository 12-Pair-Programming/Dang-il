import { InputChangeEvent } from '@/shared/@common/types/helper';
import { useState } from 'react';

export const useInput = (defaultValue?: string) => {
  const [value, setValue] = useState(defaultValue || '');

  const handleInput = (e: InputChangeEvent) => {
    setValue(e.target.value);
  };

  return { handleInput, value };
};

/*
사용법
const [email, password] = new Array(2).map(() => useInput());

  const {
    emailError,
    isEmailError,
    passwordError,
    isPasswordError,
    handleLoginSystem,
  } = useCheckUserData({
    email: email.value,
    password: password.value,
  });
*/
