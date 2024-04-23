import { useState } from 'react';

interface FilterProps {
  modalContent: string;
}

export const useFilterModal = ({ modalContent }: FilterProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState(modalContent);

  const openModal = () => {
    setIsOpen(true);
    setContent(modalContent);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return { isOpen, setIsOpen, openModal, closeModal, content };
};

//이건 모달 닫는 구현인데 안 쓰실거면 버려도 되요!
