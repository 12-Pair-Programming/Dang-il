import { useState } from 'react';

interface Option {
  value: string;
  label: string;
}

interface DropdownHookProps {
  options: Option[];
}

export const useDropdown = ({ options }: DropdownHookProps) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectOption = (option: string) => {
    setSelectedOption(option);
  };

  return {
    selectedOption,
    options,
    handleSelectOption,
  };
};
