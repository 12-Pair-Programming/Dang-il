import React from 'react';
import Image from 'next/image';

interface RadioButtonProps {
  id: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const RadioButton = ({ id, checked, onChange }: RadioButtonProps) => {
  return (
    <div className="flex items-center w-full relative">
      <input
        type="radio"
        id={id}
        name="userType"
        className="sr-only"
        checked={checked}
        onChange={onChange}
      />
      {checked && (
        <Image
          className={`absolute top-1/2 left-7 transform -translate-y-1/2 flex-shrink-0`}
          width={24}
          height={24}
          src={'/images/checkIcon.png'}
          alt="드롭다운"
        />
      )}
      <label
        htmlFor={id}
        className={`text-center relative px-[41px] py-[13px] cursor-pointer select-none w-full h-full border border-gray-300 rounded-full ${
          checked ? 'ring-2 ring-purple-40' : ''
        }`}
      >
        {id === 'employer' ? '사장님' : '알바님'}
      </label>
    </div>
  );
};
