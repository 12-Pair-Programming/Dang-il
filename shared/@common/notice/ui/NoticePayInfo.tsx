import Image from 'next/image';

interface props {
  hourlyPay: number;
  originalHourlyPay: number;
  closed: boolean;
  fontSize: string;
}

/**
 * 시급 원표시, 기존 시급 대비 퍼센트를 보여주는 컴포넌트
 * - 시급과 닫힘 여부를 받아 닫힌 공고의 경우 그레이 컬러로 표시
 * @param hourlyPay 시급
 * @param originalHourlyPay 기존 시급
 * @param closed 닫힘 여부
 * @param fontSize ex : 4px
 * @returns
 */
const NoticePayInfo = ({
  hourlyPay,
  originalHourlyPay,
  closed,
  fontSize,
}: props) => {
  const hourlyPayToString = `${hourlyPay.toLocaleString()}원`;

  let pay: number | null = payPercentage(hourlyPay, originalHourlyPay);

  return (
    <div className="flex felx-row items-center mt-4">
      <p
        className={`${
          closed ? 'text-gray-20' : 'text-black'
        } font-bold text-[${fontSize}] mr-3`}
      >
        {hourlyPayToString}
      </p>
      {pay && (
        <div
          className={`${
            closed ? 'bg-gray-20 text-white' : 'bg-primary text-white'
          } rounded-[20px] w-[168px] p-3 flex flex-row`}
        >
          <p className="text-[14px] font-bold mr-1">기존 시급보다 {pay}%</p>

          <Image
            src="/images/icon-upArrow.svg"
            alt="upArrow icon"
            width={20}
            height={20}
          />
        </div>
      )}
    </div>
  );
};

/**
 * 기존 시급 대비 현재 사급을 퍼센트로 보여줌
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
