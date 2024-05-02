import { useRouter } from 'next/router';
import NoticeShopInfo from '@/features/NoticeInfo/NoticeShopInfo';
import RecentNotices from '@/features/NoticeInfo/RecentNotices';
import EmployeeList from '@/features/NoticeInfo/EmployeeList';
import { NavigationBar } from '@/shared/@common/ui/Nav/NavigationBar';
import Footer from '@/shared/@common/ui/Footer/Footer';
import { useEffect } from 'react';
import Loading from '@/shared/@common/ui/Loading';

/**
 * 공고 상세 페이지 컴포넌트
 * @returns
 */
const NoticeInfo = () => {
  const userType =
    typeof window !== 'undefined' ? localStorage.getItem('user') : '';
  const token =
    typeof window !== 'undefined' ? localStorage.getItem('token') : '';
  const isLogin = token ? true : false;

  const router = useRouter();
  const { noticeId, shopId } = router.query;

  return (
    <>
      <NavigationBar />
      {!noticeId ? (
        <Loading />
      ) : (
        <div className="bg-white text-black items-center flex flex-col pb-20">
          <ShopInfo
            isLogin={isLogin}
            userType={userType as string}

            shopId={shopId as string}
            noticeId={noticeId as string}
          />
          {userType === 'employer' ? (
            <EmployeeList
              shopId={shopId as string}
              noticeId={noticeId as string}
            />
          ) : (
            <RecentNotices noticeId={noticeId as string} />
          )}
        </div>
      )}
      <Footer />
    </>
  );
};

export default NoticeInfo;
