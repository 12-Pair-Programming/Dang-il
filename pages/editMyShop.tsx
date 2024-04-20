import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Dropdown from '@/shared/@common/ui/Dropdown/Dropdown';
import { Input } from '@/shared/@common/ui/Input/Input';
import UploadImage from '@/features/RegistMyShop/UploadImage';
import Button from '@/shared/@common/ui/Button/Button';
import close from '@/public/images/close.svg';
import { Footer } from '@/shared/@common/ui/Footer/Footer';

const editMyShop = () => {

  /*
  registMyShop.tsx와 동일한 구조입니다. Get으로 API를 받아와
  PUT으로 전송시킬 예정입니다.
  */

  const router = useRouter();
  const [foodKinds, setFoodKinds] = useState('');
  const [location, setLocation] = useState('');
  const [title, setTitle] = useState('');
  const [address, setAddress] = useState('');
  const [shopImage, setShopImage] = useState<string | null>(null);
  const [description, setDescription] = useState('');

  const handleClose = () => {
    router.push('/myShopInfo');
  }

  const handleSelectLocations = (option: string) => {
    setLocation(option);
  };

  const handleSelectFoodKinds = (option: string) => {
    setFoodKinds(option);
  };

  const handleShopImage = (image: string | null) => {
    setShopImage(image);
  };

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleTotalSubmit = () => {
    console.log('제출 완료');
    console.log(title);
    console.log(foodKinds);
    console.log(location);
    console.log(address);
    console.log(shopImage);
    console.log(description);
    alert('등록이 완료되었습니다');
    router.push('/myShopInfo');
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
    { value: '종로구', label: '서울시 종로구' },
    { value: '중구', label: '서울시 중구' },
    { value: '용산구', label: '서울시 용산구' },
    { value: '성동구', label: '서울시 성동구' },
    { value: '광진구', label: '서울시 광진구' },
    { value: '동대문구', label: '서울시 동대문구' },
    { value: '중랑구', label: '서울시 중랑구' },
    { value: '성북구', label: '서울시 성북구' },
    { value: '강북구', label: '서울시 강북구' },
    { value: '도봉구', label: '서울시 도봉구' },
    { value: '노원구', label: '서울시 노원구' },
    { value: '은평구', label: '서울시 은평구' },
    { value: '서대문구', label: '서울시 서대문구' },
    { value: '마포구', label: '서울시 마포구' },
    { value: '양천구', label: '서울시 양천구' },
    { value: '강서구', label: '서울시 강서구' },
    { value: '구로구', label: '서울시 구로구' },
    { value: '금천구', label: '서울시 금천구' },
    { value: '영등포구', label: '서울시 영등포구' },
    { value: '동작구', label: '서울시 동작구' },
    { value: '관악구', label: '서울시 관악구' },
    { value: '서초구', label: '서울시 서초구' },
    { value: '강남구', label: '서울시 강남구' },
    { value: '송파구', label: '서울시 송파구' },
    { value: '강동구', label: '서울시 강동구' },


  ]

  return (
    <>
      <div className="flex w-full py-[60px] px-[238px] flex-col items-start gap-2 bg-gray-05">
        <div className="flex w-full flex-col items-center gap-8">
          <div className="flex flex-col items-start gap-8">
            <div className="flex w-full justify-between items-center">
              <p className='text-black text-[28px] font-bold'>가게 정보</p>
              <button onClick={handleClose}>
                <Image src={close} alt='닫기 버튼' />
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className='flex items-start gap-5 mb-6'>
                <div className='flex flex-col items-start gap-2 flex-shrink-0'>
                  <Input title='가게 이름*' placeholder='입력' value={title} onChange={(event) => setTitle(event.target.value)}/>
                </div>
                <div className='flex flex-col items-start gap-2 flex-shrink-0 text-black'>
                  <Dropdown 
                    title={'분류*'}
                    options={kinds}
                    onSelect={(option) => handleSelectFoodKinds(option)}
                    defaultValue={'선택'}
                  />
                </div>
              </div>
              <div className='flex items-start gap-5 mb-6'>
                <div className='flex flex-col items-start gap-2 flex-shrink-0 text-black'>
                  <Dropdown
                    title={'주소*'}
                    options={locations}
                    onSelect={(option) => handleSelectLocations(option)}
                    defaultValue={'선택'}
                  />
                </div>
                <div className='flex flex-col items-start gap-2 flex-shrink-0'>
                  <Input title='상세 주소*' placeholder='입력' value={address} onChange={(event) => setAddress(event.target.value)}  />
                </div>
              </div>
              <div className='flex flex-col items-start gap-5 mb-6'>
                <p className='text-base'>가게 이미지</p>
                <UploadImage onImageChange={handleShopImage}/>
              </div>
              <div className='w-full flex flex-col items-start gap-2'>
                <p className='text-base'>가게 설명</p>
                <input
                  className='flex py-4 px-5 items-start self-stretch gap-[10px] min-h-[153px] border border-solid rounded-[5px] border-gray-30 bg-white'
                  placeholder='입력' 
                  value={description} 
                  onChange={handleDescriptionChange} />
              </div>
              <div className='flex mt-8 justify-center'>
                <Button size='large' color='colored' onClick={handleTotalSubmit}>
                  등록하기
                </Button>
              </div>

            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default editMyShop;