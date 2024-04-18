import Button from "@/shared/Button/Button";
import { useRouter } from "next/router";

const myShopInfo = () => {
  const router = useRouter();

  const handleWritingShopInfo = () => {
    /* 가게 등록하는 페이지로 이동시키기 */
    router.push('/registMyShop');
  }

  return (
    <>
      <div className="flex py-[60px] px-[237px] flex-col items-start gap-2 bg-white ">
        <p className="text-black text-[28px] font-bold">내 가게</p>
        <div className="flex w-full py-[60px] px-[24px] flex-col content-center items-center gap-6 rounded-xl border border-solid border-gray-20">
          <p className=" self-stretch text-center text-base">내 가게를 소개하고 공고도 등록해 보세요.</p>
          <Button size='large' color='colored' onClick={handleWritingShopInfo} content='가게 등록하기' />
        </div>
      </div>
    </>
  );
};

export default myShopInfo;