import { useState } from 'react';

interface ModalProps {
  modalContent?: string;
  modalType?: string;
}

export const useModal = ({
  modalContent = '내용 입력',
  modalType = 'notice',
}: ModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState(modalType);
  const [content, setContent] = useState(modalContent);
  const [isOk, setIsOk] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    setContent(modalContent);
    setType(modalType);
  };

  const closeModal = () => {
    setType('');
    setIsOpen(false);
  };

  const CallbackCloseMadal = () => {
    setIsOk(true);
    setIsOpen(false);
  };

  return {
    isOk,
    isOpen,
    setIsOpen,
    openModal,
    closeModal,
    CallbackCloseMadal,
    type,
    content,
  };
};
