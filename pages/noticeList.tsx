import React from 'react';
import CustomNotice from '@/features/NoticeList/CustomNotice';
import FullNotice from '@/features/NoticeList/FullNotice';
import { Footer } from '@/shared/@common/ui/Footer/Footer';

const NoticeList = () => {
  return (
    <>
      <CustomNotice />
      <FullNotice />
      <Footer />
    </>
  );
};
