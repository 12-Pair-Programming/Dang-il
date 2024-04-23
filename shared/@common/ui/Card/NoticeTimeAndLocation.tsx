import Image from 'next/image';
import businessHoursString from './businessHoursString';

interface props {
  startsAt: string;
  workhour: number;
  address1: string;
  closed: boolean;
}

/**
 * 업무 시간 및 위치를 알려주는 컴포넌트
 * @param startsAt 시작 시간
 * @param workhour 작업 시간
 * @param address1 주소 앞부분
 * @param closed 닫힘 여부
 * @returns
 */
const NoticeTimeAndLocation = ({
  startsAt,
  workhour,
  address1,
  closed,
}: props) => {
  const businessHours = businessHoursString(startsAt, workhour);
  return (
    <>
      <div className="flex flex-row my-2">
        <Image
          src={`/images/icon-clock-${closed ? 'off' : 'on'}.svg`}
          alt="clock icon"
          width={20}
          height={20}
        />
        <p
          className={`${
            closed ? 'text-gray-20' : 'text-gray-50'
          } text-sm ml-[6px]`}
        >
          {businessHours}
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
            closed ? 'text-gray-20' : 'text-gray-50'
          } text-sm ml-[6px]`}
        >
          {address1}
        </p>
      </div>
    </>
  );
};

export default NoticeTimeAndLocation;
