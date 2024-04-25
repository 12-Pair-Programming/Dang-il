import React, { useEffect, useState } from 'react';
import { NavModal } from './navModal/NavModal';
import Image from 'next/image';
import { useNavModal } from './navModal/hook/navModalHook';
import { NavButton } from './navButton/navButton';

interface NavigationBarProps {}

const NavigationBar = () => {
  const [isLogin, setIsLogin] = useState(true);
  //밑에 2개는 테스트 데이터로 내일 API작업하면서 삭제할겁니다!
  const [test, setTest] = useState(true);
  const userType = 'boss';

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLogin(false);
    setTest(!test);
  };

  //밑에는 테스트 데이터로 내일 API작업하면서 삭제할겁니다!
  const handleLogin = () => {
    setTest(!test);
  };

  const { isOpen, setIsOpen, openModal } = useNavModal({
    modalContent: '공지',
  });

  //현재 링크 연결을 임의로 했습니다 참고하세요!
  return (
    <div className="w-full h-[70px] flex flex-row bg-white justify-center items-center sticky gap-10 z-10">
      <div className="h-[40px] flex items-center">
        <Image
          width={140}
          height={20}
          src={'/images/navLogo.png'}
          alt="네비 로고 이미지"
        />
      </div>
      <div className="relative">
        <input
          className="flex gap-[10px] py-[10px] px-[40px] w-[450px] items-center rounded-[10px] bg-gray-10 "
          placeholder="가게 이름으로 찾아보세요"
        ></input>
        <Image
          className="absolute top-1/2 left-[10px] transform -translate-y-1/2 flex-shrink-0 z-10"
          width={20}
          height={20}
          src={'/images/searchIcon.png'}
          alt="검색창 보조 이미지"
        />
      </div>
      <div className="flex flex-row gap-2 top-[23.5px] right-[60px] justify-center items-center">
        {test ? (
          <>
            {userType === 'boss' ? (
              <NavButton href={'/'}>내 가게</NavButton>
            ) : (
              <NavButton href={'/'}>사용자 프로필</NavButton>
            )}
            <NavButton onClick={handleLogout} href={'/login'}>
              로그아웃
            </NavButton>

            <div className="relative" onClick={openModal}>
              <div className="flex justify-center items-center">
                <Image
                  width={24}
                  height={24}
                  src={
                    isOpen
                      ? '/images/dropdownDown.png'
                      : '/images/dropdownUp.png'
                  }
                  alt="모달 온오프 아이콘"
                />
              </div>
              <NavModal isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
          </>
        ) : (
          <>
            <NavButton onClick={handleLogin} href={'/login'}>
              로그인
            </NavButton>
            <NavButton href={'/regist'}>회원가입</NavButton>
          </>
        )}
      </div>
    </div>
  );
};

export default NavigationBar;
