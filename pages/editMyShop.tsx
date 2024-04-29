import dynamic from 'next/dynamic';

const NavigationBar = dynamic(
  () => import('@/shared/@common/ui/Nav/NavigationBar'),
);
const EditingMyShop = dynamic(
  () => import('@/features/EditMyShop/EditingMyShop'),
);
const Footer = dynamic(() => import('@/shared/@common/ui/Footer/Footer'));

const editMyShop = () => {
  return (
    <>
      <NavigationBar />
      <EditingMyShop />
      <Footer />
    </>
  );
};

export default editMyShop;
