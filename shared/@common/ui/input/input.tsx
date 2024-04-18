import React, { useState } from 'react';
import Image from 'next/image'

interface InputProps {
  text?: string;
  placeholder?: string;
  type?: string;
  width?: string;
  isError?: boolean;
  errorText?: string;
  countText?: string;
}

export const Input = ({
  text = '제목을 입력해주세요.',
  placeholder = '값을 입력해주세요.',
  type = 'text',
  width = '350px',
  isError = false,
  errorText,
  countText,
}: InputProps) => {
  const firstType = type;
  const [inputType, setInputType] = useState(type);

  const handleEye = () => {
    setInputType((prevType) => (prevType === 'password' ? 'text' : 'password'));
  };

  return (
    <>
      <div className={`w-[${width}] flex flex-col items-start gap-2`}>
        <p className="text-black font-sans font-normal text-base leading-6">
          {text}
        </p>
        <div className={`w-[${width}] relative`}>
          <input
            className={`flex py-4 px-5 w-full rounded-md border ${
              isError ? 'border-red-40' : 'border-gray-30'
            } bg-white items-start gap-2 self-stretch`}
            type={inputType}
            placeholder={placeholder}
          />
          {firstType === 'password' && (
            <Image
              className={`absolute top-1/2 right-4 transform -translate-y-1/2 w-4 h-4 flex-shrink-0`}
              src={
                inputType === 'password'
                  ? 'Images/eye-off.svg'
                  : 'Images/eye-on.svg'
              }
              alt={"눈 표시"}
              onClick={handleEye}
            />
          )}
          {countText && (
            <p className="h-[24px] absolute top-1/2 right-4 transform -translate-y-1/2 w-4  flex-shrink-0">
              {countText}
            </p>
          )}
        </div>
        {isError && <p className="text-red-500 pl-2 text-xs">{errorText}</p>}
      </div>
    </>
  );
};
