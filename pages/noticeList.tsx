import React from 'react';
import CustomNotice from '@/features/NoticeList/CustomNotice';
import AllNotice from '@/features/NoticeList/AllNotice';
import { Footer } from '@/shared/@common/ui/Footer/Footer';

const NoticeList = () => {
  return (
    <>
      <CustomNotice />
      <AllNotice />
      <Footer />
    </>
  );
};

export default NoticeList;
