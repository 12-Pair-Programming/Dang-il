import Image from 'next/image';
import { Inter } from 'next/font/google';
import Card from '../shared/@common/notice/ui/Card';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Card
        name="가게명"
        imageUrl="https://img.sbs.co.kr/newsnet/etv/upload/2022/09/19/30000790950.jpg"
        address1="서울시 강남구"
        startsAt="2023-07-07T18:00:00.000Z"
        workhour={12}
        hourlyPay={130}
        originalHourlyPay={1333}
        closed={false}
      />
    </main>
  );
}
