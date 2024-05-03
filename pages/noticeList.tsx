import React from 'react';
import dynamic from 'next/dynamic';
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
