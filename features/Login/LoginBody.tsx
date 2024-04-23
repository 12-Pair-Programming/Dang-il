import React, { useState } from 'react';
import { Input } from '@/shared/@common/ui/Input/Input';
import Button from '@/shared/@common/ui/Button/Button';
import Link from 'next/link';
import Image from 'next/image';
import { useInput } from '@/shared/@common/ui/Input/hook/inputHook';
import { useCheckUserData } from '@/shared/@common/auth/hooks/useCheckUserData';

export default function LoginBody() {
  const email = useInput('');
  const password = useInput('');

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

  return (
    <div className="w-full flex items-center justify-center bg-white z-modal">
      <div>
        <div className="flex items-center justify-center mb-2">
          <Image
            width={350}
            height={50}
            alt="큰 메인 로고"
            src={'/images/logo.png'}
          />
        </div>
        <div className="flex flex-col gap-7">
          <Input
            title={'이메일'}
            placeholder={'이메일을 입력해주세요.'}
            onBlur={email.handleInput}
            isError={isEmailError}
            errorText={emailError}
          />
          <Input
            title={'비밀번호'}
            placeholder={'비밀번호를 입력해주세요.'}
            type={'password'}
            onBlur={password.handleInput}
            isError={isPasswordError}
            errorText={passwordError}
          />
          <Button size={'large'} color={'colored'} onClick={handleLoginSystem}>
            로그인 하기
          </Button>
        </div>
        <div className="flex items-center justify-center mt-5 gap-1">
          회원이 아니신가요?
          <Link href={'/regist'}>
            <p className="underline text-violet-500">회원가입하기</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
/*
const modalConfigs = [
  { modalContent: '안녕', modalType: 'check' },
  { modalContent: '안녕하세요', modalType: 'notice' },
  { modalContent: '확인', modalType: 'warning' },
];

const modals = modalConfigs.map((config) => modalHook(config));

madals[i]으로도 사용 가능

{
  "email": "test@test.com",
  "password": "123123123a",
  "type": "employee"
}

*/
