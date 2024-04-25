import { useRouter } from 'next/router';
import HourlyPayForWon from '@/shared/@common/notice/ui/NoticePayInfo';
import NoticeTimeAndLocation from '@/shared/@common/notice/ui/NoticeTimeAndLocation';
import CardImage from '@/shared/@common/notice/ui/CardImage';
import Button from '@/shared/@common/ui/Button/Button';

interface props {
  userType: string;
  name: string;
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
 * @param name 로그인 사용자 이름
 * @param isLogin 로그인 여부
 * @param shopId 가게 ID
 * @param noticeId 공고 ID
 */
const ShopInfo = ({
  userType,
  name,
  isLogin,

  shopId,
  noticeId,
}: props) => {
  const router = useRouter();

  //TODO:  16L부터 item을 테스트 데이터 실제 데이터 연결 필요

  //가게의 특정 공고의 지원 목록 조회
  //GET /shops/{shop_id}/notices/{notice_id}

  //유저의 지원 목록 조회
  //결과 값 에서 items.item.notice.item.id로 공고 id를 찾아서?
  //해당 items.item.status로 status 조회 필요
  //GET /users/{user_id}/applications
  const status = ''; //신청 여부 값. 이에 따라 취소 또는 신청 버튼 노출

  const handleEditeNotice = () => {
    console.log('click 로그인 중 - 공고 편집');
    // TODO: 편집페이지 이동 - 공고 id전달
    // 현재 공고 등록 페이지만 있는 듯 하여 확인 필요
    router.push(`/noticeRegist?noticeId=${noticeId}`);
  };

  const handleApplyNotice = () => {
    if (name) {
      console.log('click 로그인 중 - 공고 신청');
      // TODO: 신청 모달 팝업
      // 공고 지원 등록
      //POST /shops/{shop_id}/notices/{notice_id}/applications
    } else {
      console.log('click 로그인 중 - 공고 신청 - 프로필 등록 필요');
      // TODO: 프로필 등록 필요 모달 팝업
      // 확인 선택 시 아래 링크 이동
      //router.push(`/registMyProfile?noticeId=${noticeId}`);
    }
  };

  const handleCancelNotice = () => {
    console.log('click 로그인 중 - 공고 취소');
    // TODO: 취소 모달 팝업
    //PUT /shops/{shop_id}/notices/{notice_id}/applications/{application_id}
    //Request body : 지원자 취소 -"status" :  canceled
  };

  return (
    <div className="py-[60px] mx-[238px]">
      <div>
        <p className="text-base font-bold text-primary">식당</p>
        <p className="text-[28px] font-bold">도토리 식당</p>
      </div>
      <div className="flex w-[963px] h-[365px] border-[1px] rounded-2xl p-6 mt-4">
        <div className="w-[596px] h-[320px] overflow-hidden">
          <CardImage
            imageUrl={item.shop.item.imageUrl}
            closed={item.closed}
            width={596}
            height={365}
          />
        </div>
        <div className="w-[346px] ml-6 flex flex-col justify-between">
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
                handleEditeNotice();
              }}
              disabled={false}
            >
              공고편집
            </Button>
          ) : item.closed ? (
            <Button
              size="large"
              color="none"
              onClick={() => {}}
              disabled={true}
            >
              신청 불가
            </Button>
          ) : status ? (
            // ) : item.currentUserApplication.item.status ? (
            <Button
              size="large"
              color="none"
              onClick={() => {
                handleCancelNotice();
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
                handleApplyNotice();
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
