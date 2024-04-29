import applicationAPI from '@/shared/@common/api/applicationAPI';
import userAPI from '@/shared/@common/api/userAPI';
import Button from '@/shared/@common/ui/Button/Button';
import Table from '@/shared/@common/ui/Table/Table';
import { jwtDecode } from 'jwt-decode';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const FindNotice = () => {
  const router = useRouter();
  const [isNotice, setIsNotice] = useState(false);
  const handleWritingNotice = () => {
    /* 공고 작성하는 페이지로 이동시키기 */
    router.push('/noticeList');
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const decodedToken = token ? jwtDecode(token) : null;
        const userId = (decodedToken as any)?.userId || '';
        const userData = await applicationAPI.getApplicationData(userId);
        setIsNotice(!!userData);
      } catch (error) {
        console.error('GET Error', error);
      }
    };
    fetchData();
  }, []);

  if (isNotice) {
    return (
      <div className="flex pt-[60px] pb-[120px] px-[238px] flex-col items-start gap-2 bg-white">
        <div className="flex flex-col items-start gap-[32px] self-stretch bg-white">
          <p className="text-black text-[28px] font-bold">신청 내역</p>
          <div className="flex flex-col items-start gap-8 w-full">
            <Table isEmployee={false} />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col px-[238px] py-[60px] items-start gap-8 bg-white">
        <p className="text-black text-[28px] font-bold">신청 내역</p>
        <div className="flex w-[964px] py-[60px] px-6 flex-col justify-center items-center gap-6 rounded-xl border border-solid border-gray-20">
          <p className="text-black align-center">아직 신청 내역이 없어요.</p>
          <Button size="large" color="colored" onClick={handleWritingNotice}>
            공고 보러가기
          </Button>
        </div>
      </div>
    );
  }
};

export default FindNotice;
