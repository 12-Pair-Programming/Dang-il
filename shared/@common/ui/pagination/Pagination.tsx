import React, { useState, useEffect } from 'react';
import PaginationWrapper from './PaginationWrapper';

interface PaginationProps {
  totalPage: number;
  limit: number;
  page: number;
  setPage: number;
}

const Pagination = ({ totalPage, limit, page, setPage }: PaginationProps) => {
  const [currentPageArray, setCurrentPageArray] = useState([]);
  const [totalPageArray, setTotalPageArray] = useState<>([]);
  const sliceArrayByLimit = (totalPageArray, limit) => {
    totalPageArray.slice(0, limit);
  };

  useEffect(() => {
    if (page % limit === 1) {
      return setCurrentPageArray(totalPageArray[Math.floor(page / limit)]);
    }
    if (page % limit === 0) {
      return setCurrentPageArray(totalPageArray[Math.floor(page / limit) - 1]);
    }
  }, [page]);

  useEffect(() => {
    const slicedPageArray = sliceArrayByLimit(totalPageArray, limit);
    setTotalPageArray(slicedPageArray);
    setCurrentPageArray(slicedPageArray[0]);
  }, [totalPage]);

  return <PaginationWrapper></PaginationWrapper>;
};

export default Pagination;
