import FindProfile from '@/features/MyProfileInfo/FindProfile';
import Footer from '@/shared/@common/ui/Footer/Footer';
import NavigationBar from '@/shared/@common/ui/Nav/NavigationBar';

const MyProfileInfo = () => {
  return (
    <>
      <NavigationBar />
      {FindProfile()} {/* 가게 상태에 따라 다른 div 렌더링 */}
      <Footer />
    </>
  );
};

export default MyProfileInfo;
