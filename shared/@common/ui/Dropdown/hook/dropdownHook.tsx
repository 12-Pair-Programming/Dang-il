import { useState } from 'react';

interface Option {
  value: string;
  label: string;
}

interface DropdownHookProps {
  options: Option[];
  defaultOption: string;
}

export const useDropdown = ({ defaultOption, options }: DropdownHookProps) => {
  const [selectedOption, setSelectedOption] = useState(defaultOption);

  const handleSelectOption = (option: string) => {
    setSelectedOption(option);
  };

  return {
    selectedOption,
    options,
    handleSelectOption,
  };
};
