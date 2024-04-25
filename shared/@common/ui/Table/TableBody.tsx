import React, { useState } from 'react';
import TableButton from './TableButton';

//테이블 공통화 할건지 논의해야 합니다.

const TableBody: React.FC<{
  id: string;
  name: string;
  introduce: string;
  phone: string;
  date?: number;
  hour?: number;
  hourlypay?: number;
}> = ({ id, name, introduce, phone }) => {
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
      <tbody className="flex w-full h-full items-start bg-white">
        <tr className="flex w-full">
          <td className="flex w-1/5 py-8 px-3 items-center gap-3 flex-shrink-0 self-stretch border-b-gray-20">
            {name}
          </td>
          <td className="flex w-2/5 py-5 px-3 items-center gap-3 flex-shrink-1 self-stretch border-b-gray-20">
            {/* {date}, ({hour}시간) */}
            {introduce}
          </td>
          <td className="flex w-1/5 py-5 px-4 items-center gap-3 flex-shrink-1 self-stretch border-b-gray-20">
            {/* {hourlypay} */}
            {phone}
          </td>
          <td className="flex w-1/5 py-5 px-3 items-center gap-3 flex-shrink-0 self-stretch border-b-gray-20">
            {id === 'a' ? (
              status
            ) : id === 'b' ? (
              <TableButton
                handleClick={handleChangingStatus}
                buttonVisible={buttonVisible}
                status={status}
              />
            ) : (
              <TableButton
                handleClick={handleChangingStatus}
                buttonVisible={buttonVisible}
                status={status}
              />
            )}
          </td>
        </tr>
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

const ParentComponent: React.FC = () => {
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
