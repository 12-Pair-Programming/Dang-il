const EmployeeList = () => {
  // TODO: 목업 데이터 실제 데이터로 변경 필요
  // /shops/{shop_id}/notices/{notice_id}/applications

  const applications = {
    offset: 0,
    limit: 10,
    count: 3,
    hasNext: false,
    items: [
      {
        item: {
          id: '6092a281-9f5a-49d1-9e8f-5be39a954d5d',
          status: 'accepted',
          createdAt: '2023-07-20T13:19:00.163Z',
          user: {
            item: {
              id: 'fee3f644-3046-4f56-b66c-579d256dc8b4',
              email: 'pp@pp.com',
              type: 'employee',
              name: '김강현',
              phone: '010-2222-3334',
              address: '서울시 용산구',
              bio: '최선을 다해 열심히 일합니다. 다수의 업무 경험을 바탕으로 확실한 일처리 보여드',
            },
            href: '/api/0-1/the-julge/users/fee3f644-3046-4f56-b66c-579d256dc8b4',
          },
          shop: {
            item: {
              id: '1ca5bd34-2cc0-4ae3-b94e-c461d2e3e6f9',
              name: '우리 맛있어요!!',
              category: '중식',
              address1: '서울시 용산구',
              address2: '예예빌라',
              description: '저희 진짜 맛있어요. ㅎㅎ!!!',
              imageUrl:
                'https://bootcamp-project-api.s3.ap-northeast-2.amazonaws.com/0-1/the-julge/b796561c-5515-4ad8-a252-5e2459e49efd-fGVXc8_qrcode.png',
              originalHourlyPay: 200000,
            },
            href: '/api/0-1/the-julge/shops/1ca5bd34-2cc0-4ae3-b94e-c461d2e3e6f9',
          },
          notice: {
            item: {
              id: '9ce03c73-3218-4c2a-a130-223b0c9a1498',
              hourlyPay: 15000,
              description: '직원구합니다',
              startsAt: '2023-07-20T15:00:00.000Z',
              workhour: 3,
              closed: true,
            },
            href: '/api/0-1/the-julge/shops/1ca5bd34-2cc0-4ae3-b94e-c461d2e3e6f9/notices/9ce03c73-3218-4c2a-a130-223b0c9a1498',
          },
        },
        links: [
          {
            rel: 'update',
            description: '지원 승인/거절',
            method: 'PUT',
            href: '/api/0-1/the-julge/shops/1ca5bd34-2cc0-4ae3-b94e-c461d2e3e6f9/notices/9ce03c73-3218-4c2a-a130-223b0c9a1498/applications/6092a281-9f5a-49d1-9e8f-5be39a954d5d',
            body: {
              status: 'rejected',
            },
          },
        ],
      },
      {
        item: {
          id: '68fe0f67-29ed-49b0-8b0c-5a2a46e127f8',
          status: 'canceled',
          createdAt: '2023-07-20T13:12:45.457Z',
          user: {
            item: {
              id: 'fee3f644-3046-4f56-b66c-579d256dc8b4',
              email: 'pp@pp.com',
              type: 'employee',
              name: '이예서',
              phone: '010-1234-1212',
              address: '서울시 용산구',
              bio: '아르바이트를 구하고 있어요. 소개 수정 중입니다.',
            },
            href: '/api/0-1/the-julge/users/fee3f644-3046-4f56-b66c-579d256dc8b4',
          },
          shop: {
            item: {
              id: '1ca5bd34-2cc0-4ae3-b94e-c461d2e3e6f9',
              name: '우리 맛있어요!!',
              category: '중식',
              address1: '서울시 용산구',
              address2: '예예빌라',
              description: '저희 진짜 맛있어요. ㅎㅎ!!!',
              imageUrl:
                'https://bootcamp-project-api.s3.ap-northeast-2.amazonaws.com/0-1/the-julge/b796561c-5515-4ad8-a252-5e2459e49efd-fGVXc8_qrcode.png',
              originalHourlyPay: 200000,
            },
            href: '/api/0-1/the-julge/shops/1ca5bd34-2cc0-4ae3-b94e-c461d2e3e6f9',
          },
          notice: {
            item: {
              id: '9ce03c73-3218-4c2a-a130-223b0c9a1498',
              hourlyPay: 15000,
              description: '직원구합니다',
              startsAt: '2023-07-20T15:00:00.000Z',
              workhour: 3,
              closed: true,
            },
            href: '/api/0-1/the-julge/shops/1ca5bd34-2cc0-4ae3-b94e-c461d2e3e6f9/notices/9ce03c73-3218-4c2a-a130-223b0c9a1498',
          },
        },
        links: [
          {
            rel: 'update',
            description: '지원 승인/거절',
            method: 'PUT',
            href: '/api/0-1/the-julge/shops/1ca5bd34-2cc0-4ae3-b94e-c461d2e3e6f9/notices/9ce03c73-3218-4c2a-a130-223b0c9a1498/applications/68fe0f67-29ed-49b0-8b0c-5a2a46e127f8',
            body: {
              status: 'accepted',
            },
          },
        ],
      },
      {
        item: {
          id: '4aebebca-2d40-4fc9-b500-6bc51c24b681',
          status: 'rejected',
          createdAt: '2023-07-20T13:09:45.922Z',
          user: {
            item: {
              id: 'fee3f644-3046-4f56-b66c-579d256dc8b4',
              email: 'pp@pp.com',
              type: 'employee',
              name: '백강현',
              phone: '010-2311-2222',
              address: '서울시 용산구',
              bio: '아르바이트를 구하고 있어요. 소개 수정 중입니다.',
            },
            href: '/api/0-1/the-julge/users/fee3f644-3046-4f56-b66c-579d256dc8b4',
          },
          shop: {
            item: {
              id: '1ca5bd34-2cc0-4ae3-b94e-c461d2e3e6f9',
              name: '우리 맛있어요!!',
              category: '중식',
              address1: '서울시 용산구',
              address2: '예예빌라',
              description: '저희 진짜 맛있어요. ㅎㅎ!!!',
              imageUrl:
                'https://bootcamp-project-api.s3.ap-northeast-2.amazonaws.com/0-1/the-julge/afebf6d2-a410-4dba-84bc-c123468d7905-dump%20image.png',
              originalHourlyPay: 200000,
            },
            href: '/api/0-1/the-julge/shops/1ca5bd34-2cc0-4ae3-b94e-c461d2e3e6f9',
          },
          notice: {
            item: {
              id: '9ce03c73-3218-4c2a-a130-223b0c9a1498',
              hourlyPay: 15000,
              description: '직원구합니다',
              startsAt: '2023-07-20T15:00:00.000Z',
              workhour: 3,
              closed: true,
            },
            href: '/api/0-1/the-julge/shops/1ca5bd34-2cc0-4ae3-b94e-c461d2e3e6f9/notices/9ce03c73-3218-4c2a-a130-223b0c9a1498',
          },
        },
        links: [
          {
            rel: 'update',
            description: '지원 승인/거절',
            method: 'PUT',
            href: '/api/0-1/the-julge/shops/1ca5bd34-2cc0-4ae3-b94e-c461d2e3e6f9/notices/9ce03c73-3218-4c2a-a130-223b0c9a1498/applications/4aebebca-2d40-4fc9-b500-6bc51c24b681',
            body: {
              status: 'pending',
            },
          },
        ],
      },
    ],
    links: [
      {
        rel: 'self',
        description: '현재 페이지',
        method: 'GET',
        href: '/api/0-1/the-julge/shops/1ca5bd34-2cc0-4ae3-b94e-c461d2e3e6f9/notices/9ce03c73-3218-4c2a-a130-223b0c9a1498/applications?offset=0&limit=10',
      },
      {
        rel: 'prev',
        description: '이전 페이지',
        method: 'GET',
        href: '/api/0-1/the-julge/shops/1ca5bd34-2cc0-4ae3-b94e-c461d2e3e6f9/notices/9ce03c73-3218-4c2a-a130-223b0c9a1498/applications?offset=0&limit=10',
      },
      {
        rel: 'next',
        description: '다음 페이지',
        method: 'GET',
        href: '/api/0-1/the-julge/shops/1ca5bd34-2cc0-4ae3-b94e-c461d2e3e6f9/notices/9ce03c73-3218-4c2a-a130-223b0c9a1498/applications?offset=10&limit=10',
      },
      {
        rel: 'create',
        description: '지원하기',
        method: 'POST',
        href: '/api/0-1/the-julge/shops/1ca5bd34-2cc0-4ae3-b94e-c461d2e3e6f9/notices/9ce03c73-3218-4c2a-a130-223b0c9a1498/applications',
      },
      {
        rel: 'shop',
        description: '가게 정보',
        method: 'GET',
        href: '/api/0-1/the-julge/shops/1ca5bd34-2cc0-4ae3-b94e-c461d2e3e6f9',
      },
      {
        rel: 'notice',
        description: '공고 정보',
        method: 'GET',
        href: '/api/0-1/the-julge/shops/1ca5bd34-2cc0-4ae3-b94e-c461d2e3e6f9/notices/9ce03c73-3218-4c2a-a130-223b0c9a1498',
      },
    ],
  };

  return (
    <div className="w-[963px] mt-[60px] mb-3 mx-[238px]">
      <div>
        <p className="text-[28px] font-bold">신청자 목록</p>
      </div>
      <div className="mt-8 flex gap-[14px] flex-wrap">
        <div className="flex flex-row w-full justify-between">
          <p>신청자</p>
          <p>소개</p>
          <p>전화번호</p>
          <p>상태</p>
        </div>
        {applications?.items.map((application) => (
          <div className="flex flex-row w-full  justify-between">
            <p>{application.item.user.item.name}</p>
            <p>{application.item.user.item.bio}</p>
            <p>{application.item.user.item.phone}</p>
            <p>{application.links[0].body.status}</p>
            {/* <p>{application.links[0].href}</p> */}
            {/* href : 가게의 특정 공고 지원 승인, 거절 또는 취소. "status": accepted | rejected */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeeList;
