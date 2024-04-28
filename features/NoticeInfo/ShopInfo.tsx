import { useRouter } from 'next/router';
import HourlyPayForWon from '@/shared/@common/notice/ui/NoticePayInfo';
import NoticeTimeAndLocation from '@/shared/@common/notice/ui/NoticeTimeAndLocation';
import CardImage from '@/shared/@common/notice/ui/CardImage';
import Button from '@/shared/@common/ui/Button/Button';
import { Modal } from '@/shared/@common/ui/Modal/ModalBase';
import { useModal } from '@/shared/@common/ui/Modal/hook/modalHook';

import noticeAPI from '@/shared/@common/api/noticeAPI';
import shopAPI from '@/shared/@common/api/shopAPI';
import useFetch from '@/shared/@common/api/hooks/useFetch';
import { useEffect } from 'react';

interface props {
  userType: string;
  name: string;
  isLogin: boolean;

  shopId: string;
  noticeId: string;
}

interface Shop {
  item: {
    id: string;
    name: string;
    imageUrl: string;
    description: string;
    category: string;
    address1: string;
    address2: string;
    originalHourlyPay: number;
  };
}

interface Item {
  id: string;
  closed: boolean;
  currentUserApplication: number;
  description: string;
  hourlyPay: number;
  startsAt: string;
  workhour: number;
  shop: Shop;
}

/**
 * 가게 정보 카드 컴포넌트
 * @param userType 사용자 타입 employer | employee;
 * @param name 로그인 사용자 이름
 * @param isLogin 로그인 여부
 * @param shopId 가게 ID
 * @param noticeId 공고 ID
 */
const ShopInfo = ({
  userType,
  name,
  isLogin,

  shopId,
  noticeId,
}: props) => {
  const router = useRouter();

  const { data, loading } = useFetch(() => {
    return noticeAPI.getShopNotice({ shops_id: shopId, notice_id: noticeId });
  });

  let getdata: Item = data;
  if (data && !loading) {
    getdata = data.item;
  }
  console.log(data);
  useEffect(() => {
    //TODO: 데이터가 새로고침할 때 반영 안될때 있음. 확인 후 UseState로 데이터 관리?
    if (data && !loading) {
      let localData: string[] = JSON.parse(
        localStorage.getItem('recentNotices') || '[]',
      );
      localData.push(data.item);

      // 배열의 길이가 6 이상인 경우, 첫 번째 요소를 제거
      if (localData.length > 6) {
        localData.shift();
      }

      // 로컬 스토리지에 새로운 데이터를 저장
      localStorage.setItem('recentNotices', JSON.stringify(localData));
    }
  }, [loading]);

  //TODO: 유저의 지원 목록 조회
  //결과 값 에서 items.item.notice.item.id로 공고 id를 찾아서?
  //해당 items.item.status로 status 조회 필요
  //GET /users/{user_id}/applications
  const status = ''; //신청 여부 값. 이에 따라 취소 또는 신청 버튼 노출

  const handleEditeNotice = () => {
    console.log('click 로그인 중 - 공고 편집');
    // TODO: 편집페이지 이동 - 공고 id전달
    // 현재 공고 등록 페이지만 있는 듯 하여 확인 필요
    router.push(`/noticeRegist?noticeId=${noticeId}`);
  };

  const handleApplyNotice = () => {
    if (name) {
      console.log('click 로그인 중 - 공고 신청');
      // TODO: 신청 모달 팝업
      // 공고 지원 등록
      //POST /shops/{shop_id}/notices/{notice_id}/applications
    } else {
      console.log('click 로그인 중 - 공고 신청 - 프로필 등록 필요');
      // TODO: 프로필 등록 필요 모달 팝업
      // 확인 선택 시 아래 링크 이동
      //router.push(`/registMyProfile?noticeId=${noticeId}`);
    }
  };

  const handleCancelNotice = () => {
    console.log('click 로그인 중 - 공고 취소');
    // TODO: 취소 모달 팝업
    //PUT /shops/{shop_id}/notices/{notice_id}/applications/{application_id}
    //Request body : 지원자 취소 -"status" :  canceled
  };

  //TODO: 1.먼저 모달 훅 불러오고
  const { isOpen, setIsOpen, openModal, closeModal, type, content } = useModal({
    modalContent: '안녕',
    modalType: 'confirm',
  });
  console.log(data);
  return (
    <>
      {getdata && (
        <div className="py-[60px] mx-[238px]">
          <Modal
            content={content}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            onClose={closeModal}
            type={type}
          />
          <div>
            <p className="text-base font-bold text-primary">
              {getdata.shop.item.category}
            </p>
            <p className="text-[28px] font-bold">{getdata.shop.item.name}</p>
          </div>
          <div className="flex w-[963px] h-[365px] border-[1px] rounded-2xl p-6 mt-4">
            <div className="w-[640px] overflow-hidden rounded-2xl">
              {/* {getdata.shop.item.imageUrl && ( */}
              <CardImage
                imageUrl={getdata.shop.item.imageUrl}
                closed={getdata.closed}
                width={550}
                height={350}
              />
              {/* )} */}
            </div>
            <div className="w-[346px] ml-6 flex flex-col justify-between">
              <p className="text-base font-bold text-primary">시급</p>
              <HourlyPayForWon
                hourlyPay={getdata.hourlyPay}
                closed={getdata.closed}
                fontSize="24px"
                originalHourlyPay={getdata.shop.item.originalHourlyPay}
              />
              <NoticeTimeAndLocation
                startsAt={getdata.startsAt}
                workhour={getdata.workhour}
                address1={getdata.shop.item.address1}
                closed={false}
              />
              <p className="my-3">{getdata.shop.item.description}</p>
              {/* TODO: 로직 변경 필요 */}
              {userType === 'employer' ? (
                <Button
                  size="large"
                  color="none"
                  onClick={() => {
                    handleEditeNotice();
                  }}
                  disabled={false}
                >
                  공고편집
                </Button>
              ) : getdata.closed ? (
                <Button
                  size="large"
                  color="none"
                  onClick={() => {}}
                  disabled={true}
                >
                  신청 불가
                </Button>
              ) : status ? (
                <Button
                  size="large"
                  color="none"
                  onClick={() => {
                    handleCancelNotice();
                  }}
                  disabled={false}
                >
                  취소하기
                </Button>
              ) : (
                <Button
                  size="large"
                  color="colored"
                  // TODO: 모달 오픈
                  onClick={() => {
                    openModal();
                  }}
                  disabled={false}
                >
                  신청하기
                </Button>
              )}
            </div>
          </div>
          <div className="bg-gray-10 p-8 mt-6 rounded-lg w-[963px]">
            <p className="font-bold text-base">공고 설명</p>
            <p>{getdata.description}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ShopInfo;
