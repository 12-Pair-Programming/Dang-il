import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useRouter } from 'next/router';
import Button from '@/shared/@common/ui/Button/Button';
import Image from 'next/image';
import FindNotice from './FindNotice';
import shopAPI from '@/shared/@common/api/shopAPI';
import { jwtDecode } from 'jwt-decode';
import userAPI from '@/shared/@common/api/userAPI';

type JwtDecode = {
  userId?: string;
};
interface ShopData {
  id: string;
  name: string;
  category: string;
  address1: string;
  address2: string;
  description: string;
  imageUrl: string;
}

const FindShop = () => {
  const router = useRouter();
  const token =
    typeof window !== 'undefined' ? localStorage.getItem('token') : '';
  const decodedToken = token ? jwtDecode<JwtDecode>(token) : null;
  const userId = (decodedToken as JwtDecode)?.userId || '';

  const [registered, setRegistered] = useState(true);
  const [size, setSize] = useState('large');
  const isMobile = useMediaQuery({ query: '(min-width: 768px)' });

  const handleWritingShopInfo = () => {
    router.push('/registMyShop');
  };

  const handleEditingShopInfo = () => {
    router.push('/editMyShop');
  };

  const handleWritingNotice = () => {
    router.push('/noticeRegist');
  };

  useEffect(() => {
    if (isMobile) {
      setSize('large');
    } else {
      setSize('small');
    }
  }, [isMobile]);

  const [shop, setShop] = useState<ShopData>({
    id: '',
    name: '',
    category: '',
    address1: '',
    address2: '',
    description: '',
    imageUrl: '',
  });
  let shopId = '';

  const getUser = async () => {
    try {
      const userData = await userAPI.getUserData(userId);
      shopId = userData.data.item.shop.item.id;

      const shopData = await shopAPI.get(shopId);
      setShop(shopData.data.item);
      setRegistered(true);
    } catch (error) {
      setRegistered(false);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  if (registered) {
    return (
      <div className="bg-white">
        <div className="flex m-[auto] w-[983px] py-[60px] px-[auto] flex-col items-start gap-2 bg-white tablet:w-full mobile:w-full tablet:px-8 mobile:px-3  ">
          <p className="text-black text-[28px] font-bold mobile:text-xl">
            내 가게
          </p>
          <div className="w-full">
            <div className="object-cover h-[340px] inline-flex py-[60px] px-[57px] w-[964px] p-6 justify-between items-start rounded-xl bg-purple-10 tablet:w-full mobile:w-full tablet:h-full mobile:h-full tablet:flex-col mobile:flex-col">
              <Image
                src={shop.imageUrl}
                alt="내 가게 사진"
                width={200}
                height={400}
                className="max-h-400 max-w-400"
              />
              <div className="flex w-[346px] pt-4 flex-col justify-between items-start self-stretch">
                <div className="flex w-[346px] p-2 flex-col items-start gap-3">
                  <div className="flex flex-col items-start gap-2">
                    <p className=" text-primary font-bold text-base">
                      {shop.category}
                    </p>
                    <p className="text-black text-[28px] font-bold">
                      {shop.name}
                    </p>
                  </div>
                  <div className="flex items-center gap-[6px]">
                    <Image
                      src={`/images/icon-location-on.svg`}
                      alt="위치 로고"
                      width={20}
                      height={20}
                    />
                    <p className=" text-gray-50">
                      {shop.address1} {shop.address2}
                    </p>
                  </div>
                  <p className="self-stretch text-black">{shop.description}</p>
                </div>
                <div className="flex items-start gap-2 self-stretch">
                  <Button
                    size="medium"
                    color="none"
                    onClick={handleEditingShopInfo}
                  >
                    편집하기
                  </Button>
                  <Button
                    size="medium"
                    color="colored"
                    onClick={handleWritingNotice}
                  >
                    공고 등록하기
                  </Button>
                </div>
              </div>
            </div>
            <FindNotice />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex py-[60px] px-[237px] flex-col items-start gap-2 bg-white mobile:px-10">
        <p className="text-black text-[28px] font-bold mobile:text-xl">
          내 가게
        </p>
        <div className="flex w-full py-[60px] px-[24px] flex-col content-center items-center gap-6 rounded-xl border border-solid border-gray-20">
          <p className="text-black self-stretch text-center text-base mobile:text-sm">
            내 가게를 소개하고 공고도 등록해 보세요.
          </p>
          <Button size={size} color="colored" onClick={handleWritingShopInfo}>
            가게 등록하기
          </Button>
          <div className="h-[550px]">.</div>
        </div>
      </div>
    );
  }
};

export default FindShop;
