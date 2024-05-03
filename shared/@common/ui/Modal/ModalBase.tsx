import React, { useEffect, useRef } from 'react';
import { ModalContent } from './modalType/modalContent';

interface ModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onClose: () => void;
  onCloseCallBack?: () => void;
  content: string;
  type?: string;
}

export const Modal = ({
  isOpen,
  setIsOpen,
  onClose,
  onCloseCallBack = () => {},
  content,
  type,
}: ModalProps) => {
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
        <div className="fixed inset-0 flex items-center justify-center bg-gray-50 bg-opacity-50 z-modalbackground">
          <div
            className="flex flex-col justify-center items-center bg-white rounded-[12px] relative z-modalbody"
            ref={modalClick}
            onMouseDown={(e) => e.stopPropagation()}
          >
            <ModalContent
              content={content}
              closeModal={closeModal}
              onCloseCallBack={onCloseCallBack}
              type={type}
            />
          </div>
        </div>
      )}
    </>
  );
};
