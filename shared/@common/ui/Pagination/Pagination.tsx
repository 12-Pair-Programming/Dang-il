import React, { useState, useEffect } from 'react';
import PaginationWrapper from './PaginationWrapper';
import FaAngleLeft from './FaAngleLeft';
import FaAngleRight from './FaAngleRight';
import ButtonWrapper from './ButtonWrapper';
import PageButton from './PageButton';

interface PaginationProps {
  totalPage: number;
  limit: number;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination = ({ totalPage, limit, page, setPage }: PaginationProps) => {
  const [currentPageArray, setCurrentPageArray] = useState<number[]>([]);
  const [totalPageArray, setTotalPageArray] = useState<number[]>([]);

  const sliceArrayByLimit = (totalPage: number, limit: number) => {
    const totalPageArray = Array(totalPage)
      .fill(0)
      .map((_, i) => i);
    return totalPageArray.slice(0, limit);
  };

  console.log(sliceArrayByLimit(20, 7));

  const getPageItems = (pageIndex: number, totalPage: number): number[] => {
    const startNumber = pageIndex <= 1 ? pageIndex : (pageIndex - 1) * limit;
    const lastNumber =
      startNumber + (limit - 1) > totalPage
        ? totalPage
        : startNumber + limit - 1;
    if (totalPage <= limit)
      return Array.from({ length: totalPage }, (_, i) => i + 1);
    return Array.from({ length: limit }, (_, i) => lastNumber - i).reverse();
  };

  // useEffect(() => {
  //   if (page % limit === 1) {
  //     setCurrentPageArray([totalPageArray[Math.floor(page / limit)]]);
  //   } else if (page % limit === 0) {
  //     return setCurrentPageArray([
  //       totalPageArray[Math.floor(page / limit) - 1],
  //     ]);
  //   }
  // }, [page]);

  // useEffect(() => {
  //   const slicedPageArray = sliceArrayByLimit(totalPage, limit);
  //   setTotalPageArray(slicedPageArray);
  //   setCurrentPageArray(slicedPageArray[0]);
  // }, [totalPage]);

  console.log(currentPageArray);

  return (
    <PaginationWrapper>
      <ButtonWrapper>
        <FaAngleLeft onClick={() => setPage(page - 1)} disabled={page === 1} />
        {currentPageArray.length > 0 &&
          currentPageArray?.map((i) => (
            <PageButton
              key={i + 1}
              onClick={() => setPage(i + 1)}
              aria-current={page === i + 1 ? 'page' : null}
            >
              {i + 1}
            </PageButton>
          ))}
        <FaAngleRight
          onClick={() => setPage(page + 1)}
          disabled={page === totalPage}
        />
      </ButtonWrapper>
    </PaginationWrapper>
  );
};

export default Pagination;
