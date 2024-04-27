import HourlyPayForWon from './NoticePayInfo';
import NoticeTimeAndLocation from './NoticeTimeAndLocation';
import CardImage from './CardImage';

interface ProductProps {
  name: string; //가게명
  imageUrl: string; //가게 대표 이미지
  address1: string; //주소
  startsAt: string; //시작 일시
  workhour: number; //업무 시간
  hourlyPay: number; //공고 시급
  originalHourlyPay: number; //가게 기존 시급
  closed: boolean; //공고 오픈여부
}

/**
 * 해당 공고에 대한 **카드 컴포넌트 생성**
  @param name 가게명
  @param imageUrl 가게 대표 이미지
  @param address1 주소
  @param startsAt 시작 일시
  @param workhour 업무 시간
  @param hourlyPay 공고 시급
  @param originalHourlyPay 가게 기존 시급
  @param closed 공고 오픈여부
 */
const Card = ({
  name,
  imageUrl,
  address1,
  startsAt,
  workhour,
  hourlyPay,
  originalHourlyPay,
  closed,
}: ProductProps) => {
  return (
    <div className="bg-white border-[1px] rounded-2xl w-auto h-auto p-4">
      <div className="flex justify-center items-center relative rounded-2xl object-cover overflow-hidden w-auto h-[160px]">
        <CardImage imageUrl={imageUrl} closed={closed} />
      </div>
      <div className="w-[288px] mt-[15px]">
        <p
          className={`${
            closed ? 'text-gray-20' : 'text-black'
          } font-bold text-xl`}
        >
          {name}
        </p>
        <NoticeTimeAndLocation
          startsAt={startsAt}
          workhour={workhour}
          address1={address1}
          closed={closed}
        />
        <HourlyPayForWon
          hourlyPay={hourlyPay}
          closed={closed}
          fontSize="24px"
          originalHourlyPay={originalHourlyPay}
        />
      </div>
    </div>
  );
};

export default Card;
