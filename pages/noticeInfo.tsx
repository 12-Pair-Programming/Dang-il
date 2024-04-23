import ShopInfo from '@/features/NoticeInfo/ShopInfo';
import RecentNotices from '@/features/NoticeInfo/RecentNotices';

/**
 * 공고 상세 페이지 컴포넌트
 * @returns
 */
const NoticeInfo = () => {
  //TODO: 데이터 받아서 각 컴포넌트에 전달 필요
  //1. 로그인 정보가 있는 경우
  //  - 신청하기 버튼 동작
  //  - 프로필이 없는 경우 신청하기 버튼에서 모달이 떠야 함
  //  - 취소하기 버튼 동작
  //  - 로그인 정보가 없는 경우 신청하기 버튼에서 모달이 떠야 함
  return (
    <div className="bg-white text-black">
      <div className="">
        <ShopInfo />
      </div>
      <div>
        <RecentNotices />
      </div>
    </div>
  );
};

export default NoticeInfo;
