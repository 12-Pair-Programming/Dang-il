import { useRouter } from 'next/router';
import ShopInfo from '@/features/NoticeInfo/ShopInfo';
import RecentNotices from '@/features/NoticeInfo/RecentNotices';
import EmployeeList from '@/features/NoticeInfo/EmployeeList';
import { NavigationBar } from '@/shared/@common/ui/Nav/NavigationBar';
import Footer from '@/shared/@common/ui/Footer/Footer';
import { useEffect } from 'react';

/**
 * 공고 상세 페이지 컴포넌트
 * @returns
 */
const NoticeInfo = () => {
  // TODO: 로그인 정보 연결 필요
  const userType = 'employee'; //user.item.type : employer | employee;
  const isLogin = true;

  const name = '김토큰';
  const router = useRouter();
  let { shopId, noticeId } = router.query;

  console.log('::NoticeInfo:::shopId::', shopId, '::noticeId:::', noticeId);

  //TODO: 새로고침을 할 때나 shopId, noticeId가 변경될 때 다시 그려주고 싶음
  useEffect(() => {
    shopId = router.query.shopId;
    noticeId = router.query.noticeId;
  }, [router.query]);

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
