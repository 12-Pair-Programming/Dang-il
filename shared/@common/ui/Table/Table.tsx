import React, { useState } from 'react';
import useFetch from '../../api/hooks/useFetch';
import applicationAPI from '../../api/applicationAPI';
import TableBody from '@/shared/@common/ui/Table/TableBody';
import TableHead from '@/shared/@common/ui/Table/TableHead';
import Pagination from '@/shared/@common/ui/Pagination/Pagination';
import { userData } from '@/features/MyProfileInfo/FindProfile';

export interface TableProps {
  isEmployee: boolean;
  shopId?: string;
  noticeId?: string;
  user?: userData;
  offset?: number;
  limit?: number;
}

const ITEM_PER_PAGE = 4;

const Table = ({ isEmployee, shopId, noticeId, user }: TableProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const listOffset = (currentPage - 1) * ITEM_PER_PAGE;
  const { data, loading, error, execute } = useFetch(() => {
    return applicationAPI.getApplicationListData({
      shop_id: shopId as string,
      notice_id: noticeId as string,
      offset: listOffset,
      limit: ITEM_PER_PAGE,
    });
  });

  return (
    <>
      {data && data.count && (
        <table className="inline-flex flex-col items-start rounded-2xl border-gray-20 border border-solid w-full">
          <TableHead isEmployee={isEmployee} user={user} />
          <TableBody
            isEmployee={isEmployee}
            shopId={shopId}
            noticeId={noticeId}
            user={user}
          />
          <Pagination
            totalPage={data.count}
            limit={data.count / ITEM_PER_PAGE}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </table>
      )}
    </>
  );
};

export default Table;
