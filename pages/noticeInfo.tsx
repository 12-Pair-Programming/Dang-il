import { useRouter } from 'next/router';
import ShopInfo from '@/features/NoticeInfo/ShopInfo';
import RecentNotices from '@/features/NoticeInfo/RecentNotices';
import EmployeeList from '@/features/NoticeInfo/EmployeeList';
import { NavigationBar } from '@/shared/@common/ui/Nav/NavigationBar';
import Footer from '@/shared/@common/ui/Footer/Footer';

/**
 * 공고 상세 페이지 컴포넌트
 * @returns
 */
const NoticeInfo = () => {
  // TODO: 로그인 정보 연결 필요
  const userType = 'employee'; //user.item.type : employer | employee;
  const isLogin = true;

  const name = '김코드';
  const router = useRouter();
  const { shopId, noticeId } = router.query;
  console.log(shopId);
  return (
    <>
      <NavigationBar />
      <div className="bg-white text-black items-center flex flex-col pb-20">
        <ShopInfo
          isLogin={isLogin}
          userType={userType}
          shopId={shopId}
          noticeId={noticeId}
          name={name}
        />
        {userType === 'employee' ? <RecentNotices /> : <EmployeeList />}
      </div>
      <Footer />
    </>
  );
};

export default NoticeInfo;
