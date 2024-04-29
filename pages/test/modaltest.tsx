import { Modal } from '@/shared/@common/ui/Modal/ModalBase';
import { useModal } from '@/shared/@common/ui/Modal/hook/modalHook';
import { useEffect, useState } from 'react';

const Modaltest = () => {
  const [modalContent, setModalContent] = useState('');
  const [modalType, setModalType] = useState('');

  const { isOk, isOpen, setIsOpen, openModal, closeModal, CallbackCloseMadal } =
    useModal({});

  const handleModalSet = (content: string, type: string) => {
    setModalContent(content);
    setModalType(type);
    openModal();
  };

  return (
    <>
      <div>
        <button
          onClick={() => {
            handleModalSet('모달1', 'confirm');
          }}
        >
          안녕
        </button>
        <button
          onClick={() => {
            handleModalSet('모달2', 'confirm');
          }}
        >
          잘가
        </button>
        {isOk ? '참' : '거짓'}
      </div>
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onClose={() => {
          closeModal();
        }}
        onCloseCallBack={CallbackCloseMadal}
        content={modalContent}
        type={modalType}
      />
    </>
  );
};

export default Modaltest;
