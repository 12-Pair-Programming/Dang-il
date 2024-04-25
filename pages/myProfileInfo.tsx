
import RenderProfileDiv from "@/features/MyProfileInfo/RenderProfileDiv";
import Footer from "@/shared/@common/ui/Footer/Footer";
import NavigationBar from "@/shared/@common/ui/Nav/NavigationBar";

const MyProfileInfo = () => {


  return (
    <>
      <NavigationBar />
      {RenderProfileDiv()} {/* 가게 상태에 따라 다른 div 렌더링 */}
      <Footer />
    </>
  );
};

export default MyProfileInfo;
