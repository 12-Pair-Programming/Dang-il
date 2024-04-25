import React from 'react';
import dynamic from 'next/dynamic';

// 동적으로 로드할 컴포넌트들을 정의합니다.
const CustomNotice = dynamic(
  () => import('@/features/NoticeList/CustomNotice'),
);
const AllNotice = dynamic(() => import('@/features/NoticeList/AllNotice'));
const NavigationBar = dynamic(
  () => import('@/shared/@common/ui/Nav/NavigationBar'),
);
const Footer = dynamic(() => import('@/shared/@common/ui/Footer/Footer'));

const NoticeList = () => {
  return (
    <>
      <NavigationBar />
      <CustomNotice />
      <AllNotice />
      <Footer />
    </>
  );
};

export default NoticeList;
