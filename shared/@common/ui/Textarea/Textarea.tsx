import React, { useState } from 'react';
import {
  TextareaChangeEvent,
  TextareaOnBlurEvent,
} from '@/shared/@common/types/helper';

interface TextareaProps {
  title: string;
  placeholder: string;
  width?: string;
  height?: string;
  isError?: boolean;
  errorText?: string;
  countText?: string;
  value?: string;
  onChange?: (event: TextareaChangeEvent) => void;
  onBlur?: (event: TextareaOnBlurEvent) => void;
}

export const Textarea = ({
  title = '제목을 입력해주세요.',
  placeholder = '값을 입력해주세요.',
  width = '350px',
  height = 'auto',
  isError = false,
  errorText,
  countText,
  value,
  onChange,
  onBlur,
}: TextareaProps) => {
  return (
    <div
      className={`flex flex-col items-start gap-2`}
      style={{ width: `${width}`, height: `${height}` }}
    >
      <p className="text-black font-sans font-normal text-base leading-6">
        {title}
      </p>
      <textarea
        className={`flex py-4 px-5 w-full h-full rounded-md border ${
          isError ? 'border-red-40' : 'border-gray-30'
        } focus:outline-none focus:border-purple-40 bg-white items-start gap-2 self-stretch`}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
      {countText && (
        <p className="h-6 absolute top-1/2 right-4 transform -translate-y-1/2 w-4  flex-shrink-0">
          {countText}
        </p>
      )}
      {isError && <p className="text-red-500 pl-2 text-xs">{errorText}</p>}
    </div>
  );
};
