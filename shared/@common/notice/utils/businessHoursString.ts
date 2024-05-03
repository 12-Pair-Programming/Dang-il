import dateToString from './dateToString';

/**
 * 시작일에 업무시간을 더해 종료 시간을 리턴
 * @param formattedStart
 * @param formattedEnd
 * @param workhour
 * @returns yyyy-mm-dd hh:mm~hh:mm (단, 날짜 넘어가는 경우 종료시간 앞에 mm-dd 추가)
 */
const businessHoursString = (startsAt: string, workhour: number) => {
  const startDateTime: Date = new Date(startsAt);
  const endDateTime: Date = new Date(
    startDateTime.getTime() + workhour * 60 * 60 * 1000,
  );

  const formattedStart: string = dateToString(startDateTime);
  const formattedEnd: string = dateToString(endDateTime);

  if (formattedStart.slice(0, 10) === formattedEnd.slice(0, 10)) {
    return `${formattedStart}~${formattedEnd.slice(11, 18)} (${workhour}시간)`;
  } else {
    return `${formattedStart}~${formattedEnd.slice(5)} (${workhour}시간)`;
  }
};

export default businessHoursString;
