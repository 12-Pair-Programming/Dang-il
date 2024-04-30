import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import alertAPI from '@/shared/@common/api/alertAPI';

interface NavModalMessageProps {
  messageKey: string;
  shop_id: string;
  user_id: string;
  notice_id: string;
  checked: boolean;
  isResult: string;
  noticeName: string;
  noticePeriod: string;
  createdAt: Date;
}

export const NavModalMessage = ({
  messageKey,
  shop_id,
  user_id,
  notice_id,
  checked,
  isResult,
  noticeName,
  noticePeriod,
  createdAt,
}: NavModalMessageProps) => {
  const [result, setResult] = useState('승인');
  useState(() => {
    isResult === 'accepted' ? setResult('승인') : setResult('거절');
  });
  const router = useRouter();
  const currentTime = new Date().getTime();
  const noticeTime = new Date(createdAt).getTime();
  const minutesAgo = Math.round((currentTime - noticeTime) / (1000 * 60));

  return (
    <div
      className="flex w-[328px] gap-1 px-3 py-4 flex-col bg-white mobile:w-full cursor-pointer"
      style={{ opacity: checked ? 0.5 : 1 }}
      onClick={() => {
        alertAPI.put({ user_id: user_id, alert_id: messageKey });
        router.push(`/noticeInfo?shopId=${shop_id}&noticeId=${notice_id}`);
      }}
    >
      <Image
        width={5}
        height={5}
        alt="상태 표시등"
        src={
          isResult === 'accepted'
            ? '/images/accepted.png'
            : '/images/rejected.png'
        }
      />
      <div>
        {noticeName}({noticePeriod}) 공고 지원이
        <span
          className={`${result === '승인' ? 'text-purple-40' : 'text-red-40'}`}
        >
          {result}
        </span>
        되었어요.
      </div>
      <div>{minutesAgo}분 전</div>
    </div>
  );
};
