import { useEffect } from "react";
import React from 'react';



const Table: React.FC<{
  id: number,
  name: string,
  date: number,
  hour: number,
  hourlypay: number,
  status: string,
  }> = ({ id,
    name,
    date,
    hourlypay,
    status
  }) => {

  // useEffect(() => {
  //   const handleTableLoad = async () => {
  //     try {
  //       const response = await getShopTable();
  //       const result = response.
  //     }
  //   }
  // })

  return (
    <>
      <table className="inline-flex flex-col items-start rounded-2xl border-gray-20 border border-solid">
        <thead className="flex w-full items-start bg-red-10">
          <tr>
            <th>가게</th>
            <th>일자</th>
            <th>시급</th>
            <th>상태</th>
          </tr>
        </thead>
        <tbody className="flex w-full h-full items-start bg-white">
          for(let i=0; i<id.length; i++){
            <tr>
              <td>{name}</td>
              <td>{date}, ({hour}시간)</td>
              <td>{hourlypay}</td>
              <th>{status}</th>
            </tr>
          }

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
