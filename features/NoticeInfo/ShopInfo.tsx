import { useRouter } from 'next/router';
import HourlyPayForWon from '@/shared/@common/notice/ui/NoticePayInfo';
import NoticeTimeAndLocation from '@/shared/@common/notice/ui/NoticeTimeAndLocation';
import CardImage from '@/shared/@common/notice/ui/CardImage';
import Button from '@/shared/@common/ui/Button/Button';
import { Modal } from '@/shared/@common/ui/Modal/ModalBase';
import { useModal } from '@/shared/@common/ui/Modal/hook/modalHook';

import userAPI from '@/shared/@common/api/userAPI';
import noticeAPI from '@/shared/@common/api/noticeAPI';
import applicationAPI from '@/shared/@common/api/applicationAPI';
import useFetch from '@/shared/@common/api/hooks/useFetch';
import { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';

interface props {
  userType: string;
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
const ShopInfo = ({ userType, isLogin, shopId, noticeId }: props) => {
  const router = useRouter();

  const token =
    typeof window !== 'undefined' ? localStorage.getItem('token') : '';

  const decodedToken = token ? jwtDecode(token) : null;
  const userId = (decodedToken as any)?.userId || '';

  const [modalContent, setModalContent] = useState('');
  const [modalType, setModalType] = useState('');
  const [buttonStatus, setButtonStatus] = useState('');

  const {
    data: applicationListData,
    loading: applicationListDataLoading,
    execute: executeApplicationListDataLoading,
    error: applicationListDataError,
  } = useFetch(() => {
    return applicationAPI.getApplicationListData({
      shop_id: shopId,
      notice_id: noticeId,
    });
  });

  const userApplicationInfo = applicationListData?.items.find((item: any) => {
    return item.item.user.item.id === userId;
  })?.item;

  const {
    data: userData,
    loading: userdataLoading,
    execute: userDataExcute,
    error: userDataError,
  } = useFetch(() => {
    return userAPI.getUserData(userId);
  });

  const userName = userData?.item.name;

  useEffect(() => {
    setButtonStatus(userApplicationInfo?.status);
  }, []);

  const userApplicationId = userApplicationInfo?.id;

  const { data, loading, execute, error } = useFetch(() => {
    return noticeAPI.getShopNotice({ shops_id: shopId, notice_id: noticeId });
  });

  let getdata: Item = data;
  if (data && data.item) {
    getdata = data.item;
  }

  useEffect(() => {
    execute();
  }, [shopId, noticeId]);

  useEffect(() => {
    if (data && !loading) {
      setLocalStorage('recentNotices', data);
    }
  }, [loading]);

  const { isOpen, setIsOpen, openModal, closeModal, CallbackCloseMadal } =
    useModal({});

  const handleEditeNotice = () => {
    router.push('/noticeRegist');
  };

  /** 공고 신청 버튼 클릭 */
  const handleApplyNotice = () => {
    if (userName) {
      const handleTotalSubmit = async () => {
        try {
          const data = await applicationAPI.post(shopId, noticeId, '');

          if (data) {
            alert('신청 되었습니다.');
            setButtonStatus('pending');
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

      // 배열의 길이가 6 이상인 경우, 첫 번째 요소를 제거
      if (localData.length > 6) {
        localData.shift();
      }

      localStorage.setItem(storageName, JSON.stringify(localData));
    }
  };

  /** 공고 신청 - 프로필 미존재 확인 클릭
   * - 프로필 미존재 시 :프로필 등록 화면 이동
   */
  const handleApplyNoticeClick = () => {
    if (!userName) {
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
        const data = await applicationAPI.put(
          shopId,
          noticeId,
          userApplicationId,
          { status: 'canceled' },
        );
        if (data) {
          alert('취소가 완료되었습니다.');
          setButtonStatus('cancel');
        }
      } catch (error) {
        console.error('Regist Failed', error);
      }
    };
    handleCancelSubmit();
  };

  let isButtonColor: 'colored' | 'none' = 'colored';
  let isButtonDisabled = false;
  let isButtonText = '신청하기';

  if (data && !loading) {
    switch (true) {
      case userType === 'employer':
        isButtonText = '공고 편집';
        isButtonColor = 'none';
        break;
      case getdata.closed ||
        !isLogin ||
        buttonStatus === 'rejected' ||
        buttonStatus === 'accepted':
        isButtonText = '신청 불가';
        isButtonDisabled = true;
        break;
      case buttonStatus !== 'pending':
        isButtonText = '신청하기';
        break;
      default:
        isButtonText = '취소하기';
        isButtonColor = 'none';
        break;
    }
  }

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

              <Button
                size="large"
                color={isButtonColor}
                onClick={() => {
                  switch (true) {
                    case userType === 'employer':
                      handleEditeNotice();
                      break;
                    case buttonStatus !== 'pending':
                      handleApplyNotice();
                      break;
                    default:
                      handleCancelNotice();
                      break;
                  }
                }}
                disabled={isButtonDisabled}
              >
                {isButtonText}
              </Button>
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
