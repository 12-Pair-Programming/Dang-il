import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

interface Option {
  value: string;
  label: string;
}

interface DropdownProps {
  options: Option[];
  onSelect: (value: string) => void;
  width?: string;
  defaultValue?: string;
  title?: string;
}

export const Dropdown = ({
  options,
  onSelect,
  title,
  width = '350px',
  defaultValue = '선택',
}: DropdownProps) => {
  const dropDownClickRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const defaultOption = options.find((option) => option.value === defaultValue);
  const [selectedOption, setSelectedOption] = useState(defaultOption || null);

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectOption = (option: Option) => {
    setSelectedOption(option);
    onSelect(option.value);
    setIsOpen(false);
  };

  const handleClick = (e: MouseEvent) => {
    if (
      dropDownClickRef.current &&
      !dropDownClickRef.current.contains(e.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  return (
    <div className={`flex flex-col items-start gap-2`}>
      {title && (
        <p className="font-sans font-normal text-base leading-6">{title}</p>
      )}
      <div
        className="relative inline-block w-80"
        ref={dropDownClickRef}
        onClick={handleToggleDropdown}
        style={{ width: `${width}` }}
      >
        <Image
          className={`absolute top-1/2 right-4 transform -translate-y-1/2 w-4 h-4 flex-shrink-0`}
          width={16}
          height={16}
          src={!isOpen ? '/images/dropdownDown.png' : '/images/dropdownUp.png'}
          alt="드롭다운"
        />
        <button
          style={{ width: '100%' }}
          className={`flex px-5 py-4 items-center border bg-white border-gray-30 rounded-md text-base font-normal leading-26px tracking-wide`}
        >
          {selectedOption?.label ?? defaultValue}
        </button>
        <div
          className={`absolute ${
            isOpen ? 'inline-flex' : 'hidden'
          } flex-col items-start rounded-md border-[2px] border-gray-20 bg-white shadow-md z-4 mt-2 overflow-y-auto overflow-x-hidden max-h-[200px] z-10 right-[7px]`}
        >
          {options.map((option, index) => (
            <div
              className={`w-[336px] flex px-4 py-3 items-center gap-4 cursor-pointer text-base font-normal leading-26 tracking--0.16 hover:bg-gray-100 ${
                index === options.length - 1
                  ? 'border-b-0'
                  : 'border-b border-gray-20'
              }`}
              key={option.value}
              onClick={() => handleSelectOption(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;

/*
넣을 값들
const dropdownRelationOptions = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '4', label: '4' },
    { value: '4', label: '4' },
    { value: '4', label: '4' },
    { value: '4', label: '4' },
    { value: '4', label: '4' },
  ];

  훅 사용법
  defaultOption:초기설정
  selectedOption:선택 값

  const { selectedOption, options, handleSelectOption } = dropdownHook({
    defaultOption: '1',
    options: dropdownRelationOptions,
  });

<Dropdown
          title={'드롭다운'}
          options={options}
          onSelect={handleSelectOption}
          defult={selectedOption}
        /> 
        */
