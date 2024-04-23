
import RenderProfileDiv from "@/features/MyProfileInfo/RenderProfileDiv";

const MyProfileInfo = () => {


  return (
    <>
      <div className="flex py-[60px] px-[237px] flex-col items-start gap-2 bg-white ">
        <p className="text-black text-[28px] font-bold">내 가게</p>
        {RenderProfileDiv()} {/* 가게 상태에 따라 다른 div 렌더링 */}
      </div>
    </>
  );
};

export default MyProfileInfo;
