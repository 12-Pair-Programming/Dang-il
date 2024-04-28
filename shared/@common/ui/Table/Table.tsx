import React, { useState } from 'react';
import TableBody from '@/shared/@common/ui/Table/TableBody';
import TableHead from '@/shared/@common/ui/Table/TableHead';
import TableBody2 from './2';

export interface TableProps {
  isEmployee: boolean;
}

const Table = ({ isEmployee }: TableProps) => {
  return (
    <>
      <table className="inline-flex flex-col items-start rounded-2xl border-gray-20 border border-solid w-full">
        <TableHead isEmployee={isEmployee} />
        <TableBody2 isEmployee={isEmployee} />
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
