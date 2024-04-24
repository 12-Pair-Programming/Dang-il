import HourlyPayForWon from '@/shared/@common/notice/ui/NoticePayInfo';
import NoticeTimeAndLocation from '@/shared/@common/notice/ui/NoticeTimeAndLocation';
import CardImage from '@/shared/@common/notice/ui/CardImage';
import Button from '@/shared/@common/ui/Button/Button';

interface props {
  userType: string;
  isLogin: boolean;
  closed: boolean;
  status?: string;
  hourlyPay: number;
  address1: string;
  originalHourlyPay: number;
  startsAt: string;
  workhour: number;
  shopDescription: string;
  noticeDescription: string;
  shopImageUrl: string;
}

/**
 * 가게 정보 카드 컴포넌트
 * @param userType 사용자 타입 employer | employee;
 * @param isLogin 로그인 여부
 * @param status 미지원은 공백 , 지원 상태 pending | accepted | rejected | canceled
 * @param closed 공고 닫힘 여부
 * @param hourlyPay 시급
 * @param address1 위치
 * @param originalHourlyPay 가게 원래 시급
 * @param startsAt 시작시간
 * @param workhour 근무시간
 * @param shopDescription 가게 설명
 * @param noticeDescription 공고 설명
 * @param shopImageUrl 가게 이미지
 */
const ShopInfo = ({
  userType,
  isLogin,
  status,
  closed,
  hourlyPay,
  address1,
  originalHourlyPay,
  startsAt,
  workhour,
  shopDescription,
  noticeDescription,
  shopImageUrl,
}: props) => {
  //TODO 테스트 데이터 실제 데이터 연결 필요
  closed = false; //test위한 임시 코드
  isLogin = false; //test위한 임시 코드
  console.log('ShopInfo');

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
    <div className="my-[60px] mx-[238px]">
      <div>
        <p className="text-base font-bold text-primary">식당</p>
        <p className="text-[28px] font-bold">도토리 식당</p>
      </div>
      <div className="flex w-[963px] h-[365px] border-[1px] rounded-2xl p-6 mt-4">
        <div className="w-[596px] h-[292px] overflow-hidden">
          <CardImage
            imageUrl={shopImageUrl}
            closed={closed}
            width={596}
            height={292}
          />
        </div>
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
          ) : status ? (
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
        <p>{noticeDescription}</p>
      </div>
    </div>
  );
};

export default ShopInfo;
