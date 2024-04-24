import React from 'react';
import Image from 'next/image';
import Button from '@/shared/Button/Button';

interface WarningModalProps {
  content: string;
  closeModal: () => void;
}

export const WarningModal = ({ content, closeModal }: WarningModalProps) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-8 p-6">
      <div className="w-[250px] flex flex-col items-center gap-4">
        <Image
          width={24}
          height={24}
          src="/images/warningIcon.png"
          alt="warningIcon"
        />
        <p className="font-Pretendard font-medium text-base text-center">
          {content}
        </p>
      </div>
      <div className="flex gap-1">
        <Button size="medium" color="none" onClick={closeModal}>
          확인
        </Button>
      </div>
    </div>
  );
};
