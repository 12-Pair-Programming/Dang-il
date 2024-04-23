
import RenderProfileDiv from "@/features/MyProfileInfo/RenderProfileDiv";

const MyProfileInfo = () => {


  return (
    <>
        {RenderProfileDiv()} {/* 가게 상태에 따라 다른 div 렌더링 */}
    </>
  );
};

export default MyProfileInfo;
