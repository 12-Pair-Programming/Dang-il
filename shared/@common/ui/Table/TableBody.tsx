import React from 'react';
import useFetch from '../../api/hooks/useFetch';
import applicationAPI from '../../api/applicationAPI';
import TableButton from './TableButton';
import { TableProps } from './Table';

interface EmployeeItemData {
  id: string;
  name: string;
  bio: string;
  phone: string;
}

interface EmployeeData {
  item: {
    status: string;
    id: string;
    user: {
      item: EmployeeItemData;
    };
  };
}

interface EmployerItemData {
  id: string;
  name: string;
  startsAt: string;
  hourlyPay: number;
  workhour: number;
  description: string;
}

interface EmployerData {
  item: {
    notice: {
      item: EmployerItemData;
    };
    status: string;
  };
}

const TableBody = ({ isEmployee, shopId, noticeId, user }: TableProps) => {
  const { data, loading, error, execute } = useFetch(() => {
    return applicationAPI.getApplicationListData({
      shop_id: shopId as string,
      notice_id: noticeId as string,
    });
  });

  const applicationId = user && user.id;

  const { data: applicationsData } = useFetch(() => {
    return applicationAPI.getApplicationData(applicationId as string);
  });

  const status = 'accepted' || 'rejected' || 'canceled';

  return (
    <tbody className="flex flex-col w-full h-full items-start bg-white">
      {isEmployee
        ? data &&
          shopId &&
          noticeId &&
          data.items.slice(0, 4).map((v: EmployeeData) => (
            <tr className="flex w-full">
              <td
                key={v.item.user.item.id}
                className="flex w-1/4 py-8 px-3 items-center gap-3 flex-shrink-0 self-stretch border-b-gray-20"
              >
                {v.item.user.item.name}
              </td>
              <td
                key={v.item.user.item.id}
                className="flex w-1/4 py-5 px-3 items-center gap-3 flex-shrink-1 self-stretch border-b-gray-20 overflow-x-scroll whitespace-pre scrollbar-hide"
              >
                {v.item.user.item.bio}
              </td>
              <td
                key={v.item.user.item.id}
                className="flex w-1/4 py-5 px-4 items-center gap-3 flex-shrink-1 self-stretch border-b-gray-20 overflow-auto whitespace-pre"
              >
                {v.item.user.item.phone}
              </td>
              <td className="flex w-1/4 py-5 px-3 items-center gap-3 flex-shrink-0 self-stretch border-b-gray-20 ">
                <TableButton
                  key={v.item.user.item.id}
                  onClick={() => {
                    applicationAPI.put(
                      shopId as string,
                      noticeId as string,
                      v.item.id,
                      status,
                    );
                  }}
                />
              </td>
            </tr>
          ))
        : applicationsData &&
          applicationsData.items.slice(0, 4).map((v: EmployerData) => (
            <tr className="flex w-full">
              <td
                key={v.item.notice.item.id}
                className="flex w-1/4 py-8 px-3 items-center gap-3 flex-shrink-0 self-stretch border-b-gray-20"
              >
                {v.item.notice.item.description}
              </td>
              <td
                key={v.item.notice.item.id}
                className="flex w-1/4 py-5 px-3 items-center gap-3 flex-shrink-1 self-stretch border-b-gray-20 overflow-x-scroll whitespace-pre scrollbar-hide"
              >
                {v.item.notice.item.startsAt.slice(0, 10)}{' '}
                {v.item.notice.item.startsAt.slice(12, 13)}~
                {Number(v.item.notice.item.startsAt.slice(12, 13)) +
                  Number(v.item.notice.item.workhour)}
                시
              </td>
              <td
                key={v.item.notice.item.id}
                className="flex w-1/4 py-5 px-4 items-center gap-3 flex-shrink-1 self-stretch border-b-gray-20 overflow-auto whitespace-pre"
              >
                {v.item.notice.item.hourlyPay}
              </td>
              <td className="flex w-1/5 py-5 px-3 items-center gap-3 flex-shrink-0 self-stretch border-b-gray-20 overflow-auto whitespace-pre">
                {v.item.status ? (
                  <p
                    className={`p-4 ${
                      v.item.status === 'accepted'
                        ? 'bg-blue-10 text-blue-20'
                        : v.item.status === 'rejected'
                          ? 'bg-purple-20 text-purple-40'
                          : 'bg-green-10 text-green-600'
                    } flex py-1 px-2 content-center items-center rounded-2xl font-bold text-sm`}
                  >
                    {v.item.status === 'accepted'
                      ? '승인 완료'
                      : v.item.status === 'rejected'
                        ? '거절'
                        : '대기중'}
                  </p>
                ) : (
                  <p className="p-4 flex py-1 px-2 content-center items-center rounded-2xl font-bold text-sm bg-green-10 text-green-20">
                    대기중
                  </p>
                )}
              </td>
            </tr>
          ))}
    </tbody>
  );
};

export default TableBody;
