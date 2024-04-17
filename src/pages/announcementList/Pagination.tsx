import React, { useState, useEffect } from 'react';

const Pagination = ({ totalPage, limit, page, setPage }) => {
  const [currentPageArray, setCurrentPageArray] = useState([]);
  const [totalPageArray, setTotalPageArray] = useState([]);
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

  return ();
};

export default Pagination;
