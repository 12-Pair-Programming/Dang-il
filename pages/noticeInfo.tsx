import ShopInfo from '@/features/NoticeInfo/ShopInfo';
import RecentNotices from '@/features/NoticeInfo/RecentNotices';
import EmployeeList from '@/features/NoticeInfo/EmployeeList';
import { NavigationBar } from '@/shared/@common/ui/Nav/NavigationBar';
import { Footer } from '@/shared/@common/ui/Footer/Footer';

/**
 * 공고 상세 페이지 컴포넌트
 * @returns
 */
const NoticeInfo = () => {
  // TODO: 로그인 정보 연결 필요
  const userType = 'employee'; //user.item.type : employer | employee;
  const isLogin = true;
  const shopId = '4490151c-5217-4157-b072-9c37b05bed47';
  const noticeId = '99996477-82db-4bda-aae1-4044f11d9a8b';

  return (
    <>
      <NavigationBar />
      <div className="bg-white text-black items-center flex flex-col pb-20">
        <ShopInfo
          isLogin={isLogin}
          userType={userType}
          shopId={shopId}
          noticeId={noticeId}
        />
        {userType === 'employee' ? <RecentNotices /> : <EmployeeList />}
      </div>
      <Footer />
    </>
  );
};

export default NoticeInfo;
