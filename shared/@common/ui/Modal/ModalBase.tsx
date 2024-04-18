import React, { useEffect, useRef } from 'react';
import { ModalContent } from './modalType/modalContent';

interface ModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onClose: () => void;
  content: string;
  type?: string;
}

export const Modal = ({
  isOpen,
  setIsOpen,
  onClose,
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
        <div className="fixed inset-0 flex items-center justify-center bg-gray-50 bg-opacity-50">
          <div
            className="flex flex-col justify-center items-center bg-white rounded-[12px] relative"
            ref={modalClick}
            onMouseDown={(e) => e.stopPropagation()}
          >
            <ModalContent
              content={content}
              closeModal={closeModal}
              type={type}
            />
          </div>
        </div>
      )}
    </>
  );
};

/*
  기본적인 훅 사용법
  const { isOpen, setIsOpen, openModal, closeModal, type, content } = modalHook(
    {
      modalContent: '안녕',
      modalType: 'check',
    },
  );

  기본적인 훅 사용법2 (다른 모달이 필요할 때)
  const {
    isOpen: isOpen2,
    setIsOpen: setIsOpen2,
    openModal: openModal2,
    closeModal: closeModal2,
    type: type2,
    content: content2,
  } = modalHook({
    modalContent: '안녕하세요',
    modalType: 'notice',
  });

  //원하는 버튼에 온 클릭으로 openModal(); 할당
      <button
        className=" absolute right-0"
        onClick={() => {
          openModal();
        }}
      >
        버튼
      </button>

  //모달 넣기 content가 모달내용! type은 confirm, check, notice가 존재하며 필요한 서식을 가져가면 될 듯 합니다!
      <Modal
        type={type}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onClose={closeModal}
        content={content}
      />



      ----

  또 다른 정의 방식(많을 때 사용하면 좋음)
  const modalConfigs = [
    { modalContent: '안녕', modalType: 'check' },
    { modalContent: '안녕하세요', modalType: 'notice' },
    { modalContent: '확인', modalType: 'warning' },
  ];

  const modals = modalConfigs.map((config) => modalHook(config));

  madals[i]으로도 사용 가능

*/
