import React, { useState } from 'react';
import Pagination from '../../shared/@common/ui/Pagination/Pagination';
import PageButton from '@/shared/@common/ui/Pagination/PageButton';

const PaginationBar = () => {
  const [page, setPage] = useState(0);
  return (
    <>
      <Pagination totalPage={21} limit={7} page={page} setPage={setPage} />
    </>
  );
};

export default PaginationBar;
