import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Card from '@/shared/@common/notice/ui/Card';
import { Data, ItemData } from './AllNotice';
import useFetch from '@/shared/@common/api/hooks/useFetch';
import noticeAPI from '@/shared/@common/api/noticeAPI';
import userAPI from '@/shared/@common/api/userAPI';
import { jwtDecode } from 'jwt-decode';

const CustomNotice = () => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token');
    const decodedToken = token ? jwtDecode(token) : null;
    const user = localStorage.getItem('user');
    const userId = (decodedToken as any)?.userId || '';

    const [noticeData, setNoticeData] = useState<Data>();
    const [address, setAddress] = useState('');

    const showNoticeData = async () => {
      const noticeData = await noticeAPI.getNoticeList({ address: address });
      setNoticeData(noticeData.data);
    };

    const { data, loading, error, execute } = useFetch(() => {
      return userAPI.getUserData(userId);
    });

    useEffect(() => {
      showNoticeData();
    }, [userId]);
    const userAddress = data && data.item.address;
    console.log(noticeData);
    return (
      <div className="flex w-full py-[60px] pc: px-auto flex-col items-center bg-purple-10 tracking-wide tablet:pl-8 tablet:items-start tablet:overflow-x-scroll tablet:whitespace-pre tablet:scrollbar-hide mobile:pl-3 mobile:overflow-x-scroll mobile:whitespace-pre mobile:scrollbar-hide mobile:items-start">
        <div className="flex flex-col gap-[31px] px-4">
          <div className="text-[28px] font-bold">맞춤 공고</div>
          <div className="flex gap-4">
            {userAddress && noticeData
              ? noticeData.items.length > 0 &&
                noticeData.items
                  .filter(
                    (item: ItemData) =>
                      item.item.shop.item.address1 === userAddress,
                  )
                  .slice(0, 3)
                  .map((item: ItemData) => (
                    <Link href={`/noticeInfo/${item.item.shop.item.id}`}>
                      <Card
                        name={item.item.shop.item.name}
                        imageUrl={item.item.shop.item.imageUrl}
                        address1={`${item.item.shop.item.address1} ${item.item.shop.item.address2}`}
                        startsAt={item.item.startsAt}
                        workhour={item.item.workhour}
                        hourlyPay={item.item.hourlyPay}
                        originalHourlyPay={
                          item.item.shop.item.originalHourlyPay
                        }
                        closed={item.item.closed}
                      />
                    </Link>
                  ))
              : noticeData &&
                noticeData.items.length > 0 &&
                noticeData.items.slice(0, 3).map((item: ItemData) => (
                  <Link href={`/noticeInfo/${item.item.shop.item.id}`}>
                    <Card
                      name={item.item.shop.item.name}
                      imageUrl={item.item.shop.item.imageUrl}
                      address1={`${item.item.shop.item.address1} ${item.item.shop.item.address2}`}
                      startsAt={item.item.startsAt}
                      workhour={item.item.workhour}
                      hourlyPay={item.item.hourlyPay}
                      originalHourlyPay={item.item.shop.item.originalHourlyPay}
                      closed={item.item.closed}
                    />
                  </Link>
                ))}
          </div>
        </div>
      </div>
    );
  }
};

export default CustomNotice;
