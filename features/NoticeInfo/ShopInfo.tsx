import HourlyPayForWon from '@/shared/@common/notice/ui/NoticePayInfo';
import NoticeTimeAndLocation from '@/shared/@common/notice/ui/NoticeTimeAndLocation';
import CardImage from '@/shared/@common/notice/ui/CardImage';

/**
 * 가게 정보 카드 컴포넌트
 * @returns
 */
const ShopInfo = () => {
  const closed = false;

  //TODO
  // 버튼 컴포넌트 연결 필요
  // 마감 된 경우 버튼 신청불가로 변경
  // 이미지 마감 완료 레이어 추가
  // 데이터 받아서 처리 필요
  console.log('ShopInfo');
  const hourlyPay = 30000;
  const address1 = '서울시 영등포구';
  const originalHourlyPay = 10000;
  const startsAt = '2023-07-07T18:00:00.000Z';
  const workhour = 5;
  const shopDescription =
    '알바하기 편한 너구리네 라면집! 라면 올려두고 끓이기만 하면 되어서 쉬운 편에 속하는 가게입니다.';
  const noticeDescription =
    '기존 알바 친구가 그만둬서 새로운 친구를 구했는데, 그 사이에 하루가 비네요. 급해서 시급도 높였고 그렇게 바쁜 날이 아니라서 괜찮을거예요.';
  const shopImageUrl =
    'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxODA4MDlfMzkg%2FMDAxNTMzNzc0NDQzMjM0.2tTaXYEZ5qoD4tSKJb1b_RReTCNCgCdYhSKO52GpxKog.0JV9pl0bPnDRZhEkAG3YAzOyu5_d3CpH4p4uQ2ciCZYg.JPEG.gyubin0804%2F1533774357467.jpg&type=sc960_832';

  return (
    <div className="my-[60px] mx-[238px]">
      <div>
        <p className="text-base font-bold text-primary">식당</p>
        <p className="text-[28px] font-bold">도토리 식당</p>
      </div>
      <div className="flex w-[963px] h-[365px] border-[1px] rounded-2xl p-6 mt-4">
        <CardImage
          imageUrl={shopImageUrl}
          closed={closed}
          width="596px"
          height="full"
        />
        <div className="w-[346px] ml-6">
          <p className="text-base font-bold text-primary">시급</p>
          <HourlyPayForWon
            hourlyPay={hourlyPay}
            closed={closed}
            fontSize="24px"
            originalHourlyPay={originalHourlyPay}
          />
          <NoticeTimeAndLocation
            startsAt={startsAt}
            workhour={workhour}
            address1={address1}
            closed={false}
          />
          <p className="my-3">{shopDescription}</p>
          {/* TODO: 버튼 연동 필요 */}
          <p>신청하기</p>
        </div>
      </div>
      <div className="bg-gray-10 p-8 mt-6 rounded-lg w-[963px]">
        <p className="font-bold text-base">공고 설명</p>
        <p>{noticeDescription}</p>
      </div>
    </div>
  );
};

export default ShopInfo;
