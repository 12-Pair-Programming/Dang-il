import { useState, useRef, ChangeEvent } from 'react';
import Image from 'next/image';

import Add from '@/public/images/add-img.svg';

const UploadImage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <div className='inline-block relative' >
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        ref={inputRef}
        style={{ display: 'none' }}
      />
      {/* 이미지 표시 영역 (클릭 시 파일 업로드 버튼 클릭) */}
      <div onClick={handleClick} className='cursor-pointer' >
        {/* 선택한 이미지 표시 (없으면 placeholder 이미지 사용) */}
        {selectedImage ? (
          <Image src={selectedImage} alt="Uploaded Image" className='w-1/2 max-h-[300px]' />
        ) : (
          <div className='flex justify-center items-center flex-shrink-0 rounded-[5px] border border-solid border-gray-30 bg-gray-10 h-[300px] w-[400px]'>
            <Image src={Add} alt="Placeholder Image" width={111} height={64} />
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadImage;

/* Image Component의 PlaceHolder 이미지를 어떻게 처리할 것인지가 고민. 아직 반응형은 진행되지 않았음. */