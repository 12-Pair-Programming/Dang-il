import React from 'react';
import { NoticeModal } from './noticeModal';
import { ConfirmModal } from './confirmModal';
import { WarningModal } from './warningModal';

interface ModalContentProps {
  content: string;
  closeModal: () => void;
  onCloseCallBack: () => void;
  type?: string;
}

export const ModalContent = ({
  content,
  closeModal,
  onCloseCallBack,
  type = 'check',
}: ModalContentProps) => {
  switch (type) {
    case 'warning':
      return <WarningModal content={content} closeModal={closeModal} />;
    case 'notice':
      return <NoticeModal content={content} closeModal={closeModal} />;
    case 'confirm':
      return (
        <ConfirmModal
          content={content}
          closeModal={closeModal}
          onCloseCallBack={onCloseCallBack}
        />
      );
    default:
      return;
  }
};
