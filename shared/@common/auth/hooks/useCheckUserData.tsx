import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

interface useCheckUserDataProps {
  email?: string;
  password?: string;
  passwordRepeat?: string;
  tpye?: string;
}

export function useCheckUserData({
  email = '',
  password = '',
  passwordRepeat = password,
  tpye = 'boss',
}: useCheckUserDataProps) {
  const [emailError, setEmailError] = useState<string | undefined>('');
  const [passwordError, setPasswordError] = useState<string | undefined>('');
  const [passwordRepeatError, setPasswordRepeatError] = useState<
    string | undefined
  >('');
  const [isEmailError, setIsEmailError] = useState(true);
  const [isPasswordError, setIsPasswordError] = useState(true);
  const [isPasswordRepeatError, setIsPasswordRepeatError] = useState(true);

  const [isEmailCheck, setIsEmailCheck] = useState(false);
  const [isPasswordCheck, setIsPasswordCheck] = useState(false);
  const [isPasswordRepeatCheck, setIsPasswordRepeatCheck] = useState(false);

  const [selectedUserType, setSelectedUserType] = useState(tpye);

  const EMAIL_CHECK = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  const PASSWORD_CHECK = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,30}$/;

  const emailValue = email.trim();
  const passwordValue = password.trim();
  const passwordRepeatValue = passwordRepeat.trim();

  const router = useRouter();

  const CheckEmail = () => {
    if (emailValue !== '') {
      if (EMAIL_CHECK.test(emailValue)) {
        setEmailError(undefined);
        setIsEmailError(false);
        setIsEmailCheck(true);
      } else {
        setEmailError('이메일 형식이 아닙니다!');
        setIsEmailError(true);
      }
    } else {
      setEmailError(undefined);
      setIsEmailError(false);
    }
  };

  const CheckPassword = () => {
    if (passwordValue !== '') {
      if (PASSWORD_CHECK.test(passwordValue)) {
        setPasswordError(undefined);
        setIsPasswordError(false);
        setIsPasswordCheck(true);
      } else {
        setPasswordError('비밀번호는 영문,숫자 조합으로 8자 이상 적어주세요!');
        setIsPasswordError(true);
      }
    } else {
      setPasswordError(undefined);
      setIsPasswordError(false);
    }
  };

  const CheckPasswordRepeat = () => {
    if (passwordRepeatValue !== '') {
      if (passwordRepeatValue === passwordValue) {
        setPasswordRepeatError(undefined);
        setIsPasswordRepeatError(false);
        setIsPasswordRepeatCheck(true);
      } else {
        setPasswordRepeatError('비밀번호가 일치하지 않습니다!');
        setIsPasswordRepeatError(true);
      }
    } else {
      setPasswordRepeatError(undefined);
      setIsPasswordRepeatError(false);
    }
  };

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedUserType(event.target.id);
  };

  const handleLoginSystem = async () => {
    if (isEmailCheck && isPasswordCheck && isPasswordRepeatCheck) {
      try {
        const response = await axios.post(
          'https://bootcamp-api.codeit.kr/api/0-1/the-julge/token',
          {
            email: emailValue,
            password: passwordValue,
          },
        );
        const token = response.data.token;
        localStorage.setItem('token', token);
        router.push('/regist'); //페이지 아직 안 봐서 임시방편
      } catch (error) {
        // Handle error
        console.error('Login failed:', error);
      }
    }
  };

  const handleRegistSystem = async () => {
    if (isEmailCheck && isPasswordCheck && isPasswordRepeatCheck) {
      try {
        const response = await axios.post(
          'https://bootcamp-api.codeit.kr/api/0-1/the-julge/users',
          {
            email: emailValue,
            password: passwordValue,
            type: selectedUserType,
          },
        );
        router.push('/login'); //페이지 아직 안 봐서 임시방편
      } catch (error) {
        console.error('Regist failed:', error);
      }
    }
  };

  useEffect(() => {
    CheckEmail();
    CheckPassword();
    CheckPasswordRepeat();
  }, [emailValue, passwordValue, passwordRepeatValue]);

  return {
    emailError,
    passwordError,
    passwordRepeatError,
    isEmailError,
    isPasswordError,
    isPasswordRepeatError,
    selectedUserType,
    handleRadioChange,
    handleLoginSystem,
    handleRegistSystem,
  };
}
