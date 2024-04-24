import Card from '@/shared/@common/notice/ui/Card';

/**
 * 최근에 본 공고 리스트 컴포넌트
 * @returns
 */
const RecentNotices = () => {
  console.log('Recent Notices');
  //TODO:
  //6개만 보여줘야 함
  //데이터 직접 연결 필요

  return (
    <div className="w-[963px] mt-[60px] mb-3 mx-[238px]">
      <div>
        <p className="text-[28px] font-bold">최근에 본 공고</p>
      </div>
      <div className="mt-8 flex gap-[14px]">
        <Card
          name="시급 비싼 가게"
          imageUrl="https://bootcamp-project-api.s3.ap-northeast-2.amazonaws.com/0-1/the-julge/afebf6d2-a410-4dba-84bc-c123468d7905-dump%20image.png"
          address1="서울시 강남구"
          startsAt="2023-07-07T18:00:00.000Z"
          workhour={12}
          hourlyPay={100000}
          originalHourlyPay={10000}
          closed={false}
        />
        <Card
          name=" 시급 동일 가게"
          imageUrl="https://bootcamp-project-api.s3.ap-northeast-2.amazonaws.com/0-1/the-julge/afebf6d2-a410-4dba-84bc-c123468d7905-dump%20image.png"
          address1="서울시 강남구"
          startsAt="2023-07-07T18:00:00.000Z"
          workhour={12}
          hourlyPay={1000}
          originalHourlyPay={1000}
          closed={false}
        />
        <Card
          name="시급 낮은 가게"
          imageUrl="https://bootcamp-project-api.s3.ap-northeast-2.amazonaws.com/0-1/the-julge/afebf6d2-a410-4dba-84bc-c123468d7905-dump%20image.png"
          address1="서울시 강남구"
          startsAt="2023-07-07T18:00:00.000Z"
          workhour={12}
          hourlyPay={100}
          originalHourlyPay={1000}
          closed={false}
        />
      </div>
      <div className="mt-8 flex gap-[14px]">
        <Card
          name="시급 비싼 가게"
          imageUrl="https://bootcamp-project-api.s3.ap-northeast-2.amazonaws.com/0-1/the-julge/afebf6d2-a410-4dba-84bc-c123468d7905-dump%20image.png"
          address1="서울시 강남구"
          startsAt="2023-07-07T18:00:00.000Z"
          workhour={12}
          hourlyPay={100000}
          originalHourlyPay={10000}
          closed={true}
        />
        <Card
          name=" 시급 동일 가게"
          imageUrl="https://bootcamp-project-api.s3.ap-northeast-2.amazonaws.com/0-1/the-julge/afebf6d2-a410-4dba-84bc-c123468d7905-dump%20image.png"
          address1="서울시 강남구"
          startsAt="2023-07-07T18:00:00.000Z"
          workhour={12}
          hourlyPay={1000}
          originalHourlyPay={1000}
          closed={true}
        />
        <Card
          name="시급 낮은 가게"
          imageUrl="https://bootcamp-project-api.s3.ap-northeast-2.amazonaws.com/0-1/the-julge/afebf6d2-a410-4dba-84bc-c123468d7905-dump%20image.png"
          address1="서울시 강남구"
          startsAt="2023-07-07T18:00:00.000Z"
          workhour={12}
          hourlyPay={100}
          originalHourlyPay={1000}
          closed={true}
        />
      </div>
    </div>
  );
};

export default RecentNotices;
