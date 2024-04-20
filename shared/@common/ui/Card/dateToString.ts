/**
 * date형태의 값을 받아 해당 스트링 형태로 변환
 * @param startDateTime
 * @returns yyyy-mm-dd hh:mm
 */

const dateToString = (startDateTime: Date) => {
  const year = startDateTime.getUTCFullYear();
  const month = String(startDateTime.getUTCMonth() + 1).padStart(2, '0');
  const day = String(startDateTime.getUTCDate()).padStart(2, '0');
  const hours = String(startDateTime.getUTCHours()).padStart(2, '0');
  const minutes = String(startDateTime.getUTCMinutes()).padStart(2, '0');
  return `${year}-${month}-${day} ${hours}:${minutes}`;
};

export default dateToString;
