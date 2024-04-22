import React, { useState } from 'react';
import Image from 'next/image';

interface InputProps {
  title?: string;
  placeholder: string;
  type?: string;
  width?: string;
  height?: string;
  isError?: boolean;
  errorText?: string;
  countText?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

export const Input = ({
  title,
  placeholder = '값을 입력해주세요.',
  type = 'text',
  width = '350px',
  height = 'auto',
  isError = false,
  errorText,
  countText,
  onChange,
  onBlur,
}: InputProps) => {
  const firstType = type;
  const [inputType, setInputType] = useState(type);

  const handleEye = () => {
    setInputType((prevType) => (prevType === 'password' ? 'text' : 'password'));
  };

  return (
    <div className={`flex flex-col items-start gap-2`}>
      {title && (
        <p className="text-black font-sans font-normal text-base leading-6">
          {title}
        </p>
      )}
      <div
        className={`relative`}
        style={{ width: `${width}`, height: `${height}` }}
      >
        <input
          className={`flex py-4 px-5 w-full rounded-md border ${
            isError ? 'border-red-40' : 'border-gray-30'
          } focus:outline-none focus:border-purple-40 bg-white items-start gap-2 self-stretch`}
          type={inputType}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
        />
        {firstType === 'password' && (
          <Image
            className={`absolute top-1/2 right-4 transform -translate-y-1/2 w-4 h-4 flex-shrink-0`}
            width={16}
            height={16}
            src={
              inputType === 'password'
                ? 'images/eye-off.svg'
                : 'images/eye-on.svg'
            }
            alt={'눈 표시'}
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
  );
};
