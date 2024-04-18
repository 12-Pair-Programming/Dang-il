import { useState } from 'react';

interface ModalProps {
  modalContent: string;
  modalType: string;
}

export const modalHook = ({ modalContent, modalType }: ModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState(modalType);
  const [content, setContent] = useState(modalContent);

  const openModal = () => {
    setIsOpen(true);
    setContent(modalContent);
    setType(modalType);
  };

  const closeModal = () => {
    setIsOpen(false);
    setType('');
  };

  return { isOpen, setIsOpen, openModal, closeModal, type, content };
};
