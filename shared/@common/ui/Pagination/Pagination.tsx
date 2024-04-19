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

  // const sliceArrayByLimit = (totalPage: number, limit: number) => {
  //   const totalPageArray = Array(totalPage)
  //     .fill(0)
  //     .map((_, i) => i + 1);
  //   return totalPageArray.slice(0, limit);
  // };

  const sliceArrayByLimit = (
    totalPage: number,
    limit: number,
    currentPage: number,
  ) => {
    const start = Math.max(1, currentPage - Math.floor(limit / 2));
    const end = Math.min(totalPage, start + limit - 1);
    const slicedArray = Array.from(
      { length: end - start + 1 },
      (_, index) => start + index,
    );
    return slicedArray;
  };

  useEffect(() => {
    const slicedPageArray = sliceArrayByLimit(totalPage, limit, page);
    setCurrentPageArray(slicedPageArray);
  }, [totalPage, limit, page]);

  console.log(currentPageArray);

  return (
    <PaginationWrapper>
      <ButtonWrapper>
        <FaAngleLeft onClick={() => setPage(page - 1)} disabled={page === 1} />
        {currentPageArray.length > 0 &&
          currentPageArray?.map((i) => (
            <PageButton
              key={i}
              onClick={() => setPage(i)}
              isActive={page === i}
              aria-current={page === i ? 'page' : undefined}
            >
              {i}
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
