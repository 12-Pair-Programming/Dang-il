import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { jwtDecode } from 'jwt-decode';
import userAPI from '@/shared/@common/api/userAPI';
import noticeAPI from '@/shared/@common/api/noticeAPI';
import Card from '@/shared/@common/notice/ui/Card';
import Button from '@/shared/@common/ui/Button/Button';
import shopAPI from '@/shared/@common/api/shopAPI';

const FindNotice = () => {
  const router = useRouter();
  const [isNotice, setIsNotice] = useState(true);
  const [cardList, setCardList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const decodedToken = token ? jwtDecode(token) : null;
        const userId = (decodedToken as any)?.userId || '';
        const userData = await userAPI.getUserData(userId);
        const shopId = userData.data.item.shop.item.id;

        const [shopData, noticeData] = await Promise.all([
          shopAPI.get(shopId),
          noticeAPI.getShopNoticeList({ shops_id: shopId }),
        ]);
        const formattedCardList = noticeData.data.items.map((item) => ({
          id: item.item.id,
          name: item.item.name,
          imageUrl: shopData.data.item.imageUrl,
          address1: shopData.data.item.address1,
          startsAt: item.item.startsAt,
          workhour: item.item.workhour,
          hourlyPay: item.item.hourlyPay,
          originalHourlyPay: shopData.data.item.originalHourlyPay,
          closed: item.item.closed,
        }));
        setCardList(formattedCardList);
      } catch (error) {
        console.error('Error fetching notice list:', error);
      }
    };

    fetchData();
  }, []); // 빈 배열을 넘겨서 컴포넌트가 처음 렌더링될 때 한 번만 호출

  const handleWritingNotice = () => {
    router.push('/noticeRegist');
  };

  return (
    <div className="flex pt-[60px] pb-[120px] px-[238px] flex-col items-start gap-2">
      <div className="flex flex-col items-start gap-8">
        <p className="text-black text-[28px] font-bold">
          {isNotice ? '내가 등록한 공고' : '등록한 공고'}
        </p>
        {isNotice ? (
          <div className="grid grid-cols-3 gap-6">
            {cardList.map((card) => (
              <Card
                key={card.id}
                name={card.name}
                imageUrl={card.imageUrl}
                address1={card.address1}
                startsAt={card.startsAt}
                workhour={card.workhour}
                hourlyPay={card.hourlyPay}
                originalHourlyPay={card.originalHourlyPay}
                closed={card.closed}
              />
            ))}
          </div>
        ) : (
          <div className="flex w-[964px] py-[60px] px-6 flex-col justify-center items-center gap-6 rounded-xl border border-solid border-gray-20">
            <p className="text-black align-center">공고를 등록해 보세요.</p>
            <Button size="large" color="colored" onClick={handleWritingNotice}>
              공고 등록하기
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FindNotice;
