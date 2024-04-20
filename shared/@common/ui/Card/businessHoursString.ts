/**
 * 시작일에 업무시간을 더해 종료 시간을 리턴
 * @param formattedStart
 * @param formattedEnd
 * @param workhour
 * @returns yyyy-mm-dd hh:mm~hh:mm (단, 날짜 넘어가는 경우 종료시간 앞에 mm-dd 추가)
 */
const businessHoursString = (
  formattedStart: string,
  formattedEnd: string,
  workhour: number,
) => {
  if (formattedStart.slice(0, 10) === formattedEnd.slice(0, 10)) {
    return `${formattedStart}~${formattedEnd.slice(11, 18)} (${workhour}시간)`;
  } else {
    return `${formattedStart}~${formattedEnd.slice(5)} (${workhour}시간)`;
  }
};

export default businessHoursString;
