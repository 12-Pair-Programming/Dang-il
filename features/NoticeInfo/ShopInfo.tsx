import { useRouter } from 'next/router';
import HourlyPayForWon from '@/shared/@common/notice/ui/NoticePayInfo';
import NoticeTimeAndLocation from '@/shared/@common/notice/ui/NoticeTimeAndLocation';
import CardImage from '@/shared/@common/notice/ui/CardImage';
import Button from '@/shared/@common/ui/Button/Button';
import { Modal } from '@/shared/@common/ui/Modal/ModalBase';
import { useModal } from '@/shared/@common/ui/Modal/hook/modalHook';

import noticeAPI from '@/shared/@common/api/noticeAPI';
import applicationAPI from '@/shared/@common/api/applicationAPI';
import useFetch from '@/shared/@common/api/hooks/useFetch';
import { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';

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

  const [modalContent, setModalContent] = useState('');
  const [modalType, setModalType] = useState('');

  const token = localStorage.getItem('token');
  const decodedToken = token ? jwtDecode(token) : null;
  const userId = (decodedToken as any)?.userId || '';

  //최초는 공백. 신청하면 pending 신청 취소시 canceled
  // FIXME: 임시 상태값. pending(대기중) accepted(승인) rejected(거절) canceled(취소)
  const [status, setStatus] = useState('canceled');

  //TODO: 유저의 지원 목록 조회
  // status가 존재하지 않는 경우
  //공고 신청을 누를 때 localStorage에 회원ID, 공고ID를 불러와서 존재 하는 경우 pending
  // noticePendings = [{userId : 'id-1',noticeId : ['notice-1','notice-2','notice-3']},{userId : 'id-2',noticeId : ['notice-1','notice-2','notice-3']} ,{userId : 'id-3',noticeId : ['notice-1','notice-2','notice-3']}  ]
  let recentAplication = localStorage.getItem('recentAplication');

  const { data, loading } = useFetch(() => {
    return noticeAPI.getShopNotice({ shops_id: shopId, notice_id: noticeId });
  });

  let getdata: Item = data;
  if (data && !loading) {
    getdata = data.item;
  }

  useEffect(() => {
    if (data && !loading) {
      setLocalStorage('recentNotices', data);
    }
  }, [loading, shopId, noticeId]);

  const { isOpen, setIsOpen, openModal, closeModal, CallbackCloseMadal } =
    useModal({});

  const handleEditeNotice = () => {
    console.log('click 로그인 중 - 공고 편집');
    // TODO: 편집페이지 이동 - 공고 id전달
    // 현재 공고 등록 페이지만 있는 듯 하여 확인 필요
    router.push(`/noticeRegist?noticeId=${noticeId}`);
  };

  /** 공고 신청 버튼 클릭 */
  const handleApplyNotice = () => {
    if (name) {
      const handleTotalSubmit = async () => {
        try {
          //FIXME: 로그인 상태임에도 로그인 정보(토큰)를 보내지 못함.
          const data = await applicationAPI.post(shopId, noticeId, '');

          if (data) {
            alert('신청 되었습니다.');
            setStatus('pending');

            //FIXME: 로그인 정보 전달받은 뒤에 실행 될 듯
            const applicationNoriceInfo = {
              userId: userId,
              noticeId: noticeId,
            };
            setLocalStorage('recentAplication', applicationNoriceInfo);
          }
        } catch (error) {
          console.error('Regist Failed?', error);
        }
      };
      handleTotalSubmit();
    } else {
      setModalContent('내 프로필을 등록해주세요!');
      setModalType('warning');
      openModal();
    }
  };

  /**
   * localStorage에 새로운 데이터를 저장 - storageName에 따라 넣는 값은 달라짐
   * - recentNotices : 최근에 본 공고
   * - recentAplication : 최근에 신청한 공고
   * @param storageName
   * @param storageData
   */
  const setLocalStorage = (storageName: string, storageData: {}) => {
    let localData: string[] = JSON.parse(
      localStorage.getItem(storageName) || '[]',
    );

    if (storageName === 'recentNotices') {
      localData.push(data.item);
      console.log(':::data.item:::', data.item);

      // 배열의 길이가 6 이상인 경우, 첫 번째 요소를 제거
      if (localData.length > 6) {
        localData.shift();
      }

      localStorage.setItem(storageName, JSON.stringify(localData));
    } else if (storageName === 'recentAplication') {
      //FIXME: 최근 신청한 공고 정보 저장
    }
  };

  /** 광고 신청 - 프로필 미존재 확인 클릭
   * - 프로필 미존재 시 :프로필 등록 화면 이동
   */
  const handleApplyNoticeClick = () => {
    if (!name) {
      router.push(`/registMyProfile?noticeId=${noticeId}`);
    }
  };

  /** 공고 취소 모달 오픈 */
  const handleCancelNotice = () => {
    setModalContent('신청을 취소하시겠어요?');
    setModalType('confirm');
    openModal();
  };

  /** 공고 취소 모달 - 취소 하기 버튼 클릭 */
  const handleCancelNoticeClick = () => {
    const handleCancelSubmit = async () => {
      try {
        //FIXME: 로그인 상태임에도 로그인 정보(토큰)를 보내지 못함.
        const data = await noticeAPI.put(shopId, noticeId, 'canceled');
        if (data) {
          alert('취소가 완료되었습니다.');
          setStatus('canceled');
        }
      } catch (error) {
        console.error('Regist Failed', error);
      }
    };
    handleCancelSubmit();
  };

  return (
    <>
      {getdata && (
        <div className="py-[60px] mx-[238px]">
          <Modal
            content={modalContent}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            onClose={() => {
              handleApplyNoticeClick();
              closeModal();
            }}
            onCloseCallBack={() => {
              CallbackCloseMadal();
              handleCancelNoticeClick();
            }}
            type={modalType}
          />
          <div>
            <p className="text-base font-bold text-primary">
              {getdata.shop.item.category}
            </p>
            <p className="text-[28px] font-bold">{getdata.shop.item.name}</p>
          </div>
          <div className="flex w-[963px] h-[365px] border-[1px] rounded-2xl p-6 mt-4">
            <div className="w-[640px] overflow-hidden rounded-2xl">
              <CardImage
                imageUrl={getdata.shop.item.imageUrl}
                closed={getdata.closed}
                width={550}
                height={350}
              />
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
              ) : getdata.closed ||
                status === 'rejected' ||
                status === 'accepted' ? (
                <Button
                  size="large"
                  color="none"
                  onClick={() => {}}
                  disabled={true}
                >
                  신청 불가
                </Button>
              ) : status !== 'pending' ? (
                <Button
                  size="large"
                  color="colored"
                  // TODO: 모달 오픈
                  onClick={() => {
                    handleApplyNotice();
                  }}
                  disabled={false}
                >
                  신청하기
                </Button>
              ) : (
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
