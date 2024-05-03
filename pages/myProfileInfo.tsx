'use client';

import dynamic from 'next/dynamic';
const NavigationBar = dynamic(
  () => import('@/shared/@common/ui/Nav/NavigationBar'),
);
const Footer = dynamic(() => import('@/shared/@common/ui/Footer/Footer'));

const FindProfile = dynamic(
  () => import('@/features/MyProfileInfo/FindProfile'),
);

const MyProfileInfo = () => {
  return (
    <>
      <NavigationBar />
      <FindProfile />
      <Footer />
    </>
  );
};

export default MyProfileInfo;
