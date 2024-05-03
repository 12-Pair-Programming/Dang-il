import React, { FormEventHandler } from 'react';
import { Input } from '@/shared/@common/ui/Input/Input';
import Button from '@/shared/@common/ui/Button/Button';
import Link from 'next/link';
import Image from 'next/image';
import { useInput } from '@/shared/@common/ui/Input/hook/inputHook';
import { useCheckUserData } from '@/shared/@common/auth/hooks/useCheckUserData';
import { Modal } from '@/shared/@common/ui/Modal/ModalBase';
import { useRouter } from 'next/router';

export default function LoginBody() {
  const email = useInput('');
  const password = useInput('');

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
    emailError,
    isEmailError,
    passwordError,
    isPasswordError,
    handleLoginSystem,
  } = useCheckUserData({
    email: email.value as string,
    password: password.value as string,
  });

  const handleLogin: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    handleLoginSystem();
  };

  return (
    <div className="w-full flex items-center justify-center bg-white z-modal">
      <form onSubmit={handleLogin}>
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
            <Button size={'large'} color={'colored'} type="submit">
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
        <Modal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          onClose={() => {
            closeModal();
            if (isSuccess) {
              router.push('/noticeList');
            }
          }}
          content={modalContent}
          type={modalType}
        />
      </form>
    </div>
  );
}
