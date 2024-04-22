import React, { useState } from 'react';
import Pagination from '../../shared/@common/ui/Pagination/Pagination';

const PaginationBar = () => {
  return (
    <>
      <Pagination totalPage={21} limit={7} />
    </>
  );
};

export default PaginationBar;
