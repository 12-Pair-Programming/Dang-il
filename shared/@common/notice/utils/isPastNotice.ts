/**
 * 시간을 받아서 현재 시간 대비 과거 시간인지를 확인합니다.
 * @param startsAt
 * @returns
 */
const isPastNotice = (startsAt: string) => {
  const startDateTime: Date = new Date(startsAt);
  const currentTime: Date = new Date();
  const isPast = startDateTime < currentTime;

  return isPast ? true : false;
};

export default isPastNotice;
