import React, { useState } from 'react';
import { useGetApplicationData } from '@/shared/@common/ui/Table/test/tableTest';
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
    user: {
      item: {
        item: EmployeeItemData;
      };
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
      item: {
        item: EmployerItemData;
      };
    };
  };
}

const TableBody = ({ isEmployee }: TableProps) => {
  const { data } = useGetApplicationData();

  let employee = [];
  if (data && data.items) {
    employee = data.items.map((v: EmployeeData) => v.item.user.item);
  }

  let employer = [];
  if (data && data.items) {
    employer = data.items.map((v: EmployerData) => v.item.notice.item);
  }

  const [buttonVisible, setButtonVisible] = useState(true);
  const [status, setStatus] = useState('');

  const handleChangingStatus = (buttons: string) => {
    if (buttons === 'approve') {
      setStatus('승인 완료');
    } else if (buttons === 'reject') {
      setStatus('거절');
    } else {
      setStatus('대기중');
    }
    setButtonVisible(false);
  };

  return (
    <>
      <tbody className="flex flex-col w-full h-full items-start bg-white">
        {isEmployee
          ? employee &&
            employee.map((v: EmployeeItemData) => (
              <tr className="flex w-full">
                <td
                  key={v.id}
                  className="flex w-1/4 py-8 px-3 items-center gap-3 flex-shrink-0 self-stretch border-b-gray-20"
                >
                  {v.name}
                </td>
                <td
                  key={v.id}
                  className="flex w-1/4 py-5 px-3 items-center gap-3 flex-shrink-1 self-stretch border-b-gray-20 overflow-x-scroll whitespace-pre scrollbar-hide"
                >
                  {v.bio}
                </td>
                <td
                  key={v.id}
                  className="flex w-1/4 py-5 px-4 items-center gap-3 flex-shrink-1 self-stretch border-b-gray-20 overflow-auto whitespace-pre"
                >
                  {v.phone}
                </td>
                <td className="flex w-1/4 py-5 px-3 items-center gap-3 flex-shrink-0 self-stretch border-b-gray-20 ">
                  <TableButton
                    key={v.id}
                    handleClick={handleChangingStatus}
                    buttonVisible={buttonVisible}
                    status={status}
                  />
                </td>
              </tr>
            ))
          : employer &&
            employer.map((v: EmployerItemData) => (
              <tr className="flex w-full">
                <td
                  key={v.id}
                  className="flex w-1/4 py-8 px-3 items-center gap-3 flex-shrink-0 self-stretch border-b-gray-20"
                >
                  {v.description}
                </td>
                <td
                  key={v.id}
                  className="flex w-1/4 py-5 px-3 items-center gap-3 flex-shrink-1 self-stretch border-b-gray-20 overflow-x-scroll whitespace-pre scrollbar-hide"
                >
                  {v.startsAt.slice(0, 10)} {v.startsAt.slice(12, 13)}~
                  {Number(v.startsAt.slice(12, 13)) + Number(v.workhour)}시
                </td>
                <td
                  key={v.id}
                  className="flex w-1/4 py-5 px-4 items-center gap-3 flex-shrink-1 self-stretch border-b-gray-20 overflow-auto whitespace-pre"
                >
                  {v.hourlyPay}
                </td>
                <td className="flex w-1/5 py-5 px-3 items-center gap-3 flex-shrink-0 self-stretch border-b-gray-20 overflow-auto whitespace-pre">
                  {!isEmployee ? (
                    <TableButton
                      key={v.id}
                      handleClick={handleChangingStatus}
                      buttonVisible={false}
                      status={status}
                    />
                  ) : (
                    <TableButton
                      key={v.id}
                      handleClick={handleChangingStatus}
                      buttonVisible={true}
                      status={status}
                    />
                  )}
                </td>
              </tr>
            ))}
      </tbody>
    </>
  );
};

export default TableBody;

/* Table 사용 방식
import React from 'react';
import Table from './Table'; // 테이블 컴포넌트를 가져옵니다.

interface TableRow {
  store: string;
  date: string;
  hourlyPay: number;
  status: string;
}

const ParentComponent = () => {
  // 데이터를 정의합니다.
  const data: TableRow[] = [
    { store: '가게1', date: '2024-04-17', hourlyPay: 15, status: 'Open' },
    { store: '가게2', date: '2024-04-18', hourlyPay: 20, status: 'Closed' },
    // 데이터 추가
  ];

  return (
    <div>
      { 데이터를 테이블 컴포넌트로 전달합니다. }
      <Table data={data} />
    </div>
  );
};

export default ParentComponent;

*/
