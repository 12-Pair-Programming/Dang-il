'use client';

import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useRouter } from 'next/router';
import Button from '@/shared/@common/ui/Button/Button';
import Image from 'next/image';
import FindNotice from './FindNotice';
import userAPI from '@/shared/@common/api/userAPI';
import { jwtDecode } from 'jwt-decode';

type JwtDecode = {
  userId?: string;
};
export interface userData {
  address: string;
  bio: string;
  email: string;
  id: string;
  name: string;
  phone: string;
}

const FindProfile = () => {
  const router = useRouter();
  const [user, setUser] = useState<userData>();

  const handleWritingShopInfo = () => {
    router.push('/registMyProfile');
  };

  const handleEditingProfileInfo = () => {
    router.push('/registMyProfile');
  };

  const [size, setSize] = useState('large');
  const isMobile = useMediaQuery({ query: '(min-width: 768px)' });
  const [isMyProfile, setIsMyProfile] = useState(true);

  const getUser = async () => {
    try {
      const token =
        typeof window !== 'undefined' ? localStorage.getItem('token') : '';

      const decodedToken = token ? jwtDecode(token) : null;
      const userId = (decodedToken as JwtDecode)?.userId || '';
      const userData = await userAPI.getUserData(userId);
      setUser(userData.data.item);
      setIsMyProfile(true);
    } catch (error) {
      setIsMyProfile(false);
    }
  };

  useEffect(() => {
    getUser();
    console.log(user);
  }, []);

  useEffect(() => {
    if (isMobile) {
      setSize('large');
    } else {
      setSize('small');
    }
  }, [isMobile]);

  return isMyProfile && user?.name ? (
    <div className="flex flex-col bg-white items-center justify-center px-[auto] w-[full]">
      <div className="flex py-[60px] mx-[auto] w-[983px] px-[auto] flex-col items-start justify-center self-stretch bg-white gap-2">
        <div className="flex flex-row px-[auto] items-start justify-between self-stretch bg-white ">
          <p className="text-black text-[28px] font-bold whitespace-nowrap">
            내 프로필
          </p>
          <div className="flex  flex-col items-start gap-2 self-stretch ">
            <div className="flex p-8 flex-row justify-between items-start gap-2 rounded-xl bg-purple-10">
              <div className="flex w-[392px] flex-col items-start gap-7">
                <div className="flex flex-col items-start gap-3">
                  <div className="flex flex-col items-start gap-2">
                    <p className=" text-primary font-bold text-base">이름</p>
                    <p className="text-black text-[28px] font-bold">
                      {user.name}
                    </p>
                  </div>
                  <div className="flex items-center gap-[6px]">
                    <Image
                      src={`/images/phone-icon.svg`}
                      alt="핸드폰 로고"
                      width={20}
                      height={20}
                    />
                    <p className="text-gray-50">{user.phone}</p>
                  </div>
                  <div className="flex items-center gap-[6px]">
                    <Image
                      src={`/images/icon-location-on.svg`}
                      alt="위치 로고"
                      width={20}
                      height={20}
                    />
                    <p className=" text-gray-50">{user.address}</p>
                  </div>
                </div>
                <p className="self-stretch text-black">{user.bio}</p>
              </div>
              <div className="flex items-start gap-2">
                <Button
                  size="mediumLarge"
                  color="none"
                  onClick={handleEditingProfileInfo}
                >
                  편집하기
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FindNotice user={user} />
    </div>
  ) : (
    <div className="flex pt-[100px] pb-[610px] w-full px-[auto] flex-col items-center gap-2 bg-white ">
      <div className="w-[983px]">
        <p className="text-black text-[28px] font-bold">내 가게</p>
        <div className="flex w-full py-[60px] px-[24px] flex-col content-center items-center gap-6 rounded-xl border border-solid border-gray-20">
          <p className="text-black self-stretch text-center text-base">
            내 프로필을 등록하고 원하는 가게에 지원해 보세요.
          </p>
          <Button size={size} color="colored" onClick={handleWritingShopInfo}>
            내 프로필 등록하기
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FindProfile;
