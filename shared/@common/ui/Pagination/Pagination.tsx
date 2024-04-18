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
  const [currentPageArray, setCurrentPageArray] = useState([]);
  const [totalPageArray, setTotalPageArray] = useState([]);
  const sliceArrayByLimit = (
    totalPageArray: string | number[],
    limit: number,
  ) => {
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

  return (
    <PaginationWrapper>
      <ButtonWrapper>
        <FaAngleLeft onClick={() => setPage(page - 1)} disabled={page === 1} />
        {/* {currentPageArray?.map((i) => (
          <PageButton
            key={i + 1}
            onClick={() => setPage(i + 1)}
            aria-current={page === i + 1 ? 'page' : null}
          >
            {i + 1}
          </PageButton>
        ))} */}
        <PageButton>1</PageButton>
        <PageButton>2</PageButton>
        <PageButton>3</PageButton>
        <PageButton>4</PageButton>
        <PageButton>5</PageButton>
        <PageButton>6</PageButton>
        <PageButton>7</PageButton>
        <PageButton>8</PageButton>
        <FaAngleRight
          onClick={() => setPage(page + 1)}
          disabled={page === totalPage}
        />
      </ButtonWrapper>
    </PaginationWrapper>
  );
};

export default Pagination;
