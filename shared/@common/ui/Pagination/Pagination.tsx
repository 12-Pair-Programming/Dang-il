import React, { useState, useEffect } from 'react';
import PaginationWrapper from './PaginationWrapper';
import FaAngleLeft from './FaAngleLeft';
import FaAngleRight from './FaAngleRight';
import ButtonWrapper from './ButtonWrapper';
import PageButton from './PageButton';

interface PaginationProps {
  totalPage: number;
  limit: number;
}
/*
1. FaAngleLeft:
페이지 인덱스가 1일 때 disabled 된다.
현재 페이지 인덱스가 11이고, limit가 10일 때 해당 버튼 클릭 시 1~10 리스트를 보여준다.

2. FaAngleRight:
현재 페이지 인덱스가 10이고, limit가 10일 때 해당 버튼 클릭 시 11~20 리스트를 보여준다.
전체 페이지가 100이고, 현재 페이지 인덱스가 전체 페이지 - limit 보다 클 때 버튼이 disabled 된다.

3. 페이지 버튼 클릭 시
해당 페이지 버튼이 focus
*/

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
  console.log(currentPageArray);
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
