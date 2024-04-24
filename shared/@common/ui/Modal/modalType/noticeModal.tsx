import Button from '@/shared/Button/Button';
import React from 'react';

interface NoticeModalProps {
  content: string;
  closeModal: () => void;
}

export const NoticeModal = ({ content, closeModal }: NoticeModalProps) => {
  return (
    <div className="w-[540px] h-[250px] flex flex-col items-center justify-center p-6">
      <div className="flex flex-col items-center justify-center gap-4 h-full">
        <p className="font-Pretendard font-medium text-base text-center">
          {content}
        </p>
      </div>
      <div className="flex justify-end w-full">
        <Button size="medium" color="colored" onClick={closeModal}>
          확인
        </Button>
      </div>
    </div>
  );
};
