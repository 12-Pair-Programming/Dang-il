import dynamic from 'next/dynamic';

const FindShop = dynamic(() => import('@/features/MyShopInfo/FindShop'));
const NavigationBar = dynamic(
  () => import('@/shared/@common/ui/Nav/NavigationBar'),
);
const Footer = dynamic(() => import('@/shared/@common/ui/Footer/Footer'));

const MyShopInfo = () => {
  if (typeof window !== 'undefined') {
    return (
      <>
        <NavigationBar />
        <FindShop />
        <Footer />
      </>
    );
  }
};

export default MyShopInfo;
