import { useState } from 'react';

interface ModalProps {
  modalContent: string;
}

export const useNavModal = ({ modalContent }: ModalProps) => {
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
