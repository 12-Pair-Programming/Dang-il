import React, { useState, useEffect } from 'react';
import PaginationWrapper from './PaginationWrapper';
import FaAngleLeft from './FaAngleLeft';
import FaAngleRight from './FaAngleRight';
import ButtonWrapper from './ButtonWrapper';
import PageButton from './PageButton';

interface PaginationProps {
  totalPage: number;
  limit: number;
  currentPage?: number;
}

const Pagination = ({ totalPage, limit }: PaginationProps) => {
  const [currentPageArray, setCurrentPageArray] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const sliceArrayByLimit = (
    totalPage: number,
    limit: number,
    currentPage: number,
  ) => {
    const start = Math.max(1, currentPage - limit + 1);
    const end = Math.min(totalPage, start + limit - 1);
    return Array.from({ length: totalPage }, (_, i) => i + 1).slice(
      start - 1,
      end,
    );
  };

  const handlePrevClick = () => {
    const newCurrentPage = Math.max(1, currentPage - limit);
    setCurrentPage(newCurrentPage);
    setCurrentPageArray(sliceArrayByLimit(totalPage, limit, newCurrentPage));
  };

  const handleNextClick = () => {
    const newCurrentPage = Math.min(totalPage, currentPage + limit);
    setCurrentPage(newCurrentPage);
    setCurrentPageArray(sliceArrayByLimit(totalPage, limit, newCurrentPage));
  };

  useEffect(() => {
    const slicedPageArray = sliceArrayByLimit(totalPage, limit, currentPage);
    setCurrentPageArray(slicedPageArray);
  }, [totalPage]);

  return (
    <PaginationWrapper>
      <ButtonWrapper>
        <FaAngleLeft
          onClick={handlePrevClick}
          disabled={currentPage === 1 || currentPage !== currentPageArray[0]}
        />
        {currentPageArray.length > 0 &&
          currentPageArray?.map((i) => (
            <PageButton
              key={i}
              onClick={() => setCurrentPage(i)}
              isActive={currentPage === i}
              aria-current={currentPage === i ? 'page' : undefined}
            >
              {i}
            </PageButton>
          ))}
        <FaAngleRight
          onClick={handleNextClick}
          disabled={currentPage === totalPage || currentPage % limit !== 0}
        />
      </ButtonWrapper>
    </PaginationWrapper>
  );
};

export default Pagination;
