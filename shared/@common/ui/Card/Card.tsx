import Image from 'next/image';

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
const Card = (props: ProductProps) => {
  // TODO workingHours 및 컴포넌트 파일 분리 필요

  const closed = props.closed;
  const originalHourlyPay = `${props.originalHourlyPay.toLocaleString()}원`;
  const payPercentage =
    Math.round((props.hourlyPay / props.originalHourlyPay) * 100 * 100) / 100;

  const startsAt: Date = new Date(props.startsAt);
  const workhour: number = props.workhour;
  const endDateTime: Date = new Date(
    startsAt.getTime() + workhour * 60 * 60 * 1000,
  );

  const workingHours = () => {
    if (formattedStart.slice(0, 10) === formattedEnd.slice(0, 10)) {
      return `${formattedStart}~${formattedEnd.slice(
        11,
        18,
      )} (${workhour}시간)`;
    } else {
      return `${formattedStart}~${formattedEnd.slice(5)} (${workhour}시간)`;
    }
  };

  const stringToDate = (startsAt: Date) => {
    const year = startsAt.getUTCFullYear();
    const month = String(startsAt.getUTCMonth() + 1).padStart(2, '0');
    const day = String(startsAt.getUTCDate()).padStart(2, '0');
    const hours = String(startsAt.getUTCHours()).padStart(2, '0');
    const minutes = String(startsAt.getUTCMinutes()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}`;
  };

  const formattedStart: string = stringToDate(startsAt);
  const formattedEnd: string = stringToDate(endDateTime);

  return (
    <div className="bg-white rounded-2xl w-[312px] h-auto p-[16px]">
      <div className="flex justify-center items-center relative w-[280px] h-[180px]">
        <img
          className="rounded-2xl bg-cover w-full h-full"
          src={props.imageUrl}
        />

        {closed && (
          <>
            <div className="absolute items-center bg-black opacity-50 w-full h-full rounded-2xl"></div>
            <p className="absolute text-[28px] font-bold text-gray-30">
              지난 공고
            </p>
          </>
        )}
      </div>

      <div className="w-[288px] mt-[15px]">
        <p
          className={`${
            closed ? 'text-gray-20' : 'text-black'
          } font-bold text-xl`}
        >
          {props.name}
        </p>
        <div className="flex flex-row my-2">
          <Image
            src={`/images/icon-clock-${closed ? 'off' : 'on'}.svg`}
            alt="clock icon"
            width={20}
            height={20}
          />
          <p
            className={`${
              closed ? 'text-gray-20' : 'text-black'
            } text-sm ml-[6px]`}
          >
            {workingHours()}
          </p>
        </div>
        <div className="flex flex-row">
          <Image
            src={`/images/icon-location-${closed ? 'off' : 'on'}.svg`}
            alt="location icon"
            width={20}
            height={20}
          />
          <p
            className={`${
              closed ? 'text-gray-20' : 'text-black'
            } text-sm ml-[6px]`}
          >
            {props.address1}
          </p>
        </div>
        <div className="flex felx-row justify-between items-center mt-4">
          <p
            className={`${
              closed ? 'text-gray-20' : 'text-black'
            } font-bold text-[24px]`}
          >
            {originalHourlyPay}
          </p>
          <div
            className={`${
              closed ? 'bg-gray-20' : 'bg-red-40'
            } rounded-[20px] w-[168px] p-[12px] flex felx-row`}
          >
            <p className="text-[14px] font-bold">
              기존 시급보다 {payPercentage}%
            </p>
            <Image
              src="/images/icon-upArrow.svg"
              alt="upArrow icon"
              width={20}
              height={20}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
