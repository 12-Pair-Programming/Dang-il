import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Dropdown from '@/shared/@common/ui/Dropdown/Dropdown';
import { Input } from '@/shared/@common/ui/Input/Input';
import Button from '@/shared/@common/ui/Button/Button';
import { useInput } from '@/shared/@common/ui/Input/hook/inputHook';
import { useTextarea } from '@/shared/@common/ui/Textarea/hook/textareaHook';
import { Textarea } from '@/shared/@common/ui/Textarea/Textarea';
import shopAPI from '@/shared/@common/api/shopAPI';
import imageAPI from '@/shared/@common/api/imageAPI';
import { jwtDecode } from 'jwt-decode';
import userAPI from '@/shared/@common/api/userAPI';

const EditingMyShop = () => {
  const router = useRouter();
  const [foodKinds, setFoodKinds] = useState('');
  const [location, setLocation] = useState('');
  const [shopImage, setShopImage] = useState<string | null>(null);
  const [shopData, setShopData] = useState({
    name: '',
    address2: '',
    originalHourlyPay: '',
    description: '',
  });

  useEffect(() => {
    const token = localStorage.getItem('token');
    const decodedToken = token ? jwtDecode(token) : null;
    const userId = (decodedToken as any)?.userId || '';

    const fetchShopInfo = async () => {
      try {
        const userData = await userAPI.getUserData(userId);
        shopId = userData.data.item.shop.item.id;
        const shopInfo = await shopAPI.get(shopId);
        const shop = shopInfo.data.item;

        setShopData(shop);
        name.value = shop.name;
        setFoodKinds(shop.category);
        setLocation(shop.address1);
        subLocation.value = shop.address2;
        description.value = shop.description;
        setShopImage(shop.imageUrl);
        originalHourlyPay.value = shop.originalHourlyPay;
      } catch (error) {
        console.error('Failed to fetch shop info:', error);
      }
    };

    fetchShopInfo();
    console.log(name);
    console.log(shopData);
  }, []);

  const name = useInput(shopData.name);
  const subLocation = useInput(shopData.address2);
  const originalHourlyPay = useInput(shopData.originalHourlyPay);
  const description = useTextarea('');

  const handleClose = () => {
    router.push('/myShopInfo');
  };

  const handleSelectLocations = (option: string) => {
    setLocation(option);
  };

  const handleSelectFoodKinds = (option: string) => {
    setFoodKinds(option);
  };

  const inputRef = useRef<HTMLInputElement>(null);
  let shopId = '';

  const handleImageChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];
    const imageUrl = await imageAPI(file);
    setShopImage(imageUrl);
  };

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleTotalSubmit = async () => {
    const hourlyPayNumber = Number(originalHourlyPay.value);
    try {
      const data = await shopAPI.put(shopId, {
        name: name.value,
        category: foodKinds,
        address1: location,
        address2: subLocation.value,
        description: description.value,
        imageUrl: shopImage,
        originalHourlyPay: hourlyPayNumber,
      });
      if (data) {
        alert('등록이 완료되었습니다');
        router.push('myShopInfo');
      }
    } catch (error) {
      console.error('Edit Failed:', error);
    }
  };

  const kinds = [
    { value: '한식', label: '한식' },
    { value: '중식', label: '중식' },
    { value: '일식', label: '일식' },
    { value: '양식', label: '양식' },
    { value: '분식', label: '분식' },
    { value: '카페', label: '카페' },
    { value: '편의점', label: '편의점' },
    { value: '기타', label: '기타' },
  ];

  const locations = [
    { value: '서울시 종로구', label: '서울시 종로구' },
    { value: '서울시 중구', label: '서울시 중구' },
    { value: '서울시 용산구', label: '서울시 용산구' },
    { value: '서울시 성동구', label: '서울시 성동구' },
    { value: '서울시 광진구', label: '서울시 광진구' },
    { value: '서울시 동대문구', label: '서울시 동대문구' },
    { value: '서울시 중랑구', label: '서울시 중랑구' },
    { value: '서울시 성북구', label: '서울시 성북구' },
    { value: '서울시 강북구', label: '서울시 강북구' },
    { value: '서울시 도봉구', label: '서울시 도봉구' },
    { value: '서울시 노원구', label: '서울시 노원구' },
    { value: '서울시 은평구', label: '서울시 은평구' },
    { value: '서울시 서대문구', label: '서울시 서대문구' },
    { value: '서울시 마포구', label: '서울시 마포구' },
    { value: '서울시 양천구', label: '서울시 양천구' },
    { value: '서울시 강서구', label: '서울시 강서구' },
    { value: '서울시 구로구', label: '서울시 구로구' },
    { value: '서울시 금천구', label: '서울시 금천구' },
    { value: '서울시 영등포구', label: '서울시 영등포구' },
    { value: '서울시 동작구', label: '서울시 동작구' },
    { value: '서울시 관악구', label: '서울시 관악구' },
    { value: '서울시 서초구', label: '서울시 서초구' },
    { value: '서울시 강남구', label: '서울시 강남구' },
    { value: '서울시 송파구', label: '서울시 송파구' },
    { value: '서울시 강동구', label: '서울시 강동구' },
  ];

  return (
    <>
      <div className="flex w-full py-[60px] px-[238px] flex-col items-start gap-2 bg-gray-05">
        <form
          onSubmit={handleSubmit}
          className="flex w-full flex-col items-center gap-8"
        >
          <div className="flex flex-col items-start gap-8">
            <div className="flex w-full justify-between items-center">
              <p className="text-black text-[28px] font-bold">가게 정보</p>
              <button onClick={handleClose}>
                <Image
                  src={`/images/close.svg`}
                  alt="닫기 버튼"
                  width={32}
                  height={32}
                />
              </button>
            </div>
            <div className="flex items-start gap-5 mb-6">
              <div className="flex flex-col items-start gap-2 flex-shrink-0">
                <Input
                  title="가게 이름*"
                  placeholder={shopData.name}
                  onChange={name.handleInput}
                />
              </div>
              <div className="flex flex-col items-start gap-2 flex-shrink-0 text-black">
                <Dropdown
                  title={'분류*'}
                  options={kinds}
                  onSelect={(option) => handleSelectFoodKinds(option)}
                  defaultValue={foodKinds}
                />
              </div>
            </div>
            <div className="flex items-start gap-5 mb-6">
              <div className="flex flex-col items-start gap-2 flex-shrink-0 text-black">
                <Dropdown
                  title={'주소*'}
                  options={locations}
                  onSelect={(option) => handleSelectLocations(option)}
                  defaultValue={location}
                />
              </div>
              <div className="flex flex-col items-start gap-2 flex-shrink-0">
                <Input
                  title="상세 주소*"
                  placeholder={shopData.address2}
                  onChange={subLocation.handleInput}
                />
              </div>
            </div>
            <div className="flex items-start gap-5 mb-6">
              <div className="flex flex-col items-start gap-2 flex-shrink-0 text-black">
                <Input
                  title="기본 시급*"
                  placeholder={shopData.originalHourlyPay}
                  countText="원"
                  onChange={originalHourlyPay.handleInput}
                />
              </div>
            </div>
            <div className="flex flex-col items-start gap-5 mb-6">
              <p className="text-base">가게 이미지</p>
              <div className="inline-block relative">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  ref={inputRef}
                  style={{ display: 'none' }}
                />
                <div onClick={handleClick} className="cursor-pointer">
                  {shopImage ? (
                    <Image
                      src={shopImage}
                      alt="Uploaded Image"
                      width={200}
                      height={300}
                      className="w-1/2 max-h-[300px]"
                    />
                  ) : (
                    <div className="flex justify-center items-center flex-shrink-0 rounded-[5px] border border-solid border-gray-30 bg-gray-10 h-[300px] w-[400px]">
                      <Image
                        src={`images/add-img.svg`}
                        alt="Placeholder Image"
                        width={111}
                        height={64}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col items-start gap-2">
              <Textarea
                title="가게 설명"
                width="100%"
                placeholder={shopData.description}
                onChange={description.handleTextarea}
              />
            </div>
            <div className="flex mt-8 justify-center">
              <Button size="large" color="colored" onClick={handleTotalSubmit}>
                완료하기
              </Button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditingMyShop;
