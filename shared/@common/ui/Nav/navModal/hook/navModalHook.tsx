import react, { useState } from 'react';

export const useNavModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    if (!isOpen) {
      setIsOpen(true);
    }
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return { isOpen, openModal, closeModal };
};
