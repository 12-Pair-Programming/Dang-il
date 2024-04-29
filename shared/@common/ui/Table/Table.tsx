import React, { useState } from 'react';
import TableBody from '@/shared/@common/ui/Table/TableBody';
import TableHead from '@/shared/@common/ui/Table/TableHead';
import Pagination from '../Pagination/Pagination';

export interface TableProps {
  isEmployee: boolean;
}

const Table = ({ isEmployee }: TableProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <>
      <table className="inline-flex flex-col items-start rounded-2xl border-gray-20 border border-solid w-full">
        <TableHead isEmployee={isEmployee} />
        <TableBody isEmployee={isEmployee} />
        <Pagination
          totalPage={3}
          limit={2}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </table>
    </>
  );
};

{
  /* 
  사장님 확인 용
  <Table
  id={users.id}
  userName={users.name}
  date={data.items.item.startsAt.slice(0, 10)}
  hour={data.items.item.startsAt.slice(12)}
  hourlypay={data.items.item.notice.item.hourlyPay}
  statuses={data.items.item.status}
/>; */
}
export default Table;
