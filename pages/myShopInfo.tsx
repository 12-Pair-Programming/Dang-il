import { useMediaQuery } from "react-responsive";
import Button from "@/shared/@common/ui/Button/Button";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const myShopInfo = () => {
  const router = useRouter();

  const handleWritingShopInfo = () => {
    /* 가게 등록하는 페이지로 이동시키기 */
    router.push('/registMyShop');
  }

  const [size, setSize] = useState('large');
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  useEffect(() => {
    if (isMobile) {
      setSize('small');
    } else {
      setSize('large');
    }
  }, []);



  return (
    <>
      <div className="flex py-[60px] px-[237px] flex-col items-start gap-2 bg-white ">
        <p className="text-black text-[28px] font-bold">내 가게</p>
        <div className="flex w-full py-[60px] px-[24px] flex-col content-center items-center gap-6 rounded-xl border border-solid border-gray-20">
          <p className=" self-stretch text-center text-base">내 가게를 소개하고 공고도 등록해 보세요.</p>
          <Button size={size} color='colored' onClick={handleWritingShopInfo} >
            가게 등록하기
          </Button>
        </div>
      </div>
    </>
  );
};

/*
  현재 Button이 반응형 동작할 때 mobile에서 size가 small로 변경되어야 하는데, 해결하지 못함. 주강사님께 여쭤보기로 함
*/

export default myShopInfo;

