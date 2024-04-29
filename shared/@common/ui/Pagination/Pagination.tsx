import React, { useState, useEffect } from 'react';
import PaginationWrapper from './PaginationWrapper';
import FaAngleLeft from './FaAngleLeft';
import FaAngleRight from './FaAngleRight';
import ButtonWrapper from './ButtonWrapper';
import PageButton from './PageButton';
import { SetState } from '../../types/helper';

interface PaginationProps {
  totalPage: number;
  limit: number;
  currentPage: number;
  setCurrentPage: SetState<number>;
}

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

const Pagination = ({
  totalPage,
  limit,
  currentPage,
  setCurrentPage,
}: PaginationProps) => {
  const [currentPageArray, setCurrentPageArray] = useState<number[]>(
    sliceArrayByLimit(totalPage, limit, currentPage),
  );

  const handlePrevClick = () => {
    const newCurrentPage = Math.max(1, currentPage - limit);

    setCurrentPage(newCurrentPage);
    setCurrentPageArray(sliceArrayByLimit(totalPage, limit, newCurrentPage));
  };

  const handleNextClick = () => {
    const pageGroup = Math.ceil(currentPage / limit);
    const newCurrentPage = limit * pageGroup + 1;

    setCurrentPage(newCurrentPage);
    setCurrentPageArray(sliceArrayByLimit(totalPage, limit, newCurrentPage));
  };

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
