import dynamic from 'next/dynamic';

const FindShop = dynamic(() => import('@/features/MyShopInfo/FindShop'));
const NavigationBar = dynamic(
  () => import('@/shared/@common/ui/Nav/NavigationBar'),
);
const Footer = dynamic(() => import('@/shared/@common/ui/Footer/Footer'));

const MyShopInfo = () => {
  return (
    <div className="bg-white h-[100vh]">
      <NavigationBar />
      <FindShop />
      <Footer />
    </div>
  );
};

export default MyShopInfo;
