import Image from 'next/image';

interface props {
  hourlyPay: number;
  originalHourlyPay: number;
  closed: boolean;
  fontSize: string;
  isPastNotice?: boolean;
}

/**
 * 시급 원표시, 기존 시급 대비 퍼센트를 보여주는 컴포넌트
 * - 시급과 닫힘 여부를 받아 닫힌 공고의 경우 그레이 컬러로 표시
 * @param hourlyPay 시급
 * @param originalHourlyPay 기존 시급
 * @param closed 닫힘 여부
 * @param fontSize ex : 4px
 * @param isPastNotice 지난 공고 여부
 * @returns
 */
const NoticePayInfo = ({
  hourlyPay,
  originalHourlyPay,
  closed,
  fontSize,
  isPastNotice,
}: props) => {
  const hourlyPayToString = `${hourlyPay.toLocaleString()}원`;

  let pay: number | null = payPercentage(hourlyPay, originalHourlyPay);

  return (
    <div className="flex items-center mt-4 mobile:flex-col mobile:items-start g-4">
      <p
        className={`${
          closed || isPastNotice ? 'text-gray-20' : 'text-black'
        } font-bold text-[${fontSize}] mobile: text-[18px] mr-3 whitespace-nowrap`}
      >
        {hourlyPayToString}
      </p>
      {pay ? (
        <div
          className={`${
            closed || isPastNotice
              ? 'bg-gray-20 text-white'
              : 'bg-primary text-white'
          } rounded-[20px] w-[159px] px-3 py-1 mobile:px-[0px] flex justify-center items-center mobile:bg-white mobile:items-start`}
        >
          <div className="text-[12px] w-[159px] text-white overflow-hidden whitespace-nowrap text-ellipsis mobile:text-purple-30 ">
            기존 시급보다 {pay}%⬆
          </div>
        </div>
      ) : (
        <div className="h-[26px] bg-white" />
      )}
    </div>
  );
};

/**
 * 기존 시급 대비 현재 시급을 퍼센트로 보여줌
 * @param hourlyPay
 * @param originalHourlyPay
 * @returns
 */
const payPercentage = (
  hourlyPay: number,
  originalHourlyPay: number,
): number | null => {
  const payDifference = hourlyPay - originalHourlyPay;
  if (payDifference > 0) {
    const increasePercentage: number =
      ((hourlyPay - originalHourlyPay) / originalHourlyPay) * 100;
    return increasePercentage;
  } else {
    return null;
  }
};

export default NoticePayInfo;
