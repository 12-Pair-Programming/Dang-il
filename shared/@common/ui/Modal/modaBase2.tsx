import React, { useEffect, useRef } from 'react';
import ModalContent from './modalType/modalContent';

interface ModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onClose: () => void;
  content: string;
  type?: string;
}

export const Modal2: React.FC<ModalProps> = ({
  isOpen,
  setIsOpen,
  onClose,
  content,
  type,
}) => {
  const modalClick = useRef<HTMLDivElement>(null);

  const handleClick = (e: MouseEvent) => {
    if (modalClick.current && !modalClick.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  const closeModal = () => {
    setIsOpen(false);
    onClose();
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  return (
    <>
      {isOpen && (
        <div className="relative">
          <div
            className="absolute inline-flex flex-col align-top px-5 py-6 bg-red-300 rounded-[10px] gap-2"
            ref={modalClick}
            onMouseDown={(e) => e.stopPropagation()}
            style={{ top: 'calc(100% + 5px)', left: 0 }}
          >
            <div className=" w-[250px] h-[20px] bg-white"></div>
          </div>
        </div>
      )}
    </>
  );
};
