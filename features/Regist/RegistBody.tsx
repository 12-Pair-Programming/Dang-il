import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Input } from '@/shared/@common/ui/Input/Input';
import Button from '@/shared/@common/ui/Button/Button';
import { useInput } from '@/shared/@common/ui/Input/hook/inputHook';
import { useCheckUserData } from '@/shared/@common/auth/hooks/useCheckUserData';
import { RadioButton } from './radioButton/RadioButton';
import { Modal } from '@/shared/@common/ui/Modal/ModalBase';
import { useRouter } from 'next/router';

export default function RegistnBody() {
  const email = useInput('');
  const password = useInput('');
  const passwordRepeat = useInput('');

  const router = useRouter();

  const {
    isSuccess,
    isOpen,
    modalType,
    modalContent,
    setIsOpen,
    closeModal,
    CheckEmail,
    CheckPassword,
    CheckPasswordRepeat,
    emailError,
    isEmailError,
    passwordError,
    isPasswordError,
    passwordRepeatError,
    isPasswordRepeatError,
    selectedUserType,
    handleRegistSystem,
    handleRadioChange,
  } = useCheckUserData({
    email: email.value as string,
    password: password.value as string,
    passwordRepeat: passwordRepeat.value as string,
    type: 'employer',
  });

  const handleRegist = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    handleRegistSystem();
  };

  return (
    <div className="w-full h-full flex items-center justify-center bg-white">
      <form onSubmit={handleRegist}>
        <div>
          <div className="flex items-center justify-center mb-7">
            <Link href={'/noticeList'}>
              <Image
                width={250}
                height={30}
                alt="큰 메인 로고"
                src={'/images/logo.png'}
              />
            </Link>
          </div>
          <div className="flex flex-col gap-7">
            <Input
              title={'이메일'}
              placeholder={'이메일을 입력해주세요.'}
              onBlur={CheckEmail}
              onChange={email.handleInput}
              isError={isEmailError}
              errorText={emailError}
            />
            <Input
              title={'비밀번호'}
              placeholder={'비밀번호를 입력해주세요.'}
              type={'password'}
              onBlur={CheckPassword}
              onChange={password.handleInput}
              isError={isPasswordError}
              errorText={passwordError}
            />
            <Input
              title={'비밀번호 확인'}
              placeholder={'비밀번호를 입력해주세요.'}
              type={'password'}
              onBlur={CheckPasswordRepeat}
              onChange={passwordRepeat.handleInput}
              isError={isPasswordRepeatError}
              errorText={passwordRepeatError}
            />
            <div className="flex flex-col gap-3">
              <p>회원 유형</p>
              <div className="flex flex-row items-center justify-center w-full gap-2">
                <RadioButton
                  id="employer"
                  checked={selectedUserType === 'employer'}
                  onChange={handleRadioChange}
                />
                <RadioButton
                  id="employee"
                  checked={selectedUserType === 'employee'}
                  onChange={handleRadioChange}
                />
              </div>
            </div>
            <Button size={'large'} color={'colored'} type="submit">
              가입하기
            </Button>
          </div>
          <div className="flex items-center justify-center mt-5">
            이미 가입하셨나요?
            <Link href={'/login'}>
              <p className=" underline text-violet-500">로그인하기</p>
            </Link>
          </div>
        </div>
        <Modal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          onClose={() => {
            closeModal();
            if (isSuccess) {
              router.push('/login');
            }
          }}
          content={modalContent}
          type={modalType}
        />
      </form>
    </div>
  );
}
