import RenderShopDiv from '@/features/MyShopInfo/RenderShopDiv';
import Footer from '@/shared/@common/ui/Footer/Footer';
import NavigationBar from '@/shared/@common/ui/Nav/NavigationBar';

const MyShopInfo = () => {
  return (
    <div className="flex flex-col justify-center items-start">
      <NavigationBar />
      <div className="flex py-[60px] px-[237px] flex-col items-start gap-2 bg-white ">
        <p className="text-black text-[28px] font-bold">내 가게</p>
        {RenderShopDiv()} {/* 가게 상태에 따라 다른 div 렌더링 */}
      </div>
      <Footer />
    </div>
  );
};

export default MyShopInfo;
