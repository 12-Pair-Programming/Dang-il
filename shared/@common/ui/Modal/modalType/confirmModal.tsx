import React from 'react';
import Image from 'next/image';
import Button from '@/shared/@common/ui/Button/Button';

interface ConfirmModalProps {
  content: string;
  closeModal: () => void;
  onCloseCallBack: () => void;
}

export const ConfirmModal = ({
  content,
  closeModal,
  onCloseCallBack,
}: ConfirmModalProps) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-8 p-6">
      <div className="w-[250px] flex flex-col items-center gap-4">
        <Image
          width={24}
          height={24}
          src="/images/checkIcon.png"
          alt="checkIcon"
        />

        <p className="font-Pretendard font-medium text-base text-center">
          {content}
        </p>
      </div>
      <div className="flex gap-1">
        <Button size="medium" color="none" onClick={closeModal}>
          아니오
        </Button>
        <Button size="medium" color="colored" onClick={onCloseCallBack}>
          취소하기
        </Button>
      </div>
    </div>
  );
};
