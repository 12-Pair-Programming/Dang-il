import React, { useEffect, useState } from "react";
import tablebutton
import TableButton from "./TableButton";


const Table: React.FC<{
  id: any,
  userName: string,
  date: number,
  hour: number,
  hourlypay: number,
  statuses: string,
  }> = ({ 
    id,
    userName,
    date,
    hour,
    hourlypay,
    statuses
  }) => {

  // useEffect(() => {
  //   const handleTableLoad = async () => {
  //     try {
  //       const response = await getShopTable();
  //       const result = response.
  //     }
  //   }
  // })
  const [buttonVisible, setButtonVisible] = useState(true);
  const [status, setStatus] = useState('');

  const handleChangingStatus = (buttons : string) => {
    if(buttons === 'approve'){
      setStatus('승인 완료');
    } else if (buttons === 'reject'){
      setStatus('거절');
    }
    setButtonVisible(false);
  }

  useEffect(() => {
    console.log(status);
  }, [status]);



  return (
    <>
      <table className="inline-flex flex-col items-start rounded-2xl border-gray-20 border border-solid w-full">
        <thead className="flex w-full items-start bg-red-10 justify-between">
          <tr className="flex w-full">
            <th className="w-[228px] text-left py-3 px-3 gap-3 items-center flex-shrink-0">가게</th>
            <th className="w-1/4 text-left py-3 px-3 gap-3 items-center flex-shrink-1">일자</th>
            <th className="w-1/4 text-left py-3 px-3 gap-3 items-center flex-shrink-1">시급</th>
            <th className="w-1/4 text-left py-3 px-3 gap-3 items-center flex-shrink-0">상태</th>
          </tr>
        </thead>
        <tbody className="flex w-full h-full items-start bg-white">
          <tr className="flex w-full">
            <td className="flex w-[14rem] py-5 px-3 items-center gap-3 flex-shrink-0 self-stretch border-b-gray-20 ">
              {userName}
            </td>
            <td className="flex w-1/4 py-5 px-3 items-center gap-3 flex-shrink-1 self-stretch border-b-gray-20 ">{date}, ({hour}시간)</td>
            <td className="flex w-1/4 py-5 px-3 items-center gap-3 flex-shrink-1 self-stretch border-b-gray-20 ">{hourlypay}</td>
            <td className="flex w-1/4 py-5 px-3 items-center gap-3 flex-shrink-0 self-stretch border-b-gray-20 ">
              {id === 'a' ? (
                {statuses}
              ) : id === 'b' ? (
                <TableButton handleClick={handleChangingStatus} buttonVisible={buttonVisible} status={status} />
              ) : <TableButton handleClick={handleChangingStatus} buttonVisible={buttonVisible} status={status} />}
            </td>
          </tr>

        </tbody>
        {/* <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.store}</td>
              <td>{row.date}</td>
              <td>{row.hourlyPay}</td>
              <td>{row.status}</td>
            </tr>
          ))}
        </tbody> */}
      </table>
    </>
  );
};

export default Table;


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
