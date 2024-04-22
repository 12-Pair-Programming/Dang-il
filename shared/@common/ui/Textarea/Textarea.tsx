import React, { useState } from 'react';
import { TextareaChangeEvent, TextareaOnBlurEvent } from '../../types/helper';

interface TextareaProps {
  title: string;
  placeholder: string;
  width?: string;
  height?: string;
  isError?: boolean;
  errorText?: string;
  countText?: string;
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
  onChange,
  onBlur,
}: TextareaProps) => {
  return (
    <div className={`w-auto h-auto flex flex-col items-start gap-2`}>
      <p className="text-black font-sans font-normal text-base leading-6">
        {title}
      </p>
      <div
        className={`relative`}
        style={{ width: `${width}`, height: `${height}` }}
      >
        <textarea
          className={`flex py-4 px-5 w-full h-full rounded-md border ${
            isError ? 'border-red-40' : 'border-gray-30'
          } focus:outline-none focus:border-purple-40 bg-white items-start gap-2 self-stretch`}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
        />
        {countText && (
          <p className="h-6 absolute top-1/2 right-4 transform -translate-y-1/2 w-4  flex-shrink-0">
            {countText}
          </p>
        )}
      </div>
      {isError && <p className="text-red-500 pl-2 text-xs">{errorText}</p>}
    </div>
  );
};
