import React, { useState } from 'react';
import Pagination from './Pagination';

const PaginationBar = () => {
  const [page, setPage] = useState<number>(0);
  return (
    <>
      <Pagination totalPage={21} limit={7} page={page} setPage={setPage} />
    </>
  );
};

export default PaginationBar;
