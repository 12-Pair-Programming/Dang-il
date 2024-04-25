import HourlyPayForWon from '@/shared/@common/notice/ui/NoticePayInfo';
import NoticeTimeAndLocation from '@/shared/@common/notice/ui/NoticeTimeAndLocation';
import CardImage from '@/shared/@common/notice/ui/CardImage';
import Button from '@/shared/@common/ui/Button/Button';

interface props {
  userType: string;
  isLogin: boolean;

  shopId: string;
  noticeId: string;
}

const item = {
  id: 'string',
  hourlyPay: 30000,
  startsAt: '2023-07-07T18:00:00.000Z',
  workhour: 5,
  description:
    '기존 알바 친구가 그만둬서 새로운 친구를 구했는데, 그 사이에 하루가 비네요. 급해서 시급도 높였고 그렇게 바쁜 날이 아니라서 괜찮을거예요.',
  closed: false,
  shop: {
    item: {
      id: 'string',
      name: 'string',
      category: 'string',
      address1: '서울시 영등포구',
      address2: 'string',
      description:
        '알바하기 편한 너구리네 라면집! 라면 올려두고 끓이기만 하면 되어서 쉬운 편에 속하는 가게입니다.',
      imageUrl: '/images/icon-clock-on.svg',
      // 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxODA4MDlfMzkg%2FMDAxNTMzNzc0NDQzMjM0.2tTaXYEZ5qoD4tSKJb1b_RReTCNCgCdYhSKO52GpxKog.0JV9pl0bPnDRZhEkAG3YAzOyu5_d3CpH4p4uQ2ciCZYg.JPEG.gyubin0804%2F1533774357467.jpg&type=sc960_832',
      originalHourlyPay: 10000,
    },
    href: 'string',
  },
  currentUserApplication: {
    item: {
      id: 'string', // application.id,
      status: 'pending | accepted | rejected | canceled', // application.status
      createdAt: 'string', // application.createdAt
    },
  },
};

/**
 * 가게 정보 카드 컴포넌트
 * @param userType 사용자 타입 employer | employee;
 * @param isLogin 로그인 여부
 *
 * @param shopId 가게 ID
 * @param noticeId 공고 ID
 */
const ShopInfo = ({
  userType,
  isLogin,

  shopId,
  noticeId,
}: props) => {
  //TODO 테스트 데이터 실제 데이터 연결 필요

  //GET /shops/{shop_id}/notices/{notice_id}

  const handleClick = (state: string) => {
    if (isLogin) {
      console.log('click 로그인 중');
      if (state === 'cancel') {
        console.log('click 로그인 중 - 캔슬');
        //취소 모달
      } else if (state === 'apply') {
        console.log('click 로그인 중 - 신청');
        //프로필이 없는 경우 모달 넣어야 함.
      }
    } else {
      console.log('click 오프라인');
      //isLogin 이 false이면 모달 오픈
    }
  };

  const handleEmployerClick = () => {
    console.log('click 로그인 중 - 공고 편집');
  };

  return (
    <div className="py-[60px] mx-[238px]">
      <div>
        <p className="text-base font-bold text-primary">식당</p>
        <p className="text-[28px] font-bold">도토리 식당</p>
      </div>
      <div className="flex w-[963px] h-[365px] border-[1px] rounded-2xl p-6 mt-4">
        <div className="w-[596px] h-[292px] overflow-hidden">
          <CardImage
            imageUrl={item.shop.item.imageUrl}
            closed={item.closed}
            width={596}
            height={292}
          />
        </div>
        <div className="w-[346px] ml-6">
          <p className="text-base font-bold text-primary">시급</p>
          <HourlyPayForWon
            hourlyPay={item.hourlyPay}
            closed={item.closed}
            fontSize="24px"
            originalHourlyPay={item.shop.item.originalHourlyPay}
          />
          <NoticeTimeAndLocation
            startsAt={item.startsAt}
            workhour={item.workhour}
            address1={item.shop.item.address1}
            closed={false}
          />
          <p className="my-3">{item.shop.item.description}</p>
          {userType === 'employer' ? (
            <Button
              size="large"
              color="none"
              onClick={() => {
                handleEmployerClick();
              }}
              disabled={false}
            >
              공고편집
            </Button>
          ) : item.currentUserApplication.item.status ? (
            <Button
              size="large"
              color="none"
              onClick={() => {
                handleClick('cancel');
              }}
              disabled={false}
            >
              취소하기
            </Button>
          ) : (
            <Button
              size="large"
              color="colored"
              onClick={() => {
                handleClick('apply');
              }}
              disabled={false}
            >
              신청하기
            </Button>
          )}
        </div>
      </div>
      <div className="bg-gray-10 p-8 mt-6 rounded-lg w-[963px]">
        <p className="font-bold text-base">공고 설명</p>
        <p>{item.description}</p>
      </div>
    </div>
  );
};

export default ShopInfo;
