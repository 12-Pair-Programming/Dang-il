import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Card from '@/shared/@common/notice/ui/Card';
import { Data, ItemData } from './AllNotice';
import useFetch from '@/shared/@common/api/hooks/useFetch';
import noticeAPI from '@/shared/@common/api/noticeAPI';
import userAPI from '@/shared/@common/api/userAPI';
import { jwtDecode } from 'jwt-decode';

const CustomNotice = () => {
  const user =
    typeof window !== 'undefined' ? localStorage.getItem('user') : '';
  const token =
    typeof window !== 'undefined' ? localStorage.getItem('token') : '';
  const decodedToken = token ? jwtDecode(token) : null;
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

  return (
    <div className="flex w-full py-[60px] px-auto flex-col items-center bg-purple-10">
      <div className="flex flex-col gap-10 px-4 w-[983px] tablet:w-[678px] mobile:max-w-[520px]">
        <div className="text-[28px] font-bold">맞춤 공고</div>
        <div className="w-[983px] tablet:w-[678px] mobile:max-w-[520px] flex items-start overflow-x-scroll scrollbar-hide gap-4">
          {userAddress && noticeData
            ? noticeData.items.length > 0 &&
              noticeData.items
                .filter(
                  (item: ItemData) =>
                    item.item.shop.item.address1 === userAddress,
                )
                .slice(0, 3)
                .map((item: ItemData) => (
                  <Link
                    href={`/noticeInfo?shopId=${item.item.shop.item.id}&noticeId=${item.item.id}`}
                    className="max-w-[310px] mobile:max-w-[236px]"
                  >
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
                ))
            : noticeData &&
              noticeData.items.length > 0 &&
              noticeData.items.slice(0, 3).map((item: ItemData) => (
                <Link
                  href={`/noticeInfo?shopId=${item.item.shop.item.id}&noticeId=${item.item.id}`}
                  className="max-w-[310px] mobile:max-w-[236px]"
                >
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
};

export default CustomNotice;
