import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useRouter } from "next/router";
import Button from "@/shared/@common/ui/Button/Button";
import Image from "next/image";
import RenderUserNoticeDiv from "./RenderUserNoticeDiv";





  // 가게 상태에 따라 다른 div 출력
  const RenderProfileDiv = () => {

    const router = useRouter();

    const handleWritingShopInfo = () => {
      /* 가게 등록하는 페이지로 이동시키기 */
      router.push('/registMyProfile');
    }
  
    const handleEditingProfileInfo = () => {
      /* 가게 정보 편집하는 페이지로 이동시키기 */
      router.push('/editMyProfile');
    }

    const [size, setSize] = useState('large');
    const isMobile = useMediaQuery({ query: '(min-width: 768px)' });
    const [isMyProfile, setIsMyProfile] = useState(true); // 가게 상태 추가
  
    useEffect(() => {
      if (isMobile) {
        setSize('large');
      } else {
        setSize('small');
      }
    }, [isMobile]);

    if (isMyProfile) {
      return (
        <>
          <div className="flex py-[60px] px-[238px] flex-col items-start self-stretch bg-white gap-2">
            <div className="flex flex-col items-start gap-180 self-stretch bg-white ">
              <p className="text-black text-[28px] font-bold">내 프로필</p>
              <div className="flex py-[60px] px-[238px] flex-col items-start gap-2 self-stretch ">
                <div className="flex w-[665px] p-8 flex-col items-start gap-2 rounded-xl bg-purple-10">
                  <div className="flex w-[392px] flex-col items-start gap-7">
                    <div className="flex flex-col items-start gap-3">
                      <div className="flex flex-col items-start gap-2">
                        <p className=" text-primary font-bold text-base">
                          이름
                        </p>
                        <p className="text-black text-[28px] font-bold">
                          김승우
                        </p>
                      </div>
                      <div className="flex items-center gap-[6px]">
                        <Image src={`/images/phone-icon.svg`} alt="핸드폰 로고" width={10} height={14} />
                        <p className="text-gray-50">010-0000-0000</p>
                      </div>
                      <div className="flex items-center gap-[6px]">
                        <Image src={`/images/icon-location-on.svg`} alt='위치 로고' width={20} height={20} />
                        <p className=" text-gray-50">서울시 송파구</p>
                      </div>
                    </div>
                  </div>
                  <p className="self-stretch text-black">어쩌구 저쩌구</p>
                  <div className="flex items-start gap-2 self-stretch">
                    <Button size='medium' color='none' onClick={handleEditingProfileInfo}>
                      편집하기
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <RenderUserNoticeDiv />
          </div>
        </>


      );
    } else {
      return (
        <div className="flex py-[60px] px-[238px] flex-col items-start gap-2 bg-white ">
          <p className="text-black text-[28px] font-bold">내 가게</p>
          <div className="flex w-full py-[60px] px-[24px] flex-col content-center items-center gap-6 rounded-xl border border-solid border-gray-20">
            <p className="text-black self-stretch text-center text-base">내 프로필을 등록하고 원하는 가게에 지원해 보세요.</p>
            <Button size={size} color='colored' onClick={handleWritingShopInfo}>
              내 프로필 등록하기
            </Button>
          </div>
        </div>
      );
    }
  };

  export default RenderProfileDiv;