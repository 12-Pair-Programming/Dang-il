import ShopInfo from '@/features/NoticeInfo/ShopInfo';
import RecentNotices from '@/features/NoticeInfo/RecentNotices';
import EmployeeList from '@/features/NoticeInfo/EmployeeList';

/**
 * 공고 상세 페이지 컴포넌트
 * @returns
 */
const NoticeInfo = () => {
  // TODO: 로그인 정보 연결 필요
  const userType = 'employee'; //user.item.type : employer | employee;
  const isLogin = true;

  //TODO: 목업 데이터 api연결해서 받아와야 함

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

  const closed = item.closed;
  const status = item.currentUserApplication.item.status;
  const hourlyPay = item.hourlyPay;
  const address1 = item.shop.item.address1;
  const originalHourlyPay = item.shop.item.originalHourlyPay;
  const startsAt = item.startsAt;
  const workhour = item.workhour;
  const shopDescription = item.shop.item.description;
  const noticeDescription = item.description;
  const shopImageUrl = item.shop.item.imageUrl;

  return (
    <div className="bg-white text-black">
      <ShopInfo
        userType={userType}
        isLogin={isLogin}
        closed={closed}
        status={status}
        hourlyPay={hourlyPay}
        address1={address1}
        originalHourlyPay={originalHourlyPay}
        startsAt={startsAt}
        workhour={workhour}
        shopDescription={shopDescription}
        noticeDescription={noticeDescription}
        shopImageUrl={shopImageUrl}
      />
      {userType === 'employer' ? <EmployeeList /> : <RecentNotices />}
    </div>
  );
};

export default NoticeInfo;
