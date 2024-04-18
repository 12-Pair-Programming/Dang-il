import React, { useState, useEffect } from 'react';
import PaginationWrapper from './PaginationWrapper';
import FaAngleLeft from './FaAngleLeft';
import FaAngleRight from './FaAngleRight';
import ButtonWrapper from './ButtonWrapper';
import PageButton from './PageButton';
import fetchNoticeData from '../../notice/api/fetchNoticeData';
import { NoticeData } from '../../notice/api/fetchNoticeData';

interface PaginationProps {
  totalPage: number;
  limit: number;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  data?: NoticeData[];
}

const Pagination = ({
  totalPage,
  limit,
  page,
  setPage,
  data,
}: PaginationProps) => {
  const [currentPageArray, setCurrentPageArray] = useState<number[]>([]);
  const [totalPageArray, setTotalPageArray] = useState<number[]>([]);
  const sliceArrayByLimit = (totalPageArray: number[], limit: number) => {
    totalPageArray.slice(0, limit);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchNoticeData();
        setPage(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (page % limit === 1) {
      return setCurrentPageArray([totalPageArray[Math.floor(page / limit)]]);
    }
    if (page % limit === 0) {
      return setCurrentPageArray([
        totalPageArray[Math.floor(page / limit) - 1],
      ]);
    }
  }, [page]);

  console.log(totalPageArray);
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
